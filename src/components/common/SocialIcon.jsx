import React from 'react'
import Image from './Image';

const SocialIcon = () => {
  return (
   
    <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-8  px-3 py-3 ">
   
      <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" src="images/facebook.png" alt="logo" />
      <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" src="images/instagram.png" alt="logo" />
      <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" src="images/opera.png" alt="logo" />
      <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" src="images/twiter.png" alt="logo" />
      <span className="text-xs tracking-widest text-color-third rotate-180 [writing-mode:vertical-rl]">
        FOLLOW US
      </span>
    </div>
  )
};
  


export default SocialIcon;
