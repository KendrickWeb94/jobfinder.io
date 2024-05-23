import Loader from "./Components/Loader";
import CursorTracker from "./Components/MouseTracker";
import Homepage from "./Pages/Homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
/* eslint-disable react/prop-types */
import {
  MenuOutlined,
  QuestionCircleFilled,
  
} from "@ant-design/icons";
import NavItems from "./constants/NavItems";
import { useState, useEffect } from "react";
import FAQs from "./Pages/FAQ";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Route>
    )
  );

  return (
    <div className="bg-black  relative">
    
      <CursorTracker />
      <div className=" pb-10"></div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector(".h-auto").offsetHeight;
      if (scrollPosition > navbarHeight) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`h-auto  fixed   flex  items-center justify-center top-0 mx-auto z-50 high-index w-full text-white max-w-full `}
        style={{ backgroundColor: navbarBackground }}
      >
        <div className="  max-w-[90%] w-full">
          <Loader />
          <div className=" w-full p-1   flex md:items-center z-50 gap-2 justify-between">
            <Link to="/">
              <div className=" text-white font-bold md:text-xl plus">
                Job<span className=" text-blue-400">Finder.</span>
              </div>
            </Link>
            <div
              className="smooth">
              <div className=" flex">
                <div className=" flex plus flex-row">
                  <Link to="/FAQs" className=" flex gap-2 items-center">
                    <NavItems link="FAQS" />
                    <QuestionCircleFilled className=" text-zinc-500" />
                  </Link>
                 
                </div>

               
            
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
