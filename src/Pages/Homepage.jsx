import Hero from "../design/Hero";
import HowItWorks from "../design/HowItWorks";
import JobCateogory from "../design/JobCateogory";
import WhyWeAreTheBest from "../design/WhyWeAreTheBest";
import Plans from "../design/Plans";
import ChoosePlans from "../design/ChoosePlans";
import Contact from "../design/Contact";
import Testimonials from "../design/Testimonials";
import MainFooter from "../design/MainFooter";
import PopUp from "../design/PopUp";
import CursorTracker from "../Components/MouseTracker";
import QuickSearch from "../Components/QuickSearch";


const Homepage = () => {
  return (
    <div className=" pt-6">
     <QuickSearch data={[]}/>
      <div className=" overflow-hidden  relative h-atuo flex z-50  flex-col  scroll-smooth smooth  space-y-4 bg-black p-2 items-center justify-center">
        <CursorTracker />

        <div className="h-auto z-50  pt-5 w-full text-white max-w-[90%]">
          <Hero />
        </div>
        <div className="h-auto z-50 w-full translate-y-5 flex items-center justify-center text-white max-w-[95%]">
          <div className=" w-8 h-14 rounded-3xl border-2 overflow-hidden border-white flex items-center justify-center">
            <span className="block w-1 h-4 pulse rounded-full bg-white"></span>
          </div>
        </div>

        <div className=" min-h-screen z-50 w-full pb-5 flex items-center justify-center text-white max-w-[90%]">
          <JobCateogory />
        </div>
        <div className="h-auto min-h-screen  z-50 w-full flex items-center justify-center text-white ">
          <WhyWeAreTheBest />
        </div>
        <div className="h-auto min-h-screen  z-50 w-full flex items-center justify-center text-black ">
          <HowItWorks />
        </div>
        <div className="h-auto min-h-screen  z-50 w-full flex items-center justify-center text-white ">
          <Plans />
        </div>
        <div className="h-auto min-h-screen max-w-[90%] pt-5 flex items-center justify-center  relative z-50 w-full text-white ">
          <Testimonials />
        </div>
        <div className="h-auto min-h-screen max-w-[90%] pt-10 flex items-center justify-center  relative z-50 w-full text-white ">
          <Contact />
        </div>
        <div className="h-auto min-h-screen max-w-[90%] pt-10 flex items-center justify-center  relative z-50 w-full text-white ">
          <ChoosePlans />
        </div>
        <div className="h-auto min-h-screen max-w-[90%] pt-10 flex items-center justify-center  relative z-50 w-full text-white ">
          <PopUp />
        </div>
        <div className="h-auto min-h-screen max-w-[90%] pt-10 flex items-center justify-center  relative z-50 w-full text-white ">
          <MainFooter />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
