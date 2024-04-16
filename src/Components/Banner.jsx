import { FaSearchLocation } from "react-icons/fa";
import { ReactTyped } from "react-typed"
import Searching from "./Searching";
import { useState } from "react";

const Banner = () => {
  const [ShowMessage, SetShowMessage] = useState(false)

  function ShowIt() {
    SetShowMessage(true)
  }
  function Closeit() {
    SetShowMessage(false)
  }
  return (
    <div  className=" flex items-center justify-center flex-col   text-center">
      <div className=" space-y-9 flex items-center flex-col  text-center">
        <p className="p-2 bg-blue-300/40 nunito pr-1  rounded-3xl flex items-center  gap-5  text-xs font-bold max-w-[350px]">
          <span className="gradient-t   w-14 rounded-2xl  poppins  flex items-center justify-center">
            New
          </span>{" "}
          <span className="pr-3 plus"> The best job search platform</span>
        </p>
            {ShowMessage && <Searching  onClick={Closeit}/> }
        <h1 className=" text-white text-balance plus leading-10 p-1 lg:text-4xl ds:text-center md:text-3xl ds:text-lg font-bold text-4xl ">
          We Help You look for{" "}
          <span className=" gradient-t text-transparent bg-clip-text">
          <ReactTyped
          strings={[
            "Jobs",
            "Employers",
            "",
          ]}
          typeSpeed={140}
          backSpeed={150}
          loop
        /><br></br>
          </span>{" "}
          Around Your Location Without Any Cost
        </h1>
        <p className="  text-zinc-400 lg:text-sm text-center text-balance  ds:text-[10px] xxs:text-[10px] plus">
          This platform helps you find employers whether remote or intentional
          ,at no cost all you have to do is upload your Resume and get
          started with an account
        </p>
        <div>
          <div className=" gap-3 xs:w-full  bg-white plus shadow-2xl ds:flex-col xxs:flex-col sm:flex-row lg:flex-row flex items-center justify-between rounded-lg p-2 h-auto">
            <span className=" bg-zinc-200 nunito h-full flex items-center justify-center p-2 rounded-lg">
              <input
                type="text"
                placeholder="Job type or Keywords "
                className=" h-full w-auto p-1 focus:no-underline placeholder:text-zinc-400 outline-none text-zinc-400 text-sm focus:border-none  bg-transparent"
              />
            </span>
            <span className=" bg-zinc-200 h-full flex items-center justify-center p-2 rounded-lg">
              <input
                type="number"
                placeholder="Enter Zip Code "
                className=" h-full w-auto p-1 focus:no-underline placeholder:text-zinc-400 outline-none text-zinc-400 text-sm focus:border-none  bg-transparent"
              />
            </span>
           <button>
           <span onClick={ShowIt} className=" h-full w-full p-3 flex items-center justify-center rounded-lg bg-blue-200 text-blue-600 smooth">
              {" "}
              <FaSearchLocation />{" "}
            </span>
           </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

