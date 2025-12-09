// lib/gsapAnimations.js
"use client";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import { ScrollSmoother } from "gsap/ScrollSmoother";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ✅ Init ScrollSmoother (call once in _app.js or layout)
// export const initScrollSmoother = ({
//   wrapper = "#smooth-wrapper",
//   content = "#smooth-content",
//   smooth = 1.2,
//   effects = true,
// } = {}) => {
//   if (!ScrollSmoother.get()) {
//     ScrollSmoother.create({
//       wrapper,
//       content,
//       smooth,
//       effects,
//     });
//   }
// };

export const slideCardsOnScrollDown = (
  className,
  {
    start = "top 80%",
    duration = 0.9,
    yOffset = 200,
    ease = "power3.out",
    stagger = 0.3, // gap between animations
  } = {}
) => {
  gsap.fromTo(
    className,
    { y: yOffset, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease,
      stagger, // GSAP handles delay per card
      scrollTrigger: {
        trigger: className,
        start,
        toggleActions: "restart none none none",
      },
    }
  );
};

// export const cardsTimeLine =gsap.timeline();
// cardsTimeLine.from(".box",{
//     y:100,
//     opacity:0,
//     duration:0.5,
// })

/* ========= TEXT-SPECIFIC ANIMATIONS ========= */

const createScrollAnimation = (target, animation, options = {}) => {
  gsap.from(target, {
    ...animation,
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none play none",
      ...options,
    },
  });
};

export const textFromLeft = (target, options) =>
  createScrollAnimation(
    target,
    {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    options
  );

// ========  CIRCULAR PROGRESS BAR ANIMATION FOR HOME PAGE   ============  
export const  useScrollAnimation = (ref, targetValue = 90) => {
  const [endValue, setEndValue] = useState(0);

  useGSAP(
    () => {
      if (ref.current) {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 95%",
          onEnter: () => setEndValue(targetValue),
          onLeaveBack: () => setEndValue(0),
        });
      }
    },
    { scope: ref } // ensures cleanup when component unmounts
  );

  return endValue;
}
