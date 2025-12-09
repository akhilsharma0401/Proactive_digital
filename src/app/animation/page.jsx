"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import rocket from "../../../public/animation/rocket.json";

// images
import hero4 from "../../../public/images/hero4.jpeg";
import pro6 from "../../../public/images/Pro6.png";
import animationHero from "../../../public/images/animationHero.png";
import animationWhyChoose04 from "../../../public/images/animationWhyChoose04.jpg";
import web_03 from "../../../public/images/web_03.png";
import animationWhyChoose01 from "../../../public/images/animationWhyChoose01.jpg";
import animationWhyChoose02 from "../../../public/images/animationWhyChoose02.jpg";
import animationWhyChoose03 from "../../../public/images/animationWhyChoose03.jpg";

// component
import AnimatedImage from "./../components/AnimatedImage";
import FaqItem from "../components/FaqItem.jsx";
import AlternativeImage from "../components/AlternativeImage";



const section1 = [
  {
    title: ["Whiteboard Explainers - Simplify, Engage, Convert"],
    text: "Transform complicated concepts into engaging stories. Whiteboard explainers aid companies in communicating clearly, educating customers, and improving conversion rates.",
    img: "/images/animationSection01.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section2 = [
  {
    title: ["Animated Intros & Logos - Create Impact,Create value"],
    text: "Your first seconds define your brand. Animated intros and logos can give you a competitive and professional advantage and help ensure that you are memorable. They elevate brand recall and brand value. ",
    img: "/images/animationSection02.jpg",
    reverse: true,
    rounded: "rounded-tl-[5rem] md:rounded-tl-[10rem]", // top-left
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section3 = [
  {
    title: ["Promotional Videos - Invoke Action Through Storytelling"],
    text: "Re-imagine advertising with cinematic promotional videos that engage and connect emotionally. Your stories will promote awareness and engagement for your brand, product, or vision.",
    img: "/images/animationSection03.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section4 = [
  {
    title: ["Corporate & Business Films - Build Trust and Credibility"],
    text: "Showcase your company’s values, culture, and impact with authentic corporate film pieces. Corporate video telling helps attract clients and investors and allows your business to communicate professionalism and competencies.",
    img: "/images/animationSection04.jpg",
    reverse: true,
    rounded: "rounded-tl-[5rem] md:rounded-tl-[10rem]", // top-left
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section5 = [
  {
    title: ["Live Action Explainers - Real Faces, Real Connections "],
    text: "Authenticity is the next level. Featuring real people, and real stories allow your audience to engage and connect with your business on a more emotional level, and share experience that instills trust - Ideal for testimonials, and introductions.",
    img: "/images/animationSection05.jpg",
    reverse: false,
    rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
    imgHeight: " h-[250px] md:h-[300px] lg:h-[400px]",
  },
];

const section6 = [
  {
    title: ["Short Video Ads – Unlock Attention in Seconds"],
    text: "Short-form videos are dominating digital marketing. Our research driven short ads and reels will attract engagement and measurable outcomes through your social media and ad campaigns.",
    img: "/images/animationSection06.jpg",
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
      question: "For whom will your services work best?",
      answer:
        "Videos can benefit companies, start-ups, and entrepreneurs who want to increase visibility, articulate product offering, wish to attract customers, or enhance the narrative around a brand.",
    },
    {
      question:
        "What are the benefits of using animated videos compared to regular marketing?",
      answer:
        "Videos made with animation are engaging, easily dissectible, and extremely impressive. They can help make difficult ideas break-down easier and form an emotional connection with your target market, increasing engagement, conversions and brand value.",
    },
    {
      question: "What is the video creation process like?",
      answer:
        "Prior to scripting and storyboarding, sound and voiceover, animation or filming, editing, and finally delivering the video, we first understand the objectives for your business.",
    },
    {
      question: "Will these videos boost my sales or lead generation?",
      answer:
        "Absolutely. Each video is produced with the intention to engage your clientele, deliver your value proposition convincingly and encourage immediate action, all of which contribute to real results and measurable ROI.",
    },
    // {
    //   question: "How will your services help my business?",
    //   answer:
    //     "We help you build a stronger online presence, attract new customers, and grow your business through better websites and digital marketing.",
    // },
    // {
    //   question: "Do I need to know anything technical?",
    //   answer:
    //     "Not at all. We handle all the technical work, so you can focus on running your business.",
    // },
    // {
    //   question: "Do you provide support after the project is done?",
    //   answer:
    //     "Yes, we offer ongoing support and maintenance to ensure your website and campaigns keep running smoothly.",
    // },
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
                <span className="text-[#3e66f3]"> strategy </span> &
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
              src={animationHero}
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

      {/* why choose section */}
      {/* Benifits */}
      <section className="container mx-auto pt-10 lg:pt-12 px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex flex-col justify-center items-center gap-5  ">
            <h2 className="poppins text-[38px]  font-semibold text-center">
              Why Choose
              <span className="text-[#3e66f3]"> Animation? </span>
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            {/* card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2   items-center py-3 md:py-5 lg:py-10">
              {/* content */}
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Visually Engaging
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Video offers companies a visually engaging and
                    easy-to-digest way to present complicated products,
                    processes, or ideas. Videos and animations can get your
                    point across and get customers engaged no matter if you are
                    demonstrating software, service or product.
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={animationWhyChoose01}
                  alt="img7"
                  className=" w-90  h-40 md:w-60 md:h-30  lg:w-80 lg:h-40"
                />
              </div>
            </div>

            {/* card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Adding Experience
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Using color, motion and storytelling elements in animations
                    and video not only adds creativity, but also helps create
                    some memorability for your audience toward your brand long
                    after they have watched the animation. This helps provide
                    familiarity, trust and memorability.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={animationWhyChoose02}
                  alt="img7"
                  className=" w-90  h-40 md:w-60 md:h-30  lg:w-80 lg:h-40"
                />
              </div>
            </div>

            {/* card 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2  items-center py-3 md:py-5 lg:py-10">
              <div className=" flex flex-col gap-3 justify-center">
                <div className="flex justify-center md:justify-start">
                  <h2 className="poppins text-[28px] font-medium text-[#3e66f3] text-start">
                    Engages Audiences
                  </h2>
                </div>
                <div className="flex  justify-center md:justify-start ">
                  <p className="open-sans text-[16px] text-start">
                    Short form animations and videos make immediate impressions
                    and are perfect for audiences that have embraced the fast
                    scrolling of content. In the format you prefer for your
                    application, short form videos can introduce your brand
                    using explainer Instagram reels in 30 second.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end  ">
                <AnimatedImage
                  src={animationWhyChoose03}
                  alt="img7"
                  className=" w-90 h-40 md:w-60 md:h-30  lg:w-80 lg:h-40"
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
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section5} />
      </section>
      <section className="container mx-auto px-4 md:px-10 lg:px-10">
        <AlternativeImage sections={section6} />
      </section>
 

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
