"use client";
// pre defined
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// import CardSwap, { Card } from "./components/CardSwap";
// import { ClipPathCard } from "../components/ClipPathCard";
import CardSwap, { Card } from "../components/CardSwap";

// react icons
import serviceSwapCardHero from "../../../public/images/serviceSwapCardHero.jpg";
import servicesHeroDigitalMarketing from "../../../public/images/servicesHeroDigitalMarketing.png";
import servicesHeroCpassSolution from "../../../public/images/servicesHeroCpassSolution.png";
import servicesHeroWebDesign from "../../../public/images/servicesHeroWebDesign.jpg";
import servicesHeroWebSolutions from "../../../public/images/servicesHeroWebSolutions.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

// lottie animation
import rocket from "../../../public/animation/rocket.json";
import arrow from "../../../public/animation/arrow.json";

// images
import servicesExpertise from "../../../public/images/servicesExpertise.jpg";
import servicesDesign from "../../../public/images/servicesDesign.jpg";
import servicesDigitalMarketing from "../../../public/images/servicesDigitalMarketing.jpg";
import servicesWebSolutions from "../../../public/images/servicesWebSolutions.jpg";
import servicesBuildTrust from "../../../public/images/servicesBuildTrust.jpg";
import servicesProcess from "../../../public/images/servicesProcess.png";
import overview from "../../../public/images/overview.png";
import product4 from "../../../public/images/product4.png";
import serviceHero from "../../../public/images/serviceHero.png";
import serviceHero01 from "../../../public/images/serviceHero01.jpg";

// icons
import cpassSolution from "../../../public/icons/cpassSolution.jpg";
import servicesIconDeliver from "../../../public/icons/servicesIconDeliver.png";
import servicesIconScale from "../../../public/icons/servicesIconScale.png";

// components
import { ClipPathCard } from "../components/ClipPathCard";
import FaqItem from "./../components/FaqItem";

// icons
import { BsArrowRight } from "react-icons/bs";
import { PiArrowElbowRightDown } from "react-icons/pi";

// image pass for rotating cards
const data = [servicesWebSolutions, servicesDesign, servicesDigitalMarketing];

// Our services On Mobile Screen
const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "/icons/servicesIconWebDevelopment.png",
    href: "/web-development",
  },
  {
    id: 2,
    title: "Ecommerce",
    icon: "/icons/servicesIconEcommerce.png",
    href: "/ecommerce",
  },
  {
    id: 3,
    title: "Open Source Development",
    icon: "/icons/servicesIconOpenSourceDevelopment.png",
    href: "/open-source-development",
  },
  {
    id: 4,
    title: "Website Redesign",
    icon: "/icons/servicesIconWebDesign.png",
    href: "/web-design",
  },
  {
    id: 5,
    title: "Branding",
    icon: "/icons/servicesIconBranding.png",
    href: "/branding",
  },
  {
    id: 6,
    title: "Animation",
    icon: "/icons/servicesIconAnimation.png",
    href: "/animation",
  },
];

const extraServices = [
  {
    id: 7,
    title: "Affiliate Marketing",
    icon: "/icons/servicesIconAffiliateMarketing.png",
    href: "/affiliate-marketing",
  },
  {
    id: 8,
    title: "Social Media Ads",
    icon: "/icons/servicesIconSocialMediaAds.png",
    href: "/social-media-ads",
  },
  {
    id: 9,
    title: "Social Media Marketing",
    icon: "/icons/servicesIconSocialMediaMarketing.png",
    href: "/smm",
  },
  {
    id: 10,
    title: "Search Engine Optimization",
    icon: "/icons/servicesIconSeo.png",
    href: "/seo",
  },
  {
    id: 11,
    title: "Content Marketing",
    icon: "/icons/servicesIconContentMarketing.png",
    href: "/content-marketing",
  },
  {
    id: 12,
    title: "Cpass Solutions",
    icon: "/icons/servicesIconCelitix.png",
    href: "https://celitix.com/",
  },
];

// Ends Our Services

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMoreCard, setViewMoreCard] = useState(false);

  // FAQs start
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What kind of services do you offer?",
      answer:
        "We provide website design & redesign, web solutions, and digital marketing services like SEO, PPC, and social media management.",
    },
    {
      question: "How long will it take to finish my project?",
      answer:
        "Most projects take a few weeks, depending on what you need. We’ll give you a clear timeline before we start.",
    },
    {
      question: "Can you improve my current website?",
      answer:
        "Yes! We can redesign or upgrade your existing website to make it look modern, faster, and more user-friendly.",
    },
    {
      question: "What type of websites can you redesign?",
      answer:
        "We work with websites built on WordPress, HTML/CSS, Node.js, React, and other frameworks. Our team adapts the redesign to your current setup.",
    },
    {
      question: "How will your services help my business?",
      answer:
        "We help you build a stronger online presence, attract new customers, and grow your business through better websites and digital marketing.",
    },
  ];
  // FAQs ends

  // Fixed rotation for the cards
  const rotations = [0, -20, 20];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [data.length]);

  // Style for the cards
  const cardStyle = (rotation, index, isActive) => ({
    top: "50%",
    left: "50%",
    transform: `
      translate(-50%, -50%)
      rotate(${rotation}deg)
    `,
    transition: "transform 1.7s, opacity 0.7s",
    opacity: isActive ? 1 : 1.1,
    zIndex: isActive ? 10 : 5 - index,
    width: "clamp(200px, 25vw, 350px)",
    height: "clamp(250px, 30vw, 400px)",
  });

  const visibleCards = [
    currentIndex,
    (currentIndex + 1) % data.length,
    (currentIndex + 2) % data.length,
  ];

  // hero
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls2.start({ rotate: -10, transition: { duration: 0.6 } });
      await controls3.start({ rotate: -25, transition: { duration: 0.6 } });
      await controls4.start({ rotate: -40, transition: { duration: 0.6 } });
      await new Promise((res) => setTimeout(res, 800));

      // REVERSE (band karna)
      await controls1.start({ rotate: 0, transition: { duration: 0.6 } });
      await controls2.start({ rotate: 0, transition: { duration: 0.6 } });
      await controls3.start({ rotate: 0, transition: { duration: 0.6 } });
      await controls4.start({ rotate: 0, transition: { duration: 0.6 } });

      // Repeat cycle
      sequence();
    };

    sequence();
  }, []);

  return (
    <>
      <section className="bg-linear-to-t from-[#EBF3FF] to-[#DDE8FF] ">
        {/* <div className="bg-linear-to-t from-[#accbee] to-[#e7f0fd]"> */}
        <div className=" overflow-hidden py-19 2xl:py-25 ">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] relative ">
            {/* left content */}
            <div className=" relative flex items-center justify-end mb-28 md:mb-45 lg:mb-0 px-6 md:px-20 2xl:px-0 2xl:ps-90  ">
              <div className="hidden lg:block absolute left-30 bottom-0 xl:bottom-15 2xl:left-65 2xl:bottom-5 ">
                <FaMagnifyingGlass className="text-4xl text-[#f95d64] float-slow" />
              </div>
              <div className="hidden lg:block absolute left-30 top-7 xl:left-50 xl:top-15 2xl:left-45  2xl:top-10  rotate-30  ">
                <FaCode className="text-4xl text-[#ee40a5] float-fast" />
              </div>
              <div className="hidden lg:block absolute left-90 bottom-25 2xl:left-150 2xl:bottom-20  ">
                <FaGears className="text-4xl 2xl:text-[42px] text-[#9276ff] float-medium " />
              </div>
              <div className="hidden lg:block absolute right-70 xl:right-90 2xl:right-110  top-0 2xl:-top-10  ">
                <FaBullhorn className="text-4xl text-[#ab4aff] float-medium " />
              </div>
              <div className="hidden lg:block absolute right-35 xl:right-70 2xl:right-30 bottom-5  2xl:bottom-5 ">
                <LuClipboardPenLine className="text-4xl text-[#55a0ff] float-medium " />
              </div>
              <div className="hidden lg:block absolute right-40 bottom-57 xl:right-40 xl:bottom-35 2xl:right-25 2xl:bottom-70   ">
                <FaChartLine className="text-3xl text-[#ff52f2] float-medium " />
              </div>
              <div className="hidden lg:block absolute top-15 xl:right-40 xl:top-25 2xl:right-50 2xl:top-10">
                <FaHashtag className="text-4xl text-[#fc4453] float-medium " />
              </div>
              {/* content */}
              <div className="flex flex-col gap-4  max-w-4xl 2xl:min-w-4xl  z-100 ">
                <div className="">
                  <h1 className="text-[35px] md:text-[42px] 2xl:text-[52px] text-center lg:text-start poppins font-medium text-gray-900">
                    Website{" "}
                    <span className="font-bold text-[#3e66f3]">
                      Development,{" "}
                    </span>
                    <span className="inline-block">
                      Redesign & Digital Marketing
                    </span>
                  </h1>
                </div>
                <div className=" space-y-2">
                  <p className="text-[14px] md:text-[16px] 2xl:text-[22px] text-gray-700 open-sans text-center lg:text-start pe-2">
                    Offering website design, web solutions, digital marketing &
                    CPaaS services to help businesses grow online with strategy,
                    creativity & technology
                  </p>
                </div>
                <div className="flex w-full justify-center lg:justify-start">
                  <Link href="/contact-us">
                    <button className="relative poppins inline-flex items-center justify-center px-4 py-2 text-[16px] open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group ">
                      <span className="poppins relative z-10 ">
                        {" "}
                        Consult Expert{" "}
                      </span>

                      <span className="absolute left-0 top-1/2 w-full h-2.5 bg-black opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* right scroll cards */}
            <div className=" w-full flex justify-start sm:justify-center lg:justify-end mt-10 lg:mt-0 mx-4 ">
              <div className="relative w-[350px] h-[300px] md:h-[360px]  lg:w-[500px] lg:h-[500px] ">
                <CardSwap
                  cardDistance={30}
                  verticalDistance={60}
                  skewAmount={5}
                  delay={3000}
                  pauseOnHover={false}
                  width={320}
                  height={380}
                >
                  <Card>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      {/* Top Title Bar */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 border-b border-white">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-white text-xl">Web Solution</p>
                      </div>

                      {/* Image */}
                      <Image
                        src={servicesHeroWebSolutions}
                        alt="Card 1"
                        className="w-full h-[calc(100%-45px)] object-cover  "
                      />
                    </div>
                  </Card>
                  <Card>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      {/* Top Title Bar */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-purple-500 via-blue-400 to-indigo-700 border-b border-white">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-white text-xl">Digital Marketing</p>
                      </div>

                      {/* Image */}
                      <Image
                        // src={serviceSwapCardHero}
                        src={servicesHeroDigitalMarketing}
                        alt="services Hero Digital Marketing"
                        className="w-full h-[calc(100%-45px)] object-cover  "
                      />
                    </div>
                  </Card>
                  <Card>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      {/* Top Title Bar */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-[rgba(240,62,163,1)] via-[rgba(143,115,255,1)] to-[rgba(105,210,255,1)] border-b border-white">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-white text-xl">Design </p>
                      </div>

                      {/* Image */}
                      <Image
                        src={servicesHeroWebDesign}
                        alt="Card 1"
                        className="w-full h-[calc(100%-45px)] object-cover  "
                      />
                    </div>
                  </Card>
                  <Card>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      {/* Top Title Bar */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-[rgba(255,66,148,1)] via-[rgba(133,149,255,1)] to-[rgba(29,65,245,1)] border-b border-white">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-white text-xl">Cpass Solution</p>
                      </div>

                      {/* Image */}
                      <Image
                        // src={serviceSwapCardHero}
                        src={servicesHeroCpassSolution}
                        alt="Services Hero Cpass Solution"
                        className="w-full h-[calc(100%-45px)] object-cover  "
                      />
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hero 1*/}
      {/* <section className="bg-gradient-to-l from-blue-100 via-blue-100 to-blue-400 flex justify-center py-10 container">
        <div
          className="w-full flex flex-col lg:flex-row items-center 
                   max-w-7xl  mx-auto gap-10"
        >
          <div
            className="flex flex-col space-y-4 w-full lg:w-1/2 
                    justify-center text-center lg:text-left"
          >
            <h1 className="text-[28px] sm:text-[34px] md:text-[42px] poppins  text-gray-900">
              Website{" "}
              <span className="font-bold text-[#3e66f3]">Development</span>,
              Redesign & Digital Marketing
            </h1>
            <p className="text-base sm:text-[18px] text-gray-600 open-sans">
              Offering website design, web solutions, digital marketing & CPaaS
              services to help businesses grow online with strategy, creativity
              & technology
            </p>
            <div className="flex justify-center lg:justify-start">
             <button className="relative poppins inline-flex items-center justify-center w-[130px] h-[50px] text-[16px] open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group px-2">
                  <span className="poppins relative z-10 ">
                    {" "}
                    Consult Expert {" "}
                  </span>

                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 mb-8">
            <div
              className="relative 
               w-[240px] sm:w-[260px] md:w-[300px] lg:w-[340px] 
               h-[320px] sm:h-[320px] md:h-[400px] lg:h-[500px] 
               mx-auto lg:mx-0"
            >
              <motion.div
                animate={controls1}
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[80%] sm:w-[90%] lg:w-full
                 h-[90%] rounded-3xl shadow-xl overflow-hidden z-30"
              >
                <div className="w-full h-full bg-amber-300" />
              </motion.div>

              <motion.div
                animate={controls2}
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[78%] sm:w-[88%] lg:w-[95%]
                 h-[85%] rounded-3xl shadow-xl overflow-hidden z-20 origin-bottom mb-4 sm:mb-6"
              >
                <div className="w-full h-full bg-green-300" />
              </motion.div>

              <motion.div
                animate={controls3}
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[76%] sm:w-[86%] lg:w-[92%]
                 h-[78%] rounded-3xl shadow-xl overflow-hidden z-10 origin-bottom mb-8 sm:mb-15"
              >
                <div className="w-full h-full bg-red-300" />
              </motion.div>

              <motion.div
                animate={controls4}
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[74%] sm:w-[84%] lg:w-[90%]
                 h-[72%] rounded-3xl shadow-xl overflow-hidden z-0 origin-bottom mb-12 sm:mb-22"
              >
                <div className="w-full h-full bg-violet-300" />
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-gradient-to-b from-blue-100 via-blue-100 to-blue-300 flex justify-center py-10 px-6 lg:px-20">
        <div className="w-full flex flex-col lg:flex-row items-center container  mx-auto gap-10 relative">
          <div className="hidden lg:block absolute left-120 top-20 rotate-130">
            <Lottie animationData={arrow} />
          </div>
          <div className="flex flex-col space-y-4 w-full lg:w-1/2 justify-center text-center lg:text-left">
            <h1 className="text-[35px] md:text-[38px] poppins font-medium text-gray-900">
              Website{" "}
              <span className="font-bold text-[#3e66f3]">Development, </span>
              <p>Redesign & Digital Marketing</p>
            </h1>
            <p className="text-[14px] md:text-[16px] text-gray-600 open-sans">
              Offering website design, web solutions, digital marketing & CPaaS
              services to help businesses grow online with strategy, creativity
              & technology
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/contact-us">
                <button className="relative poppins inline-flex items-center justify-center px-4 py-3 text-[16px] open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group ">
                  <span className="poppins relative z-10 ">
                    {" "}
                    Consult Expert{" "}
                  </span>

                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 mb-8">
            <div className="relative w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[300px] sm:h-[320px] md:h-[400px] lg:h-[500px] mx-auto lg:mx-0  translate-x-8 sm:translate-x-0">
              <motion.div
                animate={controls1}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[90%] lg:w-full h-[90%] rounded-3xl shadow-xl overflow-hidden z-30"
              >
                <Image
                  src="/images/servicesHero01.jpg"
                  alt="Card Image 1"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={controls2}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[78%] sm:w-[88%] lg:w-[95%] h-[85%] rounded-3xl shadow-xl overflow-hidden z-20 origin-bottom mb-4 sm:mb-6"
              >
                <Image
                  src="/images/servicesHero02.jpg"
                  alt="Card Image 2"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={controls3}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[76%] sm:w-[86%] lg:w-[92%] h-[78%] rounded-3xl shadow-xl overflow-hidden z-10 origin-bottom mb-8 sm:mb-15"
              >
                <Image
                  src="/images/servicesHero03.jpg"
                  alt="Card Image 3"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={controls4}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[74%] sm:w-[84%] lg:w-[90%] h-[72%] rounded-3xl shadow-xl overflow-hidden z-0 origin-bottom mb-12 sm:mb-22"
              >
                <Image
                  src="/images/servicesHero04.jpg"
                  alt="Card Image 4"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/*  rotating cards */}
      <section className=" container mx-auto pt-10 lg:py-12 px-6 lg:px-20">
        {/* <div className="container mx-auto md:h-[600px] h-[500px]  [@media(max-width:1024px)_and_(min-width:659px)]:h-[500px] [@media(max-width:320px)]:h-[600px] [@media(max-width:768px)_and_(min-width:659px)]:h-[360px] flex flex-col sm:flex-row items-center justify-center overflow-hidden p-4 font-inter"> */}
        <div className="font-inter flex flex-col sm:flex-row items-center justify-center overflow-hidden h-[560px] sm:h-[400px] md:h-[450px] lg:h-[500px] ">
          <div className="w-full sm:w-1/2 h-1/2 sm:h-1/2  relative flex items-center justify-center">
            {visibleCards.map((cardIndex, i) => (
              <div
                key={cardIndex}
                className="absolute rounded-3xl  overflow-hidden sm:mt-0 mt-12"
                style={cardStyle(rotations[i], i, i === 0)}
              >
                <Image
                  src={data[cardIndex]}
                  alt={`Card ${cardIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="w-full sm:w-1/2 relative h-full  flex justify-center sm:items-center ">
            <AnimatePresence mode="wait">
              {currentIndex === 0 && (
                <motion.div
                  key="content-0"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -80 }}
                  transition={{ duration: 0.7 }}
                  className="absolute w-full"
                >
                  <h2 className="md:text-[38px] text-[35px]  text-center sm:text-start poppins font-medium mb-4 text-[#3e66f3] mt-25 sm:mt-0">
                    Web solution
                  </h2>
                  <p className="md:text-[16px] text-[14px] text-center sm:text-start text-black open-sans leading-relaxed">
                    Boost your digital presence with responsive and high
                    performing websites designed to support real business
                    growth. These websites are crafted to create smooth user
                    experiences that load quickly and adapt to every device with
                    ease. From professional corporate sites and engaging product
                    showcases to fully customized web solutions, each project is
                    built with a focus on performance visibility and long-term
                    impact. With clear structure, thoughtful design and
                    user-friendly layouts, your website becomes a reliable space
                    where visitors can understand and connect with your services
                    effortlessly.
                  </p>
                </motion.div>
              )}

              {currentIndex === 1 && (
                <motion.div
                  key="content-1"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -80 }}
                  transition={{ duration: 0.7 }}
                  className="absolute w-full"
                >
                  <h2 className="md:text-[38px] text-[35px] text-center sm:text-start poppins font-medium mb-4 text-[#3e66f3] mt-25 sm:mt-0">
                    Design
                  </h2>
                  <p className="md:text-[16px] text-[14px] text-center sm:text-start open-sans text-black leading-relaxed">
                    A well-designed website does more than show who you are. It
                    works silently in the background, loading quickly, guiding
                    users with ease and helping them find the right information
                    without confusion. Good web design focuses on clarity
                    structure and user comfort so visitors feel informed,
                    confident and ready to move forward. With responsive
                    layouts, simple navigation and a clear message, the website
                    creates a smooth experience that keeps people engaged. When
                    a website functions with purpose, users stay longer, trust
                    grows, and results improve naturally.
                  </p>
                </motion.div>
              )}

              {currentIndex === 2 && (
                <motion.div
                  key="content-2"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -80 }}
                  transition={{ duration: 0.7 }}
                  className="absolute w-full"
                >
                  <h2 className="text-[35px] md:text-[38px] text-center sm:text-start poppins font-medium mb-4 text-[#3e66f3] mt-25 sm:mt-0">
                    Digital Marketing
                  </h2>
                  <p className="md:text-[16px] text-[14px] text-center sm:text-start open-sans text-black">
                    Enhance your visibility with effective SEO and strategic
                    social media marketing that positions your brand in front of
                    the right audience. Drive developed ROI through
                    result-driven announcement juggernauts, in-app elevations,
                    compelling content marketing, and targeted chapter
                    strategies. Strengthen your digital presence, reach more
                    guests, and grow your business with a combination of
                    performance marketing and targeted outreach across every
                    channel.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/*  Our Services */}
      <section className="container mx-auto">
        <div className=" px-6 xl:px-0 py-10 ">
          <div>
            <h2 className="poppins text-[35px] md:text-[38px] font-medium text-center text-[#3e66f3] w-full mb-10">
              Our Services
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden md:block ">
            <ClipPathCard />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-3 md:hidden">
            {/* Main Services */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="flex flex-col justify-center bg-blue-50 rounded-lg shadow-lg items-center border p-4 gap-2"
                >
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={100}
                    height={100}
                    className="w-10 h-10"
                  />
                  <h3 className="text-[16px] font-medium text-[#3e66f3] text-center">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Expandable Extra Section */}
            <AnimatePresence>
              {viewMoreCard && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {extraServices.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      className="flex flex-col justify-center bg-blue-50 rounded-lg shadow-lg items-center border p-4 gap-2"
                    >
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={100}
                        height={100}
                        className="w-10 h-10"
                      />
                      <h3 className="text-[16px] font-medium text-[#3e66f3] text-center">
                        {s.title}
                      </h3>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <div className="flex justify-center mt-2">
              <button
                className="text-[18px] px-4 py-2 w-36 rounded-lg bg-black text-white"
                onClick={() => setViewMoreCard(!viewMoreCard)}
              >
                {viewMoreCard ? "View Less" : "View More..."}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our expertise */}
      <section className="w-full  py-10  px-6 lg:px-20 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:text-left">
          <h2 className="text-[35px] md:text-[38px] font-medium poppins text-[#3e66f3] w-full mb-10 md:mb-4 text-center md:text-start">
            Expertise
          </h2>

          <h3 className="text-[18px] md:text-[20px] poppins w-full text-center md:text-start mb-6">
            We deliver impactful digital solutions
          </h3>

          <p className="text-gray-900 text-[14px] open-sans md:text-[16px] mb-8 leading-relaxed w-full text-center md:text-start">
            At Proactive Digital Solutions, we combine expertise in website
            development, app solutions, branding, SEO, performance marketing,
            and CPaaS communication tools to build digital experiences that
            boost visibility, strengthen brand identity, and drive measurable
            business growth. Our solutions are designed to be scalable,
            responsive, and future-ready, ensuring long-term success for every
            client.
          </p>

          <div className="w-full flex justify-center md:justify-start ">
            <Link href="/contact-us">
              <button className="relative inline-flex items-center justify-center px-5 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                <span className="poppins relative z-10">Let's Talk</span>

                {/* Vertical expanding background */}
                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full md:w-1/2 flex justify-end">
          <Image
            src={servicesExpertise}
            alt="Expertise illustration"
            className="rounded-3xl shadow-2xl w-full h-full md:h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto py-10 lg:py-16 px-6 lg:px-20 ">
        <div className="flex flex-col gap-10 lg:gap-15  ">
          <div className="grid grid-cols-1 md:grid-cols-[28%_68%] gap-3 lg:gap-6 ">
            {/* <div className="flex justify-center md:justify-start">
                  <Image
                    src={cpassSolution}
                    alt="img7"
                    className="w-14 h-14 sm:w-22 sm:h-22"
                  />
                </div> */}
            <div className="">
              <span className="poppins text-lg lg:text-4xl font-medium  ">
                We Build trust through clarity.
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <div className="">
                <h2 className="poppins text-3xl font-semibold text-[#3e66f3]">
                  Ensuring every project launches with purpose and is
                  strategised with precision.
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-[38%_38%_20%] gap-3 lg:gap-5">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="poppins font-medium text-xl text-[#3e66f3]">
                      Discover
                    </h3>
                    <p className="open-sans  text-md">
                      We uncover your goals, audience, and market that drives
                    </p>
                  </div>
                  <div className="hidden md:flex w-full h-full justify-center items-center">
                    <BsArrowRight className="text-4xl lg:text-6xl  text-[#3e66f3] " />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="poppins font-medium text-xl text-[#3e66f3]">
                      Design
                    </h3>
                    <p className="open-sans  text-md">
                      We craft user experiences that attract, engage, convert .
                    </p>
                  </div>
                  <div className="hidden md:flex w-full h-full justify-center items-center">
                    <BsArrowRight className="text-4xl lg:text-6xl  text-[#3e66f3] " />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="poppins font-medium text-xl text-[#3e66f3]">
                      Develop
                    </h3>
                    <p className="open-sans  text-md">
                      We build fast, secure platform for long-term success.
                    </p>
                  </div>
                  {/* <div className="flex w-full h-full justify-center items-center">
                    <BsArrowRight size={60} className=" text-gray-700 " />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-8 ">
              <div className=" flex flex-col gap-3">
                {/* <div className="flex justify-center md:justify-start">
                   <Image
                    src={cpassSolution}
                    alt="img7"
                    className="w-14 h-14 lg:w-16 lg:h-16"
                  />
                </div> */}
                <div className="">
                  <h2 className="poppins text-xl md:text-2xl text-center md:text-start font-medium text-[#3e66f3]">
                    Built to offer services that create future brands climb the
                    ladder of success and help claim their vision .
                  </h2>
                </div>
                <div className="flex gap-2 justify-center md:justify-start ">
                  <div className="flex  ">
                    <p className="open-sans text-md ">More details</p>
                  </div>
                  <div className="flex h-full  justify-start items-end">
                    <PiArrowElbowRightDown
                      size={18}
                      className=" text-gray-700 "
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="flex flex-col border-1 gap-5 p-4 transform transition duration-300 hover:-translate-y-2 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center w-18 h-18 bg-[#3e66f3] rounded-full  ">
                      <Image
                        src={servicesIconDeliver}
                        alt="img7"
                        className=" w-14 h-14 lg:w-14 lg:h-14"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <h3 className="poppins text-xl flex justify-center font-medium text-[#3e66f3]">
                      Deliver
                    </h3>
                    <p className="open-sans text-gray-700 text-center ">
                      We ensure seamless deployment, performance optimization,
                      and measurable results from day one.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col border-1 gap-5 p-4 transform transition duration-300 hover:-translate-y-2 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center w-18 h-18 bg-[#3e66f3] rounded-full  ">
                      <Image
                        src={servicesIconScale}
                        alt="img7"
                        className="w-14 h-14 lg:w-14 lg:h-14"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <h3 className="poppins flex justify-center text-xl font-medium text-[#3e66f3]">
                      Scale
                    </h3>
                    <p className="open-sans text-gray-700 text-center  ">
                      We help you expand your digital footprint and maximize ROI
                      through continuous innovation and analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className=" flex justify-center lg:justify-end items-center  "> */}
            {/* <div className="h-130">
                <Image
                  src={product4}
                  alt="Expertise illustration"
                  className="rounded-3xl shadow-2xl w-full h-full object-contain"
                />
              </div> */}
            <div className="hidden lg:flex  justify-center items-center  ">
              <div className="group overflow-hidden rounded-xl hover:cursor-pointer">
                <Image
                  // src={servicesBuildTrust}
                  src={servicesProcess}
                  alt="Services We Built Trust"
                  width={450}
                  height={450}
                  className="object-fit rounded-xl lg:h-110 2xl:h-100 transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Our Projects  */}
      {/* <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10">
          <div className="flex flex-col gap-10 px-4 xl:px-0 ">
            <div className="flex justify-center">
              <h2 className="poppins font-medium text-[35px] md:text-[38px] text-[#3e66f3] ">
                Our Projects
              </h2>
            </div>
            <div className=" mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-3">
                <div className="grid grid-cols-[38%_60%] h-full gap-3 ">
                  <div className="h-full ">
                    <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                      <Image
                        src={hero4}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col h-full gap-3 ">
                    <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                      <Image
                        src={hero5}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                      <Image
                        src={hero6}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[38%_60%] h-full gap-3 ">
                  <div className=" flex flex-col gap-3 h-full  ">
                    <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                      <Image
                        src={hero4}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="group overflow-hidden rounded-xl h-full hover:shadow-2xl">
                      <Image
                        src={hero5}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-3 h-full ">
                    <div className="group overflow-hidden rounded-xl h-[70%] hover:shadow-2xl">
                      <Image
                        src={hero6}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="group overflow-hidden rounded-xl h-[30%] hover:shadow-2xl">
                      <Image
                        src={hero4}
                        alt="Case Study 1"
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

export default App;
