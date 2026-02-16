'use client';

import { useState, useEffect, useMemo } from 'react';
import { Home, ArrowLeft, Search, Compass, MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      dx: Math.random() * 100 - 50,
      dy: Math.random() * 100 - 50,
      scale: Math.random() + 0.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));
  }, []);


  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* {particles.map((p, i) => (

          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3e66f3]/90 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              x: [0, p.dx],
              y: [0, p.dy],
              scale: [1, p.scale, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />

        ))} */}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full">
          {/* Main content with parallax effect */}
          <motion.div
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-center mb-12"
          >
            {/* Creative 404 with broken pieces */}
            <div className="relative h-[300px] flex items-center justify-center mb-8">
              {/* Number 4 - Left */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
                className="relative"
              >
                <div className="text-[200px] font-bold text-[#3e66f3] leading-none select-none">
                  4
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 border-4 border-[#3e66f3] rounded-full"
                />
              </motion.div>

              {/* Number 0 - Center with orbit */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
                className="relative mx-4"
              >
                <div className="text-[200px] font-bold leading-none select-none relative">
                  <span className="bg-gradient-to-br from-[#3e66f3] to-[#2e56e3] bg-clip-text text-transparent">
                    0
                  </span>

                  {/* Orbiting elements around 0 */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-[180px] h-[180px]">
                      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#3e66f3] rounded-full shadow-lg shadow-[#3e66f3]/50" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-[180px] h-[180px]">
                      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3e66f3]/60 rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Number 4 - Right */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.5 }}
                className="relative"
              >
                <div className="text-[200px] font-bold text-[#3e66f3] leading-none select-none">
                  4
                </div>
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#3e66f3]/20 rounded-lg"
                />
              </motion.div>

              {/* Floating compass */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
                className="absolute -top-12 right-1/4 text-[#3e66f3]/40"
              >
                <Compass className="w-16 h-16" />
              </motion.div>

              {/* Floating map pin */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 left-1/4 text-[#3e66f3]/40"
              >
                <MapPin className="w-12 h-12" />
              </motion.div>
            </div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                Page <span className="text-[#3e66f3]"> Not </span> Found
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
                Oops! We couldn’t find the page you were looking for. It may have been removed or is temporarily unavailable.
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center max-w-xs mx-auto mb-12"
          >
            {/* Card 1 */}
            <motion.button
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 w-full border-transparent hover:border-[#3e66f3]/20"
            >
              <div className="w-14 h-14 bg-linear-to-br from-[#3e66f3] to-[#2e56e3] rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Home Base</h3>
              <p className="text-sm text-gray-600">Return to the homepage</p>
            </motion.button>
          </motion.div> 
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3e66f3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3e66f3]/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}