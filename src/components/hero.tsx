import { categories } from "@/constant/navlink"
import { ChevronRight } from 'lucide-react';
import Image from "next/image"

function Hero() {
  return (
    <>
      <section className="w-full flex mb-[140px]">
        
        {/* side bar */}
        <nav className="flex flex-col gap-4 w-[217px] mt-[40px]">
          {categories.map((category, index)=>{
            return <button key={index} 
            className="flex items-center justify-between text-left hover:text-primary transition-colors">
              <span className="text-[16px] leading-[24px]">{category.name}</span>
              {category.icon == true && <ChevronRight/>}
            </button>
          })}
        </nav>


        {/* line */}
        <div className="w-[1px] bg-black h-[384px] ml-[16px] mr-[45px]"></div>


        {/* pic */}
        <div className=" mt-[40px] relative">
          <Image src="/image/hero-img.jpg" width={892} height={344} alt="mobile"
          className=" rounded-lg"
          ></Image>
        </div>

      </section>
    </>
  )
}

export default Hero ;