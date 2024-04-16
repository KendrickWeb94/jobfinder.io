import { MdOutlineAttachMoney } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { GoStack } from "react-icons/go";
import { GrCloudSoftware } from "react-icons/gr";
import { CiBank } from "react-icons/ci";
import { BsHouseCheck } from "react-icons/bs";
import { PiTarget } from "react-icons/pi";
import { SlGraduation } from "react-icons/sl";
import { TbHealthRecognition } from "react-icons/tb";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { DatabaseOutlined } from "@ant-design/icons";



const JobCateogory = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleClass = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className=" w-full flex items-center  justify-center flex-col job smooth">
      <h3 className=" font-semibold text-zinc-500 2xl:text-3xl xl:text-3xl text-center lg:text-xl md:text-xl xxs:text-lg ds:text-base pb-5 pt-5 plus">
        Browse By{" "}
        <span className=" text-blue-500 gradient-t text-transparent bg-clip-text">
          Job Cateogries
        </span>
      </h3>
      <div className=" pt-8 grid-container items-center justify-center">
        <div className=" w-full bg-white h-[200px] rounded-md hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  flex  items-center justify-center ">
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3  w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <LuPenTool size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">Art & Design</p>
            <p className=" text-zinc-500 text-sm plus">3000 Job Vacancies</p>
          </div>
        </div>
        <div className=" w-full h-[200px]  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white flex  items-center justify-center ">
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <GoStack size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">UI/UX Designer</p>
            <p className=" text-zinc-500 text-sm plus">5000 Job Vacancies</p>
          </div>
        </div>
        <div className=" w-full h-[200px]  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white flex  items-center justify-center ">
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <GrCloudSoftware size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">IT & Software</p>
            <p className=" text-zinc-500 text-sm plus">2000 Job Vacancies</p>
          </div>
        </div>
        <div className=" w-full h-[200px]  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white flex  items-center justify-center ">
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <CiBank size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">
              Business Development
            </p>
            <p className=" text-zinc-500 text-sm plus">2000 Job Vacancies</p>
          </div>
        </div>
        <div className=" w-full h-[200px] smooth  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white flex  items-center justify-center ">
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <DatabaseOutlined size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">
              Database Programmer
            </p>
            <p className=" text-zinc-500 text-sm plus">2000 Job Vacancies</p>
          </div>
        </div>
        <div className={`w-full h-[200px] hidden smooth  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white   items-center justify-center  ${isHidden ? "show smooth smooth" : ""}`}>
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <BsHouseCheck size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">Real Estate</p>
            <p className=" text-zinc-500 text-sm plus">500 Job Vacancies</p>
          </div>
        </div>
        <div className={`w-full h-[200px] hidden smooth  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white   items-center justify-center  ${isHidden ? "show smooth" : ""}`}>
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <PiTarget size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">
              Mareting Strategist
            </p>
            <p className=" text-zinc-500 text-sm plus">1500 Job Vacancies</p>
          </div>
        </div>
        <div className={`w-full h-[200px] hidden  smooth hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white   items-center justify-center  ${isHidden ? "show smooth" : ""}`}>
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <SlGraduation size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">Education</p>
            <p className=" text-zinc-500 text-sm plus">1500 Job Vacancies</p>
          </div>
        </div>
        <div className={`w-full h-[200px] hidden smooth  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white   items-center justify-center  ${isHidden ? "show smooth" : ""}`}>
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <MdOutlineAttachMoney size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">Finance</p>
            <p className=" text-zinc-500 text-sm plus">1800 Job Vacancies</p>
          </div>
        </div>
        <div className={`w-full h-[200px] hidden smooth  hover:scale-105 smooth hover:shadow-2xl hover:shadow-blue-300  rounded-md bg-white   items-center justify-center  ${isHidden ? "show smooth" : ""}`}>
          <div className=" space-y-4 flex flex-col items-center justify-center ">
            <span className=" text-blue-500 flex p-3 w-12 h-12 rounded-full items-center justify-center bg-blue-200">
              <TbHealthRecognition size={30} />
            </span>
            <p className=" text-zinc-900 plus font-bold">Health </p>
            <p className=" text-zinc-500 text-sm plus">1800 Job Vacancies</p>
          </div>
        </div>
        <button  className="p-2 py-3 w-[170px] h-12 hover:animate-pulse flex smooth text-sm plus font-medium hover:smooth rounded-3xl bg-blue-200 text-blue-600  hover:gradient-t hover:text-white  items-center justify-center gap-1  plus " onClick={toggleClass}> <div className="smooth flex items-center gap-1 justify-center">See <p className={` ${isHidden ? "hidden smooth transition-all delay-700 duration-700 ease-in-out" : ""}`}>more</p>
        <p className={`hidden ${isHidden ? "show smooth" : ""}`}>less</p>
        <FaAngleRight />
      </div>
        </button>
      </div>
    </div>
  );
};

export default JobCateogory;
