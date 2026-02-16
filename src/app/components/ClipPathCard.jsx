// "use client"
// import React from "react";
// import Image from "next/image"; 
// import { useAnimate } from "framer-motion";

// // icons
// import servicesIconSeo from "../../../public/icons/servicesIconSeo.png";
// import servicesIconWebDevelopment from "../../../public/icons/servicesIconWebDevelopment.png";
// import servicesIconWebDesign from "../../../public/icons/servicesIconWebDesign.png";
// import servicesIconOpenSourceDevelopment from "../../../public/icons/servicesIconOpenSourceDevelopment.png";
// import servicesIconBranding from "../../../public/icons/servicesIconBranding.png";
// import servicesIconAnimation from "../../../public/icons/servicesIconAnimation.png";
// import servicesIconAffiliateMarketing from "../../../public/icons/servicesIconAffiliateMarketing.png";
// import servicesIconSocialMediaAds from "../../../public/icons/servicesIconSocialMediaAds.png";
// import servicesIconSocialMediaMarketing from "../../../public/icons/servicesIconSocialMediaMarketing.png";
// import servicesIconContentMarketing from "../../../public/icons/servicesIconContentMarketing.png";
// import servicesIconEcommerce from "../../../public/icons/servicesIconEcommerce.png";
// import servicesIconCelitix from "../../../public/icons/servicesIconCelitix.png";

// export const ClipPathCard = () => {
//   return (
//     <div>
//       <div className=" px-6 lg:px-20 rounded-xl ">
//         <div className="mx-auto container">
//           {/* bg-[#eff0f9] */}
//           <div className="bg-[#F9FAFB] divide-y divide-neutral-900 border border-neutral-900">
//             {/* row 1 */}
//             <div className="grid grid-cols-2 divide-x divide-neutral-900 ">
//               <div className="grid grid-cols-2 divide-x divide-neutral-900">
//                 <LinkBox
//                   Icon={servicesIconWebDevelopment}
//                   href="/web-development "
//                   Title="Web Development"
//                 />
//                 <LinkBox 
//                   Icon={servicesIconEcommerce} 
//                   href="/ecommerce" 
//                   Title="Ecommerce " 
//                 />
//               </div>
//               <LinkBox
//                 Icon={servicesIconOpenSourceDevelopment}
//                 href="/open-source-development"
//                 Title="Open Source Development"
//               />
//             </div>

//             {/* row 2 */}
//             <div className="grid grid-cols-2 divide-x divide-neutral-900">
//               <LinkBox
//                 Icon={servicesIconWebDesign}
//                 href="/web-design"
//                 Title="Website Redesign"
//               />
//               <div className="grid grid-cols-2 divide-x divide-neutral-900">
//                 <LinkBox Icon={servicesIconBranding} href="/branding" Title="Branding" />

//                 <LinkBox
//                   Icon={servicesIconAnimation}
//                   href="/animation"
//                   Title="Animation"
//                 />
//               </div>
//               {/* <LinkBox Icon={SiFacebook} href="#" Title="Digital Marketing" /> */}
//             </div>

//             {/* row 3 */}
//             <div className="grid grid-cols-2 divide-x divide-neutral-900">
//               <div className="grid grid-cols-2 divide-x divide-neutral-900">
//                 <LinkBox
//                   Icon={servicesIconAffiliateMarketing}
//                   href="/affiliate-marketing"
//                   Title="Affiliate Marketing"
//                 />
//                 <LinkBox
//                   Icon={servicesIconSocialMediaAds}
//                   href="/social-media-ads"
//                   Title="Social Media Ads"
//                 />
//               </div>
//               <LinkBox
//                 Icon={servicesIconSocialMediaMarketing}
//                 href="/smm"
//                 Title="Social Media Marketing"
//               />
//             </div>

//             {/* row 4 */}
//             <div className="grid grid-cols-2 divide-x divide-neutral-900">
//               <LinkBox
//                 Icon={servicesIconSeo}
//                 href="/seo"
//                 Title="Search Engine Optimization"
//               />
//               <div className="grid grid-cols-2 divide-x divide-neutral-900">
//                 <LinkBox
//                   Icon={servicesIconContentMarketing}
//                   href="/content-marketing"
//                   Title="Content Marketing"
//                 />
//                 <LinkBox
//                   Icon={servicesIconCelitix}
//                   href="https://celitix.com/"
//                   Title="Cpass Solutions"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

// const ENTRANCE_KEYFRAMES = {
//   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// const EXIT_KEYFRAMES = {
//   left: [NO_CLIP, TOP_RIGHT_CLIP],
//   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
//   top: [NO_CLIP, TOP_RIGHT_CLIP],
//   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// const LinkBox = ({ Icon, href, Title }) => {
//   const [scope, animate] = useAnimate();

//   const getNearestSide = (e) => {
//     const box = e.target.getBoundingClientRect();

//     const proximityToLeft = {
//       proximity: Math.abs(box.left - e.clientX),
//       side: "left",
//     };
//     const proximityToRight = {
//       proximity: Math.abs(box.right - e.clientX),
//       side: "right",
//     };
//     const proximityToTop = {
//       proximity: Math.abs(box.top - e.clientY),
//       side: "top",
//     };
//     const proximityToBottom = {
//       proximity: Math.abs(box.bottom - e.clientY),
//       side: "bottom",
//     };

//     const sortedProximity = [
//       proximityToLeft,
//       proximityToRight,
//       proximityToTop,
//       proximityToBottom,
//     ].sort((a, b) => a.proximity - b.proximity);

//     return sortedProximity[0].side;
//   };

//   const handleMouseEnter = (e) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: ENTRANCE_KEYFRAMES[side],
//     });
//   };

//   const handleMouseLeave = (e) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: EXIT_KEYFRAMES[side],
//     });
//   };

//   return (
//     <a
//       href={href}
//       onMouseEnter={(e) => {
//         handleMouseEnter(e);
//       }}
//       onMouseLeave={(e) => {
//         handleMouseLeave(e);
//       }}
//       className="relative grid h-20 w-full place-content-center md:justify-center sm:h-24 md:h-28 p-6  transition-all duration-1000"
//     >
//       <div className="flex sm:justify-center lg:justify-start">
//         <Image
//           src={Icon}
//           alt={Title}
//           className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
//         />
//       </div>
//       <h2 className=" text-lg lg:text-xl font-medium text-center">{Title}</h2>
//       <div
//         ref={scope}
//         style={{
//           clipPath: BOTTOM_RIGHT_CLIP,
//         }} 
//         className="absolute inset-0 grid place-content-center bg-[#3e66f3] text-white transition-all duration-1000"
//       >
//         <Image
//           src={Icon}
//           alt={Title}
//           className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
//         />
//         <h2 className="text-xl font-medium text-center">{Title}</h2>
//       </div>
//     </a>
//   );
// };


"use client"
import React from "react";
import { useAnimate } from "framer-motion";

// icons  
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";

export const ClipPathCard = () => {
  return (
    <div>
      <div className=" px-0 lg:px-20 rounded-xl ">
        <div className="">
          {/* bg-[#eff0f9] */}
          <div className="hidden md:block bg-[#F9FAFC] divide-y divide-neutral-900 border border-neutral-900">
            {/* row 1 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900 ">
              <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox
                  Icon={GrHtml5}
                  Title="HTML5"
                />
                <LinkBox
                  Icon={TbBrandCss3}
                  Title="CSS3 "
                />
              </div>
              <LinkBox
                Icon={TbBrandJavascript}
                Title="JavaScript"
              />
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <LinkBox
                Icon={SiExpress}
                Title="Express JS"
              />
              <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox
                  Icon={FaReact}
                  Title="ReactJS" />

                <LinkBox
                  Icon={RiNextjsFill}
                  Title="NextJS"
                />
              </div>
            </div>

            {/* row 3 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox
                  Icon={FaJava}
                  Title="Java"
                />
                <LinkBox
                  Icon={FaPhp}
                  Title="Php"
                />
              </div>
              <LinkBox
                Icon={FaNode}
                Title="NodeJS"
              />
            </div>

            {/* row 4 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <LinkBox
                Icon={FaVuejs}
                Title="VueJS"
              />
              <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox
                  Icon={SiMysql}
                  Title="MySQL"
                />
                <LinkBox
                  Icon={SiMongodb}
                  Title="MongoDB"
                />
              </div>
            </div>
          </div>

          {/* mobile */}
          {/* <div className="bg-[#F9FAFC] divide-y divide-neutral-900 border border-neutral-900 md:hidden">

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <LinkBox Icon={GrHtml5} Title="HTML" />
              <div className="col-span-2">
                <LinkBox Icon={TbBrandCss3} Title="CSS" />
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2">
                <LinkBox Icon={TbBrandJavascript} Title="JavaScript" />
              </div>
              <LinkBox Icon={SiExpress} Title="ExpressJS" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <LinkBox Icon={FaReact} Title="ReactJS" />
              <div className="col-span-2">
                <LinkBox Icon={RiNextjsFill} Title="NextJS" />
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2 ">
                <LinkBox Icon={FaJava} Title="Java" />
              </div>
              <LinkBox Icon={FaPhp} Title="Php" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <LinkBox Icon={FaNode} Title="NodeJS" />

              <div className="col-span-2 ">
                <LinkBox Icon={FaVuejs} Title="VueJS" />
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2 ">
                <LinkBox Icon={SiMongodb} Title="MongoDB" />
              </div>
              <LinkBox Icon={SiMysql} Title="MySQL" />
            </div>
          </div> */}

          {/* MOBILE */}
          <div className="bg-[#F9FAFC] divide-y divide-neutral-900 border border-neutral-900 md:hidden">

            {/* Row 1 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <LinkBox Icon={GrHtml5} Title="HTML" />
              <LinkBox Icon={TbBrandCss3} Title="CSS" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2 border-r border-neutral-900">
                <LinkBox Icon={TbBrandJavascript} Title="JavaScript" />
              </div>
              <LinkBox Icon={SiExpress} Title="ExpressJS" />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <LinkBox Icon={FaReact} Title="ReactJS" />
              <LinkBox Icon={RiNextjsFill} Title="NextJS" />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2 border-r border-neutral-900">
                <LinkBox Icon={FaJava} Title="Java" />
              </div>
              <LinkBox Icon={FaPhp} Title="Php" />
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
              <LinkBox Icon={FaNode} Title="NodeJS" />
              <LinkBox Icon={FaVuejs} Title="VueJS" />
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-3 divide-x divide-neutral-900">
              <div className="col-span-2 border-r border-neutral-900">
                <LinkBox Icon={SiMongodb} Title="MongoDB" />
              </div>
              <LinkBox Icon={SiMysql} Title="MySQL" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, Title }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center md:justify-center sm:h-24 md:h-28 p-6 transition-all duration-1000 cursor-pointer" >
      <div className="flex sm:justify-center lg:justify-start">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#3e66f3]" />

      </div>

      <h2 className="text-lg lg:text-xl font-medium text-center">{Title}</h2>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-[#3e66f3] text-white transition-all duration-1000"
      >
        <Icon className="w-10 h-10 sm:w-12 sm:h-12" />

        <h2 className="text-xl font-medium text-center">{Title}</h2>
      </div>
    </div>
  );
};
