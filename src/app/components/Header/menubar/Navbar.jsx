// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   FaChevronDown,
//   FaBriefcase,
//   FaClipboardList,
//   FaLock,
//   FaComments,
//   FaCode,
//   FaGlobe,
//   FaShoppingCart,
//   FaMobileAlt,
//   FaSearch,
//   FaShareAlt,
//   FaBullhorn,
//   FaAd,
//   FaFileAlt,
//   FaStar,
//   FaSms,
//   FaPhoneAlt,
//   FaHeadphonesAlt,
//   FaPhoneSlash,
//   FaEnvelopeOpenText,
//   FaUsers,
//   FaGift,
//   FaSync,
//   FaFilm,
// } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { HiOutlineX } from "react-icons/hi";
// import logo from "../../../../../public/images/logo.jpg";
// import BookDemoDialog from './../../BookDemoDialog';

// // Desktop Nav Item
// function NavItem({ label, href }) {

//   return (
//     <li>
//       <Link
//         href={href}
//         className="poppins relative text-gray-800 hover:text-blue-500 transition
//         after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left
//         after:transition-transform after:duration-300 hover:after:scale-x-100"
//       >
//         {label}
//       </Link>
//     </li>
//   );
// }

// // Mobile Nav Item
// function MobileNavItem({ label, href, onClick }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         onClick={onClick}
//         className="block py-2 text-gray-700 hover:text-blue-500"
//       >
//         {label}
//       </Link>
//     </li>
//   );
// }

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);
//   const [mobileNestedDropdown, setMobileNestedDropdown] = useState({});

//   const [visible, setVisible] = useState(false);

//   const toggleDropdown = (menu) => {
//     setMobileDropdown(mobileDropdown === menu ? null : menu);
//   };

//   const toggleNestedDropdown = (parent, key) => {
//     setMobileNestedDropdown((prev) => ({
//       ...prev,
//       [parent]: prev[parent] === key ? null : key,
//     }));
//   };

//   return (
//     <nav className="flex bg-white shadow-lg px-4 z-1000">
//       <div className="container mx-auto flex justify-between items-center py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-gray-800">
//           <Image src={logo} alt="Logo" width={140} className="rounded-lg" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 px-3">
//           <NavItem className="poppins" label="Home" href="/" />

//           {/* About Mega Menu */}
//           <li className="relative group z-1000">
//             <Link
//               href="/about-us"
//               className=" flex items-center space-x-1 text-gray-700 hover:text-blue-500 transition h-full w-full"
//             >
//               <span className="poppins relative after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
//                 About
//               </span>
//               {/* <span className="poppins">
//                 <FaChevronDown size={14} />
//               </span> */}
//             </Link>

//             {/* <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[90vw] max-w-[250px] bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible grid p-4 gap-4 transition-opacity duration-500">
//               <div>
//                 <div className="bg-blue-400 text-white px-3 py-2 font-bold rounded">
//                   PROACTIVE
//                   <div className="text-sm font-normal">Bulk SMS Provider</div>
//                 </div>
//                 <ul className="mt-2 space-y-1">
//                   <li>
//                     <Link
//                       href="/our-agency"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaBriefcase /> Our Agency
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/portfolio"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaClipboardList /> Portfolio
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/privacy-policy"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaLock /> Privacy Policy
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div> */}
//           </li>

//           {/* Services Mega Menu Desktop */}
//           <li className="relative group z-1000">
//             <Link
//               href="/services"
//               className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 transition h-full w-full"
//             >
//               <span className="poppins relative after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
//                 Services
//               </span>
//               <span className="poppins">
//                 <FaChevronDown size={14} />
//               </span>
//             </Link>

//             <div
//               className="absolute left-30 -translate-x-1/2 top-full mt-2 w-[1000px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 grid gap-4"
//               style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
//             >
//               {/* Column 1 */}
//               <div>
//                 <div className="bg-blue-400 text-white px-3 py-2 font-bold rounded">
//                   WEB & APP SOLUTIONS
//                   <div className="text-sm font-normal">
//                     Increasing your online presence
//                   </div>
//                 </div>
//                 <ul className="mt-2 space-y-1">
//                   <li>
//                     <Link
//                       href="/web-development"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaCode /> Web Development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/open-source-development"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaGlobe /> Open Source Development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/ecommerce"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaShoppingCart /> Ecommerce
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Column 2 */}
//               <div>
//                 <div className="bg-blue-400 text-white px-3 py-2 font-bold rounded">
//                   DESIGN
//                   <div className="text-sm font-normal">
//                     Design your presence
//                   </div>
//                 </div>
//                 <ul className="mt-2 space-y-1">
//                   <li>
//                     <Link
//                       href="/web-design"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaSync /> Website Design
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/branding"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaStar /> Branding
//                     </Link>
//                   </li>
//                   {/* <li>
//                     <Link
//                       href="/psd-to-html"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaCode /> PSD to HTML
//                     </Link>
//                   </li> */}
//                   <li>
//                     <Link
//                       href="/animation"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaFilm /> Animation
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Column 3 */}
//               <div>
//                 <div className="bg-blue-400 text-white px-3 py-2 font-bold rounded">
//                   DIGITAL MARKETING
//                   <div className="text-sm font-normal">
//                     Our business is marketing your business
//                   </div>
//                 </div>
//                 <ul className="mt-2 space-y-1">
//                   <li>
//                     <Link
//                       href="/seo"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaSearch /> Search Engine Optimization
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/smm"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaShareAlt /> Social Media Marketing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/social-media-ads"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaBullhorn /> Social Media Advertising
//                     </Link>
//                   </li>

//                   {/* <li>
//                     <Link
//                       href="/adwords"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaBullhorn /> Adwords
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/native-ads"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaAd /> Native Ads
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/in-app-ads"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaAd /> In-App Advertising
//                     </Link>
//                   </li> */}

//                   <li>
//                     <Link
//                       href="/content-marketing"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaFileAlt /> Content Marketing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/affiliate-marketing"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaStar /> Affiliate Marketing
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               {/* Column 4 */}
//               <div>
//                 <div className="bg-blue-400 text-white px-3 py-2 font-bold rounded">
//                   CPASS
//                   <div className="text-sm font-normal">
//                     All-in-One Communication
//                   </div>
//                 </div>
//                 <ul className="mt-2 space-y-1">
//                   <li>
//                     <Link
//                       href="https://celitix.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-black hover:text-blue-400 px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       <FaArrowUpRightFromSquare /> Celitix.com
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </li>

//           {/* <NavItem label="Solutions" href="/solutions" /> */}
//           <NavItem label="Solutions" href="/solutions" />
//           <NavItem label="Portfolio" href="/portfolio" />
//           <NavItem label="Blog" href="/blog" />
//           <NavItem label="Career" href="/career" />
//           <NavItem label="Contact" href="/contact-us" />
//         </ul>

//         {/* Login / Signup */}
//         <div className="flex gap-4">
//           <div className="flex items-center justify-center gap-4">
//             <button
//               onClick={() => setVisible(true)}
//               className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
//               <span className="relative z-10">Book Demo</span>

//               {/* Vertical expanding background */}
//               <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//             </button>
//             <BookDemoDialog visible={visible} setVisible={setVisible} />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-black text-2xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {/* {isOpen ? <HiOutlineX /> : "☰"} */}
//             {isOpen ? "☰" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* <div
//         className={`fixed top-0 left-0 h-full w-[280px] bg-white z-1000 transform transition-transform duration-300 shadow-md
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >  */}

//       {/* Mobile Menu */}
//       {/* <div
//         className={`fixed top-0 right-0 h-full w-[280px] bg-white z-1000 transform transition-transform duration-300 shadow-md
//   ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       > */}

//       <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-md z-[1000] transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
//   ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
// >
//         <div className="px-4 pt-6">
//           {/* Close Button */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-2xl text-gray-700 hover:text-blue-500"
//             >
//               <HiOutlineX />
//             </button>
//           </div>

//           {/* Menu */}
//           <ul className="space-y-2 overflow-y-auto">
//             <MobileNavItem
//               label="Home"
//               href="/"
//               onClick={() => setIsOpen(false)}
//             />

//             {/* About Dropdown */}
//             <li className="relative">
//               <div className="flex justify-between items-center w-full py-2 text-gray-700">
//                 <a
//                   href="/about-us"
//                   className="hover:text-blue-500 w-full"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About
//                 </a>
//                 {/* <button
//             onClick={() => toggleDropdown("about")}
//             className="ml-2 text-gray-700 hover:text-blue-500"
//           >
//             <FaChevronDown
//               className={`transition-transform duration-300 ${
//                 mobileDropdown === "about" ? "rotate-180" : ""
//               }`}
//             />
//           </button> */}
//               </div>

//               {/* {mobileDropdown === "about" && (
//           <ul className="pl-4 space-y-1 transition-all duration-300">
//             <MobileNavItem
//               label="Our Agency"
//               href="/our-agency"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Portfolio"
//               href="/portfolio"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Privacy Policy"
//               href="/privacy-policy"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Testimonials"
//               href="/testimonials"
//               onClick={() => setIsOpen(false)}
//             />
//           </ul>
//         )} */}
//             </li>

//             {/* Services Dropdown */}
//             <li>
//               <div className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-blue-500">
//                 <a
//                   href="/services"
//                   className="flex-1"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Services
//                 </a>
//                 <button onClick={() => toggleDropdown("services")}>
//                   <FaChevronDown
//                     className={`ml-2 transition-transform duration-300 ${
//                       mobileDropdown === "services" ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//               </div>

//               {mobileDropdown === "services" && (
//                 <ul className="pl-4 space-y-1 transition-all duration-300">
//                   {[
//                     {
//                       title: "Web & App Solutions",
//                       items: [
//                         { label: "Web Development", href: "/web-development" },
//                         {
//                           label: "Open Source Development",
//                           href: "/open-source-development",
//                         },
//                         { label: "Ecommerce", href: "/ecommerce" },
//                       ],
//                     },
//                     {
//                       title: "Design",
//                       items: [
//                         { label: "Website Design", href: "/web-design" },
//                         { label: "Branding", href: "/branding" },
//                         { label: "Animation", href: "/animation" },
//                       ],
//                     },
//                     {
//                       title: "Digital Marketing",
//                       items: [
//                         { label: "SEO", href: "/seo" },
//                         { label: "Social Media Marketing", href: "/smm" },
//                         {
//                           label: "Social Media ads",
//                           href: "/social-media-ads",
//                         },
//                         // { label: "Adwords", href: "/adwords" },
//                         // { label: "Native Ads", href: "/native-ads" },
//                         // { label: "In-App Ads", href: "/in-app-ads" },
//                         {
//                           label: "Content Marketing",
//                           href: "/content-marketing",
//                         },
//                         {
//                           label: "Affiliate Marketing",
//                           href: "/affiliate-marketing",
//                         },
//                       ],
//                     },
//                     {
//                       title: "Cpass Solutions",
//                       items: [
//                         {
//                           label: "Celitix.com",
//                           href: "https://celitix.com/",
//                           target: "_blank",
//                         },
//                         // { label: "Voice Call Services", href: "/voice-calls" },
//                         // { label: "Toll Free Number", href: "/toll-free" },
//                         // { label: "IVR", href: "/ivr" },
//                         // { label: "Missed Call Service", href: "/missed-call-services" },
//                         // { label: "RCS", href: "/rcs" },
//                       ],
//                     },
//                   ].map((section, idx) => (
//                     <li key={idx}>
//                       <button
//                         onClick={() => toggleNestedDropdown("services", idx)}
//                         className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-blue-500"
//                       >
//                         {section.title}
//                         <FaChevronDown
//                           className={`ml-2 transition-transform duration-300 ${
//                             mobileNestedDropdown["services"] === idx
//                               ? "rotate-180"
//                               : ""
//                           }`}
//                         />
//                       </button>

//                       {mobileNestedDropdown["services"] === idx && (
//                         <ul className="pl-4 space-y-1 transition-all duration-300">
//                           {section.items.map((item, i) => (
//                             <MobileNavItem
//                               key={i}
//                               label={item.label}
//                               href={item.href}
//                               target={item.target}
//                               onClick={() => setIsOpen(false)}
//                             />
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             {/* Other Static Links */}
//             <MobileNavItem
//               label="Solutions"
//               href="/solutions"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Portfolio"
//               href="/portfolio"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Blog"
//               href="/blog"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Career"
//               href="/career"
//               onClick={() => setIsOpen(false)}
//             />
//             <MobileNavItem
//               label="Contact"
//               href="/contact-us"
//               onClick={() => setIsOpen(false)}
//             />
//           </ul>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         // <div
//         //   className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
//         //   onClick={() => setIsOpen(false)}
//         // ></div>
//         <div
//           className={`fixed inset-0 bg-black transition-opacity duration-300 z-[999] ${
//             isOpen
//               ? "bg-opacity-20 opacity-10"
//               : "bg-opacity-0 opacity-0 pointer-events-none"
//           }`}
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
// import celitixlogo from "../public/logo/celitixlogo.svg";
import logo from "../../../../../public/images/logo.jpg";
import proactiveLogo from "../../../../../public/images/proactiveLogo.png";
// import MetaLogowhite from "../public/logo/MetaLogowhite.webp";
// import footerimg from "../public/image/footerimg.svg";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Palette,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { href } from "react-router-dom";
// import BookDemoDialog from "./../components/BookDemoDialog";
import BookDemoDialog from "../../BookDemoDialog";
import NavbarWebDesign from "../../../../../public/icons/NavbarWebDesign.png";
import navbarOpenSource from "../../../../../public/icons/navbarOpenSource.png";
import navbarEcommerce from "../../../../../public/icons/navbarEcommerce.png";
import navbarSeo from "../../../../../public/icons/navbarSeo.png";
import navbarSmm from "../../../../../public/icons/navbarSmm.png";
import navbarSocialMediaAds from "../../../../../public/icons/navbarSocialMediaAds.png";
import navbarContentMarketing from "../../../../../public/icons/navbarContentMarketing.png";
import navbarBranding from "../../../../../public/icons/navbarBranding.png";
import navbarAnimation from "../../../../../public/icons/navbarAnimation.png";
import navbarAffiliateMarketing from "../../../../../public/icons/navbarAffiliateMarketing.png";
import navbarCelitix from "../../../../../public/icons/navbarCelitix.png";

// navbar icons
// web solutions
import { FaLaptopCode } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";
import { TbShoppingCartCog } from "react-icons/tb";

// design
import { RiTerminalWindowLine } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

// digital Marketing
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsMegaphone } from "react-icons/bs";
import { BsMegaphoneFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";

function page() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [activeSub, setActiveSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const underlineRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Solution", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact-us" },
  ];

  // 🟦 Floating Grid Dropdown Data
  const dropdownItems = {
    Services: [
      {
        name: "WEB & APPLICATION",
        desc: "Increasing your online presence.",
        icon: <Code size={22} className="text-[#3e66f3]" />,
        // sub: ["Web development", "Open Source", "Ecommerce"],

        sub: [
          {
            name: "Web Development",
            href: "/web-development",
            icon: <FaLaptopCode size={20} className="text-[#3e66f3]" />,
          },
          {
            name: "Open Source Development",
            href: "/open-source-development",
            icon: <TbSourceCode size={20} className="text-[#3e66f3]" />,
            // image: navbarOpenSource,
          },
          {
            name: "E-commerce",
            href: "/ecommerce",
            icon: <TbShoppingCartCog size={20} className="text-[#3e66f3]" />,
            // image: navbarEcommerce,
          },
        ],
      },
      {
        name: "DESIGN",
        desc: "Design your presence.",
        icon: <Smartphone size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Website Design",
            href: "/web-design",
            icon: <RiTerminalWindowLine size={20} className="text-[#3e66f3]" />,
            // image: NavbarWebDesign,
          },
          {
            name: "Branding",
            href: "/branding",
            icon: <IoMdPricetags size={20} className="text-[#3e66f3]" />,
            // image: navbarBranding,
          },
          {
            name: "Animation",
            href: "/animation",
            icon: <MdAnimation size={20} className="text-[#3e66f3]" />,
            // image: navbarAnimation,
          },
        ],
      },
      {
        name: "DIGITAL MARKETING",
        desc: "Our business is marketing your business.",
        icon: <Palette size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Search Engine Optimization",
            href: "/seo",
            icon: <FaSearch size={18} className="text-[#3e66f3]" />,
            // image: navbarSeo,
          },
          {
            name: "Social Media Marketing",
            href: "/smm",
            icon: <BsMegaphoneFill size={18} className="text-[#3e66f3]" />,
            // image: navbarSmm,
          },
          {
            name: "Social Media Advertising",
            href: "/social-media-ads",
            icon: <RiAdvertisementLine size={20} className="text-[#3e66f3]" />,
            // image: navbarSocialMediaAds,
          },
          {
            name: "Content Marketing",
            href: "/content-marketing",
            icon: <LuClipboardPenLine size={20} className="text-[#3e66f3]" />,
            // image: navbarContentMarketing,
          },
          {
            name: "Affiliate Marketing",
            href: "/affiliate-marketing",
            icon: <IoIosPeople size={20} className="text-[#3e66f3]" />,
            // image: navbarAffiliateMarketing,
          },
        ],
      },
      {
        name: "CPASS",
        desc: "All-in-one Communication.",
        icon: <Layers size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Celitix.com",
            href: "https://celitix.com/",
            image: navbarCelitix,
          },
        ],
      },
    ],
  };

  const moveUnderline = (element) => {
    if (underlineRef.current && element) {
      const underline = underlineRef.current;
      const { offsetLeft, offsetWidth } = element;
      underline.style.transform = `translateX(${offsetLeft}px)`;
      underline.style.width = `${offsetWidth}px`;
      underline.style.opacity = 1;
    }
  };

  const handleClick = (e, link) => {
    setActiveLink(link.name);
    moveUnderline(e.currentTarget);
  };

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `[data-link='${activeLink}']`
    );
    if (activeElement) moveUnderline(activeElement);
  }, [activeLink]);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full sticky top-0 left-0 px-4 z-[1000] bg-blue-100 shadow-md transition-all duration-300">
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={proactiveLogo}
                alt="Logo"
                className="w-32 sm:w-40 lg:w-36 xl:w-48"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul
            ref={navRef}
            className="hidden lg:flex h-full items-center lg:gap-2 2xl:gap-4 relative"
          >
            {/* Animated underline */}
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-[3px] bg-blue-700 transition-all duration-700 ease-in-out rounded-full"
              style={{
                width: 0,
                transform: "translateX(0px)",
                opacity: 0,
              }}
            ></span>

            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative text-[16px] xl:text-[18px] text-gray-800 cursor-pointer h-full p-2 "
                data-link={link.name}
                onMouseEnter={(e) => {
                  moveUnderline(e.currentTarget);
                  if (link.dropdown) setDropdown(link.name);
                }}
                onMouseLeave={() => {
                  if (link.dropdown) setDropdown(null);
                  moveUnderline(
                    navRef.current.querySelector(`[data-link='${activeLink}']`)
                  );
                }}
                onClick={(e) => handleClick(e, link)}
              >
                <div className="flex items-center">
                  <Link
                    href={link.href || "#"}
                    className="poppins flex items-center"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-400 ${
                          dropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute left-4/2 -translate-x-1/2 mt-3 w-[95vw] sm:w-[700px] md:w-[1000px] lg:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg rounded-2xl p-4 transition-all duration-500 ${
                      dropdown === link.name
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
                    }`}
                  >
                    {dropdownItems[link.name]?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-2 p-3 bg-white hover:bg-blue-50/80 hover:border-blue-700 border border-transparent rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] "
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <p className="poppins font-semibold text-gray-800 text-[16px] sm:text-[17px]">
                            {item.name}
                          </p>
                          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-100 to-white shadow-inner">
                            {item.icon}
                          </div>
                        </div>
                        <p className="open-sans text-[16px] text-gray-500">
                          {item.desc}
                        </p>

                        {item.sub && (
                          <ul className="text-[16px] text-gray-600 space-y-1">
                            {item.sub.map((s, i) => (
                              <Link
                                href={s.href}
                                key={i}
                                target={
                                  s.name === "Celitix.com" ? "_blank" : "_self"
                                }
                              >
                                <li className="flex items-center py-1 gap-2 relative group cursor-pointer transition-all">
                                  {s.image ? (
                                    <Image
                                      src={s.image}
                                      alt={s.name}
                                      width={20}
                                      height={20}
                                      className="object-contain rounded-sm"
                                    />
                                  ) : (
                                    s.icon
                                  )}
                                  <span className="poppins relative text-gray-700 group-hover:text-[#3e66f3] transition">
                                    {s.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full mt-1 "></span>
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setVisible(true)}
                className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
              >
                <span className="relative z-10 text-nowrap">Book Demo</span>

                {/* Vertical expanding background */}
                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
              <BookDemoDialog visible={visible} setVisible={setVisible} />
            </div>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ===== Off-Canvas Menu (Mobile & Tablet) ===== */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl border-l border-blue-100 transform transition-transform duration-500 ease-in-out z-[9999] ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          <div className="flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100%-60px)]">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                {/* -------- MAIN LINK + DROPDOWN BUTTON -------- */}
                <div className="w-full flex justify-between items-center text-gray-800 font-medium text-[18px] py-2 border-b border-gray-300">
                  {/* Clicking title = navigate */}
                  <Link
                    href={link.href || "#"}
                    onClick={() => setOpen(false)}
                    className="flex-1 text-left"
                  >
                    {link.name}
                  </Link>

                  {/* Clicking arrow = open submenu */}
                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDropdown(dropdown === link.name ? null : link.name);
                      }}
                      className="p-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* -------- FIRST LEVEL DROPDOWN -------- */}
                {link.dropdown && dropdown === link.name && (
                  <div className="pl-4 space-y-2 mt-2">
                    {dropdownItems[link.name]?.map((item, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        {/* Subcategory Title */}
                        <button
                          onClick={() =>
                            setActiveSub(
                              activeSub === `${link.name}-${item.name}`
                                ? null
                                : `${link.name}-${item.name}`
                            )
                          }
                          className="w-full flex justify-between items-center font-semibold text-gray-700 text-[16px] py-1"
                        >
                          {item.name}

                          {item.sub && (
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-300 ${
                                activeSub === `${link.name}-${item.name}`
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>

                        {/* -------- SECOND LEVEL DROPDOWN -------- */}
                        {item.sub &&
                          activeSub === `${link.name}-${item.name}` && (
                            <ul className="text-gray-600 text-[16px] space-y-1 pl-4 mt-1">
                              {item.sub.map((s, i) => (
                                <li
                                  key={i}
                                  className="hover:text-[#3e66f3] cursor-pointer flex items-center gap-2"
                                >
                                  <Link
                                    href={s.href}
                                    target={
                                      s.name === "Celitix.com"
                                        ? "_blank"
                                        : "_self"
                                    }
                                    onClick={() => {
                                      setOpen(false);
                                      setDropdown(null);
                                      setActiveSub(null);
                                    }}
                                    className="flex items-center gap-2"
                                  >
                                    {s.image ? (
                                      <Image
                                        src={s.image}
                                        alt={s.name}
                                        width={20}
                                        height={20}
                                        className="object-contain rounded-sm"
                                      />
                                    ) : (
                                      s.icon
                                    )}
                                    <span>{s.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Book Demo Button */}
            <div className="flex items-center justify-start gap-4 mt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  setVisible(true);
                }}
                className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
              >
                <span className="relative z-10">Book Demo</span>
                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
              <BookDemoDialog visible={visible} setVisible={setVisible} />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-[9998] lg:hidden transition-opacity duration-300"
          ></div>
        )}
      </nav>
    </>
  );
}

export default page;
