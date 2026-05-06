import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import social from "../../../public/images/fbc.png";
import socialIcon2 from "../../../public/images/bi.png";
import socialIcon3 from "../../../public/images/gr.png";
import socialIcon4 from "../../../public/images/yt.png";
import socialIcon5 from "../../../public/images/rr.png";
import money from "../../../public/images/money.png";
import next from "../../../public/images/arr.png";


const Footer = () => {
  return (
   <section className="bg-[#CFCDCD] mt-25">
  <Container className="mx-auto">

    <div className="flex gap-20 py-25">

  {/* LEFT: Logo section */}
  <div className="max-w-[300px]">
    <Image className="mb-10" src="/images/logo.png" alt="logo" />

    <p className="font-jost font-regular text-primary-black  text-[14px] whitespace-nowrap mb-4 leading-6 mb-3.75">
      1418 River Drive, Suite 35 Cottonhall, CA 9622
    </p>

    <p className="font-jost font-regular text-primary-black text-[14px] mb-9 leading-6">United States</p>
    <p className="font-jost font-medium text-primary-black text-[14px]  leading-6 mb-3.5">sale@uomo.com</p>
    <p className="font-jost font-medium text-primary-black text-[14px] leading-6 mb-11.75">+1 246-345-0695</p>

    <div className="flex gap-9">
      <Image className="w-[8px] text-medium " src={social} alt="" />
      <Image className="w-[8px] text-medium" src={socialIcon2} alt="" />
      <Image className="w-[8px] text-medium" src={socialIcon3} alt="" />
      <Image className="w-[8px] text-medium" src={socialIcon4} alt="" />
      <Image className="w-[8px] text-medium" src={socialIcon5} alt="" />
    </div>
  </div>

  {/* RIGHT: All columns */}
  <div className="flex gap-36">

    <div>
      <h2 className='font-jost font-medium text-primary-black text-[18px]'>COMPANY</h2>
              <ul className='mt-6.75 space-y-3 
      font-jost font-regular text-primary-black text-[14px] leading-10'>
                
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>About Us</li>
        <li className='font-jost font-regular text-primary-black text-[14px] leading-10  after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Careers</li>
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Affiliates</li>
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Blog</li>
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Contact</li>
      </ul>
    </div>

    <div>
      <h2  className='font-jost font-medium text-primary-black text-[18px]'>SHOP</h2>
      <ul  className='mt-6.75 space-y-3 
      '>
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>New Arrivals</li>
        <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Accessories</li>
        <li  className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Men</li>
        <li  className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Women</li>
        <li  className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Shop All</li>
                
      </ul>
    </div>

    <div>
      <h2 className='font-jost font-medium text-primary-black text-[18px]'>HELP</h2>
      <ul  className='mt-6.75 space-y-3 
      '>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Customer Service</li>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>My Account</li>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Find a Store</li>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Legal & Privacy</li>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Contact</li>
                <li className=' font-jost font-regular text-primary-black text-[14px] leading-10 after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'>Gift Card</li>
      </ul>
    </div>

          </div>
          
          <div>
        <h2 className="className='font-jost font-medium text-primary-black text-[18px]">SUBSCRIBE</h2>

        <p className="font-jost font-regular text-primary-black text-[14px] leading-10 mt-6.75">
              Be the first to get the latest news about trends, 
              <span className=" block font-jost font-regular text-primary-black text-[14px] leading-10 mb-3.5">promotions, and more!</span>
        </p>

        <div className="flex  bg-[#FFFFFF] outline-none mb-10.5">
              <input
               
            type="text"
            placeholder="Your email address"
            className="font-jost font-regular text-primary-black text-[14px] leading-6 px-3 py-2 w-full outline-none "
          />
          <button className="font-jost font-medium text-primary-black text-[14px] leading-6 px-4">JOIN</button>
        </div>

        <p className="font-jost font-medium text-primary-black text-[15px] mb-2.75">Secure payments</p>
       <Image src={money} alt="icon"/>
      </div>


        </div>

            <p className="border border-gray-400 mb-8.5"></p>
      
        <div className='flex  justify-between'>
          <h3 className='font-jost font-regular text-primary-black text-[14px] leading-6  mb-7'>©2020 Uomo</h3>
          <div className='flex items-center gap-3'>
           <p className='font-jost font-regular  text-[14px] leading-6  mb-7 text-[#767676] '>Language</p>
            <p className='font-jost font-regular  text-[14px] leading-6  mb-7 '>United Kingdom  |  English</p>
            <Image className= 'w-[14px] h-[14px] mb-7' src={next} alt="icon"/>
            <p className='font-jost font-regular  text-[14px] leading-6  mb-7   text-[#767676]'>Currency</p>
            <p className='font-jost font-regular text-primary-black text-[14px] leading-6  mb-7'>$</p>
            <p className='font-jost font-regular text-primary-black text-[14px] leading-6  mb-7'>USD</p>
             <Image className= 'w-[14px] h-[14px] mb-7' src={next} alt="icon"/>
          </div>
        </div> 
       

      </Container>

  
    
</section>
  )
}

export default Footer
