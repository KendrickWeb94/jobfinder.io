"use client"
import * as React from "react";

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



export function CountrySelect() {
 


  return (
    <Select>
      <SelectTrigger className="w-[90px] border-0 border-none ">
        <SelectValue placeholder="Country" className="text-sm placeholder:text-light-border text-text-light" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <div className="flex">
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem
              data-value="ng"
             
              value="ng"
            >
              <Image src={ng} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gh"
          
              value="gh"
            >
              <Image src={gh} alt="" />
            </SelectItem>
            <SelectItem
              data-value="za"
             
              value="za"
            >
              <Image src={za} alt="" />
            </SelectItem>
            <SelectItem
              data-value="us"
           
              value="us"
            >
              <Image src={us} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gb"
            
              value="gb"
            >
              <Image src={gb} alt="" />
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem
              data-value="gn"
              
              value="gn"
            >
              <Image src={gn} alt="" />
            </SelectItem>
            <SelectItem
              data-value="gp"
        
              value="gp"
            >
              <Image src={gp} alt="" />
            </SelectItem>
            <SelectItem
              data-value="yt"
              
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
