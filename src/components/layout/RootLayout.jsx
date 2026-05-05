import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SocialIcon from '../common/SocialIcon';




const RootLayout = () => {
  return (
    <div>

      <Header />
    <SocialIcon />
      <Outlet />
     <Footer/>
     
     
    </div>

      
  )
}

export default RootLayout;
