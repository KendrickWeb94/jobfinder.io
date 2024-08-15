import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import clsx from "clsx";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { topCompanies } from "../data/topcompanies";
import LocationOn from "@mui/icons-material/LocationOn";


const Companies: React.FC = () => {
  return (
    <div className="py-14 mx-auto max-w-[82%] w-full h-auto">
      <div className="flex flex-wrap justify-between gap-10">
        <h1 className="text-gray-800 poppins text-4xl ds:text-center md:text-left text-balance font-medium">
          Top Companies
        </h1>
      </div>
      <div className="pt-10 w-full">
        <div className="grid-cat-3 grid">
        {topCompanies.map((company, index) => (
            <div
              key={index}
              className="rounded-1 shadow border-[0.5px] border-gray-100 p-4"
            >
               <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <Image src={company.companyimg} alt="" className=" w-8 h-8 object-cover rounded-1" />
                  <div className="flex flex-col">
                   <div className="flex items-center gap-1">
                   <h1 className=" text-sm font-medium text-gray-900">{company.company}</h1>
                    <div className={clsx("p-1 rounded-2 font-medium text-[11px] ", {
                          "bg-green-100": company.availabilty === "Open",
                          "bg-blue-100": company.availabilty === "Pending",
                          "bg-red-100": company.availabilty === "Closed",
                        })}>
                          <p className={clsx("", {
                          "text-green-400": company.availabilty === "Open",
                          "text-blue-400": company.availabilty === "Pending",
                          "text-red-400": company.availabilty === "Closed",
                        })}>{company.availabilty}</p>
                        </div>
                   </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                     <p>{company.location.country}, {company.location.city}</p>
                    </div>
                  </div>
                </div>
                <div className=""> 
                  <button className="w-full p-2 rounded-1 flex items-center justify-center bg-indigo-200 text-primay-blue font-medium text-[12px]">
                    Open Postion {company.postion}
                  </button>
                </div>
               </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Companies;
