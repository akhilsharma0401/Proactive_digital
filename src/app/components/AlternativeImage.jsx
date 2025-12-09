"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// const textVariant = {
//   hidden: {
//     opacity: 0,
//     y: 40
//   },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut"
//     },
//   }),
// };

// const imageVariant = {
//   hidden: {
//     opacity: 0,
//     scale: 0.95
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.8
//     }
//   },
// };

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4, // Slightly slower stagger
      duration: 1.1, // Increased from 0.6 → 1.2
      ease: "easeOut",
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6, // Increased from 0.8 → 1.5
      ease: "easeOut",
    },
  },
};

const AlternativeImage = ({ sections }) => {
  return (
    // <section className="container mx-auto px-4 lg:px-0">
    <div className="w-full h-full flex flex-col gap-10 pt-12 lg:px-10">
      {sections.map((section, idx) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { amount: 0.2 });

        return (
          <div
            key={idx}
            ref={ref}
            className={`flex flex-col md:flex-row items-center gap-10 lg:gap-15 w-full ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* --- Text Section --- */}
            <div className="flex-1 space-y-10 md:space-y-0 px-2 md:px-0">
              {section.title.map((line, i) => (
                <motion.h2
                  key={i}
                  className="poppins text-[30px] lg:text-[40px]  text-center md:text-left font-medium leading-tight text-[#3e66f3]"
                  variants={textVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i}
                >
                  {line}
                </motion.h2>
              ))}

              <motion.p
                className="open-sans text-gray-600 mt-4 text-[16px] xl:text-[18px] leading-relaxed text-justify md:text-left"
                variants={textVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={section.title.length}
              >
                {section.text}
              </motion.p>
            </div>

            {/* --- Image Section --- */}
            <motion.div className="flex-1 flex justify-center items-center w-full h-auto  "
              variants={imageVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Image
                src={section.img}
                alt={section.title[0]}
                width={500}
                height={550}
                className={`${section.objectFit || "object-cover"} ${section.bgColor || "bg-white"}  rounded-3xl shadow-lg ${section.rounded} ${section.imgHeight || ""}`}

              />
            </motion.div>
          </div>
        );
      })}
    </div>
    // </section>
  );
};

export default AlternativeImage;
