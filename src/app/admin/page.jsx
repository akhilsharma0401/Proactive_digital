"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { callApi } from "@/src/api";
// import constant from "@/src/env";
import { FaUserShield } from "react-icons/fa";
import Image from "next/image";
// import adminLogin from "../../../public/adminLogin.jpg";
import adminLogin from "../../../public/images/adminLogin.jpg";
import { axiosInstance } from "@/lib/axios";

const page = ({ usersData }) => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpId, setOtpId] = useState(null);
    const [showOtp, setShowOtp] = useState(false);
    const [timer, setTimer] = useState(20);
    const [canResend, setCanResend] = useState(false);
    const [stoken, setToken] = useState();
    const router = useRouter();

    useEffect(() => {
        let interval;
        if (showOtp && timer > 1) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 1) {
            clearInterval(interval);
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [showOtp, timer]);

    const isValidMobile = (number) => /^[0-9]{10}$/.test(number);

    const sendOTP = async () => {
  try {
    if (!isValidMobile(mobile)) {
      toast.error("Enter valid Admin number");
      return;
    }

    const payload = { mobile,
        type: "auth",
     };

       const res = await axiosInstance.post("/otp/sendOtp", payload);

    if (res.data.status === true) {
      toast.success(res.data.message);

      if (res.data.otpId) {
        setOtpId(res.data.otpId);
      }

      setShowOtp(true);
      setTimer(20);
      setCanResend(false);
    } else {
      toast.error(res.data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong. Please try again.");
  }
};


    const isValidOtp = (code) => /^[0-9]{6}$/.test(code);

    const verifyOTP = async () => {
  try {
    if (!isValidOtp(otp)) {
      toast.error("Please enter a valid OTP");
      return;
    }

    const payload = {
      mobile,
      otp,
      otpId,
      type: "auth",
    };

    const res = await axiosInstance.post("/otp/verifyOtp", payload);

    if (res.data.status === true) {
        if(res.data.token){
            window.localStorage.setItem("token", res.data.token);
        }
      toast.success("Welcome to admin");
      router.push("/admin/viewAdmin");
    } else {
      toast.error(res.data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error("OTP verification failed");
  }
};


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!showOtp) sendOTP();
    };

    const handleResend = () => {
        sendOTP();
        setOtp("");
        setTimer(20);
        setCanResend(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-blue-100 to-green-100 px-4">

            <div className="backdrop-blur-lg bg-white/90 shadow-2xl rounded-3xl w-full max-w-4xl grid md:grid-cols-[45%_55%] overflow-hidden">

                {/* Left Section */}
                <div className="px-10 py-12 flex flex-col justify-center items-center space-y-5">

                    {/* Icon */}
                    <div className="bg-blue-100 p-4 rounded-full">
                        <FaUserShield className="text-4xl text-blue-600" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-800">
                        Admin Login
                    </h2>

                    <p className="text-gray-500 text-sm text-center max-w-xs">
                        Secure access to your admin panel using OTP verification.
                    </p>


                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-full space-y-5">

                        {!showOtp ? (

                            <>
                                {/* Mobile Input */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        value={mobile}
                                        onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^\d{0,10}$/.test(input)) setMobile(input);
                                        }}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-xl pl-12 focus:ring-2 focus:ring-blue-400 outline-none"

                                    />


                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl font-semibold text-white bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
                                >
                                    Send OTP
                                </button>
                            </>

                        ) : (

                            <>
                                {/* OTP Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter 6-digit OTP"
                                        value={otp}
                                        onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^\d{0,6}$/.test(input)) setOtp(input);
                                        }}
                                        className="w-full border border-gray-300 px-4 py-3 rounded-xl text-center tracking-widest text-lg focus:ring-2 focus:ring-purple-400 outline-none"
                                    />
                                </div>

                                {/* Timer */}
                                {!canResend ? (
                                    <p className="text-sm text-red-500 text-center">
                                        ⏳ Resend OTP in <b>{timer}s</b>
                                    </p>
                                ) : (
                                    <p
                                        className="text-sm text-blue-500 text-center cursor-pointer hover:underline"
                                        onClick={handleResend}
                                    >
                                        Didn&apos;t receive OTP?{" "}
                                        <span className="font-semibold">Resend</span>
                                    </p>
                                )}

                                {/* Verify Button */}
                                <button
                                    type="button"
                                    onClick={verifyOTP}
                                    className="w-full py-3 rounded-xl font-semibold text-white bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
                                >
                                    Verify OTP
                                </button>
                            </>
                        )}

                    </form>
                </div>


                {/* Right Section */}
                <div className="hidden md:block relative">

                    <Image
                        src={adminLogin}
                        alt="Admin Background"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-6 text-center">

                        <h2 className="text-4xl font-bold leading-tight mb-4">
                            Welcome to <br /> Proactive Digital
                        </h2>

                        <p className="text-sm max-w-xs opacity-90">
                            Login securely to manage blogs and admin content.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );

};

export default page;
