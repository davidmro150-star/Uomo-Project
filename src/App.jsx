import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
      ]
      
   
    },
  ]);
 

  
  return <RouterProvider router={router} />;
   
  
};

export default App;
