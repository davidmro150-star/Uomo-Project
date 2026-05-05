import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router'
import Image from '../common/Image'
import shirt from "../../assets/images/shirt.png";
import Countdown from 'react-countdown';

const SpringCollection = () => {
  return (
    <section className=' mx-15 bg-[#EBEBEB] pt-7 pb-7.25 mt-25'> 
      <Container>
        <div className='flex justify-between items-end'>
          <div>
          <h4 className='font-jost after:content-[] relative ml-16.5 text-sm leading-6 font-medium text-[#C32929] after:absolute after:top-2 after:-left-15 after:h-0.5 after:w-10 after:bg-[#C32929]'>DEAL OF THE WEEK</h4>

          <h2 className='font-jost text-primary-black mt-2.5 text-[70px] font-normal'>
            <span className='font-bold'>Spring</span> Collection</h2>
          
                 <Link
                      to="/"
                      className="font-jost relative text-primary-black text-sm mb-29.5 inline-block leading-6 font-medium after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]"
                    >
                      SHOP NOW
            </Link>

            <Countdown
              date= {new Date("2026-04-30T00:00:00Z")}
              renderer={({ days, hours, minutes, seconds }) => {
                return (
              
                  <div className='flex'>

                    <div>

                      <h3 className='font-jost text-primary-black text-[30px] leading-7.5 font-normal'>{days}</h3>
                      <h4 className='font-jost text-third text-[16px] font-bold'>DAYS</h4>
                    </div>
                    <span className='font-jost text-primary-black text-[30px] mr-5.5 leading-7.5 font-normal ml-6.5'>:</span>

                    <div>

                      <h3 className='font-jost text-primary-black text-[30px] leading-7.5 font-normal'>{hours}</h3>
                      <h4 className='font-jost text-third text-[16px] font-bold'>HOURS</h4>
                    </div>
                    <span className='font-jost text-primary-black text-[30px] mr-5.5  leading-7.5 font-normal ml-6.5'>:</span>

                    <div>

                      <h3 className='font-jost text-primary-black text-[30px] leading-7.5 font-normal'>{minutes}</h3>
                      <h4 className='font-jost text-third text-[16px] font-bold'>MINS</h4>
                    </div>
                    <span className='font-jost text-primary-black text-[30px] mr-5.5  leading-7.5 font-normal ml-6.5'>:</span>

                    <div>

                      <h3 className='font-jost text-primary-black text-[30px] leading-7.5 font-normal'>{seconds}</h3>
                      <h4 className='font-jost text-third text-[16px] font-bold'>SEC</h4>
                    </div>
            

                  </div>
                );
 
              }}
    
            />
            
         

         

        </div>
        <Image className="w-[460px] h-[570px]" src={shirt} alt="image"/>
    </div>
      </Container>
  </section>
  )
}

export default SpringCollection
