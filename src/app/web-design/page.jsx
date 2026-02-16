"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";

// images
import webDesignHero from "../../../public/images/webDesignHero.png";
import webDesignTargetAudience from "../../../public/images/webDesignTargetAudience.png";
import webDesignWebsiteOptimization from "../../../public/images/webDesignWebsiteOptimization.png";
import webDesignWebsitesSetting from "../../../public/images/webDesignWebsitesSetting.png";
import webDesignUniqueLook from "../../../public/images/webDesignUniqueLook.png";

// lottie animation
import rocket from "../../../public/animation/rocket.json";

// component
import FaqItem from "../components/FaqItem.jsx";
import AnimatedImage from "./../components/AnimatedImage";
import AlternativeImage from "../components/AlternativeImage";

// for tri section


const section1 = [
  {
    title: ["Intentional UX Design."],
    text: "We create each experience with purpose. We align your website's structure, flow, and functionality with your brand goals. Our approach makes sure every interaction feels natural, engaging, and meaningful to your audience.",
    img: "/images/webDesign01.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]",
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]", // ✅ <-- custom height passed
  },
];

const section2 = [
  {
    title: ["Eye-catching interface."],
    text: "From wireframes to final design, we create interfaces that are clean, easy to use, and visually appealing. Every element is carefully designed to balance beauty, usability, and strategy. This approach makes sure your brand stands out with purpose.",
    img: "/images/webDesign02.jpg",
    reverse: true,
    rounded: "rounded-tl-[5rem] md:rounded-tl-[10rem]", // top-left
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section3 = [
  {
    title: ["Motion Graphics & Animation."],
    text: "We bring your brand to life through dynamic motion and storytelling.Our animations captivate attention, enhance engagement, and inspire users to take action -making your message unforgettable.",
    img: "/images/webDesign03.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
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
      question: "What is web design?",
      answer:
        "Web design is the process of planning and creating visually appealing, responsive, and user-friendly websites. It focuses on layout, colors, typography, and user experience to ensure smooth navigation and strong online brand presence.",
    },
    {
      question: "What can I expect from your web design and UI/UX services?",
      answer:
        "You can expect modern, visually appealing designs, smooth navigation, mobile responsiveness, and user-focused layouts that help strengthen your brand and support business growth.",
    },
    {
      question: "How does UI/UX design improve my website’s performance?",
      answer:
        "Good UI/UX enhances user engagement, reduces bounce rates, boosts conversions, and creates a seamless experience that encourages visitors to stay longer and take action.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Every website we create is fully responsive, ensuring it looks and functions perfectly across all devices-mobile, tablet, and desktop.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can transform your current website with updated visuals, improved structure, faster performance, and a more intuitive user experience.",
    },
    {
      question: "How long does it take to complete a website project?",
      answer:
        "Most projects are completed within 2-6 weeks depending on the complexity, features, and desired customizations.",
    },
    {
      question: "Are your websites SEO-friendly?",
      answer:
        "Yes. We follow best SEO practices-clean code, fast loading, proper structure, and optimized design-to help your website rank better on search engines.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ 
          backgroundImage: "url('/images/heroAnimateBg.svg')" 

          // light Theme Background
        // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1253%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1186.554%2c467.366C1211.006%2c465.812%2c1228.057%2c446.161%2c1240.546%2c425.082C1253.37%2c403.437%2c1265.12%2c377.6%2c1252.703%2c355.719C1240.185%2c333.659%2c1211.918%2c329.898%2c1186.554%2c329.938C1161.283%2c329.978%2c1134.613%2c334.787%2c1120.769%2c355.929C1105.722%2c378.909%2c1105.238%2c409.142%2c1119.202%2c432.796C1132.952%2c456.087%2c1159.561%2c469.082%2c1186.554%2c467.366' fill='rgba(191%2c 219%2c 254%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M143.763%2c415.281C190.823%2c413.262%2c223.102%2c373.992%2c247.188%2c333.513C272.039%2c291.748%2c293.267%2c243.462%2c271.999%2c199.764C248.471%2c151.422%2c197.508%2c119.594%2c143.763%2c121.011C92.059%2c122.375%2c51.323%2c160.73%2c26.731%2c206.232C3.475%2c249.261%2c-0.164%2c300.424%2c23.729%2c343.102C48.173%2c386.765%2c93.769%2c417.426%2c143.763%2c415.281' fill='rgba(191%2c 219%2c 254%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1409.593%2c541.374C1443.357%2c541.972%2c1476.442%2c526.831%2c1493.376%2c497.615C1510.356%2c468.32%2c1507.609%2c431.736%2c1489.853%2c402.905C1472.94%2c375.442%2c1441.846%2c361.637%2c1409.593%2c361.572C1377.213%2c361.506%2c1345.258%2c374.712%2c1328.769%2c402.579C1311.999%2c430.921%2c1314.228%2c466.277%2c1330.8%2c494.735C1347.261%2c523.003%2c1376.886%2c540.795%2c1409.593%2c541.374' fill='rgba(191%2c 219%2c 254%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1397.477%2c190.186C1420.321%2c189.198%2c1444.708%2c185.453%2c1456.731%2c166.004C1469.259%2c145.738%2c1464.936%2c120.347%2c1453.605%2c99.388C1441.593%2c77.17%2c1422.726%2c57.029%2c1397.477%2c56.404C1371.361%2c55.757%2c1349.723%2c74.062%2c1336.316%2c96.483C1322.481%2c119.62%2c1313.889%2c148.971%2c1328.624%2c171.546C1342.553%2c192.886%2c1372.017%2c191.287%2c1397.477%2c190.186' fill='rgba(191%2c 219%2c 254%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1234.146%2c66.667C1260.816%2c68.058%2c1287.882%2c56.638%2c1301.103%2c33.434C1314.215%2c10.421%2c1308.621%2c-17.64%2c1295.184%2c-40.464C1281.973%2c-62.904%2c1260.167%2c-79.31%2c1234.146%2c-80.301C1206.336%2c-81.361%2c1177.331%2c-70.13%2c1164.482%2c-45.444C1152.313%2c-22.064%2c1164.372%2c4.642%2c1178.283%2c27.029C1191.199%2c47.815%2c1209.707%2c65.392%2c1234.146%2c66.667' fill='rgba(191%2c 219%2c 254%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1253'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
        }}
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
                Smart, Bold, Websites That Move
                <span className="text-[#3e66f3]"> Brands Forward. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                Bring your brand to life with a custom website that encourages
                engagement, motivates action, and creates a meaningful impact.
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
              src={webDesignHero}
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
      {/* bg-[#f6f6f6] */}
      <section className="container mx-auto pt-10 lg:pt-12 px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col justify-center items-center gap-5  ">
            <h2 className="poppins text-[38px]  font-semibold text-center">
              Why Choose
              <span className="text-[#3e66f3]"> Web Design? </span>
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            {/* card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              {/* content */}
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Website Optimization
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Our sites are designed on the basis of user behavior and
                    intent. From the navigation path to the structure of the
                    layout, all design aspects are optimized to provide a
                    hassle-free and intuitive user experience.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={webDesignWebsiteOptimization}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Unique Look
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Differentiate with a unique visual identity. We design in a
                    way that enhances your brand personality, establishing a
                    lasting and memorable impression on all visitors.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={webDesignUniqueLook}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Target Audience
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    We combine strategy and design to ensure your website
                    resonates with the intended audience. Our SEO and content
                    organization guide relevant traffic and potential customers
                    to your business
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={webDesignTargetAudience}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Websites setting new standards.
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    From color palettes to content, we create websites that
                    reflect your brand's essence and engage your audience. Every
                    design takes inspiration from various ideas, refined to
                    pixel-perfect detail. For us, it's never just about visuals;
                    it's about building your strongest digital identity.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={webDesignWebsitesSetting}
                  alt="img7"
                  className=" h-44 md:w-60 md:h-30  lg:w-80 lg:h-40"
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


      {/* FAQs */}
      <section className="  flex justify-center items-center py-10 px-4 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#f9fafc] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We've answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white  border border-gray-100 rounded-xl py-4 px-4  sm:px-4 ">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  faq.question
                  // <h4 className="text-sm md:text-base poppins  sub-heading hover:cursor-pointer ">
                  //   {faq.question}
                  // </h4>
                }
                // question={faq.question}
                answer={
                  faq.answer
                  // <span className="text-[15px] text-gray-700 pera">
                  //   {faq.answer}
                  // </span>
                }
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
