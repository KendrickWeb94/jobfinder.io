/* eslint-disable react/prop-types */
import { CloseOutlined } from "@ant-design/icons"
import { gif } from "../assets/assets"


const Searching = (props) => {
    
  return (
    <div className="  high-index2 flex items-center p-3 justify-center  shadow-2xl shadow-blue-300/80 rounded-lg bg-white fixed -translate-y-12">

        <div className="h-auto relative w-[400px] rounded-lg flex-col bg-white p-3 flex  space-y-3 items-center justify-center">
            <span onClick={props.onClick}  className="p-1 absolute cursor-pointer  h-10 w-10 right-0 top-0 rounded-full bg-blue-300 text-blue-700 plus">
                <CloseOutlined />
            </span>
            <img src={gif} className=" w-full h-[150px] rounded-md bg-blue-300 fill-blue-600" />
            <p className="plus text-lg font-semibold text-black">Searching for Jobs...</p>
            <p className="plus text-sm text-zinc-700 font-medium">We would get you notified when we find one </p>
            <p className="plus text-xs text-zinc-500 font-medium">input your email so you can get a notification </p>
            <input type="email" name="email" id="email" placeholder="Jobfinder@email.com" className=" text-sm placeholder:text-sm w-full rounded-lg p-2 bg-black/20 outline-none focus:bg-black/40 smooth text-zinc-600 placeholder:text-zinc-600"/>
        </div>
    </div>
  )
}

export default Searching