import React from "react";
import { Main } from "./Main";
import { Hero } from "../../components/global/Hero";
import { Vacancies } from "@/components/global/Vacancies";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Vacancies />
      <Main />
    </div>
  );
};

export default page;
