import { CloseCircleFilled,  UserOutlined } from "@ant-design/icons";
import NavItems from "../constants/NavItems";
import PrimaryBtn from "../constants/PrimaryBtn";
import SecondaryBtn from "../constants/SecondaryBtn";
import { useState } from "react";
import {
 
  Link,
 
} from "react-router-dom";


const ResponsiveNavbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleClass = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`w-[300px] smooth h-auto bg-black ${isHidden ? "hidden" : ""}`}
      
    >
      <div className=" w-[300px] smooth bg-black high-index1  px-5 h-screen fixed py-8 top-0 left-0 rounded-md  z-50 gap-2 justify-between">
       <div className="flex  justify-between">
       <Link to="/">
              <div className=" text-white font-bold md:text-xl plus">
                Job<span className=" text-blue-400">Finder.</span>
              </div>
            </Link>
        <CloseCircleFilled size={30} className=" text-lg"  onClick={toggleClass}/>
       </div>
        <div className=" ">
          <div className=" flex flex-col  space-y-7">
            <div className=" flex flex-col plus  space-y-7">
              <li className=" border-b-[1px] py-2 border-zinc-500">
                <NavItems link="Home" />
              </li>
              <li className=" border-b-[1px] py-2 border-zinc-500">
                <NavItems link="More About Us" />
              </li>
              <li className=" border-b-[1px] py-2 border-zinc-500">
                <NavItems link="How To Use The App" />
              </li>
            </div>
            <SecondaryBtn status="Download the App" />
            <br></br>
            <PrimaryBtn />
            <a href="#" className=" absolute py-4 bottom-0">
              <div className=" font-normal bg-gradient-to-r pb-6 custom-group from-blue-400 to-lime-400 bg-clip-text text-transparent text-sm plus flex items-center gap-3">
                <UserOutlined className="text-black p-1 rounded-full bg-gradient-to-r from-blue-400 to-lime-400" />
                Account
              </div>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
