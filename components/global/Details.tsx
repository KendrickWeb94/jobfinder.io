import React from "react";
import { Details } from "../data/details";
import Image from "next/image";

const DetailsDemo: React.FC<{ links: Details[] }> = ({ links }) => {
  return (
    <div>
      <ul className="flex-wrap flex items-center justify-center gap-6">
        {links.map((link) => (
          <div
            key={link.id}
            className=" rounded-2 bg-white  shadow-lg p-3 h-auto ds:w-full lg:w-[240px]"
          >
            <div className="flex flex-row items-center justify-between  gap-3">
              <div className="p-3 rounded-3 text-white flex items-center">
                <div className=" w-14 h-14 overflow-hidden object-cover">
                  <Image
                    src={link.icon}
                    alt=""
                    className=" w-16 h-16"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <div className="space-y-2 pr-4">
                <p className="text-lg font-semibold text-gray-800">{link.data}</p>
                <p className="text-base text-gray-500">{link.name}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DetailsDemo;
