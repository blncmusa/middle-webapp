"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import CoverImg  from "../../../../public/assets/images/signup-one.jpg"
import Logo  from "../../../../public/assets/logo.png"
import Image from "next/image"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setError(null);
    setSuccess(false);

    // Create a new user
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Add additional data to the providers table
      const { error: dbError } = await supabase
        .from("providers")
        .insert([{ email, name }]);

      if (dbError) {
        setError(dbError.message);
      } else {
        setSuccess(true);
        router.push("/dashboard"); // Redirect after successful signup
      }
    }
  };

  return (
    <div className="flex items-center justify-between h-screen">
      <div className="relative w-1/3 h-full">
        <Image 
          src={CoverImg} 
          alt="Cover Image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-2/3 h-full flex items-center justify-center relative">
        <div className="absolute top-6 left-6">
          <h1 className="font-serif text-6xl font">
            Middle.
          </h1>
        </div>
      </div>
    </div>
  );
}

{/* <input

    <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">Account created successfully!</p>}
          type="text"
          placeholder="Business Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        ></button> */}
