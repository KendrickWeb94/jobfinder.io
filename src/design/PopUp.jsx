import { SendOutlined } from "@ant-design/icons";
import { newsletter } from "../assets/assets";


const PopUp = () => {
 
  return (
    <>
      
      <div className=" w-full smooth pop h-[100vh] top-0 high-index   inset-0 flex-center">
        <div className="w-auto h-auto bg-zinc-800 smooth gap-10  p-5 flex items-center justify-center lg:flex-row ds:flex-col rounded-md">
          <div className="h-[400px] lg:w-[50%] bg-zinc-800 smooth   w-full">
            <img src={newsletter} className="h-full w-full object-cover" />
          </div>
          <div className="form bg-white rounded-md h-auto space-y-5 p-5">
            <h1 className="plus font-bold text-black text-lg">
              Subscribe to Our Newsletter!
            </h1>
            <p className=" plus font-normal text-zinc-500  text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              temporibus reprehenderit, veritatis odio libero nulla!
            </p>
            <form action="#" className=" space-y-4">
              <div className=" flex items-center gap-5">
                <div className=" w-[85%] h-[40px]   p-3 rounded-md flex justify-between bg-zinc-400">
                  <input
                    type="email"
                    placeholder="Enter Your Email To Subscribe"
                    name="email"
                    id="email"
                    className="outline-none text-xs placeholder:text-white text-zinc-200 border-none w-full h-full bg-zinc-400 "
                  />
                </div>
                <span className=" rounded-md  text-xs h-10 flex items-center w-10 justify-center3 text-white p-5 bg-zinc-800 flex-center">
                  <SendOutlined className="  -rotate-45" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
