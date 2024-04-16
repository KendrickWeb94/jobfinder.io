import { user3 } from "../assets/assets";
import SignUp from "./SignUp";
import { useState } from "react";

const Profile = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div className=" h-auto pt-[4rem] text-white relative smooth max-w-[90%] mx-auto">
      {isSignUpOpen && <SignUp onClose={closeSignUp} />}
      <div className="lg:flex-row flex ds:flex-col lg:items-center p-1">
        <div
          className="image__tab max-w-[400px] overflow-hidden object-cover rounded-md w-full max-h-[450px]"
          onClick={openSignUp}
        >
          <img src={user3} className=" w-full object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
