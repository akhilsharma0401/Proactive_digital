"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

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
      question: "Which functionalities are provided in an e-commerce website?",
      answer: "We offer product catalogs, filtering options, shopping cart functionality, safe checkout, payment gateway integration order monitoring, stock control and additional features." ,
    },
    {
      question: "Am I able to handle products and orders on my own?",
      answer: "Absolutely! You will receive an admin dashboard that allows you to add products, control stock modify prices and manage customer orders effortlessly.",
    },
    {
      question: "Which payment options are available, for integration?",
      answer: "We accept payments, through UPI, credit/debit cards, net banking, COD, PayPal, Razorpay, Stripe, Paytm and other used payment gateways.",
    },
    {
      question: "Will my e-commerce store be mobile responsive?",
      answer: "Definitely. Your shop will be tailored for phones, tablets and desktop computers.",
    },
    {
      question: "Are you able to incorporate shipping and delivery collaborators?",
      answer: "Indeed we incorporate leading courier providers, shipping APIs, delivery tracking and automated shipping cost calculators.",
    },
    {
      question: "Is my e-commerce website secure?",
      answer: "We ensure strong security with SSL certificates, encrypted data handling, secure payments, and regular updates.",
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
      image: ecommerceWoocommerce01 ,
    },
    {
      id: 1,
      title: "Connected Payments & Real-Time Orders.",
      description:
        "We incorporate reliable payment gateways and automate each step of an order, checkout and confirmation. Our configuration provides secure payments, real-time updates, and allows User to have a Seamless experience.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceWoocommerce02 ,
    },
    {
      id: 2,
      title: "Flexible Management & Scalable Growth.",
      description:
        "Our experts tailor WooCommerce for long-term growth and adaptability. You can manage products, promotions, and stock in real time. With CRM and marketing tool integration, your business runs smarter and faster.",
      color: "border-[#3e66f3]",
      bgColor: "bg-gray-50",
      image: ecommerceWoocommerce03 ,
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
      image: ecommerceCms01 ,
    },
    {
      id: 1,
      title: "Interactive Design & Seamless Performance.",
      description:
        "We build engaging and fast-performing interfaces that engage customers. We deliver smooth animations, live updates, and fast navigation through the use of JavaScript - giving your customers a seamless, responsive, and fun experience on any platform.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: ecommerceCms02 ,
    },
    {
      id: 2,
      title: "Optimized for Speed & Search Visibility.",
      description:
        "Our team optimizes JavaScript code and rendering for top performance and SEO compatibility. With the latest frameworks and optimized structures, we provide increased speed in loading, higher search rankings, and enhanced online visibility.",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: ecommerceCms03 ,
    },
  ];

  return (
    <>
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
                Professional E-commerce
                <span className="text-[#3e66f3]"> Website </span> &
                <span className="text-[#3e66f3]"> CMS Solutions. </span>
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
      <section className="bg-gradient-to-r from-[#f2f6ff] via-[#f5f6fe] to-[#e8edfd]">
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
                    WooCommerce Integration:
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
                    CMS-Based Control:
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
                    Payment Gateway Integration:
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

      {/* Auto Expand section */}
      <section className=" container mx-auto py-10 md:py-12 px-6 lg:px-10 xl:px-20 ">
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
    </>
  );
};

export default page;
