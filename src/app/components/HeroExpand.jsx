// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import clsx from "clsx";

// export default function HeroExpand({ images, initialSelectedIndex = 0, maxThumbnails = 11,}) {
//   const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative">
//       <div className="mx-auto flex max-w-7xl gap-1 rounded-md py-5 md:gap-2">
//         {images.slice(0, maxThumbnails).map((img, i) => (
//           <div
//             key={`image-container-${i}`}
//             className={clsx(
//               "group relative overflow-hidden rounded-2xl transition-all duration-500 flex items-end cursor-pointer",
//               selectedIndex === i
//   ? "w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] xl:w-[1000px] xl:h-[500px]"
//   : "w-[30px] h-[200px] sm:w-[40px] sm:h-[300px] md:w-[50px] md:h-[400px] xl:w-[60px] xl:h-[500px]"
//             )}
//             onMouseEnter={() => setSelectedIndex(i)}
//             onClick={() => setSelectedIndex(i)}
//           >
//             <motion.div layoutId={`image-${i}`} className="absolute inset-0">
//               <img
//                 src={img.url}
//                 alt={`Image ${i + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300"
//               />
//             </motion.div>

//             {selectedIndex === i && (
//               <div className="absolute bottom-0 w-full bg-black/50 p-2 text-center">
//                 <p className="text-white text-sm sm:text-base">{img.desc}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function HeroExpand({
  images,
  initialSelectedIndex = 0,
  maxThumbnails = 11,
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto cycle
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [images.length, isPaused]);

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // delay between each letter
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 50 }, // start lower
    show: {
      opacity: 1,
      y: 0, // move into place
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Variants for subtitle animation (vertical stack)
  const subtitleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each character
      },
    },
  };

  const subtitleChar = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      <div className="mx-auto flex max-w-7xl gap-1 rounded-md py-5 md:gap-2">
        {images.slice(0, maxThumbnails).map((img, i) => (
          <div
            key={`image-container-${i}`}
            className={clsx(
              "relative overflow-hidden rounded-2xl transition-all duration-500 flex items-end cursor-pointer",
              selectedIndex === i
                ? "w-full h-[450px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] xl:w-[1000px] xl:h-[500px]"
                : "hidden sm:block w-[30px] h-[300px] sm:w-[40px] sm:h-[300px] md:w-[50px] md:h-[400px] xl:w-[60px] xl:h-[500px]"
            )}
            onMouseEnter={() => {
              setSelectedIndex(i);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setSelectedIndex(i)}
          >
            <motion.div layoutId={`image-${i}`} className="absolute inset-0">
              <img
                src={img.url}
                alt={`Image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />

              {/* black tint effect on every card even card is collapsed and expend */}
              {/* <div className="absolute inset-0 bg-black/60"></div> */}

              {/* black tint only on collapsed card  */}
              {selectedIndex !== i && (
                <>
                  <div className="absolute inset-0 bg-black/60"></div>
                </>
              )}


              {/* Title on collapsed card  */}
              {/*               
              {selectedIndex !== i && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
                  initial="hidden"
                  animate="show"
                  variants={subtitleContainer}
                >
                  {(img.subTitle || "").split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={subtitleChar}
                      className="text-lg sm:text-xl md:text-3xl font-bold"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )} */}
            </motion.div>
            {selectedIndex === i && (
              <>
                {/* Top Label like "Proactive" */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-15 sm:top-10 lg:top-15 w-full px-4 text-center z-10"
                >
                  <p className="text-white text-2xl sm:text-2xl font-medium">
                    {img.subTitle}
                  </p>
                </motion.div>

                {/* Centered Title with letter animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-${i}`}
                    className="absolute inset-0 flex items-center justify-center px-4 z-10"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={letterContainer}
                  >
                    <h1 className="font-bold text-white drop-shadow-lg flex flex-wrap justify-center text-center text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
                      {img.title.split(" ").map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className="mr-2 whitespace-nowrap"
                        >
                          {word.split("").map((char, index) => (
                            <motion.span
                              key={index}
                              variants={letterVariant}
                              className="inline-block"
                            >
                              {char}
                            </motion.span>
                          ))}
                        </span>
                      ))}
                    </h1>
                  </motion.div>
                </AnimatePresence>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group absolute bottom-10 w-full flex justify-center z-10"
                >
                  <button className="poppins relative bg-[#00A6FB] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                    <span className="relative z-10 text-[14px]">
                      View Services
                    </span>
                    <span className="absolute left-0 top-1/2 w-full h-full bg-[#141414] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                  </button>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
