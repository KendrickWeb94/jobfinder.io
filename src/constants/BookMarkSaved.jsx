import { useState, useEffect } from "react";

const BookMarkSaved = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); 
  
      return () => clearTimeout(timer);
    }, []);
  return (
     <>
     {isVisible && (
    <div className=" absolute z-[9999] smooth h-9 flex items-center justify-center -translate-y-0 p-2 rounded-md top-0 right-0 bg-green-200">
       <p className=" text-[10px] nunito font-bold text-green-700 ">Saved To BookMarks</p>
    </div>
      
     )}
   </>
  );
}

export default BookMarkSaved;
