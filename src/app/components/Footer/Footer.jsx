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
import footerCertificateBatch from "../../../../public/images/footerCertificateBatch.svg";
import celitixCpaasSolutionLogo from "../../../../public/images/celitixCpaasSolutionLogo.svg";
import celitixCpaasSolutionLogoWhite from "../../../../public/images/celitixCpaasSolutionLogoWhite.svg";
import metaTechWhite from "../../../../public/images/metaTechWhite.svg";
import proactiveLogo from "../../../../public/images/proactiveLogo.png";
import CelitixWhite from "../../../../public/icons/CelitixWhite.png";
import proactiveLogoWhite from "../../../../public/icons/proactiveLogoWhite.png";

// icon

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
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-12 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* About Company */}
          <div className=" flex flex-col justify-between gap-4 ">
            <div className="flex flex-col gap-3">
              <div className="">
                <Image
                  src={proactiveLogoWhite}
                  alt="Proactive logo"
                  className="w-60"
                />
              </div>
              {/* <div className="bg-white p-2 rounded-xl">
                  <Image src={proactiveLogo} alt="error" className="w-60" />
                </div> */}
              <p className="open-sans text-[16px] text-white leading-relaxed ">
                We are a results-driven digital marketing company helping
                businesses grow through powerful online strategies.
              </p>
            </div>
            <div className="">
              <a
                href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&ref=pd_home_hero_cta&id=8342781115823000&section=overview"
                target="_blank"
              >
                <Image src={metaTechWhite} alt="" className="w-40" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-4 ">
            <h2 className="poppins text-white text-[20px] font-medium">
              Address
            </h2>
            <div className="flex flex-col justify-between gap-3 h-full ">
              <div className="flex flex-col gap-4 text-white text-[16px]">
                {/* address */}
                <div className="flex gap-2  ">
                  <FaMapMarkerAlt className="text-[30px]" />
                  {/* Address */}
                  <div className="flex flex-col">
                    <a
                      href="https://www.google.com/maps/place/Proactive+Professional+Services+Pvt.+Ltd./@26.883969,75.7651543,17z/data=!3m1!4b1!4m6!3m5!1s0x396db45b8c22d271:0x9794b018af36477b!8m2!3d26.8839642!4d75.7677292!16s%2Fg%2F11jyjb1qg0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="open-sans leading-relaxed  "
                    >
                      3rd Floor, 22, Biswa Nagar, New Sanganer Rd, opposite
                      Metro Pillar No. 75, Jaipur, Rajasthan 302019
                    </a>
                  </div>
                </div>

                {/* phone  */}
                <div className="flex gap-2 items-center">
                  <FaPhone className="  text-[14px]  " />
                  <a
                    href="tel:+919680006460"
                    className="open-sans  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  "
                  >
                    +91 - 96800-06460
                  </a>
                </div>

                {/* email */}
                <div className="flex gap-2  ">
                  {/* Email Icon */}
                  <MdOutlineEmail className="text-[16px] md:text-[16px] mt-2" />

                  {/* Email Address */}
                  <div className="flex  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  ">
                    <a
                      href="mailto:support@proactivesms.in"
                      className="open-sans text-lg group-hover:underline transition-all duration-200 "
                    >
                      support@proactivesms.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a href="https://www.facebook.com/ppspl" target="_blank">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
                    <FaFacebookF className=" text-md" />
                  </div>
                </a>

                <a href="https://x.com/ProactivePPSPL" target="_blank">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
                    <FaTwitter className=" text-md" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/proactive.digital/"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
                    <FaInstagram className=" text-md" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/proactive-professional-services-pvt-ltd"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
                    <FaLinkedinIn className=" text-md" />
                  </div>
                </a>
                <a href="https://www.youtube.com/@ppspl_" target="_blank">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#3e66f3] text-black  hover:text-white transition-colors cursor-pointer">
                    <IoLogoYoutube className=" text-md" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 ">
            <h2 className="poppins text-white text-[20px] font-medium">
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-2 text-white ">
              {/* column 1 */}
              <div className="flex flex-col gap-3 ">
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
                  <Link href="/">Home</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
                  <Link href="/about-us">About</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
                  <Link href="/services">Services</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ">
                  <Link href="/solutions">Solutions</Link>
                </div>
              </div>

              {/* column 2 */}
              <div className="flex flex-col gap-3 ">
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
                  <Link href="/portfolio">Portfolio</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
                  <Link href="/blogs">Blog</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
                  <Link href="/career">Career</Link>
                </div>
                <div className="flex poppins  relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   ">
                  <Link href="/contact-us">Contact</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Channel */}
          <div className="flex flex-col gap-4 ">
            <h2 className="poppins text-white text-[20px] font-medium">
              Channel
            </h2>

            <div className="flex flex-col justify-between gap-8 md:gap-4 h-full ">
              <a href="https://celitix.com/" target="_blank">
                <Image
                  src={CelitixWhite}
                  // src={celitixCpaasSolutionLogo}
                  // src={celitixCpaasSolutionLogoWhite}
                  alt="celitix-logo"
                  className="w-60"
                />
              </a>
              {/* <div className=" flex justify-center p-2  bg-white rounded-xl  " >
                  <a href="https://celitix.com/" target="_blank">
                    <Image
                      src={CelitixWhite}  
                      // src={celitixCpaasSolutionLogo}  
                      // src={celitixCpaasSolutionLogoWhite}
                      alt="celitix-logo"
                      className="w-60"
                    />
                  </a>
                </div> */}
              <div className="flex">
                <Image
                  src={footerCertificateBatch}
                  alt="footer"
                  className="w-70"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 pt-10 items-center justify-center text-center text-white ">
          <p className="open-sans ">
            ©Copyright 2024 All rights reserved | ISO 9001 : 2008
          </p>
          <p className="open-sans">
            <Link href="/tnc" className="hover:text-[#3e66f3]">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link href="/privacy-policy" className="hover:text-[#3e66f3]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
