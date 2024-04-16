import { LinkOutlined, UserAddOutlined } from "@ant-design/icons"; 

const DropwDown = () => {
  return (
    
        <div className=" w-[160px] child-div z-50 absolute  rounded-md -translate-x-9 flex items-center justify-center  bg-zinc-900  p-2  h-[100px]">
              <ul className="  space-y-1 w-full">
                <li className=" w-full  plus rounded-md hover:bg-blue-200 hover:text-blue-500 hover:smooth  hover-bg  smooth gap-3 p-3 flex items-center justify-between text-xs  transition-all ease-in-out delay-700 duration-700 font-semibold ">
                  Create Account{" "}
                  <span>
                    {" "}
                    <UserAddOutlined />{" "}
                  </span>
                </li>
                <li className=" w-full  plus rounded-md hover-bg smooth  hover:bg-white hover:text-black gap-3 p-3 flex items-center justify-between text-xs  hover:smooth font-semibold ">
                  Stay as Guest{" "}
                  <span>
                    {" "}
                    <LinkOutlined />{" "}
                  </span>
                </li>
              </ul>
            </div>
    
  );
}

export default DropwDown;
