import React from 'react'
import Container from '../ui/Container'
import Product from '../common/Product'

const Allproducts = ({items}) => {
  return (
    <section>
      <Container>
      
        <div className='grid grid-cols-4'>
                 {items?.map((item) => (
          <Product item={item} />
        ))}
        </div>
   
          
      
      </Container>
      
    </section>
  )
}

export default Allproducts
