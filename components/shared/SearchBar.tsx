import React from "react";
import { CountrySelect } from "../ui/country-select";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-lg h-[35px] rounded-1 gap-3 flex items-center justify-center border border-light-border p-2">
      <div className=" lg:block hidden country-section">
        <CountrySelect />
      </div>
      <span className=" md:block hidden h-full w-[0.5px] bg-light-border"></span>
      <div className="flex items-center justify-center gap-3">
        <Search size={15} className="text-primay-blue" />
        <input
          type="text"
          placeholder="Job tittle, keyword, company"
          className="text-light-border max-w-sm w-full text-xs font-medium outline-none bg-transparent  placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};
