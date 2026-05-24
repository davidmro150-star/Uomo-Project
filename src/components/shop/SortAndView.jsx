import React, { useEffect, useState,useRef } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Range, getTrackBackground } from "react-range";
 

const SortAndView = ({setView}) => {

  let viewproduct = [2, 3, 4]
  const [filterModal, setFilterModal] = useState(false)
  
  const handleView = (view) => (
    setView(view)
    
  )

  let filterRef = useRef()
  
 

  useEffect(() => {
   
    const handleOutsideClick = (e) => {

      if (
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setFilterModal(false)
      }
    }

    window.addEventListener("mousedown", handleOutsideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick)
    }

  }, [])
  
  useEffect(() => {
  if (filterModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [filterModal]);

   const [values, setValues] = React.useState([50,100]);

  return (
 
    <div className="relative  flex  gap-15.5 after:absolute after:top-0 after:-right-7.5 after:h-5.5 after:w-0.5 after:bg-[#E4E4E4]  after:content-[''] ">
      <select className='font-jost font-medium text-primary-black text-base leading-6 border-b-2 uppercase'>
        
      <option className='bg-primary-black text-white corsure-pointer'>DEFAULT SORTING</option>
      <option className='bg-primary-black text-white corsure-pointer'>Order & Buy</option>
      <option className='bg-primary-black text-white corsure-pointer'>Limited Products</option>
       <option className='bg-primary-black text-white corsure-pointer'>Discount Prices</option>
      </select>
   

      {/* viewing */}
      
      <div className='flex items-center'>
        <h2 className='font-jost font-medium text-primary-black text-base leading-6 uppercase'>View</h2>

        {
          viewproduct.map((item) => (
            
            <button onClick={()=>handleView(item)} className='font-jost ml-4.5 font-medium text-primary-black text-base leading-6 uppercase'>{item}</button>
          ))
       }


    
      </div>

     
      <div ref={filterRef}>
        <div  onClick={() => setFilterModal(true)} className='flex gap-2.5 items-center cursor-pointer'>
        <IoFilterSharp />
        <h2 className='font-jost font-medium text-primary-black text-base leading-6 uppercase'>Filter</h2>
        
      </div>

 
      <div    className={`fixed right-0 top-0 z-50 h-screen w-[420px] overflow-y-auto bg-white transition-all duration-300 ${
    filterModal
      ? "translate-x-0"
      : "translate-x-full"
  }`}
  style={{
    boxShadow:
      "0px 10px 25px 0px rgba(34, 34, 34, 0.35)",
  }} >

        <div className='bg-[#ffffff] px-10 '>
        <div className='flex items-center justify-between pt-8.25 pb-6.5'>
              <h3 className='font-jost font-medium text-base text-primary-black'>FILTER BY</h3>
              

   
      
             <AiOutlineClose onClick={()=>setFilterModal(false)} size={15} />
            </div>
            
                 
   {/* Product Categories */}
    <div className="mb-9">
      <div className=" flex items-center justify-between">
        <h3 className="ffont-jost font-medium text-[18px] text-[#222222] pb-3.25">
          Product Categories
        </h3>

        <span>^</span>
      </div>

      <div className="grid grid-cols-2 gap-y-3">
        <div className="space-y-3">
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Dresses</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Sweatshirts</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Jackets</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Jeans</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Men</p>
        </div>

        <div className="space-y-3">
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Shorts</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Swimwear</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">T-Shirts & Tops</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Trousers</p>
          <p className="font-jost font-regular text-[14px] text-[#222222] leading-7.5">Jumpers & Cardigans</p>
        </div>
      </div>
            </div>
            



    {/* Color */}
    <div className=" items-center ">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-jost font-medium text-[18px] text-[#222222]">
      
          Color
        </h3>

        <span>^</span>
      </div>
              <div className=' w-[221px]'>
                     
        <div className="grid grid-cols-6 gap-6.25 ">
        <div className="h-4 w-4 rounded-full bg-[#1D3178] " />
        <div className="h-4 w-4 rounded-full bg-[#D4B24C] " />
        <div className="h-4 w-4 rounded-full bg-[#7B5E57] " />
        <div className="h-4 w-4 rounded-full bg-[#C8B7B1]  " />
        <div className="h-4 w-4 rounded-full bg-[#C69B6D]" />
                <div className="h-4 w-4 rounded-full bg-[#B8860B] " />
                
                
            

        <div className="h-4 w-4 rounded-full bg-[#E6B8A2] " />

       
          <div className="h-4 w-4 rounded-full bg-[#BABABA]" />
       

        <div className="h-4 w-4 rounded-full bg-[#D87575] " />
        <div className="h-4 w-4 rounded-full bg-[#B8B29A] " />

              
        </div>

                
      </div>

      
    </div>

            {/* Sizes */}
    <div className="border-b border-[#ECECEC] py-6">
      <div className="mb-5.75 flex items-center justify-between">
        <h3 className="font-jost text-[18px] font-medium uppercase text-primary-black">
          Sizes
        </h3>

        <span>^</span>
      </div>

      <div className="w-[260px] flex flex-wrap gap-4">
        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            className="h-10 w-12 border border-[#E5E5E5] font-jost font-regular  text-[14px] text-[#767676] duration-300 leading-7.5 hover:border-black hover:text-black"
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Brands */}
    <div className="border-b border-[#ECECEC] mt-10">
      <h3 className="mb-5 font-jost text-[18px] font-medium uppercase text-primary-black">
        Brands
      </h3>

      {/* Search */}
      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search"
          className="h-11 w-full border border-[#E5E5E5] px-4 font-jost font-regular  text-[14px] leading-6 text-[#767676] outline-none"
        />

        <span className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2">
          <CiSearch />
        </span>
      </div>

      {/* Brand List */}
      <div className="space-y-4 mb-4.75">
        {[
          ["Adidas", 2],
          ["Balmain", 7],
          ["Balenciaga", 10],
          ["Burberry", 39],
          ["Kenzo", 95],
          ["Givenchy", 1092],
          ["Zara", 48],
        ].map(([brand, count]) => (
          <div
            key={brand}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <input type="checkbox" />

              <p className=" font-jost font-regular text-[14px] text-primary-black leading-10">
                {brand}
              </p>
            </div>

            <span className="font-jost font-regular text-[14px] text-primary-black leading-10">
              {count}
            </span>
          </div>
        ))}
      </div>
    </div>

            {/*   Price    */}


   <Range
      label="Select your value"
      step={0.1}
      min={29}
      max={940}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
       
          
            className="h-2 w-full rounded"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#e5e5e5", "black", "#e5e5e5"],
                min: 29,
                max: 940,
              }),
            }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
        
            className="h-5 w-5 rounded-full bg-white border border-black"
        />
      )}
    />
     <div className="mt-6 flex justify-between font-jost font-regular text-[#767676] text-base leading-10">
      <p>Min Price: <span className="font-jost font-regular text-base text-primary-black leading-10">${values[0]}
      </span></p>
  
      <p>Max price: <span className="font-jost font-regular text-base text-primary-black leading-10">${values[1]}
      </span></p>
  
      </div>


      {/* Tags */}
      <div className="mt-6 flex flex-cols gap-4.25 ">
        <button className="group flex items-center font-jost font-regular text-primary-black text-[11px] leading7.5   bg-[#EEEEEE] gap-3.5 px-3 py-2 hover:bg-primary-black  hover:text-white">
          <AiOutlineClose className='flex w-2.5 h-2.5  text-primary-black transition-all duration-300 group-hover:text-white'/> BLUES
        </button>

              <button className=" group flex items-center font-jost font-regular text-primary-black text-[11px] leading7.5  bg-[#EEEEEE] gap-3.5 px-3 py-2 hover:bg-primary-black hover:text-white">
                <AiOutlineClose className='flex gap-4.5  w-2.5 h-2.5 text-primary-black transition-all duration-300 group-hover:text-white' />
          MAX PRICE: $493
        </button>

        <button className="group flex items-center font-jost font-regular text-primary-black text-[11px] leading7.5   bg-[#EEEEEE] gap-3.5 px-4 py-2 hover:bg-primary-black hover:text-white ">
          <AiOutlineClose className='flex w-2.5 h-2.5 text-primary-black transition-all duration-300 group-hover:text-white' /> Zara
        
        </button>
      </div>

      {/* Reset */}
      <button className=" group mt-3.75 mb-105  flex items-center font-jost font-regular text-primary-black text-[11px] leading7.5   bg-[#EEEEEE] gap-3.5  px-3 py-2 hover:bg-primary-black hover:text-white">
        <AiOutlineClose className='flex w-2.5 h-2.5 text-primary-black transition-all duration-300 group-hover:text-white' />  Reset Filter
      </button>
  
  
</div>

          </div>
          



        </div>
  

           </div>


      
  

     
  

  )
}

export default SortAndView
