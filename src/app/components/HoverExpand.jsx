"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  modalImageSize = 400,
  maxThumbnails = 11,
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle ESC for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {images.slice(0, maxThumbnails).map((img, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative h-60 md:h-92 overflow-hidden rounded-2xl transition-all duration-300 flex items-end ${
              selectedIndex === i
                ? " w-66  md:w-100"
                : "w-4 sm:w-8 md:w-14 xl:w-20"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i);
              setIsModalOpen(true);
            }}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <img
                src={img.url}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              />
            </motion.div>

            {/* Show description only when expanded */}
            {selectedIndex === i && (
              <div className="absolute bottom-0 w-full bg-black/50 p-2 text-center">
                <p className="text-white text-sm sm:text-base">{img.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm dark:bg-black/40 p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl bg-black"
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative size-96"
              >
                <img
                  src={images[selectedIndex].url}
                  alt={`Image ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover"
                />
              </motion.div>
            </div>

            {/* Description text */}
            <p className="mt-4 max-w-xl text-center text-lg text-black dark:text-slate-200">
              {images[selectedIndex].desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
