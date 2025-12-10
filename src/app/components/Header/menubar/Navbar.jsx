
"use client";
import React, { useState, useEffect, useRef } from "react";
// import celitixlogo from "../public/logo/celitixlogo.svg";
import proactiveLogo from "../../../../../public/images/proactiveLogo.png";
// import MetaLogowhite from "../public/logo/MetaLogowhite.webp";
// import footerimg from "../public/image/footerimg.svg";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Palette,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { href } from "react-router-dom";
// import BookDemoDialog from "./../components/BookDemoDialog";
import BookDemoDialog from "../../BookDemoDialog";
import NavbarWebDesign from "../../../../../public/icons/NavbarWebDesign.png";
import navbarOpenSource from "../../../../../public/icons/navbarOpenSource.png";
import navbarEcommerce from "../../../../../public/icons/navbarEcommerce.png";
import navbarSeo from "../../../../../public/icons/navbarSeo.png";
import navbarSmm from "../../../../../public/icons/navbarSmm.png";
import navbarSocialMediaAds from "../../../../../public/icons/navbarSocialMediaAds.png";
import navbarContentMarketing from "../../../../../public/icons/navbarContentMarketing.png";
import navbarBranding from "../../../../../public/icons/navbarBranding.png";
import navbarAnimation from "../../../../../public/icons/navbarAnimation.png";
import navbarAffiliateMarketing from "../../../../../public/icons/navbarAffiliateMarketing.png";
import navbarCelitix from "../../../../../public/icons/navbarCelitix.png";

// navbar icons
// web solutions
import { FaLaptopCode } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";
import { TbShoppingCartCog } from "react-icons/tb";

// design
import { RiTerminalWindowLine } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

// digital Marketing
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsMegaphone } from "react-icons/bs";
import { BsMegaphoneFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";

function page() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [activeSub, setActiveSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const underlineRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Solution", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact-us" },
  ];

  //  Floating Grid Dropdown Data
  const dropdownItems = {
    Services: [
      {
        name: "WEB & APPLICATION",
        desc: "Increasing your online presence.",
        icon: <Code size={22} className="text-[#3e66f3]" />,
        // sub: ["Web development", "Open Source", "Ecommerce"],

        sub: [
          {
            name: "Web Development",
            href: "/web-development",
            icon: <FaLaptopCode size={20} className="text-[#3e66f3]" />,
          },
          {
            name: "Open Source Development",
            href: "/open-source-development",
            icon: <TbSourceCode size={20} className="text-[#3e66f3]" />,
            // image: navbarOpenSource,
          },
          {
            name: "E-commerce",
            href: "/ecommerce",
            icon: <TbShoppingCartCog size={20} className="text-[#3e66f3]" />,
            // image: navbarEcommerce,
          },
        ],
      },
      {
        name: "DESIGN",
        desc: "Design your presence.",
        icon: <Smartphone size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Website Design",
            href: "/web-design",
            icon: <RiTerminalWindowLine size={20} className="text-[#3e66f3]" />,
            // image: NavbarWebDesign,
          },
          {
            name: "Branding",
            href: "/branding",
            icon: <IoMdPricetags size={20} className="text-[#3e66f3]" />,
            // image: navbarBranding,
          },
          {
            name: "Animation",
            href: "/animation",
            icon: <MdAnimation size={20} className="text-[#3e66f3]" />,
            // image: navbarAnimation,
          },
        ],
      },
      {
        name: "DIGITAL MARKETING",
        desc: "Our business is marketing your business.",
        icon: <Palette size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Search Engine Optimization",
            href: "/seo",
            icon: <FaSearch size={18} className="text-[#3e66f3]" />,
            // image: navbarSeo,
          },
          {
            name: "Social Media Marketing",
            href: "/smm",
            icon: <BsMegaphoneFill size={18} className="text-[#3e66f3]" />,
            // image: navbarSmm,
          },
          {
            name: "Social Media Advertising",
            href: "/social-media-ads",
            icon: <RiAdvertisementLine size={20} className="text-[#3e66f3]" />,
            // image: navbarSocialMediaAds,
          },
          {
            name: "Content Marketing",
            href: "/content-marketing",
            icon: <LuClipboardPenLine size={20} className="text-[#3e66f3]" />,
            // image: navbarContentMarketing,
          },
          // {
          //   name: "Affiliate Marketing",
          //   href: "/affiliate-marketing",
          //   icon: <IoIosPeople size={20} className="text-[#3e66f3]" />,
          //   // image: navbarAffiliateMarketing,
          // },
        ],
      },
      {
        name: "CPASS",
        desc: "All-in-one Communication.",
        icon: <Layers size={22} className="text-[#3e66f3]" />,
        sub: [
          {
            name: "Celitix.com",
            href: "https://celitix.com/",
            image: navbarCelitix,
          },
        ],
      },
    ],
  };

  const moveUnderline = (element) => {
    if (underlineRef.current && element) {
      const underline = underlineRef.current;
      const { offsetLeft, offsetWidth } = element;
      underline.style.transform = `translateX(${offsetLeft}px)`;
      underline.style.width = `${offsetWidth}px`;
      underline.style.opacity = 1;
    }
  };

  const handleClick = (e, link) => {
    setActiveLink(link.name);
    moveUnderline(e.currentTarget);
  };

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `[data-link='${activeLink}']`
    );
    if (activeElement) moveUnderline(activeElement);
  }, [activeLink]);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full sticky top-0 left-0 px-4 z-[1000] bg-blue-100 shadow-md transition-all duration-300">
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={proactiveLogo}
                alt="Logo"
                className="w-32 sm:w-40 lg:w-36 xl:w-48"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul
            ref={navRef}
            className="hidden lg:flex h-full items-center lg:gap-2 2xl:gap-4 relative"
          >
            {/* Animated underline */}
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-[3px] bg-blue-700 transition-all duration-700 ease-in-out rounded-full"
              style={{
                width: 0,
                transform: "translateX(0px)",
                opacity: 0,
              }}
            ></span>

            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative text-[16px] xl:text-[18px] text-gray-800 cursor-pointer h-full p-2 "
                data-link={link.name}
                onMouseEnter={(e) => {
                  moveUnderline(e.currentTarget);
                  if (link.dropdown) setDropdown(link.name);
                }}
                onMouseLeave={() => {
                  if (link.dropdown) setDropdown(null);
                  moveUnderline(
                    navRef.current.querySelector(`[data-link='${activeLink}']`)
                  );
                }}
                onClick={(e) => handleClick(e, link)}
              >
                <div className="flex items-center">
                  <Link
                    href={link.href || "#"}
                    className="poppins flex items-center"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-400 ${
                          dropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute left-4/2 -translate-x-1/2 mt-3 w-[95vw] sm:w-[700px] md:w-[1000px] lg:w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg rounded-2xl p-4 transition-all duration-500 ${
                      dropdown === link.name
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
                    }`}
                  >
                    {dropdownItems[link.name]?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-2 p-3 bg-white hover:bg-blue-50/80 hover:border-blue-700 border border-transparent rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] "
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <p className="poppins font-semibold text-gray-800 text-[16px] sm:text-[17px]">
                            {item.name}
                          </p>
                          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-100 to-white shadow-inner">
                            {item.icon}
                          </div>
                        </div>
                        <p className="open-sans text-[16px] text-gray-500">
                          {item.desc}
                        </p>

                        {item.sub && (
                          <ul className="text-[16px] text-gray-600 space-y-1">
                            {item.sub.map((s, i) => (
                              <Link
                                href={s.href}
                                key={i}
                                target={
                                  s.name === "Celitix.com" ? "_blank" : "_self"
                                }
                              >
                                <li className="flex items-center py-1 gap-2 relative group cursor-pointer transition-all">
                                  {s.image ? (
                                    <Image
                                      src={s.image}
                                      alt={s.name}
                                      width={20}
                                      height={20}
                                      className="object-contain rounded-sm"
                                    />
                                  ) : (
                                    s.icon
                                  )}
                                  <span className="poppins relative text-gray-700 group-hover:text-[#3e66f3] transition">
                                    {s.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full mt-1 "></span>
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setVisible(true)}
                className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
              >
                <span className="relative z-10 text-nowrap">Book Demo</span>

                {/* Vertical expanding background */}
                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
              <BookDemoDialog visible={visible} setVisible={setVisible} />
            </div>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ===== Off-Canvas Menu (Mobile & Tablet) ===== */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl border-l border-blue-100 transform transition-transform duration-500 ease-in-out z-[9999] ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          <div className="flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100%-60px)]">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                {/* -------- MAIN LINK + DROPDOWN BUTTON -------- */}
                <div className="w-full flex justify-between items-center text-gray-800 font-medium text-[18px] py-2 border-b border-gray-300">
                  {/* Clicking title = navigate */}
                  <Link
                    href={link.href || "#"}
                    onClick={() => setOpen(false)}
                    className="flex-1 text-left"
                  >
                    {link.name}
                  </Link>

                  {/* Clicking arrow = open submenu */}
                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDropdown(dropdown === link.name ? null : link.name);
                      }}
                      className="p-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* -------- FIRST LEVEL DROPDOWN -------- */}
                {link.dropdown && dropdown === link.name && (
                  <div className="pl-4 space-y-2 mt-2">
                    {dropdownItems[link.name]?.map((item, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        {/* Subcategory Title */}
                        <button
                          onClick={() =>
                            setActiveSub(
                              activeSub === `${link.name}-${item.name}`
                                ? null
                                : `${link.name}-${item.name}`
                            )
                          }
                          className="w-full flex justify-between items-center font-semibold text-gray-700 text-[16px] py-1"
                        >
                          {item.name}

                          {item.sub && (
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-300 ${
                                activeSub === `${link.name}-${item.name}`
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>

                        {/* -------- SECOND LEVEL DROPDOWN -------- */}
                        {item.sub &&
                          activeSub === `${link.name}-${item.name}` && (
                            <ul className="text-gray-600 text-[16px] space-y-1 pl-4 mt-1">
                              {item.sub.map((s, i) => (
                                <li
                                  key={i}
                                  className="hover:text-[#3e66f3] cursor-pointer flex items-center gap-2"
                                >
                                  <Link
                                    href={s.href}
                                    target={
                                      s.name === "Celitix.com"
                                        ? "_blank"
                                        : "_self"
                                    }
                                    onClick={() => {
                                      setOpen(false);
                                      setDropdown(null);
                                      setActiveSub(null);
                                    }}
                                    className="flex items-center gap-2"
                                  >
                                    {s.image ? (
                                      <Image
                                        src={s.image}
                                        alt={s.name}
                                        width={20}
                                        height={20}
                                        className="object-contain rounded-sm"
                                      />
                                    ) : (
                                      s.icon
                                    )}
                                    <span>{s.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Book Demo Button */}
            <div className="flex items-center justify-start gap-4 mt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  setVisible(true);
                }}
                className="relative poppins inline-flex items-center justify-center px-4 py-2 text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group"
              >
                <span className="relative z-10">Book Demo</span>
                <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
              </button>
              <BookDemoDialog visible={visible} setVisible={setVisible} />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-[9998] lg:hidden transition-opacity duration-300"
          ></div>
        )}
      </nav>
    </>
  );
}

export default page;
