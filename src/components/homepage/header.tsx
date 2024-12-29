"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "./Search";
export default function Header() {
  const [isPageReady, setIsPageReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = "/assets/images/cov.jpg";
    img.onload = () => {
      // Wait a little after the image loads to ensure everything renders together
      setTimeout(() => {
        setIsPageReady(true);
      }, 500); // Adjust delay as needed
    };
  }, []);

  return (
    <div
      className={`h-[70%] w-full bg-cover bg-center transition-opacity duration-700 relative ${
        isPageReady ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url('/assets/images/cov.jpg')" }}
    >
      {isPageReady && (
        <div className="">
          <header className="flex w-full justify-between items-center h-[10%] py-10 px-4 transition-opacity duration-500 opacity-100">
            <div className="pl-4">
              <h1
                className="font-roboto text-4xl font-thin cursor-pointer text-white"
                onClick={() => router.push("/")}
              >
                Middle.
              </h1>
            </div>
            <div className="flex gap-6 text-white items-center">
              <div className="flex gap-6 text-white text-md">
                <p className="cursor-pointer">Goals</p>
                <p className="cursor-pointer">Join Us</p>
                <p className="cursor-pointer">Download</p>
              </div>
              <button
                className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => router.push("/login")}
              >
                <p className="duration-300 transition-all">Sign In</p>
              </button>
            </div>
          </header>
          <main className="flex flex-col gap-4 w-full justify-center items-start px-[15%] font-thin">
            <div className="flex flex-col gap-2">
              <p className="tagline">
                Local
              </p>
              <p className="tagline">
                Business
              </p>
              <p className="tagline">
                Directory
              </p>
            </div>
          </main>
          <div className="absolute bottom-0 w-full">
            <Search />
          </div>
        </div>
      )}
    </div>
  );
}
