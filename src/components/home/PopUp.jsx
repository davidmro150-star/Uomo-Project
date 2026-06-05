import React, { useState, useEffect } from "react";
import Popup from "../../../public/images/popup.png";
import { IoCloseOutline } from "react-icons/io5";
const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
   
    <section>

  {showPopup && (
      <div className=" fixed inset-0 bg-black/40 flex items-center justify-center z-40 ">
        
        
      
    <div className="relative  flex bg-[#E4E4E4] gap-2 items-center justify-center w-[800px] h-[350px] top-10" >
      
        
      <button onClick={() => setShowPopup(false)}className="absolute top-4 right-4 text-2xl z-10">
        
        <IoCloseOutline />
      </button>
      {/* Left Image */}
      <div className="w-1/2 h-full">
        <img
          className="w-[450px]  h-[350px]"
          src={Popup}
          alt="image"
        />
      </div>

      {/* Right Content */}
      <div className="w-1/2 flex flex-col justify-center px-8">
        
        <h2 className="font-jost font-medium text-primary-black text-[26px] mb-.5">
          Sign Up to Our Newsletter
        </h2>

        <p className="mb-3.75 font-jost font-regular  text-[14px] leading-6 text-primary-black">
          Be the first to get the latest news about trends, promotions, and much more!
        </p>

        {/* Input */}
        <div className="flex bg-white rounded-md ">
          <input
            type="text"
            placeholder="Your email address"
            className="font-jost font-jost font-regular text-primary-black text-[14px] leading-6 px-4 py-4 w-full outline-none"
          />

          <button className="font-jost font-medium text-primary-black text-[14px] px-5 leading-6">
            JOIN
          </button>
        </div>

      </div>
    </div>

     
        </div>
        )}
   </section>
  
  );
};

export default Banner;