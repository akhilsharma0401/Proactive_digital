"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import service_bg from "../../../public/images/service_bg.jpg";

// images
import webDevelopmentHero from "../../../public/images/webDevelopmentHero.png";
import introductionSmsBased from "../../../public/images/introductionSmsBased.jpg";
import processSmsBased from "../../../public/images/processSmsBased.jpg";
import heroSmsBased from "../../../public/images/heroSmsBased.png";

const benifits = [
  {
    id: 1,
    title: "Streamlined Coupon Generation",
    description: "The application simplifies the process of generating coupons  for your customers. It automates the creation of unique coupon codes.",
  },
  {
    id: 2,
    title: "Improved Customer Engagement",
    description: "By offering coupons to customers and enabling them to  redeem them via SMS sent on a dedicated Long Code number, you enhance customer engagement. Customers are more likely to interact with your brand when they receive offers and  promotions, leading to increased loyalty and repeat business.",
  },
  {
    id: 3,
    title: "Real-time Verification and Redemption Tracking",
    description: "The application provides real-time verification  of coupon redemption requests sent by customers via SMS. This ensures that only valid coupons  are redeemed, reducing the risk of fraud or misuse. Additionally, the system tracks the status of  redemptions and promptly sends SMS notifications to customers, enhancing transparency and  trust.",
  },
  {
    id: 4,
    title: "Efficient Management of Redemption Requests",
    description: " The coupon manager can easily view and  manage redemption requests through the application. It also provides valuable insights into  customer behavior and redemption, helping to refine marketing strategies.",
  },
  {
    id: 5,
    title: "Cost Savings and Data Analytics",
    description: "With a coupon management application, you can save costs on  traditional coupon printing methods. Furthermore, the application collects valuable data on  customer interactions and redemption rates. This data can be analyzed to make data-driven  decisions, refine marketing campaigns and optimize coupon offerings to maximize ROI.",
  }
]

const couponWorking = [
  {
    id: 1,
    title: "Create Product",
  },
  {
    id: 2,
    title: "Generate Coupon for product",
  },
  {
    id: 3,
    title: "Coupon distribution via online/offline channels",
  },
  {
    id: 4,
    title: "Redemption Request sent by customer through Long Code",
  },
  {
    id: 5,
    title: "Redemption request received in the system",
  },
  {
    id: 6,
    title: "Redemption request verification by system",
  },
  {
    id: 7,
    title: "Notify Customer of redemption status",
  },
]

const services = [
  {
    id: 1,
    title: "Streamlined Coupon Generation",
    description:
      "The application automates coupon creation by generating unique codes for customers. This reduces manual effort, saves time, and ensures consistent accuracy across all marketing campaigns.",
  },
  {
    id: 2,
    title: "Enhanced Customer Engagement",
    description:
      "Customers can redeem coupons via SMS on a dedicated long code number. This improves engagement, encourages interaction, and helps increase loyalty along with repeat purchases.",
  },
  {
    id: 3,
    title: "Real-Time Redemption Tracking",
    description:
      "Coupon redemptions are verified instantly through SMS requests from customers. The system tracks status accurately and sends timely notifications to maintain transparency and trust.",
  },
  {
    id: 4,
    title: "Redemption Request Management",
    description:
      "Managers can view and control all coupon redemption requests from one dashboard. The system also provides insights to improve customer targeting and campaign performance.",
  },
  {
    id: 5,
    title: "Cost Savings and Analytics",
    description:
      "The platform eliminates traditional coupon printing costs completely. It also gathers actionable analytics to refine campaigns, improve targeting, and maximize overall ROI.",
  },
];


const page = () => {
  return (
    <div className=''>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat lg:px-10 "
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
         >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 2xl:px-15 lg:py-12 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                PPSPL
              </p> 

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-0">
                SMS Based
                <span className="text-[#3e66f3]">
                  {" "} Coupon {" "}
                </span>
                Management System
              </h1>
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed " >
                A secure and automatic SMS-based coupon management system for the generation, validation, and real-time tracking of coupons.
              </p>
              <div className='flex items-center justify-center px-3 py-1 rounded-full bg-linear-to-b from-[#157AFF] to-[#0D4999]' >
                <span className="poppins text-white text-sm text-center ">
                  Streamline Your Coupon Generation & Verification
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              // src={webDevelopmentHero}
              src={heroSmsBased}
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

      {/* Introduction */}
      <section className='container mx-auto px-6 lg:px-10 2xl:px-15 py-10 md:py-16' >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 ">
          <div className="flex items-center justify-center ">
            <Image
              alt='Introduction Image'
              src={introductionSmsBased}
              width={500}
              height={300}
              className="  object-contain  "
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start ">
              <h3 className='poppins text-3xl lg:text-4xl font-medium text-[#3e66f3] ' >Introduction</h3>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  SMS-Based Coupon Management System provides Product Managers and Coupon
                  Managers with a comprehensive solution for creating their products,
                  generating and managing reward coupons for every product directly
                  through the application. The coupon redemption requests can be sent
                  by customers via long code which can be verified automatically by the system.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed  text-justify ">
                  This platform enhances coupon verification while providing companies
                  and coupon managers with tools to generate coupon codes, manage redemption
                  requests, and share coupon redemption status with customers via SMS—all
                  through a single application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services cards with ripple effect */}
      <section className=" bg-white ">
        <div className="relative md:min-h-[600px] sm:min-h-[300px]">
          {/* Top Half - Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service_bg.src})` }}
          ></div>

          {/* Bottom Half - White Background */}
          <div className="absolute bottom-0 left-0 w-full h-[40px] "></div>

          {/* Content Wrapper */}
          <div className="relative container mx-auto px-6 lg:px-10 2xl:px-15 text-center z-10 pt-0 md:pt-14"> 

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-3">
              <div className="flex items-center text-center md:text-start justify-start">
                <h3 className='poppins text-3xl lg:text-4xl font-medium leading-snug   ' >
                  Benefits of
                  <span className='text-[#3e66f3]' >
                    {" "} SMS Based Coupon {" "}
                  </span>
                  <span className="md:block" >
                    Management System
                  </span>
                </h3>
              </div>
              <Link href="/contact-us">
                <button
                  aria-label="Contact us"
                  className="relative inline-flex items-center justify-center px-6 py-3 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-black active:scale-95 group"
                >
                  <span className="relative z-10">Contact us ➺ </span>

                  {/* Vertical expanding background */}
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-white opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
              </Link>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              speed={1500}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }} >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="pt-26 pb-2  h-auto flex ">
                  <div className="relative flex flex-col bg-white w-full rounded-2xl shadow-lg p-6 pt-16 text-center overflow-visible group transition-all duration-700 hover:bg-[#3e66f3] h-full md:h-80 lg:h-85 xl:h-86 2xl:h-80 ">


                    {/* Ripple Icon */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-40 animateServiceRipple"></span>
                        <span
                          className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-30 animateServiceRipple"
                          style={{ animationDelay: "1s" }}
                        />
                        <span
                          className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-20 animateServiceRipple"
                          style={{ animationDelay: "2s" }}
                        />

                        <div className="relative z-10 w-20 h-20 rounded-full bg-[#eff0f9] flex items-center justify-center group-hover:bg-white">
                          <span className='text-3xl text-[#3e66f3] font-semibold poppins ' >
                            {service.id}
                          </span>
                          {/* <Image src={service.icon} width={40} height={40} alt={service.title} /> */}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3 mt-5 flex-1">

                      <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                        {service.title}
                      </h2>

                      <p className="text-gray-600 text-[14px] md:text-[16px] group-hover:text-white open-sans text-justify ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* benifits */}
      {/*
      <section className='max-w-7xl mx-auto px-6 lg:px-10' >
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-start">
            <h3 className='poppins text-4xl font-medium leading-snug  ' >
              Benefits of
              <span className='text-[#3e66f3]' >
                {" "} SMS Based Coupon {" "}
              </span>
              <p>
                Management System
              </p>
            </h3>
          </div>

          <ol className="list-decimal pl-4 font-semibold  text-justify  space-y-2">
            {benifits.map((benefit, index) => (
              <li
                key={benefit.id ?? index}
                className="open-sans text-gray-600 leading-relaxed"
              >
                <span className="font-semibold text-lg text-black">
                  {benefit.title}:
                </span>{" "}
                {benefit.description}
              </li>
            ))}
          </ol>
        </div>
      </section>
      
      */}


      <section className='container mx-auto px-6 lg:px-10 2xl:px-15 py-10 md:py-16' >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-center md:text-start justify-start">
              <h3 className='poppins text-3xl lg:text-4xl font-medium leading-snug  ' >
                How
                <span className='text-[#3e66f3]' >
                  {" "} SMS Based Coupon {" "}
                </span>
                <p>
                  Management  System Works
                </p>
              </h3>
            </div>

            <ol className="list-disc pl-4 space-y-2">
              {couponWorking.map((couponWorking, index) => (
                <li
                  key={couponWorking.id ?? index}
                  className="open-sans text-gray-800  leading-relaxed"
                >
                    {couponWorking.title} 
                </li>
              ))}
            </ol>
          </div>
          <div className="flex items-center justify-center ">
            <Image
              alt='Introduction Image'
              src={processSmsBased}
              width={800}
              height={300}
              className=" rounded-xl object-contain  "
            />
          </div>
        </div>
      </section>

      {/* cta */}
      <section
        className="container mx-auto px-6 lg:px-10 2xl:px-15 py-6 md:py-12"
        // style={{
        //   backgroundImage: "url('/images/diagonalStripes.svg')",
        //   backgroundRepeat: "repeat",
        //   backgroundSize: "auto",
        // }}
         >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px] rounded-3xl md:rounded-4xl overflow-hidden justify-between">
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
    </div>
  )
}

export default page