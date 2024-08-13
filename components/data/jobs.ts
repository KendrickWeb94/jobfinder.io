import { StaticImageData } from "next/image";

import {
  amazon,
  facebok,
  twitter,
  adobe,
  linkedin,
  spotify,
  microsoft,
  apple,
  google,
  netflix,
} from "@/public/exportimg";

type Job = {
  title: string;
  employmentType: string;
  salary: string;
  image: StaticImageData;
  company: string;
  location: {
    city: string;
    country: string;
  };
};

const jobs: Job[] = [
  {
    title: "Technical Support Specialist",
    employmentType: "Part-time",
    image: apple ,
    salary: "$18,000 - $22,000",
    company: "Apple Inc.",
    location: {
      city: "New York",
      country: "USA",
    },
  },
  {
    title: "Senior UX Designer",
    employmentType: "Full-Time",
    image: google,
    salary: "$70,000 - $90,000",
    company: "Google Inc.",
    location: {
      city: "San Francisco",
      country: "USA",
    },
  },
  {
    title: "Marketing Officer",
    employmentType: "Internship",
    image: amazon,
    salary: "$12,000 - $15,000",
    company: "Amazon",
    location: {
      city: "London",
      country: "UK",
    },
  },
  {
    title: "Junior Graphic Designer",
    employmentType: "Part-time",
    image: adobe,
    salary: "$20,000 - $25,000",
    company: "Adobe",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    title: "Interaction Designer",
    image:facebok ,
    employmentType: "Full-Time",
    salary: "$60,000 - $80,000",
    company: "Facebook",
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    title: "Project Manager",
    employmentType: "Internship",
    image:microsoft ,
    salary: "$25,000 - $30,000",
    company: "Microsoft",
    location: {
      city: "Sydney",
      country: "Australia",
    },
  },
  {
    title: "Software Engineer",
    image: netflix,
    employmentType: "Full-Time",
    salary: "$80,000 - $110,000",
    company: "Netflix",
    location: {
      city: "Los Angeles",
      country: "USA",
    },
  },
  {
    title: "Visual Designer",
    employmentType: "Part-time",
    image: spotify,
    salary: "$30,000 - $35,000",
    company: "Spotify",
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
  },
  {
    title: "Front End Developer",
    employmentType: "Full-Time",
    image: linkedin,
    salary: "$50,000 - $70,000",
    company: "LinkedIn",
    location: {
      city: "Dublin",
      country: "Ireland",
    },
  },
  {
    title: "Marketing Manager",
    employmentType: "Internship",
    image: twitter,
    salary: "$40,000 - $50,000",
    company: "Twitter",
    location: {
      city: "Paris",
      country: "France",
    },
  },
];

export default jobs;
