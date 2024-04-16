/* eslint-disable react/prop-types */

import { MdArrowRightAlt } from "react-icons/md";
import { signup } from "../assets/assets";
 
const SignUp = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full high-index1 h-screen bg-black text-white z-50">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full ds:hidden md:block h-auto max-w-[550px] md:h-screen">
          <video loop muted autoPlay className="object-cover h-[700px] w-full">
            <source src={signup} type="video/mp4" />
          </video>
        </div>
        <div className="w-full">
          <div className="p-5 relative">
            <button className="flex smooth  hover:bg-white hover:text-black items-center absolute m-5 top-0 right-0 gap-3 justify-center p-3 rounded-3xl text-xs plus border border-zinc-500" onClick={props.onClose}>
              <p>Go Back</p>
              <MdArrowRightAlt />
            </button>
            <div>
          Sign Up To Create Your Account

              <div className=" ">
                <form action="#" className="pt-7 space-y-4">
                  <div className=" flex sm:flex-row ds:flex-col  items-center justify-between gap-4">
                    <input type="text" placeholder=" John " className=" sm:w-[50%] smooth outline-none focus:bg-slate-500/45 focus:smooth ds:w-full placeholder:text-zinc-600  text-xs p-3 rounded-2xl bg-slate-500/25"/>
                    <input type="text" placeholder="  Williams" className=" sm:w-[50%]  placeholder:text-zinc-600 smooth text-xs p-3 outline-none ds:w-full  focus:bg-slate-500/45 rounded-2xl bg-slate-500/25"/>
                  </div>
                  <div className="flex sm:flex-row ds:flex-col  sm:items-center justify-between gap-4">
                  <input type="number" placeholder="Age" className=" w-[90px]  placeholder:text-zinc-600 smooth text-xs p-3 outline-none   focus:bg-slate-500/45 rounded-2xl bg-slate-500/25"/>
                  <input type="email" placeholder="Example@Gmail.com" className=" w-full  placeholder:text-zinc-600 smooth text-xs p-3 outline-none   focus:bg-slate-500/45 rounded-2xl bg-slate-500/25"/>
                  </div>
                  <textarea  placeholder="Tell Us A bit About you" className=" w-full h-[160px] resize-y  placeholder:text-zinc-600 smooth text-xs p-3 outline-none   focus:bg-slate-500/45 rounded-2xl bg-slate-500/25"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
