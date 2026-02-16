"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputOtp } from "primereact/inputotp";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CheckCircle } from "lucide-react";
import { BiGlobe } from "react-icons/bi";
import { axiosInstance } from "@/lib/axios";

const page = () => {
  // real time validation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  // resend attempt tracking
  const [resendAttempts, setResendAttempts] = useState(0);
  const MAX_ATTEMPTS = 5;
  const otpRef = useRef(null);
  // lock for 1 hour (3600 sec)
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(3600);

  useEffect(() => {
    if (showOtpInput && !isPhoneVerified) {
      if (timer > 0) {
        const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
        return () => clearInterval(countdown);
      } else {
        setCanResend(true);
      }
    }
  }, [timer, showOtpInput, isPhoneVerified]);

  // Validation logic remains identical
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "First name should contain only letters";
        break;

      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "Last name should contain only letters";
        break;

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return "Invalid email format";
        break;

      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9]{10}$/.test(value)) return "Phone number must be 10 digits";
        break;

      case "companyName":
        if (!value.trim()) return "Company name is required";
        break;

      case "service":
        if (!value.trim()) return "Please select a service";
        break;

      case "message":
        if (!value.trim()) return "Message field cannot be empty";
        if (value.trim().length < 30)
          return "Message must be at least 30 characters long";
        break;

      default:
        return "";
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = name === "resume" ? files[0] : value;

    if (
      (name === "firstName" || name === "lastName") &&
      /[^a-zA-Z\s]/.test(newValue)
    ) {
      return;
    }

    if (name === "phone" && /[^0-9]/.test(newValue)) {
      return;
    }

    setFormData({ ...formData, [name]: newValue });

    if (touched[name]) {
      const error =
        name === "resume"
          ? !files?.[0]
            ? "Please upload your resume"
            : files[0].size > 2 * 1024 * 1024
              ? "File size should not exceed 2MB"
              : ""
          : validateField(name, newValue);

      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched({ ...touched, [name]: true });

    const error = validateField(name, formData[name]);

    setErrors({ ...errors, [name]: error });

    if (error) {
      toast.error(error);
    }
  };


  const handleVerifyClick = async () => {
    if (isSendingOtp) return;

    if (!formData.phone || formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }


    setShowOtpInput(true);
    setTimer(30);
    setCanResend(false);

    try {
      setIsSendingOtp(true);

      const payload = {
        mobile: formData.phone,
      };

      const res = await axiosInstance.post("/otp/sendOtp", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to send OTP");


        setShowOtpInput(false);
        return;
      }

      toast.success("OTP sent successfully!");
      if (res?.data?.otpId) {
        setOtpId(res.data.otpId);
      }
    } catch (err) {
      toast.error("Failed to send OTP. Try again.");

      setShowOtpInput(false);

    } finally {
      setIsSendingOtp(false);
    }
  };



  const handleOtpVerify = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    if (!otpId) {
      toast.error("OTP expired. Please resend OTP.");
      return;
    }

    try {
      const payload = {
        mobile: formData.phone,
        otp,
        otpId,
      };

      const res = await axiosInstance.post("/otp/verifyOtp", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Invalid OTP");
        return;
      }

      toast.success("Phone number verified successfully!");

      setIsPhoneVerified(true);
      setShowOtpInput(false);
      setOtp("");
      setOtpId(null); // reset

    } catch (err) {
      toast.error("OTP verification failed. Try again.");
    }
  };


  useEffect(() => {
    if (showOtpInput) {
      setTimeout(() => {
        otpRef.current?.focus();
      }, 200);
    }
  }, [showOtpInput]);


  const handleResendOtp = () => {
    if (isLocked) {
      toast.error(
        "You have reached the resend OTP limit! Please try again after 1 hour..."
      );
      return;
    }

    // If attempts reached
    if (resendAttempts >= MAX_ATTEMPTS) {
      setIsLocked(true);
      setCanResend(false);
      toast.error(
        "You have reached the resend OTP limit! Please try again after 1 hour..."
      );
      return;
    }


    const remaining = MAX_ATTEMPTS - (resendAttempts + 1);

    setOtp("");
    setTimer(30);
    setCanResend(false);

    setResendAttempts((prev) => prev + 1);

    toast.success(
      remaining > 0
        ? `OTP resent successfully! ${remaining} attempts remaining`
        : "you have reached resend OTP limit! Please try again after 1 hour..."
    );


    if (remaining === 0) {
      setIsLocked(true);
    }
  };


  useEffect(() => {
    if (isLocked) {
      if (lockTimer > 0) {
        const t = setInterval(() => {
          setLockTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(t);
      } else {
        setIsLocked(false);
        setResendAttempts(0);
        setLockTimer(3600);
      }
    }
  }, [isLocked, lockTimer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const validationErrors = validateAll();

      if (Object.keys(validationErrors).length > 0) {
        const firstError = Object.values(validationErrors)[0];
        toast.error(firstError);
        setErrors(validationErrors);
        return;
      }

      if (!isPhoneVerified) {
        toast.error("Please verify your phone number before submitting.");
        return;
      }

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.phone,
        companyName: formData.companyName,
        service: formData.service,
        message: formData.message,
        source: "contact",
      };

      const res = await axiosInstance.post("/enquiry/contact", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Something Went Wrong.");
        return;
      }

      toast.success("Form submitted successfully!");


      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "",
        message: "",
      });

      setErrors({});
      setTouched({});
      setOtp("");
      setShowOtpInput(false);
      setIsPhoneVerified(false);
      setResendAttempts(0);
      setTimer(30);
      setCanResend(false);
      setIsLocked(false);
      setLockTimer(3600);

    } catch (error) {
      toast.error("Something Went Wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 lg:py-10 px-6 lg:px-10 space-y-10 ">
        <div className="w-full flex flex-col items-center gap-4 text-center lg:text-left">
          {/* <p className="poppins text-[13px] sm:text-[15px] open-sans  bg-[#3e66f3] text-white sub-heading font-bold px-4 py-1 rounded-full uppercase mb-3 ">
              Contact-Us
            </p> */}

          <h1 className="poppins text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl text-center font-semibold leading-tight text-gray-900 ">
            Let’s build something
            <span className="text-[#3e66f3] lg:block "> Great Together. </span>
          </h1>

          <p className="open-sans text-sm sm:text-base md:text-lg text-center max-w-xl  text-gray-700 leading-relaxed">
            We value meaningful collaboration by listening carefully understanding your goals and creating solutions that are truly tailored to your needs.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2 bg-white relative">
          <div
            className="relative bg-cover bg-no-repeat  bg-center text-white"
            style={{ backgroundImage: 'url("/images/contactUsBg.jpg")' }}
          >
            <div className="relative z-10 space-y-12 py-10 px-6 lg:px-12">
              <div className="flex flex-col gap-4">
                <h3 className="poppins text-[22px]  underline    font-medium  mb-2 ">
                  {" "}
                  Proactive Professional Services Pvt Ltd{" "}
                </h3>

                {/* website */}
                <div className="flex gap-3 group  ">
                  {/* website Icon */}
                  <BiGlobe className="text-[16px] md:text-[18px] mt-2" />

                  {/* website Address */}
                  <div className="flex flex-col">
                    <Link
                      target="_blank"
                      href="https://www.proactivedigital.in/"
                      className="open-sans text-lg group-hover:underline transition-all duration-200"
                    >
                      www.proactivedigital.in
                    </Link>
                  </div>
                </div>
                {/* website */}
                <div className="flex gap-3 group  ">
                  {/* website Icon */}
                  <BiGlobe className="text-[16px] md:text-[18px] mt-2" />

                  {/* website Address */}
                  <div className="flex flex-col">
                    <Link
                      target="_blank"
                      href="https://celitix.com/"
                      className="open-sans text-lg group-hover:underline transition-all duration-200"
                    >
                      www.celitix.com
                    </Link>
                  </div>
                </div>

                {/* Address */}

                <div className="flex gap-3 group  ">
                  <FaMapMarkerAlt className="text-[18px] md:text-[18px] mt-1" />
                  {/* Address */}
                  <div className="flex flex-col">
                    <a
                      href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                      className="open-sans  text-lg group-hover:underline transition-all duration-200 "
                    >
                      Third Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
                      Metro Pillar No. 75, Jaipur, Rajasthan 302019
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 group ">
                  <FaMapMarkerAlt className="text-[18px] md:text-[18px] mt-1" />
                  {/* Address */}
                  <div className="flex flex-col">
                    <p className="open-sans  text-lg ">
                      F-9 Usha Chambers, Deep Central Market, Ashok Vihar,
                      Phase-1, Delhi, (India). Pin - 110052
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 group ">
                  <FaMapMarkerAlt className="text-[18px] md:text-[18px] mt-1" />
                  {/* Address */}
                  <div className="flex flex-col">
                    <p className="open-sans  text-lg ">
                      Avani Oxford Phase 1136 Jessore Road, Kolkata - 700055
                    </p>
                  </div>
                </div>

                {/* phone  */}

                <div className="flex gap-3 group  ">
                  {/* Phone Icon */}
                  <FaPhone className=" text-[16px] md:text-[18px] mt-1 " />

                  {/* Contact Number and Timing */}
                  <div className="flex flex-col">
                    <a
                      href="tel:+919680006460"
                      className="open-sans  text-lg group-hover:underline transition-all duration-200"
                    >
                      +91 - 96800-06460
                    </a>
                    <span className="open-sans text-sm text-white ">
                      Monday-Saturday 10am - 7pm
                    </span>
                  </div>
                </div>
                {/* phone  */}

                <div className="flex gap-3 group  ">
                  {/* Phone Icon */}
                  <FaPhone className=" text-[16px] md:text-[18px] mt-1 " />

                  {/* Contact Number and Timing */}
                  <div className="flex flex-col">
                    <a
                      href="tel:+919251006460"
                      className="open-sans  text-lg group-hover:underline transition-all duration-200"
                    >
                      +91 - 92510 06460
                    </a>
                    <span className="open-sans text-sm text-white ">
                      Monday-Saturday 10am - 7pm
                    </span>
                  </div>
                </div>

                {/* email */}
                <div className="flex gap-3 group  ">
                  {/* Email Icon */}
                  <MdOutlineEmail className="text-[16px] md:text-[18px] mt-2" />

                  {/* Email Address */}
                  <div className="flex flex-col">
                    <a
                      href="mailto:support@proactivesms.in"
                      className="open-sans text-lg group-hover:underline transition-all duration-200"
                    >
                      support@proactivesms.in
                    </a>
                    <span className="open-sans text-sm text-white">
                      We’ll respond within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div
            className="w-full space-y-6 bg-white p-4 shadow-sm md:p-6 lg:p-10 "
            id="form"
          >
            <h2 className="poppins text-[30px] md:text-[35px] heading text-center">
              Lets's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                {" "}
                Connect{" "}
              </span>
            </h2>
            <div className=" ">
              {/* form with resebd otp button  */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* first & last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      //    className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none 
                      //     ${
                      //       errors.message ? "border-red-500" : "border-gray-300"
                      //     } focus:border-[#3e66f3]`}
                      //   />
                      //   <label
                      //     htmlFor="message"
                      //     className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                      //   >
                      //     How can we help you?
                      //   </label>
                      // </div>
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:border-[#3e66f3] focus:outline-none
                            ${errors.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                        } `}
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      First Name
                    </label>
                  </div>

                  {/* Last Name */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none
        ${errors.lastName ? "border-red-500" : "border-gray-300"} 
        focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="lastName"
                      // className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none 
      ${errors.email ? "border-red-500" : "border-gray-300"} 
      focus:border-[#3e66f3]`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div className="relative w-full">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={10}
                        placeholder=" "
                        disabled={isPhoneVerified}
                        className={`peer w-full border rounded-md p-2 placeholder-transparent  focus:outline-none 
          ${errors.phone ? "border-red-500" : "border-gray-300"} 
          focus:border-[#3e66f3] ${isPhoneVerified
                            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                            : ""
                          }`}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                      >
                        Phone Number
                      </label>
                    </div>

                    {!isPhoneVerified ? (
                      <button
                        type="button"
                        onClick={handleVerifyClick}
                        disabled={showOtpInput || isSendingOtp}
                        className={`relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
      ${showOtpInput || isSendingOtp
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#3e66f3] hover:text-white cursor-pointer"
                          }
    `}
                      >
                        <span className="relative z-10 flex items-center gap-2">

                          {isSendingOtp ? (
                            <>
                              {/* Spinner */}
                              <svg
                                className="animate-spin h-6 w-10 text-white"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8z"
                                />
                              </svg>


                            </>
                          ) : showOtpInput ? (
                            "OTP Sent"
                          ) : (
                            "Verify"
                          )}

                        </span>

                        {/* Hover Effect (Disable when loading) */}
                        {!isSendingOtp && !showOtpInput && (
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        )}
                      </button>
                    ) : (
                      <CheckCircle className="text-green-500 w-6 h-6" />
                    )}

                  </div>

                  {/* OTP Section (unchanged) */}
                  {showOtpInput && !isPhoneVerified && (
                    <div className="flex flex-col gap-3 mt-2">
                      <p className="open-sans text-sm">
                        Please enter your{" "}
                        <span className="text-[#3e66f3]">6 Digit</span> OTP.
                      </p>



                      {/* OTP Input + Submit */}
                      <div className="flex flex-col md:flex-row gap-3">
                        <InputOtp
                          ref={otpRef}
                          value={otp}
                          onChange={(e) => {
                            setOtp(e.value);
                          }}
                          length={6}
                          integerOnly
                          inputStyle={{
                            border: "1.5px solid #9ca3af",
                            borderRadius: "8px",
                            width: "45px",
                            height: "45px",
                            textAlign: "center",
                          }}
                        />
                        <div className="flex gap-3">

                          <button
                            type="button"
                            onClick={handleOtpVerify}
                            className="relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                          >
                            <span className="relative z-10">Submit</span>
                            <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                          </button>

                          {/*  Show resend button ONLY when timer finished AND not locked */}
                          {canResend && !isLocked && (
                            <button
                              type="button"
                              onClick={handleResendOtp}
                              className=" rounded-md poppins text-nowrap px-4 py-2 bg-gray-200"
                            >
                              Resend
                            </button>
                          )}
                        </div>
                      </div>

                      {/*  Resend timer below the OTP fields */}
                      <div className="">
                        {/* Show timer only when counting down */}
                        {!canResend && !isLocked && (
                          <p className="text-sm text-gray-600 poppins">
                            Resend OTP in{" "}
                            <span className="font-semibold">{timer}s</span>
                          </p>
                        )}

                        {/* Show locked message */}
                        {isLocked && (
                          <p className="text-sm text-red-500 poppins">
                            Try again in {Math.floor(lockTimer / 60)}m{" "}
                            {lockTimer % 60}s
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/*   Company Name */}
                <div className="relative w-full">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    className={`peer w-full border rounded-md p-2 placeholder-transparent  focus:outline-none 
      ${errors.companyName ? "border-red-500" : "border-gray-300"} 
      focus:border-[#3e66f3]`}
                  />
                  <label
                    htmlFor="companyName"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                  >
                    Company Name
                  </label>
                </div>

                {/*   Select Service */}
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service
                  </label> */}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-select w-full border rounded-md p-3 text-base  focus:outline-none focus:border-[#3e66f3] ${errors.service ? "border-red-500" : "border-gray-300"
                      }`}
                  >
                    <option value="">Select Service</option>
                    <option value={"Web Solutions "}>Web Solutions</option>
                    <option value={" Web Design "}>Web Design</option>
                    {/* <option value={" Digital Marketing "}>
                      Digital Marketing
                    </option> */}
                    <option value={" WhatsApp Business API "}>
                      WhatsApp Business API
                    </option>
                    <option value={" RCS Business Messaging "}>
                      RCS Business Messaging
                    </option>
                    <option value={" SMS Solution "}>SMS Solution</option>
                    <option value={" Virtual Receptionist (IVR)/Missed Call "}>
                      Virtual Receptionist (IVR)/Missed Call
                    </option>
                    <option value={" Chatbot Services "}>
                      Chatbot Services
                    </option>
                    <option value={" API Integrations "}>
                      API Integrations
                    </option>
                    <option value={" 2 Way SMS (Long/Shortcode) "}>
                      2 Way SMS (Long/Shortcode)
                    </option>
                    <option value={" Missed Call Services "}>
                      Missed Call Services
                    </option>
                    <option value={" Other CPaaS Solutions "}>
                      Other CPaaS Solutions
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative w-full">
                  <textarea
                    name="message"
                    id="message"
                    rows="3"
                    minLength={30}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none 
                    ${errors.message ? "border-red-500" : "border-gray-300"
                      } focus:border-[#3e66f3]`}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                  >
                    How can we help you?
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative poppins inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
    ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#3e66f3] hover:text-white cursor-pointer"
                      }
  `}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>

                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </span>

                    {/* Hover Effect (disabled when loading) */}
                    {!isSubmitting && (
                      <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                    )}
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
