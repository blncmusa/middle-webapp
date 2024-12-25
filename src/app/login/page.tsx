"use client"

import { useState } from 'react';
import { supabase } from "../../utils/supabaseClient"
import { useRouter } from 'next/navigation';
import CoverImg from "@/public/assets/images/signup-one.jpg"
import Image from "next/image";
import { SignIn } from '@/components/signin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard'); // Redirect to dashboard after login
    }
  };

  return (
    <div className="flex items-center justify-between h-screen">
      <div className="relative w-1/3 h-full shadow-inner">
        <Image
          src={CoverImg}
          alt="Cover Image"
          fill
          className="object-cover shadow-inner"
          priority
        />
      </div>
      <div className="w-2/3 h-full flex items-center justify-center relative">
        <div className="absolute top-6 left-6">
          <h1 className="font-roboto text-6xl font-extrabold">Middle.</h1>
        </div>
        <div className=''>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
