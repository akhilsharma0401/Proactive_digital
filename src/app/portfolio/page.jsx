import Image from "next/image";
import React from "react";
import Link from "next/link";

// icons
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

// images
import portfolioKavassu from "../../../public/images/portfolioKavassu.png";
import portfolioTirupati from "../../../public/images/portfolioTirupati.png";
import portfolioDigiBima from "../../../public/images/portfolioDigiBima.png";
import portfolioBeaconPublicSchool from "../../../public/images/portfolioBeaconPublicSchool.png";
import portfolioSJTSchool from "../../../public/images/portfolioSJTSchool.png";
import portfolioUrbanDesign from "../../../public/images/portfolioUrbanDesign.png";
import portfolioFavoHardware from "../../../public/images/portfolioFavoHardware.png";
import portfolioHelthSquare from "../../../public/images/portfolioHelthSquare.png";
import portfolioLaranza from "../../../public/images/portfolioLaranza.png";
import portfolioAltus from "../../../public/images/portfolioAltus.png";
import portfolioShaktiHandiCrafts from "../../../public/images/portfolioShaktiHandiCrafts.jpg";
import portfolioDhorafab from "../../../public/images/portfolioDhorafab.jpg";
import portfolioThamosa from "../../../public/images/portfolioThamosa.jpg";
import portfolioInfinite from "../../../public/images/portfolioInfinite.jpg";
import portfolioQueenslifts from "../../../public/images/portfolioQueenslifts.jpg";
import portfolioMasalaMistri from "../../../public/images/portfolioMasalaMistri.jpg";

const portfolioItems = [
  {
    id: 1,
    image: portfolioDhorafab,
    title: "DHORA FAB",
    link: "https://dhorafab.com/",
  },
  {
    id: 2,
    image: portfolioHelthSquare,
    title: "HEALTH SQUARE",
    link: "https://healthsquare.in/",
  },
  {
    id: 3,
    image: portfolioInfinite,
    title: "IFWPL",
    link: "https://ifwpl.com/",
  },
  {
    id: 4,
    image: portfolioThamosa,
    title: "THAMOSA",
    link: "https://thamosastays.com/",
  },
  {
    id: 5,
    image: portfolioDigiBima,
    title: "DIGIBIMA",
    link: "https://digibima.com/",
  },
  {
    id: 6,
    image: portfolioShaktiHandiCrafts,
    title: "SHAKTI HANDICRAFT",
    link: "https://shaktihandicrafts.com/",
  },
  {
    id: 7,
    image: portfolioQueenslifts,
    title: "QUEENS LIFTS",
    link: "https://www.queenslifts.com/",
  },
  {
    id: 8,
    image: portfolioMasalaMistri,
    title: "MASALA MISTRI",
    link: "https://masalamistri.com/",
  },
  {
    id: 9,
    image: portfolioUrbanDesign,
    title: "URBAN DESIGN STORY ",
    link: "https://urbandesignstory.com/",
  },
  {
    id: 10,
    image: portfolioSJTSchool,
    title: "SJT SCHOOL",
    link: "https://www.sjtschool.in/",
  },
  {
    id: 11,
    image: portfolioFavoHardware,
    title: "FAVO HARDWARE",
    link: "https://www.favohardware.com/",
  },
  {
    id: 12,
    image: portfolioTirupati,
    title: "TIRUPATI SPRIKLERS",
    link: "https://www.tirupatisprinklers.com/",
  },
  {
    id: 13,
    image: portfolioLaranza,
    title: "LARANZA ",
    link: "https://laranza.in/",
  },
  {
    id: 14,
    image: portfolioKavassu,
    title: "KAVASSU HERITAGE HAVELI",
    link: "https://kavassuheritagehaveli.com/",
  },
  {
    id: 15,
    image: portfolioAltus,
    title: "ALTUS INTERIO JAIPUR  ",
    link: "https://www.altusinteriojaipur.com/",
  },
  {
    id: 16,
    image: portfolioBeaconPublicSchool,
    title: "BEACON PUBLIC SCHOOL ",
    link: "https://www.beaconpublicschool.com/",
  },
  
];

function page() {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 px-6 lg:px-10 space-y-10 ">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="poppins text-[#3e66f3] font-medium text-[35px]  text-center">
            {" "}
            Our Portfolio{" "}
          </h2>
          <p className="open-sans text-[16px] text-gray-700 text-center max-w-5xl mx-auto ">
            Showcasing the projects that define our expertise and vision. Every
            solution we build delivers clarity, impact, and measurable results.
            Crafted with precision, each project moves our clients closer to
            their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl hover:shadow-2xl transition-all duration-300 h-95 md:h-100 overflow-hidden cursor-pointer bg-red-300"
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={450}
                  className="w-full h-full object-fit "
                />
              </div>

              {/* ALWAYS VISIBLE LIGHT TINT */}
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

              {/* HOVER TINT - Elliptical Reveal */}
              <div className="absolute top-[-60%] right-[-60%] w-[0px] h-0 bg-black/45 rounded-full group-hover:w-[900px] group-hover:h-[800px] transition-all duration-900 ease-out pointer-events-none z-20"></div>

              {/* Know More Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 z-30">
                <Link href={item.link} target="_blank">
                  <button aria-label="Visit Site" className="w-28 h-28 border border-white/60 rounded-full flex items-center justify-center text-white tracking-widest text-sm backdrop-blur-[1px] hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-300">
                    VISIT SITE
                  </button>
                </Link>
              </div>

              {/* Text Section */}
              {/* <div className="absolute bottom-6 left-6 z-30">
                <h3 className="text-white text-3xl">{item.title}</h3>
              </div> */}

              {/* TEXT FOR LARGE SCREEN */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden lg:block w-full px-4 ">
                <h3 className="poppins text-white text-2xl text-center">
                  {" "}
                  {item.title}{" "}
                </h3>
              </div>

              {/* BUTTON FOR SMALL & MEDIUM SCREENS */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 lg:hidden">
                <Link href={item.link} target="_blank">
                  <button className="poppins flex items-center gap-2 px-4 py-2 text-sm bg-white/20 text-white text-nowrap backdrop-blur border border-white/50 rounded-md hover:bg-white hover:text-black transition-all">
                    {item.title}

                    <HiMiniArrowTopRightOnSquare className="text-2xl font-semibold" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
