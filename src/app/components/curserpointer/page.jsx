"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorFollower() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });
  const size = 20;
  const color = "#ef4444";

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
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

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
        borderRadius: "9999px",
        background: color,
        pointerEvents: "none",
        opacity: pos.visible ? 1 : 0,
        transform: pos.visible ? "scale(1)" : "scale(0.6)",
        transition: "transform 160ms ease, opacity 120ms ease",
      }}
    />
  );
}
