import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },

        {
          path: "About",
          Component: About},
      
    {
          path: "Shop",
          Component: Shop,
      }
      ]
      
   
    },
  ]);
 

  
  return <RouterProvider router={router} />;
   
  
};

export default App;
