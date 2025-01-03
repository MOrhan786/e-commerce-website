import RedHeading from './redHeading'
import Image from 'next/image'
import Link from 'next/link'

function feature() {
  return (
    <>
    
    <section className=' w-full pt-[140px] '>
      {/* heading */}
      <RedHeading text="Features" textColor="red" />
      

       {/* featuers */}
       <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>New Arrival</h2>
          </div>
          </div>
          {/* botom div */}
        
          <div className="w-[1170] h-[600] p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Play S5 Section */}
        <div className="relative bg-black rounded-lg overflow-hidden group ">
          <div className="aspect-square relative mt-[89px] ">
            <Image
              src="/image/play-station-img.svg"
              alt="PlayStation 5"
              width={511}
              height={511}
              className="object-cover p-6"
            />
          </div>
          <div className="absolute bottom-8 left-8 z-10">
            <div className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-wide text-white">PlayStation 5</h2>
                <p className="text-sm text-white/90 max-w-[242px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
              </div>
              <Link
                href="#"
                className="text-white inline-block border-b border-white/50 hover:border-white transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Women's Collections */}
          <div className="relative bg-[#0D0D0D] rounded-lg overflow-hidden h-[284px] group">
            <div className="absolute right-0 top-0 h-full w-3/4">
              <Image
                src="/image/hat-img.svg"
                alt="hat-img"
                width={432}
                height={286}
                className="object-cover h-full "
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-6 z-10">
              <div className="space-y-4">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-wide text-white">Women&apos;s Collections</h2>
                  <p className="text-sm text-white/90 max-w-[255px]">
                    Featured woman collections that give you another vibe.
                  </p>
                </div>
                <Link
                  href="#"
                  className="text-white inline-block border-b border-white/50 hover:border-white transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Speakers and Perfume Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Speakers */}
            <div className="relative bg-black rounded-lg overflow-hidden group">
              <div className="h-[284px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D9D9D9] opacity-50 blur-[150px]" />
                <Image
                  src="/image/speaker-img.svg"
                  alt="Amazon Echo"
                  width={190}
                  height={221}
                 
                />
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="space-y-2">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide text-white">Speakers</h2>
                    <p className="text-sm text-white/90">Amazon wireless speakers</p>
                  </div>
                  <Link
                    href="#"
                    className="text-white inline-block border-b border-white/50 hover:border-white transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-lg overflow-hidden group">
              <div className="h-[284px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D9D9D9] opacity-50 blur-[150px]" />
                <Image
                  src="/image/perfum-img.svg"
                  alt="Gucci Perfume"
                  width={201}
                  height={203}
                 
                />
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="space-y-2">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide text-white">Perfume</h2>
                    <p className="text-sm text-white/90">GUCCI INTENSE OUD EDP</p>
                  </div>
                  <Link
                    href="#"
                    className="text-white inline-block border-b border-white/50 hover:border-white transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         
          
    </section>
    </>
  )
}

export default feature