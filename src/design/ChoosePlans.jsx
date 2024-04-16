import { RocketOutlined } from "@ant-design/icons";
import { useState } from "react";
import PlanList from "../constants/PlanList";


const ChoosePlans = () => {
    const [isHidden, setIsHidden] = useState(false); 

    const toggleClass = () => {
      setIsHidden(!isHidden);
    };
  return (
    <div className=" w-full  ">
      <div className="">
        <h2 className=" plus text-xl  text-left text-zinc-200  font-bold">Choose Your Plan</h2>
        <div className="mt-5 flex items-center gap-5 text-zinc-400">
             <span className=" text-blue-600 plus p-3 text-xl rounded-full flex-center w-9 h-9 bg-blue-200">
                <RocketOutlined />
            </span>
            30 Days Free trails
            </div>
            <div className="flex  mt-6 md:items-center  justify-between md:flex-row ds:flex-col">
                <p className="leading-6 text-zinc-500 plus">Choose the right plan for you , anyone that suits you best</p>
                <div className=" flex smooth shadow-2xl shadow-blue-300 p-1 w-gull gap-2 mt-5 h-10 bg-white rounded-sm" >
                    <button  className={`rounded-sm w-[100%] plus text-blue-700 font-bold h-full text-xs p-3 flex-center  ${isHidden ? "" : "bg-blue smooth"}`}  onClick={toggleClass}>Monthly</button>
                    <button className={`rounded-sm w-[100%] plus text-blue-700 font-bold h-full text-xs p-3 flex-center  ${isHidden ? " text-green-500 bg-green-200 smooth" : ""}`}  onClick={toggleClass}>Yearly</button>
                </div>
            </div>
            <div className=" w-full grid-container pt-6  gap-16">
                <div className="w-full h-[360px] space-y-8 p-3 py-5 smooth hover:scale-95 rounded-md bg-white">
                    <div className="flex items-center gap-4">
                        <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-blue-300 rounded-full">
                            <span className=" block w-5 h-5 rounded-full  bg-blue-700  "></span>
                        </span>
                        <p className=" text-blue-700 plus text-sm">Free </p>
                    </div>
                    <div className=" text-center flex gap-2 items-center">
                        <strong className=" plus text-4xl font-bold text-neutral-900">0.0$</strong> <p className="text-[10px] text-neutral-600 translate-y-2 plus">/per month</p> 
                 </div>
                 
                 <div className=" space-y-5">
                        <PlanList option="30 days Free" />
                        <PlanList option="Limited Access" />
                        <PlanList option="Short Span Of Reach" />
                        <PlanList option="Not gonna show up on every related search" />
                       </div>
                <button className=" w-full bg-blue-700 hover:opacity-65 smooth h-10 mt-5  text-white plus text-sm rounded-md p-2">
              Get Plan
                </button>
                </div>
                <div className="w-full h-[360px] space-y-8  smooth hover:scale-95 p-3 py-5 rounded-md bg-white">
                    <div className="flex items-center gap-4">
                        <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-green-300 rounded-full">
                            <span className=" block w-5 h-5 rounded-full  bg-green-700  "></span>
                        </span>
                        <p className=" text-green-700 plus text-sm">Premium Plan </p>
                    </div>
                    <div className=" text-center flex gap-2 items-center">
                        <strong className=" plus text-4xl font-bold text-neutral-900">15.0$</strong> <p className="text-[10px] text-neutral-600 translate-y-2 plus">/per month</p> 
                 </div>
                 
                 <div className=" space-y-5">
                        <PlanList option="All Access For 1 Month" />
                        <PlanList option="Unlimited  Access" />
                        <PlanList option="Medium Span Of Reach" />
                        <PlanList option="Appear on every Search Related to Profile" />
                       </div>
                <button className=" w-full bg-green-700 hover:opacity-65 smooth h-10 mt-5  text-white plus text-sm rounded-md p-2">
              Get Plan
                </button>
                </div>
                <div className="w-full h-[360px]  smooth hover:scale-95 space-y-8 p-3 py-5 rounded-md bg-white">
                    <div className="flex items-center gap-4">
                        <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-purple-300 rounded-full">
                            <span className=" block w-5 h-5 rounded-full  bg-purple-700  "></span>
                        </span>
                        <p className=" text-purple-700 plus text-sm">Platinum Plan </p>
                    </div>
                    <div className=" text-center flex gap-2 items-center">
                        <strong className=" plus text-4xl font-bold text-neutral-900">30.0$</strong> <p className="text-[10px] text-neutral-600 translate-y-2 plus">/per month</p> 
                 </div>
                 
                 <div className=" space-y-5">
                        <PlanList option="6 Months plus 1 Month Bonus" />
                        <PlanList option="Unlimited Access" />
                        <PlanList option="Wide Span Of Reach" />
                        <PlanList option="Appear on every Search Related to Profile" />
                       </div>
                <button className=" w-full bg-purple-700 h-10 mt-5 hover:opacity-65 smooth  text-white plus text-sm rounded-md p-2">
              Get Plan
                </button>
                </div>
              
            </div>
      </div>
    </div>
  );
}

export default ChoosePlans;
