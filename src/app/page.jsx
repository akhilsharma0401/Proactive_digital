"use client";
// pre Build
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import HeroWebteck from "./components/extra.jsx";
import Typewriter from "typewriter-effect";
import rocket from "../../public/animation/rocket.json";
import Lottie from "lottie-react";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// circular progressBar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeCubicInOut } from "d3-ease";
import AnimatedProgressProvider from "./components/AnimatedProgressBar/AnimatedProgressProvider";
import "react-circular-progressbar/dist/styles.css";

// files OR Components
import { useScrollAnimation } from "./helpers/gsap";

// icons
import mindset from "../../public/icons/mindset.png";
import homeIconWebSolutions from "../../public/icons/homeIconWebSolutions.png";
import homeIconDigitalMarketing from "../../public/icons/homeIconDigitalMarketing.png";
import homeIconCpassSolution from "../../public/icons/homeIconCpassSolution.png";
import homeIconWebDesign from "../../public/icons/homeIconWebDesign.png";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import {
  FaClipboardList,
  FaProjectDiagram,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

// images
import hero2 from "../../public/images/hero2.webp";
import whyChooseUs from "../../public/images/whyChooseUs.webp";
import service_bg_2 from "../../public/images/service_bg_2.jpg";
import homeHero1 from "../../public/images/homeHero1.jpg";
import homeHero2 from "../../public/images/homeHero2.jpg";
import homeHero3 from "../../public/images/homeHero3.jpg";
import homeHero4 from "../../public/images/homeHero4.jpg";
import homeHero5 from "../../public/images/homeHero5.jpg";
import homeHero6 from "../../public/images/homeHero6.jpg";
import homeHero7 from "../../public/images/homeHero7.jpg";
import homeHero8 from "../../public/images/homeHero8.jpg";
import homeHero9 from "../../public/images/homeHero9.jpg";
import homeHero10 from "../../public/images/homeHero10.png";

import HeroExpand from "./components/HeroExpand.jsx";

// Our Benifits
import { CircularBenefits } from "./components/CircularBenefits";
import FaqItem from "./components/FaqItem.jsx";
import BookDemoDialog from "./components/BookDemoDialog";

const Benefits = [
  {
    title: "End-to-End Growth Management",
    des: "We plan, build, and manage every aspect of your digital growth, ensuring your website evolves seamlessly with your business needs.",
    // designation: "Restaurant Critic",
    src: "/images/homeBenifits1.jpg",
  },
  {
    title: "Custom Web Design for Every Client",
    des: "Every site is uniquely designed to match your goals, with flexible options and tailored features that reflect your brand identity.",
    // designation: "Frequent Visitor",
    src: "/images/homeBenifits2.jpg",
  },
  {
    title: "High-Performance & Scalable Platform",
    des: "Our platform powers fast, reliable, and scalable websites that adapt to your growth while delivering consistent top-level performance.",
    // designation: "Satisfied Customer",
    src: "/images/homeBenifits3.jpg",
  },
  {
    title: "Modern Features & Seamless Integration",
    des: "From UI/UX design to WordPress and advanced tools, we integrate modern features to create websites that look great and work flawlessly.",
    // designation: "Satisfied Customer",
    src: "/images/homeBenifits4.jpg",
  },
];
// Our Benifits Ends

import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/ui/marquee";
import { Marquee } from "./components/marquee";

const reviews = [
  {
    name: "@jack",
    // img: "https://www.cio.com/wp-content/uploads/2023/05/digital-marketing-ts-100598676-orig-2.jpg?quality=50&strip=all",
    img: homeHero1,
  },
  {
    name: "@jill",
    img: homeHero2,
  },
  {
    name: "@john",
    img: homeHero3,
  },
  {
    name: "@jack",
    img: homeHero4,
  },
  {
    name: "@jill",
    img: homeHero5,
  },
  {
    name: "@john",
    img: homeHero6,
  },
  {
    name: "@jack",
    img: homeHero7,
  },
  {
    name: "@jill",
    img: homeHero8,
  },
  {
    name: "@jack",
    img: homeHero9,
  },
  {
    name: "@jill",
    img: homeHero10,
  },
];

const middle = Math.ceil(reviews.length / 2);

const firstRow = reviews.slice(0, middle); // first 5
const secondRow = reviews.slice(middle); // next 5

const ImageCard = ({ img }) => {
  return (
    <div
      className={cn(
        "relative md:w-56 xl:h-64 xl:w-60 overflow-hidden rounded-xl border"
      )}
    >
      <Image
        src={img}
        alt=""
        width={300}
        height={350}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default function Home() {
  // // For Hero Section
  // const container1Ref = useRef(null);
  // const container2Ref = useRef(null);
  // const mobileContainerRef = useRef(null);

  // useEffect(() => {
  //   const container1 = container1Ref.current;
  //   const container2 = container2Ref.current;
  //   const mobileContainer = mobileContainerRef.current;

  //   let animationId1, animationId2, animationId3;
  //   let position1 = 0;
  //   let position2 = 0;
  //   let position3 = 0;

  //   const animate1 = () => {
  //     position1 -= 0.6;
  //     const maxScroll = container1.scrollHeight / 2;

  //     if (Math.abs(position1) >= maxScroll) {
  //       position1 = 0;
  //     }

  //     container1.style.transform = `translateY(${position1}px)`;
  //     animationId1 = requestAnimationFrame(animate1);
  //   };

  //   const animate2 = () => {
  //     position2 += 0.6;
  //     const maxScroll = container2.scrollHeight / 2;

  //     if (position2 >= maxScroll) {
  //       position2 = 0;
  //     }

  //     container2.style.transform = `translateY(${-position2}px)`;
  //     animationId2 = requestAnimationFrame(animate2);
  //   };

  //   const animate3 = () => {
  //     position3 -= 0.5;
  //     const maxScroll = mobileContainer.scrollWidth / 2;

  //     if (Math.abs(position3) >= maxScroll) {
  //       position3 = 0;
  //     }

  //     mobileContainer.style.transform = `translateX(${position3}px)`;
  //     animationId3 = requestAnimationFrame(animate3);
  //   };

  //   animate1();
  //   animate2();
  //   animate3();

  //   return () => {
  //     cancelAnimationFrame(animationId1);
  //     cancelAnimationFrame(animationId2);
  //     cancelAnimationFrame(animationId3);
  //   };
  // }, []);

  // opposite direction
  //  const column1Ref = useRef(null);
  //   const column2Ref = useRef(null);

  //   useEffect(() => {
  //     const col1 = column1Ref.current;
  //     const col2 = column2Ref.current;

  //     let y1 = 0;
  //     let y2 = 0;

  //     function animate() {
  //       y1 -= 0.4; // scroll speed
  //       y2 += 0.4;

  //       col1.style.transform = `translateY(${y1}px)`;
  //       col2.style.transform = `translateY(${y2}px)`;

  //       // reset to loop infinitely
  //       if (Math.abs(y1) > col1.scrollHeight / 2) y1 = 0;
  //       if (Math.abs(y2) > col2.scrollHeight / 2) y2 = 0;

  //       requestAnimationFrame(animate);
  //     }

  //     animate();
  //   }, []);



  // use Case section (tab section)
  const [imageKey, setImageKey] = useState(0);

  const content = {
    Marketing: {
      title: "Accelerate Growth with Proactive Digital Solutions",
      subtitle: "Drive measurable results through precision-driven campaigns and smart digital strategies.",
      features: [
        {
          name: "Integrated Campaign Builder",
          description: "Design impactful campaigns with a mix of SEO, social media, performance ads, and automation tailored to your goals.",
        },
        {
          name: "Smart Audience Targeting",
          description: "Reach the right audience at the right time with advanced targeting tools and market insights that maximize engagement.",
        },
        {
          name: "Data-Driven Performance",
          description: "Track, analyze, and optimize your marketing efforts in real-time to ensure higher ROI and sustainable growth.",
        },
        {
          name: "Omnichannel Engagement",
          description: "Connect with customers across multiple touchpoints - from WhatsApp and email to social media and web - creating a seamless, unified brand experience that boosts loyalty and conversions.",
        },
      ],
      image: "/images/useCase1.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },

    Solutions: {
      title: "Empowering Business with Proactive Digital Services",
      subtitle: "Helping small and medium businesses grow smarter ",
      features: [
        {
          name: "Website Solutions",
          description: "Build scalable, high-performing platforms with open-source power and e-commerce readiness to support your long-term growth.",
        },
        {
          name: "Website Design",
          description: "Elevate your brand with creative design services-redesigns, branding, PSD to HTML, and UI/UX experiences that connect with customers.",
        },
        {
          name: "Digital Marketing",
          description: "Boost visibility and conversions through SEO, social media, performance ads, and automation that deliver measurable results.",
        },
        {
          name: "CPaaS Solutions",
          description: "Unify communication with WhatsApp Business API, chatbots, RCS, and SMS for faster response times and stronger customer engagement.",
        },
      ],
      image: "/images/useCase4.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact-us ",
    },

    Performance: {
      title: "How Proactive Digital Services Elevate Your Business",
      subtitle: "Drive growth across every aspect of your digital presence.",
      features: [
        {
          name: "More Reviews Shared",
          description: "Encourage satisfied customers to leave positive reviews that strengthen credibility and build trust.",
        },
        {
          name: "Higher Customer Satisfaction",
          description: "Deliver seamless digital experiences that keep customers happy, loyal, and engaged.",
        },
        {
          name: "Stronger Branding",
          description: "Create a powerful online identity with tailored design and marketing that sets you apart from competitors.",
        },
        {
          name: "Better Rankings",
          description: "Boost visibility with advanced SEO and targeted campaigns that push you higher in search results.",
        },
      ],
      image: "/images/useCase2.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },

    Strategy: {
      title: "Build Smarter Strategies with Proactive Digital Solutions",
      subtitle: "Turn ambitious goals into measurable results.",
      features: [
        {
          name: "Roadmap to Success",
          description: "Automate repetitive tasks and workflows to increase efficiency.",
        },
        {
          name: "Stay Ahead of Competitors",
          description: "Leverage advanced digital tools and insights to outperform your competition and capture more market share.",
        },
        {
          name: "Brand Credibility & Authority",
          description: "Strengthen your online presence with strategies that enhance trust, authority, and long-term brand value.",
        },
        {
          name: "Revenue-Driven Growth",
          description: "Maximize ROI with focused strategies designed to improve customer engagement, conversions, and sales.",
        },
      ],
      image: "/images/useCase3.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },
  };

  const tabs = ["Marketing", "Solutions", "Performance", "Strategy"];

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
    setImageKey((prev) => prev + 1);
  };
  // ends use Case section (tab section)
  


  // why Choose Us Image Tilt Effect
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  // image 3D tilt effect
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 25;
    const y = (e.clientY / innerHeight - 0.5) * -25;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    // Reset smoothly
    setTilt({ x: 0, y: 0 });
  };
  // image 3D tilt effect Ends

  // progressBar
  // Create refs for each card
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  // useScrollAnimation hook handles GSAP ScrollTrigger
  const endValue1 = useScrollAnimation(cardRef1, 90);
  const endValue2 = useScrollAnimation(cardRef2, 95);
  // progressBar Ends

  // const logos = [
  //   "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_1.svg",
  //   "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_2.svg",
  //   "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_3.svg",
  //   "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_4.svg",
  //   "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_5.svg",
  //   // Repeat as needed
  // ];

  const logosf = [
    "/icons/dialme.png",
    "/icons/aaoi.png",
    "/icons/aavas.png",
    "/icons/bhel.png",
    "/icons/cardekho.png",
    "/icons/icai.png",
    "/icons/iim.png",
    "/icons/insurancedekho.png",
    "/icons/nagarnigam.png",
    "/icons/nhm.png",
    "/icons/riico.png",
  ];

  // const logoss = [
  //   "/icons/icai.png",
  //   "/icons/iim.png",
  //   "/icons/insurancedekho.png",
  //   "/icons/nagarnigam.png",
  //   "/icons/nhm.png",
  //   "/icons/riico.png",
  // ];

  // hero section images
  // const images = [
  //   {
  //     url: "/images/hero6.jpg",
  //     subTitle: "Marketing",
  //     title: "Driving Growth with Web Solutions and Digital Marketing.",
  //     desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders. ",
  //   },
  //   {
  //     url: "/images/hero3.webp",
  //     subTitle: "Services",
  //     title: "Scalable & Secure Web Development | Smart Digital Solutions",
  //     desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
  //   },
  //   {
  //     url: "/images/hero4.jpeg",
  //     subTitle: "Designing",
  //     title: "Scalable & Secure Web Development | Smart Digital Solutions",
  //     desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOfjWTG5IYvymSXbN19edaQm7F1S16Ppbhw&s",
  //     subTitle: "Development",
  //     title: "Scalable & Secure Web Development | Smart Digital Solutions",
  //     desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
  //   },
  //   {
  //     url: "data:image/jpeg;base64,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",
  //     subTitle: "Marketing",
  //     title: "Scalable & Secure Web Development | Smart Digital Solutions",
  //     desc: "Our team at Proactive Solutions provides web solutions, SEO, PPC, and digital marketing services that transform businesses into leaders.",
  //   },
  // ];

  // CTA form starts
  const [visible, setVisible] = useState(false);
//  CTA Ends

  const [selected, setSelected] = useState(null);
  // const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Marketing");

  // FAQs
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
    {
      question: "Do I need to know anything technical?",
      answer:
        "Not at all. We handle all the technical work, so you can focus on running your business.",
    },
    {
      question: "Do you provide support after the project is done?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure your website and campaigns keep running smoothly.",
    },
  ];
  // FAQs Ends

  return (
    <div className="overflow-hidden">
      {/* Scrolling hero section */}

      <section className="bg-linear-to-b from-[#d0e2ff] to-[#f5f9ff] ">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-4 xl:gap-15 container mx-auto lg:h-[80vh] xl:h-[100vh] 2xl:h-[85vh] items-stretch relative  overflow-hidden ">
          {/* left content */}
          <div className="relative flex items-center justify-center lg:justify-start py-10 xl:py-15 2xl:py-15 px-6 lg:px-10 ">
            <div className="w-full flex flex-col items-center lg:items-start text-center  lg:text-left">
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Proactive Digital Solutions
              </p>

              <h1 className="poppins text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Scalable, Secure & Optimized{" "}
                <span className="text-blue-500 ">Website Development</span> &{" "}
                <span className="text-blue-500 ">Digital Marketing</span>{" "}
                Services
              </h1>

              <p className="open-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                We offer digital solutions from Website Development and Software
                Services to Social Media and Digital Marketing - designed to
                drive innovation and accelerate your brand growth.
              </p>

              <div className=" flex justify-center ">
                <Link href="/contact-us">
                  <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="poppins relative z-10">Book Demo</span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>

            </div>

            <div className="block lg:hidden pointer-events-none  absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-[#d0e2ff] dark:from-background"></div>
          </div>

          <div className="relative flex gap-4 h-[400px] md:h-[500px]  lg:h-full w-full flex-row items-center justify-center overflow-hidden px-2">
            <Marquee vertical className="[--duration:25s]">
              {firstRow.map((review, id) => (
                <ImageCard key={id} img={review.img} />
              ))}
            </Marquee>

            <Marquee reverse vertical className="[--duration:25s]">
              {secondRow.map((review, id) => (
                <ImageCard key={id} img={review.img} />
              ))}
            </Marquee>

            <div className="block lg:hidden pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#d0e2ff] dark:from-background"></div>
            {/* <div className="hidden lg:block pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#f5f9ff] dark:from-background"></div> */}
          </div>
        </div>
      </section>

      {/* vertical scroll hero repeat cards */}
      {/* <section className="bg-gradient-to-b from-[#d0e2ff] to-[#f5f9ff]">
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-15 bg-gradient-to-b from-[#d0e2ff] to-[#f5f9ff] container mx-auto ">
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start py-10 lg:py-0 px-6 lg:px-10 ">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Proactive Digital Solutions
              </p>

              <h1 className="poppins text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Scalable, Secure & Optimized{" "}
                <span className="text-blue-500 ">Website Development</span> &{" "}
                <span className="text-blue-500 ">Digital Marketing</span>{" "}
                Services
              </h1>

              <p className="open-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                We offer digital solutions from Website Development and Software
                Services to Social Media and Digital Marketing - designed to
                drive innovation and accelerate your brand growth.
              </p>

              <div className=" flex justify-center ">
                <Link href="/contact-us">
                  <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="poppins relative z-10">Book a Demo</span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:block hidden " id="desktopAppereance">
            <div className="flex gap-4 justify-center items-start lg:px-12 xl:px-2">
              <div className=" h-[99vh] 2xl:h-[80vh] 3xl:h-[60vh] overflow-hidden">
                <div
                  ref={container1Ref}
                  className="flex flex-col gap-4 scroller"
                >
                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero1}
                      alt="homeHero1"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero2}
                      alt="homeHero2"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero3}
                      alt="homeHero3"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero4}
                      alt="homeHero4"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero5}
                      alt="homeHero5"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero1}
                      alt="homeHero1"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero2}
                      alt="homeHero2"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero3}
                      alt="homeHero3"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero4}
                      alt="homeHero4"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0">
                    <Image
                      src={homeHero5}
                      alt="homeHero5"
                      width={300}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className=" h-[99vh] 2xl:h-[80vh] 3xl:h-[60vh] overflow-hidden">
                <div ref={container2Ref} className="flex flex-col gap-4">
                  <div className=" rounded-2xl  flex-shrink-0 h-60 xl:h-90">
                    <Image
                      src={homeHero6}
                      alt="homeHero6"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero7}
                      alt="homeHero7"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero8}
                      alt="homeHero8"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero9}
                      alt="homeHero9"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero2}
                      alt="homeHero6"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero6}
                      alt="homeHero6"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero7}
                      alt="homeHero7"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero8}
                      alt="homeHero8"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero9}
                      alt="homeHero9"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className=" rounded-2xl  flex-shrink-0  h-60 xl:h-90">
                    <Image
                      src={homeHero6}
                      alt="homeHero6"
                      width={300}
                      height={400}
                      className="h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="mobileAppereance"
            className="block lg:hidden overflow-hidden w-full"
          >
            <div
              ref={mobileContainerRef}
              className="flex flex-row gap-4 whitespace-nowrap"
            >
              <div className=" rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero1}
                  alt="homeCard1"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero2}
                  alt="homeCard2"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero3}
                  alt="homeCard3"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero4}
                  alt="homeCard4"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero5}
                  alt="homeCard5"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero6}
                  alt="homeCard6"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className=" rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero7}
                  alt="homeCard7"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero8}
                  alt="homeCard8"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero9}
                  alt="homeCard9"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>

              <div className="rounded-2xl h-50 w-50  flex-shrink-0 inline-block">
                <Image
                  src={homeHero6}
                  alt="homeCard6"
                  width={300}
                  height={400}
                  className="h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}




      {/* hero Section */}
      {/* <section className="bg-[#eff0f9] relative ">
        <div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 sm:px-0 gap-3 sm:gap-6">

     
            <div className="container mx-auto h-full container flex flex-col  gap-6 text-center md:text-left px-5 pt-26">

             
              <div className="flex flex-col gap-2">
                <span className="poppins font-extrabold text-red-600 text-base md:text-lg">
                  Proactive Digital Solutions
                </span>
                <h2 className="poppins text-[30px] md:text-[42px] text-black ">
                  Scalable & Secure
                  <span className="text-[#3e66f3]"> Web Development </span> |
                  <span className="text-[#3e66f3]">
                    {" "}
                    Smart Digital Solution{" "}
                  </span>
                </h2>
              </div>

           
              <div className="flex justify-center items-center gap-4 md:justify-start">
          
                <div>
                  <button className="poppins relative bg-[#3e66f3] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      Learn More ➺
                    </span>

                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#141d38] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>
         
                <div>
                  <button className="poppins relative bg-[#141d38] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      Get in Touch ➺
                    </span>

                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#3e66f3] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>
              </div>

            </div>

       
            <div className="flex justify-center lg:justify-end items-center">
              <div className="flex items-center w-full max-w-lg sm:max-w-xl md:max-w-3xl">
                <Image
                  src={hero2}
                  alt="Hero Image"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full">
            <div className="brand-slider-area max-w-6xl me-auto bg-[#e7eaf8] border rounded-r-[60px] py-4 px-6">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={24}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                className="brand-swiper"
              >
                {logos.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="brand-box style3">
                      <img
                        src={src}
                        alt={`Logo ${index + 1}`}
                        className="mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

         
          <div className="hidden xl:block absolute bottom-[15%] left-[35%] w-20 h-20 rounded-full bg-[linear-gradient(to_right,rgba(135,161,250,0.9),#ffffff)] border border-[#e3e7f8] animate-movingX">
          </div>

          <div className="absolute top-0 left-20 md:left-1/7 w-32 h-7 md:w-40 md:h-10 bg-[linear-gradient(to_right,rgba(135,161,250,0.8),#ffffff)] rounded-r-full border-[0.1px] border-[rgba(124,152,247,0.4)] rotate-135">
          </div>

          <div className="absolute top-0 left-50 sm:left-80 xl:left-120 w-36 h-7 md:w-60 md:h-9 bg-[linear-gradient(to_right,#87a1fa,#e7eaf8)] rounded-r-full rotate-135">
          </div>

        </div>
      </section> */}

      {/* <HeroWebteck /> */}

      {/* static hero with animated ball */}
      {/* <section className="bg-[#eff0f9] relative overflow-hidden ">
        <div>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute left-10 top-24 h-10 w-10 rounded-full bg-blue-500/30 blur-xl" />
            <span className="absolute hidden sm:block left-[10%] top-10 h-2 w-24 rotate-45 rounded-full bg-indigo-200/70" />
            <span className="absolute hidden sm:block left-[64%] md:left-[50%] lg:left-[40%] top-8 h-2 w-28 -rotate-18 rounded-full bg-indigo-200/50" />
            <span className="absolute bottom-32 left-32 h-12 w-12 rounded-full bg-blue-500/40 blur-xl" />
            <span className="absolute bottom-24 left-1/2 h-8 w-8 rounded-full bg-indigo-500/40 blur-xl" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:px-0 gap-3 ">
            <div className=" mx-auto h-full container flex flex-col justify-center gap-4 text-center lg:text-left px-5 pt-20 lg:pt-0 pb-5 lg:pb-0">
              <div className="flex flex-col gap-2">
                <span className="poppins font-extrabold text-red-600 text-[20px] md:text-[22px]">
                  Proactive Digital Solutions
                </span>
                <h2 className="poppins text-[26px] md:text-[42px] text-black">
                  Scalable & Secure
                  <span className="text-[#1D4ED8] font-bold"> Web Development </span> |
                  <span className="text-[#1D4ED8] font-bold">
                    {" "}
                    Smart Digital Solution{" "}
                  </span>
                </h2>
                <div className="">
                  <p className="open-sans text-sm text-gray-700">
                    We offer digital solutions-from Website Development and
                    Software Services to Social Media, and Digital
                    Marketing-Designed to drive innovation, engagement, and
                    growth.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 lg:justify-start ">
                <div>
                  <button className="poppins relative bg-[#1D4ED8] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      View Services
                    </span>
                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#141d38] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>

                <div>
                  <button className="poppins relative bg-[#141d38] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      Get in Touch
                    </span>
                    <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#1D4ED8] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <svg className="w-full  " viewBox="0 0 500 500">
                <mask id="shapeMask">
                  <image
                    href="https://wordpress.themeholy.com/webteck/wp-content/plugins/webteck-core/assets/img/shape/hero_shape_4.png"
                    className="w-[500px]"
                    loading="eager"
                    decoding="sync"
                  />
                </mask>

                <image
                  href="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/hero_img_12_1.jpg"
                  width="500"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#shapeMask)"
                  loading="eager"
                  decoding="sync"
                  priority
                />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-60 lg:left-[48%] w-20 h-20 rounded-full bg-[linear-gradient(to_right,rgba(135,161,250,0.9),#ffffff)] border border-[#e3e7f8] animate-movingX"></div>
          <div className="absolute top-0 left-[20%] md:left-[28%] lg:left-[20%] w-26 h-5 md:w-40 md:h-7 bg-[linear-gradient(to_right,rgba(135,161,250,0.8),#ffffff)] rounded-r-full border-[0.1px] border-[rgba(124,152,247,0.4)] rotate-135"></div>
          <div className="absolute top-0 left-[60%] md:left-[65%] lg:left-[50%] w-32 h-6 md:w-50 md:h-8 bg-[linear-gradient(to_right,#87a1fa,#e7eaf8)] rounded-r-full rotate-135"></div>
        </div>
      </section> */}

      {/* expand collapes hero section */}
      {/* <section className="bg-blue-100">
        <HeroExpand
          images={images}
          initialSelectedIndex={0}
          maxThumbnails={5}
        />
      </section> */}

      {/* Work Process */}
      <section
        className="w-full mx-auto py-5 md:py-10 px-4 sm:px-6 lg:px-0 bg-gray-200"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')", // place svg in public folder
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        {/* bg text */}
        <div className="flex flex-col items-center justify-center">
          {/* title */}
          <div className="relative flex flex-col items-center justify-center ">
            {/* Background big text */}
            <h2 className="poppins absolute text-5xl md:text-7xl font-extrabold text-gray-300 opacity-40 whitespace-nowrap ">
              PROACTIVE
            </h2>

            {/* Foreground small label */}
            <div className="flex items-center gap-2 py-1 rounded">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <HiMiniSquares2X2 className="text-3xl text-[#3e66f3] mt-8" />
              </div>
              <span className="poppins font-bold text-[#3e66f3] text-lg whitespace-nowrap mt-8">
                WORK PROCESS
              </span>
            </div>
          </div>
          <h2 className="poppins text-[35px] md:text-[38px] font-bold text-[#141d38] whitespace-nowrap mt-4">
            How to work <span className="text-[#3E66F3]">it!</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="relative flex flex-col md:flex-wrap md:flex-row lg:flex-row justify-center items-center my-10 md:my-12 gap-10 mx-auto w-full container
            "
        >
          {/* Curved connecting line */}
          {/* <div
                    className="absolute top-20 w-full h-20 z-0 hidden lg:block bg-green-400"
                >
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='w-full h-full'
                    >
                        <path
                            d="M0,40 C150,0 350,80 500,40 S850,0 1000,40"
                            stroke="#6366f1"
                            strokeWidth="3"
                            fill="transparent"
                        />
                    </svg>
                </div> */}

          {/* <div className="absolute top-20 inset-x-0 z-0 hidden lg:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-24"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,50 C250,0 750,100 1000,50"
                            stroke="#6366f1"
                            strokeWidth="3"
                            fill="transparent"
                        />
                    </svg>
                </div> */}

          <div className="absolute top-20 left-20 2xl:left-40 inset-x-0 z-0 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[80%] h-24"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 
         C150,0 350,100 500,50 
         C650,0 850,100 1000,50"
                stroke="#6366f1"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </div>

          {/* Card 1 */}
          <div className="relative bg-white shadow-md rounded-xl p-6 w-64 mx-4 z-10">
            {/* Numbered Circle */}
            <div className="absolute -top-6 -left-6">
              <span className="absolute w-16 h-16 rounded-full bg-[#3E66F3] opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>

              <div className="relative text-3xl w-16 h-16 flex items-center justify-center rounded-full bg-[#3E66F3] text-white font-bold">
                01
              </div>
            </div>
            {/* Content */}
            <div className="mt-6 text-center flex flex-col items-center">
              <FaClipboardList className="text-4xl text-[#3E66F3] mb-4" />
              <h3 className="font-bold text-[18px] poppins">
                Select the solution
              </h3>
              <p className="text-gray-500 text-md mt-2 open-sans">
                Choose the service you need to start your project. Lay the
                foundation for growth with the right solution.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-md rounded-xl p-6 w-64 mx-4 z-10">
            <div className="absolute -top-6 -left-6">
              <span className="absolute w-16 h-16 rounded-full bg-[#3E66F3] opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>

              <div className="relative text-3xl w-16 h-16 flex items-center justify-center rounded-full bg-[#3E66F3] text-white font-bold">
                02
              </div>
            </div>
            <div className="mt-6 text-center flex flex-col items-center">
              <FaProjectDiagram className="text-4xl text-[#3E66F3] mb-4" />
              <h3 className="font-bold text-[18px] poppins">
                Project analysis
              </h3>
              <p className="text-gray-500 text-md mt-2 open-sans">
                We study your goals, needs, and market carefully. Our detailed
                analysis ensures the right plan for lasting success.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white shadow-md rounded-xl p-6 w-64 mx-4 z-10">
            <div className="absolute -top-6 -left-6">
              <span className="absolute w-16 h-16 rounded-full bg-[#3E66F3] opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>

              <div className="relative text-3xl w-16 h-16 flex items-center justify-center rounded-full bg-[#3E66F3] text-white font-bold">
                03
              </div>
            </div>
            <div className="mt-6 text-center flex flex-col items-center">
              <FaCogs className="text-4xl text-[#3E66F3] mb-4" />
              <h3 className="font-bold text-lg poppins">Plan and execute</h3>
              <p className="text-gray-500 text-md mt-2 open-sans">
                Our team creates a tailored strategy for your business. We
                implement each step with accuracy and precision.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white shadow-md rounded-xl p-6 w-64 mx-4 z-10">
            <div className="absolute -top-6 -left-6">
              <span className="absolute w-16 h-16 rounded-full bg-[#3E66F3] opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>

              <div className="relative text-3xl w-16 h-16 flex items-center justify-center rounded-full bg-[#3E66F3] text-white font-bold">
                04
              </div>
            </div>
            <div className="mt-6 text-center flex flex-col items-center">
              <FaChartLine className="text-4xl text-[#3E66F3] mb-4" />
              <h3 className="font-bold text-lg poppins">Deliver result</h3>
              <p className="text-gray-500 text-md mt-2 open-sans ">
                We provide impactful outcomes that ensure growth and success.
                Focused on long-term value for your business journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services cards with ripple effect */}
      <section className="">
        <div className="relative md:min-h-[600px] sm:min-h-[300px]">
          {/* Top Half - Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service_bg_2.src})` }}
          ></div>

          {/* Bottom Half - White Background */}
          <div className="absolute bottom-0 left-0 w-full h-[40px] "></div>

          {/* Content Wrapper */}
          <div className="relative container mx-auto px-6 text-center z-10 pt-14">
            {/* Heading + Button Row */}
            <div className="flex flex-col  items-center md:items-start justify-center ">
              {/* title */}
              <div className="relative flex flex-col items-center md:items-start justify-center mb-8">
                {/* Background big text */}
                <h2 className="absolute ">
                  <div className="flex flex-shrink-0 items-center h-full gap-3 lg:gap-5 justify-center">
                    <HiMiniSquares2X2 className="text-4xl lg:text-5xl text-[#2356fd]" />
                    <span className="poppins text-[60px] lg:text-[72px] mb-3 font-extrabold text-gray-300  opacity-20 whitespace-nowrap">
                      Services
                    </span>
                  </div>
                </h2>

                {/* Foreground small label */}
                <div className="flex gap-2 py-1 rounded">
                  {/* Icon */}
                  {/* <div className="flex-shrink-0 flex justify-center">
                    <HiMiniSquares2X2 className="text-3xl text-blue-700 mt-8" />
                  </div>
                  <span className="font-medium text-[#3e66f3] text-lg whitespace-nowrap mt-8">
                    LATEST PROJECT
                  </span> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-3">
              <h1 className="poppins text-white text-3xl sm:text-4xl lg:text-5xl poppins text-center md:text-start">
                Exclusive services for <br />
                <span className="text-[#2356fd]">your Business</span>
              </h1>
              <Link href="/contact-us">
                <button className="relative inline-flex items-center justify-center px-6 py-3 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-black active:scale-95 group">
                  <span className="relative z-10">Contact us ➺ </span>

                  {/* Vertical expanding background */}
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-white opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
              </Link>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={1500}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }}
              className="!overflow-hidden"
            >
              {/* -------- Card 1 -------- */}
              <SwiperSlide className="pt-26 pb-12 ">
                <div className="relative bg-white rounded-2xl shadow-xl w-full p-6 pt-16 text-center overflow-visible group transition-all duration-700 ease-in-out hover:bg-[#3e66f3] flex flex-col">
                  {/* Ripple Icon Section */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center ">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-40 animateServiceRipple"></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-30 animateServiceRipple"
                        style={{ animationDelay: "1s" }}
                      ></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-20 animateServiceRipple"
                        style={{ animationDelay: "2s" }}
                      ></span>

                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#eff0f9] flex items-center justify-center group-hover:bg-white">
                        <Image
                          // src={webSolution}
                          src={homeIconWebSolutions}
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex flex-col gap-4 mt-5">
                    {/* Title */}
                    <h2 className=" poppins text-[18px] md:text-[20px] text-black   group-hover:text-white">
                      Web Solution
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans">
                      Tailored websites and apps – from coding and WordPress to
                      custom app development. Scalable digital solutions built
                      to grow with your business.
                    </p>

                    {/* Button - Fixed at Bottom */}
                    <div className=" flex justify-center ">
                      <Link href="/web-development">
                        <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                          <span className="relative z-10">Let’s Build</span>

                          {/* Vertical expanding background */}
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* -------- Card 2 -------- */}
              <SwiperSlide className="pt-26 pb-12">
                <div className="relative bg-white rounded-2xl shadow-xl w-full p-6 pt-16 text-center overflow-visible group transition-all duration-700 ease-in-out hover:bg-[#3e66f3] flex flex-col">
                  {/* Ripple Icon Section */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center ">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-40 animateServiceRipple"></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-30 animateServiceRipple"
                        style={{ animationDelay: "1s" }}
                      ></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-20 animateServiceRipple"
                        style={{ animationDelay: "2s" }}
                      ></span>

                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#eff0f9] flex items-center justify-center group-hover:bg-white">
                        <Image
                          src={homeIconDigitalMarketing}
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex flex-col gap-4 mt-5">
                    {/* Title */}
                    <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                      Digital Marketing
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans">
                      From SEO and social media to paid ads and content, our
                      marketing services drive visibility, boost engagement, and
                      business growth.
                    </p>

                    {/* Button - Fixed at Bottom */}
                    <div className=" flex justify-center ">
                      <Link href="/seo">
                        <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                          <span className="relative z-10">Let’s convert</span>

                          {/* Vertical expanding background */}
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* -------- Card 3 -------- */}
              <SwiperSlide className="pt-26 pb-12">
                <div className="relative bg-white rounded-2xl shadow-xl w-full p-6 pt-16 text-center overflow-visible group transition-all duration-700 ease-in-out hover:bg-[#3e66f3] flex flex-col">
                  {/* Ripple Icon Section */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center ">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-40 animateServiceRipple"></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-30 animateServiceRipple"
                        style={{ animationDelay: "1s" }}
                      ></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-20 animateServiceRipple"
                        style={{ animationDelay: "2s" }}
                      ></span>

                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#eff0f9] flex items-center justify-center group-hover:bg-white">
                        <Image
                          // src={webDesign}
                          src={homeIconWebDesign}
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div className="flex flex-col gap-4 mt-5">
                    {/* Title */}

                    <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                      Web Design
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans">
                      Creative design services – website redesign, branding, PSD
                      to HTML, and animation to elevate your presence and
                      connect with customers.
                    </p>

                    {/* Button - Fixed at Bottom */}
                    <div className=" flex justify-center ">
                      <Link href="/web-design">
                        <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                          <span className="relative z-10">Let’s Design</span>

                          {/* Vertical expanding background */}
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        </button>
                      </Link>
                    </div>
                  </div>{" "}
                </div>
              </SwiperSlide>

              {/* -------- Card 4 -------- */}
              <SwiperSlide className="pt-26 pb-12">
                <div className="relative bg-white rounded-2xl shadow-xl w-full p-6 pt-16 text-center overflow-visible group transition-all duration-700 ease-in-out hover:bg-[#3e66f3] flex flex-col">
                  {/* Ripple Icon Section */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center ">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-40 animateServiceRipple"></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-30 animateServiceRipple"
                        style={{ animationDelay: "1s" }}
                      ></span>
                      <span
                        className="absolute inset-0 rounded-full bg-[#3e66f3] opacity-20 animateServiceRipple"
                        style={{ animationDelay: "2s" }}
                      ></span>

                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#eff0f9] flex items-center justify-center group-hover:bg-white">
                        <Image
                          src={homeIconCpassSolution}
                          width={40}
                          height={40}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* content */}
                  <div className="flex flex-col gap-4 mt-5">
                    {/* Title */}
                    <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                      CPaaS Solutions
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans">
                      Unify communication with WhatsApp Business API, chatbots,
                      RCS, and SMS – streamline responses, engage faster
                      seamlessly.
                    </p>

                    {/* Button - Fixed at Bottom */}
                    <div className=" flex justify-center ">
                      <Link href="https://celitix.com/" target="_blank">
                        <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                          <span className="relative z-10">Let’s Connect</span>

                          {/* Vertical expanding background */}
                          <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                        </button>
                      </Link>
                    </div>
                  </div>{" "}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Our Benefits */}
      <section
        className="bg-[#f7f7fa] py-10 md:py-16 rounded-lg flex flex-wrap gap-6 items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="items-center justify-center relative flex container">
          <CircularBenefits Benefits={Benefits} autoplay={true} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=" bg-[#eff0f9] py-8 md:py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-10 ">
            {/* content */}
            <div className=" flex flex-col justify-between gap-4 ">
              {/* title */}
              <div className="relative flex items-center justify-center xl:justify-start py-5 md:py-10 mb-5 md:mb-0">
                {/* Background big text */}
                <h2 className="absolute text-6xl md:text-7xl font-extrabold text-gray-300 opacity-40  ">
                  CHOOSE US
                </h2>

                {/* Foreground small label */}
                <div className="absolute flex justify-center items-center xl:top-7 xl:left-5 gap-2 py-1 rounded">
                  {/* Icon  */}
                  <div className="flex-shrink-0 flex justify-center">
                    <Image
                      src={mindset}
                      alt="Mindset Icon"
                      className="w-8 xl:w-10 object-contain"
                    />
                  </div>
                  <span className="poppins font-bold text-[#3e66f3] text-lg">
                    WHY CHOOSE US?
                  </span>
                </div>
              </div>
              {/* content */}
              <div className="flex flex-col gap-4 md:ps-5">
                {/* title */}
                <div className="flex items-center justify-center xl:justify-start text-center xl:text-justify ">
                  <h2 className="poppins text-[35px] md:text-[38px]  text-black leading-relaxed font-medium">
                    More Than
                    <span className="text-[#3e66f3]"> 17 Years </span>
                    of
                    <span className="text-[#3e66f3]"> Experience </span>
                  </h2>
                </div>

                {/* description */}
                <div className="flex items-center justify-center xl:justify-start text-center xl:text-justify ">
                  <p className="open-sans text-gray-700 text-[18px]">
                    We collaborate to create user-friendly solutions, streamline
                    processes, and deliver efficient results. Our team focuses
                    on innovative, competitive, and reliable strategies to
                    ensure real-time performance and scalable growth.
                  </p>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div
                    ref={cardRef1}
                    className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 items-center"
                  >
                    {/* circle */}
                    <div className="flex justify-center">
                      <div className="relative w-28 h-28 md:w-28   md:h-28   flex items-center justify-center">
                        {/* White inner circle */}
                        <div className="absolute w-20 h-20 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center z-10">
                          <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={endValue1}
                            duration={1.4}
                            easingFunction={easeCubicInOut}
                          >
                            {(value) => {
                              const roundedValue = Math.round(value);
                              return (
                                <span className="poppins text-black font-semibold text-[16px]">
                                  {roundedValue}%
                                </span>
                              );
                            }}
                          </AnimatedProgressProvider>
                        </div>

                        {/* Progress ring */}
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={endValue1}
                          duration={1.4}
                          easingFunction={easeCubicInOut}
                        >
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              styles={buildStyles({
                                pathColor: "#3e66f3",
                                trailColor: "#ddd",
                                strokeLinecap: "round",
                                pathTransition: "none",
                              })}
                            />
                          )}
                        </AnimatedProgressProvider>
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex flex-col gap-1 text-center md:text-left">
                      <h3 className="poppins text-[20px] text-[#3e66f3] font-semibold">
                        Proven Business Growth
                      </h3>
                      <p className="open-sans text-gray-700 text-[16px]">
                        90% of our clients experience measurable growth thanks
                        to our result-driven solutions.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    ref={cardRef2}
                    className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 items-center"
                  >
                    {/* circle */}
                    <div className="flex justify-center">
                      <div className="relative w-28 h-28 md:w-28 md:h-28 flex items-center justify-center">
                        {/* White inner circle */}
                        <div className="absolute w-20 h-20 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center z-10">
                          <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={endValue2}
                            duration={1.4}
                            easingFunction={easeCubicInOut}
                          >
                            {(value) => {
                              const roundedValue = Math.round(value);
                              return (
                                <span className="poppins text-black font-semibold text-[16px]">
                                  {roundedValue}%
                                </span>
                              );
                            }}
                          </AnimatedProgressProvider>
                        </div>

                        {/* Progress ring */}
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={endValue2}
                          duration={1.4}
                          easingFunction={easeCubicInOut}
                        >
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              styles={buildStyles({
                                pathColor: "#3e66f3",
                                trailColor: "#ddd",
                                strokeLinecap: "round",
                                pathTransition: "none",
                              })}
                            />
                          )}
                        </AnimatedProgressProvider>
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex flex-col gap-1 text-center md:text-left">
                      <h3 className="poppins text-[20px] text-[#3e66f3] font-semibold">
                        {/* High Quality Deliverables */}
                        Reliable Project Delivery
                      </h3>
                      <p className="open-sans text-gray-700 text-[16px]">
                        We maintain a 95% satisfaction rate by delivering
                        top-quality products and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="flex justify-center xl:justify-start">
                <Link href="/contact-us">
                  <button className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Learn More</span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* image */}
            <div
              className="relative flex justify-center items-center [perspective:1000px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Tilted image */}
              <div
                className="transition-transform duration-300 ease-out"
                style={{
                  transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                }}
              >
                <Image
                  src={whyChooseUs}
                  alt="whyChooseUs Dashboard"
                  className="w-full max-w-lg rounded-lg"
                />
              </div>

              {/* Circle badge (static) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3e66f3] to-[#ffffff] text-gray-800 rounded-full w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center border-[10px] border-[#e2e8fa]">
                <span className="text-xl md:text-2xl font-bold">2000+</span>
                <span className="text-xs md:text-sm">Active Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      <section
        className="w-full mx-auto "
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="container mx-auto w-full py-8 md:py-10 px-4 lg:px-0 flex flex-col items-center justify-center">
          <div>
            <h1 className="poppins text-5xl font-semibold text-[#3e66f3] mb-5 md:mb-8 max-w-4xl mx-auto leading-tight">
              Our Clients
            </h1>
          </div>
          {/* Outer box */}
          <div className=" w-full bg-white rounded-2xl shadow-lg py-6 px-3 mb-0 md:mb-5">
            {/* First Carousel - Left to Right */}
            <Swiper
              modules={[FreeMode, Autoplay]}
              freeMode={true}
              loop={true}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                0: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              speed={4000}
              // className="mb-8"
              allowTouchMove={false}
              simulateTouch={false}
              watchSlidesProgress={false}
            >
              {logosf.map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-gray-50 rounded-xl border border-black flex justify-center items-center h-24">
                    <img
                      src={logo}
                      alt={`Brand ${idx}`}
                      className="h-16 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Second Carousel - Right to Left */}
            {/* <Swiper
              modules={[FreeMode, Autoplay]}
              freeMode={true}
              loop={true}
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
                pauseOnMouseEnter: false,
              }}
              breakpoints={{
                0: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              speed={4000}
              allowTouchMove={false}
              simulateTouch={false}
              watchSlidesProgress={false}
            >
              {logoss.map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-gray-50 rounded-xl border border-black flex justify-center items-center h-24">
                    <img
                      src={logo}
                      alt={`Brand ${idx}`}
                      className="h-16 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="container mx-auto px-4 lg:px-10 py-10 md:py-16 space-y-8   overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-5 text-center ">
          <div>
            <p className=" text-sm  inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              USE CASE
            </p>
          </div>
          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
            How <span className="text-[#3e66f3]">AI agents</span> and humans
            collaborate to bring in more revenue in chats
          </h1> */}

          <div className="text-center px-4 lg:px-0">
            <h1 className="poppins text-[28px] md:text-[35px] font-medium leading-10 md:leading-12 ">
              How Proactive team can help grow your business with {""}
              <div className=" items-center gap-2">
                <span className="text-[#3e66f3] inline md:block">
                  <Typewriter
                    options={{
                      strings: [
                        "web design",
                        "Digital Marketing",
                        "Web Solutions",
                        "CPaaS Solutions",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      cursor: "",
                    }}
                  />
                </span>
              </div>
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`poppins px-2 sm:px-3 py-2  rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#3e66f3] text-white shadow-lg transform scale-105 "
                    : "bg-blue-100 text-[#3e66f3] hover:bg-blue-200 cursor-pointer  "
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 xl:gap-20 items-center px-3 lg:px-0">
          {/* Left Content */}
          <div>
            <div className="space-y-4 ">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="poppins inline-block bg-[#3e66f3] text-white text-sm sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    {activeTab.toUpperCase()}
                  </p>
                </div>
                <h2 className=" text-3xl md:text-[35px] font-semibold text-gray-900 leading-tight ">
                  {content[activeTab].title}
                </h2>
                <p className="open-sans text-gray-600 text-[16px]  ">
                  {content[activeTab].subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4  ">
                {content[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 rounded-lg px-2 "
                  >
                    <h3 className="poppins font-medium text-gray-900  text-[16px]">
                      {feature.name}
                    </h3>
                    <p className="open-sans text-gray-600 text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button - Fixed at Bottom */}
              <div className="flex ">
                <Link href={content[activeTab].ctaLink}>
                  <button className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-full text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    {/* Dynamic CTA Text */}
                    <span className="relative z-10">
                      {content[activeTab].ctaText}
                    </span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="image-slide-container hidden lg:block">
            <div
              key={imageKey}
              className="image-slide-in rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={content[activeTab].image}
                alt={`${activeTab} illustration`}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
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

      {/* CTA  (Call to Action )*/}
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
                  Your digital presence deserves more than just a website it
                  deserves growth. Let’s discuss how we can create, optimize,
                  and scale your online success.
                </p>
              </div>

              {/* cta button */}
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => setVisible(true)}
                  className="relative inline-flex items-center justify-center px-4 py-2 text-base md:text-[16px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group "
                >
                  <span className="relative z-10">Start Now</span>

                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>

                {/* cta form component */}
                <BookDemoDialog visible={visible} setVisible={setVisible} />
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
