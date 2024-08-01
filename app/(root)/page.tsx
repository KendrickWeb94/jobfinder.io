// page.tsx (or Page.tsx)

import React from 'react';
import { Main } from './Main'; 
import { Hero } from '../../components/global/Hero';
import Vacancies from '@/components/global/Vacancies'; 
import { vacancyData } from '@/components/data/vacancy'; 

const Page: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Vacancies data={vacancyData} />
      <Main />
    </div>
  );
};

export default Page;
