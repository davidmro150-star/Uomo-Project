import React from 'react'
import Container from '../ui/Container'
import Product from '../common/Product'

const Allproducts = ({items, view}) => {
  return (

    <section>
      <Container>
      
        <div className= {`grid grid-cols-${view} gap-x-7.5 gap-y-15`}>
                 {items?.map((item) => (
          <Product item={item} />
        ))}
        </div>
   
          
      
      </Container>
      
    </section>
  )
}

export default Allproducts
