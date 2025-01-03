'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function SignUpForm() {
  return (
    <div className="min-h-screen flex mt-[76px] ">
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
              Create an account
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
                  placeholder="Name"
                  className="border-0 border-b border-black/50 rounded-none px-0 h-8 placeholder:text-black/40"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="border-0 border-b border-black/50 rounded-none px-0 h-8 placeholder:text-black/40"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-0 border-b border-black/50 rounded-none px-0 h-8 placeholder:text-black/40"
                />
              </div>
            </div>

            <div className="space-y-8">
              <Button className="w-full bg-[#DB4444] hover:bg-[#DB4444]/90 text-base font-medium h-14">
                Create Account
              </Button>

              <Button
                variant="outline"
                className="w-full border-black/40 h-14 text-base font-normal"
              >
                <svg
                  className="w-6 h-6 mr-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#FBC02D"
                  />
                  <path
                    d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                    fill="#E53935"
                  />
                  <path
                    d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3037 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#1565C0"
                  />
                </svg>
                Sign up with Google
              </Button>

              <div className="flex items-center justify-center space-x-4 text-base">
                <span className="text-black/70">Already have account?</span>
                <Link
                  href="/SignIn"
                  className="text-black/70 hover:text-black font-medium border-b border-black/50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}














