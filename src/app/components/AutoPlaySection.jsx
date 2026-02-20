"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * A reusable component for displaying an auto-playing tabbed section.
 *
 * @param {string} heading - The title of the section.
 * @param {Array<Object>} sections - The data array for the tabs (e.g., sections1, sections2).
 * @param {number} [intervalDuration=3000] - Duration in milliseconds for auto-play cycle.
 * @param {boolean} [reverse=false] - Flag to reverse the layout order.
 */
const AutoPlaySection = ({
  heading,
  sections,
  intervalDuration = 3000,
  reverse = false,
}) => {
  // Local state for the active tab, managed only by this component instance
  const [activeTabId, setActiveTabId] = useState(0);

  // Local key to force re-render/transition of the image when the tab changes
  const [imageKey, setImageKey] = useState(0);

  // Auto-Play Logic: Cycles the active tab ID
  useEffect(() => {
    const maxTabs = sections.length;

    // Set up the interval using the passed duration
    const interval = setInterval(() => {
      // Functional update to cycle the active tab ID
      setActiveTabId((prev) => {
        const nextId = (prev + 1) % maxTabs;
        return nextId;
      });
      // Increment the image key to force a CSS animation refresh
      setImageKey((prev) => prev + 1);
    }, intervalDuration);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Re-run if data length or duration changes
  //  [sections.length, intervalDuration]

  // Click handler to manually override auto-play
  const handleSectionClick = (sectionId) => {
    setActiveTabId(sectionId);
    setImageKey((prev) => prev + 1); // Force image transition on manual click
  };

  // Safety check to ensure the displayed index is valid
  const safeActiveSection = activeTabId < sections.length ? activeTabId : 0;

  const currentSection = sections[safeActiveSection];

  if (!currentSection) return null; // Or render a loading/error state

  return (
    // md:space-y-6 space-y-8  px-3 lg:px-0 pt-5
    <div className="flex flex-col gap-10 ">
      <div className="flex justify-center items-center ">
        <h3 className="poppins text-[#3e66f3] text-[32px] font-medium">
          {heading}
        </h3>
      </div>

      {/* Desktop View */}
      <div className={`hidden md:flex h-100 md:gap-10 2xl:gap-20 md:items-center  ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        
        {/* Text Column */}
        <div className="md:w-1/2 space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`
                border-l-4 border-[#3e66f3] p-4 cursor-pointer transition-all duration-300 ease-in-out rounded-r-lg
               ${
                 safeActiveSection === section.id ? section.bgColor : "bg-white"
               }
                ${
                  safeActiveSection === section.id
                    ? " shadow-lg"
                    : "hover:bg-gray-50"
                }
              `}
            >
              <h3
                className={`
                  poppins font-semibold transition-all duration-300
                  ${
                    safeActiveSection === section.id
                      ? "text-[20px] text-[#3e66f3]"
                      : " text-gray-700"
                  }
                `}
              >
                {section.title}
              </h3>

              <div
                className={`
                  overflow-hidden  transition-all duration-500 ease-in-out
                  ${
                    safeActiveSection === section.id
                      ? " opacity-100 mt-2 "
                      : " max-h-0 opacity-0 mt-0 "
                  }
                `}
              >
                <p className="open-sans text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 relative overflow-hidden rounded-2xl h-full  ">
          <Image
            key={`desktop-${imageKey}`} // Use the local key
            src={currentSection.image}
            alt={currentSection.title}
  //            width={1200}
  // height={800}
            className={`absolute inset-0 w-full h-full object-cover lg:object-cover rounded-2xl transform transition-all duration-500 ease-out`}
            style={{
              animation: `${
                reverse ? "slideInLeft" : "slideInRight"
              } 0.7s ease-out`,
            }}
          />
          <div className="absolute inset-0 bg-opacity-10"></div>
        </div>
      </div>

      {/* Mobile View (updated with local state/key) */}
      
      <div className=" md:hidden flex flex-col gap-8 h-fit  ">{/* h-164 */}
        {/* ... (Your mobile tab list markup, updated to use activeTabId/handleSectionClick) ... */}
        <div className=" space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={` border-l-4 p-4 cursor-pointer transition-all duration-500 ease-in-out rounded-r-lg border-[#3e66f3] 
                ${
                  safeActiveSection === section.id
                    ? section.bgColor
                    : "bg-white"
                } 
                ${
                  safeActiveSection === section.id
                    ? " shadow-lg"
                    : "hover:bg-gray-50"
                }
              `}
            >
              <h3
                className={` poppins font-semibold transition-all duration-300 
                 ${
                   safeActiveSection === section.id
                     ? "text-lg text-[#3e66f3]"
                     : "text-base text-gray-700"
                 }
                `}
              >
                {section.title}
              </h3>

              <div className={` overflow-hidden transition-all duration-500 ease-in-out 
                ${
                  safeActiveSection === section.id
                    ? "max-h-25 opacity-100 mt-2"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="open-sans text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-58 overflow-hidden rounded-2xl ">
          <Image
            key={`mobile-${imageKey}`} // Use the local key
            src={currentSection.image}
            alt={currentSection.title}
            className="absolute inset-0 w-full h-full object-contain transform transition-all duration-700 ease-out"
            style={{ animation: "slideInUp 0.7s ease-out" }}
          />
          <div className="absolute inset-0 bg-opacity-10"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AutoPlaySection;
