// "use client";
// import React, { useState } from "react";
// import Lottie from "lottie-react";
// import Typewriter from "typewriter-effect";
// import seo from "../../../public/animation/seo.json";
// import chatbot from "../../../public/animation/chatbot.json";
// function page() {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenAccordion(openAccordion === index ? null : index);
//   };

//   const features = [
//     {
//       id: "01",
//       title: "Businesses",
//       desc: "Start publish listings to show everyone the details and goodies of your establishment.",
//       img: "https://cdn-icons-png.flaticon.com/128/921/921591.png",
//     },
//     {
//       id: "02",
//       title: "Customers",
//       desc: "Easily find interesting places by local experts, save time by checking listing features.",
//       img: "https://cdn-icons-png.flaticon.com/512/3414/3414151.png",
//     },
//     {
//       id: "03",
//       title: "Feedback",
//       desc: "Visitors discuss listings to share experiences, so businesses get reputation consolidated.",
//       img: "https://cdn-icons-png.flaticon.com/512/3412/3412953.png",
//     },
//   ];

//   return (
//     <div>

//       {/* Hero Section */}
//       <section className="relative flex items-center justify-center bg-[#ccdce8] overflow-hidden [background-image:linear-gradient(to_right,rgb(221,240,254)_1px,transparent_1px),linear-gradient(to_bottom,rgb(221,240,254)_1px,transparent_1px)] [background-size:50px_50px] py-10 md:py-0 ">
//         {/* Blobs */}
//         <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#00d4ff]/50 blur-[120px]" />
//         <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#00d4ff]/50 blur-[160px]" />

//         {/* Content */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6">
//           {/* left section */}
//           <div className="relative flex flex-col justify-center items-center text-center order-2 md:order-1 ">
//             {/* title */}
//             <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
//               Power Your Business with{" "}
//               <Typewriter
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString('<span class="heroTextGredient">SEO</span>')
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .typeString(
//                       '<span class="heroTextGredient">Marketing</span>'
//                     )
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .typeString('<span class="heroTextGredient">Growth</span>')
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .typeString('<span class="heroTextGredient">Success</span>')
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .start();
//                 }}
//                 options={{
//                   autoStart: true,
//                   loop: true,
//                   delay: 75,
//                   deleteSpeed: 50,
//                   html: true,
//                 }}
//               />
//             </h1>

//             <p className=" poppins mt-6 text-lg md:text-2xl text-center font-medium text-black">
//               Experience the future of personalized e-commerce
//             </p>
//             <div className="mt-8 flex justify-center gap-4 ">
//               <button className="group relative overflow-hidden px-6 py-3 rounded-full text-white hover:cursor-pointer font-semibold shadow-lg  transition duration-500 ease-in-out [background:linear-gradient(to_right,#1C9CCF_0%,#0306CF_100%)]">
//                 <span className="relative z-10 poppins ">Get Started</span>
//                 <span className="absolute top-0 left-[-75%] h-full w-[20%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
//               </button>
//             </div>
//           </div>
//           {/* right section  */}
//           <div className="relative flex flex-col justify-center items-center order-1 md:order-2 ">
//             <Lottie animationData={seo} />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-gray-100 pt-10 pb-40 ">
//         <div className="max-w-7xl mx-auto space-y-10">
//           {/* title */}
//           <div className="flex flex-col items-center  justify-center text-center ">
//             <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
//               <span className="heroTextGredient">Features </span>
//             </h2>
//           </div>

//           {/* cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 sm:gap-28 md:gap-36 lg:gap-20 px-6 sm:px-6 lg:px-8">
//             {features.map((f) => (
//               <div
//                 key={f.id}
//                 className="relative flex flex-col items-center text-center group gap-8 sm:gap-10"
//               >
//                 {/* Arc connector */}
//                 <div className="absolute top-14 sm:top-16 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 border-[4px] sm:border-[5px] md:border-[6px] border-blue-500 rounded-full border-l-transparent border-t-transparent -rotate-45"></div>

//                 {/* Icon Circle */}
//                 <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
//                   <img
//                     src={f.img}
//                     alt={f.title}
//                     className="h-10 sm:h-12 md:h-14"
//                   />
//                 </div>

//                 {/* content  */}
//                 <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-68">
//                   {/* Number + Title pill */}
//                   <div className="bg-white px-6 sm:px-5 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
//                     <span className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-xs sm:text-sm font-semibold">
//                       {f.id}
//                     </span>
//                     <span className="poppins font-semibold text-gray-800 text-sm sm:text-base">
//                       {f.title}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="open-sans px-6 sm:px-6 text-gray-600 text-sm md:text-base sm:max-w-xs">
//                     {f.desc}
//                   </p>
//                 </div>

//                 {/* Ripple effect circle */}
//                 <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-20 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-lg animate-ripple"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] py-6 text-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 px-6">
//           {/* Left Title */}
//           <div className="flex flex-col gap-4 text-center md:text-left order-2">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               Ready to Get Started?
//             </h2>
//             <p className="max-w-xl text-lg">
//               Join us today and take your business to the next level.
//             </p>
//             <div>
//               <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition">
//                 Start Now
//               </button>
//             </div>
//           </div>

//           {/* Right Lottie Animation */}
//           <div className="relative flex justify-center items-center order-1">
//             <Lottie animationData={chatbot} className="w-72 h-72 " />
//           </div>
//         </div>
//       </section>

//       {/* FAQs*/}
//       <section className=" max-w-7xl mx-auto pt-10 px-6 xl:px-0 mb-10">
//         <div className="space-y-10 ">
//           {/* title */}
//           <div className="flex flex-col items-center justify-center text-center ">
//             <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
//               <span className="heroTextGredient">FAQs </span>
//             </h2>
//           </div>

//           {/* card section */}
//           <div className="flex flex-col justify-center gap-8 p-10 border border-gray-400 shadow-lg rounded-tr-4xl rounded-bl-4xl bg-blue-50">
//             {/* Accordion 1 */}
//             <div className="w-full rounded-lg border border-gray-400 bg-white">
//               <button
//                 onClick={() => toggleAccordion(0)}
//                 className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
//               >
//                 <span>Do you have any social accounts?</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${
//                     openAccordion === 0 ? "rotate-45" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </button>
//               {openAccordion === 0 && (
//                 <div className="p-4 text-slate-500 border-t border-gray-200">
//                   Yes! You can find Wind UI in many social platforms, such as
//                   Facebook, Discord, Reddit and more.
//                 </div>
//               )}
//             </div>

//             {/* Accordion 2 */}
//             <div className="w-full rounded-lg border border-gray-400 bg-white">
//               <button
//                 onClick={() => toggleAccordion(1)}
//                 className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
//               >
//                 <span>What is social media?</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${
//                     openAccordion === 1 ? "rotate-45" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </button>
//               {openAccordion === 1 && (
//                 <div className="p-4 text-slate-500 border-t border-gray-200">
//                   Wind UI is a UI library powered by Tailwind CSS for building
//                   elegant interfaces quickly.
//                 </div>
//               )}
//             </div>

//             {/* Accordion 3 */}
//             <div className="w-full rounded-lg border border-gray-400 bg-white">
//               <button
//                 onClick={() => toggleAccordion(2)}
//                 className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
//               >
//                 <span>How do I get started?</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${
//                     openAccordion === 2 ? "rotate-45" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </button>
//               {openAccordion === 2 && (
//                 <div className="p-4 text-slate-500 border-t border-gray-200">
//                   Start by installing Tailwind CSS and check Wind UI
//                   documentation for component examples.
//                 </div>
//               )}
//             </div>

//             {/* Accordion 4 */}
//             <div className="w-full rounded-lg border border-gray-400 bg-white">
//               <button
//                 onClick={() => toggleAccordion(3)}
//                 className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
//               >
//                 <span>How social media marketing works?</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${
//                     openAccordion === 3 ? "rotate-45" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </button>
//               {openAccordion === 3 && (
//                 <div className="p-4 text-slate-500 border-t border-gray-200">
//                   Wind UI is a UI library powered by Tailwind CSS for building
//                   elegant interfaces quickly.
//                 </div>
//               )}
//             </div>

//             {/* Accordion 5 */}
//             <div className="w-full rounded-lg border border-gray-400 bg-white">
//               <button
//                 onClick={() => toggleAccordion(4)}
//                 className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
//               >
//                 <span>How do I get started?</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${
//                     openAccordion === 4 ? "rotate-45" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </button>
//               {openAccordion === 4 && (
//                 <div className="p-4 text-slate-500 border-t border-gray-200">
//                   Start by installing Tailwind CSS and check Wind UI
//                   documentation for component examples.
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default page;

"use client";
// default
import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// icons
import { FaPlus, FaArrowRightLong } from "react-icons/fa6";
import { GoHorizontalRule } from "react-icons/go";
import {
  FaCode,
  FaMobileAlt,
  FaMagic,
  FaMicrochip,
  FaLightbulb,
} from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { TbGraph } from "react-icons/tb";
import { FaRegComments } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { LuMonitorPlay } from "react-icons/lu";

import contentMarketingIconBuildTrust from "../../../public/icons/contentMarketingIconBuildTrust.png";
import contentMarketingIconImprovesSearch from "../../../public/icons/contentMarketingIconImprovesSearch.png";
import contentMarketingIconStrengthensCustomer from "../../../public/icons/contentMarketingIconStrengthensCustomer.png";
import contentMarketingIconBoostsLeadGeneration from "../../../public/icons/contentMarketingIconBoostsLeadGeneration.png";
// import contentMarketingIconSupports from "../../../public/icons/contentMarketingIconSupports.png";
import contentMarketingIconSupports from "../../../public/icons/contentMarketingIconSupports.png";

// images
import contentMarketingHero from "../../../public/images/contentMarketingHero.png";
import contentMarketingInterLinking from "../../../public/images/contentMarketingInterLinking.jpg";
import contentMarketingInterLinking2 from "../../../public/images/contentMarketingInterLinking2.jpg";
import contentMarketingInterLinking3 from "../../../public/images/contentMarketingInterLinking3.jpg";
import contentMarketingFront from "../../../public/images/contentMarketingFront.jpg";
import contentMarketingAboutUsFront from "../../../public/images/contentMarketingAboutUsFront.png";
import contentMarketingBack from "../../../public/images/contentMarketingBack.jpg";
import conntentMarketingSocial from "../../../public/images/conntentMarketingSocial.jpg";

// animation json
import rocket from "../../../public/animation/rocket.json";

// component
import FaqItem from "../components/FaqItem";

// Why Choose Content Marketing
const features = [
  {
    icon: contentMarketingIconBuildTrust,
    title: "Builds trust and authority with your audience",
    description: "Create meaningful content that positions your brand as credible, consistent, and trustworthy.",
    bgColor: "bg-red-100",
  },
  {
    icon: contentMarketingIconImprovesSearch,
    title: "Improves search rankings and drives organic traffic",
    description: "Use SEO-focused content that brings steady visitors and long-term visibility to your business.",
    bgColor: "bg-pink-100",
  },
  {
    icon: contentMarketingIconBoostsLeadGeneration,
    title: "Boosts lead generation and brand awareness",
    description: "Turn content into conversions with engaging storytelling and high-performing digital assets.",
    bgColor: "bg-green-100",
  },
  {
    icon: contentMarketingIconStrengthensCustomer,
    title: "Strengthens customer engagement and loyalty",
    description: "Build emotional connections with valuable content that keeps your audience coming back.",
    bgColor: "bg-blue-100",
  },
  {
    icon: contentMarketingIconSupports,
    title: "Supports your overall digital marketing funnel",
    description: "Integrate blogs, videos, and posts that work together to nurture leads across every stage.",
    bgColor: "bg-purple-100",
  },
];

// our Process
const items = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your brand, audience, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    desc: "Create a tailored content calendar and strategy.",
  },
  {
    number: "03",
    title: "Create",
    desc: "Develop engaging, high-quality content.",
  },
  {
    number: "04",
    title: "Distribute",
    desc: "Publish across web, social, and email channels.",
  },
  {
    number: "05",
    title: "Optimize",
    desc: "Track, analyze, and improve performance for better ROI.",
  },
];

// Our Process Ends

function page() {
  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does your agency offer in content marketing?",
      answer: "We create strategic content-posts, reels, blogs, ads, and campaigns-to grow your brand Our focus is on content that builds trust and drives conversions.",
    },
    {
      question: "How do you decide what content my brand needs?",
      answer: "We study your audience, competitors, and goals to create a custom content plan. Every piece is tailored to match your brand’s tone and objectives.",
    },
    {
      question: "How often will you post content for my brand?",
      answer: "Usually 3–5 posts a week depending on your package. We balance consistency with high-quality, value-driven content.",
    },
    {
      question: "Do you provide content strategy?",
      answer: "Yes, we create a full strategy covering topics, formats, posting schedule, and goals. This ensures your content performs better and stays consistent.",
    },
    {
      question: "Can content help my brand get more leads?",
      answer: "Absolutely-valuable content attracts the right audience. It builds trust, which leads to higher conversions.",
    },
    {
      question: "Who creates the content?",
      answer: "Our team of content writers, designers, and strategists handle everything. You get professional, brand-aligned content every time.",
    }, 
  ];
  // FAQs Ends

  // Our Process (Timeline)
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    // or ["top center", "bottom top"] based on how you want the fill to progress
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Timeline ends

  return (
    <div>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
      >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-6 py-1 rounded-full uppercase tracking-wide">
                Digital Marketing
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl font-medium leading-tight text-gray-900 mb-3">
                Create Content That
                <span className="text-[#3e66f3]"> Converts, </span>
                Build
                <span className="text-[#3e66f3]"> Brands </span>
                That
                <span className="text-[#3e66f3]"> Last.. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                In the crowded digital world, the brands that win are the ones
                that communicate with clarity and purpose.
              </p>

              {/* Button */}
              <div>
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-6  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Consult Expert</span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={contentMarketingHero}
              alt="Hero visual"
              width={600}
              height={500}
              // lg:w-[500px]  lg:h-[280px]  xl:w-[580px]  xl:h-[400px]
              className=" h-full w-full object-contain  "
              priority
            />
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section className="container mx-auto px-6  py-12 space-y-10 lg:px-10 xl:px-20 ">
        <div className="flex justify-center  ">
          <h2 className="poppins text-[35px]  font-semibold text-center text-[#3e66f3] ">
            Content Marketing
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          <div className="  space-y-6 border rounded-2xl shadow-sm p-6">
            <div className="flex flex-col gap-3 ">
              <div className="">
                <span className="text-[14px]  text-white tracking-wider rounded-full bg-[#3e66f3] py-1 px-2">
                  SOCIAL COMMERCE
                </span>
              </div>
              <h2 className="text-[35px] md:text-[38px] poppins font-medium leading-tight ">
                Attract, engage, and retain with
                <span className="text-[#3e66f3]"> meaningful content </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-[16px] md:text-[18px]">
                We craft strategic content that brings your brand story to life
                and connects it with your audience. From blogs and social posts
                to website copy and video scripts - we create content that
                educates, entertains, and converts.
              </p>
              <div className="">
                <Link href="/contact-us">
                  <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Contact me ➺ </span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-600 ">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">#1 Best Software, 2024</span>
              </p>
            </div>
          </div>

          {/* <div className="hidden  lg:flex justify-center lg:justify-end items-center w-full">
            <Image
              src={conntentMarketingSocial}
              alt="side Image "
              className="rounded-xl w-full h-full  object-contain"
            />
          </div> */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={conntentMarketingSocial}
                alt="side Image"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inter Linking */}
      <section className=" container mx-auto pt-10 md:pt-12 px-6 lg:px-10 xl:px-20">
        {/* <div className="  "> */}
        <div className="  grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
          {/* Left Image */}
          <div className="w-full hidden md:flex md:justify-center lg:justify-start">
            <Image
              // src={smm4}
              src={contentMarketingInterLinking3}
              alt="interlinking text"
              width={500}
              height={550}
              className=" h-[300px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] lg:text-[35px] poppins font-medium  text-center lg:text-start">
                Elevate Your Brand with
                <span className=" text-[#3e66f3] ">
                  {" "}
                  Expert Content Writing{" "}
                </span>
              </h2>
              <p className="text-gray-700 text-[14px] md:text-[16px] open-sans">
                Transform your ideas into powerful stories that deliver real
                results. We blend creative storytelling with strategic targeting
                to craft campaigns that elevate your brand and keep your
                audience engaged.
              </p>
            </div>

            {/* Each link separately */}
            <div className="flex flex-col gap-2">
              {/* card1 */}
              <Link
                href="/seo"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                {/* Heading text */}
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Search Engine Optimization
                </h3>

                {/* Button */}
                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9  me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  {/* Arrow that moves right and hides */}
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    {/* <BsArrowRight /> */}
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>

                  {/* New arrow coming from left */}
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>

                  {/* Expanding background */}
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 2  */}
              <Link
                href="/social-media-ads"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Social Media Ads
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 3 */}
              <Link
                href="/smm"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Social Media Marketing {"(SMM)"}
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 4 */}
              <Link
                href="/affiliate-marketing"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Affiliate Marketing
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* content Marketing  (Absolute Image) */}
      <section className="container  mx-auto py-10 space-y-10 px-6 lg:px-10 xl:px-20">
        <div className="flex justify-center  ">
          <h2 className="poppins text-[35px] md:text-[38px] font-semibold text-center text-[#3e66f3] ">
            Content Marketing
          </h2>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-30  ">
          {/* left section  */}
          <div className="relative w-full h-full">
            <div className="relative lg:absolute lg:-top-20 z-2 flex justify-center md:justify-start ">
              <Image
                src={contentMarketingBack}
                alt="Relative Image"
                width={350}
                height={400}
                className="h-[420px] 2xl:h-[360px] object-cover bg-red-300"
              />
            </div>

            <div className="hidden md:block absolute left-70 top-10 lg:top-0 lg:left-30 z-10 ">
              <Image
                // src={contentMarketingFront}
                src={contentMarketingAboutUsFront}
                alt="Relative Image"
                width={370}
                height={460}
                className="object-cover h-[440px] 2xl:h-[380px] bg-red-300"
              />
            </div>
          </div>

          {/* <div className="flex justify-center items-center bg-gray-50">
            <div className="relative w-96">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1299660277/display_1500/stock-photo-beautiful-green-perrot-1299660277.jpg"
                alt="Parrot"
                width={600}
                height={300}
                className="absolute top-10 left-10 w-full h-96 rounded-lg shadow-lg opacity-90 transition-all duration-500 ease-in-out z-51"
              />

              <img
                src="https://www.shutterstock.com/shutterstock/photos/1299660277/display_1500/stock-photo-beautiful-green-perrot-1299660277.jpg"
                alt="Parrot"
                width={900}
                height={400}
                className="relative w-full h-96 rounded-lg shadow-lg  transition-all duration-500 ease-in-out"
              />
            </div>
          </div> */}

          {/* right content */}
          <div className="flex flex-col gap-2 lg:mt-0 md:mt-25 ">
            <div className="flex gap-2 items-center ">
              <GoHorizontalRule className="text-4xl text-gray-600" />
              <p className="poppins font-medium text-[22px] lg:text-2xl text-gray-600">
                {" "}
                ABOUT US{" "}
              </p>
            </div>
            <div className="py-3 lg:py-5 border-b-2 border-gray-800 space-y-2">
              <h3 className="text-2xl lg:text-3xl poppins font-normal ">
                Content marketing is a strategic way of
                <span className="text-[#3e66f3] font-medium "> growing your business </span>
                through
                <span className="text-[#3e66f3] font-medium"> valuable </span>
                and
                <span className="text-[#3e66f3] font-medium">
                  {" "}
                  consistent communication.{" "}
                </span>
              </h3>

              <p className="open-sans text-base lg:text-base mb-2 ">
                Instead of pushing ads, you educate, inform, and engage your
                audience with meaningful content - making your brand the natural
                choice when they’re ready to buy.
                {/* From blog articles and videos to newsletters and social posts, content marketing turns your brand into a trusted voice people want to listen to. */}
              </p>
            </div>

            <div className="pt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col gap-3  ">
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <HiPencilSquare className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium text-lg ">
                      {" "}
                      Blog Writing & SEO Articles{" "}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <TbGraph className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium text-lg ">
                      {" "}
                      Visual Content{" "}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <FaRegComments className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium  ">
                      {" "}
                      Case Studies & Testimonials{" "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <FaRegFileLines className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium text-lg ">
                      {" "}
                      Product Descriptions{" "}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <FaBook className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium text-lg ">
                      {" "}
                      eBooks & Guides{" "}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center transform transition-transform duration-500 hover:translate-x-2 ">
                    {/* <FaPlus className="text-[#3e66f3] text-lg" /> */}
                    <LuMonitorPlay className="text-[#3e66f3] text-xl" />
                    <span className="poppins font-medium text-lg ">
                      {" "}
                      Video Marketing{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Content Marketing ? */}
      <section className="container  mx-auto py-12 px-6 lg:px-10 xl:px-20 ">
        <div className=" space-y-10 ">
          <div className="flex justify-center  ">
            <h2 className="poppins text-[35px] md:text-[38px] font-semibold text-center  ">
              Why Choose
              <span className="text-[#3e66f3]"> Content Marketing ? </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] gap-12 items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-4">
              <h2 className="poppins text-[30px] lg:text-[38px] text-center lg:text-start font-semibold  text-gray-900">
                Layouts full of
                <span className=" text-[#3e66f3]"> features</span>
              </h2>
              <p className="open-sans text-gray-600 text-base text-center lg:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum.
              </p>
              <div className="flex justify-center lg:justify-start  w-full mt-2">
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-6  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Learn more →</span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* First column */}
              <div className="flex flex-col gap-6 items-center justify-center">
                {features.slice(1, 3).map((feature, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className= {`p-3 ${feature.bgColor || "bg-[#e8f2fc]"} rounded-xl`}>
                      <div className="mb-3">
                        {/* {feature.icon} */}

                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <h3 className="font-medium text-lg text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second column */}
              <div className="flex flex-col gap-6 ">
                {features
                  .filter((_, i) => i === 0 || i > 2)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <div className= {`p-3 ${feature.bgColor || "bg-[#e8f2fc]"} rounded-xl`} >
                        <div className="mb-3">
                          {/* {feature.icon} */}
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <h3 className="font-medium text-lg text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-base text-gray-500 ">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        ref={containerRef}
        className="relative px-6 lg:px-10 xl:px-20 py-12  container mx-auto"
       >
        {/* <div className="flex justify-center  ">
          <h2 className="poppins text-[35px] md:text-[42px] text-[#3e66f3] font-semibold text-center mb-10 ">
            Our Process 
          </h2>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_65%] gap-15 ">
          {/* Left label */}
          <div className="lg:sticky top-30 text-center lg:text-start lg:self-start text-4xl lg:text-5xl font-semibold  text-[#3e66f3]  lg:text-gray-900">
            {/* Working */}
            Our Process
          </div>

          {/* Timeline items container */}
          <div className="relative">
            {/* Vertical grey line */}
            <div className="absolute left-27 lg:left-35 top-0 bottom-0 w-1 bg-gray-400"></div>
            {/* Blue animated fill */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-27 lg:left-35 top-0 w-1 bg-[#3e66f3] origin-top "
            >
              <motion.div
                style={{ y: lineHeight }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3e66f3]"
              />
            </motion.div>
            {/* Items */}
            {/* space-y-10 */}
            <div className="">
              {items.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                  className="grid grid-cols-[80px_1fr] items-start gap-10 lg:gap-x-20 border-b-2 border-gray-400 p-4 lg:p-8"
                >
                  {/* Number */}
                  <div className="poppins text-4xl lg:text-6xl font-semibold text-[#3e66f3] flex justify-center items-center lg:items-start lg:justify-start w-full h-full ">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="poppins text-2xl lg:text-4xl font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="open-sans text-base lg:text-lg text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className=" bg-[#eff0f9] flex justify-center items-center py-10 px-6 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white rounded-xl py-4 px-6  sm:px-6 ">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  faq.question
                  // <h4 className="text-sm md:text-base poppins  sub-heading hover:cursor-pointer ">
                  //   {faq.question}
                  // </h4>
                }
                // question={faq.question}
                answer={
                  faq.answer
                  // <span className="text-[15px] text-gray-700 pera">
                  //   {faq.answer}
                  // </span>
                }
                isOpen={openIndex === idx}
                onClick={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section
        className="py-12 px-6"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px] max-w-5xl 2xl:max-w-6xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden justify-between">
          {/* background svg */}
          <svg
            className="absolute top-15 left-0 w-[500px] h-[350px] opacity-10 pointer-events-none -translate-y-1/4 -translate-x-1/4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10,1L3,9h4.5L6,15l7-8H8.5L10,1z" fill="#60A5FA" />
          </svg>

          <div className="relative flex z-10 items-start">
            {/* rocket animation */}
            <div className="md:flex absolute -top-7 -left-7 md:left-0 md:top-0 w-[150px] h-[150px] md:w-auto md:h-[110px] lg:h-[120px] opacity-25 md:opacity-100   ">
              <Lottie animationData={rocket} loop={true} />
            </div>

            {/* content */}
            <div className="flex flex-col  justify-center py-10 md:py-0 px-10 md:px-18  gap-4  h-full ">
              <div className="flex flex-col gap-2">
                <h1 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Improve Your Customer Experience
                </h1>
                <p className="text-[16px] lg:text-[18px] text-black open-sans  text-center md:text-start">
                  Your online presence needs more than a website. It needs real
                  growth. Let us work together to build, refine, and scale your
                  digital success.
                </p>
              </div>

              {/* cta button */}
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us">
                  <button className="relative inline-flex items-center justify-center px-4 py-2 text-base md:text-[16px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group ">
                    <span className="relative z-10">Start Now</span>
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* right rounded svg */}
          <div className="relative items-center justify-center hidden md:flex z-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1200"
                cy="500"
                r="1200"
                fill="#DBEAFE"
                opacity="0.8"
              />
              <circle
                cx="1200"
                cy="500"
                r="1000"
                fill="#93C5FD"
                opacity="0.8"
              />
              <circle cx="1200" cy="500" r="800" fill="#60A5FA" opacity="0.8" />
              <circle cx="1200" cy="500" r="600" fill="#3E66F3" opacity="0.8" />
              <circle cx="1200" cy="500" r="400" fill="#2563EB" opacity="0.8" />
              <circle cx="1200" cy="500" r="200" fill="#324CA2" opacity="0.8" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
