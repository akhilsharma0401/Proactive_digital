"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

// icons
import { IoSearch } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { RiQrScan2Line } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaRegCircleCheck } from "react-icons/fa6";

// images
import ecommerceHero from "../../../public/images/ecommerceHero.png";
import ecommerceWoocommerce01 from "../../../public/images/ecommerceWoocommerce01.jpg";
import ecommerceWoocommerce02 from "../../../public/images/ecommerceWoocommerce02.jpg";
import ecommerceWoocommerce03 from "../../../public/images/ecommerceWoocommerce03.jpg";
import ecommerceCms01 from "../../../public/images/ecommerceCms01.jpg";
import ecommerceCms02 from "../../../public/images/ecommerceCms02.jpg";
import ecommerceCms03 from "../../../public/images/ecommerceCms03.jpg";
import ecommerceWhyChoose from "../../../public/images/ecommerceWhyChoose.jpg";

// components
import FaqItem from "../components/FaqItem.jsx";
import AutoPlaySection from "./../components/AutoPlaySection";

const page = () => {
  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is eCommerce website development?",
      answer: "eCommerce website development involves creating a fully functional online store with product management, secure checkout, and a user-friendly, conversion-focused design.",
    },
    {
      question: "Do you provide custom eCommerce development services?",
      answer: "Yes. We offer custom eCommerce development with tailored layouts, advanced filters, product features, and integrations designed to boost online sales and business growth.",
    },
    {
      question: "Which platforms do you use for eCommerce store development?",
      answer: "We build online stores using Shopify, WooCommerce, Magento, OpenCart, and Laravel, ensuring scalable, flexible, and high-performance eCommerce websites.",
    },
    {
      question: "Will my eCommerce website be mobile-friendly and fast?",
      answer: "Absolutely. We create mobile-friendly eCommerce websites optimized for speed, smooth navigation, and a seamless shopping experience across all devices.",
    },
    {
      question: "How long does eCommerce website development take?",
      answer: "A basic eCommerce store takes about 2–3 weeks, while custom eCommerce solutions may require 4–8 weeks, depending on features and design complexity.",
    },
    {
      question: "How secure are your eCommerce websites?",
      answer: "Our eCommerce websites include SSL security, encrypted payments, secure coding, firewalls, and regular updates, ensuring safe online transactions and data protection.",
    },
    {
      question: "Do you offer eCommerce website maintenance and support?",
      answer: "Yes. We provide complete eCommerce maintenance services, including updates, bug fixes, speed optimization, security patches, and ongoing technical support.",
    },
  ];
  // FAQs Ends

  const sections1 = [
    {
      id: 0,
      title: "Seamless WooCommerce Integration.",
      description:
        "Our agency assists you in turning a basic website into an entire online shop with WooCommerce integration. We install, set up, and customize to ensure that your site integrates seamlessly with products, checkout.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceWoocommerce01,
    },
    {
      id: 1,
      title: "Connected Payments & Real-Time Orders.",
      description:
        "We incorporate reliable payment gateways and automate each step of an order, checkout and confirmation. Our configuration provides secure payments, real-time updates, and allows User to have a Seamless experience.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceWoocommerce02,
    },
    {
      id: 2,
      title: "Flexible Management & Scalable Growth.",
      description:
        "Our experts tailor WooCommerce for long-term growth and adaptability. You can manage products, promotions, and stock in real time. With CRM and marketing tool integration, your business runs smarter and faster.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceWoocommerce03,
    },
  ];

  const sections2 = [
    {
      id: 0,
      title: "Dynamic, Scalable & Efficient Solutions.",
      description:
        "Our JS solutions allow rapid, flexible, and multi-platform development for mobile and web. We create responsive JS-driven websites that run smoothly on any device - providing cost-efficient scalability and robust performance for any business.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceCms01,
    },
    {
      id: 1,
      title: "Interactive Design & Seamless Performance.",
      description:
        "We build engaging and fast-performing interfaces that engage customers. We deliver smooth animations, live updates, and fast navigation through the use of JavaScript - giving your customers a seamless, responsive, and fun experience on any platform.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: ecommerceCms02,
    },
    {
      id: 2,
      title: "Optimized for Speed & Search Visibility.",
      description:
        "Our team optimizes JavaScript code and rendering for top performance and SEO compatibility. With the latest frameworks and optimized structures, we provide increased speed in loading, higher search rankings, and enhanced online visibility.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: ecommerceCms03,
    },
  ];

  const process = [
    {
      id: 1,
      step: "step-1",
      title: "Discovery & Requirement Analysis",
      icon: <IoSearch className="text-xl text-white" />,
      description: "We start by understanding your business goals, target audience, and technical requirements to define a clear project roadmap tailored to your vision. ",
    },
    {
      id: 2,
      step: "step-2",
      title: "Strategy & UI/UX Design",
      icon: <CgWebsite className="text-xl text-white" />,
      description: "Our team crafts a strategic plan and creates an intuitive, conversion-focused design that reflects your brand identity and enhances customer experience.",
    },
    {
      id: 3,
      step: "step-3",
      title: "Development & System Integration",
      icon: <IoCodeSlash className="text-xl text-white" />,
      description: "We build your e-commerce platform using modern technologies and integrate essential tools, payment gateways, and APIs to ensure seamless functionality.",
    },
    {
      id: 4,
      step: "step-4",
      title: "Testing & Performance Optimization",
      icon: <RiQrScan2Line className="text-xl text-white" />,
      description: "Every feature is thoroughly tested for functionality, speed, security, and cross-device compatibility to ensure a flawless user experience.",
    },
    {
      id: 5,
      step: "step-5",
      title: "Launch & Deployment",
      icon: <HiOutlineRocketLaunch className="text-xl text-white" />,
      description: "Once approved, we deploy your website smoothly, ensuring secure hosting setup and a seamless transition to live operations.",
    },
    {
      id: 6,
      step: "step-6",
      title: "Ongoing Support & Maintenance",
      icon: <FaRegCircleCheck className="text-xl text-white" />,
      description: "After launch, we provide continuous technical support, updates, and performance monitoring to keep your e-commerce platform optimized and competitive.",
    }
  ]

  const benefits = [
    {
      step: "01",
      title: "Startups",
      des: "Launch fast with a scalable store, clean UX, secure payments, and an optimized checkout that improves conversions.",
    },
    {
      step: "02",
      // title: "Small & Medium Enterprises",
      title: "SMEs",
      des: "Scale sales with automation, CRM/ERP integrations, inventory sync, and analytics that help you optimize performance.",
    },
    {
      step: "03",
      // title: "Large Enterprises",
      title: "Corporates",
      des: "Enterprise-grade commerce with high-volume performance, multi-store management, advanced APIs, and secure scalable infrastructure.",
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
      >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10 ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                WEB SOLUTIONS
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Professional E-commerce
                <span className="text-[#3e66f3]"> Website </span> &
                <span className="text-[#3e66f3]"> CMS Solutions </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                We design and develop e-commerce websites to CMS-powered
                platforms, and we deliver secure, mobile-friendly, and
                SEO-optimised solutions designed to drive growth.
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
              src={ecommerceHero}
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
        <div className="container mx-auto  py-10 md:py-12 px-6 lg:px-10 xl:px-20">
          <h2 className="poppins text-center text-3xl md:text-4xl font-semibold mb-12">
            Why Choose <span className="text-[#3e66f3]"> Ecommerce ?</span>
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
                    WooCommerce Integration
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    We integrate your store with WooCommerce to manage your
                    products, orders, and inventory in a seamless way within a
                    simple CMS.
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
                    CMS-Based Control
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Easily control your website content, products, and
                    promotions through a simple content management system
                    designed specifically for your business.
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
                    Payment Gateway Integration
                  </h3>
                  <p className="open-sans text-[14px] leading-relaxed text-gray-600">
                    Facilitate secure and quick online payments through top
                    gateways such as Razorpay, Paytm, Stripe, or PayPal - so
                    your customers' transactions are reliable and hassle-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end 2xl:justify-center  ">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#0047FF]/20 to-[#E60012]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition"></div>
                <Image
                  src={ecommerceWhyChoose}
                  alt="Why Choose Web Development"
                  width={500}
                  // height={800}
                  className=" h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* who can get benifits */}

      <section className="container mx-auto px-6 lg:px-10 2xl:px-15  ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3e66f3] px-4 py-2 rounded-full text-sm font-semibold">
              For Every Business Stage
            </div>

            <h2 className="poppins text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight mt-6">
              Who can get Benefits
              <span className="text-[#3e66f3] lg:block"> {" "} E-commerce Development {" "} </span> Services?
            </h2>

            <p className="open-sans text-gray-600 text-base lg:text-lg leading-relaxed mt-5 max-w-xl">
              A structured eCommerce build for growth — whether you’re launching,
              scaling, or managing enterprise-level operations.
            </p>
          </div>

          {/* RIGHT - Vertical Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 h-full">
            {benefits.map((benefit, idx) => (
              <div className="flex flex-col gap-2 group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="poppins text-lg lg:text-xl font-medium group-hover:text-[#3e66f3] transition">
                    {benefit.title}
                  </h4>
                  <span className="text-4xl font-bold text-gray-200 leading-none">{benefit.step}</span>
                </div>

                <p className="open-sans text-sm text-gray-600 leading-relaxed">
                  {benefit.des}
                </p>
              </div>
            ))}

            {/* Step 1 */}

            {/* <div className=" flex flex-col gap-2 group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full ">
              <div className="flex items-start justify-between gap-2">
                <h4 className="poppins text-xl font-medium group-hover:text-[#3e66f3] transition">
                  Startups
                </h4>
                <span className="text-4xl font-bold text-gray-200 leading-none">01</span>
              </div>

              <p className="open-sans text-sm text-gray-600 leading-relaxed">
                Launch fast with a scalable store, clean UX, secure payments,
                and an optimized checkout that improves conversions.
              </p>
            </div> */}

            {/* Step 2 */}
            {/* <div className="group relative h-full">

              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="poppins text-xl font-medium group-hover:text-[#3e66f3] transition">
                    Small & Medium Enterprises
                  </h4>
                  <span className="text-4xl font-bold text-gray-200 leading-none">02</span>
                </div>

                <p className="open-sans text-sm text-gray-600 leading-relaxed">
                  Scale sales with automation, CRM/ERP integrations, inventory sync,
                  and analytics that help you optimize performance.
                </p>
              </div>
            </div> */}

            {/* Step 3 */}
            {/* <div className="group relative h-full">

              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="poppins text-xl font-medium group-hover:text-[#3e66f3] transition">
                    Large Enterprises
                  </h4>
                  <span className="text-4xl font-bold text-gray-200 leading-none">03</span>
                </div>

                <p className="open-sans text-sm text-gray-600 leading-relaxed">
                  Enterprise-grade commerce with high-volume performance, multi-store
                  management, advanced APIs, and secure scalable infrastructure.
                </p>
              </div>
            </div> */}
          </div>

        </div>
      </section>



      {/* <div className="container mx-auto py-10 px-6 lg:px-10">
        <div className="flex flex-col gap-10">
          <div className="flex">
            <h2 className="poppins text-4xl max-w-xl leading-relaxed">
              Who can get
              <span className="text-[#3e66f3] font-semibold">
                {" "} Benefits {" "}
              </span>
              from
              <span className="text-[#3e66f3] font-semibold">
                {" "} E-commerce Development {" "}
              </span>
              Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-3 border rounded-xl p-4 ">
              <div className="">
                <h4 className="poppins text-xl font-medium text-[#3e66f3]" >
                  Startups
                </h4>
              </div>
              <div className="">
                <p className="open-sans text-gray-600" >
                  Startups looking to establish their brand online with a strong foundation.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 border rounded-xl p-4 ">
              <div className="">
                <h4 className="poppins text-xl font-medium text-[#3e66f3]" >
                  Small to Medium Enterprises
                </h4>
              </div>
              <div className="">
                <p className="open-sans text-gray-600 " >
                  Small to Medium Enterprises aiming to expand their reach and boost sales through an efficient online store.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 border rounded-xl p-4 ">
              <div className="">
                <h4 className="poppins text-xl font-medium text-[#3e66f3]" >
                  Large Enterprises
                </h4>
              </div>
              <div className="">
                <p className="open-sans text-gray-600" >
                  Large Enterprises that require scalable solutions to manage a high volume of transactions and complex operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* E-commerce process */}
      <div className="container mx-auto py-10 px-6 lg:px-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="poppins text-4xl max-w-xl leading-relaxed">
              Our
              <span className="text-[#3e66f3] font-semibold">
                {" "} E-commerce Development {" "}
              </span>
              Process
            </h2>
            <p className="open-sans text-lg">
              Our simple development process makes sure your project is finished smoothly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {process.map((process) => (
              <div key={process.id} className="flex flex-col gap-2 rounded-xl  p-4 hover:shadow-xl transition-all duration-500 hover:bg-[#f5f9ff] ">
                <div className="flex flex-col gap-1.5 items-start">
                  <div className="flex justify-center items-center p-2 bg-[#3e66f3] rounded-lg ">
                    {/* <IoSearch className="text-xl text-white" /> */}
                    {process.icon}
                  </div>
                  <span className="open-sans text-sm font-medium text-red-600" >
                    {process.step}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="poppins text-lg font-medium text-[#3e66f3] " >
                    {process.title}
                  </h4>
                  <p className="open-sans text-gray-600" >
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto Expand section */}
      {/* <section className=" container mx-auto py-10 md:py-12 px-6 lg:px-10 xl:px-20 ">
        <div className="flex flex-col gap-10">
          <AutoPlaySection
            heading="Woocommerce"
            sections={sections1}
            intervalDuration={5000}
          />

          <AutoPlaySection
            heading="CMS"
            sections={sections2}
            intervalDuration={5000}
            reverse={true}
          />
        </div>
      </section> */}

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

          <section className="bg-[url('/images/diagonalStripes.svg')] bg-repeat bg-auto py-10 px-6 lg:px-10" >
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
            <div className="md:flex absolute -top-7 -left-7 md:-left-2 md:top-0 w-[150px] h-[150px] md:w-auto md:h-[110px] lg:h-[120px] opacity-25 md:opacity-100   ">
              <Lottie animationData={rocket} loop={true} />
            </div>

            {/* content */}
            <div className="flex flex-col  justify-center py-10 md:py-0 px-10 md:px-18  gap-4  h-full ">
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Let's Get In Touch
                </h2>
                <p className="text-[16px] lg:text-[18px] text-black open-sans  text-center md:text-start">
                  Your digital presence deserves more than just a website it deserves a performance web solution built to grow your business.Let's build, optimize, and scale your online success.
                </p>
              </div>

              {/* cta button */}
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us" >
                  <button
                    aria-label="Start Now"
                    onClick={() => setVisible(true)}
                    className="relative inline-flex items-center justify-center px-4 py-2 text-base md:text-[16px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group "
                  >
                    <span className="relative z-10">Start Now</span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>

                {/* cta form component */}
                {/* <BookDemoDialog visible={visible} setVisible={setVisible} /> */}
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
    </>
  );
};

export default page;
