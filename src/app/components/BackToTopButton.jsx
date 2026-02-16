// "use client";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function BackToTopButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 200) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {visible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-5 right-5 p-3 bg-[#3e66f3] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </>
//   );
// }










"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClicked(false), 150);
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          onMouseDown={() => setClicked(true)}
          onMouseUp={() => setClicked(false)}
          onMouseLeave={() => setClicked(false)}
          className={`
            fixed bottom-8 right-8 p-3 rounded-full bg-[#3e66f3] text-white
            shadow-xl
            transition-all duration-300 ease-in-out
            hover:scale-110
            focus:outline-none
            z-50 hover:cursor-pointer
            ${clicked ? "scale-90 bg-[#2a4db7] shadow-inner" : ""}
            animate-float
          `}
          style={{ animationTimingFunction: "ease-in-out" }}
        >
          <FaArrowUp size={20} />
          <style jsx>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px);
              }
            }
            .animate-float {
              animation: float 2s infinite;
            }
          `}</style>
        </button>
      )}
    </>
  );
}
