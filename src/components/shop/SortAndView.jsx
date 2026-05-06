import React from 'react'

const SortAndView = () => {
  return (
 
    <div className="relative inline-block  after:absolute after:top-0 after:-right-7.5 after:h-5.5 after:w-[1px] after:bg-[#000]  after:content-[''] ">
         <select className='font-jost font-medium text-primary-black text-base leading-6 border-b-2 uppercase'>
      <option>DEFAULT SORTING</option>
      <option>Order & Buy</option>
      <option>Limited Products</option>
       <option>Discount Prices</option>
    </select>
   </div>

  )
}

export default SortAndView
