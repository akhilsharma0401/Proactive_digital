// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import { InputOtp } from "primereact/inputotp";
// // import contactHeroBG from "../../../public/images/contactHeroBG.svg";

// // icons
// import { FaLocationDot } from "react-icons/fa6";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiUploadCloud2Line } from "react-icons/ri";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { FaCheckCircle } from "react-icons/fa";
// import { CheckCircle } from "lucide-react";

// const page = () => {
//   // real time validation
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     companyName: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [otp, setOtp] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);

//   const [timer, setTimer] = useState(30);
//   const [canResend, setCanResend] = useState(false);

//   useEffect(() => {
//     if (showOtpInput && !isPhoneVerified) {
//       if (timer > 0) {
//         const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
//         return () => clearInterval(countdown);
//       } else {
//         setCanResend(true);
//       }
//     }
//   }, [timer, showOtpInput, isPhoneVerified]);

//   const handleResendOtp = () => {
//     setOtp("");
//     setTimer(30);
//     setCanResend(false);
//     toast.success("OTP resent successfully!");
//   };

//   // Validation logic remains identical
//   const validateField = (name, value) => {
//     switch (name) {
//       case "firstName":
//         if (!value.trim()) return "First name is required";
//         if (!/^[A-Za-z\s]+$/.test(value))
//           return "First name should contain only letters";
//         break;

//       case "lastName":
//         if (!value.trim()) return "Last name is required";
//         if (!/^[A-Za-z\s]+$/.test(value))
//           return "Last name should contain only letters";
//         break;

//       case "email":
//         if (!value.trim()) return "Email is required";
//         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
//           return "Invalid email format";
//         break;

//       case "phone":
//         if (!value.trim()) return "Phone number is required";
//         if (!/^[0-9]{10}$/.test(value)) return "Phone number must be 10 digits";
//         break;

//       case "companyName":
//         if (!value.trim()) return "Company name is required";
//         break;

//       case "service":
//         if (!value.trim()) return "Please select a service";
//         break;

//       case "message":
//         if (!value.trim()) return "Message field cannot be empty";
//         break;

//       default:
//         return "";
//     }
//   };

//   const validateAll = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     let newValue = name === "resume" ? files[0] : value;

//     if (
//       (name === "firstName" || name === "lastName") &&
//       /[^a-zA-Z\s]/.test(newValue)
//     ) {
//       return;
//     }

//     if (name === "phone" && /[^0-9]/.test(newValue)) {
//       return;
//     }

//     setFormData({ ...formData, [name]: newValue });

//     if (touched[name]) {
//       const error =
//         name === "resume"
//           ? !files?.[0]
//             ? "Please upload your resume"
//             : files[0].size > 2 * 1024 * 1024
//             ? "File size should not exceed 2MB"
//             : ""
//           : validateField(name, newValue);

//       setErrors({ ...errors, [name]: error });
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched({ ...touched, [name]: true });
//     const error =
//       name === "resume"
//         ? !formData.resume
//           ? "Please upload your resume"
//           : formData.resume.size > 2 * 1024 * 1024
//           ? "File size should not exceed 2MB"
//           : ""
//         : validateField(name, formData[name]);

//     setErrors({ ...errors, [name]: error });
//   };

//   const handleVerifyClick = () => {
//     if (!formData.phone || formData.phone.length !== 10) {
//       toast.error("Please enter a valid 10-digit phone number");
//       return;
//     }
//     setShowOtpInput(true);
//     toast.success("OTP sent successfully! (use 123456)");
//   };

//   const handleOtpVerify = () => {
//     if (otp === "123456") {
//       toast.success("Phone number verified successfully!");
//       setIsPhoneVerified(true);
//       setShowOtpInput(false);
//     } else {
//       toast.error("Invalid OTP! Please try again.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validateAll();
//     if (Object.keys(validationErrors).length > 0) {
//       const firstError = Object.values(validationErrors)[0];
//       toast.error(firstError);
//       setErrors(validationErrors);
//       return;
//     }

//     if (!isPhoneVerified) {
//       toast.error("Please verify your phone number before submitting.");
//       return;
//     }

//     const payload = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phone: formData.phone,
//       companyName: formData.companyName,
//       service: formData.service,
//       message: formData.message,
//     };

//     console.log("Payload ready to send:", payload);
//     toast.success("Form submitted successfully!");
//   };
//   // ends Job Application form

//   return (
//     <div>
//       {/* hero */}
//       <section
//         className="bg-cover bg-center bg-no-repeat lg:px-10"
//         style={{
//           backgroundImage: "url('/images/contactHeroBG.svg')",
//         }}
//       >
//         <div className="container mx-auto flex justify-center items-center py-20 px-6 lg:px-20 ">
//           <div className="w-full flex flex-col items-center gap-4 text-center lg:text-left">
//             <p className="poppins text-[13px] sm:text-[15px] open-sans  bg-[#3e66f3] text-white sub-heading font-bold px-4 py-1 rounded-full uppercase mb-3 ">
//               Contact-Us
//             </p>

//             <h1 className="poppins text-3xl  md:text-4xl xl:text-5xl 2xl:text-6xl text-center font-extrabold leading-tight text-gray-900 ">
//               Let’s build something
//               <span className="text-[#3e66f3] lg:block ">
//                 {" "}
//                 Great Together.{" "}
//               </span>
//             </h1>

//             <p className="open-sans text-sm sm:text-base md:text-lg text-center max-w-xl  text-gray-700 leading-relaxed">
//               We value meaningful collaboration — listening, understanding, and
//               creating solutions tailored to your needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}

//       <section className="container mx-auto py-12 px-6 lg:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Map & Address */}
//           <div className="flex flex-col gap-5 bg-gradient-to-br from-[#9cd6f2] via-[#9cd6f2] to-[#719cf8] p-4 rounded-xl">
//             <div className="w-full overflow-hidden rounded-lg relative group">
//               <a
//                 href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.765154,17z/data=!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839689!4d75.7651543!16s%2Fg%2F11c5v8ktcf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full h-full"
//               >
//                 <div className="overflow-hidden rounded-lg">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6150482957305!2d75.76515427455061!3d26.883968961326847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db45b8c22d271%3A0x9794b018af36477b!2sProactive%20Professional%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762239223494!5m2!1sen!2sin"
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="
//                       w-full
//                       h-[200px] md:h-[250px]
//                       rounded-lg
//                       transform
//                       transition-transform
//                       duration-700
//                       ease-[cubic-bezier(0.4,0.0,0.2,1)]
//                       group-hover:scale-105
//                       pointer-events-none
//                     "
//                     style={{ border: 0 }}
//                   ></iframe>

//                 </div>
//               </a>
//             </div>
//             {/* content */}
//             <div className="flex flex-col gap-4">
//               <h3 className="poppins text-[18px]  font-medium ">
//                 {" "}
//                 Proactive Professional Services Pvt Ltd{" "}
//               </h3>

//               {/* Address */}
//               <div className="flex gap-3 group hover:text-[#3e66f3]">
//                 <FaMapMarkerAlt className="text-[20px] md:text-[20px] mt-1" />
//                 {/* Address */}
//                 <div className="flex flex-col">
//                   <a
//                     href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
//                     className="open-sans  text-lg group-hover:underline transition-all duration-200 "
//                   >
//                     Third Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
//                     Metro Pillar No. 75, Jaipur, Rajasthan 302019
//                   </a>
//                 </div>
//               </div>

//               {/* phone  */}

//               <div className="flex gap-3 group hover:text-[#3e66f3]">
//                 {/* Phone Icon */}
//                 <FaPhone className=" text-[16px] md:text-[20px] mt-1 " />

//                 {/* Contact Number and Timing */}
//                 <div className="flex flex-col">
//                   <a
//                     href="tel:+919680006460"
//                     className="open-sans  text-lg group-hover:underline transition-all duration-200"
//                   >
//                     +91 - 96800-06460
//                   </a>
//                   <span className="open-sans text-sm text-gray-700">
//                     Monday–Saturday 10am - 7pm
//                   </span>
//                 </div>
//               </div>

//               {/* email */}
//               <div className="flex gap-3 group hover:text-[#3e66f3]">
//                 {/* Email Icon */}
//                 <MdOutlineEmail className="text-[16px] md:text-[20px] mt-2" />

//                 {/* Email Address */}
//                 <div className="flex flex-col">
//                   <a
//                     href="mailto:support@proactivesms.in"
//                     className="open-sans text-lg group-hover:underline transition-all duration-200"
//                   >
//                     support@proactivesms.in
//                   </a>
//                   <span className="open-sans text-sm text-gray-700">
//                     We’ll respond within 24 hours
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* form */}
//           <div className="w-full space-y-6 bg-white border border-gray-300 rounded-xl p-4 shadow-sm md:p-6 " id="form">
//             <h2 className="poppins text-[30px] md:text-[35px] heading text-center">
//               Lets's
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
//                 {" "} Connect {" "}
//               </span>
//             </h2>
//             <div className=" ">
//             {/* form with resebd otp button  */}
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               {/* first & last name */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* First Name */}
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="First Name"
//                     className={`peer w-full border rounded-md p-2 placeholder-transparent focus:border-[#3e66f3]
//                             ${
//                               errors.firstName
//                                 ? "border-red-500"
//                                 : "border-gray-300"
//                             } `}
//                   />
//                   <label
//                     htmlFor="firstName"
//                     className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                   >
//                     First Name
//                   </label>
//                 </div>

//                 {/* Last Name */}
//                 <div className="relative w-full">
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="Last Name"
//                     className={`peer w-full border rounded-md p-2 placeholder-transparent
//         ${errors.lastName ? "border-red-500" : "border-gray-300"}
//         focus:border-[#3e66f3]`}
//                   />
//                   <label
//                     htmlFor="lastName"
//                     // className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                     className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                   >
//                     Last Name
//                   </label>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="relative w-full">
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Email Address"
//                   className={`peer w-full border rounded-md p-2 placeholder-transparent
//       ${errors.email ? "border-red-500" : "border-gray-300"}
//       focus:border-[#3e66f3]`}
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                 >
//                   Email Address
//                 </label>
//               </div>

//               {/* Phone */}
//               <div className="flex flex-col gap-2">
//                 <div className="flex gap-2 items-center">
//                   <div className="relative w-full">
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="Phone Number"
//                       disabled={isPhoneVerified}
//                       className={`peer w-full border rounded-md p-2 placeholder-transparent
//           ${errors.phone ? "border-red-500" : "border-gray-300"}
//           focus:border-[#3e66f3] ${
//             isPhoneVerified
//               ? "bg-gray-100 text-gray-500 cursor-not-allowed"
//               : ""
//           }`}
//                     />
//                     <label
//                       htmlFor="phone"
//                       className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                     >
//                       Phone Number
//                     </label>
//                   </div>

//                   {!isPhoneVerified ? (
//                     <button
//                       type="button"
//                       onClick={handleVerifyClick}
//                       disabled={showOtpInput}
//                       className="rounded-lg border-2 border-dashed px-4 py-1.5 bg-[#3e66f3] text-white hover:bg-white hover:text-[#3e66f3]"
//                     >
//                       {showOtpInput ? "OTP Sent" : "Verify"}
//                     </button>
//                   ) : (
//                     <CheckCircle className="text-green-500 w-6 h-6" />
//                   )}
//                 </div>

//                 {/* OTP Section (unchanged) */}
//                 {showOtpInput && !isPhoneVerified && (
//                   <div className="flex flex-col gap-3 mt-2">
//                     <p className="open-sans text-sm">
//                       Please enter your{" "}
//                       <span className="text-[#3e66f3]">6 Digit</span> OTP.
//                     </p>

//                     <div className="flex flex-col md:flex-row gap-3 items-center">
//                       <InputOtp
//                         value={otp}
//                         onChange={(e) => setOtp(e.value)}
//                         length={6}
//                         integerOnly
//                         inputStyle={{
//                           border: "1.5px solid #9ca3af",
//                           borderRadius: "8px",
//                           width: "45px",
//                           height: "45px",
//                           textAlign: "center",
//                         }}
//                       />

//                       <div className="flex gap-2">
//                         <button
//                           type="button"
//                           onClick={handleOtpVerify}
//                           className="rounded-md bg-[#3e66f3] text-white px-3 py-1"
//                         >
//                           Submit OTP
//                         </button>

//                         <button
//                           type="button"
//                           disabled={!canResend}
//                           onClick={handleResendOtp}
//                           className={`rounded-md px-3 py-1 ${
//                             canResend
//                               ? "bg-gray-200"
//                               : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                           }`}
//                         >
//                           {canResend ? "Resend OTP" : `Resend in ${timer}s`}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/*  Company Name */}
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   name="companyName"
//                   id="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Company Name"
//                   className={`peer w-full border rounded-md p-2 placeholder-transparent
//       ${errors.companyName ? "border-red-500" : "border-gray-300"}
//       focus:border-[#3e66f3]`}
//                 />
//                 <label
//                   htmlFor="companyName"
//                   className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                 >
//                   Company Name
//                 </label>
//               </div>

//               {/*  Select Service */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Service
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`form-select w-full border rounded-md p-2 text-base ${
//                     errors.service ? "border-red-500" : "border-gray-300"
//                   }`}
//                 >
//                   <option value="">Select Service</option>
//                   <option value={" WhatsApp Business API "} >WhatsApp Business API</option>
//                   <option value={" RCS Business Messaging "} >RCS Business Messaging</option>
//                   <option value={" SMS Solution "} >SMS Solution</option>
//                   <option value={" Virtual Receptionist (IVR)/Missed Call "} >Virtual Receptionist (IVR)/Missed Call</option>
//                   <option value={" Chatbot Services "} >Chatbot Services</option>
//                   <option value={" API Integrations "} >API Integrations</option>
//                   <option value={" 2 Way SMS (Long/Shortcode) "} >2 Way SMS (Long/Shortcode)</option>
//                   <option value={" Missed Call Services "} >Missed Call Services</option>
//                   <option value={" Other CPaaS Solutions "} >Other CPaaS Solutions</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <div className="relative w-full">
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows="3"
//                   value={formData.message}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="How can we help you?"
//                   className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none
//                     ${
//                       errors.message ? "border-red-500" : "border-gray-300"
//                     } focus:border-[#3e66f3]`}
//                 />
//                 <label
//                   htmlFor="message"
//                   className="absolute left-3 top-2 bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#3e66f3] peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-gray-500"
//                 >
//                   How can we help you?
//                 </label>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="rounded-lg border-2 border-dashed text-white bg-[#3e66f3] px-4 py-2 hover:bg-white hover:text-black"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import { InputOtp } from "primereact/inputotp";
// import contactHeroBG from "../../../public/images/contactHeroBG.svg";

// icons
import { FaLocationDot } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiUploadCloud2Line } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { BiGlobe } from "react-icons/bi";

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
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

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
    const error =
      name === "resume"
        ? !formData.resume
          ? "Please upload your resume"
          : formData.resume.size > 2 * 1024 * 1024
          ? "File size should not exceed 2MB"
          : ""
        : validateField(name, formData[name]);

    setErrors({ ...errors, [name]: error });
  };

  const handleVerifyClick = () => {
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    setShowOtpInput(true);
    toast.success("OTP sent successfully! (use 123456)");
  };

  const handleOtpVerify = () => {
    if (otp === "123456") {
      toast.success("Phone number verified successfully!");
      setIsPhoneVerified(true);
      setShowOtpInput(false);
    } else {
      toast.error("Invalid OTP! Please try again.");
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

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
      phone: formData.phone,
      companyName: formData.companyName,
      service: formData.service,
      message: formData.message,
    };

    console.log("Payload ready to send:", payload);
    toast.success("Form submitted successfully!");
  };
  // ends Job Application form

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
            style={{ backgroundImage: 'url("/images/contactus7.jpg")' }}
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
                            ${
                              errors.firstName
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
                    type="email"
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
                        placeholder=" "
                        disabled={isPhoneVerified}
                        className={`peer w-full border rounded-md p-2 placeholder-transparent  focus:outline-none 
          ${errors.phone ? "border-red-500" : "border-gray-300"} 
          focus:border-[#3e66f3] ${
            isPhoneVerified
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
                        disabled={showOtpInput}
                        className="relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                      >
                        <span className="relative z-10">
                          {" "}
                          {showOtpInput ? "OTP Sent" : "Verify"}{" "}
                        </span>
                        <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
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
                    className={`form-select w-full border rounded-md p-3 text-base  focus:outline-none focus:border-[#3e66f3] ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Service</option>
                    <option value={"Web Solutions "}>Web Solutions</option>
                    <option value={" Web Design "}>Web Design</option>
                    <option value={" Digital Marketing "}>
                      Digital Marketing
                    </option>
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
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    className={`peer w-full border rounded-md p-2 placeholder-transparent resize-none focus:outline-none 
                    ${
                      errors.message ? "border-red-500" : "border-gray-300"
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
                    className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                  >
                    <span className="relative z-10"> Submit </span>
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
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
