"use client";
// pre Build
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import {
  FaClipboardList,
  FaProjectDiagram,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

// images
import whyChooseUs from "../../public/images/whyChooseUs.webp";
import service_bg_2 from "../../public/images/service_bg_2.jpg";
import service_bg from "../../public/images/service_bg.jpg";
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


import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/ui/marquee";
import { Marquee } from "./components/marquee";

// Our Benifits
import { CircularBenefits } from "./components/CircularBenefits";
import FaqItem from "./components/FaqItem.jsx";
import BookDemoDialog from "./components/BookDemoDialog";

const Benefits = [
  {
    title: "End-to-End Growth Management",
    des: "We plan, build, and manage every aspect of your digital growth, ensuring your website evolves seamlessly with your business needs.",
    // designation: "Restaurant Critic",
    src: "/images/endToEndGrowth.jpg",
  },
  {
    title: "Custom Web Design for Every Client",
    des: "Every site is uniquely designed to match your goals, with flexible options and tailored features that reflect your brand identity.",
    // designation: "Frequent Visitor",
    src: "/images/customWebDesign.jpg",
  },
  {
    title: "High-Performance & Scalable Platform",
    des: "Our platform powers fast, reliable, and scalable websites that adapt to your growth while delivering consistent top-level performance.",
    // designation: "Satisfied Customer",
    src: "/images/highPerformance.jpg",
  },
  // {
  //   title: "Modern Features & Seamless Integration",
  //   des: "From UI/UX design to WordPress and advanced tools, we integrate modern features to create websites that look great and work flawlessly.",
  //   // designation: "Satisfied Customer",
  //   src: "/images/homeBenifits4.jpg",
  // },
];
// Our Benifits Ends

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites using clean code, responsive layouts, and API-driven integrations to deliver high-performance digital experiences for your business.",
    icon: homeIconWebSolutions,
    link: "/web-development",
    buttonText: "Learn More",
    aria: "Let's Build With Web Development",
  },
  {
    title: "E-commerce ",
    description:
      "We create powerful e-commerce platforms with smooth navigation, secure payments, and optimized checkout systems to help you grow sales and improve customer experience.",
    icon: homeIconDigitalMarketing,
    link: "/ecommerce",
    buttonText: "Learn More",
    aria: "Learn More",
  },
  {
    title: "Web Design",
    description:
      "We design modern, user-friendly websites with creative layouts, branding, and responsive visuals that strengthen your online presence and connect with customers.",
    icon: homeIconWebDesign,
    link: "/web-design",
    buttonText: "Let's Design",
    aria: "Let's Design",
  },
  {
    title: "CPaaS Solutions",
    description:
      "We deliver smart communication solutions using WhatsApp API, chatbots, RCS, and SMS to automate engagement and improve customer interactions.",
    icon: homeIconCpassSolution,
    link: "https://celitix.com/",
    buttonText: "Let's Connect",
    external: true,
    aria: "Let's Connect",
  },
];

const reviews = [
  {
    img: homeHero1,
    alt: "Hero Image 1",
  },
  {
    img: homeHero2,
    alt: "Hero Image 2",
  },
  {
    img: homeHero3,
    alt: "Hero Image 3",
  },
  {
    img: homeHero4,
    alt: "Hero Image 4",
  },
  {
    img: homeHero5,
    alt: "Hero Image 5",
  },
  {
    img: homeHero6,
    alt: "Hero Image 6",
  },
  {
    img: homeHero7,
    alt: "Hero Image 7",
  },
  {
    img: homeHero8,
    alt: "Hero Image 8",
  },
  {
    img: homeHero9,
    alt: "Hero Image 9",
  },
  {
    img: homeHero10,
    alt: "Hero Image 10",
  },
];

const middle = Math.ceil(reviews.length / 2);

const firstRow = reviews.slice(0, middle); // first 5
const secondRow = reviews.slice(middle); // next 5

const ImageCard = ({ img, alt }) => {
  return (
    <div
      className={cn(
        "relative md:w-56 xl:h-64 xl:w-60 overflow-hidden rounded-xl border"
      )}
    >
      <Image
        src={img}
        alt={alt}
        width={300}
        height={350}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default function Home() {

  // use Case section (tab section)
  const [imageKey, setImageKey] = useState(0);

  const content = {
    ecommerce: {
      catagory: "E-commerce & Retail",
      title: "Accelerate Growth with Web Development for E-commerce",
      subtitle: "Drive measurable results through precision-driven campaigns and smart digital strategies.",
      features: [
        {
          f: "High-conversion, user-friendly, and fast-performing eCommerce websites.",
        },
        {
          f: "Magento optimization for speed, performance, and scalability.",
        },
        {
          f: "Intuitive UI/UX with conversion-focused product and category pages.",
        },
        {
          f: "Frictionless checkout flows with secure payment integration.",
        },
        {
          f: "Developed using HTML, CSS, JavaScript, Magento (PHP).",
        }, 
      ],
      image: "/images/ecommerce.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },

    healthcare: {
      catagory: "Healthcare & Wellness",
      title: "Accelerate Growth with Professional Web Development for Healthcare",
      subtitle: "Helping small and medium businesses grow smarter ",
      features: [
        {
          f: "Secure and easy-to-use websites for healthcare providers.",
        },
        {
          f: "Web-based appointment booking and patient engagement systems.",
        },
        {
          f: "Privacy-compliant data management and secure backend architecture.",
        },
        {
          f: "Responsive design for seamless access across devices.",
        },
        {
          f: "Built using HTML, CSS, JavaScript, Laravel (PHP).",
        },
        {
          name: "Website Solutions",
          description:
            "Build scalable, high-performing platforms with open-source power and e-commerce readiness to support your long-term growth.",
        },
        {
          name: "Website Design",
          description:
            "Elevate your brand with creative design services-redesigns, branding, PSD to HTML, and UI/UX experiences that connect with customers.",
        },
        {
          name: "Digital Marketing",
          description:
            "Boost visibility and conversions through SEO, social media, performance ads, and automation that deliver measurable results.",
        },
        {
          name: "CPaaS Solutions",
          description:
            "Unify communication with WhatsApp Business API, chatbots, RCS, and SMS for faster response times and stronger customer engagement.",
        },
      ],
      image: "/images/healthCareUseCase.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact-us ",
    },

    realEstate: {
      catagory: "Real Estate & Construction",
      title: "Accelerate Growth with Professional Web Development for Real Estate",
      subtitle: "Drive growth across every aspect of your digital presence.",
      features: [
        {
          f: "Property-focused websites with clean layouts and modern design.",
        },
        {
          f: "High-quality image galleries, virtual tours, and rich media content.",
        },
        {
          f: "Intuitive property listings with filters and easy navigation.",
        },
        {
          f: "Lead capture and inquiry management features.",
        },
        {
          f: "Developed using HTML, CSS, JavaScript, WordPress.",
        },
        {
          name: "More Reviews Shared",
          description:
            "Encourage satisfied customers to leave positive reviews that strengthen credibility and build trust.",
        },
        {
          name: "Higher Customer Satisfaction",
          description:
            "Deliver seamless digital experiences that keep customers happy, loyal, and engaged.",
        },
        {
          name: "Stronger Branding",
          description:
            "Create a powerful online identity with tailored design and marketing that sets you apart from competitors.",
        },
        {
          name: "Better Rankings",
          description:
            "Boost visibility with advanced SEO and targeted campaigns that push you higher in search results.",
        },
      ],
      image: "/images/realEstate.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },

    finance: {
      catagory: "Finance & Legal Services",
      title: "Accelerate Growth with Professional Web Development for Finance",
      subtitle: "Turn ambitious goals into measurable results.",
      features: [
        {
          f: "Professional, secure, and responsive website development.",
        },
        {
          f: "Compliance-ready architecture for financial and legal standards.",
        },
        {
          f: "Secure client onboarding and document handling systems.",
        },
        {
          f: "Trust-focused UI design with strong brand credibility.",
        },
        {
          f: "Developed using HTML, CSS, JavaScript, Java.",
        },
        {
          name: "Roadmap to Success",
          description:
            "Automate repetitive tasks and workflows to increase efficiency.",
        },
        {
          name: "Stay Ahead of Competitors",
          description:
            "Leverage advanced digital tools and insights to outperform your competition and capture more market share.",
        },
        {
          name: "Brand Credibility & Authority",
          description:
            "Strengthen your online presence with strategies that enhance trust, authority, and long-term brand value.",
        },
        {
          name: "Revenue-Driven Growth",
          description:
            "Maximize ROI with focused strategies designed to improve customer engagement, conversions, and sales.",
        },
      ],
      image: "/images/finance.jpg",
      ctaLink: "/contact-us",
      ctaText: "Contact us",
    },
  };

  const tabs = [
    { key: "ecommerce", label: "E-commerce" },
    { key: "healthcare", label: "Healthcare" },
    { key: "realEstate", label: "Real Estate" },
    { key: "finance", label: "Finance" },
  ]; 

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

  // CTA form starts
  const [visible, setVisible] = useState(false);
  //  CTA Ends

  const [selected, setSelected] = useState(null);
  // const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("ecommerce");

  // FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between web design and web development?",
      answer:
        "Web design covers layout, visuals, and user experience; web development handles coding, performance, and functionality. We deliver both under one roof.",
    },
    {
      question: "Do you also have custom web development and UI/UX design services?",
      answer:
        "Yes, we provide unique custom solutions: website development and professional UI/UX design for your business that are guaranteed to have a fast performance, secure architecture and modern design.",
    },
    {
      question: "Can you improve my current website?",
      answer:
        "Yes! We can redesign or upgrade your existing website to make it look modern, faster, and more user-friendly.",
    },
    {
      question: "How much does professional web design and website development cost in India?",
      answer:
        "The cost of professional web design and website development in India depends on website size, custom features, and technical requirements. Basic business websites start from ₹20,000, while advanced custom websites may cost ₹70,000 or more.",
    }, 
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "The timeline depends on project complexity, but most websites are completed within 3–6 weeks including revisions, content uploads, and final SEO checks.",
    },
    {
      question: "Can you integrate third-party APIs or plugins?",
      answer:
        "Yes. We integrate payment gateways, CRMs, chatbots, and other APIs to extend your website’s functionality and automate business operations.",
    },
    {
      question: "Which technologies do your developers use?",
      answer:
        "Our developers work with modern tech stacks like HTML5, CSS3, JavaScript, React, Node.js, PHP, and MySQL to create fast and secure web applications.",
    },
  ];
  // FAQs Ends

  return (
    <div className="overflow-hidden">
      {/* Scrolling hero section */}

      {/* <section className="bg-linear-to-b from-[#d0e2ff] to-[#f5f9ff] "> */}
      <section className=" container mx-auto bg-[#FFFFFF] ">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 justify-center lg:gap-4 xl:gap-10 lg:h-[80vh] xl:h-[90vh] items-stretch overflow-hidden ">
          {/* left content */}
          <div className="relative flex items-center justify-center lg:justify-start py-16 lg:py-10 px-6 lg:px-8 ">
            <div className="w-full flex flex-col items-center lg:items-start text-center  lg:text-left">
              <p className="poppins text-xs sm:text-sm open-sans mb-3 inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Proactive Web Solutions
              </p>

              {/* <h1 className="poppins text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Scalable, Secure & Optimized{" "}
                <span className="text-blue-500 ">Website Development </span> 
                Services
              </h1> */}
              <h1 className="poppins text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-900 mb-3">
                Custom  {" "}
                <span className="text-blue-500 ">Web Design </span>
                {" "} & {" "}
                <span className="text-blue-500 "> Development </span>
                Services
              </h1>

              <p className="open-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-4 max-w-[600px]">
                {/* Secure, scalable, and high-performance website development services delivering fast, responsive, and future-ready web solutions. */}

                We provide custom web design and development that suits your business needs. Responsive websites to scalable web applications, we deliver them by design approach, putting smart design, clean code, and better performance in the service of creating experiences that help achieve your business goals.
              </p>

              <div className=" flex justify-center ">
                <Link href="/contact-us">
                  <button
                    aria-label="Book Demo"
                    className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group "
                  >
                    <span className="poppins relative z-10">Book Demo</span>

                    {/* Vertical expanding background */}
                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>
              </div>
            </div>

            {/* <div className="block lg:hidden pointer-events-none  absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-[#d0e2ff] dark:from-background"></div> */}
            <div className="block lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white/95 dark:from-background"></div>
          </div>

          {/* Scrolling Cards */}
          {/* <div className="flex justify-center"> */}
          <div className="relative flex gap-4 h-[400px] md:h-[500px] lg:h-full w-full flex-row items-center justify-center overflow-hidden px-4 md:px-2">
            <Marquee vertical className="[--duration:25s]">
              {firstRow.map((review, id) => (
                <ImageCard key={id} img={review.img} alt={review.alt} />
              ))}
            </Marquee>

            <Marquee reverse vertical className="[--duration:25s]">
              {secondRow.map((review, id) => (
                <ImageCard key={id} img={review.img} alt={review.alt} />
              ))}
            </Marquee>

            {/* Fogg On Mobile Devices */}
            {/* <div className="block lg:hidden pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#d0e2ff] dark:from-background"></div> */}


            {/* Fogg On large Devices */}
            {/* <div className="hidden lg:block pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#f5f9ff] dark:from-background"></div> */}

            {/* Fogg On Mobile Devices */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-white/95 dark:from-background"></div>


            {/* Fogg On large Devices */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white/95 dark:from-background"></div>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-[url('/images/diagonalStripes.svg')] bg-repeat bg-auto w-full mx-auto " >
        <div className="container mx-auto psace-y-2 px-10 lg:px-12 xl:px-6 py-10 ">

          {/* bg text */}
          <div className="flex flex-col items-center justify-center">
            {/* title */}
            <div className="relative flex flex-col items-center justify-center ">
              {/* Background big text */}
              {/* <h2 className="poppins absolute text-5xl md:text-7xl font-extrabold text-gray-300 opacity-40 whitespace-nowrap ">
                  PROACTIVE
                </h2> */}

              {/* Foreground small label */}
              {/* <div className="flex items-center gap-2 py-1 rounded">
                  <div className="flex-shrink-0 flex justify-center">
                    <HiMiniSquares2X2 className="text-3xl text-[#3e66f3] mt-8" />
                  </div>
                  <span className="poppins font-bold text-[#3e66f3] text-lg whitespace-nowrap mt-8">
                    WORK PROCESS
                  </span>
                </div> */}
              {/* Background big text */}
              <h2 className="poppins text-5xl md:text-7xl font-extrabold text-blue-300 opacity-30 whitespace-nowrap ">
                PROACTIVE
              </h2>

              {/* Foreground small label */}
              <div className=" absolute flex items-center gap-2 mt-5  rounded">
                <div className=" flex justify-center">
                  <HiMiniSquares2X2 className="text-3xl text-[#3e66f3] " />
                </div>
                <span className="poppins font-bold text-[#3e66f3] text-lg whitespace-nowrap ">
                  WORK PROCESS
                </span>
              </div>
            </div>
            <h2 className="poppins text-[35px] md:text-[38px] font-bold text-[#141d38] whitespace-nowrap mt-4">
              How to work <span className="text-[#3E66F3]">it!</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-15 justify-center items-stretch pt-10  mx-auto w-full container  " >
            <div className="absolute top-20 left-20 2xl:left-40 inset-x-0 z-0 hidden xl:block">
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
            <div className="relative flex flex-col h-auto bg-white shadow-lg rounded-xl p-6 w-full z-10 ">
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
            <div className="relative flex flex-col h-auto bg-white shadow-lg rounded-xl p-6 w-full z-10 ">
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
            <div className="relative flex flex-col h-auto bg-white shadow-lg rounded-xl p-6 w-full z-10 ">
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
            <div className="relative flex flex-col h-auto bg-white shadow-lg rounded-xl p-6 w-full z-10 ">
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
        </div>
      </section>

      {/* services cards with ripple effect */}
      <section className=" bg-white ">
        <div className="relative md:min-h-[600px] sm:min-h-[300px]">
          {/* Top Half - Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service_bg.src})` }}
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
                  <div className="flex flex-shrink-0 items-center h-full gap-3 lg:gap-5 justify-center  mb-3 ">
                    <HiMiniSquares2X2 className="text-3xl md:text-4xl lg:text-5xl text-[#2356fd]" />
                    <span className="poppins text-[48px] md:text-[60px] lg:text-[72px] font-extrabold text-gray-500  opacity-30 whitespace-nowrap">
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
              <h2 className="poppins text-black text-3xl sm:text-4xl lg:text-5xl poppins text-center md:text-start">
                Exclusive services for <br />
                <span className="text-[#2356fd]">your Business</span>
              </h2>
              <Link href="/services">
                <button
                  aria-label="Contact us"
                  className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#3e66f3] hover:text-white active:scale-95 group"
                >
                  {/* <span className="relative z-10">Contact us ➺ </span> */}
                  <span className="relative z-10">Our Services </span>

                  {/* Vertical expanding background */}
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
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
              className="overflow-hidden! h-full "
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="pt-26 pb-12 h-auto! flex">
                  <div className="relative bg-white rounded-2xl shadow-xl w-full p-5 pt-16 text-center overflow-visible group transition-all duration-700 ease-in-out hover:bg-[#3e66f3] flex flex-col h-full  ">

                    {/* Ripple Icon */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
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
                          <Image src={service.icon} width={40} height={40} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 mt-5 h-full">
                      <div className="flex flex-col gap-4">

                        <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                          {service.title}
                        </h2>

                        <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans text-center">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex justify-center mt-auto">
                        <Link
                          href={service.link}
                          target={service.external ? "_blank" : "_self"}
                          aria-label={`Learn More About ${service.link}`}
                        >
                          <button
                            aria-label={service.aria}
                            className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                          >
                            <span className="relative z-10">{service.buttonText}</span>
                            <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* 
                      <div className="flex flex-col gap-4 mt-5 flex-1">
                        
                      
                        <div className="flex flex-col gap-4">
                          <h2 className="poppins text-[18px] md:text-[20px] text-black group-hover:text-white">
                            {service.title}
                          </h2>

                          <p className="text-gray-600 md:text-[16px] text-[14px] group-hover:text-white open-sans text-justify">
                            {service.description}
                          </p>
                        </div>

                      
                        <div className="flex justify-center mt-auto pt-4">
                          <Link
                            href={service.link}
                            target={service.external ? "_blank" : "_self"}
                          >
                            <button
                              aria-label={service.aria}
                              className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                            >
                              <span className="relative z-10">
                                {service.buttonText}
                              </span>
                              <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                            </button>
                          </Link>
                        </div>

                      </div>

                    */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </section>

      {/* Our Benefits */}
      <section className="bg-[url('/images/diagonalStripes.svg')] bg-repeat bg-auto py-5 md:py-10 rounded-lg flex flex-wrap gap-6 items-center justify-center relative overflow-hidden" >
        <div className="items-center justify-center relative flex container">
          <CircularBenefits Benefits={Benefits} autoplay={true} />
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className=" bg-[#eff0f9] py-8 md:py-16 px-6 lg:px-12"> */}
      <section className=" bg-white py-5 md:py-10 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-10 ">
            {/* content */}
            <div className=" flex flex-col justify-between ">
              {/* title */}
              <div className="relative flex items-center justify-center xl:justify-start py-5 mb-0">
                {/* Background big text */}
                {/* <h2 className="absolute text-6xl md:text-7xl font-extrabold text-gray-300 opacity-40  ">
                  CHOOSE US
                </h2> */}

                {/* Foreground small label */}
                {/* <div className="absolute flex justify-center items-center xl:top-7 xl:left-5 gap-2 py-1 rounded">
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
                </div> */}

                {/* Background big text */}
                <h2 className="poppins text-6xl md:text-7xl font-extrabold text-blue-300 opacity-20 whitespace-nowrap    ">
                  CHOOSE US
                </h2>

                {/* Foreground small label */}
                <div className="absolute flex justify-center items-center ms-3 gap-1">
                  <div className=" flex justify-center">
                    <Image
                      src={mindset}
                      alt="Mindset Icon"
                      className="w-6 xl:w-8 object-contain"
                    />
                  </div>
                  <span className="poppins font-semibold text-[#3e66f3] text-xl mt-1">
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
                  <button
                    aria-label="Learn More"
                    className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                    <span className="relative z-10">Contact us</span>

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
      <section className="bg-[url('/images/diagonalStripes.svg')] bg-repeat bg-auto w-full mx-auto "  >
        <div className="container mx-auto w-full py-8 md:py-10 px-4 lg:px-0 flex flex-col items-center justify-center">
          <div>
            <h2 className="poppins text-5xl font-semibold text-[#3e66f3] mb-5 md:mb-8 max-w-4xl mx-auto leading-tight">
              Our Clients
            </h2>
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
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="container mx-auto px-4 lg:px-10 py-5 md:py-10 space-y-8  overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-5 text-center ">
          <div>
            <p className=" text-sm  inline-block bg-[#3e66f3] text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              USE CASE
            </p>
          </div>

          <div className="text-center px-4 lg:px-0">
            <h2 className="poppins text-[28px] md:text-[35px] font-medium leading-10 md:leading-12 ">
              How Proactive team can help grow your business with {""}
              <div className=" items-center gap-2">
                <span className="text-[#3e66f3] inline md:block">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Design",
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
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 ">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`poppins px-2 sm:px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 -tracking-wider hover:cursor-pointer ${activeTab === tab.key
                  ? "bg-[#3e66f3] text-white"
                  : "bg-blue-50 hover:bg-blue-100 text-[#3e66f3]"
                  }`}
              >
                {tab.label}
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
                  <p className="poppins inline-block bg-[#3e66f3] text-white text-sm sub-heading font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                    {content[activeTab].catagory}
                    {/* {activeTab.toUpperCase()} */}
                  </p>
                </div>
                <h2 className=" text-3xl md:text-[35px] font-semibold text-gray-900 leading-tight ">
                  {content[activeTab].title}
                </h2>

                {/* <p className="open-sans text-gray-600 text-[16px]  ">
                  {content[activeTab].subtitle} 
                </p> */}

                {/* <ol className="" >
                  <ul>
                    {content[activeTab].p1}
                  </ul>
                  <ul>
                    {content[activeTab].p2}
                  </ul>
                  <ul>
                    {content[activeTab].p3}
                  </ul>
                  <ul>
                    {content[activeTab].p4}
                  </ul>
                </ol> */}
              </div>

              {/* Features */}
              {/* <div className="space-y-4  ">
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
              </div> */}
              <div className="space-y-4  ">
                {content[activeTab].features
                  .filter(feature => feature.f)
                  .map((feature, index) => (
                    // <ol key={index} className="flex flex-col list-disc space-y-2 rounded-lg px-2 list-inside ">
                    //   <li className="open-sans text-gray-600 text-[15px]">
                    //     {feature.f}
                    //   </li>
                    // </ol>

                    <div key={index} className="flex flex-col gap-2 items-start">
                      <div className="flex gap-2 items-start ">
                        <div className="w-1.25 h-1.25 rounded-full mt-2 bg-black"></div>
                        <div className="">
                          <p className="open-sans text-gray-600 text-[15px]">
                            {feature.f}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Button - Fixed at Bottom */}
              <div className="flex ">
                <Link href={content[activeTab].ctaLink}>
                  <button
                    aria-label={content[activeTab].ctaText}
                    className="relative inline-flex items-center justify-center px-4 py-2 text-[16px] font-semibold rounded-full text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
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

      {/* CTA  (Call to Action )*/}
      <section className="bg-[url('/images/diagonalStripes.svg')] bg-repeat bg-auto py-10 px-6 lg:px-10" >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px] max-w-6xl 2xl:max-w-7xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden justify-between">
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
            <div className="md:flex absolute -top-7 -left-7 md:-left-2 md:top-0 w-[150px] h-[150px] md:w-auto md:h-[110px] lg:h-[120px] opacity-25 md:opacity-100   ">
              <Lottie animationData={rocket} loop={true} />
            </div>

            {/* content */}
            <div className="flex flex-col  justify-center py-10 md:py-0 px-10 md:px-18  gap-4  h-full ">
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] md:text-[30px] lg:text-[35px] text-center md:text-start font-medium poppins text-[#1d4ed8]">
                  Let's Get In Touch
                </h2>
                <p className="text-[16px] lg:text-[18px] text-black open-sans  text-center md:text-start">
                  Your digital presence deserves more than just a website it deserves a performance web solution built to grow your business.Let's build, optimize, and scale your online success.
                </p>
              </div>

              {/* cta button */}
              <div className="flex justify-center md:justify-start">
                <Link href="/contact-us" >
                  <button
                    aria-label="Start Now"
                    onClick={() => setVisible(true)}
                    className="relative inline-flex items-center justify-center px-4 py-2 text-base md:text-[16px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group "
                  >
                    <span className="relative z-10">Start Now</span>

                    <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                  </button>
                </Link>

                {/* cta form component */}
                {/* <BookDemoDialog visible={visible} setVisible={setVisible} /> */}
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
      {/* <section className=" bg-[#eff0f9] flex justify-center items-center py-10 px-4 lg:px-0"> */}
      <section className=" bg-white flex justify-center items-center py-10 px-6 lg:px-10 ">
        <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto  bg-[#f9fafc] border border-[#D1CDE3] rounded-xl p-4 md:p-6 shadow-lg space-y-6">
          <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#3e66f3]">
              {" "}
              Have more questions?
            </span>{" "}
            <p>We’ve answers.</p>
          </h2>

          <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl py-4 px-4  sm:px-4 ">
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

    </div >
  );
}
