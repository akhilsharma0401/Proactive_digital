"use client";
// pre Build
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { HiMiniSquares2X2 } from "react-icons/hi2";

import { CiUser } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { Dialog } from "primereact/dialog";

const BookDemoDialog = ({ visible, setVisible }) => {
    // CTA form starts
    // const [visible, setVisible] = useState(false);
  
    // payload
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  
    const [open, setOpen] = useState(false);
  
    // dropdown state
    const services = [
      { id: 1, name: "Web Solutions" },
      { id: 2, name: "Web Design" },
      { id: 3, name: "Digital Marketing" },
      { id: 4, name: " WhatsApp Business API" },
      { id: 5, name: " RCS Business Messaging" },
      { id: 6, name: " SMS Solution" },
      { id: 7, name: " Virtual Receptionist (IVR)/Missed Call" },
      { id: 8, name: "Chatbot Services" },
      { id: 9, name: " API Integrations" },
      { id: 10, name: " 2 Way SMS (Long/Shortcode)" },
      { id: 11, name: " Missed Call Services" },
      { id: 12, name: " Other CPaaS Solutions" },
    ];
  
    // ---------------- HANDLE CHANGE ----------------
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      // Custom field restrictions
      if (name === "firstName" || name === "lastName") {
        const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
        setFormData({ ...formData, [name]: lettersOnly });
      } else if (name === "phone") {
        const numbersOnly = value.replace(/\D/g, "");
        setFormData({ ...formData, [name]: numbersOnly });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    // ---------------- VALIDATION (fixed) ----------------
    const validateForm = () => {
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;
  
      if (!formData.firstName.trim()) {
        toast.error("First name is required");
        return false;
      }
      if (!nameRegex.test(formData.firstName)) {
        toast.error("First name can contain only alphabets");
        return false;
      }
  
      if (!formData.lastName.trim()) {
        toast.error("Last name is required");
        return false;
      }
      if (!nameRegex.test(formData.lastName)) {
        toast.error("Last name can contain only alphabets");
        return false;
      }
  
      if (!formData.email.trim()) {
        toast.error("Email is required");
        return false;
      }
      if (!emailRegex.test(formData.email)) {
        toast.error("Enter a valid email");
        return false;
      }
  
      if (!formData.phone.trim()) {
        toast.error("Phone number is required");
        return false;
      }
      if (!phoneRegex.test(formData.phone)) {
        toast.error("Enter a valid 10-digit phone number");
        return false;
      }
  
      if (!formData.company.trim()) {
        toast.error("Company name is required");
        return false;
      }
  
      if (!formData.service) {
        toast.error("Please select a service");
        return false;
      }
  
      if (!formData.message.trim()) {
        toast.error("Message is required");
        return false;
      }
  
      return true;
    };
  
    // ---------------- SUBMIT (fixed) ----------------
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // validateForm now returns true/false
      const isValid = validateForm();
      if (!isValid) return;
  
      const payload = { ...formData };
      console.log("Form Submitted ", payload);
  
      toast.success("Form submitted successfully!");
  
      //  Close the dialog after success
      setVisible(false);
  
      // reset form only after successful submit
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setOpen(false);
    };
    // CTA form ends here

  return (
    <>
      {/* <Toast ref={toastRef} /> */}

            <Dialog
              visible={visible}
              draggable={false}
              onHide={() => setVisible(false)}
              header={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
                      alt="wave"
                      className="h-[40px] w-[40px]"
                    />
                    <div>
                      <p className="text-sm text-gray-600">Hi Proactive</p>
                      <h1 className="text-lg font-semibold text-black">
                        Welcome Back to Proactive
                      </h1>
                    </div>
                  </div>
                </div>
              }
            >
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  {/* --- First & Last Name --- */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {["firstName", "lastName"].map((field) => (
                      <div key={field} className="flex flex-col">
                        <label className="mb-1 text-sm font-medium text-gray-700">
                          {field === "firstName" ? "First Name" : "Last Name"}
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                            <CiUser size={20} />
                          </span>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            placeholder={`Enter your ${
                              field === "firstName" ? "first" : "last"
                            } name`}
                            onChange={handleChange}
                            className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
      
                  {/* --- Email & Phone --- */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="mb-1 text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                          <FiMail size={20} />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Enter your email"
                          onChange={handleChange}
                          className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
                        />
                      </div>
                    </div>
      
                    <div className="flex flex-col">
                      <label className="mb-1 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <CiPhone size={20} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
      
                  {/* --- Company & Service --- */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="mb-1 text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <MdOutlineMapsHomeWork size={20} />
                        </span>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter your company name"
                          className="w-full border rounded-full h-[42px] pl-10 pr-3 hover:bg-gray-100"
                        />
                      </div>
                    </div>
      
                    <div className="flex flex-col w-full max-w-sm">
                      <label className="mb-1 text-sm font-medium text-gray-700">
                        Services
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <AiOutlineCustomerService size={20} />
                        </span>
                        <button
                          type="button"
                          onClick={() => setOpen(!open)}
                          className="w-full border rounded-full bg-white h-[42px] pl-10 pr-3 flex items-center justify-between text-gray-700 hover:bg-gray-100"
                        >
                          <span>
                            {formData.service ? formData.service : "Select Service"}
                          </span>
                          <svg
                            className={`w-4 h-4 ml-2 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
      
                        {open && (
                          <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 max-h-50 overflow-auto">
                            {services.map((service) => (
                              <li
                                key={service.id}
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    service: service.name,
                                  });
                                  setOpen(false);
                                }}
                                className={`px-4 py-2 cursor-pointer rounded-lg ${
                                  formData.service === service.name
                                    ? "bg-[#3e66f3] text-white"
                                    : "hover:bg-gray-100 text-gray-700"
                                }`}
                              >
                                {service.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
      
                  {/* --- Message --- */}
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <RiMessage2Line size={20} />
                      </span>
                      <textarea
                        name="message"
                        placeholder="How can we help you?"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="border p-2 rounded-2xl w-full text-base min-h-[80px] max-h-[120px] pl-10 hover:bg-gray-100"
                      />
                    </div>
                  </div>
      
                  {/* --- Submit --- */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="relative inline-flex items-center justify-center px-8 py-3 text-[14px] font-semibold rounded-full text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
                    >
                      <span className="relative z-10">Submit</span>
                      <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
                    </button>
                  </div>
                </div>
              </form>
            </Dialog>
      
    </>
  );
};

export default BookDemoDialog;
