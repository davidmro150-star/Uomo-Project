import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import axios from 'axios';
import Product from '../common/Product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";
import { LiaAngleLeftSolid, LiaAngleRightSolid  } from "react-icons/lia";


const LimitedProduct = () => {

 const [products, setProducts] = useState([]);
  
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute -right-10 top-2/4 translate-y-[-50%]`}
     
      onClick={onClick}
       ><LiaAngleRightSolid className='text-[25px]' /></div>
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute -left-10 top-2/4 translate-y-[-50%]`}
      
      onClick={onClick}
      > <LiaAngleLeftSolid className='text-[25px]' /> 
    </div>
  );
}

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  }
 
  
  
    function getProducts () {
      axios.get("https://dummyjson.com/products")
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


  const Slider = SliderLib.default|| SliderLib
  return (
    <section className='mt-22.75'>
      <Container>
      <h2 className='text-center text-[35px] font-jost font-normal text-primary-black '>LIMITED <span className='font-bold'>EDITION</span></h2>
        
        <Slider {...settings}>
        {
          products?.map((item) => (
      <Product item={item}/>
          ))
        }
      

        </Slider>
  
 

      </Container>
    </section>
  )
}

export default LimitedProduct;
