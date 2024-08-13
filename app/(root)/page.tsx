import React from "react";
import { Hero } from "../../components/global/Hero";
import Vacancies from "@/components/global/Vacancies";
import { HowItWorks } from "@/components/global/HowItWorks";
import { PopularCategory } from "@/components/global/PopularCategory";
import JobList from "@/components/global/JobList"; // Import the JobList component
import { vacancyData } from "@/components/data/vacancy";

const Page: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Vacancies data={vacancyData} />
      <HowItWorks />
      <PopularCategory />
      <JobList />
      <br />
    </div>
  );
};

export default Page;
