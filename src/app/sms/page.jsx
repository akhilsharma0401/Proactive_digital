"use client";
import React, { useState } from "react";
import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import { slideCardsOnScrollDown, textFromLeft } from "../helpers/gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import hero from "../../../public/images/hero.png";
import emailMarketing from "../../../public/icons/emailMarketing.png";
import verify from "../../../public/icons/verify.png";
import productMarketing from "../../../public/icons/productMarketing.png";
import notification from "../../../public/icons/notification.png";
import stakeholder from "../../../public/icons/stakeholder.png";
import remarketing from "../../../public/icons/remarketing.png";
import responsibility from "../../../public/icons/responsibility.png";
import email from "../../../public/icons/email.png";
import studentFinal from "../../../public/icons/studentFinal.png";
import caseStudy1 from "../../../public/images/caseStudy1.webp";
import caseStudy2 from "../../../public/images/caseStudy2.webp";
import caseStudy3 from "../../../public/images/caseStudy3.webp";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";

function page() {
  const [visible, setVisible] = useState(false);

  // payload
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emails, setEmails] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      emails,
      phone,
      company,
      city: selectedCity,
      message,
    };
    console.log("Payload:", payload);
  };

  // dropdown state
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  useEffect(() => {
    slideCardsOnScrollDown(".box");
    textFromLeft(".text");
  }, []);

  return (
    <div>
      {/* sms hero Section */}
      <section className=" bg-blue-100 max-w-7xl mx-auto px-10 py-8 rounded-b-[70px] sm:rounded-b-[100px] ">
        <div className="container mx-auto py-2 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2  sm:px-0 gap-3 sm:gap-6 items-center">
            {/* Image Section */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="flex justify-center items-center w-full max-w-lg sm:max-w-xl">
                <Image
                  src={hero}
                  alt="Hero Image"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content Section  */}
            <div className="flex flex-col gap-3 sm:gap-6 text-center sm:text-left order-2 md:order-1">
              <h2 className="text poppins text-[25px] sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-snug">
                For <span className="blueTextGradient"> Universal Appeal </span>{" "}
                & Urgent
                <span className="blueTextGradient"> Communication </span>
              </h2>
              <p className="open-sans text-black text-sm md:text-base lg:text-lg  ">
                Boost engagement, reach people where they are, & connect
                one-on-one. Verify, Promote, Notify, & More…
              </p>
              <div className="flex justify-center items-center md:justify-start">
                <button className="px-3 sm:px-6 py-1 sm:py-2 bg-blue-400 text-white text-sm justify-center rounded-full hover:bg-blue-600 hover:cursor-pointer">
                  Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMS Marketing */}
      <section className=" max-w-7xl mx-auto pt-10">
        {/* title */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl  text-black leading-relaxed">
            SMS Marketing Is
            <span className="blueTextGradient"> Alive & Well</span>
          </h2>
        </div>

        {/* Try animation using Scroll JS */}
        {/* <h1 className="reveal-bottom text-3xl font-bold">Reveal from Bottom</h1>
              <h1 className="reveal-top text-3xl font-bold">Reveal from Top</h1>
              <h1 className="reveal-left text-3xl font-bold">Reveal from Left</h1>
              <h1 className="reveal-right text-3xl font-bold">Reveal from Right</h1> */}

        {/* card section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-4 xl:px-0 ">
          {/* card1 */}
          <div className="flex box flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl ">
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src={emailMarketing}
                alt="Email Marketing Icon"
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 text-center">
              <h2 className="poppins text-black text-lg md:text-xl">98%</h2>
              <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                Open Rates. People prefer SMS for prompt communication. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam
                amet doloremque, officiis unde nesciunt.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex box flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl">
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src={emailMarketing}
                alt="Email Marketing Icon"
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 text-center">
              <h2 className="poppins text-black text-lg md:text-xl">
                {">"} 4%
              </h2>
              <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                Messages are considered spam. Email spam rates are high, making
                delivery and visibility a challenge for marketers. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laborum neque quis
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="box flex flex-col gap-6 bg-blue-50 p-4 shadow-lg rounded-tr-4xl rounded-bl-4xl">
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src={emailMarketing}
                alt="Email Marketing Icon"
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 text-center">
              <h2 className="poppins text-black text-lg md:text-xl">5bn</h2>
              <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                People send, receive, and engage with SMS messages daily —
                making it one of the most effective communication channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services*/}
      <section className=" max-w-7xl mx-auto py-10 px-4 xl:px-0">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="poppins text text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              A Versatile &
              <span className="blueTextGradient"> Cost-effective </span>
              Tool To:
            </h2>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Verify */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={verify}
                  alt="Verify Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Verify
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Best for OTP verification. Use our unique solutions like
                  OTP-Free Authentication & SMS API Integration to enhance your
                  customer’s experience.
                </p>
              </div>
            </div>

            {/* Promote */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icons */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={productMarketing}
                  alt="Promote Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Promote
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Shoot offers & promotions tailored to each customer group &
                  convert like never before. Boost sales & leverage your
                  customer database.
                </p>
              </div>
            </div>

            {/* Notify */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={notification}
                  alt="Notify Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Notify
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Ensure proper communication with your customers through
                  booking reminders, bill-sharing, & timely updates delivered
                  cost-effectively.
                </p>
              </div>
            </div>

            {/* Engage */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={stakeholder}
                  alt="Engage Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Engage
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Share links to interactive polls (or share creatives via RCS),
                  ask for feedback or send birthday wishes to strengthen
                  customer relationships.
                </p>
              </div>
            </div>

            {/* Retain */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={remarketing}
                  alt="Retain Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Retain
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Send abandoned cart messages, personalised product
                  recommendations, & retarget old customers to keep them coming
                  back for more.
                </p>
              </div>
            </div>

            {/* Reward */}
            <div className="box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={responsibility}
                  alt="Reward Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Reward
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Support */}
      <div>
        {/* Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-800 text-white p-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Title */}
            <div className="text-center md:text-left">
              <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl leading-relaxed">
                Unsure or <span className="font-bold">Confused?</span>
                <div>Let Us Help!</div>
              </h2>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-5">
              <p className="open-sans text-xs md:text-base leading-relaxed">
                We are eager to introduce you to how SMS marketing can benefit
                your business/organisation. Explore our SMS Marketing guides for
                general queries or connect with our support representative.
              </p>
              <div>
                <button
                  onClick={() => setVisible(true)}
                  className="px-3 py-1 border text-white rounded-full hover:bg-blue-600"
                >
                  Get Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dialog */}
        <Dialog
          visible={visible}
          closable={false}
          draggable={false}
          style={{
            width: "95%",
            maxWidth: "1000px",
            height: "auto",
            height: "90vh",
            borderRadius: "16px",
            boxShadow: "none",
          }}
          onHide={() => setVisible(false)}
          dismissableMask
        >
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] h-full bg-white rounded-2xl overflow-hidden border border-gray-300">
            {" "}
            {/* Carousel */}{" "}
            <div className="hidden md:flex items-center justify-center h-64 md:h-full p-4 order-1 md:order-none">
              {" "}
              <div className="w-full h-full bg-yellow-200 rounded-bl-[50px] rounded-tr-[50px] rounded-tl-xl rounded-br-xl overflow-hidden">
                {" "}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  className="h-full"
                >
                  {" "}
                  <SwiperSlide>
                    {" "}
                    <div className="bg-yellow-200 p-6 h-full flex flex-col items-center justify-center">
                      {" "}
                      <Image
                        src={studentFinal}
                        alt="Card 1"
                        width={400}
                        height={400}
                        className="rounded-lg object-contain"
                      />{" "}
                    </div>{" "}
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    {" "}
                    <div className="bg-yellow-200 p-6 h-full flex flex-col items-center justify-center">
                      {" "}
                      <Image
                        src={studentFinal}
                        alt="Card 2"
                        width={400}
                        height={400}
                        className="rounded-lg object-contain"
                      />{" "}
                    </div>{" "}
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    {" "}
                    <div className="bg-yellow-200 p-6 h-full flex flex-col items-center justify-center">
                      {" "}
                      <Image
                        src={studentFinal}
                        alt="Card 3"
                        width={400}
                        height={400}
                        className="rounded-lg object-contain"
                      />{" "}
                    </div>{" "}
                  </SwiperSlide>{" "}
                </Swiper>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right Side Form */}{" "}
            <div className="p-6 grid grid-cols-1 gap-4 h-full order-2">
              {" "}
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="">
                    {/* <Image src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif" width={30} height={30}/> */}
                    <img
                      src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
                      className="h-[40px] w-[40px]  "
                    />
                  </div>
                  <div className="">
                    <p>Hi Proactive</p>
                    <h1 className="text-2xl text-black">
                      Welcome Back to Proactive
                    </h1>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => setVisible(false)}
                    className="text-gray-500 hover:text-red-500 text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>{" "}
              {/* First / Last Name */}{" "}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {" "}
                <div>
                  <InputText
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border rounded h-[42px] px-3 hover:bg-gray-50"
                  />{" "}
                </div>
                <div>
                  <InputText
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border rounded h-[42px] px-3 hover:bg-gray-100"
                  />{" "}
                </div>
              </div>{" "}
              {/*Email+ Phone + Verify */}{" "}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
                {/* Email */}
                <InputText
                  type="email"
                  placeholder="Email"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  className="w-full border rounded h-[42px] px-3 hover:bg-gray-100"
                />

                {/* Phone + Verify in same width */}
                <div className="grid grid-cols-2 gap-1  md:grid-cols-[75%_25%]">
                  <InputText
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full border rounded h-[42px] px-3 hover:bg-gray-100"
                  />
                  <Button
                    type="button"
                    label="Verify"
                    className="h-[42px]  rounded border border-dashed border-purple-600 
                 text-purple-600 bg-transparent hover:bg-purple-600 
                 hover:border-purple-700 hover:text-white 
                 focus:outline-none focus:ring-2 focus:ring-purple-300 
                 transition-all duration-200"
                  />
                </div>
              </div>{" "}
              {/* Company / Service +dropdown*/}{" "}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {" "}
                <InputText
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Name"
                  className="w-full border rounded h-[42px] px-3 hover:bg-gray-100"
                />{" "}
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full border rounded bg-white h-[42px] flex items-center px-3 hover:bg-gray-100"
                  panelStyle={{
                    background: "white",
                    border: "1px solid #ccc",
                    paddingLeft: "8px",
                  }}
                  appendTo="self"
                />{" "}
              </div>{" "}
              {/* Message */}{" "}
              <InputTextarea
                placeholder="How can we help you?"
                rows={3}
                autoResize
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 rounded w-full text-base min-h-[80px] max-h-[120px] hover:bg-gray-100"
              />{" "}
              {/* Fake Captcha */}{" "}
              <div className="flex items-center gap-2 border rounded-lg p-2 text-sm">
                {" "}
                <span className="text-green-600 pi pi-check-circle text-lg"></span>{" "}
                <span className="text-green-600 font-medium">Success!</span>{" "}
                <div className="ml-auto text-xs text-right">
                  {" "}
                  <strong>CLOUDFLARE</strong>{" "}
                  <div className="text-gray-500">Privacy · Terms</div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Submit Button */}{" "}
              <div className="flex justify-center">
                {" "}
                <Button
                  label="Submit"
                  onClick={handleSubmit}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg h-[48px] hover:bg-purple-700 transition"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </Dialog>
      </div>
      
      <section className=" w-dvw gap-4  pt-10 px-4 xl:px-0">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              With Smart
              <span className="blueTextGradient"> Features </span>Like:
            </h2>
          </div>

          {/* cards */}
          {/* card section */}
          <div className="grid grid-cols-2 md:grid-cols-3 w-dvw gap-4 ">
            {/* Verify */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={verify}
                  alt="Verify Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Verify
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Best for OTP verification. Use our unique solutions like
                  OTP-Free Authentication & SMS API Integration to enhance your
                  customer’s experience.
                </p>
              </div>
            </div>

            {/* Promote */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icons */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={productMarketing}
                  alt="Promote Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Promote
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Shoot offers & promotions tailored to each customer group &
                  convert like never before. Boost sales & leverage your
                  customer database.
                </p>
              </div>
            </div>

            {/* Notify */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={notification}
                  alt="Notify Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Notify
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Ensure proper communication with your customers through
                  booking reminders, bill-sharing, & timely updates delivered
                  cost-effectively.
                </p>
              </div>
            </div>

            {/* Engage */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={stakeholder}
                  alt="Engage Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Engage
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Share links to interactive polls (or share creatives via RCS),
                  ask for feedback or send birthday wishes to strengthen
                  customer relationships.
                </p>
              </div>
            </div>

            {/* Retain */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={remarketing}
                  alt="Retain Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Retain
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Send abandoned cart messages, personalised product
                  recommendations, & retarget old customers to keep them coming
                  back for more.
                </p>
              </div>
            </div>

            {/* Reward */}
            <div className=" flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={responsibility}
                  alt="Reward Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Reward
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Reward clients & nurture repeat business through automated
                  value addition. Provide an outstanding customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className=" max-w-7xl mx-auto pt-10 px-4 xl:px-0">
        <div className="space-y-10 ">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              With Smart
              <span className="blueTextGradient"> Features </span>Like:
            </h2>
          </div>

          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* 2-Way Messaging */}
            <div className=" box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={email}
                  alt="2-Way Messaging Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  2-Way Messaging
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Enable real-time, two-way conversations with your customers.
                  Collect feedback, answer queries, and build stronger
                  relationships through personalized SMS replies.
                </p>
              </div>
            </div>

            {/* Message Scheduling */}
            <div className=" box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={email}
                  alt="Message Scheduling Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Message Scheduling
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Plan your SMS campaigns in advance. Schedule reminders,
                  announcements, and offers to reach your audience at the right
                  time without manual effort.
                </p>
              </div>
            </div>

            {/* Campaign Tracking */}
            <div className=" box flex flex-col md:flex-row items-center md:items-start p-4 gap-4 bg-blue-50 rounded-bl-4xl rounded-tr-4xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[4px_8px_30px_rgba(59,130,246,0.5)]">
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <Image
                  src={email}
                  alt="Campaign Tracking Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="poppins text-black text-lg md:text-xl">
                  Campaign Tracking
                </h2>
                <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                  Monitor delivery rates, link clicks, and engagement metrics to
                  optimize your SMS campaigns. Make data-driven decisions to
                  improve your ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Guides & Articles (3D Carousel) */}
      <section className="max-w-7xl mx-auto pt-10 px-4 xl:px-0">
        <div className="space-y-10">
          {/* title */}
          <div className="flex flex-col items-center  justify-center text-center ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Any Doubts? Explore Our
              <span className="blueTextGradient"> Guides & Articles! </span>
            </h2>
          </div>

          {/* carousel */}
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="coverflow"
            grabCursor
            centeredSlides={true}
            slidesPerView={1} // Mobile default
            breakpoints={{
              768: {
                slidesPerView: 3, // Show prev, current, next on tablets and up
              },
            }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            className="w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy1}
                    alt="Case Study 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy2}
                    alt="Case Study 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="relative flex flex-col gap-6 items-center border border-gray-400 bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
                {/* Image Container */}
                <div className="overflow-hidden max-h-[225px] w-full">
                  <Image
                    src={caseStudy3}
                    alt="Case Study 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="poppins text-black text-lg md:text-xl">
                    Article
                  </h3>
                  <p className="open-sans text-gray-700 text-sm leading-relaxed text-justify">
                    Reward clients & nurture repeat business through automated
                    value addition. Provide an outstanding customer experience.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline hover:cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* SMS API */}
      <section className="max-w-7xl mx-auto px-4 pt-10 xl:px-0">
        <div className="">
          {/* Title */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Robust <span className="blueTextGradient">SMS API</span> For
              Developers
            </h2>
          </div>
          {/* right content  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-full max-w-lg sm:max-w-xl">
                <Image
                  src={hero}
                  alt="Hero Image"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-5 text-center sm:text-left py-3">
              <h2 className="poppins text-lg font-bold leading-snug text-black md:text-xl">
                Developer-friendly SMS API
              </h2>
              <p className="open-sans text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                Provide better experiences on your platforms through automatic
                SMS communication. Easily integrate SMS functionality into your
                apps and services with our versatile API.
              </p>
              <ul className="list-disc pl-5 space-y-2 ">
                <li className="open-sans text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                  Schedule campaigns, send bulk messages, and automate customer
                  interactions seamlessly with advanced customisation.
                </li>
                <li className="open-sans text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                  Manage message delivery, scheduling, and automated responses
                  using an intuitive API that supports omnichannel
                  communication.
                </li>
                <li className="open-sans text-gray-700 text-xs md:text-sm leading-relaxed text-justify">
                  Offer OTP & OTP-Free Authentication, monitor campaign
                  performance and troubleshoot SMS delivery with real-time
                  analytics.
                </li>
              </ul>
              <div className="flex justify-center sm:justify-start">
                <button className="px-6 py-2 bg-[#0025A2] text-white font-semibold text-sm rounded-full hover:cursor-pointer hover:bg-blue-700 transition duration-300">
                  Explore effortless SMS API
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  how SMS Can Help */}
      <section className="max-w-7xl mx-auto pt-10 mb-10 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Static Left Section */}
          <div className="flex flex-col gap-4 text-center md:text-left ">
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Here s how{" "}
              <span className="font-bold blueTextGradient"> SMS </span> <br />
              Can Help
            </h2>
            <p className="open-sans text-gray-700 md:text-base text-sm leading-relaxed text-justify">
              Explore case studies from multiple industries that showcase how
              SMS functionality can help address various challenges. Learn how
              SMS messaging improves operations in measurable ways.
            </p>
          </div>

          {/* Swiper Carousel Right Section */}
          <div className="relative rounded-lg p-4 sm:p-0 h-full bg-blue-50">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className=" flex flex-col gap-4 text-black p-8  rounded-lg h-full transition-all duration-700">
                  <p className="text-base sm:text-lg italic ">
                    This platform completely transformed our communication
                    strategy. This platform completely transformed our
                    communication strategy.
                  </p>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg sm:text-xl font-bold">
                      Ritika Sharma
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Marketing Head, BrightAds
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className=" flex flex-col gap-4 text-black p-8 rounded-lg h-full transition-all duration-700">
                  <p className="text-base sm:text-lg italic ">
                    This platform completely transformed our communication
                    strategy. This platform completely transformed our
                    communication strategy.
                  </p>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg sm:text-xl font-bold">
                      Ritika Sharma
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Marketing Head, BrightAds
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className=" flex flex-col gap-4 text-black p-8 rounded-lg h-full transition-all duration-700">
                  <p className="text-base sm:text-lg italic ">
                    This platform completely transformed our communication
                    strategy. This platform completely transformed our
                    communication strategy.
                  </p>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg sm:text-xl font-bold">
                      Ritika Sharma
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Marketing Head, BrightAds
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/*Transform Your Communication */}
      <section className="bg-blue-50 py-10 px-4 lg:px-10 rounded-t-[70px]  lg:rounded-t-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl mx-auto text-center md:text-left">
          {/* Left Side - Heading */}
          <div>
            <h2 className="poppins text-[22px] md:text-2xl lg:text-4xl text-black leading-relaxed">
              Transform Your
              <span className="blueTextGradient font-bold"> Communication</span>
            </h2>
          </div>

          {/* Right Side - Paragraph and Button */}
          <div className="flex flex-col gap-5">
            <p className="open-sans text-gray-700 text-justify">
              Unlock the power of SMS messaging to boost sales, drive
              engagement, and streamline your operations. Supercharge your
              customer experience by reaching them where they are.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-[#0025A2] text-white font-semibold text-sm rounded-full hover:cursor-pointer  hover:bg-blue-700 transition duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
