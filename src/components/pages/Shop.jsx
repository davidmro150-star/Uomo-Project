import React, { useEffect, useState } from 'react'
import ShopBanner from '../shop/ShopBanner'
import Breadcrumb from '../common/Breadcrumb'
import SortAndView from '../shop/SortAndView'
import Container from '../ui/Container'
import axios from 'axios';
import Allproducts from '../shop/Allproducts'


const Shop = () => {
  const [products, setProducts] = useState([]);

  const [view, setView] = useState(4);
  let totalproduct = products.length;
  let showproduct = 40;

  let result = Math.round((showproduct/ totalproduct) * 100)
  console.log(result)


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
          <SortAndView setView={setView} />
        </div>
      </Container>
    
      <Allproducts items={products} view={view} />

      <div className='w-75 h-1.5 mx-auto bg-[#E4E4E4] rounded-[10px] mt-20'>

           <div  style={{width:`${result}%`}} className={`h-full bg-primary-black  rounded-[10px]`}></div>

      </div>

     
    </main>
  )
}

export default Shop
