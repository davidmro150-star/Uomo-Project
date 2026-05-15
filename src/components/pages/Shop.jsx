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
  const [showproduct, setshowproduct] = useState(20);
  let totalproduct = products.length;


  let result = Math.round((showproduct/ totalproduct) * 100)
 


     function getProducts () {
  axios.get("https://dummyjson.com/products?page=1&limit=150")
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

  const handleShowMore = () => {
    setshowproduct((prev) =>
      Math.min(prev + 20, totalproduct)
    );
  }


 
  return (
    <main>
      <ShopBanner />
      <Container>
        <div className='flex justify-between  mt-9 mb-10'>
          <Breadcrumb />
          <SortAndView setView={setView} />
        </div>
      </Container>
    
      <Allproducts items={products.slice(0, showproduct)}
      
        view={view} />
      
        <h2 className='text-center font-jost text-[14px] font-medium text-primary-black leading-6 mt-12.5'>
        SHOWING {showproduct} of {totalproduct} Items
      </h2>

      <div className='w-75 h-1.5 mx-auto bg-[#E4E4E4] rounded-[10px] mt-2'>

        <div style={{ width: `${result}%` }}
          
          className={`h-full bg-primary-black  rounded-[10px]`}></div>

      </div>


      {showproduct < totalproduct && (
        

          <div className='text-center mt-10 mb-20'>

          <button
            onClick={handleShowMore}
            className=' font-jost text-[14px] font-medium text-primary-black leading-6 mt-4.25 font-jost  leading-6 text-primary-black after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]'
          >
            SHOW MORE
          </button>

        </div>
      )}


     
    </main>
  )
}

export default Shop
