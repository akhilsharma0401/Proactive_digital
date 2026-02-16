// "use client";
// import { useEffect, useRef, useState } from "react";
// import { CheckCircle } from "lucide-react";
// import toast from "react-hot-toast";
// import Image from "next/image";
// import { Dialog } from "primereact/dialog";
// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import { InputOtp } from "primereact/inputotp";
// // icons
// import { HiMiniSquares2X2 } from "react-icons/hi2";

// import { CiUser } from "react-icons/ci";
// import { FiMail } from "react-icons/fi";
// import { MdOutlineMapsHomeWork } from "react-icons/md";
// import { RiMessage2Line } from "react-icons/ri";
// import { AiOutlineCustomerService } from "react-icons/ai";
// import { CiPhone } from "react-icons/ci";
// import { axiosInstance } from "@/lib/axios";

// const BookDemoDialog = ({ visible, setVisible }) => {
//   // CTA form starts
//   // const [visible, setVisible] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpId, setOtpId] = useState(null);
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);
//   const [otpLoading, setOtpLoading] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [canResend, setCanResend] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 sec countdown
//   const [resendAttempts, setResendAttempts] = useState(0);
//   const [isSendingOtp, setIsSendingOtp] = useState(false);
//   const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

//   const [isLocked, setIsLocked] = useState(false);
//   const [lockTimer, setLockTimer] = useState(0); // seconds
//   // payload
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     companyName: "",
//     service: "",
//     message: "",
//     source: "book-demo",
//   });
//   const otpRef = useRef(null);
//   const [open, setOpen] = useState(false);
//   // dropdown state
//   const services = [
//     { id: 1, name: "Web Solutions" },
//     { id: 2, name: "Web Design" },
//     { id: 3, name: "Digital Marketing" },
//     { id: 4, name: "WhatsApp Business API" },
//     { id: 5, name: "RCS Business Messaging" },
//     { id: 6, name: "SMS Solution" },
//     { id: 7, name: "Virtual Receptionist (IVR)/Missed Call" },
//     { id: 8, name: "Chatbot Services" },
//     { id: 9, name: "API Integrations" },
//     { id: 10, name: "2 Way SMS (Long/Shortcode)" },
//     { id: 11, name: "Missed Call Services" },
//     { id: 12, name: "Other CPaaS Solutions" },
//   ];

//   // ---------------- HANDLE CHANGE ----------------
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Custom field restrictions
//     if (name === "firstName" || name === "lastName") {
//       const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
//       setFormData({ ...formData, [name]: lettersOnly });
//     } else if (name === "mobile") {
//       const numbersOnly = value.replace(/\D/g, "");
//       setFormData({ ...formData, [name]: numbersOnly });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // ---------------- VALIDATION (fixed) ----------------
//   const validateForm = () => {
//     const nameRegex = /^[A-Za-z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!formData.firstName.trim()) {
//       toast.error("First name is required");
//       return false;
//     }
//     if (!nameRegex.test(formData.firstName)) {
//       toast.error("First name can contain only alphabets");
//       return false;
//     }

//     if (!formData.lastName.trim()) {
//       toast.error("Last name is required");
//       return false;
//     }
//     if (!nameRegex.test(formData.lastName)) {
//       toast.error("Last name can contain only alphabets");
//       return false;
//     }

//     if (!formData.email.trim()) {
//       toast.error("Email is required");
//       return false;
//     }
//     if (!emailRegex.test(formData.email)) {
//       toast.error("Enter a valid email");
//       return false;
//     }

//     if (!formData.mobile.trim()) {
//       toast.error("Phone number is required");
//       return false;
//     }
//     if (!phoneRegex.test(formData.mobile)) {
//       toast.error("Enter a valid 10-digit phone number");
//       return false;
//     }

//     if (!formData.companyName.trim()) {
//       toast.error("Company name is required");
//       return false;
//     }

//     if (!formData.service) {
//       toast.error("Please select a service");
//       return false;
//     }

//     if (!formData.message.trim()) {
//       toast.error("Message is required");
//       return false;
//     }

//     if (formData.message.trim().length < 30) {
//       toast.error("Message must be at least 30 characters long");
//       return false;
//     }

//     return true;
//   };

//   useEffect(() => {
//     if (!showOtpInput || canResend || isLocked) return;

//     if (timer <= 0) {
//       setCanResend(true);
//       return;
//     }

//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer, showOtpInput, canResend, isLocked]);

//   // Lock countdown
//   useEffect(() => {
//     if (!isLocked || lockTimer <= 0) return;

//     const interval = setInterval(() => {
//       setLockTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [isLocked, lockTimer]);

//   const handleResendOtp = async () => {
//     if (isLocked) return;

//     // Max 3 attempts
//     if (resendAttempts >= 3) {
//       setIsLocked(true);
//       setLockTimer(300); // 5 minutes lock
//       toast.error("Too many attempts. Locked for 5 minutes.");
//       return;
//     }

//     try {
//       setOtpLoading(true);

//       const payload = {
//         mobile: formData.mobile,
//       };

//       const res = await axiosInstance.post("/otp/sendOtp", payload);

//       if (!res?.data?.status) {
//         toast.error(res?.data?.message || "Failed to resend OTP");
//         return;
//       }

//       toast.success("OTP resent successfully!");

//       // Save otpId if backend sends
//       if (res?.data?.otpId) {
//         setOtpId(res.data.otpId);
//       }

//       setOtp("");
//       setResendAttempts((prev) => prev + 1);

//       setCanResend(false);
//       setTimer(30);

//     } catch (err) {
//       toast.error("Failed to resend OTP");
//     } finally {
//       setOtpLoading(false);
//     }
//   };


//   useEffect(() => {
//     if (lockTimer === 0 && isLocked) {
//       setIsLocked(false);
//       setResendAttempts(0);
//       setCanResend(true);
//     }
//   }, [lockTimer, isLocked]);


//   const handleVerifyClick = async () => {
//     if (!formData.mobile || formData.mobile.length !== 10) {
//       toast.error("Enter valid 10-digit mobile number");
//       return;
//     }

//     try {
//       setOtpLoading(true);
//       const payload = {
//         mobile: formData.mobile,
//       };

//       const res = await axiosInstance.post("/otp/sendOtp", payload);

//       if (!res?.data?.status) {
//         toast.error(res?.data?.message || "Failed to send OTP");
//         return;
//       }

//       toast.success("OTP sent successfully!");

//       if (res?.data?.otpId) {
//         setOtpId(res.data.otpId); // ✅ save otpId
//       }

//       setShowOtpInput(true);

//       setCanResend(false);
//       setTimer(30); // reset to 30s

//     } catch (err) {
//       toast.error("Failed to send OTP");
//     } finally {
//       setOtpLoading(false);
//     }
//   };


//   useEffect(() => {
//     if (showOtpInput) {
//       setTimeout(() => {
//         otpRef.current?.focus();
//       }, 200);
//     }
//   }, [showOtpInput]);

//   const handleOtpVerify = async () => {
//     if (!otp || otp.length !== 6) {
//       toast.error("Enter valid 6-digit OTP");
//       return;
//     }

//     if (!otpId) {
//       toast.error("OTP expired. Please resend OTP");
//       return;
//     }

//     try {
//       setOtpLoading(true);

//       const payload = {
//         mobile: formData.mobile,
//         otp,
//         otpId,
//       };

//       const res = await axiosInstance.post("/otp/verifyOtp", payload);

//       if (!res?.data?.status) {
//         toast.error(res?.data?.message || "Invalid OTP");
//         return;
//       }

//       toast.success("Mobile verified successfully!");

//       setIsPhoneVerified(true);
//       setShowOtpInput(false);
//       setOtp("");
//       setOtpId(null); // ✅ reset
//       setCanResend(false);
//       setTimer(30);
//       setResendAttempts(0);
//       setIsLocked(false);
//       setLockTimer(0);

//     } catch (err) {
//       toast.error("OTP verification failed");
//     } finally {
//       setOtpLoading(false);
//     }
//   };



//   // ---------------- SUBMIT (fixed) ----------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     const isValid = validateForm();
//     if (!isValid) return;

//     // 🚨 Block submit if phone not verified
//     if (!isPhoneVerified) {
//       toast.error("Please verify your phone number first");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const payload = { ...formData };

//       const res = await axiosInstance.post("/enquiry/contact", payload);
//       // 👆 change API as per backend

//       if (!res?.data?.status) {
//         toast.error(res?.data?.message || "Something went wrong");
//         return;
//       }

//       toast.success("Demo booked successfully!");

//       // ✅ Close dialog
//       setVisible(false);

//       // ✅ Reset form
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         companyName: "",
//         service: "",
//         message: "",
//       });

//       setOpen(false);

//     } catch (err) {
//       toast.error("Failed to submit. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // CTA form ends here

//   return (
//     <>
//       {/* <Toast ref={toastRef} /> */}

//       <Dialog
//         visible={visible}
//         draggable={false}
//         onHide={() => setVisible(false)}
//         header={
//           <div className="flex justify-between items-center w-full">
//             <div className="flex items-center gap-2">
//               <img
//                 src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
//                 alt="wave"
//                 className="h-[40px] w-[40px]"
//               />
//               <div>
//                 <p className="text-sm text-gray-600">Hi Proactive</p>
//                 <h1 className="text-lg font-semibold text-black">
//                   Welcome Back to Proactive
//                 </h1>
//               </div>
//             </div>
//           </div>
//         }
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-4">
//             {/* --- First & Last Name --- */}
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
//               {["firstName", "lastName"].map((field) => (
//                 <div key={field} className="flex flex-col">
//                   <label className="mb-1 text-sm font-medium text-gray-700">
//                     {field === "firstName" ? "First Name" : "Last Name"}
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
//                       <CiUser size={20} />
//                     </span>
//                     <input
//                       type="text"
//                       name={field}
//                       value={formData[field]}
//                       placeholder={`Enter your ${field === "firstName" ? "first" : "last"
//                         } name`}
//                       onChange={handleChange}
//                       className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-50"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* --- Email & Phone --- */}
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
//                     <FiMail size={20} />
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     placeholder="Enter your email"
//                     onChange={handleChange}
//                     className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <div className="flex gap-2 items-end">
//                   <div>
//                     <label className="mb-1 text-sm font-medium text-gray-700">
//                       Phone Number
//                     </label>
//                     <div className="relative w-full">
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                         <CiPhone size={20} />
//                       </span>

//                       <input
//                         type="tel"
//                         name="mobile"
//                         value={formData.mobile}
//                         disabled={isPhoneVerified}
//                         onChange={handleChange}
//                         maxLength={10}
//                         placeholder="Enter your phone number"
//                         className={`w-full border rounded-full h-[42px] pl-10 pr-3 ${isPhoneVerified
//                           ? "bg-gray-100 text-gray-500 cursor-not-allowed"
//                           : "hover:bg-gray-100"
//                           }`}
//                       />
//                     </div>
//                   </div>

//                   {!isPhoneVerified ? (
//                     <button
//                       type="button"
//                       onClick={handleVerifyClick}
//                       disabled={showOtpInput || otpLoading}
//                       className={`relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
//                                         ${showOtpInput || isSendingOtp
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-[#3e66f3] hover:text-white cursor-pointer"
//                         }
//                                       `}
//                     >
//                       <span className="relative z-10 flex items-center gap-2">

//                         {otpLoading ? (
//                           <>
//                             {/* Spinner */}
//                             <svg
//                               className="animate-spin h-6 w-10 text-white"
//                               viewBox="0 0 24 24"
//                             >
//                               <circle
//                                 className="opacity-25"
//                                 cx="12"
//                                 cy="12"
//                                 r="10"
//                                 stroke="currentColor"
//                                 strokeWidth="4"
//                                 fill="none"
//                               />
//                               <path
//                                 className="opacity-75"
//                                 fill="currentColor"
//                                 d="M4 12a8 8 0 018-8v8z"
//                               />
//                             </svg>


//                           </>
//                         ) : showOtpInput ? (
//                           "OTP Sent"
//                         ) : (
//                           "Verify"
//                         )}

//                       </span>

//                       {/* Hover Effect (Disable when loading) */}
//                       {!otpLoading && !showOtpInput && (
//                         <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                       )}
//                     </button>
//                   ) : (
//                     <CheckCircle className="text-green-500 w-6 h-6" />
//                   )}
//                 </div>

//                 {/* OTP Section (unchanged) */}
//                 {showOtpInput && !isPhoneVerified && (
//                   <div className="flex flex-col gap-3 mt-2">
//                     {/* <p className="open-sans text-sm">
//                       Please enter your{" "}
//                       <span className="text-[#3e66f3]">6 Digit</span> OTP.
//                     </p> */}

//                     {/* <div className="flex flex-col md:flex-row gap-3 items-center">
//                                       <InputOtp
//                                         value={otp}
//                                         onChange={(e) => setOtp(e.value)}
//                                         length={6}
//                                         integerOnly
//                                         inputStyle={{
//                                           border: "1.5px solid #9ca3af",
//                                           borderRadius: "8px",
//                                           width: "45px",
//                                           height: "45px",
//                                           textAlign: "center",
//                                         }}
//                                       />

//                                       <div className="flex gap-2">
//                                         <button
//                                           type="button"
//                                           onClick={handleOtpVerify}
//                                           className="relative poppins  text-nowrap inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
//                                         >
//                                           <span className="relative z-10">Submit</span>

//                                           <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                                         </button>



//                                         <button
//                                           type="button"
//                                           disabled={!canResend || isLocked}
//                                           onClick={handleResendOtp}
//                                           className={`rounded-md poppins flex flex-wrap text-nowrap px-3 py-1 ${
//                                             !canResend || isLocked
//                                               ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                                               : "bg-gray-200"
//                                           }`}
//                                         >
//                                           {isLocked
//                                             ? `Try again in ${Math.floor(lockTimer / 60)}m ${
//                                                 lockTimer % 60
//                                               }s`
//                                             : canResend
//                                             ? "Resend"
//                                             : `Resend in ${timer}s`}
//                                         </button>
//                                       </div>
//                                     </div> */}

//                     {/* OTP Input + Submit */}
//                     <div className="flex flex-col md:flex-row gap-3">
//                       <InputOtp
//                         ref={otpRef}
//                         value={otp}
//                         onChange={(e) => {
//                           setOtp(e.value);
//                         }}
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
//                       <div className="flex gap-3">
//                         <button
//                           type="button"
//                           onClick={handleOtpVerify}
//                           disabled={otpLoading}
//                           className={`relative poppins inline-flex items-center justify-center py-2 px-4 rounded-lg text-white
//                 ${isVerifyingOtp
//                               ? "bg-gray-400 cursor-not-allowed"
//                               : "bg-[#3e66f3]"
//                             }`}
//                         >
//                           <span className="relative z-10">{otpLoading ? "Verifying..." : "Submit"}</span>
//                           <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                         </button>

//                         {/* ✅ Show resend button ONLY when timer finished AND not locked */}
//                         {canResend && !isLocked && (
//                           <button
//                             type="button"
//                             onClick={handleResendOtp}
//                             className=" rounded-md poppins text-nowrap px-4 py-2 bg-gray-200"
//                           >
//                             Resend
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                     {/* ✅ Resend timer below the OTP fields */}
//                     <div className="">
//                       {/* Show timer only when counting down */}
//                       {!canResend && !isLocked && (
//                         <p className="text-sm text-gray-600 poppins">
//                           Resend OTP in{" "}
//                           <span className="font-semibold">{timer}s</span>
//                         </p>
//                       )}

//                       {/* Show locked message */}
//                       {isLocked && (
//                         <p className="text-sm text-red-500 poppins">
//                           Try again in {Math.floor(lockTimer / 60)}m{" "}
//                           {lockTimer % 60}s
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//             </div>

//             {/* --- Company & Service --- */}
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">
//                   Company Name
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <MdOutlineMapsHomeWork size={20} />
//                   </span>
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     placeholder="Enter your company name"
//                     className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full max-w-sm">
//                 <label className="mb-1 text-sm font-medium text-gray-700">
//                   Services
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <AiOutlineCustomerService size={20} />
//                   </span>
//                   <button
//                     aria-label="Open Services DropDown"
//                     type="button"
//                     onClick={() => setOpen(!open)}
//                     className="w-full border rounded-full bg-white h-[42px] pl-10 pr-3 flex items-center justify-between text-gray-700 hover:bg-gray-100"
//                   >
//                     <span>
//                       {formData.service ? formData.service : "Select Service"}
//                     </span>
//                     <svg
//                       className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""
//                         }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {open && (
//                     <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 max-h-50 overflow-auto">
//                       {services.map((service) => (
//                         <li
//                           key={service.id}
//                           onClick={() => {
//                             setFormData({
//                               ...formData,
//                               service: service.name,
//                             });
//                             setOpen(false);
//                           }}
//                           className={`px-4 py-2 cursor-pointer rounded-lg ${formData.service === service.name
//                             ? "bg-[#3e66f3] text-white"
//                             : "hover:bg-gray-100 text-gray-700"
//                             }`}
//                         >
//                           {service.name}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* --- Message --- */}
//             <div className="flex flex-col">
//               <label className="mb-1 text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-3 text-gray-400">
//                   <RiMessage2Line size={20} />
//                 </span>
//                 <textarea
//                   name="message"
//                   placeholder="How can we help you?"
//                   rows={3}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="border p-2 rounded-2xl w-full text-base min-h-[80px] max-h-[120px] pl-10 hover:bg-gray-100"
//                 />
//               </div>
//             </div>

//             {/* --- Submit --- */}
//             <div className="flex justify-center">
//               <button
//                 aria-label="Submit Form"
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`relative inline-flex items-center justify-center px-8 py-3 text-[14px] font-semibold rounded-full text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
//     ${isSubmitting
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-[#3e66f3] hover:text-white cursor-pointer"
//                   }
//   `}
//               >
//                 <span className="relative z-10 flex items-center gap-2">

//                   {isSubmitting ? (
//                     <>
//                       {/* Spinner */}
//                       <svg
//                         className="animate-spin h-4 w-4 text-white"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                           fill="none"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8v8z"
//                         />
//                       </svg>

//                       Submitting...
//                     </>
//                   ) : (
//                     "Submit"
//                   )}

//                 </span>

//                 {/* Hover Effect */}
//                 {!isSubmitting && (
//                   <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                 )}
//               </button>

//             </div>
//           </div>
//         </form>
//       </Dialog>

//     </>
//   );
// };

// export default BookDemoDialog;






"use client";
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputOtp } from "primereact/inputotp";
// icons

import { CiUser } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { axiosInstance } from "@/lib/axios";

const BookDemoDialog = ({ visible, setVisible }) => {
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resendAttempts, setResendAttempts] = useState(0);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
    service: "",
    message: "",
    source: "book-demo",
  });
  const otpRef = useRef(null);
  const [open, setOpen] = useState(false);
  // dropdown state
  const services = [
    { id: 1, name: "Web Solutions" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "WhatsApp Business API" },
    { id: 4, name: "RCS Business Messaging" },
    { id: 5, name: "SMS Solution" },
    { id: 6, name: "Virtual Receptionist (IVR)/Missed Call" },
    { id: 7, name: "Chatbot Services" },
    { id: 8, name: "API Integrations" },
    { id: 9, name: "2 Way SMS (Long/Shortcode)" },
    { id: 10, name: "Missed Call Services" },
    { id: 11, name: "Other CPaaS Solutions" },
  ];

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Custom field restrictions
    if (name === "firstName" || name === "lastName") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, [name]: lettersOnly });
    } else if (name === "mobile") {
      const numbersOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numbersOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ---------------- VALIDATION (fixed) ----------------
  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!nameRegex.test(formData.firstName)) {
      toast.error("First name can contain only alphabets");
      return false;
    }

    if (!formData.lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }
    if (!nameRegex.test(formData.lastName)) {
      toast.error("Last name can contain only alphabets");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!formData.mobile.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    if (!phoneRegex.test(formData.mobile)) {
      toast.error("Enter a valid 10-digit phone number");
      return false;
    }

    if (!formData.companyName.trim()) {
      toast.error("Company name is required");
      return false;
    }

    if (!formData.service) {
      toast.error("Please select a service");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    if (formData.message.trim().length < 30) {
      toast.error("Message must be at least 30 characters long");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (!showOtpInput || canResend || isLocked) return;

    if (timer <= 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, showOtpInput, canResend, isLocked]);

  // Lock countdown
  useEffect(() => {
    if (!isLocked || lockTimer <= 0) return;

    const interval = setInterval(() => {
      setLockTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLocked, lockTimer]);

  const handleResendOtp = async () => {
    if (isLocked) return;

    // Max 3 attempts
    if (resendAttempts >= 3) {
      setIsLocked(true);
      setLockTimer(300); // 5 minutes lock
      toast.error("Too many attempts. Locked for 5 minutes.");
      return;
    }

    try {
      setOtpLoading(true);

      const payload = {
        mobile: formData.mobile,
      };

      const res = await axiosInstance.post("/otp/sendOtp", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to resend OTP");
        return;
      }

      toast.success("OTP resent successfully!");

      // Save otpId if backend sends
      if (res?.data?.otpId) {
        setOtpId(res.data.otpId);
      }

      setOtp("");
      setResendAttempts((prev) => prev + 1);

      setCanResend(false);
      setTimer(30);

    } catch (err) {
      toast.error("Failed to resend OTP");
    } finally {
      setOtpLoading(false);
    }
  };


  useEffect(() => {
    if (lockTimer === 0 && isLocked) {
      setIsLocked(false);
      setResendAttempts(0);
      setCanResend(true);
    }
  }, [lockTimer, isLocked]);


  const handleVerifyClick = async () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      toast.error("Enter valid 10-digit mobile number");
      return;
    }

    try {
      setOtpLoading(true);
      const payload = {
        mobile: formData.mobile,
      };

      const res = await axiosInstance.post("/otp/sendOtp", payload);

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to send OTP");
        return;
      }

      toast.success("OTP sent successfully!");

      if (res?.data?.otpId) {
        setOtpId(res.data.otpId); // ✅ save otpId
      }

      setShowOtpInput(true);

      setCanResend(false);
      setTimer(30); // reset to 30s

    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };


  useEffect(() => {
    if (showOtpInput) {
      setTimeout(() => {
        otpRef.current?.focus();
      }, 200);
    }
  }, [showOtpInput]);

  const handleOtpVerify = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Enter valid 6-digit OTP");
      return;
    }

    if (!otpId) {
      toast.error("OTP expired. Please resend OTP");
      return;
    }

    try {
      setOtpLoading(true);

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

      toast.success("Mobile verified successfully!");

      setIsPhoneVerified(true);
      setShowOtpInput(false);
      setOtp("");
      setOtpId(null); // ✅ reset
      setCanResend(false);
      setTimer(30);
      setResendAttempts(0);
      setIsLocked(false);
      setLockTimer(0);

    } catch (err) {
      toast.error("OTP verification failed");
    } finally {
      setOtpLoading(false);
    }
  };



  // ---------------- SUBMIT (fixed) ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const isValid = validateForm();
    if (!isValid) return;

    // 🚨 Block submit if phone not verified
    if (!isPhoneVerified) {
      toast.error("Please verify your phone number first");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = { ...formData };

      const res = await axiosInstance.post("/enquiry/contact", payload);
      // 👆 change API as per backend

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Something went wrong");
        return;
      }

      toast.success("Demo booked successfully!");

      // ✅ Close dialog
      setVisible(false);

      // ✅ Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        companyName: "",
        service: "",
        message: "",
      });

      setOpen(false);

    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // CTA form ends here

  return (
    <>
      {/* <Toast ref={toastRef} /> */}

      <Dialog
        visible={visible}
        draggable={false}
        onHide={() => setVisible(false)}
        className="p-5 h-auto bg-white"
        header={
          <div className="flex justify-between items-center w-full mb-1">
            <div className="flex items-center gap-2">
              <img
                src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
                alt="wave"
                className="h-[40px] w-[40px]"
              />
              <div>
                <p className="text-sm text-gray-600">Hi Proactive</p>
                <h1 className="text-lg font-semibold text-black">
                  Welcome Back to Proactive
                </h1>
              </div>
            </div>
          </div>
        }
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 space-y-1">
            {/* --- First & Last Name --- */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-gray-700">
                    {field === "firstName" ? "First Name" : "Last Name"}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                      <CiUser size={20} />
                    </span>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      placeholder={`Enter your ${field === "firstName" ? "first" : "last"
                        } name`}
                      onChange={handleChange}
                      className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-50"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* --- Email & Phone --- */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                    <FiMail size={20} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-end">
                  <div>
                    <label className="mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <CiPhone size={20} />
                      </span>

                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        disabled={isPhoneVerified}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="Enter your phone number"
                        className={`w-full border rounded-full h-[42px] pl-10 pr-3 ${isPhoneVerified
                          ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                          : "hover:bg-gray-100"
                          }`}
                      />
                    </div>
                  </div>

                  {!isPhoneVerified ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (canResend && !isLocked) {
                          handleResendOtp();   // Resend
                        } else if (!showOtpInput) {
                          handleVerifyClick(); // Send OTP
                        }
                      }}
                      disabled={otpLoading || isLocked}
                      className={`relative poppins text-nowrap inline-flex items-center justify-center py-2 px-4 text-base open-sans rounded-lg text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
                          ${otpLoading || isLocked
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#3e66f3] hover:text-white cursor-pointer"
                        }
                                `}
                    >
                      <span className="relative z-10 flex items-center gap-2">

                        {/* Loader */}
                        {isLocked ? (

                          `Locked ${Math.floor(lockTimer / 60)}:${String(lockTimer % 60).padStart(2, "0")}`

                        ) : canResend ? (

                          "Resend OTP"

                        ) : showOtpInput ? (

                          `Resend ${timer}s`

                        ) : (

                          "Verify"

                        )}

                      </span>

                      {/* Hover Effect */}
                      {!otpLoading && !isLocked && (
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
                          disabled={otpLoading}
                          className={`relative poppins inline-flex items-center justify-center py-2 px-4 rounded-lg text-white
                ${isVerifyingOtp
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-[#3e66f3]"
                            }`}
                        >
                          <span className="relative z-10">{otpLoading ? "Verifying..." : "Submit"}</span>
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* --- Company & Service --- */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <MdOutlineMapsHomeWork size={20} />
                  </span>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full max-w-sm">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Services
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <AiOutlineCustomerService size={20} />
                  </span>
                  <button
                    aria-label="Open Services DropDown"
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full border rounded-full bg-white h-[42px] pl-10 pr-3 flex items-center justify-between text-gray-700 hover:bg-gray-100"
                  >
                    <span>
                      {formData.service ? formData.service : "Select Service"}
                    </span>
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {open && (
                    <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 max-h-50 overflow-auto">
                      {services.map((service) => (
                        <li
                          key={service.id}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              service: service.name,
                            });
                            setOpen(false);
                          }}
                          className={`px-4 py-2 cursor-pointer rounded-lg ${formData.service === service.name
                            ? "bg-[#3e66f3] text-white"
                            : "hover:bg-gray-100 text-gray-700"
                            }`}
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* --- Message --- */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <RiMessage2Line size={20} />
                </span>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 rounded-2xl w-full text-base min-h-[80px] max-h-[120px] pl-10 hover:bg-gray-100"
                />
              </div>
            </div>

            {/* --- Submit --- */}
            <div className="flex justify-center mt-2">
              <button
                aria-label="Submit Form"
                type="submit"
                disabled={isSubmitting}
                className={`relative inline-flex items-center justify-center px-8 py-3 text-[14px] font-semibold rounded-full text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group
                        ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#3e66f3] hover:text-white cursor-pointer"
                  }
                      `}
              >
                <span className="relative z-10 flex items-center gap-2">

                  {isSubmitting ? (
                    <>
                      {/* Spinner */}
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

                {/* Hover Effect */}
                {!isSubmitting && (
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                )}
              </button>

            </div>
          </div>
        </form>
      </Dialog>

    </>
  );
};

export default BookDemoDialog;
