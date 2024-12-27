"use client";

import { useEffect, useState } from "react";
import Header from "@/components/homepage/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay to ensure everything is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this to set the fade-in delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="w-full h-screen">
          <Header />
        </div>
      )}
    </>
  );
}
