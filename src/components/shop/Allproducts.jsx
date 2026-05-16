import React from 'react'
import Container from '../ui/Container'
import Product from '../common/Product'

const Allproducts = ({items, view}) => {
  return (

    <section>
      <Container>
      
   <div
  className={`grid gap-x-7.5 gap-y-15 ${
    view === 2
      ? "grid-cols-2"
      : view === 3
      ? "grid-cols-3"
      : "grid-cols-4"
  }`}
>
  {items?.map((item) => (
    <Product key={item.id} item={item} />
  ))}
</div>
   
          
      
      </Container>
      
    </section>
  )
}

export default Allproducts
