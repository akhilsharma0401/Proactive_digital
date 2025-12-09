"use client";

import Image from "next/image";
import React, { useState } from "react";
import login from "../../../public/images/login.png";
import elephent from "../../../public/icons/elephent.png";
// import background from "../../../public/images/background.jpg";
// import background4 from "../../../public/images/background4.jpg";

function Page() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    // parent div for background image on top side
    <div className="relative md:pt-18 h-screen md:px-18 bg-gradient-to-r from-[#ebe6f2] via-[#d6cae0] to-[#ae97c2] ">
      {/* login form */}
      <div className="bg-[#392381] w-full h-full md:rounded-t-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center items-center h-full md:h-fit lg:h-full">
          {/* Left Section */}
          <div className="hidden md:flex lg:flex-col gap-10  lg:h-full">
            {/* Image */}
            <div>
              <Image
                src={login}
                alt="LOGIN Image"
                className="rounded-tl-4xl w-80"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 md:gap-4 w-full md:pt-4 lg:px-4">
              {/* Title */}
              <div className="flex gap-4 items-center">
                <Image src={elephent} alt="logo" className="w-20 " />
                <div className="flex flex-col gap-1">
                  <h2 className="poppins text-white text-xl md:text-2xl">
                    Proactive Digital
                  </h2>
                  <p className="text-white text-xs">Invitation starts here</p>
                </div>
              </div>

              {/* Tab Content */}
              <div className="">
                {currentTab === 1 && (
                  <p className="text-white text-sm ">
                    Discover what our platform offers and how it can streamline
                    your digital operations. We bring powerful features tailored
                    for modern teams.
                  </p>
                )}
                {currentTab === 2 && (
                  <p className="text-white text-sm ">
                    Enjoy a seamless, user-friendly interface that enhances your
                    productivity and makes navigation effortless across all
                    devices, seamless.
                  </p>
                )}
              </div>

              {/* Tabs */}
              <div className="flex justify-start ">
                <ul
                  className="flex items-center gap-2 flex-wrap"
                  role="tablist"
                >
                  {/* Tab 1 */}
                  <li role="presentation">
                    <button
                      className={`group relative poppins inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border overflow-hidden transition duration-200 ${
                        currentTab === 1
                          ? "bg-blue-500 text-white border-transparent"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      }`}
                      onClick={() => setCurrentTab(1)}
                    >
                      <span className="relative z-10">What to expect</span>

                      {/* shimmer streak */}
                      <span className="absolute top-0 left-[-75%] h-full w-[30%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
                    </button>
                  </li>

                  {/* Tab 2 */}
                  <li role="presentation">
                    <button
                      className={`group relative poppins inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border overflow-hidden transition duration-200 ${
                        currentTab === 2
                          ? "bg-blue-500 text-white border-transparent"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      }`}
                      onClick={() => setCurrentTab(2)}
                    >
                      <span className="relative z-10">User Experience</span>

                      {/* shimmer streak */}
                      <span className="absolute top-0 left-[-75%] h-full w-[30%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section (Login Form) */}
          <div className="flex justify-center items-center ">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-lg p-6 sm:p-8 ">
              <h2 className="text-white font-bold text-xl sm:text-2xl mb-6 text-center sm:text-left">
                Log In to Proactive Digital
              </h2>

              <form className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col text-white">
                  <label htmlFor="email" className="mb-1 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="p-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-1 focus:outline-white"
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col text-white relative">
                  <label htmlFor="password" className="mb-1 text-sm">
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="p-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-1 focus:outline-white"
                    required
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center text-white text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember
                  </label>
                  <a href="#" className="hover:underline">
                    Forgotten?
                  </a>
                </div>

                {/* Log in button */}
                <button
                  type="submit"
                  className="group relative w-full bg-blue-600 text-white py-2 rounded cursor-pointer transition text-sm sm:text-base overflow-hidden"
                >
                  <span className="relative z-10">Log In</span>

                  {/* shimmer streak */}
                  <span className="absolute top-0 left-[-75%] h-full w-[30%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
                </button>
              </form>

              {/* Sign up */}
              <p className="text-white text-center mt-6 text-sm">
                Don't have an account?
              </p>
              <button
                type="button"
                className="group relative w-full border border-white/50 text-white py-2 mt-2 rounded cursor-pointer transition text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10">Sign Up</span>

                {/* shimmer streak */}
                <span className="absolute top-0 left-[-75%] h-full w-[30%] bg-white/40 skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[125%]"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
