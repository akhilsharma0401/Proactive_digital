"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import Lottie from "lottie-react";

// images
import smm1 from "../../../public/images/smm1.jpeg";
import smm2 from "../../../public/images/smm2.jpeg";
import smm3 from "../../../public/images/smm3.jpeg";
import smm4 from "../../../public/images/smm4.avif";
import smmInterLinking from "../../../public/images/smmInterLinking.jpg";
import smmInterLinking02 from "../../../public/images/smmInterLinking02.jpg";
import smmInterLinking03 from "../../../public/images/smmInterLinking03.png";
import textBlob2 from "../../../public/images/textBlob2.png";
import pro6 from "../../../public/images/Pro6.png";
import smmHero from "../../../public/images/smmHero.png";
import smmSocialMediaMarketing from "../../../public/images/smmSocialMediaMarketing.jpg";
// feature 01
import smmFeature01ContentCreative from "../../../public/images/smmFeature01ContentCreative.jpg";
import smmFeature01CopyHashtags from "../../../public/images/smmFeature01CopyHashtags.jpg";
import smmFeature01StrategySetup from "../../../public/images/smmFeature01StrategySetup.jpg";
import smmFeature01AnalyticsReporting from "../../../public/images/smmFeature01AnalyticsReporting.jpg";

// Feature 02
import smmFeature02IntegrationsAutomation from "../../../public/images/smmFeature02IntegrationsAutomation.png";
import smmFeature02intelligence from "../../../public/images/smmFeature02intelligence.png";

// lottie animation
import rocket from "../../../public/animation/rocket.json";

// components
import FaqItem from "../components/FaqItem.jsx";
import AlternativeImage from "../components/AlternativeImage";
import FeatureShowcase from "./../components/FeatureShowcase";

// icons
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

// feature 01
import smmFeature01IconStrategySetup from "../../../public/icons/smmFeature01IconStrategySetup.png";
import smmFeature01IconContentCreative from "../../../public/icons/smmFeature01IconContentCreative.png";
import smmFeature01IconCopyHastag from "../../../public/icons/smmFeature01IconCopyHastag.png";
import smmFeature01IconAnalyticsReporting from "../../../public/icons/smmFeature01IconAnalyticsReporting.png";

// Feature 02
import smmFeature02IconIntelligence from "../../../public/icons/smmFeature02IconIntelligence.png";
import smmFeature02IconCreativeInovation from "../../../public/icons/smmFeature02IconCreativeInovation.png";
import smmFeature02IconIntegrations from "../../../public/icons/smmFeature02IconIntegrations.png";

const page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  // ------------------- Sticky Card -------------------
  const StickyCard_001 = ({
    i,
    title,
    description,
    progress,
    range,
    targetScale,
    bgImage, //  added
  }) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
      <div
        className="sticky lg:top-30 2xl:top-40 top-70 md:top-65 flex justify-center items-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }} //  dynamic image
      >
        <motion.div
          className="relative flex flex-col items-start justify-start text-gray-900 origin-top w-full max-w-[600px] h-[60vh] sm:h-[60vh]
        lg:h-[550px] 2xl:h-[650px] transition-all duration-300"
          style={{
            scale,
            top: 30,
          }}
        >
          <div className=" p-2 md:p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    );
  };

  const feature1 = [
    {
      text: "Strategy & Setup",
      icon: smmFeature01IconStrategySetup,
      image: smmFeature01StrategySetup,
    },
    {
      text: "Content & Creative",
      icon: smmFeature01IconContentCreative,
      image: smmFeature01ContentCreative,
    },
    {
      text: "Copy & Hashtags",
      icon: smmFeature01IconCopyHastag,
      image: smmFeature01CopyHashtags,
    },
    {
      text: "Analytics & Reporting",
      icon: smmFeature01IconAnalyticsReporting,
      image: smmFeature01AnalyticsReporting,
    },
  ];

  const feature2 = [
    {
      text: "Intelligence & Testing",
      icon: smmFeature02IconIntelligence,
      image: smmFeature02intelligence,
    },
    {
      text: "Integrations & Automation",
      icon: smmFeature02IconIntegrations,
      image: smmFeature02IntegrationsAutomation,
    },
    {
      text: "Creative Innovations",
      icon: smmFeature02IconCreativeInovation,
      image: smm3,
    },
  ];

  // FAQ SECTION
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Social Media Marketing?",
      answer:
        "It’s the process of promoting your brand on platforms like Instagram, Facebook, and YouTube. The goal is to increase visibility, build trust, and drive more sales.",
    },
    {
      question: "Why does my business need social media marketing?",
      answer:
        "Your customers spend most of their time online, so your brand should too. It helps you build awareness, trust, and consistent leads.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most brands start seeing noticeable results within 2-6 weeks. This depends on your niche, consistency, content quality, and strategy.",
    },
    {
      question: "Which platform is best for my business?",
      answer:
        "Instagram is best for visuals, Facebook for reach, and LinkedIn for corporate clients. The right platform depends entirely on where your audience spends time.",
    },
    {
      question: "Do I need to post daily?",
      answer:
        "Daily posting isn’t necessary—quality matters more than quantity. Posting 3-5 well-planned posts per week is ideal.",
    },
    {
      question: " What type of content performs best?",
      answer:
        "Reels, carousels, testimonials, and educational content usually perform the best. They capture attention quickly and deliver value to your audience.",
    },
  ];
  // FAQs ends

  const section1 = [
    {
      title: ["Instagram The house of visuals, reels and trends"],
      text: "We generate scroll-stopping content-reels, photos, carousels and videos-that embodies your brand’s character and affirms who you are as a brand.",
      // img: "/images/sideimg.png",
      img: "/images/smmAlternative01.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
      bgColor: "bg-[#fff6d9]",
    },
  ];

  const section2 = [
    {
      title: ["Facebook The best systems for community and conversion"],
      text: "We run pages, groups, ad campaigns, and events to get to the right people at the right moment.Our mission is to convert our casual followers into loyal customers who identify with your brand's story.",
      // img: "/images/sideimg.png",
      img: "/images/smmAlternativeImage02.jpg",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
      bgColor: "bg-[#fff6d9]",
    },
  ];

  const section3 = [
    {
      title: ["LinkedIn Your professional voice online"],
      text: "Linkedin Your professional voice online.We ensure that your brand remains at the forefront of everyone’s mind by creating engaging, thought-provoking posts, articles, and effective network expansion strategies. Perfect for B2B marketing, lead generation, and brand building.",
      img: "/images/smmAlternativeImage03.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  const section4 = [
    {
      title: ["YouTube The world’s second-largest search engine."],
      text: "We handle everything from video uploads and thumbnails to SEO and playlist strategy - so your video content gets there, stays there, and does the job of converting viewers.",
      img: "/images/smmAlternativeImage04.png",
      reverse: false,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  const section5 = [
    {
      title: ["Google My Business (GMB) Your local audience matters most."],
      text: "We provide Google My Business optimization services that make your brand visible in local searches and on Google Maps, increasing more visibility, calls, and customers to your business.Our experts make sure your profile is completely optimized with correct information, compelling images, and constant updates to enhance local visibility.",
      img: "/images/smmAlternativeImage05.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  return (
    <>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat lg:px-10"
        style={{ backgroundImage: "url('/images/heroAnimateBg.svg')" }}
      >
        <div className=" container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 lg:px-10 xl:px-20 lg:py-12 py-10  ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Top Label */}
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-6 py-1 rounded-full uppercase tracking-wide">
                Digital Marketing
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl font-medium leading-tight text-gray-900 mb-3">
                A social media solution that blends
                <span className="text-[#3e66f3]"> creativity </span> with
                <span className="text-[#3e66f3]"> strategy. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                From planning to performance, we manage your social presence to
                build trust, visibility, and lasting connections.
              </p>

              {/* Button */}
              <div>
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-6  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Consult Expert</span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded">
                      {" "}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={smmHero}
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

      {/* Social Media Management */}
      <section className="container mx-auto px-6 2xl:max-w-7xl py-12 space-y-10 lg:px-10 xl:px-20 2xl:px-0 "
      >
        <div className="flex justify-center  ">
          <h2 className="poppins text-[35px]  font-semibold text-center text-[#3e66f3] ">
            Social Media Management
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10  ">
          <div className="  space-y-6 border rounded-2xl shadow-sm p-6">
            <div className="flex flex-col gap-3 ">
              <div className="">
                <span className="text-[14px]  text-white tracking-wider rounded-full bg-[#3e66f3] py-1 px-2">
                  SOCIAL COMMERCE
                </span>
              </div>
              <h2 className="text-[30px]  poppins font-medium leading-tight ">
                Convert audience into paying
                <span className="text-[#3e66f3]"> customers </span>
                with intelligent
                <span className="text-[#3e66f3]">
                  {" "}
                  social media management.{" "}
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-[16px] md:text-[18px]">
                Build genuine connections beyond likes. Our social media tools
                manage everything from creative content to real-time engagement
                so you can focus on your business while we deliver measurable
                results.
              </p>
              <div className="">
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Contact me ➺ </span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-600 ">
              <p className="open-sans text-sm text-gray-500">
                <span className="font-semibold">#1 Best Software, 2024</span>
              </p>
            </div>
          </div>

          {/* <div className="hidden  lg:flex justify-center lg:justify-end items-center w-full">
            <Image
              src={smmSocialMediaMarketing}
              alt="side Image "
              className="rounded-xl w-full h-full  object-contain"
            />
          </div> */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={smmSocialMediaMarketing}
                alt="side Image"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* scroll stack section */}
      <ReactLenis root>
        <section className="flex flex-col lg:flex-row w-full min-h-screen relative container mx-auto lg:px-10 xl:px-20">
          {/* ---------- Left Static Section ---------- */}
          <div className="w-full lg:w-1/2 h-auto lg:h-screen sticky top-20  flex flex-col justify-center text-center  order-1 lg:order-none ">
            <div className="flex flex-col justify-center   p-4 text-center lg:text-left  ">
              <h2 className="text-[30px] md:text-[38px] poppins font-medium lg:mb-4 text-[#3e66f3]  ">
                Our Creative Projects
              </h2>
              <p className="text-gray-700 text-[18px] open-sans md:text-[20px] leading-relaxed max-w-xl mx-auto 2xl:m-0   ">
                Scroll through our featured projects. Each one highlights a
                unique idea, crafted with creativity and precision.
              </p>
            </div>
          </div>

          {/* ---------- Right Scroll Section ---------- */}
          <main
            ref={container}
            className="w-full lg:w-1/2 relative flex flex-col justify-center order-2 lg:order-non lg:pb-15 pb-13 gap-y-10"
          >
            <StickyCard_001
              i={0}
              title="Plan & Schedule Smarter"
              description=" We create a content calendar that keeps your brand identity consistent and active across all platforms, from Instagram to Facebook, where converting audiences consumes content - shown at the right place, the right time, every time, and any time."
              // bgImage="/images/smmScrollStackCards01.jpg"
              bgImage="/images/smmStackCards01.jpg"
              progress={scrollYProgress}
              range={[0, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={1}
              title="Engage with Purpose"
              description=" We turn engagement and interaction into relationships. Every comment, reply, and message is handled by our team to strengthen your connection with your audience, returning and new buyers."
              bgImage="/images/smmStackCards02.png"
              progress={scrollYProgress}
              range={[0.25, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={2}
              title="Track Real Performance"
              description=" Our detailed analytics reveal the statistics that help generate better versions of products or services, which help you understand your audience and their pattern of engagement, reach, and ROI to make smarter marketing decisions."
              // bgImage="/images/smmScrollStackCards03.jpg"
              bgImage="/images/smmStackCards03.png"
              progress={scrollYProgress}
              range={[0.5, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={3}
              title="Stay Ahead of the Curve"
              description=" Trends change fast. Our team continuously monitors insights and social conversations to keep your brand fresh, relevant, and ahead of competitors."
              // bgImage="/images/smmScrollStackCards04.jpg"
              bgImage="/images/smmStackCards04.png"
              progress={scrollYProgress}
              range={[0.75, 1]}
              targetScale={1}
            />
          </main>
        </section>
      </ReactLenis>

      {/* Inter Linking */}
      <section className=" max-w-7xl mx-auto pt-10 md:pt-12 px-6 lg:px-10 xl:px-20">
        {/* <div className="  "> */}
        <div className="  grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
          {/* Left Image */}
          <div className="w-full hidden md:flex md:justify-center lg:justify-start">
            <Image
              src={smmInterLinking03}
              alt="interlinking text"
              width={500}
              height={550}
              className=" h-[300px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-cover rounded-xl"
              // className=" h-[300px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] lg:text-[35px] poppins font-medium  text-center lg:text-start">
                Boost Your Brand With
                <span className=" text-[#3e66f3] ">
                  {" "}
                  Social Media Marketing{" "}
                </span>
              </h2>
              <p className="text-gray-700 text-[14px] md:text-[16px] open-sans">
                From creative storytelling to performance analytics, we handle
                every aspect of social media marketing. Our strategies are
                designed to elevate your brand voice and strengthen audience
                connections.
              </p>
            </div>

            {/* Each link separately */}
            <div className="flex flex-col gap-2">
              {/* card1 */}
              <Link
                href="/seo"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                {/* Heading text */}
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Search Engine Optimization
                </h3>

                {/* Button */}
                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9  me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  {/* Arrow that moves right and hides */}
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    {/* <BsArrowRight /> */}
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>

                  {/* New arrow coming from left */}
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>

                  {/* Expanding background */}
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 2  */}
              <Link
                href="/social-media-ads"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Social Media Ads
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 3 */}
              <Link
                href="/content-marketing"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Content Marketing
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>

              {/* card 4 */}
              <Link
                href="/affiliate-marketing"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Affiliate Marketing
                </h3>

                <div className="relative z-10 poppins inline-flex items-center justify-center w-9 h-9 me-3 text-base open-sans rounded-full text-white bg-[#3e66f3] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 group-hover:scale-105">
                  <span className="absolute z-10 transition-all duration-500 transform group-hover:translate-x-5 group-hover:opacity-0">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute z-10 opacity-0 transition-all duration-500 transform -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100">
                    <FaArrowRightLong className="font-semibold text-lg lg:text-base" />
                  </span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-full"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section1} />
      </section>

      {/* auto play section  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Handle Your"
          highlight="Instagram Management"
          features={feature2}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternative image section 2 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section2} />
      </section>

      {/* auto play section  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Create. Post. Engage. Grow. "
          highlight="Your Facebook"
          features={feature1}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternative image section 3 */}
      <section className="container mx-auto  px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section3} />
      </section>

      {/* alternative image section 4 */}
      <section className="container mx-auto  px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section4} />
      </section> 

      {/* alternative image section 5 */}
      <section className="container mx-auto  px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section5} />
      </section>

      {/* FAQs */}
      <section className=" bg-[#eff0f9] flex justify-center items-center py-12 px-6 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white rounded-xl py-4 px-6  sm:px-6 ">
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

      {/* FAQs With right side Image */}
      {/* <section className=" bg-[#eff0f9] flex justify-center items-center py-12 px-6 lg:px-10">
        <div className="w-full container mx-auto  bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] gap-10   ">

            <div className="hidden lg:flex">
              <Image
                // src="https://thrillarkdev.imgix.net/attractions/ED1056/87f8c9b1be89eaeac8fa056fd9268e6c.jpg?auto=true,format&fit=min&crop=faces&w=720&h=1120"
                src={smm4}
                alt="Digital Marketing"
                width={490}
                height={400}
                // w-[400px] h-[300px] md:h-[550px] md:w-[400px] lg:w-[500px]
                className="lg:h-[420px] object-cover rounded-lg shadow-lg "
              />
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-xl py-4 px-6  sm:px-6">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={ faq.question }
                answer={ faq.answer }
                isOpen={openIndex === idx}
                onClick={() => toggle(idx)}
              />
            ))}
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

    </>
  );
};

export default page;
