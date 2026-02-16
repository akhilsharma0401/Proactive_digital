// "use client"
// import React, { useRef, useEffect } from 'react';
// import { PiMinusBold, PiPlusBold } from "react-icons/pi"; // Adjust your icon imports if needed

// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (isOpen && contentRef.current) {
//       contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
//     } else if (contentRef.current) {
//       contentRef.current.style.maxHeight = '0px';
//     }
//   }, [isOpen]);

//   return (
//     <div className="mb-3 border border-[#E1E1EA] rounded-lg overflow-hidden transition-all">
//       <button
//         onClick={onClick}
//         className="w-full gap-4 flex justify-between items-center text-left bg-[#FAF9FC] rounded-t-lg py-3 px-4 transition duration-300 ease-in-out"
//       >
//         <span className="text-[16px] font-medium text-red-400">{question}</span>
//         <span
//           className={`transform transition-transform duration-500 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//         >
//           {isOpen ? (
//             <PiMinusBold className="text-[#3e66f3] text-lg" />
//           ) : (
//             <PiPlusBold className="text-[#3e66f3] text-lg" />
//           )}
//         </span>
//       </button>

//       <div
//         ref={contentRef}
//         className="transition-max-height duration-500 ease-in-out overflow-hidden bg-white px-5 text-sm text-[#3C3C43] border-t border-[#E1E1EA]"
//       >
//         <div className="py-4">
//           {Array.isArray(answer) ? (
//             answer.map((line, idx) => (
//               <p key={idx} className="mb-2 leading-relaxed">
//                 {line}
//               </p>
//             ))
//           ) : (
//             <p className="leading-relaxed">{answer}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqItem;


"use client";
import React, { useRef, useEffect } from "react";

// icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);
  

  return (
    <div className={` border border-[#E1E1EA] rounded-lg overflow-hidden transition-all relative`} >
      {/* Active left border */}
      {isOpen && (
        <span className="absolute left-0 top-0 h-full w-[4px] bg-[#3e66f3] transition-all duration-300"></span>
      )}

      {/* Header button */}
      <button
      aria-label="Open Faq"
        onClick={onClick}
        className={`w-full gap-4 flex justify-between items-center text-left py-3 px-4 transition duration-300 ease-in-out ${
          isOpen ? "bg-[#f9fafc]" : "bg-[#faf9fc]"
        }`}>

        <span
          className={`text-[15px] md:text-base poppins  sub-heading hover:cursor-pointer font-medium transition-colors duration-300 ${
            isOpen ? "text-[#3e66f3]" : "text-gray-800"
          }`}>
          {question}
        </span>

        <span
          className={`transform transition-transform duration-500 
            ${
            isOpen ? "rotate-180" : "rotate-0"
          }`
        }
        >
          {isOpen ? (
            <FaMinus className="text-[#3e66f3] text-lg" />
          ) : (
            <FaPlus className="text-[#3e66f3] text-lg" />
          )}
        </span>
        
      </button>

      {/* Accordion content */}
      <div
        ref={contentRef}
        className="transition-max-height duration-500 ease-in-out overflow-hidden bg-white px-5 text-sm text-[#3C3C43] border-t border-[#E1E1EA]"
        >
        <div className="py-4">
          
          {Array.isArray(answer) ? (
            answer.map((line, idx) => (
              <p key={idx} className="mb-2 leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="open-sans text-[14px] text-gray-700  leading-relaxed">{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

