/* eslint-disable react/no-unescaped-entities */
import {
  FacebookFilled,
  InstagramFilled,
  SendOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { faq1, question } from "../assets/assets";
import { useState, useEffect } from "react";
import FAQAccordion from "../Components/Question";

const FAQs = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" h-auto relative bg-black pt-[8rem] flex items-center justify-center flex-col  text-white  w-full ">
      <div className="flex ds:flex-col md:flex-row p-5 w-full max-w-[88%] gap-32 md:items-center justify-between">
        <div className=" max-w-[500px]">
          <img src={faq1} alt="" />
        </div>
        <div className="space-y-7 ">
          <h1 className="md:text-2xl sm:text-xl lg:text-3xl xl:text-4xl ds:text-lg plus font-bold text-blue-400">
            Frequently Asked Questions
          </h1>
          <p className="text-sm plus font-medium plus text-zinc-500">
            Find answers to commonly asked questions about our services,
            products, and more.
          </p>
          <p className="text-xs plus font-medium plus text-zinc-700">
            If you can't find the answer you're looking for, feel free to
            contact us for assistance.
          </p>
          <div className="grid grid-cols-4   md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 text-zinc-500 cursor-pointer text-lg ">
            <p>
              <FacebookFilled className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
            <p>
              <WhatsAppOutlined className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
            <p>
              <SendOutlined className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
            <p>
              <InstagramFilled className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
            <p>
              <TwitterOutlined className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
            <p>
              <InstagramFilled className=" hover:text-blue-600 p-3 hover:bg-blue-200 rounded-full smooth" />
            </p>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="py-5 flex high-index1 ">
          <div className="absolute bubbles gap-[12rem] flex  w-full ">
            <img src={question} className="  w-[100px]" />
            <img src={question} className="  w-[100px]" />
            <img src={question} className=" float-right w-[100px]" />
            <img src={question} className=" flaot-right w-[100px]" />
            <img src={question} className="  w-[100px]" />
            <img src={question} className="  w-[100px]" />
          </div>
          <div className="absolute bubbles gap-20 flex  w-full ">
            <img src={question} className="  w-[100px]" />
            <img src={question} className="  w-[100px]" />
            <img src={question} className=" float-left w-[100px]" />
            <img src={question} className=" flaot-left w-[100px]" />
            <img src={question} className="  w-[100px]" />
            <img src={question} className="  w-[100px]" />
          </div>
        </div>
      )}
  <div className="max-w-[88%] py-5 w-full mx-auto pt-16">
   <FAQAccordion />
   </div>
    </div>
  );
};

export default FAQs;
