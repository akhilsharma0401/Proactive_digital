// old Footer

// import {
//   FaTwitter,
//   FaFacebookF,
//   FaYoutube,
//   FaPinterestP,
//   FaLinkedinIn,
//   FaInstagram,
//   FaFlag,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="  bg-[#1f1f1f] text-gray-300 px-4">
//       <div className="max-w-7xl container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-20">
//         <div>
//           <h2 className="font-bold text-white text-lg mb-4">
//             Proactive Professional Services Pvt Ltd
//           </h2>
//           <hr className="border-gray-500 mb-4" />
//           <div className="border border-gray-600 p-4">
//             <p className="font-semibold text-white">Corporate Office :</p>
//             <p>22, 3rd Floor, Biswa Nagar, New</p>
//             <p>Sanganer Road, Jaipur, Rajasthan, India</p>

//             <p className="mt-4 font-semibold text-white">Branch Office :</p>
//             <p>F-9 Usha Chambers, Deep Central</p>
//             <p>Market, Ashok Vihar, Phase-1, Delhi, India</p>

//             <p className="mt-4 font-semibold text-white">Contact :</p>
//             <p>+91 9680006460</p>
//           </div>
//         </div>

//         <div>
//           <h2 className="font-bold text-white text-lg mb-4">Our Services</h2>
//           <hr className="border-gray-500 mb-4" />
//           <div className="grid grid-cols-2 gap-y-2 gap-x-6 ">
//             {[
//               "Web Development",
//               "Bulk SMS",
//               "Ecommerce Development",
//               "Toll Free Number",
//               "Android App Development",
//               "Virtual Receptionist",
//               "IOS App Development",
//               "Search Engine Optimization",
//               "Content Marketing",
//               "Social Media Marketing",
//               "Branding",
//               "Google Adwords",
//             ].map((service, index) => (
//               <a key={index} href="#" className="hover:text-white">
//                 {service}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="font-bold text-white text-lg mb-4">Recent Posts</h2>
//           <hr className="border-gray-500 mb-4" />
//           <ul className="space-y-4">
//             {[
//               "Why Jaipur Startups Should Invest in Digital Marketing from Day 1",
//               "10 Common Digital Marketing Mistakes Jaipur Businesses Should Avoid",
//               "Digital Marketing Trends Jaipur Businesses Can’t Ignore in 2025",
//               "Case Studies: Successful Implementation of RCS Marketing",
//             ].map((post, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <FaFlag className="text-gray-400 mt-1" />
//                 <a href="#" className=" hover:text-white">
//                   {post}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 py-4 flex justify-center space-x-6 text-lg">
//         <a
//           href="https://twitter.com/yourprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaTwitter className="hover:text-white cursor-pointer" />
//         </a>
//         <a
//           href="https://facebook.com/yourprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaFacebookF className="hover:text-white cursor-pointer" />
//         </a>
//         <a
//           href="https://youtube.com/yourchannel"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaYoutube className="hover:text-white cursor-pointer" />
//         </a>
//         <a
//           href="https://pinterest.com/yourprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaPinterestP className="hover:text-white cursor-pointer" />
//         </a>
//         <a
//           href="https://linkedin.com/in/yourprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLinkedinIn className="hover:text-white cursor-pointer" />
//         </a>
//         <a
//           href="https://instagram.com/yourprofile"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaInstagram className="hover:text-white cursor-pointer" />
//         </a>
//       </div>

//       <div className="bg-[#181818] py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//         <div className="mb-2 md:mb-0">
//           <a href="#" className="hover:underline">
//             Terms and Conditions
//           </a>{" "}
//           |{" "}
//           <a href="#" className="hover:underline">
//             Privacy Policy
//           </a>
//         </div>
//         <div>©Copyright 2024 All rights reserved | ISO 9001 : 2008</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import Image from "next/image";
import Link from "next/link";


// assets
import footerCertificateBatch from "../../../../public/images/footerCertificateBatch.svg";
import celitixCpaasSolutionLogo from "../../../../public/images/celitixCpaasSolutionLogo.svg";
import celitixCpaasSolutionLogoWhite from "../../../../public/images/celitixCpaasSolutionLogoWhite.svg";
import metaTechWhite from "../../../../public/images/metaTechWhite.svg";
import proactiveLogo from "../../../../public/images/proactiveLogo.png";

// icon
import CelitixWhite from "../../../../public/icons/CelitixWhite.png";
import proactiveLogoWhite from "../../../../public/icons/proactiveLogoWhite.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";


// const Footer = () => {
//   return (
//     <footer className="bg-black px-6 py-12 ">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
//           {/* About Company */}
//           <div className=" flex flex-col justify-between gap-4 ">
//             <div className="flex flex-col gap-3">
//               <div className="">
//                 <Image
//                   src={proactiveLogoWhite}
//                   alt="Proactive logo"
//                   className="w-60"
//                 />
//               </div>
//               {/* <div className="bg-white p-2 rounded-xl">
//                   <Image src={proactiveLogo} alt="error" className="w-60" />
//                 </div> */}
//               <p className="open-sans text-[16px] text-white leading-relaxed ">
//                 We are a results-driven digital marketing company helping
//                 businesses grow through powerful online strategies.
//               </p>
//             </div>
//             <div className="">
//               <a
//                 href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&ref=pd_home_hero_cta&id=8342781115823000&section=overview"
//                 target="_blank"
//               >
//                 <Image src={metaTechWhite} alt="" className="w-40" />
//               </a>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="flex flex-col gap-4 ">
//             <h2 className="poppins text-white text-[20px] font-medium">
//               Address
//             </h2>
//             <div className="flex flex-col justify-between gap-3 h-full ">
//               <div className="flex flex-col gap-4 text-white text-[16px]">
//                 {/* address */}
//                 <div className="flex gap-2  ">
//                   <FaMapMarkerAlt className="text-[30px]" />
//                   {/* Address */}
//                   <div className="flex flex-col">
//                     <a
//                       href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
//                       target="_blank"
//                       className="open-sans leading-relaxed  "
//                     >
//                       3rd Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
//                       Metro Pillar No. 75, Jaipur, Rajasthan 302019
//                     </a>
//                   </div>
//                 </div>

//                 {/* phone  */}
//                 <div className="flex gap-2 items-center">
//                   <FaPhone className="  text-[14px]  " />
//                   <a
//                     href="tel:+919680006460"
//                     className="open-sans  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  "
//                   >
//                     +91 - 96800-06460
//                   </a>
//                 </div>

//                 {/* email */}
//                 <div className="flex gap-2  ">
//                   {/* Email Icon */}
//                   <MdOutlineEmail className="text-[16px] md:text-[16px] mt-2" />

//                   {/* Email Address */}
//                   <div className="flex  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  ">
//                     <a
//                       href="mailto:support@proactivesms.in"
//                       className="open-sans text-lg group-hover:underline transition-all duration-200 "
//                     >
//                       support@proactivesms.in
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media Icons */}
//               <div className="flex gap-3">
//                 <a href="https://www.facebook.com/ppspl" target="_blank">
//                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
//                     <FaFacebookF className=" text-md" />
//                   </div>
//                 </a>

//                 <a href="https://x.com/ProactivePPSPL" target="_blank">
//                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
//                     <FaTwitter className=" text-md" />
//                   </div>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/proactive.digital/"
//                   target="_blank"
//                 >
//                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
//                     <FaInstagram className=" text-md" />
//                   </div>
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/proactive-professional-services-pvt-ltd"
//                   target="_blank"
//                 >
//                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
//                     <FaLinkedinIn className=" text-md" />
//                   </div>
//                 </a>
//                 <a href="https://www.youtube.com/@ppspl_" target="_blank">
//                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
//                     <IoLogoYoutube className=" text-md" />
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col gap-4 ">
//             <h2 className="poppins text-white text-[20px] font-medium">
//               Quick Links
//             </h2>

//             <div className="grid grid-cols-2 gap-2 text-white ">
//               {/* column 1 */}
//               <div className="flex flex-col gap-3 ">
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
//                   <Link href="/">Home</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
//                   <Link href="/about-us">About</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
//                   <Link href="/services">Services</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
//                   <Link href="/solutions">Solutions</Link>
//                 </div>
//               </div>

//               {/* column 2 */}
//               <div className="flex flex-col gap-3 ">
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
//                   <Link href="/portfolio">Portfolio</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
//                   <Link href="/blogs">Blog</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
//                   <Link href="/career">Career</Link>
//                 </div>
//                 <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
//                   <Link href="/contact-us">Contact</Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Channel */}
//           <div className="flex flex-col gap-4 ">
//             <h2 className="poppins text-white text-[20px] font-medium">
//               Channel
//             </h2>

//             <div className="flex flex-col justify-between gap-8 md:gap-4 h-full ">
//               <a href="https://celitix.com/" target="_blank">
//                 <Image
//                   src={CelitixWhite}
//                   // src={celitixCpaasSolutionLogo}
//                   // src={celitixCpaasSolutionLogoWhite}
//                   alt="celitix-logo"
//                   className="w-60"
//                 />
//               </a>
//               {/* <div className=" flex justify-center p-2  bg-white rounded-xl  " >
//                   <a href="https://celitix.com/" target="_blank">
//                     <Image
//                       src={CelitixWhite}  
//                       // src={celitixCpaasSolutionLogo}  
//                       // src={celitixCpaasSolutionLogoWhite}
//                       alt="celitix-logo"
//                       className="w-60"
//                     />
//                   </a>
//                 </div> */}
//               <div className="flex">
//                 <Image
//                   src={footerCertificateBatch}
//                   alt="footer"
//                   className="w-70"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col gap-2 pt-10 items-center justify-center text-center text-white ">
//           <p className="open-sans ">
//             ©Copyright 2024 All rights reserved | ISO 9001 : 2008
//           </p>
//           <p className="open-sans">
//             <Link href="/tnc" className="hover:text-[#3e66f3]">
//               Terms & Conditions
//             </Link>{" "}
//             |{" "}
//             <Link href="/privacy-policy" className="hover:text-[#3e66f3]">
//               Privacy Policy
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
const Footer = () => {
  return (
    // <footer className="bg-[#f9fafc] text-black px-4 md:px-10 lg:px-20 py-10 ">
    //   <div className="max-w-7xl mx-auto ">
    //     <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 border-b border-gray-500 pb-4">
    //       {/* About Company */}
    //       <div className="flex flex-col justify-between gap-4 ">
    //         <div className="flex flex-col gap-3">
    //           <div className="">
    //             <h3 className="text-[#3e66f3] text-3xl lg:text-4xl font-medium" >Proactive Professional Services Pvt. Ltd.</h3>
    //           </div>
    //           <p className="open-sans text-[16px] leading-relaxed ">
    //             We build modern websites and scalable web applications that help businesses establish a strong online presence and achieve measurable growth. Delivering reliable, user-focused digital solutions tailored to business needs.
    //           </p>
    //         </div>
    //         {/* Social Media Icons */}
    //         <div className="flex gap-3">
    //           <a
    //             aria-label="Facebook"
    //             href="https://www.facebook.com/ppspl"
    //             target="_blank"
    //             rel="noopener noreferrer">
    //             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#3e66f3] text-white transition-colors cursor-pointer">
    //               <FaFacebookF className=" text-md" />
    //             </div>
    //           </a>

    //           <a
    //             aria-label="Twitter"
    //             href="https://x.com/ProactivePPSPL"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#3e66f3] text-white transition-colors cursor-pointer">
    //               <FaXTwitter className=" text-md" />
    //             </div>
    //           </a>
    //           <a
    //             href="https://www.instagram.com/proactive.digital/"
    //             aria-label="Instagram"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#3e66f3] text-white transition-colors cursor-pointer">
    //               <FaInstagram className=" text-md" />
    //             </div>
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/company/proactive-professional-services-pvt-ltd"
    //             aria-label="Linkdin"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#3e66f3] text-white transition-colors cursor-pointer">
    //               <FaLinkedinIn className=" text-md" />
    //             </div>
    //           </a>
    //           <a
    //             href="https://www.youtube.com/@ppspl_"
    //             aria-label="Youtube"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#3e66f3] text-white transition-colors cursor-pointer">
    //               <IoLogoYoutube className=" text-md" />
    //             </div>
    //           </a>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-2 ">
    //         {/* Quick Links */}
    //         <div className=" flex flex-col gap-3  ">
    //           <h2 className="poppins text-[#3e66f3] text-[22px] font-medium">
    //             Quick Links
    //           </h2>

    //           <div className="grid grid-cols-2 gap-2 ">
    //             {/* column 1 */}
    //             <div className="flex flex-col gap-3 ">
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">
    //                 <Link href="/">Home</Link>
    //               </div>
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">
    //                 <Link href="/about-us">About</Link>
    //               </div>
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">
    //                 <Link href="/services">Services</Link>
    //               </div>
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">
    //                 <Link href="/solutions">Solutions</Link>
    //               </div>
    //             </div>

    //             {/* column 2 */}
    //             <div className="flex flex-col gap-3 ">
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full   ">
    //                 <Link href="/portfolio">Portfolio</Link>
    //               </div>
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full   ">
    //                 <Link href="/blogs">Blog</Link>
    //               </div>
    //               <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full   ">
    //                 <Link href="/career">Career</Link>
    //               </div>
    //               <div className="flex poppins relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full">
    //                 <Link href="/contact-us">Contact</Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Address */}
    //         <div className="flex flex-col gap-3 ">
    //           <h2 className="poppins text-[#3e66f3] text-[22px] font-medium">
    //             Address
    //           </h2>
    //           <div className="flex flex-col justify-between gap-3 h-full ">
    //             <div className="flex flex-col gap-1.5 text-[16px]">
    //               {/* address */}
    //               <div className="flex gap-2  ">
    //                 <FaMapMarkerAlt className="text-[16px] text-[#3e66f3] mt-1.5 " />
    //                 {/* Address */}
    //                 <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  ">
    //                   <a
    //                     href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="open-sans leading-relaxed "
    //                   >
    //                     3rd Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
    //                     Metro Pillar No. 75, Jaipur, Rajasthan 302019
    //                   </a>
    //                 </div>
    //               </div>

    //               {/* phone  */}
    //               <div className="flex gap-2 items-center">
    //                 <FaPhone className="  text-[14px] text-[#3e66f3] " />
    //                 <a
    //                   href="tel:+919680006460"
    //                   className="open-sans  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  "
    //                 >
    //                   +91 - 96800-06460
    //                 </a>
    //               </div>

    //               {/* email */}
    //               {/* info@proactivedigital.in */}
    //               <div className="flex gap-2  ">
    //                 {/* Email Icon */}
    //                 <MdOutlineEmail className="text-[16px] md:text-[16px] mt-2 text-[#3e66f3]" />

    //                 {/* Email Address */}
    //                 <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  ">
    //                   <a
    //                     href="mailto:info@proactivedigital.in"
    //                     className="open-sans text-lg group-hover:underline transition-all duration-200 "
    //                   >
    //                     info@proactivedigital.in
    //                   </a>
    //                 </div>
    //               </div>

    //               {/* support@proactivesms.in */}
    //               <div className="flex gap-2  ">
    //                 {/* Email Icon */}
    //                 <MdOutlineEmail className="text-[16px] md:text-[16px] mt-2 text-[#3e66f3] " />

    //                 {/* Email Address */}
    //                 <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  ">
    //                   <a
    //                     href="mailto:support@proactivesms.in"
    //                     className="open-sans text-lg group-hover:underline transition-all duration-200 "
    //                   >
    //                     support@proactivesms.in
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Section */}
    //     {/* <div className="flex flex-col gap-2 pt-10 items-center justify-center text-center  ">
    //        <p className="flex items-center gap-1 open-sans ">
    //         © {new Date().getFullYear()} All rights reserved | ISO 9001:2008
    //       </p>
    //       <p className="open-sans">
    //         <Link href="/tnc" className="hover:text-[#3e66f3]">
    //           Terms & Conditions
    //         </Link>{" "}
    //         |{" "}
    //         <Link href="/privacy-policy" className="hover:text-[#3e66f3]">
    //           Privacy Policy
    //         </Link>
    //       </p>
    //     </div> */}

    //     <div className="flex flex-col pt-4 h-full md:flex-row gap-2 md:gap-4 justify-center md:justify-between">
    //       <div className="flex">
    //         <p className="flex items-center gap-1 open-sans ">
    //           © {new Date().getFullYear()} All rights reserved | ISO 9001:2008
    //         </p>
    //       </div>
    //       <div className="flex gap-2">
    //         <Link href="/tnc" className="open-sans flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] hover:text-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full">
    //           Terms & Conditions
    //         </Link>{" "}
    //         |{" "}
    //         <Link href="/privacy-policy" className="open-sans flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] hover:text-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full">
    //           Privacy Policy
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <>
      <footer className="relative bg-white overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0">
          {/* Top White Section */}
          <div className="absolute inset-0 bg-[#f9fafc]" />

          {/* Diagonal Blue Section */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, transparent 0%, transparent 45%, #3e66f3 45%, #3e66f3 100%)`,
            }}
          />

          {/* Decorative Geometric Shapes */}
          <div className="absolute top-8 right-8 w-26 h-26 border-4 border-white/20 rounded-3xl rotate-12" />
          <div className="absolute bottom-20 right-64 w-16 h-16 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 left-10 w-32 h-32 border-4 border-[#3e66f3]/10 rounded-full" />
          <div className="absolute bottom-10 left-1/5 w-20 h-20 bg-[#3e66f3]/5 rotate-45" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 space-y-6 py-10">
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6  border-b pb-8 border-gray-400">
            {/* Left Side - Company Info */}
            <div className="flex flex-col gap-2 lg:gap-3 ">
              <div className="flex items-start gap-4  ">
                {/* <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#3e66f3' }}
                  >
                    <Star className="w-10 h-10 text-white fill-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ color: '#3e66f3' }}>ISO</span>
                  </div>
                </div> */}
                <div>
                  <h2
                    className="poppins text-xl font-medium "
                    style={{ color: "#3e66f3" }}
                  >
                    Proactive Professional Services Pvt. Ltd.
                  </h2>
                </div>
              </div>

              <p className="open-sans text-[15px] text-gray-700 leading-relaxed">
                We build modern websites and scalable web applications that help businesses establish a strong online presence and achieve measurable growth.
              </p>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <p className="poppins flex gap-3 text-base font-medium text-[#3e66f3]">
                  <span className="w-1 bg-[#3e66f3] rounded-lg "></span>
                  Follow us
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: FiFacebook, label: "Facebook", color: "#1877f2", href: "https://www.facebook.com/ppspl" },
                    { Icon: FaXTwitter, label: "Twitter", color: "#1da1f2", href: "https://x.com/ProactivePPSPL" },
                    { Icon: FaInstagram, label: "Instagram", color: "#DD2A7B", href: "https://www.instagram.com/proactive.digital/" },
                    { Icon: FaLinkedinIn, label: "LinkedIn", color: "#0077b5", href: "https://www.linkedin.com/company/proactive-professional-services-pvt-ltd" },
                    { Icon: FiYoutube, label: "YouTube", color: "#ff0000", href: "https://www.youtube.com/@ppspl_" },
                  ].map(({ Icon, label, color, href }) => (
                    <a
                      key={label}
                      aria-label={label}
                      href={href}
                      className="group relative w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      target="_blank"
                    >
                      <Icon
                        className="w-6 h-6 transition-all duration-300 text-[#3e66f3]"
                      // style={{ color: "#3e66f3" }} 
                      />
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/*  Contact & Links */}
            {/* Quick Links */}
            <div className="bg-white shadow-xl rounded-2xl p-5 space-y-2 ">
              <h3
                className="poppins text-xl tracking-wide font-medium  "
                style={{ color: "#3e66f3" }}
              >
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-1  ">
                <a href="/" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Home</span>
                </a>

                <a href="/about-us" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">About</span>
                </a>

                <a href="/services" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Services</span>
                </a>

                <a href="/solutions" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Solutions</span>
                </a>

                <a href="/portfolio" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Portfolio</span>
                </a>

                <a href="/blog" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Blog</span>
                </a>

                <a href="/career" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Career</span>
                </a>

                <a href="/contact-us" className="poppins group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3e66f3] group-hover:w-6 transition-all duration-300" />
                  <span className="text-base font-medium text-gray-700 group-hover:text-[#3e66f3] transition-colors">Contact</span>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white shadow-xl rounded-2xl p-5 space-y-2 ">
              <h3
                className="poppins text-xl tracking-wide font-medium  "
                style={{ color: "#3e66f3" }}
              >
                Let's Connect
              </h3>

              <div className="flex flex-col gap-1.5 ">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-[#f9fafc] flex items-center justify-center group-hover:bg-[#3e66f3] transition-colors duration-300">
                    <FiMapPin className="w-4 h-4 text-[#3e66f3] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 space-y-0.5 ">
                    {/* <p className="text-sm font-semibold  text-gray-600 ">
                      Location
                    </p> */}
                    <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  ">
                      <a
                        href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="open-sans text-sm text-gray-800 hover:text-[#3e66f3] leading-relaxed "
                      >
                        3rd Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
                        Metro Pillar No. 75, Jaipur, Rajasthan 302019
                      </a>
                    </div>
                    {/* <p className="open-sans text-sm text-gray-800 leading-relaxed">
                      3rd Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
                      Metro Pillar No. 75, Jaipur, Rajasthan 302019
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-[#f9fafc] flex items-center justify-center group-hover:bg-[#3e66f3] transition-colors duration-300">
                    <HiOutlinePhone className="w-4 h-4 text-[#3e66f3] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full  ">
                    {/* <p className="text-sm font-semibold  text-gray-600 ">
                      Phone
                    </p> */}
                    <a
                      href="tel:+919680006460"
                      className="open-sans text-sm font-medium text-gray-800 hover:text-[#3e66f3] transition-colors"
                    >
                      +91 - 9680006460
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-[#f9fafc] flex items-center justify-center group-hover:bg-[#3e66f3] transition-colors duration-300">
                    <HiOutlineMail className="w-4 h-4 text-[#3e66f3] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 space-y-0.5 ">
                    {/* <p className="text-sm font-semibold  text-gray-600 ">
                      Email
                    </p> */}
                    <div className="flex flex-col gap-1">
                      <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">

                        <a
                          href="mailto:info@proactivedigital.in"
                          className="open-sans block text-sm font-medium text-gray-800 hover:text-[#3e66f3] transition-colors"
                        >
                          info@proactivedigital.in
                        </a>
                      </div>
                      <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#3e66f3] after:transition-all after:duration-300 hover:after:w-full ">
                        <a

                          href="mailto:support@proactivesms.in"
                          className="open-sans block text-sm font-medium text-gray-800 hover:text-[#3e66f3] transition-colors"
                        >
                          support@proactivesms.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Split Design */}
          <div className="flex justify-center">
            {/* Right - Copyright & Links */}
            <div className="text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full ">

                    <Link
                      href="/tnc"
                      className="text-white transition-colors font-medium"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                  <span className="text-white">|</span>
                  <div className="flex relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full ">

                    <Link
                      href="/privacy-policy"
                      className="text-white transition-colors font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <p className="flex gap-2 text-sm text-white font-medium">
                  © 2026 All rights reserved
                  <span className="">|</span>
                  {/* |  */}
                  ISO 9001:2008 Certified
                </p>
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3e66f3] to-[#5b7ff5] rounded-full"> */}
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                  <Award className="w-4 h-4 text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    ISO 9001:2008 Certified
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div> 
      </footer>
    </>
  );
};

export default Footer;
