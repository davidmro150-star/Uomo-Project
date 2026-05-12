import React, { useEffect, useState } from 'react'
import ShopBanner from '../shop/ShopBanner'
import Breadcrumb from '../common/Breadcrumb'
import SortAndView from '../shop/SortAndView'
import Container from '../ui/Container'
import axios from 'axios';
import Allproducts from '../shop/Allproducts'


const Shop = () => {
  const [products, setProducts] = useState([]);

     function getProducts () {
  axios.get("https://dummyjson.com/products?page=1&limit=60")
    .then((res) => {
      setProducts(res.data.products);
       
    })
    .catch((err) => {
      throw new Error(err.message ? err.message : "Something went wrong!");
    })
    
}
  
  useEffect(() => {
    getProducts();

  }, []);

  return (
    <main>
      <ShopBanner />
      <Container>
        <div className='flex justify-between  mt-9 mb-10'>
          <Breadcrumb />
          <SortAndView />
        </div>
      </Container>
    
      <Allproducts items={products} />
    </main>
  )
}

export default Shop
