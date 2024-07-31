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
            className=" rounded-2 bg-white  shadow-lg p-2 h-auto ds:w-full lg:w-[240px]"
          >
            <div className="flex flex-row items-center justify-between  gap-2">
              <div className="p-2 rounded-2 text-white flex items-center">
                <div className=" w-12 h-12 overflow-hidden object-cover">
                  <Image
                    src={link.icon}
                    alt=""
                    className=" w-12 h-12"
                    width={13}
                    height={13}
                  />
                </div>
              </div>
              <div className="space-y-2 pr-4">
                <p className="text-base font-semibold text-gray-800">{link.data}</p>
                <p className="text-sm text-gray-500">{link.name}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DetailsDemo;
