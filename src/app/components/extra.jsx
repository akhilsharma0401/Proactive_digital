// HeroWebteck.jsx
import React from "react";
// import mask from "public/images/shape.png";
import mask from "../../../public/images/shape.jpg";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HeroWebteck() {
  const logos = [
    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_1.svg",
    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_2.svg",
    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_3.svg",
    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_4.svg",
    "https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/brand_8_5.svg",
    // Repeat as needed
  ];
  return (
    <section
      id="hero"
      className=" overflow-hidden bg-[#eff0f9] relative"
    // style={{
    //   backgroundImage:
    //     "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/hero_bg_2.png')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      {/* decorative background dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-24 h-10 w-10 rounded-full bg-blue-500/30 blur-xl" />
        <span className="absolute left-36 top-10 h-2 w-24 rotate-45 rounded-full bg-indigo-200/70" />
        <span className="absolute right-[32%] top-8 h-2 w-28 -rotate-12 rounded-full bg-indigo-200/50" />
        <span className="absolute bottom-32 left-32 h-12 w-12 rounded-full bg-blue-500/40 blur-xl" />
        <span className="absolute bottom-24 left-1/2 h-8 w-8 rounded-full bg-indigo-500/40 blur-xl" />
      </div>

      {/* main content */}
      <div className="relative">
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="container mx-auto h-full max-w-7xl flex flex-col  gap-6 text-center md:text-left px-5 pt-26">
            <div className="flex flex-col gap-2">
              <span className="poppins font-extrabold text-red-600 text-base md:text-lg">
                Proactive Digital Solutions
              </span>
              <h2 className="poppins text-[30px] md:text-[42px] text-black ">
                Scalable & Secure
                <span className="text-[#3e66f3]"> Web Development </span> |
                <span className="text-[#3e66f3]">
                  {" "}
                  Smart Digital Solution{" "}
                </span>
              </h2>
            </div>


            <div className="flex justify-center items-center gap-4 md:justify-start">

              <div>
                <button className="poppins relative bg-[#3e66f3] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                  <span className="relative z-10 text-[14px]">
                    {/* Learn More ➺ */}
                    Learn More
                  </span>

                  <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#141d38] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                </button>
              </div>

              <div>
                <button className="poppins relative bg-[#141d38] inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 text-[16px] rounded-lg cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-white active:scale-95 group">
                  <span className="relative z-10 text-[14px]">
                    {/* Get in Touch ➺ */}
                    Get in Touch
                  </span>

                  <span className="absolute left-0 top-1/2 w-full h-[0px] bg-[#3e66f3] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded-none"></span>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: masked image + gradient border */}
          <div className="relative">
            <svg className="w-full " viewBox="0 0 500 500">
              {/* Mask definition */}
              <mask id="shapeMask">
                <image
                  href="https://wordpress.themeholy.com/webteck/wp-content/plugins/webteck-core/assets/img/shape/hero_shape_4.png"
                  className="w-full "
                />
              </mask>

              {/* Hero image inside mask */}
              <image
                href="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/05/hero_img_12_1.jpg"
                width="500"
                // height="500"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#shapeMask)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="absolute left-1/2  transform -translate-x-1/2 bottom-20 w-full">
        <div className="brand-slider-area max-w-6xl me-auto bg-[#e7eaf8] border rounded-r-[60px] py-4 px-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="brand-swiper"
          >
            {logos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="brand-box style3">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* partner bar */}
      {/* <div className="absolute bottom-0">
        <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 rounded-[2.2rem] bg-white/90 px-6 py-4 shadow-[0_6px_30px_rgba(36,54,110,.08)] backdrop-blur">
          <img src="/logos/wattse.png" alt="Wattse" className="h-6 w-auto" />
          <img src="/logos/nextech.png" alt="Nextech" className="h-6 w-auto" />
          <img src="/logos/muast.png" alt="Muast" className="h-6 w-auto" />
          <img src="/logos/chatbot.png" alt="Chatbot" className="h-6 w-auto" />
          <img src="/logos/soluck.png" alt="Soluck" className="h-6 w-auto" />
        </div>
      </div> */}
    </section>
  );
}
