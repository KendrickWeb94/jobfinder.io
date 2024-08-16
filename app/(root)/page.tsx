import React from "react";
import { Hero } from "../../components/global/Hero";
import Vacancies from "@/components/global/Vacancies";
import { HowItWorks } from "@/components/global/HowItWorks";
import { PopularCategory } from "@/components/global/PopularCategory";
import JobList from "@/components/global/JobList"; // Import the JobList component
import { vacancyData } from "@/components/data/vacancy";
import Companies from "@/components/global/TopCompanies";
import { Testimonials } from "@/components/global/Testimonials";
import CanOrEmp from "@/components/global/CanOrEmp";



const Page: React.FC = () => {
  {/* let job:JobProps ={
    name:"chile"
  }*/}
  return (
    <div className="">
      <Hero />
      <Vacancies data={vacancyData} />
      <HowItWorks />
      <PopularCategory />
      <JobList />
      <Companies />
      <Testimonials />
      <CanOrEmp />
    {/*   {job.name}*/}
      <br />
    </div>
  );
};

export default Page;
