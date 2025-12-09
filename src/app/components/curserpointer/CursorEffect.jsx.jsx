"use client";
import { useEffect, useState, useRef } from "react";

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });
  const [delayedPos, setDelayedPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const ringSize = 25;
  const dotSize = 10;

  // const color = "rgba(125, 104, 236, 1)";
  const color = "rgba(73, 113, 245, 1)";
  const ringColor = "rgba(62, 102, 243, 1)";

  // Track mouse movement
  useEffect(() => {
    const container = containerRef.current || document.body;

    const onMove = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
        visible: true,
      });
    };

    const onLeave = () => setPos((p) => ({ ...p, visible: false }));

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseenter", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Smooth trailing
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setDelayedPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
   }, [pos]); 
   
   // []  

  if (!pos.visible) return null;

  return (
    <div ref={containerRef}>
      {/* Ring */}
      <div
        style={{
          position: "fixed",
          top: delayedPos.y - ringSize / 2,
          left: delayedPos.x - ringSize / 2,
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `2px solid ${ringColor}`,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {/* Dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x - dotSize / 2,
          top: pos.y - dotSize / 2,
          width: dotSize,
          height: dotSize,
          background: "rgba(125, 104, 236, 0.2)",
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          pointerEvents: "none",
          opacity: pos.visible ? 1 : 0,
          transform: pos.visible ? "scale(1)" : "scale(0.6)",
          transition: "transform 160ms ease, opacity 120ms ease",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
