import React from 'react'

import { Link } from 'react-router';
import Image from '../../common/Image';

const Card = ({ item }) => {
  

  if (item.id === 4) {
    return (
      <div className="bg-[#E8D8D2] p-10 flex flex-col justify-center h-full">
        
        <h3 className="font-jost text-[18px] text-primary-black">
          <span className="font-bold">E-GIFT</span> CARDS
        </h3>

        <p className="text-sm text-gray-600 mt-4 leading-6 max-w-[220px]">
          Surprise someone with the gift they really want.
        </p>

        <Link
          to={item.link}
          className="font-jost relative text-primary-black text-sm leading-6 font-medium after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]"
        >
          DISCOVER MORE
        </Link>

      </div>
    );
  }




  return (
 
    <div  
              key={item.id}
              className={` relative h-full w-full ${item.id == 1 && "col-span-2 row-span-2" } ${item.id == 2 && "col-span-2 row-span-1"}`}>
              
              <Image src={item.image}
                className="h-full w-full"
                alt={item.name} />
              
              <div className="absolute bottom-10 left-10">
                <h4 className="font-jost text-primary-black text-sm leading-6 font-normal" >HOT LIST</h4>
                <h2 className="font-jost text-[24px] font-medium" >
                <span className="font-bold">{item.name} </span>COLLECTION</h2>
                <Link
                  className="font-jost relative text-primary-black text-sm leading-6 font-medium after:bg-primary-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 hover:after:w-[40%]"
                  to={item.link}>SHOP NOW</Link>
             
              </div >
              </div>
  )
}

export default Card
