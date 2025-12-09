import React from "react";
import Image from "next/image";
import youngman from "../../../../public/icons/youngman.png";
import hourglass from "../../../../public/icons/hourglass.png";
import trophy from "../../../../public/icons/trophy.png";

const OurClients = () => {
  return (
    <div className="container mx-auto mb-4 px-4">
      <div className="flex flex-col md:flex-row flex-wrap justify-around gap-8">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Section/OurClient/client.jpg"
            alt="Client sitting and smiling"
            width={300}
            height={500}
            className="rounded-lg"
          />
        </div>

        
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-black">
            Over 8546 clients trust us for the value provided services!
          </h1>
          <p className="text-gray-700 text-lg mt-3">
            Proactive Professional Services Pvt. Ltd. is serving the IT sector,
            banking professionals, real estate proprietors, and transporters.
          </p>

          {/* Points */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <Image src={youngman} alt="Team of experts" width={25} height={25} />
              <p className="text-gray-500 text-lg">
                From design to web development, from installation to maintenance,
                we are 30+ experts, and delivered 250+ projects and still assisting
                many more.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image src={hourglass} alt="Up-time guarantee" width={25} height={25} />
              <p className="text-gray-500 text-lg">
                Multiple operators connect, 99.99% Up-time, SMPP & SS7 Connects,
                Secured SMPP & HTTP APIs, white-labeled solutions.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image src={trophy} alt="Award-winning team" width={25} height={25} />
              <p className="text-gray-500  text-lg">Rely on an experienced and knowledgeable team.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 mt-6" />
    </div>
  );
};

export default OurClients;
