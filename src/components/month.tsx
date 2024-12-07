import { bestSellingCard } from "@/constant/bestSellingCard"
import RedHeading from "./redHeading"
import ProductCard from "./productCard"
import Image from "next/image"

function Month() {
  return (
    <>
      <section className="   mt-[70px]">
        {/* heading */}
        <RedHeading text="This Month" textColor="red" />

        {/* product month */}
        <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>Best Selling Products</h2>
          </div>

          <button className='bg-[#DB4444] py-[16px] px-[48px] hover:bg-gray-600 text-white'>View All</button>
        </div>

        {/* card div */}
        <div className="w-full h-[350px] flex gap-[30px] mt-[60px]">
          <ProductCard loop={bestSellingCard }/>
        </div>

        {/* picture */}
        <div className="  mt-[140px] ">
          <Image src={"/image/jbg.png"}
           alt={"image"}
           width={1170}
           height={500}
           
           ></Image>
        </div>
      </section>
    </>
  )
}

export default Month