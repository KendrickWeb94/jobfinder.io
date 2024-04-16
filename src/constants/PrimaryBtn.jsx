import { UploadOutlined } from "@ant-design/icons";


const PrimaryBtn = () => {
  {/*const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }; */}
  {/*import { useState } from "react";
import ResumeBanner from "./ResumeBanner"; */}


  return (
    <>
      <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
        <div className="flex plus text-white items-center gap-3 text-sm">
          <UploadOutlined />
          <p>Upload Resume</p>
        </div>
      </label>
   
    </>
  );
};

export default PrimaryBtn;
