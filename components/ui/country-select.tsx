"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import ng from "@/public/flags/ng.png";
import za from "@/public/flags/za.png";
import gh from "@/public/flags/gh.png";
import us from "@/public/flags/us.png";
import gb from "@/public/flags/gb.png";
import gn from "@/public/flags/gn.png";
import gp from "@/public/flags/gp.png";
import yt from "@/public/flags/yt.png";

type CountryCode = "ng" | "za" | "gh" | "us" | "gb" | "gn" | "gp" | "yt";

export function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(() => {
    const storedCountry = sessionStorage.getItem("selectedCountry") as CountryCode;
    return storedCountry || "ng"; // Default to "ng" if no country is selected
  });

  // Handle change in selected country
  const handleCountryChange = (selectedValue: CountryCode) => {
    setSelectedCountry(selectedValue);
    sessionStorage.setItem("selectedCountry", selectedValue); // Store in sessionStorage
  };

  useEffect(() => {
    const storedCountry = sessionStorage.getItem("selectedCountry") as CountryCode;
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[90px] border-0 border-none">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <div className="flex">
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem
              data-value="ng"
              onClick={() => handleCountryChange("ng")}
              value="ng"
            >
              <Image src={ng} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gh"
              onClick={() => handleCountryChange("gh")}
              value="gh"
            >
              <Image src={gh} alt="" />
            </SelectItem>
            <SelectItem
              data-value="za"
              onClick={() => handleCountryChange("za")}
              value="za"
            >
              <Image src={za} alt="" />
            </SelectItem>
            <SelectItem
              data-value="us"
              onClick={() => handleCountryChange("us")}
              value="us"
            >
              <Image src={us} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gb"
              onClick={() => handleCountryChange("gb")}
              value="gb"
            >
              <Image src={gb} alt="" />
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem
              data-value="gn"
              onClick={() => handleCountryChange("gn")}
              value="gn"
            >
              <Image src={gn} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gp"
              onClick={() => handleCountryChange("gp")}
              value="gp"
            >
              <Image src={gp} alt="" />
            </SelectItem>
            <SelectItem
              data-value="yt"
              onClick={() => handleCountryChange("yt")}
              value="yt"
            >
              <Image src={yt} alt="" />
            </SelectItem>
          </SelectGroup>
        </div>
      </SelectContent>
    </Select>
  );
}
