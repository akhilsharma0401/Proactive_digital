"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import seo from "../../../public/animation/seo.json";
import HoverExpand from "../components/HoverExpand";
import chatbot from "../../../public/animation/chatbot.json";

function page() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const images = [
  {
    url: "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "A beautiful mountain landscape at sunrise. "
  },
  {
    url: "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    desc: "Modern city skyline with dramatic sunset."
  },
  {
    url: "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=1500",
    desc: "Creative flatlay workspace for digital creators."
  },
    {
    url: "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
    desc: "A beautiful mountain landscape at sunrise."
  },
  {
    url: "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
    desc: "Modern city skyline with dramatic sunset."
  },
  {
    url:  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
    desc: "Creative flatlay workspace for digital creators."
  },
    {
    url: "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
    desc: "Modern city skyline with dramatic sunset."
  },
  {
    url: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
    desc: "Creative flatlay workspace for digital creators."
  },
  ];

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
                <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-20 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-white shadow-lg animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* plateform carousel */}
      <section className="  pt-10 px-4 xl:px-0">
        <div className=" max-w-7xl mx-auto space-y-10">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
              <span className="heroTextGredient">PLATFORMS </span>
            </h2>
          </div>
        </div>
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          modalImageSize={500}
          maxThumbnails={12}
        />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] py-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 px-6">
          {/* Left Title */}
          <div className="flex flex-col gap-4 text-center md:text-left order-2">
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
          <div className="relative flex justify-center items-center order-1">
            <Lottie animationData={chatbot} className="w-72 h-72 " />
          </div>
        </div>
      </section>

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
                <span>What is social media?</span>
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
                <span>How social media marketing works?</span>
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
    </div>
  );
}

export default page;
