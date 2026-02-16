"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import { motion, AnimatePresence } from "framer-motion";

// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export const CircularBenefits = ({
  Benefits,
  autoplay = true,

}) => {
  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  const BenefitsLength = useMemo(() => Benefits.length, [Benefits]);
  const activeBenefit = useMemo(
    () => Benefits[activeIndex],
    [activeIndex, Benefits]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % BenefitsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, BenefitsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, BenefitsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % BenefitsLength);
  }, [BenefitsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + BenefitsLength) % BenefitsLength
    );
  }, [BenefitsLength]);

  // Compute transforms for each image
  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + BenefitsLength) % BenefitsLength === index;
    const isRight = (activeIndex + 1) % BenefitsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for des
  const desVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full max-w-lg md:max-w-lg lg:max-w-6xl 2xl:max-w-7xl px-5 space-y-10 ">
      <div className="text-center">
        <h2 className="poppins text-[37px] md:text-[42px]  text-[#3e66f3] leading-relaxed font-medium mb-10 md:mb-20">
          Our Benefits
        </h2>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 ">
        {/* Images */}
        <div
          className="relative  h-66 md:h-80 lg:h-88 2xl:h-100 [perspective:500px]"
          ref={imageContainerRef}
        >
          {Benefits.map((Benefit, index) => (
            <img
              key={Benefit.src}
              src={Benefit.src}
              alt={Benefit.title}
              className="absolute w-full h-full object-cover rounded-2xl shadow-lg"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={desVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col justify-center h-full gap-5"
          >
            <h2
              className="poppins text-[28px] md:text-[32px]  text-black leading-tight font-medium text-center md:text-left"
            >
              {activeBenefit.title}
            </h2>

            <motion.p
              className="open-sans text-gray-700 text-[16px] leading-7 text-center md:text-left"
            >
              {activeBenefit.des.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                    delay: 0.015 * i,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {/* Arrows */}
            <div className="flex gap-6 justify-center md:justify-start">
              <button
                aria-label="Previous Benefit"
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none transition-colors bg-[#141414] 
              hover:bg-[#3e66f3] "
                onClick={handlePrev}
              >
                <FaArrowLeft size={20} className="text-[#f1f1f7]" />
              </button>
              <button
                aria-label="Next Benefit"
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none transition-colors bg-[#141414] 
              hover:bg-[#3e66f3]"
                onClick={handleNext}
              >
                <FaArrowRight size={20} className="text-[#f1f1f7]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CircularBenefits;
