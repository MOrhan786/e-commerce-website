
import Category from "@/components/category";
import Feature from "@/components/feature";
import FlashSale from "@/components/flashSale";

import Hero from "@/components/hero";
import Month from "@/components/month";
import OurProduct from "@/components/ourProduct";
import Services from "@/components/services";



export default function Home() {
  return (
    <div className="  px-[135px] overflow-hidden ">
      <Hero/>
      <FlashSale/>
      <Category/>
      <Month/>
      <OurProduct/>
      <Feature/>
      <Services/>
      
       
      
     

    </div>
  );
}
  
