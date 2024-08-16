"use client";
import React from "react";
import { Testimonialdata } from "@/components/data/testimonialdata";
import Image from "next/image";
import { Rating } from "@mui/material";
import { QuoteIcon, StarIcon } from "lucide-react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { user1 } from "@/public/exportimg";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  768: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 3,
    margin: 10,
  },
};

export const Testimonials = () => {
  return (
    <div className=" w-full bg-fade min-h-[70vh] py-10 my-10 h-auto flex items-center justify-center">
      <div className="w-full h-full mx-auto max-w-[85%]">
        <div className="space-y-12">
          <h1 className="text-gray-800 poppins text-3xl ds:text-center  text-balance font-medium">
            Clients feedbacks
          </h1>
          {/* <div className="grid grid-cat-3">
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
          </div>*/}
          <OwlCarousel responsive={Responsive} loop={true}>
            <div className="item">
              <div className="rounded-2 shadow-sm  bg-white p-4">
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
                      this website i got my first job here sometime last year,
                      so good. i recommened this to every upcoming developer
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={user1}
                        alt="user image"
                        className="w-8 h-9 rounded-full object-cover"
                      />*/}
                      <div className="flex flex-col w-full">
                        <h1 className=" font-medium text-gray-900 text-sm">
                          joel Hampton
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                          UI/UX Designer
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="rounded-2 shadow-sm  bg-white p-4">
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
                      this has to be one of the best places to get a gig or a job for anyone whos searching , they really helped me thanks guys
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={user1}
                        alt="user image"
                        className="w-8 h-9 rounded-full object-cover"
                      />*/}
                      <div className="flex flex-col w-full">
                        <h1 className=" font-medium text-gray-900 text-sm">
                          Jackson Keller
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                          Backend Developer
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="rounded-2 shadow-sm  bg-white p-4">
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
                    for a data analyst like me at first it was hard getting a job , but when i tried this website out , it was like a rocket experience
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={user1}
                        alt="user image"
                        className="w-8 h-9 rounded-full object-cover"
                      />*/}
                      <div className="flex flex-col w-full">
                        <h1 className=" font-medium text-gray-900 text-sm">
                        Sarah Rashad
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                      Data Analyst
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="rounded-2 shadow-sm  bg-white p-4">
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
                     I just dont know how to express my happiness , because this website is so good in my first week of her i got a job
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={user1}
                        alt="user image"
                        className="w-8 h-9 rounded-full object-cover"
                      />*/}
                      <div className="flex flex-col w-full">
                        <h1 className=" font-medium text-gray-900 text-sm">
George Kendrick
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                          Frontend Developer
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="rounded-2 shadow-sm  bg-white p-4">
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
                      Honestly so good , good job guys ,its almost a dream . from unemployed to having a bunch of employers waiting for me to respond
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={user1}
                        alt="user image"
                        className="w-8 h-9 rounded-full object-cover"
                      />*/}
                      <div className="flex flex-col w-full">
                        <h1 className=" font-medium text-gray-900 text-sm">
                            Angela Bill
                        </h1>
                        <h1 className=" font-medium text-gray-400 text-[13px]">
                          Flutter Developer
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <QuoteIcon size={21} className=" text-primay-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
