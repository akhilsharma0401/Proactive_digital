"use client";
import React from "react";
import Lottie from "lottie-react";

// assets
import privacyPolicyHero from "../../../public/animation/privacyPolicyHero.json";

function page() {
  return (
    <>
      <div className="bg-[#3e66f3] lg:px-20">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between lg:py-0 py-10 px-4 gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white  space-y-5 flex flex-col sm:justify-center ">
            <h1 className=" poppins font-medium text-3xl md:text-4xl md:text-left text-center">
              PRIVACY POLICY
            </h1>

            <p className=" open-sans  text-center md:text-left text-[18px]  leading-relaxed">
              Your data and strategy are safe with us. Nothing to brag about our
              trust and confidence with our client, but take a look once at our
              privacy policy.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex lg:justify-end justify-center">
            <Lottie
              animationData={privacyPolicyHero}
              loop={true}
              className="w-64 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-6 lg:px-20 py-10">
        <div className="px-8 lg:px-0">
          <h2 className="text-white  text-2xl p-4 bg-[#3e66f3] relative">
            PRIVACY POLICY
            {/* Left Strip */}
            <span className="absolute left-0 top-0 h-full w-2 bg-sky-400"></span>
          </h2>
        </div>
        <div className=" space-y-5 p-8 bg-gray-50 mt-8">
          <h3 className=" poppins text-[20px] font-semibold">
            Privacy Statement
          </h3>
          <p className=" open-sans  text-[18px]">
            This Privacy Statement applies to the{" "}
            <a
              href="https://www.proactivedigital.in/"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              proactivedigital.in
            </a>{" "}
            Web Site, Content, Products, and Services and governs data
            collection and usage. By using proactivedigital.in Website, Content,
            Products, and/or Services, you consent to the data practices
            described in this Privacy Statement.
          </p>

          <h3 className=" poppins text-[20px] font-semibold">
            1.1 Privacy Policy Overview
          </h3>
          <p className=" open-sans  text-[18px]">
            We contact our customers in relation to the services they have
            requested and/or informational mail. We do not sell contact
            information of our users.
          </p>
          <p className=" open-sans  text-[18px]">
            We place third party advertisement banners on some of our pages.
            These ads are served by such providers as google adsense. Placing
            these ads helps us keep providing certain content and services free
            of charge. If you click on these ads, you may be directed to a third
            party web site, and you may be prompted by a third party to enter
            personal or other information. EIIM has no control over visitor’s
            interaction with third party ads and/or web sites, and we have no
            information about their information policies. For any third party
            services linked to or advertised on our web site, you must refer to
            their own policies and terms of use. We have no responsibility
            whatsoever for any third party services that may be linked to, or
            advertised on our web site, and their information practices.
          </p>
          <p className=" open-sans  text-[18px]">
            More information about our Privacy Policy is in the following
            sections.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">
            1.2 Collection of Information
          </h3>
          <p className=" open-sans  text-[18px]">
            When you purchase services from{" "}
            <a
              href="https://www.proactivedigital.in/"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              proactivedigital.in
            </a>
            , or contact proactivedigital.in, proactivedigital.in obtains
            personally identifiable information such as your e-mail address,
            name, contact address and/or telephone number. Your name and email
            address may also have to be obtained in order to send you
            informational email (Collectively the “Personal Information”).
          </p>
          <p className=" open-sans  text-[18px]">
            Anonymous information about your network, hardware, software and Web
            Site usage activity that is automatically collected by
            proactivedigital.in can include, without limitation, your IP
            address, your device type, your browser information, domain names,
            access times, referring web sites addresses, Website pages you
            visit. Your responses to proactivedigital.in questionnaires,
            surveys, and your personality assessment scores may be anonymously
            collected by proactivedigital.in. Proactivedigital.in may also
            collect anonymous demographic information, which is not unique to
            you, such as your country, city, zip code, age, gender, occupation,
            and preferences. (Collectively the “Anonymous Information”)
          </p>
          <p className=" open-sans  text-[18px]">
            Your name, email address, responses to may be saved in the
            proactivedigital.in back end system.
          </p>
          <p className=" open-sans  text-[18px]">
            Proactivedigital.in may refer, advertise, and/or offer for sale, via
            its Web Site, Content or Services, certain Third Party Services,
            including, without limitation, Linked Sites, and Ads presented by
            third parties. An example of Ads, without limitation, is an
            advertisement banner of an educational institution, or Ads served by
            Google Ad Sense. If you click Ads, you may be directed to a Third
            Party web site, and prompted by a Third Party to enter personal and
            other information. Proactivedigital.in has no control over the Third
            Party Services and over visitor’s interaction with them. Terms of
            use, privacy and information policies of the Third Party Services
            are not covered by our policies.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">
            1.3 Use of Personal Information
          </h3>
          <p className=" open-sans  text-[18px]">
            The Personal Information is collected by{" "}
            <a
              href="https://www.proactivedigital.in/"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              proactivedigital.in
            </a>{" "}
            to deliver services that you have purchased and/or requested from
            proactivedigital.in, provide guidance, and provide customer support
            to you. Proactivedigital.in may use your contact information to
            inform you of other products or services available from
            proactivedigital.in and its affiliates. Proactivedigital.in may also
            contact you via surveys to conduct research about your opinion of
            current services or of potential new services that may be offered.
          </p>
          <p className=" open-sans  text-[18px]">
            Proactivedigital.in may share your contact information with trusted
            partners to send you email regarding the service you have requested,
            or provide customer support, or arrange for deliveries. All such
            third parties are prohibited from using your personal information
            except to provide these services to proactivedigital.in and its
            clients.
          </p>
          <p className=" open-sans  text-[18px]">
            Proactivedigital.in will disclose your personal information, without
            notice, only if required to do so by law or in the good faith belief
            that such action is necessary to: (a) conform to the edicts of the
            law or comply with legal process served on proactivedigital.in or
            the Web Site; (b) protect and defend the rights or property of
            proactivedigital.in and, (c) act under exigent circumstances to
            protect the personal safety of users of proactivedigital.in.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">
            1.4 Use of Anonymous Information
          </h3>
          <p className=" open-sans  text-[18px]">
            The Anonymous Information is used by{" "}
            <a
              href="https://www.proactivedigital.in/"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              proactivedigital.in
            </a>{" "}
            for the operation, maintaining the quality, enhancements and
            analysis regarding use, of the proactivedigital.in Website, Content,
            Products, and Services, and for research. The Anonymous Information
            may be collected by proactivedigital.in or its service providers
            (e.g., Google Analytics or Google Ad Sense). The content and Ads
            that appear on the Web Site’s pages may be customized based on the
            information about the pages you visit, your geographic location
            based on your{" "}
            <a
              href="https://en.wikipedia.org/wiki/IP_address"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              IP Adress
            </a>
            , and/or results of your personality assessment. You grant
            proactivedigital.in an irrevocable, perpetual, royalty-free right
            and license to use the Anonymous Information for, without
            limitation, quality assurance, personalizing content, research,
            marketing, new content, products and services.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">
            1.5 Use of Cookies
          </h3>
          <p className=" open-sans  text-[18px]">
            When you visit the Web Site, we or one of our third party service
            providers (e.g., Google Analytics) place a text file called a
            “cookie” in the browser directory of your computer’s hard drive. The
            Web Site uses cookies to help you personalize your online experience
            and provide certain features. Cookies cannot be used to run programs
            or deliver viruses to your computer. Cookies are uniquely assigned
            to your browser, and can only be read by a web server in the domain
            that issued the cookie. One of the primary purposes of cookies is to
            provide a convenience feature. The purpose of a cookie is to tell
            the web server that you have returned to a specific page, or have
            been authenticated, or to personalize content based on result of a
            personality test you take on the Web Site, or recall your specific
            information on subsequent visits. You have the ability to accept or
            decline cookies via your browser. Most web browsers automatically
            accept cookies, but you can usually modify your browser setting to
            decline cookies if you prefer, or delete cookies after using the Web
            Site. Some browsers may provide “privacy” or “incognito” mode in
            which cookies are automatically deleted after closing the browser.
            If you choose to decline cookies, you will not be able to use
            certain features and fully experience the interactive features of
            the Web Site.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">
            1.6 Security of Personal Information
          </h3>
          <p className=" open-sans  text-[18px]">
            Proactivedigital.in takes steps to secure personal information from
            unauthorized access, use or disclosure. Proactivedigital.in keeps
            the personally identifiable information you provide on computers in
            a controlled environment, protected from unauthorized access, use or
            disclosure. While we strive to use commercially acceptable means to
            protect your personal information, we cannot guarantee its absolute
            security.
          </p>
          <h3 className=" poppins text-[20px] font-semibold">1.7 Payment</h3>
          <p className=" open-sans  text-[18px]">
            We use Razorpay for processing payments. We/Razorpay do not store
            your card data on their servers. The data is encrypted through the
            Payment Card Industry Data Security Standard (PCI-DSS) when
            processing payment. Your purchase transaction data is only used as
            long as isnecessary to complete your purchase transaction. After
            that is complete, your purchase transaction information is not
            saved.
          </p>
          <p className=" open-sans  text-[18px]">
            Our payment gateway adheres to the standards set by PCI-DSS as
            managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.
          </p>
          <p className=" open-sans  text-[18px]">
            PCI-DSS requirements help ensure the secure handling of credit card
            information. For more insight, you may also want to read terms and
            conditions of razorpay on{" "}
            <a
              href="https://razorpay.com"
              className="text-blue-600 font-serif"
              target="_blank"
            >
              https://razorpay.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
