"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import ReactLenis from "lenis/react";
import Lottie from "lottie-react";

// images
import socialMediaAdsHero from "../../../public/images/socialMediaAdsHero.png";
import socialMediaAdvertisement from "../../../public/images/socialMediaAdvertisement.jpg";
import socialMediaAdvertisement01 from "../../../public/images/socialMediaAdvertisement01.jpg";
import socialMediaAdsInterLinking from "../../../public/images/socialMediaAdsInterLinking.jpg";

// Feature 01
import socialMediaAdsFeature01ABTesting from "../../../public/images/socialMediaAdsFeature01ABTesting.jpg";
import socialMediaAdsFeature01CampaignSetup from "../../../public/images/socialMediaAdsFeature01CampaignSetup.jpg";
import socialMediaAdsFeature01AdDesign from "../../../public/images/socialMediaAdsFeature01AdDesign.jpg";
import socialMediaAdsFeature01AudienceResearch from "../../../public/images/socialMediaAdsFeature01AudienceResearch.jpg";

// Feature 02
import socialMediaAdsFeature02AudienceTargetting from "../../../public/images/socialMediaAdsFeature02AudienceTargetting.jpg";
import socialMediaAdsFeature02CreativeDesign from "../../../public/images/socialMediaAdsFeature02CreativeDesign.jpg";
import socialMediaAdsFeature02AdCopyWriting from "../../../public/images/socialMediaAdsFeature02AdCopyWriting.jpg";
import socialMediaAdsFeature02CampaignSetup from "../../../public/images/socialMediaAdsFeature02CampaignSetup.png";

// Feature 03
import socialMediaAdsFeature03AdsSetupLayout from "../../../public/images/socialMediaAdsFeature03AdsSetupLayout.png";
import socialMediaAdsFeature03GoogleAdsRanking from "../../../public/images/socialMediaAdsFeature03GoogleAdsRanking.png";
import socialMediaAdsFeature03ConversionAndImpression from "../../../public/images/socialMediaAdsFeature03ConversionAndImpression.png";
import socialMediaAdsFeature03CampaignEvaluation from "../../../public/images/socialMediaAdsFeature03CampaignEvaluation.png";

// Animation
import { slideCardsOnScrollDown, textFromLeft } from "../helpers/gsap";
import rocket from "../../../public/animation/rocket.json";

// components
import FaqItem from "../components/FaqItem.jsx";
import AlternativeImage from "../components/AlternativeImage";
import FeatureShowcase from "../components/FeatureShowcase";

// icons
import { FaArrowRightLong } from "react-icons/fa6";
// Feature 1
import socialMediaAdsFeature01IconAudienceResearch from "../../../public/icons/socialMediaAdsFeature01IconAudienceResearch.png";
import socialMediaAdsFeature01IconAdCreativeDesign from "../../../public/icons/socialMediaAdsFeature01IconAdCreativeDesign.png";
import socialMediaAdsFeature01IconCampaignSetup from "../../../public/icons/socialMediaAdsFeature01IconCampaignSetup.png";
import socialMediaAdsFeature01IconABTesting from "../../../public/icons/socialMediaAdsFeature01IconABTesting.png";
// Feature 2
import socialMediaAdsFeature02IconAudienceTargeting from "../../../public/icons/socialMediaAdsFeature02IconAudienceTargeting.png";
import socialMediaAdsFeature02IconCreativeDesign from "../../../public/icons/socialMediaAdsFeature02IconCreativeDesign.png";
import socialMediaAdsFeature02IconAdCopyRight from "../../../public/icons/socialMediaAdsFeature02IconAdCopyRight.png";
import socialMediaAdsFeature02IconCampaignSetup from "../../../public/icons/socialMediaAdsFeature02IconCampaignSetup.png";

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
          className="relative flex flex-col items-start justify-
           text-gray-900 origin-top w-full max-w-[600px] h-[60vh] sm:h-[60vh]
        lg:h-[550px] 2xl:h-[650px] transition-all duration-300"
          style={{
            scale,
            top: 30,
          }}
        >
          <div className=" p-2 md:p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3  ">{title}</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    );
  };

  // FAQ SECTION
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer complete digital marketing services including social media ads, Google Ads, creative designing, and full campaign strategy.",
    },
    {
      question: "How soon can we start?",
      answer: "This includes setting up accounts, planning creatives, and preparing initial campaigns",
    },
    {
      question: "Do you manage daily ad budgets?",
      answer: "Yes, we track your daily spend closely and make adjustments to improve performance. Our team ensures your money is used efficiently without overspending.",
    },
    {
      question: "Will I get monthly reports?",
      answer: "Yes, you’ll receive clear, easy-to-read monthly reports with key insights and results. We also explain what worked, what didn’t, and the plan for next month.",
    },
    {
      question: "Do you create content too?",
      answer: "Yes, we handle creative content, captions, ad copies, and promotional designs. Our content is tailored to your brand style and performance goals.",
    },
    {
      question: "Can you help increase leads?",
      answer: "Absolutely—our targeted ads and optimized funnels are designed to generate more quality leads. We focus on attracting the right audience that converts better.",
    },
    {
      question: "Do you provide strategy?",
      answer: "Yes, every client receives a customized marketing strategy based on goals and industry. We plan your audience, creatives, posting schedule, and ad structure.",
    },
    {
      question: "How do you charge?",
      answer: "We work on monthly retainers that depend on your marketing needs and workload. Our pricing is transparent, with no hidden or surprise charges.",
    },
  ];
  // FAQs Ends

  // 3d carousel ends here

  // AlterNative Image section
  const section1 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Google Ads"],
      text: "Find your audience right when they're looking for you. We design and optimize high-performing Google Ads campaigns which generate traffic, leads, and sales. Whether it's keyword research and ad copy creation or ongoing optimization and ROI monitoring - we do it all.",
      img: "/images/socialMediaAdsAlternativeImage01.png",
      // img: "/images/socialMediaAdsGoogleAds.jpg",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
      bgColor: "bg-[#fff6d9]",
      // bgColor: "bg-[#7fc197]",
    },
  ];
  const section2 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Facebook Ads."],
      text: "We build Facebook ads that get your brand in front of the best possible audience. Targeted research, effective creatives (images, reels, and carousels), and optimized campaigns to drive real engagement and conversions for you. A/B testing continuously ensures that your ads perform stronger each time - driving measurable growth and long-term impact.",
      img: "/images/socialMediaAdsAlternativeImage02.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
      bgColor: "bg-[#fff6d9]",
    },
  ];
  const section3 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Instagram Ads"],
      text: "We create Instagram ad campaigns that grab people's attention and deliver actual results. From eye-catching creatives and story-led reels to accurate audience targeting, we enable your brand to connect, get involved, and convert.",
      img: "/images/socialMediaAdsAlternativeImage03.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
      bgColor: "bg-[#fff6d9]",
    },
  ];

  // alternative Image ends

  // Autoplay Features
  const feature1 = [
    {
      text: "Audience Research & Target Segmentation",
      icon: socialMediaAdsFeature01IconAudienceResearch,
      icon: socialMediaAdsFeature01IconAudienceResearch,
      image: socialMediaAdsFeature01AudienceResearch,
    },
    {
      text: "Ad Design (Images, Reels & Carousels)",
      icon: socialMediaAdsFeature01IconAdCreativeDesign,
      image: socialMediaAdsFeature01AdDesign,
    },
    {
      text: "Campaign Setup & Optimization",
      icon: socialMediaAdsFeature01IconCampaignSetup,
      image: socialMediaAdsFeature01CampaignSetup,
    },
    {
      text: "A/B Testing for Better Results",
      icon: socialMediaAdsFeature01IconABTesting,
      image: socialMediaAdsFeature01ABTesting,
    },
  ];

  const feature2 = [
    {
      text: "Audience Targeting",
      icon: socialMediaAdsFeature02IconAudienceTargeting,
      image: socialMediaAdsFeature02AudienceTargetting,
    },
    {
      text: "Creative Design",
      icon: socialMediaAdsFeature02IconCreativeDesign,
      image: socialMediaAdsFeature02CreativeDesign,
    },
    {
      text: "Ad Copywriting",
      icon: socialMediaAdsFeature02IconAdCopyRight,
      image: socialMediaAdsFeature02AdCopyWriting,
    },
    {
      text: "Campaign Setup & Optimization",
      icon: socialMediaAdsFeature02IconCampaignSetup,
      image: socialMediaAdsFeature02CampaignSetup,
    },
  ];

  const feature3 = [
    {
      text: "Ads setup and layout",
      icon: socialMediaAdsFeature02IconAudienceTargeting,
      image: socialMediaAdsFeature03AdsSetupLayout,
    },
    {
      text: "Google ads ranking",
      icon: socialMediaAdsFeature02IconCreativeDesign,
      image: socialMediaAdsFeature03GoogleAdsRanking,
    },
    {
      text: "Conversion and Impression",
      icon: socialMediaAdsFeature02IconAdCopyRight,
      image: socialMediaAdsFeature03ConversionAndImpression,
    },
    {
      text: "Campaign evaluation",
      icon: socialMediaAdsFeature02IconCampaignSetup,
      image: socialMediaAdsFeature03CampaignEvaluation,
    },
  ];
  // Autoplay Features ends

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
                Accelerate
                <span className="text-[#3e66f3] "> Growth </span>& Maximize{" "}
                <span className="text-[#3e66f3] "> Reach </span>
                With <span className="text-[#3e66f3] ">Google Ads.</span>{" "}
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                Make your advertising budget work smarter.We create and manage
                Google Ads campaigns that attract the right audience and
                increase clicks.
              </p>

              {/* Button */}
              <div>
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center py-2 px-6  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
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
              src={socialMediaAdsHero}
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
      <section className="container mx-auto px-6 2xl:max-w-7xl py-12 space-y-10 lg:px-10 xl:px-20 2xl:px-0 ">
        <div className="flex justify-center  ">
          <h2 className="poppins text-[35px]  font-semibold text-center text-[#3e66f3] ">
            Social Media Advertisement
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 2xl:gap-0">
          <div className="  space-y-6 border rounded-2xl shadow-sm p-6">
            <div className="flex flex-col gap-3 ">
              <div className="">
                <span className="text-[14px]  text-white tracking-wider rounded-full bg-[#3e66f3] py-1 px-2">
                  SOCIAL MEDIA ADS
                </span>
              </div>
              <h2 className="text-[30px] poppins font-medium leading-tight ">
                From Clicks to Clients - Drive
                <span className="text-[#3e66f3]"> Real Results </span>
                with Powerful
                <span className="text-[#3e66f3]">
                  {" "}
                  Social Media Advertising.{" "}
                </span>
              </h2>

              {/* <p className="text-gray-600 leading-relaxed text-[16px] md:text-[18px]">
                Engage your target audience and turn them into loyal customers
                with our data-driven social media advertising.
              </p> */}
              <p className="text-gray-600 leading-relaxed text-[16px] md:text-[18px]">
                Build authentic engagement that goes beyond vanity metrics. Our
                social media solutions handle everything from creative strategy
                to real-time optimization so you can grow your business while we
                deliver consistent, measurable outcomes.
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

          <div className="hidden lg:flex justify-center lg:justify-end items-center w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={socialMediaAdvertisement01}
                alt="side Image"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inter Linking */}
      <section className=" container 2xl:max-w-7xl mx-auto pt-10 md:pt-12 px-6 lg:px-10 xl:px-20 2xl:px-0">
        {/* <div className="  "> */}
        <div className="  grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
          {/* Left Image */}
          <div className="w-full hidden md:flex md:justify-center lg:justify-start">
            <Image
              src={socialMediaAdsInterLinking}
              alt="interlinking text"
              width={500}
              height={550}
              className=" h-[300px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] lg:text-[35px] poppins font-medium  text-center lg:text-start">
                Boost Your Brand With
                <span className=" text-[#3e66f3] "> Social Media Ads </span>
              </h2>
              <p className="text-gray-700 text-[14px] md:text-[16px] open-sans">
                Build awareness, attract customers, and boost sales with paid
                social campaigns. Our team combines creative storytelling with
                performance strategy to maximise ROI.
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
                href="/smm"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Social Media Marketing
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

      {/* scroll stack section */}
      <ReactLenis root>
        <section className="flex flex-col lg:flex-row w-full min-h-screen relative container mx-auto lg:px-10 xl:px-20">
          {/* ---------- Left Static Section ---------- */}
          <div className="w-full lg:w-1/2 h-auto lg:h-screen sticky top-20  flex flex-col justify-center text-center  order-1 lg:order-none ">
            <div className="flex flex-col justify-center   p-6 text-center lg:text-left ">
              <h2 className="text-[35px] md:text-[38px] poppins font-medium lg:mb-4 text-[#3e66f3] ">
                Why Choose Google Ads?
              </h2>
              <p className="text-gray-700 text-[18px] open-sans md:text-[20px] leading-relaxed max-w-xl mx-auto 2xl:mx-0 ">
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
              title="Boost Your Brand's Visibility"
              description="Expand your reach and increase awareness with the help of our expert team of Google Ads. We help your product service of your business show up and attract in front of the right audience across Google Search, Display, and YouTube networks - elevating visibility and brand engagement and growth."
              bgImage="/images/socialMediaAdsScrollStackCards01.jpg"
              progress={scrollYProgress}
              range={[0, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={1}
              title="Drive More Leads and Sales"
              description=" Our team analyse reports and with the help of those reports ,data-driven advertising strategies are created and published  to attract high-quality leads which result in  turning them into loyal customers. We optimize each and every campaign to maximize your return on investment (ROI),ROAS(Return on ads spent) and ensure tangible business growth."
              bgImage="/images/socialMediaAdsScrollStackCards02.jpg"
              progress={scrollYProgress}
              range={[0.25, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={2}
              title="Connect with the Right Audience"
              description="We help your business engage with your ideal customers,using advanced Google targeting options - from keywords research to interests and location ,demographics. We ensure your business becomes a brand and ads show up where they count the most, reducing hassle and enhancing performance."
              bgImage="/images/socialMediaAdsScrollStackCards03.jpg"
              progress={scrollYProgress}
              range={[0.5, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={3}
              title="Increased Revenue Generation"
              description="  Paid search management approaches are meant to deliver targeted traffic, campaign optimize, and boost conversions, leading to greater revenue generation for your company."
              bgImage="/images/socialMediaAdsScrollStackCards04.jpg"
              progress={scrollYProgress}
              range={[0.75, 1]}
              targetScale={1}
            />
          </main>
        </section>
      </ReactLenis>

      {/* Alternate Image Google Ads */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section1} />
      </section>

      {/* auto play section  1 */}
      {/* Handle Your Google Ads */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Create. Post. Engage. Grow. "
          highlight="Your Goggle Ads"
          features={feature3}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* 3D Carousel scroll cards */}
      {/* <section className="max-w-7xl mx-auto py-12 px-4 xl:px-20">
        <div className="space-y-10">
          <div className="flex justify-center  ">
            <h2 className="poppins text-[35px]  font-semibold text-center text-[#3e66f3] ">
              Our
              <span className="heroTextGredient"> Google Ads </span>
              Services:
            </h2>
          </div>

          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="coverflow"
            grabCursor
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            // pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            className="w-full"
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col gap-6 items-center border border-gray-200 bg-blue-50 rounded-xl shadow-md overflow-hidden p-6 md:p-6">
                  
                  <div className="overflow-hidden max-h-[225px] w-full rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col gap-3 text-center">
                    <h3 className="poppins text-[#3e66f3] font-medium text-lg md:text-md">
                      {item.title}
                    </h3>
                    <p className="open-sans text-gray-700 leading-relaxed text-sm text-justify">
                      {item.desc}
                    </p>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}


      {/* alternate Image Facebook Ads. */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section2} />
      </section>
      
      {/* auto play section  1 */}
      {/* Handle Your Facebook Ads */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Create. Post. Engage. Grow. "
          highlight="Your Facebook ads"
          features={feature1}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternate Image Instagram Ads*/}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section3} />
      </section>
      
      {/* auto play section  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Create. Post. Engage. Grow. "
          highlight="Your Instagram Management"
          features={feature2}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
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
