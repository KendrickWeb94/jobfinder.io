"use client";
import { footerlogo } from "@/public/exportimg";
import { Briefcase, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import navLinks, { navlink } from "@/components/data/navbar";

interface TopBarLinkProps {}

const Footer: React.FC<TopBarLinkProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" w-full mx-auto p-3 min-h-[75vh] max-w-[99%]">
      <div className="w-full h-full bg-black rounded-2 text-white p-3">
        <div className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 grid p-5 py-10">
          <div className="w-auto space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <Briefcase size="19px" />{" "}
              <p className=" font-semibold">Jobfinder.io</p>
            </div>
            <div className="flex items-center gap-2">
              <p className=" text-gray-400 text-sm">Call now:</p>
              <h1 className="text-sm">(+234 901 35807)</h1>
            </div>
            <p className="text-gray-400 text-[13px] leading-6">
              find the perfect job that suits you and what you want ,everything
              tailored for your desires and at no extra cost
            </p>
          </div>
          <div className="w-auto space-y-5">
            <h1 className=" font-semibold">Quick Links</h1>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link: navlink) => (
                <li
                  key={link.id}
                  className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s"
                >
                  <a href={link.url} className="hover:text-primay-blue smooth">
                    {link.tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-auto space-y-5">
            <h1 className=" font-semibold">For Candidates</h1>
            <ul className="flex flex-col gap-4">
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">Browse Jobs</a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Browse Employers
                </a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Candidate Dashboard
                </a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">Saved Jobs</a>
              </li>
            </ul>
          </div>
          <div className="w-auto space-y-5">
            <h1 className=" font-semibold">For Employers</h1>
            <ul className="flex flex-col gap-4">
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">Post a Jos</a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Browse Candidate
                </a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Employers Dashboard
                </a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">Applications</a>
              </li>
            </ul>
          </div>
          <div className="w-auto space-y-5">
            <h1 className=" font-semibold">Support</h1>
            <ul className="flex flex-col gap-4">
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">FAQ</a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Privacy Policy
                </a>
              </li>
              <li className="relative after:w-8 after:block text-gray-500 font-normal text-[13px] cursor-pointer after:absolute after:h-1 after:bottom-0 after:left-0 smooth text-s">
                <a className="hover:text-primay-blue smooth">
                  Terms & Conditions
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="w-full mt-16 h-[0.5px] bg-gray-300/20"></div>
        <div className="text-gray-400 p-5 text-sm w-full flex items-center justify-between font-normal">
          <div className="">
            &copy; {currentYear} Jobfinder all ights reserved
          </div>
          <div className="flex items-center px-5 gap-5">
            <Facebook size={17}/> 
            <Youtube size={17} />
            <Twitter size={17} />
            <Instagram size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
