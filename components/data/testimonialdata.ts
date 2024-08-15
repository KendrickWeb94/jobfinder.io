import { user1, user2, user3, user4, user5, user6 } from "@/public/exportimg";
import { StaticImageData } from "next/image";

type testimonialdata = {
  clientname: string;
  clientjob: string;
  clientfeedback: string;
  clientimg: StaticImageData;
};

export const Testimonialdata: testimonialdata[] = [
  {
    clientname: "joel Hampton",
    clientjob: "UI/UX Designer",
    clientfeedback:
      " this website i got my first job here sometime last year, so good. i recommened this to every upcoming developer",
    clientimg: user1,
  },
  {
    clientname: "Jackson keller",
    clientjob: "Backend Developer",
    clientfeedback:
      "this has to be one of the best places to get a gig or a job for anyone who's searching , they really helped me thanks guys",
    clientimg: user2,
  },
  {
    clientname: "Sarah Rashad",
    clientjob: "Data Analyst",
    clientfeedback:
      "for a data analyst like me at first it was hard getting a job , but when i tried this website out , it was like a rocket experience",
    clientimg: user3,
  },
];
