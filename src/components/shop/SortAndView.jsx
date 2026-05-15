import React from 'react'
import { IoFilterSharp } from "react-icons/io5";

const SortAndView = ({setView}) => {

  let viewproduct = [2, 3, 4]
  const handleView = (view) => (
    setView(view)
    
  )
  return (
 
    <div className="relative flex  gap-15.5 after:absolute after:top-0 after:-right-7.5 after:h-5.5 after:w-0.5 after:bg-[#E4E4E4]  after:content-[''] ">
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
      <div className='flex gap-2.5'>
        <IoFilterSharp />
         <h2 className='font-jost font-medium text-primary-black text-base leading-6 uppercase'>Filter</h2>
      </div>
   </div>

  )
}

export default SortAndView
