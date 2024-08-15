import React from "react";
import { Testimonialdata } from "@/components/data/testimonialdata";
import Image from "next/image";
import { Rating } from "@mui/material";
import { QuoteIcon, StarIcon } from "lucide-react";

export const Testimonials = () => {
  return (
    <div className=" w-full bg-fade min-h-[70vh] py-10 my-10 h-auto flex items-center justify-center">
      <div className="w-full h-full mx-auto max-w-[82%]">
        <div className="space-y-12">
          <h1 className="text-gray-800 poppins text-3xl ds:text-center  text-balance font-medium">
            Clients feedbacks
          </h1>
          <div className="grid grid-cat-3">
            {Testimonialdata.map((testimoial, index) => (
              <div key={index} className="rounded-2 shadow-sm  bg-white p-4">
                <div className="flex-col flex gap-6">
                  <div className="">
                    <div className="text-yellow-400 flex items-center gap-1 text-xs">
                      <StarIcon size={14} />
                      <StarIcon size={14} />
                      <StarIcon size={14} />
                      <StarIcon size={14} />
                      <StarIcon size={14} />
                    </div>
                    <p className="mt-6 text-sm font-normal leading-[1.4rem] text-gray-500">
                      {testimoial.clientfeedback}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimoial.clientimg}
                        alt="user image"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className=" font-medium text-gray-900 text-sm">
                          {testimoial.clientname}
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                          {testimoial.clientjob}
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
