import React from 'react'
import Container from '../ui/Container'
import shopbanner from "../../assets/images/shop.png";
import Image from '../common/Image';


const ShopBanner = () => {
  return (
    <section>
     
      <Image className="mx-auto w-full px-15"
        src={shopbanner} alt="banner" />
      

      <Container className= "relative">                                         
        <ul className='flex gap-7.75 absolute bottom-33.75 left-0 w-full'>
          <li className='list-item'>STAYHOME</li>
          <li className='list-item'> NEW IN</li>
          <li className='list-item'>JACKETS</li>
          <li className='list-item'>HOODIES</li>
          <li className='list-item'> MEN</li>
          <li className='list-item'>WOMEN </li>
          <li className='list-item'> TROUSERS</li>
          <li className='list-item'>ACCESSORIES</li>
            <li className='list-item'> SHOES</li>
      </ul>

      </Container>
     
      
    </section>
  )
}

export default ShopBanner
