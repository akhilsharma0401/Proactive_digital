"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";

// lottie animation
import rocket from "../../../public/animation/rocket.json";

// components
import FaqItem from "../components/FaqItem.jsx";
import AlternativeImage from "../components/AlternativeImage";
import FeatureShowcase from "../components/FeatureShowcase";

// images
import seoHero from "../../../public/images/seoHero.png";
import seoInterLinking from "../../../public/images/seoInterLinking.jpg"; 

// feature ShowCase 01
import seoFeature01EAT from "../../../public/images/seoFeature01EAT.jpg";
import seoFeature01PageSpeed from "../../../public/images/seoFeature01PageSpeed.jpg";
import seoFeature01TitleTag from "../../../public/images/seoFeature01TitleTag.jpg";
import seoFeature02KeyWord from "../../../public/images/seoFeature02KeyWord.jpg";
import seoFeature01MetaDescription from "../../../public/images/seoFeature01MetaDescription.jpg";


// feature ShowCase 02
import seoFeature02Http from "../../../public/images/seoFeature02Http.jpg";
import seoFeature02WebSiteCrawling from "../../../public/images/seoFeature02WebSiteCrawling.jpg";
import seoFeature02XMLSiteMap from "../../../public/images/seoFeature02XMLSiteMap.jpg";
import seoFeature02SiteSpeed from "../../../public/images/seoFeature02SiteSpeed.jpg";

// feacture ShowCase 03
import seoFeature03TrackingAnalytic from "../../../public/images/seoFeature03TrackingAnalytic.jpg";
import seoFeature03InternalLinking from "../../../public/images/seoFeature03InternalLinking.jpg";
import seoFeature03UpdatesPerformance from "../../../public/images/seoFeature03UpdatesPerformance.jpg";

// icons
import { FaArrowRightLong } from "react-icons/fa6";
// feature 01
import seoFeature01IconEAT from "../../../public/icons/seoFeature01IconEAT.png";
import seoFeature01IconTitleTag from "../../../public/icons/seoFeature01IconTitleTag.png";
import seoFeature01IconMetaDescription from "../../../public/icons/seoFeature01IconMetaDescription.png";
import seoFeature01IconKeyWords from "../../../public/icons/seoFeature01IconKeyWords.png";
import seoFeature01IconPageSpeed from "../../../public/icons/seoFeature01IconPageSpeed.png";

// feature 02
import seoFeature02IconWebsiteCrawling from "../../../public/icons/seoFeature02IconWebsiteCrawling.png";
import seoFeature02IconSiteSpeed from "../../../public/icons/seoFeature02IconSiteSpeed.png";
import seoFeature02IconHttps from "../../../public/icons/seoFeature02IconHttps.png";
import seoFeature02IconXMLSitemap from "../../../public/icons/seoFeature02IconXMLSitemap.png";

// feature 03
import seoFeature03IconUpdatesPerformance from "../../../public/icons/seoFeature03IconUpdatesPerformance.png";
import seoFeature03IconInternalLinking from "../../../public/icons/seoFeature03IconInternalLinking.png";
import seoFeature03IconTrackingAnalysis from "../../../public/icons/seoFeature03IconTrackingAnalysis.png";
import seoFeature03IconKeywordsResearch from "../../../public/icons/seoFeature03IconKeywordsResearch.png";

// ------------------- Sticky Card -------------------
const StickyCard_001 = ({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
  bgImage,   //  added
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky lg:top-30 2xl:top-40 top-70 md:top-65 flex justify-center items-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImage}')` }}   //  dynamic image
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

// ------------------- Main Component -------------------
const page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    //  offset: ["start", "end"],
  });

  // alternative image section 01
  const section1 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["On-Page SEO"],
      text: "Boost your website’s visibility with On Page Seo. Our on-page SEO service focuses on optimizing your web pages for both users and search engines. From keyword search according to industry and trend, meta tags, and headings, meta description to internal linking and content structuring - everything is designed to help your site rank higher, improve loading time, and convert faster and  better.This results in better search rankings and stronger brand visibility.",
      img: "/images/seoAlternativeImage01.png",
      reverse: false,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  // alternative image section 02
  const section2 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Technical SEO"],
      text: "Build a strong foundation with Technical Seo for long-term growth.We audit your site and fix every technical aspect that affects your website’s performance and causes loss to business and delayes desired performance - from page speed, mobile responsiveness, and SSL security to crawlability and structured data. A technically sound website ensures faster indexing of the website, improved and smooth user experience, and consistent organic traffic growth.This results in a high-performing, Google-friendly website.",
      img: "/images/seoAlternativeImage02.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  // alternative image section 03
  const section3 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Content SEO"],
      text: "Turn your website into your most powerful growth engine.We create SEO-optimized blogs, landing pages, and web content that educate, engage, and convert customers about the services or products. Each content  is written in a structured way around your target keywords, answering your audience’s real questions and positioning your brand as an expert and adds value to business . This result in Higher rankings, longer user engagement, and stronger brand trust.",
      img: "/images/seoAlternativeImage03.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  // alternative image section 04
  const section4 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Local SEO"],
      text: "Get your business discovered  near you , from your  store, clinic, to service business - our Local SEO solutions make sure you show up in which your business is located and also beyond: local searches and Google Maps. We optimize your Google Business Profile, b, and manage customer reviews to drive sales or services  and phone calls.",
      img: "/images/seoAlternativeImage04.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  // alternative image section 05
  const section5 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["Setup & Optimization"],
      text: "SEO helps plan smarter. Grow faster. We build custom SEO strategies that align with your business goals. Our team of experts conducts competitor analysis, keyword mapping, and growth forecasting. We guide your business towards sustainable visibility and long-term results.This results in clear direction, measurable milestones, and confident decision-making. This helps businesses achieve a good ranking on the Google Search engine as compared to its competitors.",
      img: "/images/seoAlternativeImage05.png",
      reverse: false,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];

  // alternative image section 06
  const section6 = [
    {
      // title: ["Thoughtful UX", "Design."],
      title: ["AI & Voice Search Optimization"],
      text: "With AI in command, stay ahead in the era of smart search. With the rise in searching through voice assistants and AI-driven tools, we optimise your website and offer assistance for conversational queries and structured snippets. Our team ensures your business is ready for how people actually conceive search today. This results in Early adoption of future-ready SEO content and keeps you competitive in 2025 and beyond.",
      img: "/images/seoAlternativeImage06.png",
      reverse: true,
      // rounded: "rounded-tr-[5rem] md:rounded-tr-[10rem]", // top-right
      imgHeight: " h-[250px] md:h-[350px] lg:h-[400px]",
      objectFit: "object-contain",
    },
  ];


  // FAQ's SECTION
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  const faqs = [
    {
      question: "What is SEO?",
      answer: "SEO (Search Engine Optimization) helps your website rank higher on Google. It improves visibility, traffic, and brand credibility organically.",
    },
    {
      question: "Why does my business need SEO?",
      answer: "Most customers search online before buying anything. SEO ensures they find your business first-not your competitors.",
    },
    {
      question: "How long does SEO take to show results?",
      answer: "Typically 3-6 months for noticeable improvements. It depends on your industry, competition, and website quality.",
    },
    {
      question: "What are keywords?",
      answer: "Keywords are the terms people type into Google to find services or products. Using the right keywords helps your website appear in search results.",
    },
    {
      question: "What is On-Page SEO?",
      answer: "It includes optimizing website content, titles, meta tags, and internal links. These improvements help Google understand and rank your website better.",
    },
    {
      question: "What is Off-Page SEO?",
      answer: "Off-page SEO mainly includes backlinks and external signals that build authority. It shows Google that your website is trusted and valuable.",
    },
  ];

  // FAQ's Ends

 
  const feature1 = [
    { text: "E-A-T", icon: seoFeature01IconEAT, image: seoFeature01EAT },
    { text: "Title Tag", icon: seoFeature01IconTitleTag, image: seoFeature01TitleTag },
    { text: "Meta Description", icon: seoFeature01IconMetaDescription, image: seoFeature01MetaDescription },
    { text: "Keywords", icon: seoFeature01IconKeyWords, image: seoFeature02KeyWord },
    { text: "Page speed", icon: seoFeature01IconPageSpeed, image: seoFeature01PageSpeed },
  ];
  const feature2 = [
    { text: "Website Crawling & Indexing", icon: seoFeature02IconWebsiteCrawling, image: seoFeature02WebSiteCrawling },
    { text: "Site Speed Optimization", icon: seoFeature02IconSiteSpeed, image: seoFeature02SiteSpeed },
    { text: "HTTPS & Security", icon: seoFeature02IconHttps, image: seoFeature02Http },
    { text: "XML Sitemap Optimization", icon: seoFeature02IconXMLSitemap, image: seoFeature02XMLSiteMap },
  ];
  const feature3 = [
    { text: "Updates Performance ", icon: seoFeature03IconUpdatesPerformance, image: seoFeature03UpdatesPerformance },
    { text: "Tracking & Analytics", icon: seoFeature03IconTrackingAnalysis, image: seoFeature03TrackingAnalytic },
    { text: "Keyword Research", icon: seoFeature03IconKeywordsResearch, image: seoFeature02KeyWord },
    { text: "Internal Linking", icon: seoFeature03IconInternalLinking, image: seoFeature03InternalLinking },
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
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-6 py-1 rounded-full uppercase tracking-wide">
                Digital Marketing
              </p>

              {/* Main Heading */}
              <h1 className="poppins text-3xl  lg:text-4xl xl:text-5xl font-medium leading-tight text-gray-900 mb-3">
                Search Engine Optimization
                <span className="text-[#3e66f3]"> (SEO) </span> Services That
                Drive Real
                <span className="text-[#3e66f3]"> Business Growth. </span>
              </h1>

              {/* Description */}
              <p className="open-sans text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                We provide complete SEO solutions, including on-page, technical,
                local, and content optimization to boost rankings, attract
                quality traffic, and increase conversions.
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
              src={seoHero}
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

      {/* scroll stack section */}
      <ReactLenis root>
        <section className="flex flex-col lg:flex-row w-full min-h-screen relative container mx-auto lg:px-10">
          {/* ---------- Left Static Section ---------- */}
          <div className="w-full lg:w-1/2 h-auto lg:h-screen sticky top-20  flex flex-col justify-center text-center  order-1 lg:order-none ">
            <div className="flex flex-col justify-center p-6 text-center lg:text-left max-w-xl mx-auto ">
              <h2 className="text-[35px] md:text-[38px] poppins font-medium lg:mb-4 text-[#3e66f3] ">
                Why Choose SEO?
              </h2>
              <p className="text-gray-700 text-[18px] open-sans md:text-[20px] leading-relaxed ">
                SEO enhances visibility, builds trust, and drives steady organic
                traffic that helps your business grow naturally over time.
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
              title="Greater Visibility & Quality Traffic"
              description="SEO helps a website reach the first page of search engines attracting visitors who are genuinely interested in your clients services or products not just random visitors."
              bgImage="/images/seo1.jpg" 
              progress={scrollYProgress}
              range={[0, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={1}
              title="Long-Term ROI & Cost Efficiency"
              description="Unlike paid ads that stop working once your budget runs out, SEO delivers lasting results. Each optimised page continues to bring in traffic and leads for months, or even years."
              bgImage="/images/seo2.jpg" 
              progress={scrollYProgress}
              range={[0.25, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={2}
              title=" Establishes Brand Trust & Credibility"
              description="Ranking high on Google signals authority and reliability. Customers naturally trust businesses that appear at the top of search results."
              bgImage="/images/seo3.jpg" 
              progress={scrollYProgress}
              range={[0.5, 1]}
              targetScale={1}
            />
            <StickyCard_001
              i={3}
              title="Improved User Experience & Engagement"
              description="SEO is more than just keywords. It builds a smooth fast and user friendly website that keeps visitors engaged through better structure speed and mobile responsiveness."
              bgImage="/images/seo4.jpg" 
              progress={scrollYProgress}
              range={[0.75, 1]}
              targetScale={1}
            />
          </main>
        </section>
      </ReactLenis>


      {/* Inter Linking */}
      <section className=" container mx-auto pt-10 md:pt-12 px-6 lg:px-10 xl:px-20">
        {/* <div className="  "> */}
        <div className="  grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
          {/* Left Image */}
          <div className="w-full hidden md:flex md:justify-center lg:justify-start">
            <Image
              src={seoInterLinking}
              alt="interlinking text"
              width={500}
              height={550}
              className=" h-[300px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-contain rounded-xl"
            />
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-[28px] lg:text-[35px] poppins font-medium  text-center lg:text-start">
                Boost Your Brand With
                <span className=" text-[#3e66f3] ">
                  {" "}SEO {" "}
                </span>
              </h2>
              <p className="text-gray-700 text-[14px] md:text-[16px] open-sans">
                Build a strong digital foundation that puts your brand ahead of the competition. Our SEO experts optimise every aspect of your website for long-term growth and measurable results.
              </p>
            </div>

            {/* Each link separately */}
            <div className="flex flex-col gap-2">
              {/* card1 */}
              <Link
                href="/smm"
                className="relative py-2 flex justify-between items-center border-b border-gray-400 group cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-0 hover:before:h-full"
              >
                {/* Heading text */}
                <h3 className="relative z-10 text-[16px] md:text-[18px] poppins font-medium text-[#3e66f3] transition-all duration-300 group-hover:translate-x-3">
                  Social Media Marketing
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

      {/* Feature ShowCase  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto pt-12  px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="ON PAGE  "
          highlight="SEO elements "
          features={feature1}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section2} />
      </section>

      {/* Feature ShowCase  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Core Technical "
          highlight="SEO Factors"
          features={feature2}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section3} />
      </section>

      {/* Feature ShowCase  1 */}
      {/* Handle Your Instagram Management */}
      <section className=" container mx-auto py-10 lg:py-12 px-6 md:px-10 lg:px-10 xl:px-20">
        <FeatureShowcase
          title="Content "
          highlight="Audits"
          features={feature3}
          buttonLabel="Get Started ➺"
          buttonLink="/contact-us"
        />
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section4} />
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section5} />
      </section>

      {/* alternative image section 1 */}
      <section className="container mx-auto px-6 md:px-10 lg:px-10">
        <AlternativeImage sections={section6} />
      </section>

      {/* FAQ Section */}

      {/* FAQs */}
      <section className=" bg-[#eff0f9] flex justify-center items-center py-10 px-6 lg:px-0">
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
                question={ faq.question } 
                answer={ faq.answer }
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
