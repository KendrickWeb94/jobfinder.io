import { CloudDownload, SearchCheck, User, VerifiedIcon } from "lucide-react";
import React from "react";

export const HowItWorks = () => {
  return (
    <div>
      <div className="w-full bg-fade p-3 min-h-[65vh]">
        <div className="w-full mx-auto py-10 flex items-center justify-center flex-col space-y-9 h-full max-w-[91%]">
          <div className="text-center py-6">
            <h1 className="text-gray-800 text-center poppins text-4xl ds:text-center md:text-left text-balance font-medium">
              How Jobfinder works
            </h1>
          </div>
          <div className="w-full h-full flex flex-wrap items-center justify-center">
            <div className="box-1 smooth items-center justify-center rounded-2 w-64 hover:bg-white p-4 bg-transparent flex flex-col gap-5">
              <div className="rounded-full bg-white  w-14 h-14 p-3 flex items-center justify-center">
                <User size={21} stroke="#facc15" fill="#fef9c3" className="" />
              </div>
              <div className="">
                <h1 className=" text-gray-800 text-center font-semibold text-sm">
                  Create account
                </h1>
                <p className=" text-gray-500 text-center text-balance pt-3 font-normal text-xs">
                  Create account an account with us to gain access to features
                  like upload resumes
                </p>
              </div>
            </div>
            <div className="box-1 smooth items-center justify-center rounded-2 w-64 hover:bg-white p-4 bg-transparent flex flex-col gap-5">
              <div className="rounded-full bg-white w-14 h-14 p-3 flex items-center justify-center">
                <CloudDownload
                  size={21}
                  stroke="#facc15"
                  fill="#fef9c3"
                  className=""
                />
              </div>
              <div className="">
                <h1 className=" text-gray-800 text-center font-medium text-sm">
                  Upload CV/Resume
                </h1>
                <p className=" text-gray-500 text-center text-balance pt-3 font-normal text-xs">
                  Create account an account with us to gain access
                </p>
              </div>
            </div>
            <div className="box-1 smooth items-center justify-center rounded-2 w-64 hover:bg-white p-4 bg-transparent flex flex-col gap-5">
              <div className="rounded-full bg-white w-14 h-14 p-3 flex items-center justify-center">
                <SearchCheck
                  size={21}
                  stroke="#facc15"
                  fill="#fef9c3"
                  className=""
                />
              </div>
              <div className="">
                <h1 className=" text-gray-800 text-center font-medium text-sm">
                  Find Suitable Job
                </h1>
                <p className=" text-gray-500 text-center text-balance pt-3 font-normal text-xs">
                  Create account an account with us to gain access to{" "}
                </p>
              </div>
            </div>
            <div className="box-1 smooth items-center justify-center rounded-2 w-64 hover:bg-white p-4 bg-transparent flex flex-col gap-5">
              <div className="rounded-full bg-white w-14 h-14 p-3 flex items-center justify-center">
                <VerifiedIcon
                  size={21}
                  stroke="#facc15"
                  fill="#fef9c3"
                  className=""
                />
              </div>
              <div className="">
                <h1 className=" text-gray-800 text-center font-medium text-sm">
                  Apply Job
                </h1>
                <p className=" text-gray-500 text-center text-balance pt-3 font-normal text-xs">
                  Create account an account with us to gain access to features
                  like upload{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
