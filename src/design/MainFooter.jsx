
import Footer from "./TopFooter";


const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
    <Footer />
    <span className="block h-[1px] w-full bg-zinc-500"></span>
     <div className="md:flex-row md:items-center ds:flex-col p-5 md:space-y-1 ds:space-y-5 justify-between flex">
       <div className=" flex items-center gap-5">
      
        <p>@{currentYear} JobFinder. All Rights Reserved</p>
       </div>
       <div className="flex items-center gap-6">
      <p>Privacy & Policy</p>
      <p>Terms & Conditions</p>
       </div>
     </div>
    </div>
  );
}

export default MainFooter;
