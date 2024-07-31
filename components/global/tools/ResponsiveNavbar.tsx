"use client";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import navLinks, { navlink } from "@/components/data/navbar";
import { SearchBar } from "@/components/shared/SearchBar";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

interface TopBarLinkProps {}

export const ResponsiveNavbar: React.FC<TopBarLinkProps> = () => {
  const [togglenav , settogglenav] = useState(true);
  const constraintsRef = useRef(null);

  function toggle() {
   settogglenav(!togglenav);
  }
  return (
    <div className={`h-screen z-xl fixed top-0 bg-gray-400/25 ${togglenav ? "block" : "hidden"}`}>
      <div className="max-w-[250px] z-lg relative bg-white h-full p-3 shadow-sm">
        <button className="rounded-full absolute top-0 right-0 m-3 bg-gray-400/45 w-8 h-8 text-white flex items-center justify-center">
          <X size={16} />
        </button>

        <div className="pt-8 max-h-[90vh]">
          <div className="flex  flex-col gap-3">
            <ul className=" gap-5 flex flex-col">
              {navLinks.map((link: navlink) => (
                <li
                  key={link.id}
                  className="relative after:w-8 after:block after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-sm"
                >
                  <a href={link.url} className="hover:text-primay-blue smooth">
                    {link.tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5">
            <SearchBar />
          </div>
          <div className="pt-5 flex flex-col gap-5">
            <Button
              variant={"outline"} onClick={toggle}
              className="border rounded-1 hover:bg-primay-blue hover:text-white smooth border-primay-blue text-sm text-primay-blue"
            >
               <Link href="/sign-up">Get Started</Link>
            </Button>
            <motion.div className="" ref={constraintsRef}>
              <motion.div className="" drag dragConstraints={constraintsRef}>
                <button className="w-full md:w-28 p-3 h-auto rounded-1 flex items-center justify-center bg-primay-blue smooth hover:bg-transparent hover:text-primay-blue hover:border border-primay-blue text-white font-medium text-sm">
                  Post A Job
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 m-4 z-lg">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
