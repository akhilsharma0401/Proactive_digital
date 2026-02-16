"use client";
import React, { useRef, useEffect } from "react";

// icons
import {  FaClock, FaChevronDown } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const CareerOpeningItem = ({ 
  question, 
  Location, 
  Term, 
  description, 
  Responsibilities, 
  Qualifications, 
  isOpen, 
  onClick 
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="border border-[#E1E1EA] rounded-lg overflow-hidden transition-all relative">
      {/* Left Active Border */}
      {isOpen && (
        <span className="absolute left-0 top-0 h-full w-[4px] bg-[#3e66f3] transition-all duration-300"></span>
      )}

      {/* Header */}
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center text-left py-4 px-5 transition duration-300 ease-in-out hover:bg-gray-200 ${
          isOpen ? "bg-[#f8f8f8]" : "bg-[#FAF9FC]"
        }`}
      >
        <div className="flex flex-col gap-1">
          <h3
            className={`text-[18px] md:text-[20px] font-semibold poppins ${
              isOpen ? "text-[#3e66f3]" : "text-gray-800"
            }`}
          >
            {question}
          </h3>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <div className="flex poppins items-center text-[15px] gap-1">
              <FaMapMarkerAlt className="text-[#3e66f3]" />
              <span className=" font-normal "> {Location} </span> 
            </div>
            <div className="flex poppins items-center text-[15px] gap-1">
              <FaClock className="text-[#3e66f3]" />
              <span className=" font-normal ">  {Term} </span>
            </div>
          </div>
        </div>

        {/* Dropdown Arrow Icon */}
        <FaChevronDown
          className={`text-[#3e66f3] text-lg transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Expandable Section */}
      <div
        ref={contentRef}
        className="transition-max-height duration-500 ease-in-out overflow-hidden bg-white border-t border-[#E1E1EA]"
      >
        <div className="p-5 text-[15px] text-gray-700 leading-relaxed space-y-4">
          <div>
            <h4 className="poppins text-[16px] md:text-[18px] font-semibold text-[#3e66f3] mb-2">Job Description</h4>
            <p className="open-sans text-[14px] md:text-[16px]" >{description}</p>
          </div>

          {/* <div>
            <h4 className="poppins font-semibold text-[16px] md:text-[18px] text-[#3e66f3] mb-2">Responsibilities</h4>
            <p className="open-sans text-[14px] md:text-[16px]">{Responsibilities}</p>
          </div>

          <div>
            <h4 className="poppins font-semibold text-[16px] md:text-[18px] text-[#3e66f3] mb-2">Qualifications</h4>
            <p className="open-sans text-[14px] md:text-[16px]">{Qualifications}</p>
          </div> */}

          <div>
  <h4 className="poppins font-semibold text-[16px] md:text-[18px] text-[#3e66f3] mb-2">
    Responsibilities
  </h4>

  <ul className="open-sans text-[14px] md:text-[16px] list-disc pl-6 space-y-1">
    {Responsibilities.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>

<div>
  <h4 className="poppins font-semibold text-[16px] md:text-[18px] text-[#3e66f3] mb-2">
    Qualifications
  </h4>

  <ul className="open-sans text-[14px] md:text-[16px] list-disc pl-6 space-y-1">
    {Qualifications.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>


          {/* <button className="mt-2 inline-block bg-[#3e66f3] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#3053c7] transition">
            Apply Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CareerOpeningItem;
