import React from 'react'
import Container from '../ui/Container'
import cart from "../../assets/images/cart.png";
import cart2 from "../../assets/images/cart2.png";
import cart3 from "../../assets/images/cart3.png";
import Image from '../common/Image';

const Support = () => {
  return (
    <section className=''>
      <Container className="mx-auto">
        <div className='flex flex-cols-3 gap-64 text-center justify-center'>

          <div className='text-center'>
            <div className='flex justify-center'>
              <Image className="w-[52px] text-center" src={cart2} alt="image" />
                 </div>
          <h3 className='font-jost font-medium text-[#000000] text-[18px] mt-5.75'>FAST AND FREE DELIVERY</h3>
            <p className='font-jost font-regular text-[15px] text[#767676] mt-2 '>Free delivery for all orders over $140</p>
            
          </div>
          
          <div className='text-center'>
            <div className='flex justify-center'>
              <Image className="w-[52px] text-center" src={cart3} alt="image" />
                 </div>
          <h3 className='font-jost font-medium text-[#000000] text-[18px] mt-5.75'>24/7 CUSTOMER SUPPORT</h3>
            <p className='font-jost font-regular text-[15px] text[#767676] mt-2 '>Friendly 24/7 customer support</p>
            
          </div>
          
          <div className='text-center'>
            <div className='flex justify-center'>
              <Image className="w-[52px] text-center" src={cart} alt="image" />
                 </div>
          <h3 className='font-jost font-medium text-[#000000] text-[18px] mt-5.75'>MONEY BACK GUARANTEE</h3>
            <p className='font-jost font-regular text-[15px] text[#767676] mt-2 '>We return money within 30 days</p>
            
       </div>
          

        </div>
      </Container>
      
    </section>
  )
}

export default Support
