import React from "react";

const UniversalButton = ({ Varient, label }) => {
  switch (Varient) {
    case "Submit":
      return (
        <div>
          <button
            className="
            group relative overflow-hidden cursor-pointer
            border-[5px] rounded-sm px-4 py-2
            text-[32px] font-bold border-[#00a1b7] text-[#00a1b7]
            transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]
            active:scale-95 active:brightness-90"
          >
            <span
              className="
              relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.83,0,0.17,1)]
              group-hover:text-[#202020]"
            >
              {label}
            </span>

            <span
              className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[30deg]
              bg-[#00a1b7] h-[calc(300%+1em)] w-0
              transition-all duration-[1000ms] ease-[cubic-bezier(0.83,0,0.17,1)]
              group-hover:w-[calc(120%+1em)]"
            ></span>
          </button>
        </div>
      );

    case "Read more":
      return (
        <button
          className="
        bg-[#00BFA6] px-5 py-2 text-white uppercase tracking-[2px] 
        rounded border-2 border-dashed border-[#00BFA6] 
        shadow-md transition-all duration-400 
        hover:bg-white hover:text-[#00BFA6] 
        active:bg-[#87dbd0] text-sm
      "
        >
          {label}
        </button>
      );

    case "Logout":
      return (
        <button
          className="
        group flex items-center justify-start 
        w-[45px] h-[45px] rounded-full bg-[rgb(255,65,65)]
        border-none cursor-pointer relative overflow-hidden
        shadow-[2px_2px_10px_rgba(0,0,0,0.199)]
        transition-all duration-300 ease-in-out
        hover:w-[125px] hover:rounded-[40px]
        active:translate-x-[2px] active:translate-y-[2px]
      "
        >
          <div
            className="
          flex items-center justify-center w-full transition-all duration-300 
          group-hover:w-[30%] group-hover:pl-5
        "
          >
            <svg viewBox="0 0 512 512" className="w-[17px]">
              <path
                fill="white"
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
          </div>

          <div
            className="
          absolute right-0 opacity-0 w-0 text-white text-[1.2em] font-semibold
          transition-all duration-300 
          group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-2
        "
          >
            {label}
          </div>
        </button>
      );

   case "Join Us":
  return (
     <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3 font-medium text-black shadow-2xl">
  <span className="absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>

  <span className="absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
    <span className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-blue-600 blur-md"></span>
    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-sky-500 blur-md"></span>
    <span className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-green-500 blur-md"></span>
    <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-orange-500 blur-md"></span>
    <span className="absolute bottom-0 right-0 -mr-20 h-24 w-24 rounded-full bg-red-500 blur-md"></span>
  </span>

  <span className="relative text-white">{label}</span>
</button>

  );


    case "Login":
      return (
        <a
          href="#"
          className="
        relative inline-block px-7 py-3 rounded-full
        text-white font-bold text-[16px] border-4 border-[#fc4664] 
        overflow-hidden z-10 group
      "
        >
          <span className="relative z-10 text-black">I am a button</span>

          <span
            className="
          absolute left-0 top-0 w-full h-full bg-[#fc4664] 
          -translate-x-full transition-transform duration-300 
          group-hover:translate-x-0 z-0
        "
          ></span>
        </a>
      );

    default:
      return;
      <div>Mai button hu</div>;
  }
};

export default UniversalButton;
