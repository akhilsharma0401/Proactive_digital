"use client";
import React, { useState } from "react";
import Image from "next/image";
import rocket from "../../../public/animation/rocket.json";
import Lottie from "lottie-react";
import AutoPlaySection from "./../components/AutoPlaySection";
import FaqItem from "../components/FaqItem.jsx";
import Link from "next/link";
// images
import whyChooseOpenSource from "../../../public/images/whyChooseOpenSource.jpg";
import openSourceHero from "../../../public/images/openSourceHero.png";
import openSourceWordpress01 from "../../../public/images/openSourceWordpress01.jpg";
import openSourceWordpress02 from "../../../public/images/openSourceWordpress02.jpg";
import openSourceWordpress03 from "../../../public/images/openSourceWordpress03.jpg";
import openSourceWordpress04 from "../../../public/images/openSourceWordpress04.jpg";

function page() {
  const sections1 = [
    // ... sections1 data ...
    {
      id: 0,
      title: "Smart Plugin Selection ",
      description: "Based on your needs, we assess your business specificities and select the plugins that best fit your objectives.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: openSourceWordpress01,
    },
    {
      id: 1,
      title: "Customisation & Integration",
      description:
        "Our developers configure and customise the plugins to be cohesive with your website design, style and workflow.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: openSourceWordpress02,
    },
    {
      id: 2,
      title: "Performance Optimisation ",
      description:
        "We remove plugins that you do not need and optimise existing plugins so that your website performance is maximised.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: openSourceWordpress03,
    },
    {
      id: 3,
      title: "Security & Reliability ",
      description:
        "Our team maintains all plugins within your website up to date, secure and fully functional, so your website runs smoothly without risk.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: openSourceWordpress04,
    },
  ];

  // FAQs
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Why is WordPress the best option for my business website?",
      answer:
        "WordPress is open-source, inexpensive, and highly flexible; it can support everything from simple blogs to enterprise-level e-commerce platforms, which make it suitable for any size business.",
    },
    {
      question: "Can my WordPress site be designed for my industry?",
      answer:
        "Yes. WordPress is customizable through thousands of themes and plugins which make it suitable for every industry from healthcare to education to finance to retail and hospitality.",
    },
    {
      question: "How do plugins add value to my website?",
      answer:
        "Plugins allow your website to add powerful features, including SEO, security, payment systems, booking tools, and analytics, allowing your website to grow alongside your business without having to rebuild a new website.",
    },
    {
      question: " What if there are no plugins that do what I needed it to do?",
      answer:
        "Our talented team of experts can build custom WordPress plugins specifically designed for your business functionality needs.",
    },
    {
      question: "Is WordPress secure enough for my business?",
      answer:
        "Yes. There are regular updates to WordPress itself, SSL integration and plugins, and other security protocols in place that make WordPress a highly secure platform. Additionally, our team can provide additional hardening services and monitoring to keep your website safe.",
    },
    {
      question: "Will my WordPress website be mobile-friendly?",
      answer:
        "Yes! We design fully responsive websites, optimized to look as great on desktops as they do on tablets and smartphones.",
    },
  ];
  // FAQs Ends

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
      >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                WEB SOLUTIONS
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Professional WordPress Solutions-
                <span className="text-[#3e66f3]"> Intuitive Designs </span> 
                {/* &
                <span className="text-[#3e66f3]"> Robust Functionality. </span> */}
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                From custom themes to plugin integration, we build WordPress
                websites that enhance your online presence and deliver seamless
                user experiences.
              </p>

              {/* Button */}
              <div>
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
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
                src={openSourceHero}
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

      <section className="bg-gradient-to-r from-[#f2f6ff] via-[#f5f6fe] to-[#e8edfd]">
        <div className="container mx-auto  py-10 md:py-12 px-6 lg:px-10 xl:px-20">
          <h2 className="poppins text-center text-3xl md:text-4xl font-semibold mb-12">
            Why Choose{" "}
            <span className="text-[#0047FF]"> Open Source Development ? </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-14 justify-center  ">
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="relative group flex flex-col md:flex-row items-center  gap-4 bg-white rounded-xl border border-[#0047FF]/20 hover:shadow-lg p-4 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"></div>

                {/* Content (on top of gradient) */}
                <div className="relative flex flex-col gap-1 z-10 flex-1">
                  <p className="text-sm font-semibold text-[#E60012]">
                    Feature 1
                  </p>
                  <h3 className=" poppins text-[18px] md:text-[20px] font-medium text-[#3e66f3]">
                    WordPress Sites that Fit your Style
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    We create sites that are completely tailored to your
                    branding and goals. From layout to function, we design every
                    aspect specifically for you versus using an existing
                    template.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group flex flex-col md:flex-row items-center  gap-4 bg-white rounded-xl border border-[#0047FF]/20 hover:shadow-lg p-4 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"></div>

                {/* Content (on top of gradient) */}
                <div className="relative flex flex-col gap-1 z-10 flex-1">
                  <p className="text-sm font-semibold text-[#E60012]">
                    Feature 2
                  </p>
                  <h3 className=" poppins text-[18px] md:text-[20px] font-medium text-[#3e66f3]">
                    Plugin Development & Integration
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Our solutions ensure smooth operations and consistent
                    reliability over time. WordPress plugins can add
                    functionality to your website.We can create custom plugins
                    or simply add reputable third-party plugins that can aid or
                    optimize SEO, security, analytics.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group flex flex-col md:flex-row items-center  gap-4 bg-white rounded-xl border border-[#0047FF]/20 hover:shadow-lg p-4 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"></div>

                {/* Content (on top of gradient) */}
                <div className="relative flex flex-col gap-1 z-10 flex-1">
                  <p className="text-sm font-semibold text-[#E60012]">
                    Feature 3
                  </p>
                  <h3 className=" poppins text-[18px] md:text-[20px] font-medium text-[#3e66f3]">
                    SEO Optimization
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Website performance is only as good as the visibility it has
                    received. SEO friendly coding practices, site speed
                    optimisations, and preparing site content layout for ranking
                    are all different ways we ensure you have the best chance to
                    be viewed.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end 2xl:justify-center   ">
              <div className="relative group ">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#0047FF]/20 to-[#E60012]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition  "></div>
                <Image
                  src={whyChooseOpenSource}
                  alt="Why Choose Web Development"
                  width={500}
                  // height={800}
                  className=" h-full object-fit rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Auto Expanding Section */}
      <section className=" container mx-auto py-10 md:py-12 px-6 lg:px-10 xl:px-20 ">
        <div className="flex flex-col gap-10">
          <AutoPlaySection
            heading="Wordpress"
            sections={sections1}
            intervalDuration={3000}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className=" bg-[#eff0f9] flex justify-center items-center py-10 px-4 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>
          <div className="flex flex-col gap-4 bg-white rounded-xl py-4 px-4  sm:px-4 ">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* cta */} 
      <section className="py-12 px-6"
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
                  Your online presence needs more than a website. It needs real growth. Let us work together to build, refine, and scale your digital success.
                </p>
              </div>

              {/* cta button */}
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us" >
                <button className="relative inline-flex items-center justify-center px-4 py-2 text-base md:text-[16px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group " >
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
              <circle cx="1200" cy="500" r="1200" fill="#DBEAFE" opacity="0.8" />
              <circle cx="1200" cy="500" r="1000" fill="#93C5FD" opacity="0.8" />
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
