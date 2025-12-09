import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const FeatureShowcase = ({
  title,
  highlight,
  features,
  buttonLabel = "Get Started ➺",
  buttonLink = "#",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[30px] lg:text-[35px] poppins font-medium px-4">
          {title}
          {highlight && <span className="text-[#3e66f3]"> {highlight}</span>}
        </h1>
      </div>

      {/* Main Content */}
      <div className="rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-0">
          {/* Left Side - Features */}
          <div className="bg-[#dbeafe] flex flex-col justify-center gap-2 p-6 lg:p-8 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-2 lg:p-3 rounded-xl transition-all duration-500 cursor-pointer ${
                  activeIndex === index
                    ? "bg-slate-700 scale-105"
                    : "bg-transparent hover:bg-slate-750"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* <div
                  className={`text-[18px] lg:text[20px] open-sans transition-transform duration-500 ${
                    activeIndex === index ? "scale-110" : "scale-100"
                  }`}
                >
                  {feature.icon}
                </div> */}
                <div className=" flex items-center justify-center">
                  {typeof feature.icon === "string" ? (
                    //  Show emoji
                    <span
                      className={`text-[20px] transition-transform duration-500 ${
                        activeIndex === index ? "scale-110" : "scale-100"
                      }`}
                    >
                      {feature.icon}
                    </span>
                  ) : (
                    //  Show image
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      // width={28}
                      // height={28}
                      className={` w-8 transition-transform duration-500 ${
                        activeIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  )}
                </div>

                <span
                  className={`text-lg lg:text-xl font-medium transition-colors duration-500 ${
                    activeIndex === index ? "text-white" : "text-slate-400"
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            ))}

            {/* CTA Button (using Link) */}
            <div className="mt-5">
              <Link href={buttonLink}>
                <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
                  <span className="relative z-10">{buttonLabel}</span>
                  <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Display */}
          <div className="bg-[#f5f9ff] flex items-center justify-center p-6   lg:p-16  lg:mb-0">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                    activeIndex === index
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-95 rotate-3 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="poppins text-white text-sm font-medium">
                        Proactive
                      </div>
                    </div>

                    <Image
                      src={feature.image}
                      alt={feature.text}
                      width={450}
                      height={500}
                      className="object-cover"
                    />

                    <div className="p-3 bg-slate-50">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                        <div className="flex-1 h-3 bg-slate-200 rounded"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
