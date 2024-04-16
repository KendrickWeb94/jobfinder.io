/* eslint-disable react/prop-types */
import { DownCircleOutlined } from "@ant-design/icons";

const SecondaryBtn = (props) => {
  return (
    
       <>
      <a href="#">
        <div className=" flex bg-blue-200 p-2  plus smooth font-semibold rounded-md text-blue-700 items-center gap-1 text-xs ">
         <DownCircleOutlined />
          <p>{props.status}</p>
        </div>
      </a>
    </>
    
  );
}

export default SecondaryBtn;
