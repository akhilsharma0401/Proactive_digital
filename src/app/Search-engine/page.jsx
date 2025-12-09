"use client";
import Lottie from "lottie-react";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import seo from "../../../public/animation/seo.json";
import chatbot from "../../../public/animation/chatbot.json";
import rocket from "../../../public/animation/rocket.json";

const strategies = [
  {
    id: 1,
    title: "Website Analytics",
    icon: "📊",
  },
  {
    id: 2,
    title: "Competitor Analytics",
    icon: "💻",
  },
  {
    id: 3,
    title: "Keyword Identification",
    icon: "🔑",
  },
  {
    id: 4,
    title: "Content Strategy",
    icon: "📝",
  },
  {
    id: 5,
    title: "Website Optimization",
    icon: "⚙️",
  },
  {
    id: 6,
    title: "Link Building",
    icon: "🔗",
  },
  {
    id: 7,
    title: "SEO Reports",
    icon: "📋",
  },
];

function page() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
  ];

  const cards = [
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
    {
      title: "Gretel-ACTGAN",
      desc: "Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data Model for generating highly dimensional, mostly numeric, tabular data ",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-[#ccdce8] overflow-hidden [background-image:linear-gradient(to_right,rgb(221,240,254)_1px,transparent_1px),linear-gradient(to_bottom,rgb(221,240,254)_1px,transparent_1px)] [background-size:50px_50px] py-10 md:py-0 ">
        {/* Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#00d4ff]/50 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#00d4ff]/50 blur-[160px]" />

        {/* Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
          {/* left section */}
          <div className="relative flex flex-col justify-center items-center text-center order-2 md:order-1 ">
            {/* title */}
            <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
              Power Your Business with{" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="heroTextGredient">SEO</span>')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(
                      '<span class="heroTextGredient">Marketing</span>'
                    )
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('<span class="heroTextGredient">Growth</span>')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('<span class="heroTextGredient">Success</span>')
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  html: true,
                }}
              />
            </h1>

            <p className=" poppins mt-6 text-lg md:text-2xl text-center font-medium text-black">
              Experience the future of personalized e-commerce
            </p>
            <div className="mt-8 flex justify-center gap-4 ">
              <button className="group relative overflow-hidden px-6 py-3 rounded-full text-white hover:cursor-pointer font-semibold shadow-lg  transition duration-500 ease-in-out [background:linear-gradient(to_right,#1C9CCF_0%,#0306CF_100%)]">
                <span className="relative z-10 poppins ">Get Started</span>
                <span className="absolute top-0 left-[-75%] h-full w-[20%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
              </button>
            </div>
          </div>
          {/* right section  */}
          <div className="relative flex flex-col justify-center items-center order-1 md:order-2 ">
            <Lottie animationData={seo} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 pt-10 pb-40 ">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              <span className="heroTextGredient">Features </span>
            </h2>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 sm:gap-28 md:gap-36 lg:gap-20 px-4 sm:px-6 lg:px-8">
            {features.map((f) => (
              <div
                key={f.id}
                className="relative flex flex-col items-center text-center group gap-8 sm:gap-10"
              >
                {/* Arc connector */}
                <div className="absolute top-14 sm:top-16 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 border-[4px] sm:border-[5px] md:border-[6px] border-blue-500 rounded-full border-l-transparent border-t-transparent -rotate-45"></div>

                {/* Icon Circle */}
                <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-10 sm:h-12 md:h-14"
                  />
                </div>

                {/* content  */}
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-68">
                  {/* Number + Title pill */}
                  <div className="bg-white px-4 sm:px-5 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
                    <span className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-xs sm:text-sm font-semibold">
                      {f.id}
                    </span>
                    <span className="poppins font-semibold text-gray-800 text-sm sm:text-base">
                      {f.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="open-sans px-4 sm:px-4 text-gray-600 text-sm md:text-base sm:max-w-xs">
                    {f.desc}
                  </p>
                </div>

                {/* Ripple effect circle */}
                <div className="absolute -bottom-24 sm:-bottom-20 md:-bottom-20 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-lg animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Strategy   */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold heroTextGredient mb-16">
            Our SEO Strategy
          </h2>

          <div className="flex flex-wrap justify-center gap-12 relative">
            {strategies.map((s, index) => (
              <div key={s.id} className="flex flex-col items-center relative">
                {/* Top hexagon for odd, bottom hexagon for even */}
                {index % 2 === 0 ? (
                  <>
                    {/* Top Hexagon */}

                    <div className="w-28 h-28 bg-cyan-400 clip-hex flex items-center justify-center text-3xl shadow-lg">
                      {s.icon}
                    </div>
                    <div className="w-1 h-6 border-l-2 border-dotted border-black"></div>
                    <p className="text-sm font-medium text-gray-700">
                      {s.title}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {s.title}
                    </p>
                    <div className="w-1 h-6 border-l-2 border-dotted border-black"></div>
                    {/* Bottom Hexagon */}
                    <div className="w-28 h-28 bg-blue-500 clip-hex flex items-center justify-center text-3xl shadow-lg">
                      {s.icon}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Custom Hexagon Shape */}
        <style>{`
        .clip-hex {
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
        }
      `}</style>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] py-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          {/* Left Title */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="max-w-xl text-lg">
              Join us today and take your business to the next level.
            </p>
            <div>
              <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition">
                Start Now
              </button>
            </div>
          </div>

          {/* Right Lottie Animation */}
          <div className="relative flex justify-center items-center">
            <Lottie animationData={chatbot} className="w-72 h-72 " />
          </div>
        </div>
      </section>

      {/* carousel */}
      {/* <section className="relative mx-auto aspect-square w-full max-w-7xl">
        <div className="relative [mask-image:linear-gradient(90deg,transparent,transparent_50%,black_50%,black)]">
          <ul className="relative z-10 m-0 list-none p-0 aspect-square w-full hover:[&_*]:[animation-play-state:paused]">
            {cards.map((card, i) => (
              <li
                key={i}
                className="absolute top-1/2 w-full -translate-y-1/2 animate-rotateCW"
                style={{ animationDelay: `${(-i * 40) / cards.length}s` }}
              >
                <div
                  className="flex w-[27%] flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.1),0_16px_32px_rgba(0,0,0,0.1)] animate-rotateCCW font-sans text-sm text-[#535062]"
                  style={{ animationDelay: `${(-i * 40) / cards.length}s` }}
                >
                  <a href="#" className="no-underline text-inherit">
                    <span className="block text-lg font-medium leading-[150%] text-[#3B2ED0]">
                      {card.title}
                    </span>
                    <span>{card.desc}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>


          <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F4FE] opacity-25 shadow-[0px_18px_36px_-18px_rgba(12,5,46,0.3),0px_30px_60px_-12px_rgba(12,5,46,0.25)]"></div>

          <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F4FE] opacity-50 shadow-[0px_18px_36px_-18px_rgba(12,5,46,0.3),0px_30px_60px_-12px_rgba(12,5,46,0.25)]"></div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(100%_50%_at_100%_50%,rgba(60,26,229,0.25)_0%,rgba(32,26,229,0)_100%)] bg-no-repeat"></div>

        <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0px_18px_36px_-18px_rgba(12,5,46,0.3),0px_30px_60px_-12px_rgba(12,5,46,0.25)]"></div>
      </section> */}

      {/* FAQs*/}
      <section className=" max-w-7xl mx-auto pt-10 px-4 xl:px-0 mb-10">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              <span className="heroTextGredient">FAQs </span>
            </h2>
          </div>

          {/* card section */}
          <div className="flex flex-col justify-center gap-8 p-10 border border-gray-400 shadow-lg rounded-tr-4xl rounded-bl-4xl bg-blue-50">
            {/* Accordion 1 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>Do you have any social accounts?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 0 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 0 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Yes! You can find Wind UI in many social platforms, such as
                  Facebook, Discord, Reddit and more.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>What is Wind UI?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 1 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 1 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Wind UI is a UI library powered by Tailwind CSS for building
                  elegant interfaces quickly.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>How do I get started?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 2 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 2 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Start by installing Tailwind CSS and check Wind UI
                  documentation for component examples.
                </div>
              )}
            </div>

            {/* Accordion 4 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>What is Wind UI?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 3 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 3 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Wind UI is a UI library powered by Tailwind CSS for building
                  elegant interfaces quickly.
                </div>
              )}
            </div>

            {/* Accordion 5 */}
            <div className="w-full rounded-lg border border-gray-400 bg-white">
              <button
                onClick={() => toggleAccordion(4)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span>How do I get started?</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 4 ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openAccordion === 4 && (
                <div className="p-4 text-slate-500 border-t border-gray-200">
                  Start by installing Tailwind CSS and check Wind UI
                  documentation for component examples.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}

                {/* <section
        className="bg-[#4F75FF] mx-auto px-4 py-10"
        style={{
          backgroundImage: "url('/images/diagonalStripes.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-50 shadow-lg h-auto md:h-[300px] max-w-7xl mx-auto rounded-2xl md:rounded-4xl overflow-hidden justify-between">
          <svg
            className="absolute top-0 left-0 w-[500px] h-[500px] opacity-10 pointer-events-none -translate-y-1/4 -translate-x-1/4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10,1L3,9h4.5L6,15l7-8H8.5L10,1z" fill="#60A5FA" />
          </svg>

          <div className="relative flex z-10 items-start">
            <div className="md:flex absolute w-[180px] h-[180px] md:w-auto md:h-[130px] opacity-25 md:opacity-100  translate-1/4 transform ">
              <Lottie animationData={rocket} loop={true} />
            </div>
            <div className="flex flex-col p-4 md:ml-30 md:mt-10 lg:mt-15">
              <h1 className="text-[18px] md:text-[26px] font-medium poppins text-[#1d4ed8]">
                Improve Your Customer Experience
              </h1>
              <p className="text-[14px] md:text-[16px] text-black open-sans mb-8 md:mb-2 lg:mb-8 mt-4">
                Your digital presence deserves more than just a website — it
                deserves growth. Let’s discuss how we can create, optimize, and
                scale your online success.
              </p>

              <button
                onClick={() => setVisible(true)}
                className="relative inline-flex items-center justify-center w-[130px] h-[50px] text-base md:text-[14px] open-sans rounded-lg text-white bg-[#1d4ed8] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group "
              >
                <span className="relative z-10">Start Now</span>

                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
            </div>
          </div>

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
      </section> */}
    </div>
  );
}

export default page;
