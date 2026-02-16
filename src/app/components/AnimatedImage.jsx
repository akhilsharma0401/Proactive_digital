// "use client";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";
// import Image from "next/image";

// const AnimatedImage = ({ src, alt, className }) => {
//   const controls = useAnimation();
//   const ref = useRef(null);

//   useEffect(() => {
//     // const observer = new IntersectionObserver(
//     //   ([entry]) => {
//     //     if (entry.isIntersecting) {
//     //       controls.start({
//     //         scale: 1.3,
//     //         x: -100,
//     //         y: 18,
//     //         transition: { duration: 0.8, ease: "easeOut" },
//     //       });
//     //     }
//     //     else {
//     //       controls.start({
//     //         scale: 1,
//     //         x: 0,
//     //         transition: { duration: 0.8, ease: "easeOut" },
//     //       });
//     //     }
//     //   },
//     //   { threshold: 0.3 } // triggers when 30% of the element is visible
//     // );

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start({
//             scale: 1.3,
//             x: -150,
//             y: 3,
//             transition: { duration: 0.8 },
//           });
//         } else {
//           controls.start({
//             scale: 1,
//             x: 0,
//             y: 0,
//             transition: { duration: 0.8 },
//           });
//         }
//       },
//       {
//         threshold: 0.3,
//         rootMargin: "-30% 0px 20% 0px", // top, right, bottom, left
//       }
//     );

//     const currentRef = ref.current;
//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [controls]);

//   return (
//     <motion.div ref={ref} animate={controls}>
//       <Image src={src} alt={alt} className={className} />
//     </motion.div>
//   );
// };

// export default AnimatedImage;


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";

// const AnimatedImage = ({ src, alt, className }) => {
//   const ref = useRef(null);

//   const { scrollY } = useScroll();

//   const scale = useTransform(scrollY, (latest) => {
//     if (!ref.current) return 1;

//     const rect = ref.current.getBoundingClientRect();
//     const vh = window.innerHeight;

//     // Scale only when top of element is between 30% → 10% of viewport
//     const start = vh * 0.9;
//     const end = vh * 0.1;

//     const progress = (start - rect.top) / (start - end);
//     const clamped = Math.max(0, Math.min(progress, 1));

//     return 1 + clamped * 0.5; // scale 1 → 1.5
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ scale, transformOrigin: "right center" }} // anchor scaling to right
//     >
//       <Image src={src} alt={alt} className={className} />
//     </motion.div>
//   );
// };

// export default AnimatedImage;



"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check screen width only on client side
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollY, (latest) => {
    if (!isTablet || !ref.current) return 1; // disable animation on mobile/tab

    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // Scale only when top of element is between 90% → 10% of viewport
    const start = vh * 0.9;
    const end = vh * 0.1;

    const progress = (start - rect.top) / (start - end);
    const clamped = Math.max(0, Math.min(progress, 1));

    return 1 + clamped * 0.4; // scale 1 → 1.5
  });

  return (
    <motion.div
      ref={ref}
      style={isTablet ? { scale, transformOrigin: "right center" } : {}}
    >
      <Image src={src} alt={alt} className={className} />
    </motion.div>
  );
};

export default AnimatedImage;
