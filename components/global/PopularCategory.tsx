import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import {
  Pen,
  Megaphone,
  Tv,
  Code,
  Music,
  Building,
  HeartPulse,
  Database,
} from "lucide-react";



export const PopularCategory: React.FC= () => {
  return (
    <div className="w-full border-b border-gray-500/50">
      <div className="w-full bg-white p-3 min-h-[60vh]">
        <div className="w-full py-6 mx-auto h-full max-w-[82%]">
          <div className="flex flex-wrap justify-between gap-10">
            <h1 className="text-gray-800 poppins text-4xl ds:text-center md:text-left text-balance font-medium">
              Popular Categories
            </h1>
            <Button variant={"outline"} className="p-2 w-full  smooth hover:text-white text-primay-blue hover:bg-primay-blue md:w-auto px-7 smooth rounded-1 border border-primay-blue/45 flex gap-3 items-center justify-center">
              <p className="font-medium text-sm">See All</p> <ArrowRight />
            </Button>
          </div>
          <div className="pt-10">
            <div className="grid grid-cat-2 gap-6">
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Pen 
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Graphic & Design</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Code
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Programming & Coding</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Megaphone 
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Digital Marketing</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Tv
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Video & Animation</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Music
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Music & Audio</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Building 
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Account & finance</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <HeartPulse
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Health & Care</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
              <div className=" hover:shadow-xl smooth p-3 flex items-center gap-5 roudded-md">
                <div className=" w-12 h-12 p-3 text-primay-blue rounded-1 hover:bg-primay-blue hover:text-white bg-[#fef9c3] flex items-center justify-center">
                  <span>
                    <Database 
                     size={18}
                    
                     className=""
                     />
                  </span>
                </div>
               <div className="space-y-2">
               <h1 className=" font-semibold text-sm  text-black-fade">Data & Science</h1>
               <p className=" text-[12px] font-normal  text-gray-400">357 Open position</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
