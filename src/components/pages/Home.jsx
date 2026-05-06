import { BiSupport } from "react-icons/bi";
import Banner from "../home/Banner";
import Category from "../home/category/Category";
import ProductsLogo from "../home/category/ProductsLogo";
import LimitedProduct from "../home/LimitedProduct";
import SpringCollection from "../home/SpringCollection";
import StartingCategory from "../home/StartingCategory";


import TrendyProducts from "../home/TrendyProducts";
import Support from "../home/support";
import Footer from "../layout/Footer";








const Home = () => {
  
  return(
  <>
      <Banner />;
      <Category />;
      <TrendyProducts />;
      <SpringCollection />
      <StartingCategory />
      <LimitedProduct />
      <ProductsLogo />
      <Support />
     
   
   
  
  </>

  ) 
    

}

export default Home;
