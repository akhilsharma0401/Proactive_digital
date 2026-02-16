import React from "react";

// icons
import { CiMail } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
function AnnouncementBar() {
  return (
    <div className=" h-8 bg-[#3e66f3] hidden md:flex justify-between items-center px-4 ">
      <div className="container flex mx-auto justify-between text-white">
        {/* Email */}
        <div className="flex  items-center gap-2">
          <CiMail className="text-lg" />
          <span className="">SMS, Voice & Web Solutions</span>
        </div>

        {/* Contact Details */}
        <div className="flex items-center gap-3">
          {/* call us  */}
          <div className="flex items-center gap-2 px-4 border-r">
            <VscCallOutgoing />
            <a href="tel:+919680006460" className="hover:underline">
              +91 96800-06460
            </a>
          </div>

          {/* Email  */}
          <div className=" w-ful h-full flex items-center gap-2 px-4 border-r">
            <MdOutlineTextsms />
            <a
              href="mailto: info@proactivedigital.in"
              className="hover:underline"
            >
              info@proactivedigital.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
