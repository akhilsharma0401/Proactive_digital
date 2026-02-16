"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef(null);
  const current = useRef(0); // smooth value
  const target = useRef(0);  // actual scroll %

  useEffect(() => {
    const bar = barRef.current;

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      target.current = (window.scrollY / totalHeight) * 100;
    };

    const animate = () => {
      // smooth animation: easing
      current.current += (target.current - current.current) * 0.1;

      if (bar) {
        bar.style.width = current.current + "%";
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    animate(); // start animation loop

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "8px",
        width: "0%",
        background: "#3e66f3",
        zIndex: 999999,
        borderRadius: "1px",
      }}
    ></div>
  );
}
