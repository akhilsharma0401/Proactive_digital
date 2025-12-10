"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

// images
import brandingWhyChoose01 from "../../../public/images/brandingWhyChoose01.png";
import brandingWhyChoose02 from "../../../public/images/brandingWhyChoose02.png";
import brandingWhyChoose03 from "../../../public/images/brandingWhyChoose03.png";
import brandingHero from "../../../public/images/brandingHero.png";

// components
import FaqItem from "../components/FaqItem.jsx";
import AnimatedImage from "./../components/AnimatedImage";
import AlternativeImage from "../components/AlternativeImage";


const section1 = [
  {
    title: ["Brochure and Flyer Design."],
    text: "We design brochures and flyers that capture attention, communicate your message clearly, and leave a lasting impression. Our creative approach focuses on combining clean layouts, compelling visuals, and persuasive copy to showcase your products, services, or offers in the best light.",
    img: "/images/brandingBrochure.png",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]",
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]", //  <-- custom height passed
  },
];

const section2 = [
  {
    title: ["Custom-Branded Videos."],
    text: " We produce explainer videos tailored to your brand that convey your brand with clarity and help audience connect emotionally to brand.Each video is created using your brand's colours, fonts, and  style, making it easily recognisable and compliant .Marketing a product online our custom branded video caters to all your needs and requirements.",
    img: "/images/brandingCustomBrandedVideo.png",
    reverse: true,
    rounded: "rounded-tl-[5rem] md:rounded-tl-[10rem]", // top-left
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section3 = [
  {
    title: ["Logo  Design."],
    text: "Today's brands require a modern logo system that works across devices and formats; from large format sign age to web icons.We design a primary logo, secondary mark, and responsive logo variations that are optimised for digital and print. Each logo remains a consistent representation of the brand.",
    img: "/images/brandingLogo.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section4 = [
  {
    title: ["Intro & Outro Video Design"],
    text: "Every video is an opportunity to strengthen your brand identity. We design custom intro and outro animations that perfectly reflect your logo, colors and motion style. Ideal for social media, webinars and ads, these short yet impactful motion elements add a consistent professional touch to every piece of content and ensure your brand stands out across all platforms.",
    img: "/images/brandingIntroOutro.png",
    reverse: true,
    rounded: "rounded-tl-[5rem] md:rounded-tl-[10rem]", // top-left
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What kinds of websites do you create?",
      answer:
        "We create a variety of websites including corporate sites, e-commerce sites, portfolios, blogs, booking systems, and customized web applications that meet business needs.",
    },
    {
      question: "How long does it take to create a website?",
      answer:
        "The duration of a project depends on complexity. A simple business website may take between 2–4 weeks, whereas a larger online store or custom build could take months.",
    },
    {
      question: "Will my website be mobile responsive?",
      answer:
        "Yes. We build fully responsive web designs that will seamlessly adapt to desktops, tablets, and smartphones to ensure a great user experience on all devices.",
    },
    {
      question: "Can you redesign or upgrade an existing website?",
      answer:
        "Of course. We offer website redesigns that update design, performance, and security, and offer SEO-without changing your brand identity.",
    },
    {
      question: "Do you offer e-commerce development?",
      answer:
        "Yes. We develop fully scalable e-commerce applications with product management, secure payments, inventory management and customer engagement functionality.",
    },
    {
      question: "How will you ensure my website is safe?",
      answer:
        "We utilize SSL, firewalls, regular updates, and security best practices. Additionally, we can offer continued monitoring and support for safety.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
      >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-18 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                WEB Design
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                A Branding solution that combines
                <span className="text-[#3e66f3]"> strategy </span>&
                <span className="text-[#3e66f3]"> creativity. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                From strategy to design, we create identities that inspire
                trust, recognition, and long-term success. Brands that stand out
                and grow.
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
              src={brandingHero}
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

      {/* Benifits */}
      <section className="container mx-auto pt-10 lg:pt-12 px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col justify-center items-center gap-5  ">
            <h2 className="poppins text-[38px]  font-semibold text-center">
              Why Choose
              <span className="text-[#3e66f3]"> Branding? </span>
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            {/* card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              {/* content */}
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Develop a Compelling Brand Identity.
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Carry out design work for logos, colour palettes, and
                    typography systems to help get your brand's DNA established
                    with a consistent visual layering across platforms.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={brandingWhyChoose01}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40 rounded-lg "
                />
              </div>
            </div>

            {/* card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Enhance Your Brand Recall & Recognition.
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Consistent visual layering positions you to improve brand
                    recall, recognition, and visibility by employing brand
                    guidelines, and user experience-based design systems.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={brandingWhyChoose02}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40 rounded-lg "
                />
              </div>
            </div>

            {/* card 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Elevate Your Conversion Rate and User Retention.
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Facilitate measurable outcomes by creating a visual system
                    for a landing page, ad creative, and other key visuals that
                    trails with trust, click-throughs and user retention.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={brandingWhyChoose03}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40 rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section1} />
      </section>
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section2} />
      </section>
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section3} />
      </section>
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section4} />
      </section>

      {/* FAQ Section */}
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
    </>
  );
};

export default page;
