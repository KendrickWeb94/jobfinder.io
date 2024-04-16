import { useState, useEffect } from "react";


const Loader = () => {
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
   
    <>
      {isVisible && (
        <div className="loader w-full h-[100vh] top-0 high-index1  fixed inset-0 flex items-center justify-center bg-black ">
          <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
        </div>
      )}
    </>
  );
};

export default Loader;
