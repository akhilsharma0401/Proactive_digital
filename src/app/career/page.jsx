"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Conversation from "../../../public/animation/Conversation.json";

// images

// icons
import { CheckCircle } from "lucide-react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";

// components
import FaqItem from "../components/FaqItem";
import { Dialog } from "primereact/dialog";
import { InputOtp } from "primereact/inputotp";
import CareerOpeningItem from "./../components/CareerOpeningItem";
import { axiosInstance } from "@/lib/axios";

function page() {
  // Job Application Form

  // on submit validation
  // const [formData, setFormData] = useState({
  //   fname: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   designation: "",
  //   selectExpyrs: "",
  //   resume: null,
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});

  // //  Validation Function
  // const validate = () => {
  //   const newErrors = {};

  //   if (!formData.fname.trim()) newErrors.fname = "First name is required";
  //   if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  //   ) {
  //     newErrors.email = "Invalid email format";
  //   }

  //   if (!formData.phone.trim()) {
  //     newErrors.phone = "Phone number is required";
  //   } else if (!/^[0-9]{10}$/.test(formData.phone)) {
  //     newErrors.phone = "Phone number must be 10 digits";
  //   }

  //   if (!formData.designation)
  //     newErrors.designation = "Please select a designation";

  //   if (!formData.selectExpyrs)
  //     newErrors.selectExpyrs = "Please select experience years";

  //   if (!formData.resume) {
  //     newErrors.resume = "Please upload your resume";
  //   } else if (formData.resume.size > 2 * 1024 * 1024) {
  //     newErrors.resume = "File size should not exceed 2MB";
  //   }

  //   if (!formData.message.trim())
  //     newErrors.message = "Message field cannot be empty";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // //  Handle Change
  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "resume") {
  //     setFormData({ ...formData, resume: files[0] });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // //  Handle Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validate()) {
  //     console.log("Validation failed");
  //     return;
  //   }

  //   //  Payload creation
  //   const payload = {
  //     firstName: formData.fname,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     phone: formData.phone,
  //     designation: formData.designation,
  //     experienceYears: formData.selectExpyrs,
  //     message: formData.message,
  //     resumeName: formData.resume ? formData.resume.name : "",
  //   };

  //   console.log(" Payload ready to send:", payload);

  //   // Here you can send payload to API using Axios or Fetch
  //   // e.g. axios.post('/api/apply', payload)
  // };

  // real time validation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    designation: "",
    selectExpyrs: "",
    resume: null,
    message: "",
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState(null);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const otpRef = useRef(null);

  // resend attempt tracking
  const [resendAttempts, setResendAttempts] = useState(0);
  const MAX_ATTEMPTS = 5;

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

  // const handleResendOtp = () => {
  //   setOtp("");
  //   setTimer(30);
  //   setCanResend(false);
  //   toast.success("OTP resent successfully!");
  // };

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

      case "mobile":
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9]{10}$/.test(value)) return "Phone number must be 10 digits";
        break;

      case "designation":
        if (!value) return "Please select a designation";
        break;

      case "selectExpyrs":
        if (!value) return "Please select experience years";
        break;

      case "message":
        if (!value.trim()) return "Message field cannot be empty";
        if (value.trim().length < 30) return "Message must be at least 30 characters";
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

    if (!formData.resume) newErrors.resume = "Please upload your resume";
    else if (formData.resume.size > 2 * 1024 * 1024)
      newErrors.resume = "File size should not exceed 2MB";

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

    if (name === "mobile" && /[^0-9]/.test(newValue)) {
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

    if (!formData.mobile || formData.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }


    setShowOtpInput(true);
    setTimer(30);
    setCanResend(false);

    try {
      setIsSendingOtp(true);

      const payload = {
        mobile: formData.mobile,
        otp,
        otpId,
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
    if (isVerifyingOtp) return;

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    if (!otpId) {
      toast.error("OTP expired. Please resend OTP.");
      return;
    }

    try {
      setIsVerifyingOtp(true);

      const payload = {
        mobile: formData.mobile,
        otp,
        otpId,
      };

      const res = await axiosInstance.post("/otp/verifyOtp", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Invalid OTP");
        return;
      }

      toast.success("Phone verified!");

      setIsPhoneVerified(true);
      setShowOtpInput(false);
      setCanResend(false);
      setOtp("");
      setOtpId(null);

    } catch {
      toast.error("OTP verification failed");
    } finally {
      setIsVerifyingOtp(false);
    }
  };


  useEffect(() => {
    if (showOtpInput) {
      setTimeout(() => {
        otpRef.current?.focus();
      }, 200);
    }
  }, [showOtpInput]);

  // handle resend otp

  const handleResendOtp = () => {
    // If already locked → always show limit message
    if (isLocked) {
      toast.error(
        "You have reached the resend OTP limit! Please try again after 1 hour..."
      );
      return;
    }

    // If attempts reached
    if (resendAttempts >= MAX_ATTEMPTS) {
      setIsLocked(true); // lock the user
      setCanResend(false); // disable resend button
      toast.error(
        "You have reached the resend OTP limit! Please try again after 1 hour..."
      );
      return;
    }

    // Normal resend logic
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

    // If just used last attempt → lock the user
    if (remaining === 0) {
      setIsLocked(true);
    }
  };

  // resend otp 1 hour disabled
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

    if (isSubmitting) return; // prevent double click

    const validationErrors = validateAll();

    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.values(validationErrors)[0];
      toast.error(firstError);
      setErrors(validationErrors);
      return;
    }

    if (!isPhoneVerified) {
      toast.error("Please verify your phone number first.");
      return;
    }

    try {
      setIsSubmitting(true); // start loading

      // const payload = {
      //   firstName: formData.firstName,
      //   lastName: formData.lastName,
      //   email: formData.email,
      //   mobile: formData.mobile,
      //   designation: formData.designation,
      //   expInYears: formData.selectExpyrs,
      //   message: formData.message,
      //   resumeName: formData.resume?.name || "",
      //   jobTitle: "-",
      // };

      if (!formData.resume) {
      }
      console.log("dviusdvuisd", formData.resume)
      const form = new FormData();
      form.append('firstName', formData.firstName)
      form.append('lastName', formData.lastName)
      form.append('email', formData.email)
      form.append('mobile', formData.mobile)
      form.append('designation', formData.designation)
      form.append('expInYears', formData.selectExpyrs)
      form.append('message', formData.message)
      form.append('resume', formData.resume)
      form.append('jobTitle', "-")


      const res = await axiosInstance.post("/enquiry/career", form);

      if (res?.data?.status) {
        toast.success("Application submitted successfully! 🎉");

        // reset
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          designation: "",
          selectExpyrs: "",
          resume: null,
          message: "",
        });

        setIsPhoneVerified(false);
        setShowOtpInput(false);
        setOtp("");
      } else {
        toast.error(res?.data?.message || "Submission failed");
      }

    } catch (err) {
      console.log("err", err);
      toast.error("Server error. Please try again.");
    } finally {
      setIsSubmitting(false); // stop loading
    }
  };


  // ends Job Application form

  // Otp Modal
  // const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [showOtpInput, setShowOtpInput] = useState(false);

  // ends Otp modal

  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/job?type=admin");

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to fetch jobs");
        setJobs([]);
        return;
      }

      const rows = Array.isArray(res.data.data)
        ? res.data.data
        : [];

      // ✅ Filter only PUBLISHED jobs
      const publishedJobs = rows.filter(
        (job) => job.status === "PUBLISHED"
      );

      setJobs(publishedJobs);

    } catch (error) {
      console.error("Fetch Jobs Error:", error);
      toast.error("Something went wrong");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, []);




  useEffect(() => {
    fetchJobs();
  }, []);

  // FAQs Ends
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat lg:px-10  "
      // style={{
      //   backgroundImage: "url('/images/heroAnimateBg.svg')",
      // }}
      >
        <div className=" container mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:py-12 py-10 ">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-10 xl:px-16">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                PPSPL
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight text-gray-900 mb-3">
                Empower Your Journey with
                <span className="text-[#3e66f3]"> Proactive </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                Join a team that’s shaping the next wave of digital innovation.
                At Proactive, you’ll work on meaningful projects, grow your
                expertise, and make an impact that matters.
              </p>

              {/* Button */}
              <div>
                <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                  <span className="relative z-10">Consult Expert</span>

                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="flex ">
              <Lottie animationData={Conversation} loop={true} />
            </div>
          </div>
        </div>
      </section>

      {/* why join Proactive */}
      <section className="container mx-auto py-10  lg:py-12 space-y-15 px-6 lg:px-10 2xl:px-15">
        <div className="flex justify-center ">
          <h2 className="poppins  text-[30px] lg:text-[35px]  ">
            {" "}
            Why Work at
            <span className="text-[#3e66f3]"> Proactive? </span>
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-6 ">
          {/* card 1 */}
          <div className="relative group flex flex-col gap-2 lg:gap-3 justify-center items-center px-6 py-5 lg:px-6 lg:py-7 border border-black rounded-xl bg-white transition-all duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl">
            {/* Icon circle (static) */}
            {/* bg-[#2b7fff] */}
            <div className="absolute -top-10 w-16 h-16  lg:w-20 lg:h-20 rounded-full bg-[#2b7fff] shadow-lg flex items-center justify-center">
              {/* Rotator: flips on hover of the parent group */}
              <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
                {/* inner wrapper that rotates (only this rotates) */}
                <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face (visible initially) */}
                  <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                    <FaChartLine className="text-white w-9 h-9 lg:w-10 lg:h-10" />

                  </div>

                  {/* Back face (rotated so after the wrapper rotation it appears upright) */}

                  <div className="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <FaChartLine className="text-white w-9 h-9 lg:w-10 lg:h-10" />

                  </div>
                </div>
              </div>
            </div>

            {/* title */}
            <div className="flex flex-col gap-1 justify-center mt-4 lg:mt-6">
              <h3 className="poppins text-[20px] lg:text-[22px] text-gray-900 font-medium text-center">
                Evolve Constantly
              </h3>
              <span className="poppins text-[18px] lg:text-[20px] text-[#3e66f3] text-center">
                Learn | Lead | Transform
              </span>
            </div>

            {/* description */}
            <div className="flex justify-center">
              <p className="open-sans text-gray-700 text-[15px] lg:text-[16px] text-center">
                Innovation and curiosity drive how we grow individually and
                collectively.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative group flex flex-col gap-2 lg:gap-3 justify-center items-center px-6 py-5 lg:px-6 lg:py-7 border border-black rounded-xl bg-white transition-all duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl">
            {/* Icon circle */}
            <div className="absolute -top-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#2b7fff] shadow-lg flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
                <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face */}
                  <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                    <HiOutlineUsers className="text-white w-9 h-9 lg:w-10 lg:h-10" />


                  </div>
                  {/* Back face */}
                  <div className="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <HiOutlineUsers className="text-white w-9 h-9 lg:w-10 lg:h-10" />

                  </div>
                </div>
              </div>
            </div>

            {/* title */}
            <div className="flex flex-col gap-1 justify-center mt-4 lg:mt-6">
              <h3 className="poppins text-[20px] lg:text-[22px] text-gray-900 font-medium text-center">
                Collaborate with Purpose
              </h3>
              <span className="poppins text-[18px] lg:text-[20px] text-[#3e66f3] text-center">
                Align | Build | Achieve
              </span>
            </div>

            {/* description */}
            <div className="flex justify-center">
              <p className="open-sans text-gray-700 text-[15px] lg:text-[16px] text-center">
                Partnership and trust power every success story we create.
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative group flex flex-col gap-2 lg:gap-3 justify-center items-center px-6 py-5 lg:px-6 lg:py-7 border border-black rounded-xl bg-white transition-all duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl">
            {/* Icon circle */}
            <div className="absolute -top-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#2b7fff] shadow-lg flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
                <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face */}
                  <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                    <FaRegHandshake className="text-white w-9 h-9 lg:w-10 lg:h-10" />


                  </div>
                  {/* Back face */}
                  <div className="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <FaRegHandshake className="text-white w-9 h-9 lg:w-10 lg:h-10" />


                  </div>
                </div>
              </div>
            </div>

            {/* title */}
            <div className="flex flex-col gap-1 justify-center mt-4 lg:mt-6">
              <h3 className="poppins text-[20px] lg:text-[22px] text-gray-900 font-medium text-center">
                Commitment to Clients
              </h3>
              <span className="poppins text-[18px] lg:text-[20px] text-[#3e66f3] text-center">
                Understand | Deliver | Excel
              </span>
            </div>

            {/* description */}
            <div className="flex justify-center">
              <p className="open-sans text-gray-700 text-[15px] lg:text-[16px] text-center">
                We listen, adapt, and go beyond expectations to build lasting
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      {/* <section className="container mx-auto py-10 lg:py-12 px-6 lg:px-12  ">
        <div className=" flex flex-col gap-1 justify-center items-center py-5 px-4 border border-black bg-[#599ef8] rounded-2xl  ">
          <h2 className="poppins text-[30px] lg:text-[35px] text-white text-center">
            Why Work at Proactive?{" "}
          </h2>
          <p className="open-sans text-[18px] lg:text-[20px] text-center text-white ">
            Let’s Transform Communication Together!
          </p>
        </div>
      </section> */}

      {/* bg-[#f7ebfc] */}
      <section className="container mx-auto py-10 lg:py-12 px-6 lg:px-10 2xl:px-15">
        {loading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          // <p className="text-center text-2xl md:text-3xl text-gray-600">Sorry! No openings available</p>
          <div className="text-center py-16">
            <h2 className="text-3xl font-semibold mb-4">
              Opportunities Coming Soon 🚀
            </h2>
            <p className="text-gray-500 mb-6">
              We're not hiring right now, but we’re always excited to meet talented people.
            </p>

            <button className="bg-[#3e66f3] text-white px-6 py-3 rounded-lg">
              Join Our Talent Pool
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-10 ">
            <div className="w-full space-y-10 ">
              <h2 className="poppins text-[30px] md:text-[35px] heading text-center">
                Current{/* */}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  {" "}
                  Openings{" "}
                </span>
              </h2>
              {
                jobs.map((job, idx) => (
                  <div className="">
                    <CareerOpeningItem
                      key={job.id}
                      question={job.title}
                      Location={job.location}
                      Term={job.type}
                      description={job.jobDesc}
                      Responsibilities={job.responsibilities}
                      Qualifications={job.qualifications}
                      isOpen={openIndex === idx}
                      onClick={() => toggle(idx)}
                    />
                  </div>
                ))
              }
            </div>

            <div className="w-full space-y-10  " id="form">
              <h2 className="poppins text-[30px] md:text-[35px] heading text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  {" "}
                  {/* */}Apply{/* */}{" "}
                </span>{" "}
                {/* */}Now
              </h2>
              <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm md:p-6">
                {/* job application form  */}

                {/* without payload and without validation */}
                {/* <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="peer w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:border-[#3e66f3] focus:outline-none placeholder-transparent"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="fname"
                      className="absolute left-3 top-2  bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out  peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="peer w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:border-[#3e66f3] focus:outline-none placeholder-transparent"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="relative w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:border-[#3e66f3] focus:outline-none placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                  >
                    Email Address
                  </label>
                </div>

                <div className="flex gap-2 items-center w-full">
                  <div className="relative w-full">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="peer w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:border-[#3e66f3] focus:outline-none placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      Phone Number
                    </label>
                  </div>

                  <button
                    type="button"
                    className="poppins font-normal rounded-lg border-2 border-dashed text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none  bg-[#3e66f3] border-[#3e66f3] px-3 py-1 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#3e66f3] disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">Verify</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="poppins block text-sm font-medium text-gray-700 mb-2">
                      Designation
                    </label>
                    <select
                      name="designation"
                      className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500"
                    >
                      <option value="" disabled="" selected="">
                        Please Choose an option
                      </option>
                      <option value="SEO Executive">SEO Executive</option>
                      <option value="PHP Developer">PHP Developer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Sales Executive">Sales Executive</option>
                    </select>
                  </div>

                  <div>
                    <label className="poppins block text-sm font-medium text-gray-700 mb-2">
                      Experience Years
                    </label>
                    <select
                      name="selectExpyrs"
                      className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500"
                    >
                      <option value="" disabled="" selected="">
                        Please Choose an option
                      </option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                  </div>
                </div>

                <div className="w-full ">
                  <label className="poppins block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume
                  </label>

                  <div className="relative border border-dashed border-gray-400 rounded-md p-4 text-center cursor-pointer transition hover:border-[#3e66f3] hover:bg-blue-50">
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center text-gray-500 ">
                      <div className="flex justify-center">
                        <RiUploadCloud2Line className="w-14 h-14 " />
                      </div>
                      <span className="text-sm">
                        Click to upload or drag your file here
                      </span>
                      <span className="text-xs text-gray-400">
                        (PDF, DOC, DOCX - max 2MB)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="How can we help you?"
                    className="peer w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:border-[#3e66f3] focus:outline-none placeholder-transparent resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#3e66f3]"
                  >
                    How can we help you?
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    id=""
                    type="submit"
                    className="rounded-lg border-2 border-dashed text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none lora bg-[#3e66f3] border-[#3e66f3]  hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#3e66f3] px-4 py-2 "
                  >
                    <span className="relative z-10 ">Submit</span>
                  </button>
                </div>
              </form> */}

                {/* validate on submit */}
                {/* <form className="space-y-4" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${
                        errors.fname ? "border-red-500" : "border-gray-300"
                      } focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="fname"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm"
                    >
                      First Name
                    </label>
                    {errors.fname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fname}
                      </p>
                    )}
                  </div>

                  
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm"
                    >
                      Last Name
                    </label>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>


                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-[#3e66f3]`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm"
                  >
                    Email Address
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

               
                <div className="flex gap-2 items-center w-full">
                  <div className="relative w-full">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm"
                    >
                      Phone Number
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="rounded-lg border-2 border-dashed text-white bg-[#3e66f3] border-[#3e66f3] px-3 py-1 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Verify
                  </button>
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation
                    </label>
                    <select
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className={`form-select w-full border rounded-md p-2 ${
                        errors.designation
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Please Choose an option</option>
                      <option value="SEO Executive">SEO Executive</option>
                      <option value="PHP Developer">PHP Developer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Sales Executive">Sales Executive</option>
                    </select>
                    {errors.designation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.designation}
                      </p>
                    )}
                  </div>

                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Years
                    </label>
                    <select
                      name="selectExpyrs"
                      value={formData.selectExpyrs}
                      onChange={handleChange}
                      className={`form-select w-full border rounded-md p-2 ${
                        errors.selectExpyrs
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Please Choose an option</option>
                      {[...Array(11).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    {errors.selectExpyrs && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.selectExpyrs}
                      </p>
                    )}
                  </div>
                </div>

               
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume
                  </label>
                  <div className="relative border border-dashed border-gray-400 rounded-md p-4 text-center cursor-pointer hover:border-[#3e66f3] hover:bg-blue-50">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <RiUploadCloud2Line className="w-14 h-14" />
                      <span className="text-sm">
                        Click to upload or drag your file here
                      </span>
                      <span className="text-xs text-gray-400">
                        (PDF, DOC, DOCX - max 2MB)
                      </span>
                      {formData.resume && (
                        <p className="mt-2 text-sm text-gray-600">
                          Selected: {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                  )}
                </div>

               
                <div className="relative w-full">
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-[#3e66f3]`}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm"
                  >
                    How can we help you?
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

               
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-lg border-2 border-dashed text-white bg-[#3e66f3] border-[#3e66f3] px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form> */}

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
                        className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${errors.firstName ? "border-red-500" : "border-gray-300"
                          } focus:border-[#3e66f3]`}
                      />
                      <label
                        // peer-placeholder-shown:text-gray-400
                        htmlFor="firstName"
                        className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                      >
                        First Name
                      </label>
                      {/* {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )} */}
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
                        className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${errors.lastName ? "border-red-500" : "border-gray-300"
                          } focus:border-[#3e66f3]`}
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                      >
                        Last Name
                      </label>
                      {/* {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )} */}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={`peer w-full border rounded-md p-2 placeholder-transparent focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                        } focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      Email Address
                    </label>
                    {/* {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )} */}
                  </div>

                  {/* Phone */}

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <div className="relative w-full">
                        <input
                          type="tel"
                          name="mobile"
                          id="phone"
                          value={formData.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={10}
                          placeholder=" "
                          disabled={isPhoneVerified}
                          className={`peer w-full border rounded-md p-2 placeholder-transparent  focus:outline-none  
                          ${errors.mobile ? "border-red-500" : "border-gray-300"} 
                          focus:border-[#3e66f3] 
                          ${isPhoneVerified
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

                        {/* <div className="flex flex-col md:flex-row gap-3 items-center">
                        <InputOtp
                          value={otp}
                          onChange={(e) => setOtp(e.value)}
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

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleOtpVerify}
                            className="relative poppins  text-nowrap inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                          >
                            <span className="relative z-10">Submit</span>

                            <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                          </button>

                         

                          <button
                            type="button"
                            disabled={!canResend || isLocked}
                            onClick={handleResendOtp}
                            className={`rounded-md poppins flex flex-wrap text-nowrap px-3 py-1 ${
                              !canResend || isLocked
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-200"
                            }`}
                          >
                            {isLocked
                              ? `Try again in ${Math.floor(lockTimer / 60)}m ${
                                  lockTimer % 60
                                }s`
                              : canResend
                              ? "Resend"
                              : `Resend in ${timer}s`}
                          </button>
                        </div>
                      </div> */}

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
                              disabled={isVerifyingOtp}
                              className={`relative poppins inline-flex items-center justify-center py-2 px-4 rounded-lg text-white 
                              ${isVerifyingOtp
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-[#3e66f3]"
                                }`}
                            >
                              <span className="relative z-10">{isVerifyingOtp ? "Verifying..." : "Submit"}</span>
                              <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                            </button>

                            {/* ✅ Show resend button ONLY when timer finished AND not locked */}
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

                        {/* ✅ Resend timer below the OTP fields */}
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

                  {/* Designation & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Designation
                      </label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-select w-full border rounded-md p-2 ${errors.designation
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      >
                        <option value="">Please Choose an option</option>

                        {jobs.map((job) => (
                          <option key={job._id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>

                      {/* {errors.designation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.designation}
                      </p>
                    )} */}
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Years
                      </label>
                      <select
                        name="selectExpyrs"
                        value={formData.selectExpyrs}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-select w-full border rounded-md p-2 ${errors.selectExpyrs
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      >
                        <option value="">Please Choose an option</option>
                        {[...Array(11).keys()].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      {/* {errors.selectExpyrs && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.selectExpyrs}
                      </p>
                    )} */}
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume
                    </label>
                    <div className="relative border border-dashed border-gray-400 rounded-md p-4 text-center cursor-pointer hover:border-[#3e66f3] hover:bg-blue-50">
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <RiUploadCloud2Line className="w-14 h-14" />
                        <span className="text-sm">
                          Click to upload or drag your file here
                        </span>
                        <span className="text-xs text-gray-400">
                          (PDF, DOC, DOCX - max 2MB)
                        </span>
                        {formData.resume && (
                          <p className="open-sans mt-2 text-sm md:text-base text-[#3e66f3]">
                            <span className=" poppins font-semibold">
                              {" "}
                              Selected:{" "}
                            </span>
                            {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* {errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                  )} */}
                  </div>

                  {/* Message */}
                  <div className="relative w-full">
                    <textarea
                      name="message"
                      id="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300"
                        } focus:border-[#3e66f3]`}
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
                    >
                      How can we help you?
                    </label>
                    {/* {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )} */}
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center">
                    {/* <button
                        type="button"
                        onClick={handleVerifyClick}
                        disabled={showOtpInput}
                        className="relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                      >
                        <span className="relative z-10">
                          {" "}
                          {showOtpInput ? "OTP Sent" : "Verify"}{" "}
                        </span>
                        <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                      </button> */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative poppins inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group 
                      ${isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#3e66f3] hover:text-white cursor-pointer"
                        } `}
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
        )}
        
      </section>

      {/* Otp Modal */}
      {/* <Dialog
        header={null}
        visible={showOtpModal}
        style={{ width: "22rem", borderRadius: "1rem", overflow: "hidden" }}
        modal
        onHide={() => setShowOtpModal(false)}
        className="rounded-2xl shadow-xl"
      >
        <div className="p-6 flex flex-col items-center gap-6">
   
          <h3 className="poppins text-xl font-semibold text-[#3e66f3]">
            Verify Your Phone
          </h3>

       
          <p className="text-gray-600 text-center text-sm leading-relaxed">
            Please enter the{" "}
            <span className="font-semibold text-[#3e66f3]">6-digit OTP</span>{" "}
            sent to your registered phone number.
          </p>

      
          <div className="card flex justify-content-center border-2 ">
            <InputOtp
              value={otp}
              onChange={(e) => setOtp(e.value)}
              length={6}
              integerOnly
              inputStyle={{ width: "2.8rem", height: "2.8rem" }}
              inputClassName="text-lg font-semibold text-center border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3e66f3] transition-all duration-200"
            />
          </div>

   
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={() => setShowOtpModal(false)}
              className="rounded-lg border border-gray-300 text-gray-600 px-4 py-2 hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (otp.length === 6) {
                  toast.success("Phone number verified successfully!");
                  setShowOtpModal(false);
                } else {
                  toast.error("Please enter a valid 6-digit OTP");
                }
              }}
              className="rounded-lg bg-[#3e66f3] text-white px-5 py-2 hover:bg-[#3354cc] transition-all duration-200"
            >
              Submit OTP
            </button>
          </div>
        </div>
      </Dialog> */}
    </div>
  );
}

export default page;
