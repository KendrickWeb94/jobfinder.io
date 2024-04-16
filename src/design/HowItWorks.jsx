
import { work } from "../assets/assets";
import { FaRegUser } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";


const HowItWorks = () => {
  return (
    <div className="w-full p-8 bg-white/85 rounded-md smooth flex items-center justify-center max-w-[90%]">
      <div className="ds:flex-col p-5 md:flex-col lg:flex-row gap-20 justify-between flex">
      <div className=" ds:bg-white ds:p-2 md:p-1 rounded-md md:bg-transparent">
      <img src={work} className="hero-img2 ds:min-w-[240px] lg:min-w-[90%] " />
      </div>
        <div className=" space-y-6">
          <h2 className=" nunito text-2xl font-black md:text-left ds:text-center bg-clip-text gradient-t text-transparent ">How It Works</h2>
         <div className="  space-y-14">
         <div className=" flex md:flex-col lg:flex-row items-center ds:text-center md:text-left ds:flex-col gap-5">
            <span className=" flex relative w-8 h-8 bg-blue-200 rounded-full">
                <FaRegUser className=" absolute right-0 top-0 text-blue-400  " size={20}/>
            </span>
            <div className=" space-y-3">
                <h3 className=" plus text-lg font-bold text-zinc-900">Create Your Account</h3>
                <p className=" text-sm">Create an account so that you could be shown on the list of people to be hired and other advantages</p>
            </div>
          </div>
          <div className=" flex md:flex-col lg:flex-row ds:text-center md:text-left items-center ds:flex-col gap-5">
            <span className="plus flex relative w-8 h-8 bg-blue-200 rounded-full">
                <IoCloudUploadOutline className=" absolute right-0 top-0 text-blue-400  " size={20}/>
            </span>
            <div className=" space-y-3">
                <h3 className=" plus text-lg font-bold text-zinc-900">Upload Your CV</h3>
                <p className="plus text-sm">Create an account so that you could be shown on the list of people to be hired and other advantages</p>
            </div>
          </div>
          <div className=" flex md:flex-col lg:flex-row ds:text-center md:text-left items-center ds:flex-col gap-5">
            <span className=" flex relative w-8 h-8 bg-blue-200 rounded-full">
                <PiNotePencilBold className=" absolute right-0 top-0 text-blue-400  " size={20}/>
            </span>
            <div className=" space-y-4">
                <h3 className=" plus text-lg font-bold text-zinc-900">Apply for your dream Job</h3>
                <p className="plus text-sm">Create an account so that you could be shown on the list of people to be hired and other advantages</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
