import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Listitem from '../common/Listitem';
import { Productcategory } from '../../api/productcategory';
import axios from 'axios';
import Product from '../common/Product';



const TrendyProducts = () => {

  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("All");
  const [filterproduct, setFilterProduct] = useState([]);
  const [productLimit, setProductLimit] = useState([]);



  const handleActive = (name) => {
  
    setCategory(name); 

    if (name == "ALL") {
      setFilterProduct(products);
    } else {

    let filterproduct = products.filter((item) => item.category === name);
    setFilterProduct(filterproduct);
    }


  };
  
    function getProducts () {
      axios.get("https://dummyjson.com/products?page=1&limit=60")
        .then((res) => {
        setProducts(res.data.products);
         
          setCategory("ALL");
        })
        .catch((err) => {
        throw new Error(err.message ? err.message : "Something went wrong!");
     })
    
  }
  
  useEffect(() => {
    getProducts();

  }, []);

  useEffect(() => {
    let limit = products.slice(0, 8);
    setProductLimit(limit);
  }, [products]);


  const handleSeeAllProduct = () => { 
    let limit = products.slice(0, filterproduct.length - 1);
    setProductLimit(limit);
   
     
  };

    const handleSeeLESSProduct = () => { 
    let limit = products.slice(0, 8);
    setProductLimit(limit);
   
     
  };
    
  return (
    <section className='mt-25.25'>
      <Container>
        <h2 className='font-jost text-primary-black text-center text-[35px] font-normal'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>

        <ul className='flex justify-center gap-13.5 mt-7.5'>
          {Productcategory?.map((item) => (
             
            <Listitem
              onClick={()=>handleActive(item.name)}
              className={`${category == item.name ? "font-bold text-redcolor after:bg-primary-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%] ;" : "font-jost font-medium font-base cursor-pointer text-third"}`}>{item.name}</Listitem>
          ))}
        
      
        
          
        </ul>
        <div className='grid grid-cols-4 gap-x-7.5 gap-y-15 mt-10 '>

          {category == "ALL"
            ? productLimit.map((item) => <Product item={item} key={item.id} />)
            
             :filterproduct.map((item) => (
                <Product item={item} key={item.id} />

          
             
              ))
            }
            
            
          
        </div>
        <div className='text-center'>
          {productLimit.length > 8 ? (
            <button
              onClick={handleSeeLESSProduct}
              className='font-jost  leading-6 text-primary-black after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%] mt-10.5 cursor-pointer'>SEE LESS PRODUCTS
            </button>
          ) : (
            <button
              onClick={handleSeeAllProduct}
              className='font-jost  leading-6 text-primary-black after:bg-primary-black relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%] mt-10.5 cursor-pointer'>SEE ALL PRODUCTS
            </button>
          )}
  

       
       </div>

      </Container>
    </section>
  );
}

export default TrendyProducts;
