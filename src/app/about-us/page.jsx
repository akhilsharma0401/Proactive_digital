"use client";
// default
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

// components
import ParticleBackground from "../components/ParticleBackground";

// images
import hero4 from "../../../public/images/hero4.jpeg";
import client from "../../../public/images/client.jpg";
import aboutMission01 from "../../../public/images/aboutMission01.jpg";
import aboutMission02 from "../../../public/images/aboutMission02.jpg";
import aboutMission03 from "../../../public/images/aboutMission03.jpg";
import aboutScrollingText from "../../../public/images/aboutScrollingText.jpg";

// lottie animation
import rocket from "../../../public/animation/rocket.json";

// icons
import operationalsystem from "../../../public/icons/operationalsystem.png";
import chat from "../../../public/icons/chat.png";
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
    title: " Digital Growth",
    description:
      "We design impactful websites and offer digital marketing solutions that help businesses grow online and achieve success.",
    link: "/contact-us",
    image: aboutDigitalGrowth,
  },
  {
    id: 2,
    title: "Built with Precision",
    description:
      "Every solution is crafted with care, ensuring high performance, seamless usability, and long-term brand value that stands out.",
    link: "/contact-us",
    image: aboutBuiltWithPresison,
  },
  {
    id: 3,
    title: "Scalable. Effective.",
    description:
      "Our web and digital marketing solutions adapt as your business grows, ensuring a smooth, scalable, and future-ready presence.",
    link: "/contact-us",
    image: aboutScalable,
  },
  {
    id: 4,
    title: "Trustable Partners",
    description:
      "We support you beyond launch helping your digital presence remain strong, relevant, and impactful at every stage of growth.",
    link: "/contact-us",
    image: aboutTrustablePartners,
  },
];

// our mission
const visionData = [
  {
    number: "01",
    title: "Envision",
    text: "We envision a digital-first world, empowering businesses to grow. Innovate. Connect and Transform.",
    img: aboutMission01,
  },
  {
    number: "02",
    title: "Transform",
    text: "We transform ideas into impactful digital experiences, crafting websites that inspire, engage, and deliver results.",
    img: aboutMission02,
  },
  {
    number: "03",
    title: "Growth",
    text: "We drive measurable growth through smart marketing, helping brands expand their reach and achieve lasting success.",
    img: aboutMission03,
  },
];

function page() {
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

  const timelineData = [
    {
      id: 1,
      date: "2008",
      description:
        "Proactive Solution Services began with a vision delivering Bulk SMS and voice solutions that laid the foundation for future innovations.",
      iconBg: "#BCD2E8",
      contentStyle: {
        // background: '#F3F7FC',
        background: "#D6E4FA",
        color: "#000",
        borderRadius: "15px",

        // boxShadow: ' #b7afaf 0px 6px 8px'
      },
      contentArrowStyle: {
        border: "9px solid #C0C9EE",
      },
    },
    {
      id: 2,
      date: "2010",
      description:
        " We stepped into web development and digital marketing, helping businesses build stronger digital identities and measurable growth online.",
      iconBg: "#aed6f1",
      contentStyle: {
        background: "#CFE6FC",
        color: "#000",
        borderRadius: "15px",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(245, 158, 11)",
      },
    },
    {
      id: 3,
      date: "2012",
      description:
        " Our story expanded to Delhi, where we partnered with trusted names like Meru, Godrej, and Elegant Group, strengthening our reputation.",
      iconBg: "#B6D0F2",
      contentStyle: {
        // background: "#A3B9F0",
        background: "#90CAF9",
        color: "#000",
        borderRadius: "15px",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(16, 185, 129)",
      },
    },
    {
      id: 4,
      date: "2018",
      description:
        " A decade of dedication turned into achievement our team grew beyond 30 members, serving 250+ clients with reliable, scalable solutions.",
      iconBg: "#89c5fd",
      contentStyle: {
        // background: "#91BBF2",
        background: "#D6EAF8",
        color: "#000",
        borderRadius: "15px",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(236, 72, 153)",
      },
    },
    {
      id: 5,
      date: "2021",
      description:
        " We sharpened our focus on digital marketing and Google Ads, driving ROI-focused campaigns that exceeded performance benchmarks.",
      // iconBg: "#0229bf",
      iconBg: "#85c1e9",
      contentStyle: {
        // background: "#72A9F2",
        background: "#CCE5FF",
        color: "#000",
        borderRadius: "15px",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(139, 92, 246)",
      },
    },
    {
      id: 6,
      date: "2024",
      description:
        " A landmark chapter Launch of Celitix  , our CPaaS Platform unifying WhatsApp API, Chatbots, RCS, SMS, and more into one ecosystem for modern business communication.",
      // iconBg: "#011f99",
      iconBg: "#3498db",
      contentStyle: {
        // background: "#5DADE2",
        background: "#AEDFF7",
        color: "#000",
        borderRadius: "15px",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(239, 68, 68)",
      },
    },
  ];

  // without element text scroll animation start

  // // 1. Create a ref for the main container
  // const containerRef = useRef(null);

  // const lines = [
  //   'Fuel Your', // Line 1 (Odd: Move from Left)
  //   'Business',  // Line 2 (Even: Move from Right)
  //   'Expansion', // Line 3 (Odd: Move from Left)
  // ];

  // useEffect(() => {
  //   // Select all the 'Text-Line' divs within the main container
  //   const linesToAnimate = gsap.utils.toArray(".text-line", containerRef.current);

  //   // Set the initial properties based on odd/even index
  //   linesToAnimate.forEach((line, index) => {
  //       const isOdd = index % 2 === 0; // index 0, 2 are odd-positioned lines
  //       const initialX = isOdd ? -100 : 100; // -100px for Left (Odd), 100px for Right (Even)

  //       // Use gsap.set for initial state (hidden and positioned)
  //       gsap.set(line, {
  //           x: initialX,
  //           opacity: 0
  //       });
  //   });

  //   // 2. Create the main GSAP timeline
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current, // The section that triggers the animation
  //       start: 'top 85%',             // Start when the top of the element hits 85% down the viewport
  //       end: 'bottom top',            // Defines the end of the scroll area (optional, but good practice)
  //       // **Crucial for repeatable animation:**
  //       // play: on enter, reverse: on leave, none: on enter back, reverse: on leave back
  //       toggleActions: 'play reverse play reverse',
  //       // markers: true, // Uncomment for debugging
  //     },
  //   });

  //   // 3. Define the animation for all lines in the timeline
  //   // The animation moves them from their initial x/opacity set above, to x: 0 and opacity: 1
  //   tl.to(linesToAnimate, {
  //     x: 0,          // Move to original position (center)
  //     opacity: 1,    // Fade in
  //     duration: 1,
  //     ease: 'power2.out',
  //     // Apply stagger to all lines at once for the sequential timing
  //     stagger: 0.15
  //   });

  //   // Clean up function using GSAP context for better memory management
  //   const ctx = gsap.context(() => {}, containerRef);
  //   return () => ctx.revert();
  // }, []);

  // without element text scroll animation ends

  const containerRef = useRef(null);
  const lines = [
    "Fuel Your", // Line 1 (Odd: Move from Left)
    "Business", // Line 2 (Even: Move from Right)
    "Expansion", // Line 3 (Odd: Move from Left)
  ];

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

  const features = [
    {
      id: "01",
      title: "Businesses",
      desc: "Start publish listings to show everyone the details and goodies of your establishment.",
      img: "https://cdn-icons-png.flaticon.com/128/921/921591.png",
    },
    {
      id: "02",
      title: "Customers",
      desc: "Easily find interesting places by local experts, save time by checking listing features.",
      img: "https://cdn-icons-png.flaticon.com/512/3414/3414151.png",
    },
    {
      id: "03",
      title: "Feedback",
      desc: "Visitors discuss listings to share experiences, so businesses get reputation consolidated.",
      img: "https://cdn-icons-png.flaticon.com/512/3412/3412953.png",
    },
    {
      id: "04",
      title: "Feedback",
      desc: "Visitors discuss listings to share experiences, so businesses get reputation consolidated.",
      img: "https://cdn-icons-png.flaticon.com/512/3412/3412953.png",
    },
  ];

  return (
    <div>
      {/* hero section */}
      {/* <section className="bg-[linear-gradient(to_right_top,#e7eaf8,#eff0f9)] relative"> */}
      <section
        className="bg-[#e0ecff] relative bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage: "url('/images/aboutBg03.png')",
        // }}
      >
        <div className="relative w-full py-12 overflow-hidden">
          {/* Particle Background */}
          <ParticleBackground />

          <div className="relative flex flex-col gap-10 justify-center items-center h-full w-full z-10 py-10 px-5 ">
            {/* title */}
            <div className="flex flex-col gap-4 text-center max-w-6xl">
              {/* title */}
              <p className="poppins text-[#3e66f3] font-semibold text-[20px] lg:text-[22px] ">
                OUTSMART YOUR COMPETITORS{" "}
              </p>
              <h2 className="poppins text-[38px] lg:text-[42px] font-semibold text-black leading-sung">
                Proactive Professional Services{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent ">
                  Turning ideas into Reality.{" "}
                </span>
                To Make an Impact,{" "}
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent inline-block">
                  Strategy Matters.
                </span>
              </h2>

              {/* description */}
              <div className="hidden md:block">
                <p className="open-sans text-[14px] md:text-[20px] text-gray-800 text-center">
                  We Grown Brands Online Custom Website, Branding and Digital
                  Marketing
                </p>

                <p className="open-sans text-[14px] md:text-[20px] text-gray-800 text-center">
                  Your one-stop destination for all digital solutions.
                </p>
              </div>
            </div>

            {/* button */}
            <div>
              <Link href="/contact-us">
                <button className="poppins relative bg-[#3e66f3] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                  <span className="relative z-10 text-[16px]">Learn More</span>
                  <span className="absolute left-0 top-1/2 w-full h-[0px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card section */}
        {/* <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-full px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-black ">
            <div className="group bg-gray-100 flex flex-col p-4 justify-center items-center rounded-lg">
              <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out">
                <Image
                  src={operationalsystem}
                  width={40}
                  height={40}
                  alt="icon"
                  className="transition-transform duration-1000 group-hover:rotate-y-180"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center text-center md:text-left">
                <h2 className="poppins text-center text-black text-lg ">
                  Driving Digital Growth
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  We design powerful Digital experiences from websites and apps to marketing and communication tools that help businesses Grow online and Achieve measurable results.
                </p>
              </div>
            </div>
            <div className="group bg-gray-100 flex flex-col p-4 justify-center items-center rounded-lg">
              <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out">
                <Image
                  src={operationalsystem}
                  width={40}
                  height={40}
                  alt="icon"
                  className="transition-transform duration-1000 group-hover:rotate-y-180"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center text-center md:text-left">
                <h2 className="poppins text-center text-black text-lg ">
                  Built with Precision

                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Every solution is crafted with detail, ensuring top-notch performance, usability, and long-term value to make your brand stand out.
                </p>
              </div>
            </div>
            <div className="group bg-gray-100 flex flex-col p-4 justify-center items-center rounded-lg">
              <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out">
                <Image
                  src={operationalsystem}
                  width={40}
                  height={40}
                  alt="icon"
                  className="transition-transform duration-1000 group-hover:rotate-y-180"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center text-center md:text-left">
                <h2 className="poppins text-center text-black text-lg ">
                  A Partner You Can Trust
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  We go beyond launch working with you at every stage so your digital presence stays strong, relevant, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Half Circle cards */}
      {/* <section className=" pt-10 pb-40 overflow-hidden ">
        <div className="max-w-7xl mx-auto space-y-10">

          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              <span className="heroTextGredient">Features </span>
            </h2>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 sm:gap-28 md:gap-36 lg:gap-10 px-4 sm:px-6 lg:px-8">
            {features.map((f) => (
              <div
                key={f.id}
                className="relative flex flex-col items-center text-center group gap-8 sm:gap-10"
              >
 
                <div className="absolute top-14 sm:top-16 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 border-[4px] sm:border-[5px] md:border-[6px] border-blue-500 rounded-full border-l-transparent border-t-transparent -rotate-45"></div>

                <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center z-10 [perspective:1000px]">
                  <div className="relative w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                     
                    <img
                      src={f.img}
                      alt={f.title}
                      className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                    />
                     
                    <img
                      src={f.img}
                      alt={f.title}
                      className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    />
                  </div>
                </div>

                
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-68">
                   
                  <div className="bg-white px-4 sm:px-5 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
                    <span className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-xs sm:text-sm font-semibold">
                      {f.id}
                    </span>
                    <span className="poppins font-semibold text-gray-800 text-sm sm:text-base">
                      {f.title}
                    </span>
                  </div>

                  
                  <p className="open-sans px-10 sm:px-4 text-gray-600 text-sm md:text-base sm:max-w-xs">
                    {f.desc}
                  </p>
                </div>

                 
                <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-20 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-lg animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="container mx-auto py-12 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {hoverCards.map((card) => (
            <div key={card.id} className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-[#3e66f3] scale-100 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:rotate-[10deg]" />

              <div className="relative z-10 flex flex-col gap-4 p-6 lg:p-4 2xl:p-6 bg-white rounded-2xl shadow-md">
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

                <div className="flex flex-col gap-3 text-center  ">
                  <h3 className="poppins text-[22px] font-medium text-[#3e66f3]">
                    {card.title}
                  </h3>
                  <p className="open-sans text-[16px] text-gray-600 text-justify">
                    {card.description}
                  </p>
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

      {/* OUR Mission  Flip cards */}
      {/* <section
        className="w-full mx-auto py-10 px-4 bg-[#eff0f9] sm:px-6 lg:px-0"
        // style={{
        //   backgroundImage: "url('/images/diagonalStripes.svg')", // place svg in public folder
        //   backgroundRepeat: "repeat",
        //   backgroundSize: "auto",
        // }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[35px] font-semibold text-[#3e66f3] text-center mb-10">
            Our Mission
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
 
                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard12.jpg')] bg-cover px-4 rounded-xl shadow-xl">
                  <h3 className="text-2xl pt-15 font-bold text-white text-center">
                    Driving Digital Growth
                  </h3>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard11.jpg')] bg-cover rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-lg text-center leading-relaxed">
                    We design impactful websites and offer digital marketing
                    solutions that help businesses grow online and achieve
                    measurable success.
                  </p>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard10.jpg')] bg-cover rounded-xl shadow-xl ">
                  <h3 className="text-2xl pt-15 font-bold text-white text-center">
                    Built with Precision
                  </h3>

                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard11.jpg')] bg-cover rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-lg text-center leading-relaxed">
                    Every solution is crafted with care, ensuring high
                    performance, seamless usability, and long-term brand value
                    that stands out.
                  </p>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard14.jpg')] bg-cover rounded-xl shadow-xl px-4">
                  <h3 className="text-2xl font-bold pt-15 text-white text-center">
                    Simple & Scalable
                  </h3>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard11.jpg')] bg-cover rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    Our web and digital marketing solutions adapt as your
                    business grows, ensuring a smooth, scalable, and
                    future-ready presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">


                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard15.jpg')] bg-cover rounded-xl shadow-xl px-6 ">
                  <h3 className="text-2xl font-bold pt-15 text-white text-center">
                    Trustable Partners
                  </h3>
                </div>

                <div className="absolute inset-0 w-full h-full backface-hidden bg-[url('/images/bgCard11.jpg')] bg-cover rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    We support you beyond launch helping your digital presence
                    remain strong, relevant, and impactful at every stage of
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </section> */}

      {/* text on scroll */}
      <section>
        <div
          ref={targetRef}
          className="p-8 sm:p-12 md:p-16 w-full flex justify-center mx-auto overflow-hidden bg-cover bg-center"
          // style={{ backgroundImage: `url(${})` }}
        >
          <div className="flex flex-col space-y-6 sm:space-y-20 md:space-y-10">
            <motion.div
              style={{ x: xFuelYour }}
              className="flex justify-between items-start gap-4"
            >
              <h1
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-none ${textColor}`}
              >
                Fuel Your
              </h1>
              <Link href="/contact-us">
                <button className="poppins relative border border-gray-600 text-blue-600 inline-flex items-center justify-center lg:mt-10 mt-0 md:mt-6 px-5 py-2 md:px-8 md:py-3 text-[20px] rounded-full cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                  <span className="relative z-10 text-[16px]">🡥</span>
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
      {/* <div className="text-white p-4 ">

        <div id="section-0">
         
          <div className=" items-center justify-center flex">
            <div className="h-full w-full max-w-7xl mx-auto md:p-18 mt-18 md:mt-8 lg:mt-5  grid grid-cols-1 md:grid-cols-[40%_60%] gap-6  text-[18px] bg-[#f5f9ff]">
              <div className="text-center text-black flex justify-around gap-6 ">
                <div className="text-[100px] font-bold text-transparent stroke-black stroke-[1px]">
                  01
                </div>
                <div className="text-[16px] md:text-[22px] poppins text-gray-400 mt-18">
                  Mission{" "}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 ">
                <div className="poppins text-[20px] lg:text-[30px] text-black mt-6">
                  <h1>
                    We envision a digital-first world, empowering businesses to
                    grow.Innovate. Connect and Transform.
                  </h1>
                </div>
                <div className="h-full max-w-2xl">
                  <Image
                    src={hero4}
                    alt="our mission"
                    className="rounded-2xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

 
        <div id="section-1">
          <div className=" items-center justify-center flex">
            <div className="h-full w-full max-w-7xl mx-auto md:p-18 mt-18 md:mt-8 lg:mt-5 grid grid-cols-1 md:grid-cols-[40%_60%]  text-[18px] bg-[#f5f9ff]">
              <div className="text-center text-black flex justify-around mr-8 ">
                <div className="text-[100px] font-bold text-transparent stroke-black stroke-[1px]">
                  02
                </div>
                <div className="text-[16px] md:text-[22px] poppins text-gray-400 mt-18">
                  Mission{" "}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 ">
                <div className="poppins text-[28px] lg:text-[30px] text-black mt-6">
                  <h1>
                    We transform ideas into impactful digital experiences,
                    crafting websites that inspire, engage, and deliver results.
                  </h1>
                </div>
                <div className="h-full max-w-2xl">
                  <Image
                    src={hero4}
                    alt="our mission"
                    className="rounded-2xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div id="section-2">
          <div className=" items-center justify-center flex">
            <div className="h-full w-full max-w-7xl mx-auto sm:p-10 md:p-18 mt-24 grid grid-cols-1 md:grid-cols-[40%_60%]  text-[18px] bg-[#f5f9ff]">
              <div className="text-center text-black flex justify-around mr-8 ">
                <div className="text-[100px] font-bold text-transparent stroke-black stroke-[1px]">
                  03
                </div>
                <div className="text-[16px] md:text-[22px]  poppins text-gray-400 mt-18">
                  Mission{" "}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 max-w-2xl">
                <div className="poppins text-[20px] lg:text-[30px] text-black mt-6">
                  <h1>
                    We drive measurable growth through smart marketing, helping
                    brands expand their reach and achieve lasting success.
                  </h1>
                </div>
                <div className="h-full">
                  <Image
                    src={hero4}
                    alt="our mission"
                    className="rounded-2xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="text-white p-4">
        {visionData.map((item, index) => (
          <div id={`section-${index}`} key={index} className="my-10">
            <div className="items-center justify-center flex">
              <div className="h-full w-full max-w-7xl mx-auto sm:p-10 md:p-18 mt-10 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 text-[18px] bg-[#f5f9ff]">
                {/* Number + Title */}
                <div className="text-center text-black flex gap-6 justify-around mr-8">
                  <div className="text-[100px] font-bold text-transparent stroke-black stroke-[1px]">
                    {item.number}
                  </div>
                  <div className="text-[16px] md:text-[22px] poppins text-[#3e66f3] mt-18">
                    {item.title}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-8 max-w-2xl">
                  <div className="poppins text-[20px] lg:text-[30px] text-black mt-6">
                    <h1>{item.text}</h1>
                  </div>

                  <div className="h-full">
                    <Image
                      src={item.img}
                      alt="our mission"
                      className="rounded-2xl object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* // scrolling text */}
      {/* <div className="flex flex-col items-center justify-center h-[100vh] bg-white">
        <div className="flex-grow"></div> 
      <div 
        ref={containerRef} 
        className="max-w-4xl px-4"
      >
        <div className="text-left leading-none text-black">
          {lines.map((line, index) => (
            // Apply the shared class 'text-line' for GSAP to target
            // Use 'text-center' to align the text within its own block for a clean movement
            <div 
              key={index} 
              className="text-line text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#110134] overflow-hidden whitespace-nowrap" 
            >
              {line}
            </div>
          ))}
        </div>
        
        <button 
          className="mt-8 ml-auto w-16 h-16 border-2 border-[#110134] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#110134] group"
          aria-label="Expand Business"
        >
          <svg 
            className="w-6 h-6 text-[#110134] transition-colors duration-300 group-hover:text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        <div className="flex items-center mt-4">
            <div className="w-48 h-24 bg-gray-200 rounded-lg shadow-md mr-4 overflow-hidden">
            </div>
        </div>

      </div>
      <div className="flex-grow"></div> 
    </div> */}

      {/* without element text scroll animation */}
      {/* <div ref={containerRef} className="flex flex-col items-center justify-center py-10  bg-white"
                     style={{
          backgroundImage: "url('/images/bg-img.png')", // place svg in public folder
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          
        }}
      
      >
        <div className="flex-grow"></div>
        <div
          
          className="max-w-4xl px-4 lg:px-0  flex flex-col justify-center"
        >
          <div className="text-left text-black flex flex-col justify-center ">
            {lines.map((line, index) => (
              // Use 'overflow-hidden' on the parent of the lines to prevent scrollbar issues
              <div
                key={index}
                // The 'text-line' class is what GSAP targets
                className="text-line text-7xl md:text-8xl lg:text-9xl font-semibold text-[#110134] whitespace-nowrap flex flex-col justify-center"
              >
                {line}
              </div>
            ))}
          </div>

          <button
            className="mt-8 ml-auto w-14 h-14 border-2 border-[#110134] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#110134] group"
            aria-label="Expand Business"
          >
            <svg
              className="w-6 h-6 text-[#110134] transition-colors duration-300 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
        <div className="flex-grow"></div>
      </div> */}

      {/* Timeline */}
      {/* bg-[radial-gradient(circle_at_20%_20%,#f9fbff_0%,#eef6ff_40%,#f7f9ff_90%)] */}
      <section className="relative py-10 lg:py-12 px-6 md:px-16  overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-[#0E76CD]/40 to-[#FF4C4C]/25 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -25, 25, 0], y: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF4C4C]/25 to-[#0E76CD]/30 rounded-full blur-[160px]"
        />

        <div className="relative text-center mb-24 z-10">
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
              className={` mb-10 lg:mb-20 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
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

      {/* Timeline Section */}
      {/* <div
        className="h-auto  py-10 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')", // place svg in public folder
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#3e66f3] mb-4">
              Our Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small vision to a trusted web and digital marketing
              solutions provider, our journey is built on innovation, growth .
            </p>
          </div>

          <VerticalTimeline lineColor="#000">
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  ...item.contentStyle,
                  background: "transparent",
                  boxShadow: "none",
                  padding: "0",
                }}
                contentArrowStyle={{ display: "none" }}
                date={item.date}
                iconStyle={{
                  background: item.iconBg,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",

                  // justifyContent: 'center',
                  // width: '30px',
                  // height: '30px',
                  // marginLeft: '-15px' // keeps it aligned with timeline line
                }}
                icon={item.icon}
              >
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  viewport={{ once: false, amount: 0.3 }} // re-trigger on scroll up or down
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    background: item.contentStyle.background,
                    borderRadius: item.contentStyle.borderRadius || "8px",
                    padding: "12px",
                    color: item.contentStyle.color,
                    position: "relative",
                    // boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                    boxShadow: "rgba(183, 175, 175, 1) 0px 6px 8px",
                  }}
                >
                  <p className="text-base opacity-95 ">{item.description}</p>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

        </div>

        <style jsx global>{`
          .vertical-timeline-element-icon {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: rgba(183, 175, 175, 1) 0px 6px 8px !important;
            border: 2px solid #fff !important;
          }

          .vertical-timeline-element-icon > * {
            display: none !important;
          }

          .vertical-timeline-element-content p {
            margin: 0px;
          }

          .vertical-timeline-element-date {
            font-size: 1.5rem !important;
            top: -8px !important;
            color: #000;
            opacity: 1 !important;
          }

          .vertical-timeline::before {
            width: 2px; 
          }
        `}</style>
      </div> */}

      <section className=" py-10  px-6 lg:px-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 border-1 rounded-2xl p-6 border-[#3e66f3] bg-gray-50 ">
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
            <h1 className="poppins text-[35px] lg:text-[38px] font-bold text-center  text-[#3e66f3]">
              Our Branches
            </h1>
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
            <div className="flex w-full justify-center">
              <Image
                src="/images/hawa.jpg"
                alt="Jaipur"
                width={350}
                height={160}
                className="  rounded-xl object-cover "
              />
            </div>

            <div className="flex flex-col gap-2">
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
            <div className="flex w-full justify-center">
              <Image
                src="/images/fortred.png"
                alt="Jaipur"
                width={350}
                height={160}
                className="  rounded-lg object-cover "
              />
            </div>

            <div className="flex flex-col gap-2">
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
            <div className="flex w-full justify-center">
              <Image
                src="/images/victoria.jpg"
                alt="Jaipur"
                width={350}
                height={160}
                className="  rounded-lg object-cover "
              />
            </div>

            <div className="flex flex-col gap-2">
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
        }}
      >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px]  max-w-6xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden justify-between">
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
    </div>
  );
}

export default page;
