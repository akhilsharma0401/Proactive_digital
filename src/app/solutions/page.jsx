"use client";
import Image from "next/image";
import Link from "next/link";
// import { employee_cab, mainpagefirst, sms_based, Worker_app } from "../../../public/assets/images";
import sms_based from "../../../public/images/sms_based.jpg";
import employee_cab from "../../../public/images/employee_cab.jpg";
import Worker_app from "../../../public/images/Worker_app.jpg";
const items = [
  {
    href: "/sms-based-coupon-management-system",
    img: sms_based,
    title: "SMS Based Coupon Management System",
    alt: "SMS Based Coupon Management System",
    edge: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    href: "/employee-cab-management-system",
    img: employee_cab,
    title: "Employee-Cab Management System",
    alt: "Employee-Cab Management System",
    edge: "from-sky-400 via-blue-400 to-indigo-400",
  },
  {
    href: "/worker-loyalty-reward-app",
    img: Worker_app,
    title: "Worker Loyalty Reward App",
    alt: "Worker Loyalty Reward App",
    edge: "from-rose-400 via-orange-400 to-amber-400",
  },
];

export default function ShowcaseGrid() {
  return (
    <section
      className="relative w-full md:pt-35 pt-30 px-5 md:px-16 overflow-hidden
                        bg-gradient-to-b from-teal-50 via-white to-white"
    >
      {/* soft aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute top-10 -left-10 h-[22rem] w-[22rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="relative  px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-25 mb-10">
        {items.map((c, i) => (
          <Link key={i} href={c.href} className="group focus:outline-none">
            {/* animated gradient edge */}
            <div className="relative rounded-[26px] p-[2px]">
              {/* subtle sheen ring (spins on hover) */}
              <div
                className="absolute inset-0 rounded-[26px]
      opacity-0 group-hover:opacity-60
      bg-[conic-gradient(at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,.12)_50%,rgba(0,0,0,0)_100%)]
      animate-[spin_8s_linear_infinite]
      [animation-play-state:paused] group-hover:[animation-play-state:running]
      transition-opacity duration-500
    "
              />
              {/* color edge lights up on hover */}
              <div
                className={`
                absolute inset-0 rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-gradient-to-r ${c.edge}
                [mask:linear-gradient(#000,transparent_40%)]
              `}
              />

              {/* card surface */}
              <div
                className="
                relative overflow-hidden rounded-[24px] bg-white
                ring-1 ring-slate-200 shadow-xl
                transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)]
                group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,.25)]
                will-change-transform
              "
              >
                {/* shine sweep */}
                <span
                  className="
                  pointer-events-none absolute -left-1/2 top-0 h-full w-1/2
                  bg-gradient-to-r from-transparent via-white/60 to-transparent
                  opacity-0 translate-x-0
                  group-hover:opacity-100 group-hover:translate-x-[200%]
                  transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)]
                "
                />

                {/* image */}
                <div className="relative aspect-[16/9] sm:aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    className="
                       rounded-[24px]
                      transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]
                      group-hover:scale-[1.06]
                    "
                    priority={i === 0}
                  />
                </div>

                {/* top-left floating label (appears on hover) */}
                <div
                  className="
                  absolute top-3 left-3 sm:top-4 sm:left-4
                  translate-y-[-6px] opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-400 ease-[cubic-bezier(.22,.61,.36,1)]
                "
                >
                  <span
                    className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold
                                   bg-slate-900/80 text-white backdrop-blur-sm ring-1 ring-black/10"
                  >
                    {c.title}
                  </span>
                </div>

                {/* bottom-right CTA */}
                <div
                  className="
                  absolute bottom-3 right-3 sm:bottom-4 sm:right-4
                  translate-y-3 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-400 ease-[cubic-bezier(.22,.61,.36,1)]
                "
                >
                  <span
                    className="relative inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold
                                   px-3 py-1.5 rounded-full overflow-hidden
                                   text-slate-900 ring-1 ring-slate-300 bg-white/85 backdrop-blur-sm"
                  >
                    <span className="relative z-10">Explore</span>
                    <span className="relative z-10">→</span>
                    {/* bottom→top fill */}
                    <i
                      className="
                      absolute inset-0 bg-slate-900/10 translate-y-full
                      transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)]
                      group-hover:translate-y-0
                    "
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
