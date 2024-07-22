"use client";
import React, { useState, useEffect } from 'react';
import navLinks, { navlink } from '@/components/data/navbar'; 
import { Phone, PhoneCall } from 'lucide-react';
import { CountrySelect } from '../ui/country-select';
import { UserButton } from '@clerk/nextjs';

interface TopBarLinkProps {

}

const TopBarLink: React.FC<TopBarLinkProps> = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  useEffect(() => {
    // Set the first link as active by defaul
    setActiveLink(navLinks[0].id);
  }, []); 

  const handleClick = (linkId: number) => {
    setActiveLink(linkId);
  };

  return (
    <div className="bg-fade w-full">
      <div className="w-full mx-auto max-w-[85%] p-2">
        <div className="flex items-center justify-between w-full">
          <ul className="flex space-x-4">
            {navLinks.map((link: navlink) => (
              <li key={link.id} className="relative after:w-8 after:block after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-sm">
                <a
                  href={link.url}
                  className="hover:text-primay-blue smooth"
                >
                  {link.tag}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex phone_number items-center gap-4">
            <div className=" flex items-center gap-3 text-black-fade text-sm"><PhoneCall size="17"/><p>090-184-35807</p></div>
            <div className="countries">
              <CountrySelect />
            </div>
            <div className="">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarLink;
