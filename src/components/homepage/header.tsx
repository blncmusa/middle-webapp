"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = "/assets/images/cov.jpg";
    img.onload = () => {
      setIsImageLoaded(true); // Set image loaded to true
    };
  }, []);

  return (
    <div
      className={`h-[60%] w-full bg-cover bg-center transition-opacity duration-500 ${
        isImageLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url('/assets/images/cov.jpg')" }}
    >
      <header className="flex w-full justify-between items-center h-[10%] py-10 px-4">
        <div className="pl-4">
          <h1
            className="font-roboto text-4xl font-thin cursor-pointer text-white"
            onClick={() => router.push("/")}
          >
            Middle.
          </h1>
        </div>
        <div className="flex gap-6 text-white items-center">
          <div className="flex gap-6 text-white text-md ">
            <p className="cursor-pointer">Goals</p>
            <p className="cursor-pointer">Join Us</p>
            <p className="cursor-pointer">Download</p>
          </div>
          <button
            className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
}
