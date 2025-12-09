// import React from "react";

// export default function HeroShape() {
//   return (
//     <div className="relative w-[700px] h-[700px]">
//       <svg className="w-full h-full" viewBox="0 0 700 700">
//         <mask id="shapeMask">
//           <image
//             href="https://wordpress.themeholy.com/webteck/wp-content/plugins/webteck-core/assets/img/shape/hero_shape_4.png"
//             width="700"
//             height="700"
//           />
//         </mask>

//         <image
//           href="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/hero_img_12_1.jpg"
//           width="700"
//           height="700"
//           preserveAspectRatio="xMidYMid slice"
//           mask="url(#shapeMask)"
//         />
//       </svg>
//     </div>
//   );
// }

"use client";
// HeroWebteck.jsx
import React, { useState } from "react";
// import mask from "public/images/shape.png";
import mask from "../../../public/images/shape.jpg";
import VerticalDiceCarousel from "./DiceCarousel";
// import ParticleBackground from "../components/ParticleBackground";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HeroExpand from "./HeroExpand";
// import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import caseStudy1 from "../../../public/images/caseStudy1.webp";
import caseStudy2 from "../../../public/images/caseStudy2.webp";
import caseStudy3 from "../../../public/images/caseStudy3.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  "/icons/freshdesk.svg",
  "/icons/facebookmessenger.svg",
  "/icons/instagram.svg",
  "/icons/shopify.svg",
  "/icons/slack.svg",
  "/icons/telegram.svg",
  "/icons/woocommerce.svg",
  "/icons/wordpress.svg",
  "/icons/zapier.svg",
  "/icons/zoho.svg",
];
import { SiGoogle } from "react-icons/si";

// import { CircularTestimonials } from '@/components/ui/circular-testimonials';
// import { CircularBenefits } from "./CircularBenefits/CircularBenefits";
import { CircularBenefits } from "./CircularBenefits";

// FAQs
import { FaAngleDown } from "react-icons/fa";
import { ClipPathCard } from "./ClipPathCard";
import Link from "next/link";

const faqs = [
  {
    question:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?",
  },
];
// FAQs Ends

// Our Benefits
const Benefits = [
  {
    des: "We plan, build, and manage every aspect of your digital growth, ensuring your website evolves seamlessly with your business needs.",
    title: "End-to-End Growth Management",
    // designation: "Restaurant Critic",
    src: "/images/b1.jpg",
  },
  {
    des: "Every site is uniquely designed to match your goals, with flexible options and tailored features that reflect your brand identity.",
    title: "Custom Web Design for Every Client",
    // designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    des: "Our platform powers fast, reliable, and scalable websites that adapt to your growth while delivering consistent top-level performance.",
    title: "High-Performance & Scalable Platform",
    // designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    des: "From UI/UX design to WordPress and advanced tools, we integrate modern features to create websites that look great and work flawlessly.",
    title: "Modern Features & Seamless Integration",
    // designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "/icons/chat.png",
    href: "/web-development",
  },
  {
    id: 2,
    title: "Open Source Dev",
    icon: "/icons/chat.png",
    href: "/open-source-development",
  },
  {
    id: 3,
    title: "Ecommerce",
    icon: "/icons/chat.png",
    href: "/ecommerce",
  },
  {
    id: 4,
    title: "Website Redesign",
    icon: "/icons/chat.png",
    href: "/website-redesign",
  },
  {
    id: 5,
    title: "PSD>HTML",
    icon: "/icons/chat.png",
    href: "/psd-to-html",
  },
  { id: 6, title: "PSD > HTML", icon: "/icons/chat.png", href: "/psd-html" },
  {
    id: 7,
    title: "Animation",
    icon: "/icons/chat.png",
    href: "/animation",
  },
  {
    id: 8,
    title: "Branding",
    icon: "/icons/chat.png",
    href: "/branding",
  },
];

const extraServices = [
  {
    id: 9,
    title: "SEO",
    icon: "/icons/chat.png",
    href: "/seo",
  },
  {
    id: 10,
    title: "Social Media",
    icon: "/icons/chat.png",
    href: "/social-media",
  },
  {
    id: 11,
    title: "Google Ads",
    icon: "/icons/chat.png",
    href: "/google-ads",
  },
  {
    id: 12,
    title: "Native Ads ",
    icon: "/icons/chat.png",
    href: "/native-ads",
  },
  {
    id: 13,
    title: "In app Advertising",
    icon: "/icons/chat.png",
    href: "/in-app-advertising",
  },
  {
    id: 14,
    title: "Content marketing",
    icon: "/icons/chat.png",
    href: "/content-marketing",
  },
  {
    id: 15,
    title: "Affiliate marketing",
    icon: "/icons/chat.png",
    href: "/affiliate-marketing",
  },
  {
    id: 16,
    title: "Cpaas solution",
    icon: "/icons/chat.png",
    href: "/cpass-solution",
  },
];
export default function HeroSection() {
  const [viewMoreCard, setViewMoreCard] = useState(false);
  // FAQs
  const [activeIndex, setActiveIndex] = useState(); // First FAQ open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if same, else open new
  };
  // FAQs ends

  const images = [
    {
      url: "/images/hero6.jpg",
      title: "Driving Growth with Web Solutions and Digital Marketing.",
      desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders. ",
    },
    {
      url: "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Scalable & Secure Web Development | Smart Digital Solutions",
      desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
    },
    {
      url: "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=1500",
      title: "Scalable & Secure Web Development | Smart Digital Solutions",
      desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
    },
    {
      url: "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
      title: "Scalable & Secure Web Development | Smart Digital Solutions",
      desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
    },
    {
      url: "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
      title: "Scalable & Secure Web Development | Smart Digital Solutions",
      desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
    },
  ];

  return (
    <>


      {/* Discover More */}
      <section className="max-w-7xl mx-auto py-10">
        {/* Project gallary */}
        <div className="flex flex-col gap-10 md:px-4 lg:px-0 ">
          <div className="flex justify-center">
            <h2 className="poppins font-medium text-[38px]">Our Projects</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col">
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>{" "}
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>{" "}
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                <Image
                  src={caseStudy1}
                  alt="Case Study 1"
                  className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects  */}
      {/* Grid Images   */}
      <section className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col gap-10 md:px-4 lg:px-0 ">
          <div className="flex justify-center">
            <h2 className="poppins font-medium text-[38px]">Our Projects</h2>
          </div>
          <div className="max-w-[100vw] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="grid grid-cols-[38%_60%] gap-3 ">
                <div className=" ">
                  <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                    <Image
                      src={caseStudy1}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-3 ">
                  <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                    <Image
                      src={caseStudy2}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                    <Image
                      src={caseStudy3}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[38%_60%] gap-3 ">
                <div className=" flex flex-col gap-3 h-full  ">
                  <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                    <Image
                      src={caseStudy1}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                    <Image
                      src={caseStudy2}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-3 ">
                  <div className="group overflow-hidden rounded-xl h-[70%] hover:shadow-2xl">
                    <Image
                      src={caseStudy3}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-xl h-[30%] hover:shadow-2xl">
                    <Image
                      src={caseStudy1}
                      alt="Case Study 1"
                      className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clip path hover cards for Services */}
      <section className="bg-[#eff0f9]">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div>
            <h2 className="text-4xl font-medium text-center w-full py-10">
              Our Services
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <ClipPathCard />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-3 md:hidden">
            {/* Main Services */}
            <div className="grid grid-cols-2 gap-3 px-4">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="flex flex-col justify-center bg-blue-50 rounded-lg shadow-lg items-center border p-4 gap-2"
                >
                  <img src={s.icon} alt={s.title} className="w-10 h-10" />
                  <h3 className="text-[16px] font-medium text-blue-500">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Expandable Extra Section */}
            <AnimatePresence>
              {viewMoreCard && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-3 px-4"
                >
                  {extraServices.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      className="flex flex-col justify-center bg-blue-50 rounded-lg shadow-lg items-center border p-4 gap-2"
                    >
                      <img src={s.icon} alt={s.title} className="w-10 h-10" />
                      <h3 className="text-[16px] font-medium text-blue-500">
                        {s.title}
                      </h3>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <div className="flex justify-center py-2">
              <button
                className="text-[18px] px-4 py-2 w-36 rounded-lg bg-black text-white"
                onClick={() => setViewMoreCard(!viewMoreCard)}
              >
                {viewMoreCard ? "View Less" : "View More..."}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our service */}
      <section className="bg-gray-300  overflow-hidden ">
        <div className="max-w-6xl mx-auto bg-white p-5">
          {/* title */}
          <div className="grid grid-cols-2 justify-between gap-10">
            <div>
              <h2 className="text-xl p-5 flex items-center gap-2">
                <span className="text-xs">
                  <GoDotFill />{" "}
                </span>
                Our Services
              </h2>
            </div>
            <div>
              <p className="text-3xl p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur accusamus, repellendus beatae suscipit hic eum?
              </p>
            </div>
          </div>
          {/* content */}
          <div className="  flex flex-col gap-2">
            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">01</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">
                    Website Design
                  </p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">02</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">
                    Digital Marketing
                  </p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">03</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">SEO</p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">04</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">Bulk SMS</p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">05</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">Adwords</p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">06</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">
                    Open Source Development
                  </p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">07</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">Native Ads</p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>

            <a href="#" className="relative group block overflow-hidden">
              {/* Background wipe */}
              <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

              {/* Content */}
              <div className="relative grid grid-cols-3 border-b p-4 z-10 items-center">
                {/* col 1 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-lg">08</p>
                </div>
                {/* col 2 */}
                <div className="p-2 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
                  <p className="text-xl font-medium text-center">
                    content Marketing
                  </p>
                </div>
                {/* col 3 - arrow animation */}
                <div className="p-2 flex justify-end relative w-full h-full  ">
                  {/* Original arrow */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:opacity-0">
                    <FaArrowRightLong />
                  </span>
                  {/* New arrow (comes from left) */}
                  <span className="absolute inset-0 flex items-center justify-end text-xl font-bold transform -translate-x-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className=" max-w-7xl mx-auto w-full  font-[Poppins] text-[#444] py-12 px-4  ">
        <h1 className="text-center text-3xl font-semibold text-[#3e66f3]   mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-5xl w-full mx-auto rounded-lg bg-gray-100  shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`flex relative p-4 overflow-hidden transition-all ${
                  index !== 0 ? "border-t border-[#e6e6e6]" : ""
                } ${
                  isActive
                    ? "bg-[#f8f8f8] shadow-[inset_4px_0_0_0_#3e66f3]"
                    : ""
                }`}
              >
                {/* Question */}
                <div className="flex flex-col ">
                  <h3
                    className={`w-full text-lg font-normal cursor-pointer ${
                      isActive ? "text-[#3e66f3]" : "text-inherit"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h3>

                  {/* Animated Answer */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive
                        ? "max-h-40 opacity-100 mt-6"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="leading-6 text-[#444]">{faq.answer}</p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  className={`flex items-center p-2 justify-center h-[30px] w-[30px] rounded-full border border-[#e6e6e6] text-inherit transition-transform duration-300 ${
                    isActive
                      ? "rotate-180 bg-[#3e66f3] border-[#3e66f3] text-white"
                      : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <FaAngleDown size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* explore 3d carousel */}
      <section className="max-w-7xl mx-auto pt-10 px-4 xl:px-0 ">
        <div className="space-y-10">
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="coverflow"
            grabCursor
            centeredSlides={true}
            slidesPerView={1} // Mobile default
            breakpoints={{
              768: {
                slidesPerView: 3, // Show prev, current, next on tablets and up
              },
            }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            className="w-full"
          >
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* plateform carousel */}
      <section className="bg-blue-100">
        <HeroExpand
          images={images}
          initialSelectedIndex={0}
          maxThumbnails={5}
        />
      </section>

      <section className="md-10">
        <VerticalDiceCarousel />
      </section>

      <section className="bg-[#eff0f9] relative overflow-hidden ">
        <div>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute left-10 top-24 h-10 w-10 rounded-full bg-blue-500/30 blur-xl" />
            <span className="absolute hidden sm:block left-[10%] top-10 h-2 w-24 rotate-45 rounded-full bg-indigo-200/70" />
            <span className="absolute hidden sm:block left-[64%] md:left-[50%] lg:left-[40%] top-8 h-2 w-28 -rotate-18 rounded-full bg-indigo-200/50" />
            <span className="absolute bottom-32 left-32 h-12 w-12 rounded-full bg-blue-500/40 blur-xl" />
            <span className="absolute bottom-24 left-1/2 h-8 w-8 rounded-full bg-indigo-500/40 blur-xl" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:px-0 gap-3 ">
            <div className=" mx-auto h-full max-w-7xl flex flex-col justify-center gap-4 text-center lg:text-left px-5 pt-20 lg:pt-0 pb-5 lg:pb-0">
              <div className="flex flex-col gap-2">
                <span className="poppins font-extrabold text-red-600 text-base md:text-lg">
                  Proactive Digital Solutions
                </span>
                <h2 className="poppins font-bold text-[30px] md:text-[42px] text-black">
                  Scalable & Secure
                  <span className="text-[#1D4ED8]"> Web Development </span> |
                  <span className="text-[#1D4ED8]">
                    {" "}
                    Smart Digital Solution{" "}
                  </span>
                </h2>
                <div className="">
                  <p className="open-sans text-sm text-gray-700">
                    We offer digital solutions—from Website Development and
                    Software Services to Social Media, and Digital
                    Marketing—Designed to drive innovation, engagement, and
                    growth.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 lg:justify-start ">
                <div>
                  <button className="poppins relative bg-[#1D4ED8] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      View Services
                    </span>
                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#141d38] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>

                <div>
                  <button className="poppins relative bg-[#141d38] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      Get in Touch
                    </span>
                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#1D4ED8] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <svg className="w-full  " viewBox="0 0 500 500">
                <mask id="shapeMask">
                  <image
                    href="https://wordpress.themeholy.com/webteck/wp-content/plugins/webteck-core/assets/img/shape/hero_shape_4.png"
                    className="w-[500px]"
                    loading="eager"
                    decoding="sync"
                  />
                </mask>

                <image
                  href="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/hero_img_12_1.jpg"
                  width="500"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#shapeMask)"
                  loading="eager"
                  decoding="sync"
                  priority
                />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-60 lg:left-[48%] w-20 h-20 rounded-full bg-[linear-gradient(to_right,rgba(135,161,250,0.9),#ffffff)] border border-[#e3e7f8] animate-movingX"></div>
          <div className="absolute top-0 left-[20%] md:left-[28%] lg:left-[20%] w-26 h-5 md:w-40 md:h-7 bg-[linear-gradient(to_right,rgba(135,161,250,0.8),#ffffff)] rounded-r-full border-[0.1px] border-[rgba(124,152,247,0.4)] rotate-135"></div>
          <div className="absolute top-0 left-[60%] md:left-[65%] lg:left-[50%] w-32 h-6 md:w-50 md:h-8 bg-[linear-gradient(to_right,#87a1fa,#e7eaf8)] rounded-r-full rotate-135"></div>
        </div>
      </section>

      <section>
        {/* Light testimonials section */}
        <div className="bg-[#f7f7fa] py-10 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularBenefits
              Benefits={Benefits}
              autoplay={true}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                des: "20px",
              }}
            />
          </div>
        </div>

        {/* Dark testimonials section */}
        {/* <div className="bg-[#060507] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            des: "20px",
          }}
        />
      </div>
    </div> */}
      </section>

      {/* Flip cards */}
      <section
        className="w-full mx-auto py-10 px-4 sm:px-6 lg:px-0"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')", // place svg in public folder
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-black text-center mb-12">
            What Sets Us apart
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-[#3e66f3] rounded-xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    Driving Digital Growth
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    We design powerful Digital experiences—from websites and
                    apps to marketing and communication tools—that help
                    businesses Grow online and Achieve measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-blue-200 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black text-center">
                    Built with Precision
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    Every solution is crafted with detail, ensuring top-notch
                    performance, usability, and long-term value to make your
                    brand stand out.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    Simple. Scalable. Effective.
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    Our Web,and Digital marketing solutions evolve as your
                    business grows—ensuring a Seamless and Scalable Digital
                    Presence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    A Partner You Can Trust
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    We go beyond launch—working with you at every stage so your
                    digital presence stays strong, relevant, and impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* hover card section */}
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 px-5 py-10 gap-6 max-w-7xl mx-auto bg-gray-100">
          <div className="card1 relative flex flex-col h-60 bg-yellow-200 group">
            <div className="bg-black h-1/2 flex justify-center items-center">
              <p className="text-white p-4 text-3xl text-bold ">
                {" "}
                Web Solution{" "}
              </p>
            </div>
            <div className=" bg-red-300 w-full h-full z-1 transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:h-1/2  absolute bottom-0 left-0 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOfjWTG5IYvymSXbN19edaQm7F1S16Ppbhw&s"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" bg-gray-300 w-1/2 h-1/2 absolute bottom-0 right-0">
              <button className="h-full w-full ">Learn More</button>
            </div>
          </div>

          <div className="card1 group  relative flex flex-col h-60 bg-yellow-200 group">
            <div className="bg-black h-1/2 flex justify-center items-center">
              <p className="text-white p-4 text-3xl text-bold ">
                {" "}
                Cpass Solution{" "}
              </p>
            </div>
            <div className=" bg-red-300 w-full h-full z-1 transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:h-1/2  absolute bottom-0 left-0 ">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" bg-gray-300 w-1/2 h-1/2 absolute bottom-0 right-0">
              <button className="h-full w-full ">Learn More</button>
            </div>
          </div>

          <div className="card1 relative flex flex-col h-60 bg-yellow-200 group">
            <div className="bg-black h-1/2 flex justify-center items-center">
              <p className="text-white p-4 text-3xl text-bold ">
                Digital Marketing
              </p>
            </div>
            <div className=" bg-red-300 w-full h-full z-1 transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:h-1/2  absolute bottom-0 left-0 ">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" bg-gray-300 w-1/2 h-1/2 absolute bottom-0 right-0">
              <button className="h-full w-full ">Learn More</button>
            </div>
          </div>

          <div className="card1 relative flex flex-col h-60 bg-yellow-200 group">
            <div className="bg-black h-1/2 flex justify-center items-center">
              <p className="text-white p-4 text-3xl text-bold ">Web Design</p>
            </div>
            <div className=" bg-red-300 w-full h-full z-1 transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:h-1/2  absolute bottom-0 left-0 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOfjWTG5IYvymSXbN19edaQm7F1S16Ppbhw&s"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" bg-gray-300 w-1/2 h-1/2 absolute bottom-0 right-0">
              <button className="h-full w-full ">Learn More</button>
            </div>
          </div>

          {/* <div className="card1 relative flex flex-col h-60 bg-yellow-200 group">
            <div className="bg-black h-1/2 flex justify-center items-center">
              <p className="text-white p-4 text-3xl text-bold">Web Solution</p>
            </div>
            <div className="bg-red-300 w-full h-full z-1 transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:h-1/2 absolute bottom-0 left-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOfjWTG5IYvymSXbN19edaQm7F1S16Ppbhw&s"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-300 w-1/2 h-1/2 absolute bottom-0 right-0">
              <button className="h-full w-full">Learn More</button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
