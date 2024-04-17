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
  MobileOutlined,
  QuestionCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import NavItems from "./constants/NavItems";
import PrimaryBtn from "./constants/PrimaryBtn";
import { useState, useEffect } from "react";
import FAQs from "./Pages/FAQ";
import { FaNewspaper } from "react-icons/fa";

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
            <div>
              className={`p-5 smooth md:bg-transparent ds:bg-black ds:h-auto rounded-md md:h-auto ds:fixed md:static md:hidden ds:block md:left-0 lg:block 2xl:block xl:block ${
                isMenuOpen ? "ds:hidden smooth" : "ds:block smooth"
              }`}
            >
              <div className=" flex ds:flex-col md:flex-row md:items-center md:space-x-8 md:space-y-0 ds:space-y-8">
                <div className=" flex plus md:flex-row ds:flex-col ds:items-start md:items-center md:space-y-0  ds:space-y-10 text-xs md:space-x-5">
                  <Link to="/FAQs" className=" flex gap-2 items-center">
                    <NavItems link="FAQS" />
                    <QuestionCircleFilled className=" text-zinc-500" />
                  </Link>
                  
              </div>
            </div>
            <div className=" sm:block  ds:block xxs:block md:block lg:hidden 2xl:hidden xl:hidden">
              <span className=" p-2 flex items-center justify-center bg-white text-black rounded-md border border-zinc-400">
                <MenuOutlined size={40} onClick={toggleMenu} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
      </div>
  );
};

export default App;
