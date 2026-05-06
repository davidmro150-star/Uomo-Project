import React from 'react'
import { Link, useLocation } from 'react-router'
import Container from '../ui/Container'

const Breadcrumb = () => {

  let { pathname } = useLocation();
  let location = pathname.split("/").pop();

  return (

    
      <h2 className='font-jost font-medium text-primary-black text-sm leading-6 text-uppercase'>
      <Link to="/">HOME/</Link> /{location}
      
      </h2>      

   
  )
}

export default Breadcrumb
