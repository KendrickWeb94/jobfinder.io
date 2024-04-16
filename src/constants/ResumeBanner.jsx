/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ResumeBanner = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (submitting) {
      alert("Already submitted! Please wait for response.");
      return;
    }

    setShowSuccess(true);

    setSubmitting(true);

    setTimeout(() => {
      setShowSuccess(false);

      setSubmitting(false);
    }, 5000);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 h-[98%] rounded-md smooth p-5 bg-white high-index flex-center right-0 w-full xl:w-[50%]">
          <div className="w-full h-full flex-col flex-center relative">
            <p className="text-base p-2 border-blue-300 border rounded-md absolute top-0 text-zinc-600 poppins">
              Preview Resume
            </p>
            <img
              src={props.fileUrl}
              className="w-[70%] h-[300px] rounded-md object-cover"
            />
            <div className="flex items-center absolute bottom-0 gap-5">
              <button
                className="bg-green-200 smooth hover:bg-transparent hover:border border-green-200 text-green-600 text-sm font-medium w-[150px] rounded-md poppins p-3"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button className="border-red-200 border smooth hover:bg-red-200 text-red-600 text-sm font-medium w-[150px] rounded-md poppins p-3">
                Cancel
              </button>
            </div>
          </div>
          {showSuccess && <Successful />}
        </div>
      )}
    </>
  );
};

const Successful = ({ onHide }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onHide();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className="absolute rounded-md top-0 bottom-0 poppins left-0 right-0 flex items-center justify-center bg-green-200 text-green-600 font-medium text-lg p-5">
      {showAnimation && (
        <div className="ani">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <div className={showAnimation ? "hidden" : ""}>
        Submission Successful!
      </div>
    </div>
  );
};

export default ResumeBanner;
