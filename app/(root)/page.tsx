import React from "react";
import { Hero } from "../../components/global/Hero";
import Vacancies from "@/components/global/Vacancies";
import { vacancyData } from "@/components/data/vacancy";
import { HowItWorks } from "@/components/global/HowItWorks";
import { PopularCategory } from "@/components/global/PopularCategory";

const Page: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Vacancies data={vacancyData} />
      <HowItWorks />
      <PopularCategory />
      <br />
    </div>
  );
};

export default Page;
