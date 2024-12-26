"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div className="w-full h-screen">
      <header className="flex w-full justify-between items-center">
        <div className="pl-4">
        <h1 className="font-roboto text-4xl font-extrabold cursor-pointer">Middle.</h1>
      </div>
      <div className="flex gap-6">
          <p>Goals</p>
          <p>Join Us</p>
          <p>Download</p>
      </div>
        <button className="bg-black text-white p-4" onClick={() => router.push('/login')}>
          Sign In
        </button>
      </header>
    </div>
  );
}
