"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import hero from "../../../public/images/hero.png";
import caseStudy1 from "../../../public/images/caseStudy1.webp";
import caseStudy2 from "../../../public/images/caseStudy2.webp";
import caseStudy3 from "../../../public/images/caseStudy3.webp";
import emailMarketing from "../../../public/icons/emailMarketing.png";
import customerSupport from "../../../public/icons/customerSupport.png";
import barGraph from "../../../public/icons/barGraph.png";
import branding from "../../../public/icons/branding.png";
import interaction from "../../../public/icons/interaction.png";
function page() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div>
      {/* RCS Hero Section */}
      <section className="bg-blue-100 max-w-7xl mx-auto px-10 py-8 rounded-b-[70px] sm:rounded-b-[100px]">
        <div className="container mx-auto py-2 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:px-0 gap-3 sm:gap-6 items-center">
            {/* Image Section */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="flex justify-center items-center w-full max-w-lg sm:max-w-xl">
                <Image
                  src={hero}
                  alt="Hero Image"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 sm:gap-6 text-center sm:text-left order-2 md:order-1">
              <h2 className="poppins text-[25px] sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-snug">
                For Rich,
                <span className="blueTextGradient"> Interactive </span> &
                Customer
                <span className="blueTextGradient"> Engagement</span>
              </h2>
              <p className="open-sans text-black text-sm md:text-base lg:text-lg">
                Proactive's Rich Communication Service gives businesses and
                marketers the opportunity to communicate with consumers in
                interactive ways.
              </p>
              <div className="flex justify-center items-center md:justify-start">
                <button className="px-3 sm:px-6 py-1 sm:py-2 bg-blue-400 font-bold text-white text-sm rounded-full hover:bg-blue-600 hover:cursor-pointer">
                  Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is RCS */}
      <section className="max-w-7xl mx-auto pt-10 ">
        <div className="flex flex-col gap-10 px-4 xl:px-0">
          {/* title */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              What is
              <span className="blueTextGradient"> RCS?</span>
            </h2>
          </div>

          {/* content */}
          <div className="flex flex-col gap-6 justify-center">
            <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
              Rich Communication Services or RCS is a next generation
              communication protocol between mobile carriers and phones to send
              and receive text messages with interactive multimedia features
              within the message itself giving users an app-like experience
              within the default message inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose 2way SMS */}
      <section className=" max-w-7xl mx-auto pt-10">
        <div className="flex flex-col gap-10 px-4 xl:px-0">
          {/* title */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              Why Choose
              <span className="blueTextGradient"> 2 Way SMS?</span>
            </h2>
          </div>

          {/* card section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-4 xl:px-0 ">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={emailMarketing}
                  alt="Email Marketing Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center">
                <h2 className="poppins text-black text-lg md:text-xl">29%</h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Consumers prefer easy conversation with businesses.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={emailMarketing}
                  alt="Email Marketing Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center">
                <h2 className="poppins text-black text-lg md:text-xl">75%</h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Increase in customer satisfaction through engagement
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={emailMarketing}
                  alt="Email Marketing Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center">
                <h2 className="poppins text-black text-lg md:text-xl">40%</h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Response rate within 3 minutes of receiving messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make Every Message */}
      <section className=" max-w-7xl mx-auto py-10 px-4 xl:px-0">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              Make Every Message
              <span className="blueTextGradient"> Count </span>
            </h2>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* High-Converting Promotions */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={customerSupport}
                  alt="customerSupport Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  High-Converting Promotions
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Deliver eye-catching, interactive promotions directly to your
                  customers, enhancing engagement and driving higher conversion
                  rates through personalised offers.
                </p>
              </div>
            </div>

            {/* Increased Brand Legitimacy */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={barGraph}
                  alt="barGraph Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Increased Brand Legitimacy
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Deliver eye-catching, interactive promotions directly to your
                  customers, enhancing engagement and driving higher conversion
                  rates through personalised offers.
                </p>
              </div>
            </div>

            {/* One-on-One Connections */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={barGraph}
                  alt="barGraph Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  One-on-One Connections
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Deliver eye-catching, interactive promotions directly to your
                  customers, enhancing engagement and driving higher conversion
                  rates through personalised offers.
                </p>
              </div>
            </div>

            {/* Automated Personalization */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={barGraph}
                  alt="barGraph Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Automated Personalization
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Deliver eye-catching, interactive promotions directly to your
                  customers, enhancing engagement and driving higher conversion
                  rates through personalised offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Support */}
      <section className="  bg-gradient-to-r from-blue-500 to-purple-800 text-white p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Title */}
          <div className="text-center md:text-left">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-white leading-relaxed">
              Unsure or{" "}
              <span className="font-bold text-white"> Confused? </span>
              <div className="">Let Us Help!</div>
            </h2>
          </div>

          {/* right content */}
          <div className="flex flex-col gap-5 ">
            <p className="open-sans text-white text-xs md:text-base leading-relaxed">
              We are eager to introduce you to how SMS marketing can benefit
              your business/organisation. Explore our SMS Marketing guides for
              general queries or connect with our support representative.
            </p>
            <div>
              <button className=" px-3 py-1 border text-white rounded-full hover:bg-blue-600 hover:cursor-pointer">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* rcs Richer Experiences Messages, Better */}
      <section className="max-w-7xl mx-auto py-10 px-4 xl:px-0">
        <div className="space-y-10">
          {/* title */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              <span className="blueTextGradient">Richer </span>
              Messages, Better
              <span className="blueTextGradient"> Experiences </span>
            </h2>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Branding */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={branding}
                  alt="branding Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Branding
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>

            {/* Interactive */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={interaction}
                  alt="interaction Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Interactive
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>

            {/* Attractive */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={interaction}
                  alt="interaction Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Attractive
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>

            {/* Automated */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={interaction}
                  alt="interaction Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Automated
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Share links to interactive polls (or share creatives via RCS),
                  ask for feedback or send birthday wishes to strengthen
                  customer relationships.
                </p>
              </div>
            </div>

            {/* Secure */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={interaction}
                  alt="interaction Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Secure
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Send abandoned cart messages, personalised product
                  recommendations, & retarget old customers to keep them coming
                  back for more.
                </p>
              </div>
            </div>

            {/* Lorem */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                {/* No icon */}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">Lorem</h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Guides & Articles (3D Carousel) */}
      <section className="max-w-7xl mx-auto pt-10 px-4 xl:px-0">
        <div className="space-y-10">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Any Doubts? Explore Our
              <span className="blueTextGradient"> Guides & Articles! </span>
            </h2>
          </div>

          {/* carousel */}
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
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
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

      {/* FAQs*/}
      <section className=" max-w-7xl mx-auto pt-10 px-4 xl:px-0">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              <span className="blueTextGradient">FAQs </span>
            </h2>
          </div>

          {/* card section */}
          <div className="flex flex-col justify-center gap-8 p-10 border border-gray-400 shadow-lg rounded-tr-4xl rounded-bl-4xl bg-blue-50">
            {/* Accordion 1 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>Do you have any social accounts?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 0 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 0 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Yes! You can find Wind UI in many social platforms, such as
                  Facebook, Discord, Reddit and more.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>What is Wind UI?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 1 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 1 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Wind UI is a UI library powered by Tailwind CSS for building
                  elegant interfaces quickly.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>How do I get started?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 2 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 2 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Start by installing Tailwind CSS and check Wind UI
                  documentation for component examples.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Here s how RCS Can Help */}
      <section className="max-w-7xl mx-auto pt-10 mb-10 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Static Left Section */}
          <div className="flex flex-col gap-4 text-center md:text-left ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              Here s how
              <span className="font-bold blueTextGradient"> RCS </span>Can Help
            </h2>
            <p className="open-sans text-gray-700 text-xs md:text-sm leading-relaxed">
              Explore case studies from multiple industries that showcase how
              SMS functionality can help address various challenges. Learn how
              SMS messaging improves operations in measurable ways.
            </p>
          </div>

          {/* Swiper Carousel Right Section */}
          <div className="relative bg-blue-50 rounded-lg p-5">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className=" text-black p-8 rounded-lg transition-all duration-700">
                  <p className="text-lg italic mb-4">
                    This platform completely transformed our communication
                    strategy. We saw immediate ROI improvements.
                  </p>
                  <h4 className="text-xl font-bold">Ritika Sharma</h4>
                  <p className="open-sans text-gray-700  text-sm">
                    Marketing Head, BrightAds
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className=" text-black p-8 rounded-lg transition-all duration-700">
                  <p className="text-lg italic mb-4">
                    The unified CPaaS system saved our team countless hours and
                    streamlined customer engagement.
                  </p>
                  <h4 className="text-xl font-bold">Arjun Mehta</h4>
                  <p className="text-sm open-sans text-gray-700">
                    Founder, ReachMax
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className=" text-black p-8 rounded-lg transition-all duration-700">
                  <p className="text-lg italic mb-4">
                    Brilliant tools, excellent support team. This is now an
                    integral part of our business ops.
                  </p>
                  <h4 className="text-xl font-bold">Nisha Patel</h4>
                  <p className="text-sm open-sans text-gray-700">
                    CTO, SkyLink Systems
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/*Transform Your Communication */}
      <section className="bg-blue-50 py-10 px-4 lg:px-10 rounded-t-[70px]  lg:rounded-t-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl mx-auto text-center md:text-left">
          {/* Left Side - Heading */}
          <div>
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Transform Your
              <span className="blueTextGradient font-bold"> Communication</span>
            </h2>
          </div>

          {/* Right Side - Paragraph and Button */}
          <div className="flex flex-col gap-5">
            <p className="open-sans text-gray-700 text-justify">
              Unlock the power of SMS messaging to boost sales, drive
              engagement, and streamline your operations. Supercharge your
              customer experience by reaching them where they are.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-[#0025A2] text-white font-semibold text-sm rounded-full hover:cursor-pointer  hover:bg-blue-700 transition duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
