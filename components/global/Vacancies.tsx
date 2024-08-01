
"use client"
// components/global/Vacancies.tsx

import React from 'react';
import { VacancyData } from '../data/vacancy';

interface VacanciesProps {
  data: VacancyData[];
}

const Vacancies: React.FC<VacanciesProps> = ({ data }) => {
  return (
    <div className="w-full bg-white p-3 min-h-[60vh]">
      <div className="w-full mx-auto h-full max-w-[82%]">
        <div className="space-y-5 py-14">
          <h1 className="text-gray-800 poppins text-4xl ds:text-center md:text-left text-balance font-medium">
            Most Popular Vacancies
          </h1>
          <div className="pt-1">
            <ul className="flex-wrap flex gap-14">
              {data.map((item) => (
                <li key={item.id} className="flex flex-col poppins">
                  <h3 className="text-sm text-gray-800 font-medium hover:underline hover:text-primay-blue smooth  hover:underline-offset-3 hover:cursor-pointer">{item.job}</h3>
                  <h3 className="text-[12px] text-gray-500 font-normal">{item.availability}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
