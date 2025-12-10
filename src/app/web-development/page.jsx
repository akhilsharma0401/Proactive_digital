"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";


// components
import FaqItem from "../components/FaqItem.jsx";
import AutoPlaySection from "./../components/AutoPlaySection";

// images
import webDevelopmentHero from "../../../public/images/webDevelopmentHero.png";
import webDevelopmentWhyChoose from "../../../public/images/webDevelopmentWhyChoose.jpg";
// ecommerce
import webDevelopmentEcommerce01 from "../../../public/images/webDevelopmentEcommerce01.jpg";
import webDevelopmentEcommerce02 from "../../../public/images/webDevelopmentEcommerce02.jpg";
import webDevelopmentEcommerce03 from "../../../public/images/webDevelopmentEcommerce03.jpg";

// cms
import webDevelopmentCms01 from "../../../public/images/webDevelopmentCms01.jpg";
import webDevelopmentCms02 from "../../../public/images/webDevelopmentCms02.jpg";
import webDevelopmentCms03 from "../../../public/images/webDevelopmentCms03.jpg";

// dotNet
import webDevelopmentDotNet01 from "../../../public/images/webDevelopmentDotNet01.jpg";
import webDevelopmentDotNet02 from "../../../public/images/webDevelopmentDotNet02.jpg";
import webDevelopmentDotNet03 from "../../../public/images/webDevelopmentDotNet03.jpg";

// Html
import webDevelopmentHtml01 from "../../../public/images/webDevelopmentHtml01.jpg";
import webDevelopmentHtml02 from "../../../public/images/webDevelopmentHtml02.jpg";
import webDevelopmentHtml03 from "../../../public/images/webDevelopmentHtml03.jpg";

// javaScript
import webDevelopmentJavaScript01 from "../../../public/images/webDevelopmentJavaScript01.jpg";
import webDevelopmentJavaScript02 from "../../../public/images/webDevelopmentJavaScript02.jpg";
import webDevelopmentJavaScript03 from "../../../public/images/webDevelopmentJavaScript03.jpg";

// php
import webDevelopmentPhp01 from "../../../public/images/webDevelopmentPhp01.jpg";
import webDevelopmentPhp02 from "../../../public/images/webDevelopmentPhp02.jpg";
import webDevelopmentPhp03 from "../../../public/images/webDevelopmentPhp03.jpg";


function page() {
  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which services come under web development?",
      answer:
        "Web development covers website design, front-end coding, back-end programming, adaptive layouts, performance enhancements, and basic SEO setup.",
    },
    {
      question: "How long does it generally take to develop a website?",
      answer:
        "A simple website usually takes days, while more sophisticated ones can take as long as 2-4 weeks, based on the complexity of the features and design.",
    },
    {
      question: "Will my site work across all devices?",
      answer:
        "Indeed every website we develop is fully responsive and optimized for desktops, tablets, and smartphones.",
    },
    {
      question: "Is custom web site design?",
      answer:
        "Indeed, we build websites: from scratch, tailored to represent your brand's identity and preferences.",
    },
    {
      question: "Is it possible to redesign my website?",
      answer:
        "Of course, we could update the design, enhance functionality, and give your website an appearance and experience.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Indeed we adhere to standards for on-page SEO, quick loading times, and well-organized code architecture.",
    },
    {
      question: "Which technologies does your development process involve?",
      answer:
        "We utilize tools such as HTML, CSS, JavaScript, React, PHP, Node.js, and others depending on the requirements of the project.",
    },
    {
      question: "What do you do to ensure a website is secure?",
      answer:
        "We apply SSL follow coding methods, perform updates, and monitor performance to ensure your website stays safe.",
    },
    {
      question:
        "After my website has been developed, would I be able to make changes to it?",
      answer:
        "Of course, you will be given the facility to manage your pages, content, images, and basic settings with ease.",
    },
    {
      question: "Do you provide support and maintenance?",
      answer:
        "Indeed, we offer maintenance packages on an annual basis covering updates, backups, security checks, and performance enhancements.",
    },
    {
      question: "Can you integrate tools into my website?",
      answer:
        "Of course, we are able to integrate APIs, such as chat platforms, maps, analytics, forms, reservation tools, and many more.",
    },
    {
      question: "What is the cost of web development?",
      answer:
        "The pricing depends on the number of pages, features, and customization required. We provide a clear quote after we have understood your needs.",
    },
  ];
  // FAQs Ends

  // Section Data (Keeping all your section data as is)
  // ecommerce
  const sections1 = [
    // ... sections1 data ...
    {
      id: 0,
      title: "Responsive & Mobile-Optimized Design",
      description:
        "Designed websites are mobile-friendly, and we also develop layouts that are easy for customers to navigate.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: webDevelopmentEcommerce01,
    },
    {
      id: 1,
      title: "User-Friendly Navigation & Engagement",
      description:
        "An effortless design encourages visitors to spend more time scrolling through the website.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentEcommerce02,
    },
    {
      id: 2,
      title: "Seamless E-Commerce Experience",
      description:
        "We design websites that provide customers with a hassle-free online shopping experience.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentEcommerce03,
    },
  ];

  // cms
  const sections2 = [
    // ... sections2 data ...
    {
      id: 0,
      title: "Advanced Themes & Custom Control",
      description:
        "CMS provides a vast variety of theme options, content management, and customization.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentCms01,
    },
    {
      id: 1,
      title: "High-Performance, Scalable Architecture",
      description:
        "We create websites that provide consumers greater scalability and a back-end that optimizes performance. It allows websites to rank faster and handle databases more securely.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentCms02,
    },
    {
      id: 2,
      title: "Enterprise-Ready",
      description:
        "It's a wonderful tool for creating complicated websites and is ideal for those with significant budgets and long-term web projects.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentCms03,
    },
  ];

  // DOT NET
  const sections3 = [
    // ... sections3 data ...
    {
      id: 0,
      title: "Right Framework",
      description:
        "The success of a website or application largely depends on the framework it’s built on. Among the many options available, the .NET framework.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentDotNet01,
    },
    {
      id: 1,
      title: "Scalable Solutions",
      description:
        ".NET can be used for every business to build websites and apps.It is reliable and easy to scale. It helps businesses to keep up with changing business need.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentDotNet02,
    },
    {
      id: 2,
      title: "Multi-Version Deployment",
      description:
        ".NET's flexibility is its biggest strength, and it can be deployed within your application or run on multiple versions on the same computer.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentDotNet03,
    },
  ];

  // html
  const sections4 = [
    // ... sections4 data ...
    {
      id: 0,
      title: "Cost-Effective and Multi-platform development",
      description:
        "HTML helps in structuring your data across web browsers and meets the increasing demand, such as cross-platform mobile application or website development.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentHtml01,
    },
    {
      id: 1,
      title: "Better User Experience",
      description:
        "E-commerce sites require quick and responsive sites for the customer to be retained and sales to be made .HTML sites are highly responsive, and our team integrates built-in support that is highly responsive on all devices.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentHtml02,
    },
    {
      id: 2,
      title: "SEO Friendly",
      description:
        "An HTML site is easily readable by the SEO. HTML updates are highly responsive to SEO, and our developers merge HTML code with the most effective techniques of SEO that help the website rank higher.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentHtml03,
    },
  ];

  // javascript
  const sections5 = [
    // ... sections5 data ...
    {
      id: 0,
      title: "Module Alpha",
      description:
        "E-commerce sites require quick and responsive sites for the customer to be retained and sales to be made .HTML sites are highly responsive, and our team integrates built-in support that is highly responsive on all devices.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript01,
    },
    {
      id: 1,
      title: "Module Beta",
      description:
        "E-commerce sites require quick and responsive sites for the customer to be retained and sales to be made .HTML sites are highly responsive, and our team integrates built-in support that is highly responsive on all devices.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript02,
    },
    {
      id: 2,
      title: "Module Gamma",
      description:
        "E-commerce sites require quick and responsive sites for the customer to be retained and sales to be made .HTML sites are highly responsive, and our team integrates built-in support that is highly responsive on all devices.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript03,
    },
  ];

  // php
  const sections6 = [
    // ... sections6 data ...
    {
      id: 0,
      title: "Secure Sites",
      description:
        " PHP offers robust frameworks and native capabilities to safeguard information and transactions. This secures businesses from attacks.",
      color: "border-teal-400",
      bgColor: "bg-gray-50",
      image: webDevelopmentPhp01,
    },
    {
      id: 1,
      title: "Dynamic and Flexible",
      description:
        "PHP readily adapts to the demands of small business websites and big business platforms.PHP enables agencies to design personalized solutions that suit their specific business objectives exactly.",
      color: "border-teal-500",
      bgColor: "bg-gray-50",
      image: webDevelopmentPhp02,
    },
    {
      id: 2,
      title: "Affordable Development",
      description:
        "PHP is open source. This reduces cost of development and accelerates time to market.PHP is compatible with leading databases such as MySQL and PostgreSQL and with various types of servers.",
      color: "border-teal-600",
      bgColor: "bg-gray-50",
      image: webDevelopmentPhp03,
    },
  ];

  return (
    <>
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
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                WEB SOLUTIONS
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Web Development That Drives Growth For
                <span className="text-[#3e66f3]"> Ambitious Brands </span> &
                <span className="text-[#3e66f3]"> Businesses. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                Whether it's a simple site or a big platform, we create websites
                that are dependable, user-friendly, and designed to grow.
              </p>

              {/* Button */}
              <div>
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10"> Consult Expert </span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={webDevelopmentHero}
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

      {/* why choose web development */}
      <section className="bg-gradient-to-r from-[#f2f6ff] via-[#f5f6fe] to-[#e8edfd]">
        <div className="container mx-auto  py-10 md:py-12 px-6 lg:px-10 xl:px-20">
          <h2 className="poppins text-center text-3xl md:text-4xl font-medium mb-12">
            Why Choose <span className="text-[#0047FF]">Web Development ?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 justify-center  ">
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
                    Custom-Built Solutions
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Our Services are tailored as per customer requirements,
                    Business and products and services each individual is
                    selling. To meet that expectation and objective, we offer
                    custom-built solutions.
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
                    SEO Friendly Website
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Integrating SEO can boost site rank and visibility. Our team
                    ensures that whether it’s a blog or website content, our
                    experts use best SEO practices to ensure the website ranks
                    higher and attracts organic traffic.
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
                    Secure and Reliable
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    A secure website with SSL integration attracts loyal and
                    returning customers or clients. We create secure websites
                    that have layers of security that protect your data and
                    trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end 2xl:justify-center  ">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#0047FF]/20 to-[#E60012]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition"></div>
                <Image
                  src={webDevelopmentWhyChoose}
                  alt="Why Choose Web Development"
                  width={500}
                  height={600}
                  className=" lg:h-[400px] xl:h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Pass the specific activeTabId state and its setter to each section */}
        
      <section className=" container mx-auto py-10 md:py-12 px-6 lg:px-10 xl:px-20 ">
        <div className="flex flex-col gap-10">
          <AutoPlaySection
            heading="Ecommerce"
            sections={sections1}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="CMS"
            sections={sections2}
            intervalDuration={5000}
            reverse={true}
          />

          <AutoPlaySection
            heading=".Net"
            sections={sections3}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="HTML"
            sections={sections4}
            intervalDuration={5000}
            reverse={true}
          />

          <AutoPlaySection
            heading="Javascript "
            sections={sections5}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="PHP"
            sections={sections6}
            intervalDuration={5000}
            reverse={true}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="  flex justify-center items-center py-10 px-4 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#eff0f9] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
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
    </>
  );
}

export default page;
