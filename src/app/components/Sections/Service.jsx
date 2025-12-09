import React from "react";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

function Service() {
  return (
    <>
    <div className="container mx-auto mb-8 px-4">

      <div className="py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex gap-4 ">
          <div className="border border-blue-400 hover:bg-blue-600 rounded-lg p-4 text-blue-400 hover:text-white flex items-center justify-center w-14 h-14 ">
            <FaMobileAlt size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">SMS</h3>
            <p className="text-gray-600 text-md mt-1">
              Send an alert, notify your clients or promote yourself by a crisp and relevant message to convey to your personalized contact list by{" "}
              <Link href="/bulk-sms" className="text-blue-500 hover:underline">
                bulk SMS
              </Link>{" "}
              service from proactive SMS providers. By an effective and convenient SMS{" "}
              <Link href="/web-portal" className="text-blue-500 hover:underline">
                web portal
              </Link>{" "}
              pop up into your customer's phone in one click.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-4">
          <div className="border border-blue-400 hover:bg-blue-600 rounded-lg p-4 text-blue-400 hover:text-white flex items-center justify-center w-14 h-14">
            <AiOutlineSound size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Voice</h3>
            <p className="text-gray-600 text-md mt-1">
              Give a voice to your brand. Proactive bulk voice call service lets you create, record, send and track your customized voice messages. Sell out loud your business, make your campaigns heard with easy scheduled web-based voice call service.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-4">
          <div className="border border-blue-400 hover:bg-blue-600 rounded-lg p-4 text-blue-400 hover:text-white flex items-center justify-center w-14 h-14">
            <FaShareAlt size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">Digital</h3>
            <p className="text-gray-600 text-md mt-1">
              Think different, think internet. Get into the world of digital from the traditional approach to promote your business. Proactive Professionals provide you services from web development to digital marketing to make you visible around the world in seconds.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 " />
    </div>

    </>
  );
}

export default Service;
