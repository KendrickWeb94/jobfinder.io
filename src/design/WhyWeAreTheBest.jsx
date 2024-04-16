
import { FaHandPointUp } from "react-icons/fa";

const WhyWeAreTheBest = () => {
  return (
    <div className="pt-9 smooth space-y-10 max-w-[90%]">
     <div className="md:text-5xl text-center plus font-bold ds:text-lg xs:text-xl sm:text-2xl">
      Why Choose Us?
     </div>
     <p className="ds:text-[14px] ds:text-left plus tracking-wider  md:text-center leading-10 text-zinc-400 sm:text-[15px]">
     people should choose <span className=" text-blue-500">JOB FINDER </span>for their job search needs because of our unparalleled dedication to making the process seamless, efficient, and cost-effective  With our user-friendly interface, individuals can easily browse through a plethora of job listings <p className=" ds:hidden md:block">
     tailored to their specific zip code and area, ensuring relevance and proximity to their desired location, What sets us apart is our commitment to providing opportunities at lesser prices or even no cost at all, empowering job seekers of all backgrounds and financial capabilities to access quality employment options.
     </p>
     <br></br>
     <br />
     <p className=" ds:block md:hidden">
     With our user-friendly interface, individuals can easily browse through a plethora of job listings tailored to their specific zip code and area, ensuring relevance and proximity to their desired location, What sets us apart is our commitment to providing opportunities at lesser prices or even no cost at all, empowering job seekers of all backgrounds and financial capabilities to access quality employment options.
     </p>
     </p>
     <button className=" p-3 py-2 mx-auto rounded-3xl text-sm w-[170px] justify-center h-12 smooth hover:bg-gradient-to-t hover:smooth hover:text-white hover:from-blue-400 hover:to-blue-300 font-medium plus px-3 bg-blue-200 text-blue-600 flex items-center gap-3 ">
    <div className="mx-auto flex items-center gap-5">
    <FaHandPointUp />
      Get Started
    </div>
     </button>
    </div>
  );
};

export default WhyWeAreTheBest;
