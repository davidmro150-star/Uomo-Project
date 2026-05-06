import React from 'react'
import ShopBanner from '../shop/ShopBanner'
import Breadcrumb from '../common/Breadcrumb'
import SortAndView from '../shop/SortAndView'
import Container from '../ui/Container'


const Shop = () => {
  return (
    <main>
      <ShopBanner />
      <Container>
        <div className='flex justify-between'>
           <Breadcrumb />
      <SortAndView/>
        </div>
     </Container>
    
     
    </main>
  )
}

export default Shop
