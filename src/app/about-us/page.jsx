"use client";
// default
import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";


// components
import FaqItem from "../components/FaqItem.jsx";
import ParticleBackground from "../components/ParticleBackground";

// images
import aboutMission01 from "../../../public/images/aboutMission01.jpg";
import aboutMission02 from "../../../public/images/aboutMission02.jpg";
import aboutMission03 from "../../../public/images/aboutMission03.jpg";
import growthAbout from "../../../public/images/growthAbout.jpg";
import transformAbout from "../../../public/images/transformAbout.jpg";
import envisionAbout from "../../../public/images/envisionAbout.jpg";
import aboutScrollingText from "../../../public/images/aboutScrollingText.jpg";

// lottie animation
import rocket from "../../../public/animation/rocket.json";

// icons
import aboutDigitalGrowth from "../../../public/icons/aboutDigitalGrowth.png";
import aboutBuiltWithPresison from "../../../public/icons/aboutBuiltWithPresison.png";
import aboutScalable from "../../../public/icons/aboutScalable.png";
import aboutTrustablePartners from "../../../public/icons/aboutTrustablePartners.png";
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

// timeline
const timeline = [
  {
    year: "2008",
    text: "Proactive Solution Services began with a vision delivering full-stack web and cloud solutions that laid the foundation for future innovation.",
  },
  {
    year: "2010",
    text: "We stepped into web development and digital marketing, helping businesses build stronger digital identities and measurable growth online.",
  },
  {
    year: "2012",
    text: "Our agency expanded to Delhi, where we partnered with trusted names like Moser Baer, Godrej, and Elegant Group, strengthening our reputation.",
  },
  {
    year: "2018",
    text: "A decade of dedication turned into achievement our team grew beyond 20 members, serving 250+ clients with reliable, scalable solutions.",
  },
  {
    year: "2021",
    text: "We sharpened our focus on digital marketing and Google Ads, driving ROI-focused campaigns that exceeded performance benchmarks.",
  },
  {
    year: "2024",
    text: "A landmark chapter launch of Collab, our Cloud Platform unifying WhatsApp APIs, Chatbots, CRMs, and more into one ecosystem for modern business communication.",
  },
];

// hover card
const hoverCards = [
  {
    id: 1,
    title: "Growth Excellence",
    description:
      // "We design impactful websites and offer digital marketing solutions that help businesses grow online and achieve success.",
      "We build high-performance, responsive websites designed to strengthen your online presence and drive measurable business growth. Our solutions are strategically crafted.",
    link: "/services",
    image: aboutDigitalGrowth,
  },
  {
    id: 2,
    title: "Engineered Precision",
    description:
      "Every website is developed with clean code, optimized performance, seamless navigation, and modern UI/UX design to deliver an exceptional user experience.",
    link: "/services",
    image: aboutBuiltWithPresison,
  },
  {
    id: 3,
    title: "Future Ready",
    description:
      "Our custom web development solutions are built to scale as your business grows, ensuring flexibility, speed, and long-term digital stability.We implement modern technologies.",
    link: "/services",
    image: aboutScalable,
  },
  {
    id: 4,
    title: "Reliable Technology",
    description:
      "We support you beyond launch with continuous updates, security enhancements, and performance optimization to keep your website strong and competitive.",
    link: "/services",
    image: aboutTrustablePartners,
  },
];

// our mission
const visionData = [
  {
    number: "01",
    title: "Envision",
    text: "Our mission is to design, develop, and deliver high-performance web solutions that help businesses scale, innovate, and lead in the digital world.",
    // img: aboutMission01,
    img: envisionAbout,
  },
  {
    number: "02",
    title: "Transform",
    // text: "We transform ideas into impactful digital experiences, crafting websites that inspire, engage, and deliver results.",
    text: "Your website works 24/7 to attract, engage, and convert visitors. With optimized landing pages, clear CTAs, and SEO-friendly structure.",
    img: transformAbout,
  },
  {
    number: "03",
    title: "Growth",
    text: "Automated follow-ups, instant replies, and personalized messaging help nurture leads effectively. Faster responses build trust.",
    img: growthAbout,
  },
];

function page() {

  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Proactive offer?",
      answer:
        " Proactive offers custom website development, responsive web design, UI/UX design, and scalable web application development for startups and enterprises.",
    },
    {
      question: "Why choose Proactive as your web development company?",
      answer:
        " We build fast, secure, SEO-friendly, and mobile-responsive websites using modern technologies and scalable architecture.",
    },
    {
      question: " Do you develop SEO-optimized websites?",
      answer:
        " Yes, our websites are built with clean code, fast loading speed, structured design, and search engine optimization best practices.",
    },
    {
      question: "Do you provide custom website solutions?",
      answer:
        "Yes, we create fully customized websites and web application solutions tailored to your business goals and industry needs.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        " Yes, we provide ongoing website maintenance, performance optimization, security updates, and technical support after launch.",
    }, 
  ];
  // FAQs Ends

  // our vision
  const lenisRef = useRef(null);

  // text on scroll
  const textColor = "text-[#180A4C]";
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const xFuelYour = useTransform(scrollYProgress, [0, 1], [-250, 300]);
  const xBusiness = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const xExpansion = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  useEffect(() => {
    // Lenis setup
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Page reload hone par scroll top pe le aao
    lenis.scrollTo(0, { immediate: true });

    // GSAP animations
    [0, 1, 2].forEach((i) => {
      const el = document.querySelector(`#section-${i}`);
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        pin: i !== 2,
        pinSpacing: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  // without element text scroll animation ends

  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Set up GSAP Context for proper cleanup
    const ctx = gsap.context(() => {
      const linesToAnimate = gsap.utils.toArray(
        ".text-line",
        containerRef.current
      );

      // 2. Create the main GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%", // When the top of the element hits 85% down the viewport
          end: "bottom 45%", // When the bottom of the element hits 15% up the viewport

          // CRUCIAL: 'play reverse play reverse' ensures it works on every scroll direction
          toggleActions: "play reverse play reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      // 3. Define the START/Initial State using a quick 'set' in the timeline
      linesToAnimate.forEach((line, index) => {
        const isOdd = index % 2 === 0;
        const initialX = isOdd ? -300 : 300;

        // Define the starting position for the timeline (x: -100/100, opacity: 0)
        tl.set(
          line,
          {
            x: initialX,
            opacity: 0,
          },
          0
        ); // The '0' ensures this initial state is set at the very beginning of the timeline
      });

      // 4. Define the END/Final State (Animation)
      // The animation moves them from their initial state to x: 0 and opacity: 1
      tl.to(
        linesToAnimate,
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          stagger: 0.15,
        },
        0
      ); // The '0' ensures this animation starts immediately after the 'set'
    }, containerRef);

    // Clean up function

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* hero section */}
      {/* <section className="bg-[#e0ecff] relative bg-cover bg-no-repeat"> */}
      <section className="bg-white relative bg-cover bg-no-repeat">
        <div className="relative w-full py-0 md:py-12 overflow-hidden">
          {/* Particle Background */}
          <ParticleBackground />

          <div className="relative flex flex-col gap-10 justify-center items-center h-full w-full z-10 py-10 px-5 lg:px-10  ">
            {/* title */}
            <div className="flex flex-col gap-4 text-center max-w-7xl ">
              {/* title */}
              <p className="poppins text-[#3e66f3] font-semibold text-[20px] lg:text-[22px] ">
                OUTSMART YOUR COMPETITORS{" "}
              </p>
              <h1 className="poppins text-[38px] lg:text-[42px] font-semibold text-black leading-sung">
                Proactive Professional Services{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent ">
                  Turning ideas into Reality.{" "}
                </span>
                To Make an Impact,{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent inline-block">
                  Strategy Matters.
                </span>
              </h1>

              {/* description */}
              <div className="hidden md:block">
                <p className="open-sans text-[14px] md:text-[20px] text-gray-800 text-center">
                  We Create and Design Custom Website.Your one-stop destination for all Web Solutions.
                </p>

                <p className="open-sans text-[14px] md:text-[20px] text-gray-800 text-center">
                  {/* Your one-stop destination for all digital solutions. */}
                  From strategy to launch, we build scalable, high-performance websites
                </p>
              </div>
            </div>

            {/* button */}
            <div>
              <Link href="/services">
                <button className="poppins relative bg-[#3e66f3] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                  <span className="relative z-10 text-[16px]">Learn More</span>
                  <span className="absolute left-0 top-1/2 w-full h-[0px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="container mx-auto py-5 px-6 lg:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 h-full ">
          {hoverCards.map((card) => (
            <div key={card.id} className="relative group flex h-full">
              <div className="absolute inset-0 rounded-2xl bg-[#3e66f3] scale-100 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:rotate-10" />

              <div className="relative z-10 flex flex-col h-auto gap-4 p-6 lg:p-4 2xl:p-6 bg-white rounded-2xl shadow-md">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center bg-[#3e66f3] w-18 h-18 rounded-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={100}
                      height={100}
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full gap-3 text-center  ">
                  <div className="flex flex-col gap-3 text-center  ">
                    <h3 className="poppins text-[22px] font-medium text-[#3e66f3]">
                      {card.title}
                    </h3>
                    <p className="open-sans text-[16px] text-gray-600 text-justify">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      href={card.link}
                      className="poppins text-[#3e66f3] font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* text on scroll */}
      <section>
        <div
          ref={targetRef}
          className="px-8 sm:px-12 md:px-16 pt-10 md:pt-16 w-full flex justify-center mx-auto overflow-hidden bg-cover bg-center"
        >
          <div className="flex flex-col space-y-6 sm:space-y-20 md:space-y-10">
            <motion.div
              style={{ x: xFuelYour }}
              className="flex justify-between items-start gap-4"
            >
              <h2
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-none ${textColor}`}
              >
                Fuel Your
              </h2>
              <Link href="/contact-us">
                <button className="poppins relative border border-gray-600 text-blue-600 inline-flex items-center justify-center lg:mt-10 mt-0 md:mt-6 px-5 py-2 md:px-8 md:py-3 text-[20px] rounded-full cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                  <span className="relative z-10 text-[20px]">🡥</span>
                  <span className="absolute left-0 top-1/2 w-full h-[0px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              style={{ x: xBusiness }}
              className="flex items-center space-x-6"
            >
              <Image
                src={aboutScrollingText}
                alt="Team collaboration"
                className="w-20 sm:w-36 md:w-38 object-cover mt-0 md:mt-1 lg:mt-3"
              />
              <h2
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-none ${textColor}`}
              >
                Business
              </h2>
            </motion.div>

            <motion.h3
              style={{ x: xExpansion }}
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-none ${textColor}`}
            >
              Expansion
            </motion.h3>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <div className="text-white p-4 lg:p-0 space-y-4 ">
        {visionData.map((item, index) => (
          <div id={`section-${index}`} key={index} className="flex items-center justify-center my-0 lg:my-0">
            <div className="h-full w-full container mx-auto sm:px-10 md:px-18 md:py-16 lg:p-6 mt-30 md:mt-30 grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 md:gap-8 text-[18px] bg-white">
              {/* Number + Title */}
              <div className="text-center text-black flex gap-6 justify-around h-auto">
                <div className="text-[100px] font-bold text-transparent stroke-black stroke-[1px]">
                  {item.number}
                </div>
                <div className="text-[16px] md:text-[22px] poppins text-[#3e66f3] mt-18">
                  {item.title}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col  gap-6 max-w-2xl">
                <div className="poppins text-[20px] lg:text-[26px] text-black mt-6">
                  <h3>{item.text}</h3>
                </div>

                <div className="h-90">
                  <Image
                    src={item.img}
                    alt="our mission"
                    className="rounded-2xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      {/* bg-[radial-gradient(circle_at_20%_20%,#f9fbff_0%,#eef6ff_40%,#f7f9ff_90%)] */}
      <section className="relative py-10 lg:py-12 px-6 md:px-16  overflow-hidden">
        {/* <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-[#0E76CD]/40 to-[#FF4C4C]/25 rounded-full blur-[150px]"
        /> */}
        {/* <motion.div
          animate={{ x: [0, -25, 25, 0], y: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF4C4C]/25 to-[#0E76CD]/30 rounded-full blur-[160px]"
        /> */}

        <div className="relative text-center mb-10 md:mb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles className="text-[#0E76CD] w-8 h-8" />
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#0E76CD] via-[#3EA7FF] to-[#0056B3] bg-clip-text text-transparent">
              Our Journey
            </h2>

            <Sparkles className="text-[#0E76CD] w-8 h-8" />
          </motion.div>
          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            A timeline of innovation, passion, and growth built with dedication
            and technology.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* bg-gradient-to-b from-[#0E76CD] via-[#FF4C4C] to-[#0E76CD] */}
          {/* bg-gradient-to-b from-[#0E76CD] via-[#83e5fd] to-[#0E76CD] */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0E76CD] via-[#FF4C4C] to-[#0E76CD] -translate-x-1/2 rounded-full shadow-[0_0_25px_rgba(14,118,205,0.3)]"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="md:w-1/2 p-4 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E76CD]/15 via-transparent to-[#FF4C4C]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <motion.div
                  whileHover={{ scale: 1.04, rotateX: 3, rotateY: -3 }}
                  className="relative bg-white/70 backdrop-blur-2xl border border-white/40 shadow-lg hover:shadow-[0_10px_35px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-2xl p-8"
                >
                  <h3 className="text-3xl font-bold text-[#3e66f3] mb-3">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </motion.div>
              </div>

              <div className="relative flex justify-center items-center w-8 h-8">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      // "0 0 0px #FF4C4C",

                      // 4C6BFF
                      "0 0 0px #FF4C4C",
                      "0 0 25px #FF4C4C",
                      "0 0 0px #FF4C4C",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  // className="absolute w-5 h-5 bg-gradient-to-br from-[#0E76CD] to-[#FF4C4C] border-4 border-white rounded-full"
                  // 73bbff
                  className="absolute w-5 h-5 bg-gradient-to-br from-[#0E76CD] to-[#FF4C4C] border-4 border-white rounded-full"
                ></motion.div>
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none"></div>
      </section>

      <section className=" py-10  px-6 lg:px-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 border rounded-2xl p-6 border-[#3e66f3] bg-[#f9fafc] ">
            <div className="flex  ">
              <h2 className="poppins text-[30px] lg:text-[35px] text-center md:text-start  ">
                Accelerating Your{" "}
                <span className="text-[#3e66f3] font-semibold ">
                  {" "}
                  Business Growth{" "}
                </span>
                with
                <span className="text-[#3e66f3] font-semibold ">
                  {" "}
                  Strategic Insights{" "}
                </span>
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex">
                <p className="open-sans text-[16px] text-gray-700  text-center md:text-start  ">
                  We’re not just a digital agency we’re your growth
                  partners.With a mix of creativity, data, and smart technology,
                  we help brands stand out, scale faster, and stay ahead in an
                  ever-changing digital world.
                </p>
              </div>
              <div className="flex justify-center md:justify-start ">
                <Link href="/services">
                  <button className="poppins relative bg-[#1D4ED8] inline-flex items-center justify-center px-2 py-3 md:px-4 md:py-3 text-[16px] gap-2 rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    {/* Text */}
                    <span className="relative z-20 text-[16px]">
                      Explore More
                    </span>

                    {/* Arrow */}
                    <div className="relative z-20 text-white">
                      <FaArrowRightLong />
                    </div>

                    {/* Hover overlay */}
                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className=" container mx-auto py-10 px-6 lg:px-20 space-y-10">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col ">
            <h2 className="poppins text-[35px] lg:text-[38px] font-bold text-center  text-[#3e66f3]">
              Our Presence
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-30 bg-[#3e66f3] border"></div>
            </div>
          </div>
          <p className="open-sans text-center px-2 max-w-4xl mx-auto">
            We’re proud to have a strong presence across multiple locations,
            with branches in Jaipur, Delhi and Kolkata. Each branch is fully
            equipped to assist our clients with the same level of
            professionalism, service quality, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
          {/* jaipur */}
          <div className="w-full flex flex-col gap-6 border bg-blue-50 border-gray-300 shadow-xl rounded-xl p-4">
            {/* Image at the top */}
            <div className="flex w-full justify-center ">
              <Image
                src="/images/hawa.jpg"
                alt="Jaipur"
                width={350}
                height={160}
                className="  rounded-xl object-cover h-40"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              {/* Title */}
              <h2 className="text-2xl font-bold text-center ">Jaipur</h2>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <p className="text-center text-sm ">
                  22, 3rd Floor, Biswa Nagar,
                </p>
                <p className="text-center text-sm ">
                  New Sanganer Road, Jaipur,
                </p>
                <p className="text-center text-sm ">
                  Rajasthan, India - 302019
                </p>
              </div>
            </div>
          </div>

          {/* Delhi */}
          <div className="w-full flex flex-col gap-6 border bg-blue-50 border-gray-300 shadow-xl rounded-xl p-4">
            {/* Image at the top */}
            <div className="flex w-full justify-center ">
              <Image
                src="/images/fortred.png"
                alt="Delhi"
                width={350}
                height={160}
                className="  rounded-xl object-cover h-40 "
              />
            </div>

            <div className="flex flex-col gap-2 ">
              {/* Title */}
              <h2 className="text-2xl font-bold text-center ">Delhi</h2>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <p className="text-center text-sm ">
                  F-9 Usha Chambers, Deep Central Market,
                </p>
                <p className="text-center text-sm ">Ashok Vihar, Phase-1,</p>
                <p className="text-center text-sm ">
                  Delhi, (India). Pin - 110052
                </p>
              </div>
            </div>
          </div>

          {/* Kolkata */}
          <div className="w-full flex flex-col gap-6 border bg-blue-50 border-gray-300 shadow-xl rounded-xl p-4">
            {/* Image at the top */}
            <div className="flex w-full justify-center ">
              <Image
                src="/images/victoria.jpg"
                alt="Jaipur"
                width={350}
                height={160}
                className="  rounded-xl object-cover h-40"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              {/* Title */}
              <h2 className="text-2xl font-bold text-center ">Kolkata</h2>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <p className="text-center text-sm ">136 Jessore Road,</p>
                <p className="text-center text-sm ">Kolkata,</p>
                <p className="text-center text-sm ">
                  West Bengal, (India)-700055
                </p>
              </div>
            </div>
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
        <div className="relative flex flex-col md:flex-row bg-linear-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px]  max-w-6xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden justify-between">
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
                <h3 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Improve Your Customer Experience
                </h3>
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

      {/* FAQs */}
      <section className="  flex justify-center items-center py-10 px-4 lg:px-0">
        <div className="w-full max-w-5xl mx-auto  bg-[#f9fafc] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white  border border-gray-100 rounded-xl py-4 px-4  sm:px-4 ">
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
    </div>
  );
}

export default page;
