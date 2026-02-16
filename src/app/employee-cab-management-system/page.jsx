"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

import webDevelopmentHero from "../../../public/images/webDevelopmentHero.png";
import introductionEmployeeCab from "../../../public/images/introductionEmployeeCab.jpg";
import heroEmployeeCab from "../../../public/images/heroEmployeeCab.png";

import { ShieldCheck, DollarSign, Clock, FileText, Route } from "lucide-react";
import { IoEyeOutline } from "react-icons/io5";

const Benefits = [
  {
    id: 1,
    icon: ShieldCheck,
    text: "Enhances employee privacy and security by enabling safe communication with assigned drivers through a missed call system, without sharing personal contact details.",

  },
  {
    id: 2,
    icon: DollarSign,
    text: "Improves transportation resource planning by optimizing fleet utilization, reducing operational costs, and ensuring efficient allocation of vehicles and drivers.",
  },
  {
    id: 3,
    icon: Clock,
    text: "Helps employees reach their workplace on time by minimizing delays, reducing absenteeism, and improving overall workforce productivity and efficiency.",
  },
  {
    id: 4,
    icon: FileText,
    text: "Ensures compliance with transportation regulations by managing vehicle records, driver documents, and organizational policies within a single platform.",
  },
];
// const driverBenefits = [
//   {
//     id: 1,
//     title: "abc",
//     icon: Route,
//     desc: "Assists drivers in optimizing their routes and schedules by reducing idle hours and delays, ensuring a smooth and consistent flow of daily trips.",
//   },
//   {
//     id: 2,
//     title: "abc",
//     icon: IoEyeOutline,
//     desc: "Provides improved visibility into assigned companies, trip routes, and assignments, enabling accurate tracking of employee pick-up and drop-off activities.",
//   },
//   {
//     id: 3,
//     title: "abc",
//     icon: ShieldCheck,
//     desc: "Enhances driver privacy and security by enabling safe communication through a virtual number system, without sharing personal contact details.",
//   },
// ];

const driverBenefits = [
  {
    id: 1,
    title: "Route",
    icon: Route,
    desc: "Drivers can optimize routes and schedules to reduce delays and idle time.",
  },
  {
    id: 2,
    title: "Visibility",
    icon: IoEyeOutline,
    desc: "Drivers can track trips, routes, and assignments with clear visibility.",
  },
  {
    id: 3,
    title: "Privacy",
    icon: ShieldCheck,
    desc: "Drivers can communicate securely using virtual numbers for privacy.",
  },
];



const page = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat  lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }} >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                PPSPL
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900">

                <span className="text-[#3e66f3]"> Employee Cab   </span>
                Management System
              </h1>
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed " >
                An intelligent employee cab management solution preparing and managing transport schedule, route optimization & real-time fleet tracking.
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
              src={heroEmployeeCab}
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="flex items-center justify-center ">
            <Image
              alt="Introduction Image"
              src={introductionEmployeeCab}
              width={800}
              height={300}
              className="rounded-xl object-contain  "
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
                  The Employee-Cab Manager Facility Application is a cutting-edge software solution that streamlines and optimizes transportation logistics for an organization's employees while keeping focus on protecting the personal information of your employees from cab agencies and drivers.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  Now organizations don’t need to share contact details of their employees with the drivers and vice versa as they can contact each other through virtual number.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3e66f3] shrink-0 mt-2"></span>
                <p className="open-sans text-md leading-relaxed text-justify ">
                  This revolutionary tool also acts as a centralized platform for organizations to conveniently manage their employees' transportation needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Application For Driver*/}
      <section className="max-w-7xl mx-auto overflow-hidden px-6 lg:px-10 pb-28 pt-5">
        <div className="flex flex-col gap-2  ">
          <div className="flex justify-center  ">
            <div className="flex flex-col items-center bg-linear-to-b from-[#157AFF] to-[#0D4999] rounded-xl px-4 py-2 ">
              <h3 className="poppins font-medium text-3xl text-white leading-relaxed " >
                Benefits of Application For Driver
              </h3>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 sm:gap-28 md:gap-36 lg:gap-20 px-4 sm:px-6 lg:px-8">
            {driverBenefits.map((f) => (
              <div
                key={f.id}
                className="relative flex flex-col items-center text-center group gap-6"
              >
                {/* Arc connector */}
                <div className="absolute top-14 sm:top-16 w-68 h-68 border-[4px] sm:border-[5px] md:border-[6px] border-blue-500 rounded-full border-l-transparent border-t-transparent -rotate-45"></div>

                {/* Icon Circle */}
                <div className="relative w-22 h-22 rounded-full bg-white shadow-lg flex items-center mt-4 justify-center z-10">
                  <f.icon size={44} className="text-[#3e66f3]" />
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

      {/* Benefits */}
      {/* <section className="max-w-7xl mx-auto  bg-white  px-6 lg:px-10">
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-center ">
            <div className="flex flex-col items-center bg-linear-to-b from-[#157AFF] to-[#0D4999] rounded-xl px-4 py-2 ">
              <h3 className="poppins font-medium text-3xl text-white leading-relaxed " >
                Benefits of Application
              </h3>
              <h3 className="poppins font-medium text-3xl text-white " >
                For Organization
              </h3>
            </div>
          </div>
          <div className="max-w-5xl mx-auto space-y-10  ">
            <div className="flex flex-col gap-8">
              {Benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="relative flex items-center">
             
                    <div className="hidden md:flex items-center justify-center absolute -left-4 z-10 w-22 h-22 rounded-full border-2  border-blue-600 bg-gradient-to-br from-gray-200 to-white ">
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>

                    <div className="w-full border border-[#cc2708] rounded-xl md:ml-8  px-3 md:pl-10 py-2">
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-0 px-6 lg:px-12 overflow-hidden">

        {/* Background Blur Shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>


        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e66f3] ">
              Benefits for Your Organization
            </h2>

            <p className="mt-4 text-blue-600 text-lg">
              Power your business with secure, scalable, and smart digital solutions.
            </p>

          </div>


          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {Benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group bg-[#E0ECFF] backdrop-blur-md border border-black/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:shadow-2xl transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3e66f3]  transition">
                    <Icon className="w-7 h-7 text-indigo-700 group-hover:text-white " />
                  </div>

                  {/* Text */}
                  <p className="text-black leading-relaxed text-base md:text-lg">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>





      {/* Benefits For Drivers */}
      {/* <section className="max-w-7xl mx-auto  bg-white  px-6 lg:px-10">
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-center ">
            <div className="flex flex-col items-center bg-linear-to-b from-[#157AFF] to-[#0D4999] rounded-xl px-4 py-2 ">
              <h3 className="poppins font-medium text-3xl text-white leading-relaxed " >
                Benefits of Application
              </h3>
              <h3 className="poppins font-medium text-3xl text-white " >
                For Driver
              </h3>
            </div>
          </div>
          <div className="max-w-5xl mx-auto space-y-10  ">
            <div className="flex flex-col gap-8">
              {driverBenefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="relative flex items-center">
                     
                    <div className="hidden md:flex items-center justify-center absolute -left-4 z-10 w-22 h-22 rounded-full border-2  border-blue-600 bg-gradient-to-br from-gray-200 to-white ">
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>

                     
                    <div className="w-full border border-[#cc2708] rounded-xl md:ml-8  px-3 md:pl-10 py-2">
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 overflow-hidden bg-[#e0ecff]  rounded-3xl">

        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-50 rounded-full"></div>


        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-white">

            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-linear-to-b from-[#157AFF] to-[#0D4999] rounded-full text-white">
              Smart Communication
            </span>

            <h2 className="poppins font-semibold text-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-[#3e66f3]" > Missed Call </span>

              {" "} & {" "}
              <span className="text-[#3e66f3]" > Long Code  </span>
              {" "} System {" "}
            </h2>

            <p className="mt-5 text-gray-600 text-lg max-w-lg">
              A secure and efficient way for employees to connect with drivers
              without sharing personal contact details.
            </p>

          </div>


          {/* Right Feature Cards */}
          <div className="space-y-6">


            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl flex gap-4 items-start">

              {/* <div className="w-20 h-15 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                📞
              </div> */}

              <p className="open-sans text-gray-700 leading-relaxed text-base">
                The employee will be provided with a virtual number (92145XXXXX) and he/she can connect with the driver either by giving a missed call on this number or just by sending a predefined SMS on this number.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl flex gap-4 items-start">

              {/* <div className="20 h-15 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                🔐
              </div> */}

              <p className="open-sans text-gray-700 leading-relaxed text-base">
                The employee contact details won’t be shared with the driver and will be directly connected with the employee using a click-to-call facility via a virtual number.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* Missed Called for Employee */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-6  ">
          <div className="flex justify-center  ">
            <div className="flex flex-col items-center bg-linear-to-b from-[#157AFF] to-[#0D4999] rounded-xl px-4 py-2 ">
              <h3 className="poppins font-medium text-3xl text-white leading-relaxed " >
                Missed Call/Long Code Number
              </h3>
              <h3 className="poppins font-medium text-3xl text-white " >
                For Employee
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex items-center justify-center rounded-xl p-4 bg-blue-50">
              <p className="open-sans " >
                The employee will be provided with a virtual number (92145XXXXX) and he/she can connect with the driver either by giving a missed call on this number or just by sending a predefined SMS on this number.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl p-4 bg-blue-50">
              <p className="open-sans " >
                The employee contact details won’t be shared with the driver and will be directly connected with the employee using a click-to-call facility via a virtual number.
              </p>
            </div>
          </div>
        </div>
      </section> */}







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