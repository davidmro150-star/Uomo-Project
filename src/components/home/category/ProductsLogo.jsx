import React from 'react'

import Container from '../../ui/Container'

import Image from '../../common/Image'
import logop from "../../../assets/images/plogo.jpg";
import logop2 from "../../../assets/images/plogo2.jpg";
import logop3 from "../../../assets/images/plogo3.jpg";
import logop4 from "../../../assets/images/plogo4.jpg";
import logop5 from "../../../assets/images/plogo5.jpg";
import logop6 from "../../../assets/images/plogo6.jpg";
import logop7 from "../../../assets/images/plogo7.jpg";
import logop8 from "../../../assets/images/plogo8.jpg";
import logop9 from "../../../assets/images/plogo9.jpg";
import logop10 from "../../../assets/images/plogo10.jpg";
import logop11 from "../../../assets/images/plogo11.jpg";
import logop12 from "../../../assets/images/plogo12.jpg";




const ProductsLogo = () => {
  return (
    <section className='mt-19.75 mb-25 '>
      <Container className="">
        <div>
            <div className='text-center'>
          <h3 className='font-jost  leading-6 text-primary-black  font-regular text-[35px] pb-8'>@UOMO</h3>
        </div>
        <div className='grid grid-cols-6 mt-8.5 gap-4'>
          <Image className=" mb-4" src={logop} alt="image" />
          <Image className=" mb-4" src={logop2} alt="image" />
          <Image className=" mb-4" src={logop3} alt="image" />
          <Image className=" mb-4" src={logop4} alt="image" />
          <Image className=" mb-4" src={logop5} alt="image" />
          <Image className=" mb-4" src={logop6} alt="image" />
          <Image className=" mb-4" src={logop7} alt="image" />
          <Image className=" mb-4" src={logop8} alt="image" />
          <Image className=" mb-4" src={logop10} alt="image" />
          <Image className=" mb-4" src={logop11} alt="image" />
          <Image className=" mb-4" src={logop12} alt="image" />
          <Image className=" mb-4" src={logop9} alt="image" />
            
        </div>
      </div>

        
      </Container>
      
    </section>
  )
}

export default ProductsLogo
