"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/.css";

// assets
import comanimation from "../../../../public/animation/comanimation.json";
import graph from "../../../../public/animation/graph.json";
import BulkSms from "../../../../public/animation/BulkSms.json";
import media from "../../../../public/animation/media.json";
import UniversalButton from "../Universalbutton/UniversalButton";

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div
          className="relative w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700
 flex justify-around items-center px-8 "
        >
          {/* Left Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white">
              Website Development
            </h1>
            <p className="text-sm text-gray-100 mt-3 leading-relaxed">
              A well-Structured and robust website with high
              <br />
              performance and optimized content to make your
              <br />
              business online presence much enhanced than before!
            </p>

            <div className="mt-4">
              <UniversalButton
                label="Explore More"
                Varient="Submit"
                className="mt-6"
              />
            </div>
          </div>

          {/* Right Animation */}
          <div className="w-[400px]">
            <Lottie animationData={comanimation} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700
 flex justify-around items-center px-8"
        >
          <div className="w-[400px]">
            <Lottie animationData={graph} />
          </div>
          <div className="w-[400px]">
            <h1 className="text-4xl font-bold text-white">Digital Marketing</h1>
            <p className="text-sm text-gray-100 mt-3 leading-relaxed">
              Digital marketing is instrumental in in spreding brand
              <br />
              awareness. correct usage of a digital marketing can help your
              <br />
              firm scale new heights.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700
 flex justify-around items-center px-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white">
              Premium Bulk SMS Services{" "}
            </h1>
            <p>
              One stop-shop for Mobile marketing solution including <br />
              Bulk SMS, Voice Blasts, Short Codes, Long Code, Digital
              <br />
              Marketing and more
            </p>
            <div className="mt-4">
              <UniversalButton
                label="Explore More"
                Varient="Read more"
                className="mt-6"
              />
            </div>
          </div>
          <div className="w-[400px]">
            <Lottie animationData={BulkSms} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-full bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700
 flex justify-around items-center px-8"
        >
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white">
              Social Media Marketing
            </h1>
            <p className="text-sm text-gray-100 mt-3 leading-relaxed">
              In this highly social interative world would it becomes imprative
              to have a
              <br />
              social media presence.Take your business to new heighta with a
              <br />
              highly engaging social media marketing.
            </p>

            <div className="mt-4">
              <UniversalButton
                label="Explore More"
                Varient="Read more"
                className="mt-6"
              />
            </div>
          </div>
          <div className="w-[350px]">
            <Lottie animationData={media} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
