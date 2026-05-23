import React, { useState,  useEffect } from "react";
import Container from "../ui/Container";
import Popup from "../../../public/images/popup.png";

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

   useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <section className="">
      <Container className= "">
         <div>
         

          
          
           
            


      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className=" flex  bg-white rounded-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ×
            </button>
                
                <div className="w-112.5 h-137.5">
                 <img className=" object-cover" src={Popup} alt="image"/></div>       
           
                
                
          <div className="justify-center"> 
                  
            <h2 className="text-2xl font-bold ">
              Sign Up to Our Newsletter
            </h2>

            <p className="text-gray-600">
           Be the first to get the latest news about trends, promotions, and much more!
                  </p>
                  
                  <div  className="flex  bg-[#FFFFFF] outline-none ">
                     <input type="text" placeholder="Your email address"
                  className="font-jost font-regular text-primary-black text-[14px] leading-6 px-3 py-2 w-full outline-none ">
                  </input>
                  <button className="font-jost font-medium text-primary-black text-[14px] leading-6 px-4">JOIN</button>

                 </div>
                </div>
                

          </div>
              </div>
              
      )}
          
         
          

    </div>
      </Container>
   </section>
  );
};

export default Banner;
