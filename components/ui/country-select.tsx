"use client";
import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the types for the country data
interface Country {
  cca2: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

export function CountrySelect() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[90px] border-0 border-none">
        <SelectValue
          placeholder="Country"
          className="text-sm placeholder:text-light-border text-text-light"
        />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <div className="flex flex-wrap">
          {countries.length > 0 ? (
            countries.map((country) => (
              <SelectGroup key={country.cca2}>
                <SelectLabel>{country.name.common}</SelectLabel>
                <SelectItem value={country.cca2}>
                  <img
                    src={country.flags?.png || ""}
                    alt={`${country.name.common} flag`}
                    width={16}
                    height={16}
                    className="inline-block mr-2"
                  />
                  {country.name.common}
                </SelectItem>
              </SelectGroup>
            ))
          ) : (
            <div>Loading countries...</div>
          )}
        </div>
      </SelectContent>
    </Select>
  );
}
