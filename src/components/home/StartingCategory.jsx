import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import GirlImage from "../../assets/images/girl.png";
import BoyImage from "../../assets/images/boy.png";
import PicImage from "../../assets/images/pic.png";
import { Link } from 'react-router';

const StartingCategory = () => {
  return (
     
    <section className='mt-25'>
      <Container>
        <div className='flex gap-7.5'>
          <div className='w-1/2 relative group'>
            <Image className="ml-70 h-99.5" src={GirlImage} alt="Image" />
            <div className='w-full z-10  h-full group-hover:bg-redcolor/85 absolute top-0 left-0'>
             

            </div>
            <div  className='absolute z-20 left-12.5 bottom-12.5 w-full' >
              
          <h3 className='font-jost font-medium text-lg text-primary-black group-hover:text-primary-white'>STARTING AT $70</h3>
              <h2 className='font-jost text-[26px] font-medium text-primary-black  group-hover:text-primary-white mt-2'>Women’s Gown</h2>
              
              <Link
                to="/"
                className="font-jost inline-block mt-3.75 relative text-primary-black text-sm  leading-6 font-medium after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%] group-hover:text-primary-white"
              >
                SHOP NOW
              </Link>
            </div>
          </div>

          <div className='w-1/2 relative group'>
            <Image className=" ml-70 h-99.5 " src={BoyImage} alt="Image" />
          <div className='w-full z-10 h-full group-hover:bg-redcolor/85 absolute top-0 left-0' >
         
            </div>
            <div className='absolute z-20 left-12.5 bottom-12.5 w-full' >
              <h3 className='font-jost font-medium text-lg text-primary-black group-hover:text-primary-white'>STARTING AT $19</h3>
              <h2 className='font-jost text-[26px] font-medium text-primary-black mt-2 group-hover:text-primary-white'>Men’s Sportswear</h2>
              
              <Link
                to="/"
                className="font-jost mt-3.75 relative text-primary-black text-sm  inline-block leading-6 font-medium after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%] group-hover:text-primary-white"
              >
                SHOP NOW
              </Link>

            </div>
          </div>


        </div>
      </Container>
    </section>
  )
};


export default StartingCategory
