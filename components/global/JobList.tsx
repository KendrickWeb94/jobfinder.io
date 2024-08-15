"use client";

import React, { useState } from "react";
import jobs from "@/components/data/jobs";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Bookmark, BookmarkCheck } from "lucide-react";
import clsx from "clsx";



const BookmarkNotification: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="fixed bottom-10 right-10 bg-yellow-100  text-primay-blue px-4 py-2 rounded-2 shadow-lg">
      {message}
    </div>
  );
};

const JobList: React.FC = () => {
  const [bookmark, setbookmark] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  function togglemarked() {
    setbookmark(!bookmark);
    setNotification(bookmark ? "Removed from bookmark" : "Saved to bookmark");

    setTimeout(() => {
      setNotification(null); // Hide the notification after 2 seconds
    }, 2000);
  }

  return (
    <div className="w-full mx-auto max-w-[82%] h-auto py-10">
      <div className="flex flex-wrap justify-between gap-10">
        <h1 className="text-gray-800 poppins text-4xl ds:text-center md:text-left text-balance font-medium">
          Featured Jobs
        </h1>
        <Button
          variant={"outline"}
          className="p-2 w-full smooth hover:text-white text-primay-blue hover:bg-primay-blue md:w-auto px-5 smooth rounded-1 border border-primay-blue/45 flex gap-3 items-center justify-center"
        >
          <p className="font-medium text-sm">See All</p>{" "}
          <ArrowRight size="17" />
        </Button>
      </div>
      <div className="pt-10">
        <div className="grid-cat-3 grid">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-1 bg-gradient-to-r from-indigo-100 to-white shadow border-[0.5px] border-gray-100 p-4"
            >
              <div className="flex flex-col gap-2">
                <div className="">
                  <div className="text-[14px] font-medium">{job.title}</div>
                  <div className="mt-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={clsx("p-1 rounded-1 font-medium text-xs ", {
                          "bg-green-100": job.employmentType === "Part-time",
                          "bg-blue-100": job.employmentType === "Full-Time",
                          "bg-yellow-100": job.employmentType === "Internship",
                          "bg-red-100": job.employmentType === "Contract",
                        })}
                      >
                        <p
                          className={clsx("", {
                            "text-green-400":
                              job.employmentType === "Part-time",
                            "text-blue-400": job.employmentType === "Full-Time",
                            "text-yellow-400":
                              job.employmentType === "Internship",
                            "text-red-400": job.employmentType === "Contract",
                          })}
                        >
                          {job.employmentType}
                        </p>
                      </div>
                      <div className=" text-gray-500 text-xs">
                        Salary: {job.salary}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex pt-2 items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={job.image}
                      alt=""
                      className="rounded-2 w-8 h-8 object-cover"
                    />
                    <div className="">
                      <h2 className="font-medium text-sm text-gray-900">
                        {job.company}
                      </h2>
                      <p className="flex pt-1 text-xs items-center gap-1 text-gray-500">
                        <span>
                          {job.location.country}, {job.location.city}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Bookmark
                      size={18}
                      onClick={togglemarked}
                      className={`text-gray-400 ${
                        bookmark ? "hidden" : "block"
                      }`}
                    />
                    <BookmarkCheck
                      size={18}
                      onClick={togglemarked}
                      className={`text-gray-400 ${
                        bookmark ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {notification && <BookmarkNotification message={notification} />}
    </div>
  );
};

export default JobList;
