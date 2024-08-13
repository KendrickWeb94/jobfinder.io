import React from "react";
import jobs from "@/components/data/jobs";
import Image from "next/image";

const JobList: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Openings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-sm font-semibold">{job.title}</h3>
            <p>Type: {job.employmentType}</p>
            <p>Salary: {job.salary}</p>
            <p>Image: <Image src={job.image} alt=""  className=" object-cover w-9 h-9" /> </p>
            <p>Company: {job.company}</p>
            <p>
              Location: {job.location.city}, {job.location.country}
            </p>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default JobList;
