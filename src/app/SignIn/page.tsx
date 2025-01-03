import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"




function   SignIn() {
  return (
    <div className='flex justify-center items-center h-screen w-full '>
      {/* Left side with image */}
      <div className="hidden lg:flex lg:w-2/3 bg-[#CBE4E8] relative items-center justify-center gap-12">
        <div className="relative ">
          <Image
            src="/image/shopingtroly-img.svg"
            alt="Shopping cart with mobile phone"
            width={805}
            height={781}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right side with form */}
      {/* <div className="w-full lg:w-1/3 flex items-center justify-center p-8">
        <div className="w-full max-w-[371px] space-y-12"> */}
        <div className=" w-full lg:w-1/3 flex items-center justify-center pl-10 mr-[135px] ">
        <div className="w-full max-w-[371px] space-y-12 py-[13px]  ">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl font-medium tracking-wide">
              Log in to Exclusive
            </h1>
            <p className="text-base font-normal text-black/70">
              Enter your details below
            </p>
          </div>

          {/* Form */}
          <form className="space-y-10">
            <div className="space-y-10">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="border-0 border-b border-black/50 rounded-none px-0 h-8 placeholder:text-black/40"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Password"
                  className="border-0 border-b border-black/50 rounded-none px-0 h-8 placeholder:text-black/40"
                />
              </div>
             
            </div>

            <div className="space-y-8 flex items-center justify-between">
              <Button className="w-1/2 bg-[#DB4444] hover:bg-[#DB4444]/90 text-base font-medium h-14">
                log in
              </Button>
              <span  className="text-[#DB4444] flex items-center justify-center ">Forget Password ?</span>

            
            
            </div>
          </form>
        </div>
      </div>
     
      
    </div>
  )
}

export default SignIn ;
