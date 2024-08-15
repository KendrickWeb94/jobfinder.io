import { StaticImageData } from "next/image";

import {
  amazon,
  facebok,
  netflix,
  microsoft,
  apple,
  google,
} from "@/public/exportimg";

type TopCompanies = {
  company: string;
  postion: string;
  companyimg: StaticImageData;
  location: {
    city: string;
    country: string;
  };
  availabilty: string;
};

export const topCompanies: TopCompanies[] = [
  {
    company: "Amazon",
    postion: "(3)",
    companyimg: amazon,
    location: {
      city: "London",
      country: "UK",
    },
    availabilty: "Open",
  },
  {
    postion: "(7)",
    company: "Facebook",
    companyimg: facebok,
    location: {
      city: "Berlin",
      country: "Germany",
    },
    availabilty: "Pending",
  },
  {
    postion: "(5)",
    company: "Google",
    companyimg: google,
    location: {
      city: "San Francisco",
      country: "USA",
    },
    availabilty: "Pending",
  },
  {
    postion: "(11)",
    company: "Microsoft",
    companyimg: microsoft,
    location: {
      city: "Sydney",
      country: "Australia",
    },
    availabilty: "Open",
  },

  {
    postion: "(9)",
    company: "Apple",
    companyimg: apple,
    location: {
      city: "Sydney",
      country: "Australia",
    },
    availabilty: "Closed",
  },

  {
    postion: "(15)",
    company: "Apple",
    companyimg: netflix,
    location: {
      city: "Sydney",
      country: "Australia",
    },
    availabilty: "Closed",
  },
];
