"use client"
import React from "react";
import Image from "next/image";

import Link from "next/link";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

// icons
import { MdEngineering } from "react-icons/md";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";

// images
import webDevelopmentHero from "../../../public/images/webDevelopmentHero.png";
import introductionWorkerLoyalty from "../../../public/images/introductionWorkerLoyalty.jpg";
import rewardWorkerLoyalty from "../../../public/images/rewardWorkerLoyalty.jpg";
import introductionWorkerLoyalty02 from "../../../public/images/introductionWorkerLoyalty02.jpg";


const workerReward = [
  {
    id: 1,
    title: "The Worker Mobile App is the primary interface for workers, empowering them  to actively participate in the reward program. ",
  },
  {
    id: 2,
    title: "Workers can register and get themselves mapped under a dealer with just a few  simple steps.",
  },
  {
    id: 3,
    title: "Workers can easily scan QR codes within their app, linking their efforts to specific  products.",
  },
  {
    id: 4,
    title: "The application also simplifies the reward redemption process for workers.  Workers can easily convert their accumulated points into monetary value once  target points are achieved, which can be: Transferred to their bank account or  Used for company-approved rewards or benefits.",
  },
];

const adminWebPortal = [
  {
    id: "01",
    title: "Dealer",
    icon: FaUserTie,
    desc: "Admins can create, update, and deactivate dealer accounts effortlessly.",
  },
  {
    id: "02",
    title: "QR Code",
    icon: MdOutlineQrCodeScanner,
    desc: "Generate QR codes for products and manage them seamlessly.",
  },
  {
    id: "03",
    title: "Worker",
    icon: MdEngineering,
    desc: "Easily create and manage dealers, workers and track their performance.",
  },
];


const page = () => {
  return (
    <div className="space-y-10 mb-10">

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat  lg:px-10"
        // style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
         >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10 ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                PPSPL
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 ">
                Worker
                <span className="text-[#3e66f3]"> Loyalty Reward </span>
                Management System
              </h1>
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed " >
                An intelligent worker loyalty reward management system that rewards performance, manages incentives and enhances workforce engagement.
              </p>
              <div className="flex items-center justify-center px-3 py-1 rounded-full bg-linear-to-b from-[#157AFF] to-[#0D4999]">
                <span className="poppins text-white ">
                  Revolutionizing Worker Incentives
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={introductionWorkerLoyalty}
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="flex items-center justify-center ">
            <Image
              alt="Introduction Image"
              src={introductionWorkerLoyalty02}
              width={800}
              height={300}
              className=" rounded-xl object-contain  "
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start ">
              <h3 className="poppins text-4xl font-medium text-[#3e66f3] ">
                Introduction
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  Welcome to the Worker Reward Management Application, a
                  groundbreaking solution that transforms the way businesses
                  manage and motivate their workers and enhance dealer and
                  worker retention.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  The application serves as a tool that not only manage your
                  dealers and rewards workers for their work but also encourages
                  them to stay engaged with a brand or business over the long
                  term.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  This application encompasses an Admin Portal, Worker Mobile
                  App, QR Code Integration, and a Reward Points System, all
                  designed to streamline worker reward management.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  This application encompasses an Admin Web Portal and Worker
                  Mobile App where each workers can manage their reward points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Web Portal */}
      <section className="max-w-7xl mx-auto overflow-hidden px-6 lg:px-10 pb-30 ">
        <div className="flex flex-col gap-4 ">
          {/* title */}
          <div className="flex flex-col gap-2 items-center  justify-center text-center  ">
            <h2 className="poppins text-[#3e66f3] font-medium  text-[22px] md:text-2xl lg:text-4xl leading-relaxed">
              Admin Web Portal
            </h2>
            <p className="open-sans max-w-3xl" >
              The Admin Portal serves as the central control hub of the application. Admins  have the power to create and manage dealers, generate and manage QR codes  and oversee workers’ point redemption activities.
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 sm:gap-28 md:gap-36 lg:gap-20 px-4 sm:px-6 lg:px-8">
            {adminWebPortal.map((f) => (
              <div
                key={f.id}
                className="relative flex flex-col items-center text-center group gap-6"
              >
                {/* Arc connector */}
                <div className="absolute top-14 sm:top-16 w-68 h-68 border-[4px] sm:border-[5px] md:border-[6px] border-blue-500 rounded-full border-l-transparent border-t-transparent -rotate-45"></div>

                {/* Icon Circle */}
                <div className="relative w-22 h-22 rounded-full bg-white shadow-lg flex items-center mt-4 justify-center z-10">
                  <f.icon className="text-3xl sm:text-4xl text-blue-600" />
                </div>

                {/* content  */}
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-60">
                  {/* Number + Title pill */}
                  <div className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-md z-10">
                    <span className="flex items-center justify-center rounded-full w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10  bg-white shadow-lg text-xs sm:text-sm font-semibold ">
                      {f.id}
                    </span>
                    <span className="poppins font-semibold text-gray-800 text-sm sm:text-base">
                      {f.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="open-sans px-4 text-gray-600 text-sm md:text-base">
                    {f.desc}
                  </p>
                </div>

                {/* Ripple effect circle */}
                <div className="absolute -bottom-22 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-lg animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-start">
              <h3 className="poppins text-4xl font-medium leading-snug  ">
                <span className="text-[#3e66f3]"> Worker Reward </span>
                Mobile App
              </h3>
            </div>

            <ol className=" list-disc pl-4 space-y-2">
              {workerReward.map((workerReward, index) => (
                <li
                  key={workerReward.id ?? index}
                  className="open-sans  leading-relaxed"
                >
                  <span className=" text-base text-gray-700">
                    {workerReward.title}
                  </span>{" "}
                </li>
              ))}
            </ol>
            {/* <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed">
                  SMS-Based Coupon Management System provides Product Managers and Coupon
                  Managers with a comprehensive solution for creating their products,
                  generating and managing reward coupons for every product directly
                  through the application. The coupon redemption requests can be sent
                  by customers via long code which can be verified automatically by the system.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed">
                  This platform enhances coupon verification while providing companies
                  and coupon managers with tools to generate coupon codes, manage redemption
                  requests, and share coupon redemption status with customers via SMS—all
                  through a single application.
                </p>
              </div>
            </div> */}
          </div>
          <div className="flex items-center justify-center ">
            <Image
              alt="Introduction Image"
              src={rewardWorkerLoyalty}
              width={800}
              height={300}
              className="rounded-xl object-contain  "
            />
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
  )
}

export default page