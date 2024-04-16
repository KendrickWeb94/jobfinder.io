/* eslint-disable react/prop-types */
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { useState } from "react";
import BookMarkSaved from "../constants/BookMarkSaved";
import { user1, user2,  user4 } from "../assets/assets";
import { FaPlus } from "react-icons/fa6";

const Jobs = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleIconClick = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };
  return (
    <div className=" relative w-[250px] h-[200px] shadow-lg p-4 space-y-5 rounded-md bg-white">
      <div className=" flex  items-center justify-between">
        <div className="flex gap-3 items-center ">
          <img
            src={props.image}
            alt=""
            className="w-10 border border-zinc-500/35 h-10 rounded-md object-cover"
          />
          <div className="space-y-1">
            <h3 className=" font-bold text-zinc-900 text-sm plus">
              {props.company}
            </h3>
            <p className=" text-xs plus text-zinc-700">{props.time}</p>
          </div>
        </div>
        <div className=" space-y-2 flex flex-col items-center justify-center">
          <span onClick={handleIconClick} className=" text-zinc-600 text-lg">
            {isBookmarked ? <CiBookmarkCheck /> : <CiBookmark />}
            {isBookmarked && <BookMarkSaved />}
          </span>
          <span className="bg-orange-200 text-yellow-500 text-[10px] nunito p-1 rounded-sm">
            Full Time
          </span>
        </div>
      </div>
      <div className=" space-y-1 text-zinc-800">
        <h3 className="text-sm plus font-bold">{props.jobtitle}</h3>
        <p className=" text-zinc-500 plus font-medium text-[11px]">{props.location}</p>
      </div>
      <div className="flex items-center  smooth justify-between">
        <button className=" p-2 text-xs plus bg-blue-200 text-blue-600 rounded-sm hover:bg-blue-300 hover:smooth">Apply Now</button>
        <div className=" flex -space-x-2">
         <img src={user1} className=" w-7 h-7 border border-blue-400 rounded-full object-cover" />
         <img src={user2} className=" w-7 h-7 border border-blue-400 rounded-full object-cover" />
         <img src={user4} className=" w-7 h-7 border border-blue-400 rounded-full object-cover" />
         <span className="w-7 h-7 bg-blue-600 flex items-center justify-center text-xs rounded-full">
            <FaPlus />
         </span>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
