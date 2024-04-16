/* eslint-disable react/prop-types */
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import NavItems from "../constants/NavItems";
import PrimaryBtn from "../constants/PrimaryBtn";
import SecondaryBtn from "../constants/SecondaryBtn";
import { useState } from "react";
import DropwDown from "../constants/DropwDown";
import ResponsiveNavbar from "../constants/ResponsiveNavbar";

const Navbar = () => {
  const [NavTrigger, SetNavTrigger] = useState(false);

  const toggleNav = () => {
    SetNavTrigger((prevNavTrigger) => !prevNavTrigger);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {isMenuOpen && <ResponsiveNavbar />}
      <div className=" w-full p-1 pb-5   flex items-center z-50 gap-2 justify-between">
        <div className=" text-white font-bold md:text-xl plus">
          Job<span className=" text-blue-400">Finder.</span>
        </div>
        <div className=" sm:hidden ds:hidden xxs:hidden md:hidden lg:block 2xl:block xl:block">
          <div className=" flex items-center space-x-8">
            <div className=" flex plus items-center space-x-5">
              <NavItems link="FAQS" />
              <NavItems link="How To Use The App" />
            </div>
            <SecondaryBtn status="Download the App" />
            <PrimaryBtn />
            <a href="#" onClick={toggleNav}>
              <div className=" font-normal bg-gradient-to-r plus custom-group from-blue-200 to-blue-400 bg-clip-text text-transparent text-sm flex items-center gap-3">
                <UserOutlined className="text-black p-1 rounded-full bg-gradient-to-r from-blue-200 to-blue-400" />
                Account
              </div>
              {NavTrigger ? <DropwDown /> : null}
            </a>
          </div>
        </div>
        <div className=" sm:block ds:block xxs:block md:block lg:hidden 2xl:hidden xl:hidden">
          <span className=" border-2 p-3 block bg-white  rounded-md border-zinc-400">
            <MenuOutlined size={40} onClick={toggleMenu} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
