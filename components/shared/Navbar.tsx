"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import TopBarLink from "./TopBarLink";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { Search, Menu } from "lucide-react";
import { ResponsiveNavbar } from "../global/tools/ResponsiveNavbar";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
   const [togglenav , settogglenav] = useState(false);
  const constraintsRef = useRef(null);

  function toggle() {
   settogglenav(!togglenav);
  }
  return (
    <div className="w-full relative">
      <div className={`md:hidden  ds:block ${togglenav ? "-translate-x-[0rem] h-screen fixed top-0 smooth" : "smooth fixed top-0 -translate-x-[150rem]"}`}>
        <ResponsiveNavbar />
      </div>
      <TopBarLink />
      <div className="w-full mx-auto max-w-[82%] p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className=" logo_section">
              <Image src={logo} alt="logo-img " className=" min-w-36  w-40" />
              <div className="sr-only">Logo-image</div>
            </div>
            <div className="ds:hidden sm:block">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search size={17} className="text-primay-blue sm:hidden block" />
             <button className="flex mx-1 md:hidden items-center justify-center w-auto p-2 rounded-2 bg-primay-blue text-white" onClick={toggle}>
              <Menu size={16} />
            </button>
          </div>
          <div className="md:flex hidden  items-center gap-4">
          <SignedOut>
          <Button
              variant={"outline"}
              className="border rounded-1 hover:bg-primay-blue hover:text-white smooth border-primay-blue text-sm text-primay-blue"
            >
             <Link href="/sign-up">Get Started</Link>
            </Button>
          </SignedOut>
         <Link href="./post">
         <motion.div className="" ref={constraintsRef}>
              <motion.div className="" drag dragConstraints={constraintsRef}>
                <button className=" w-28 p-3 h-auto rounded-1 flex items-center justify-center bg-primay-blue smooth hover:bg-transparent hover:text-primay-blue hover:border border-primay-blue text-white font-medium text-sm">
                  Post A Job
                </button>
              </motion.div>
            </motion.div></Link>
            <SignedIn>
                <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
