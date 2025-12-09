import React from "react";
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
          <span className="">SMS, Voice & Digital Solutions</span>
        </div>

        {/* Contact Details */}
        <div className="flex items-center gap-3">
          {/* call us  */}
          <div className="flex items-center gap-2 px-4 border-r-1">
            <VscCallOutgoing />
            <a href="tel:+919999999999" className="hover:underline">
              +91 9999999999
            </a>
          </div>

          {/* Email  */}
          <div className=" w-ful h-full flex items-center gap-2 px-4 border-r-1">
            <MdOutlineTextsms />
            <a
              href="mailto: example@proactivedigital.com"
              className="hover:underline"
            >
              example@proactivedigital.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
