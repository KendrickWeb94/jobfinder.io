"use client"

import React from "react";
import logo from "@/public/svg/Illustration.svg";
import Image from "next/image";
import { LocateIcon, MapPin, Search } from "lucide-react";
import DetailsDemo from "./Details";
import Details from "../data/details";

export const Hero = () => {
  return (
    <div className="w-full bg-fade h-auto py-6 ">
      <div className="mx-auto w-full max-w-[82%] ">
        <div className="flex py-12 ds:flex-wrap lg:flex-nowrap items-center ds:justify-center lg:justify-between gap-6">
          <div className="space-y-5 ds:text-center lg:text-left">
            <h1 className="ds:text-4xl poppins text-balance text-gray-800 md:text-3xl lg:text-5xl lg:leading-[3.5rem] font-medium ">
              Find a job that suits<br className="hidden lg:block"></br> your
              interest & skills.
            </h1>

            <p className=" text-gray-500">
              find the perfect job that suits you and what you want ,everything
              tailored for your desires and at no extra cost{" "}
            </p>
            <div className=" max-w-xl open rounded-2 border-[0.5px] flex flex-wrap md:items-center md:justify-center gap-4 md:gap-2 border-gray-400/45 h-auto p-3 bg-white">
              <div className=" flex items-center gap-3">
                <Search size={15} className=" text-primay-blue" />
                <input
                  type="text"
                  placeholder="Job title, company.."
                  className="text-light-border w-full text-sm font-normal outline-none bg-transparent  placeholder:text-gray-300"
                />
              </div>
              <div className="h-full w-[0.6px] bg-light-border"></div>
              <div className=" flex items-center gap-3">
                <MapPin size={15} className=" text-primay-blue" />
                <input
                  type="text"
                  placeholder="Your Location"
                  className="text-light-border w-full text-sm font-normal outline-none bg-transparent  placeholder:text-gray-300"
                />
              </div>
              <button className="md:w-auto w-full flex items-center justify-center p-2 bg-primay-blue smooth hover:bg-primay-blue/55 rounded-1 h-auto text-white text-sm">
                Find Job
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Suggestion: <span className="text-gray-800">Designer,</span>{" "}
              <span className="text-gray-800">Programing,</span>{" "}
              <span className=" text-primay-blue">Digital Marketing,</span>{" "}
              <span className="text-gray-800">Video,</span>{" "}
              <span className="text-gray-800">Animation,</span>{" "}
            </p>
          </div>
          <div className="min-w-[200px] max-w-[500px]">
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div className="pt-2">
          <div className="flex-wrap flex items-center justify-center gap-6">
              <DetailsDemo links={Details}/>
          </div>
        </div>
      </div>
    </div>
  );
};
