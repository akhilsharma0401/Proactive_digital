"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

// assets
import rocket from "../../../public/animation/rocket.json";

// components
import AutoPlaySection from "./../components/AutoPlaySection";
import FaqItem from "../components/FaqItem.jsx";


// images
import whyChooseOpenSource from "../../../public/images/whyChooseOpenSource.jpg";
import whyChooseCustomDevelopment from "../../../public/images/whyChooseCustomDevelopment.jpg";
import openSourceHero from "../../../public/images/openSourceHero.png";
import customDevelopmentHero from "../../../public/images/customDevelopmentHero.png";
import openSourceWordpress01 from "../../../public/images/openSourceWordpress01.jpg";
import openSourceWordpress02 from "../../../public/images/openSourceWordpress02.jpg";
import openSourceWordpress03 from "../../../public/images/openSourceWordpress03.jpg";
import openSourceWordpress04 from "../../../public/images/openSourceWordpress04.jpg";
import customDevelopment01 from "../../../public/images/customDevelopment01.jpg";
import customDevelopment02 from "../../../public/images/customDevelopment02.jpg";
import customDevelopment03 from "../../../public/images/customDevelopment03.jpg";
import apiIntegration01 from "../../../public/images/apiIntegration01.jpg";
import apiIntegration02 from "../../../public/images/apiIntegration02.jpg";
import apiIntegration03 from "../../../public/images/apiIntegration03.jpg";

function page() {
  const apiIntegration = [
    {
      id: 0,
      title: "Seamless System Connectivity",
      description: "API integration allows your website to communicate effortlessly with third-party platforms, internal systems, and external services. By creating a connected digital ecosystem, APIs enable smooth data flow.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: apiIntegration01,
    },
    {
      id: 1,
      title: "Secure & Real-Time Data Exchange",
      description:
        "Through secure and well-structured API integrations, websites can exchange data instantly and reliably. This reduces manual processes, improves accuracy, and delivers consistent user experiences.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: apiIntegration02,
    },
    {
      id: 2,
      title: "Scalable API Integrations",
      description:
        "Our API integration services enhance website functionality and operational efficiency by connecting essential systems such as payment gateways, CRM platforms, ERP solutions.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: apiIntegration03,
    },
  ];

  const customDevelopment = [
    {
      id: 0,
      title: "Tailored Business Logic Implementation",
      description: "We design and develop fully customized web applications aligned with your unique workflows, operational requirements, and business objectives. Every module is built to match your internal processes.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: customDevelopment01,
    },
    {
      id: 1,
      title: "Advanced Security Implementation",
      description:
        "We integrate secure authentication (JWT, OAuth 2.0), role-based access control (RBAC), encrypted data transmission (HTTPS/SSL), and protection against vulnerabilities like XSS, CSRF, and SQL injection.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: customDevelopment02,
    },
    {
      id: 2,
      title: "API-First & Integration-Ready Development",
      description:
        "Our custom solutions are built with an API-first approach, enabling seamless integration with third-party platforms such as CRMs, ERPs, payment gateways, logistics systems, and analytics tools.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: customDevelopment03,
    },
  ];

  // FAQs
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is custom development and how does it benefit businesses?",
      answer:
        "Custom development is the creation of websites, web applications or software fitting your requirements. It’s fully flexible, faster performing, and more secure than server-based practice.",
    },
    {
      question: "What tech stack does Proactive leverage for bespoke development?",
      answer:
        "Proactive is powered by modern development technologies like React.js, Next.js, Node.js, Laravel and PHP backed by MySQL/MongoDB NoSQL data stores to develop robust web systems that are secure, scalable, and high capacity.",
    },
    {
      question: "Is it possible to develop a custom solution for my business needs?",
      answer:
        "Yes. We will craft and build an entirely custom-made website, web application, dashboard, portal or enterprise system to fit your workflow and industry standards, grow with your business for years to come.",
    },
    {
      question: "What if we are looking at migration from existing systems to a custom system?",
      answer:
        "Yes. Our migration solutions enable rapid, secure and zero-downtime data transfer from your legacy or third-party systems to ad hoc developed software.",
    },
    {
      question: "Is custom-built software safe for use in business?",
      answer:
        "Absolutely. We follow a custom development process with high-level security protocols, encrypted data handling, secured authentication systems and performance optimizations in order to provide secure and reliable business processes.",
    },
    {
      question: "Do you support custom solutions?",
      answer:
        "Yes. We provide constant support, performance tracking, function upgrades, bug fixing and security updates to maintain the stability of systems and long-term development.",
    },
    {
      question: "Are you able to work with APIs and third-party tools for handcrafted applications?",
      answer:
        "Yes. Our expertise also includes API integration with CRMs, ERPs, payment gateways, marketing tools and other enterprise software to ensure uninterrupted data flow and automation across your tailor-made platform.",
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
                CUSTOM DEVELOPMENT
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                <span className="text-[#3e66f3]"> Custom Development  </span>
                {" "} & {" "}
                <span className="text-[#3e66f3]"> API Integration</span>
                {" "} Services
                {/* &
                <span className="text-[#3e66f3]"> Robust Functionality. </span> */}
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                We provide custom web development and secure API integration services to build scalable, high-performance digital solutions. Our tailored applications and seamless system integrations.
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
              src={customDevelopmentHero}
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


      {/* <section className="bg-gradient-to-r from-[#f2f6ff] via-[#f5f6fe] to-[#e8edfd]"> */}
      <section className="">
        <div className="container mx-auto  py-10 md:py-12 px-6 lg:px-10 xl:px-20">
          <h2 className="poppins text-center text-3xl md:text-4xl font-semibold mb-12">
            Why Choose{" "}
            <span className="text-[#3e66f3]"> Custom Web Development ? </span>
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
                    Architecture Designed for Business Logic
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Custom web development allows us to architect applications specifically around your operational workflows, data models, and scalability goals.
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
                    Control Over Performance & Security Stack
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    With a custom-built solution, you gain complete control over the technology stack, infrastructure configuration. From JWT/Auth authentication and RBAC authorization models.
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
                    Scalable & Extensible System Design
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Custom applications are built with extensibility in mind. Using service-oriented architecture, reusable modules, and cloud-ready deployment strategies, your platform can scale horizontally, integrate new services.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end 2xl:justify-center   ">
              <div className="relative group ">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#0047FF]/20 to-[#E60012]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition  "></div>
                <Image
                  src={whyChooseCustomDevelopment}
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
            heading="Api Integration"
            sections={apiIntegration}
            intervalDuration={3000}
          />

          <AutoPlaySection
            heading="Custom Development"
            sections={customDevelopment}
            intervalDuration={3000}
            reverse={true}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className=" bg-white flex justify-center items-center py-10 px-6 lg:px-10 ">
        <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto  bg-[#f9fafc] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>
          <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl py-4 px-4  sm:px-4 ">
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
        }} >
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
                <h2 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Improve Your Customer Experience
                </h2>
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
