import Image from "next/image";
import React from "react";
import overview from "../../../../public/images/overview.png";

function CompanyOverview() {
  return (
    <div className="container mx-auto mb-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:px-0 ">
        {/* Content Section */}
        <div>
          <h2 className="text-4xl text-black mb-4">
            We Serve, What You Plan for Your Business!!
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Proactive Professional Services Pvt. Ltd. is serving from 2008, as
            one of the leading bulk SMS service provider, digital marketing and
            web development companies in Jaipur. With the need and demand of
            making your brand presence in the digital world, we are serving the
            quality-assured service of SMS and voice messages enticing your
            customers. Believing in your vision to make your business reach most
            of the people, Proactive Digital is agile to make it happen.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition">
            Know More About Us...
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src={overview}
            width={300}
            height={200}
            alt="Company Overview"
          />
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 " />
    </div>
  );
}

export default CompanyOverview;
