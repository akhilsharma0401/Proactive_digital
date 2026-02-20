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

// React
import reactWebDevelopment01 from "../../../public/images/reactWebDevelopment01.jpg";
import reactWebDevelopment02 from "../../../public/images/reactWebDevelopment02.jpg";
import reactWebDevelopment03 from "../../../public/images/reactWebDevelopment03.jpg";

// NextJS
import nextJSWebDevelopment01 from "../../../public/images/nextJSWebDevelopment01.jpg";
import nextJSWebDevelopment02 from "../../../public/images/nextJSWebDevelopment02.jpg";
import nextJSWebDevelopment03 from "../../../public/images/nextJSWebDevelopment03.jpg";

// NodeJS
import nodeJSWebDevelopment01 from "../../../public/images/nodeJSWebDevelopment01.jpg";
import nodeJSWebDevelopment02 from "../../../public/images/nodeJSWebDevelopment02.jpg";
import nodeJSWebDevelopment03 from "../../../public/images/nodeJSWebDevelopment03.jpg";

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
      question: "What makes Proactive a trusted web development company?",
      answer:
        "Proactive is a trusted web development company offering custom website development, e-commerce solutions, responsive design, CMS development, and high-performing business websites tailored for growth.",
    },
    {
      question: "Do you provide custom ecommerce website development services?",
      answer:
        "Yes, We specialize in custom ecommerce website development, delivering secure payment integration, product catalogs, shopping carts, and scalable online store solutions optimized for sales.",
    },
    {
      question: "Will my website be responsive, fast, and mobile-optimized?",
      answer:
        "Absolutely, We build responsive websites that load fast, offer seamless mobile experiences, and meet Google’s mobile-first standards for better SEO and user engagement.",
    },
    {
      question: "What platforms do you use for professional website development?",
      answer:
        "We use top website development platforms such as WordPress, Shopify, WooCommerce, Magento, Laravel, PHP, React, and Node.js to create advanced business and e-commerce websites.",
    },
    {
      question: "How long does professional website development take?",
      answer:
        "A standard business website development project usually takes 1-2 weeks, while a fully customized e-commerce website development project may take 4-6 weeks depending on features and complexity.",
    },
    {
      question: "Do you offer website maintenance and performance optimization?",
      answer:
        "Yes, We provide complete website maintenance, including security updates, speed optimization, technical fixes, backups, and ongoing support to keep your website performing at its best.",
    },
    {
      question: "Are your websites SEO-friendly and optimized for higher rankings?",
      answer:
        "Yes, Every website we develop includes SEO-friendly website development features like optimized structure, meta tags, fast loading speeds, schema markup, and mobile responsiveness to boost search engine visibility.",
    },
  ];
  // FAQs Ends

  // Section Data (Keeping all your section data as is)

  // nodeJS
  const nodeJS = [
    {
      id: 0,
      title: "Backend & Restful API Development",
      description:
        "Our backend solutions are designed to deliver seamless data exchange, scalable architecture .Using Node.js and Express.js, we build robust, secure, and high-performance RESTful APIs that power your web applications.",
      color: "border-teal-400",
      bgColor: "bg-gray-50",
      image: nodeJSWebDevelopment01,
    },
    {
      id: 1,
      title: "Microservices Architecture Development",
      description:
        "We leverage Node.js to design and implement scalable microservices architectures, enabling the development of distributed, modular, and independently deployable components.Our approach ensures greater flexibility, improved system resilience.",
      color: "border-teal-500",
      bgColor: "bg-gray-50",
      image: nodeJSWebDevelopment02,
    },
    {
      id: 2,
      title: "Serverless Architecture & Cloud Integration",
      description:
        "We help businesses adopt forward-thinking serverless solutions built with Node.js and deployed on leading cloud platforms.From AWS Lambda and Google Cloud Functions to Azure Functions, cost-efficient, and high-performance cloud integrations that reduce infrastructure overhead.",
      color: "border-teal-600",
      bgColor: "bg-gray-50",
      image: nodeJSWebDevelopment03,
    },
  ];

  // react
  const react = [
    {
      id: 0,
      title: "Modern & Interactive User Interfaces",
      description:
        "Our developers craft modern, visually engaging, and highly intuitive user interfaces using React.js to deliver seamless digital experiences.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: reactWebDevelopment01,
    },
    {
      id: 1,
      title: "Single Page Application (SPA) Development",
      description:
        "We build high-performance, fast-loading Single Page Applications (SPAs) that deliver seamless navigation and dynamic user experiences.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: reactWebDevelopment02,
    },
    {
      id: 2,
      title: "API Integration & Backend Connectivity",
      description:
        "We seamlessly connect your frontend applications with backend systems and third-party APIs to create dynamic, real-time web experiences.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: reactWebDevelopment03,
    },
  ];

  // html
  const html = [
    {
      id: 0,
      title: "Cost-Effective and Multi-platform development-",
      description:
        "HTML helps in structuring your data across web browsers and meets the increasing demand, such as cross-platform mobile application or website development. Our expert team builds HTML websites that are both effective on mobile and PCS as well as cost-effective.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentHtml01,
    },
    {
      id: 1,
      title: "Better User Experience",
      description:
        "E-commerce sites require quick and responsive sites for the customer to be retained and sales to be made .HTML sites are highly responsive, and our team integrates built-in support that is highly responsive on all devices and engaging.",
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
  const javaScript = [
    {
      id: 0,
      title: "Dynamic, Scalable & Efficient Solutions",
      description:
        "Our JavaScript solutions enable fast, flexible, and multi-platform development for web and mobile. We build responsive JS-powered websites that perform smoothly across all devices - delivering cost-effective scalability and strong performance for every business.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript01,
    },
    {
      id: 1,
      title: "Interactive Design & Seamless Performance",
      description:
        "We develop interactive and high-performing interfaces that keep users engaged. With JavaScript, we create smooth animations, real-time updates, and quick navigation - ensuring a seamless, responsive, and enjoyable experience for your customers across all platforms.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript02,
    },
    {
      id: 2,
      title: "Optimized for Speed & Search Visibility",
      description:
        "Our team refines JavaScript code and rendering for maximum performance and SEO compatibility. Using modern frameworks and optimized structures, we ensure faster loading, higher rankings, and improved online visibility for your website and brand.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: webDevelopmentJavaScript03,
    },
  ];

  // php
  const php = [
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

  // nextJS
  const nextJS = [
    {
      id: 0,
      title: "Modern React Framework",
      description:
        "Next.js is a powerful React framework used to build high-performance, scalable, and SEO-friendly websites.",
      color: "border-teal-400",
      bgColor: "bg-gray-50",
      image: nextJSWebDevelopment01,
    },
    {
      id: 1,
      title: "Multiple Rendering Methods",
      description:
        "Supports Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering, enabling faster load times and better search engine visibility.",
      color: "border-teal-500",
      bgColor: "bg-gray-50",
      image: nextJSWebDevelopment02,
    },
    {
      id: 2,
      title: "Scalable Architecture",
      description:
        "Designed to scale effortlessly as your website traffic and content grow.Structured architecture ensures easier maintenance, upgrades, and long-term stability.",
      color: "border-teal-600",
      bgColor: "bg-gray-50",
      image: nextJSWebDevelopment03,
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
                Web Development That Drives
                <span className="text-[#3e66f3]"> Growth </span> For
                <span className="text-[#3e66f3]"> Businesses </span>
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
      {/* <section className="bg-gradient-to-r from-[#f2f6ff] via-[#f5f6fe] to-[#e8edfd]"> */}
      <section className="">
        <div className="container mx-auto py-5 md:py-10 px-6 lg:px-10 2xl:px-15">
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
                    Backend Development
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    We build robust and scalable backend systems using technologies such as Node.js, PHP, Python, and Laravel, ensuring secure data handling and high-performance application operations.
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
                    Full Stack Development
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Our full stack development combines frontend and backend expertise to deliver seamless, end-to-end solutions that are efficient, scalable, and user-focused.
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
                    Custom Web Applications
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    We design and develop custom web applications tailored specifically to your business processes, and operational workflows. Our solutions are built from scratch to match your exact requirements ensuring Business Growth.
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

      <section className=" container mx-auto py-5 md:py-6 px-6 lg:px-10 2xl:px-15 ">
        <div className="flex flex-col gap-3 mb-4 items-center">
          <h2 className="poppins font-semibold text-3xl lg:text-4xl" >
            <span className="text-[#3e66f3]" >
              Technologies {" "}
            </span>
            We Use
          </h2>
          <div className="flex w-30 h-1 rounded-lg bg-[#3e66f3]"></div>
        </div>
        <div className="flex flex-col gap-10">
          <AutoPlaySection
            heading="Javascript "
            sections={javaScript}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="React"
            sections={react}
            intervalDuration={5000}
            reverse={true}
          />

          <AutoPlaySection
            heading="NextJS"
            sections={nextJS}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="Node JS"
            sections={nodeJS}
            intervalDuration={5000}
            reverse={true}
          />

          <AutoPlaySection
            heading="PHP"
            sections={php}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="HTML"
            sections={html}
            intervalDuration={5000}
            reverse={true}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="  flex justify-center items-center py-10 px-4 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#f9fafc] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white  border border-gray-100 rounded-xl py-4 px-4  sm:px-4 ">
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
        }} >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px] max-w-6xl 2xl:max-w-7xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden justify-between">
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
                <h2 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Improve Your Customer Experience
                </h2>
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
