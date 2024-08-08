import React from "react";
import { Hero } from "../../components/global/Hero";
import Vacancies from "@/components/global/Vacancies";
import { vacancyData } from "@/components/data/vacancy";
import { HowItWorks } from "@/components/global/HowItWorks";
import { Category } from "../../components/data/category";
import { ArrowRight } from "lucide-react";

interface CategoryProps {
  data?: Category[]; // Making the prop optional
}

const Page: React.FC<CategoryProps> = ({ data = [] }) => {
  return (
    <div className="">
      <Hero />
      <Vacancies data={vacancyData} />
      <HowItWorks />

      <br />
      <div className="w-full border-b border-gray-500/50">
        <div className="w-full bg-white p-3 min-h-[60vh]">
          <div className="w-full py-6 mx-auto h-full max-w-[82%]">
            <div className="flex flex-wrap justify-between gap-10">
              <h1 className="text-gray-800 poppins text-4xl ds:text-center md:text-left text-balance font-medium">
                Popular Category
              </h1>
              <button className="p-2 w-full smooth hover:text-white text-primary-blue hover:bg-primary-blue md:w-auto px-5 rounded-1 border border-primary-blue/45 flex gap-3 items-center justify-center">
                <p className="font-medium text-sm">See All</p> <ArrowRight />
              </button>
            </div>
            <div className="pt-10">
              <div className="flex flex-wrap gap-6">
                {data.length > 4 ? (
                  data.map((item) => (
                    <li key={item.id} className="flex flex-col poppins">
                      <h3 className="text-sm text-gray-800 font-medium hover:underline hover:text-primary-blue smooth hover:underline-offset-3 hover:cursor-pointer">
                        {item.catname}
                      </h3>
                      <div className="text-[12px] text-gray-500 font-normal flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.catpositions}
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No categories available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
