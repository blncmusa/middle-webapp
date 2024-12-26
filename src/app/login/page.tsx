"use client"


import Image from "next/image";
import { SignIn } from '@/components/signin';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between h-screen w-full">
      {/* <div className="sm:hidden block w-full">
        <div className="flex justify-center items-center border w-full">
          <p>Small</p>
          <SignIn />
        </div>
      </div> */}
      <div className="relative w-1/3 h-full shadow-inner hidden md:block">
        <Image
          src="/assets/images/signup-one.jpg"
          alt="Cover Image"
          fill
          className="object-cover shadow-inner"
          priority
        />
      </div>
      <div className="sm:w-2/3 h-full flex items-center justify-center relative w-full">
        <div className="absolute top-6 left-6">
          <h1 className="font-roboto text-4xl font-bold cursor-pointer" onClick={() => router.push('/')}>Middle.</h1>
        </div>
        <div className='w-full'>
          <div className="flex justify-center items-center w-full ">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
