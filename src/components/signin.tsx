"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const { email, password, error, setEmail, setPassword, login } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    const success = await login(); // Call login from the store
    if (success) {
      router.push('/dashboard'); // Redirect after successful login
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="items-center justify-center w-[50%]"
    >
      <div className="flex-col flex">
        <div className="flex flex-col items-start justify-center mb-5">
          <h1 className="text-5xl font-thin text-center font-roboto mb-4">Sign in to Middle —</h1>
          <h1 className="text-5xl font-thin text-center font-roboto mb-4">Business Dashboard</h1>
        </div>
        <div className="w-[100%] flex flex-col gap-4">
          <div className="">
            <p className="font-bold mb-2">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none transition-all duration-300 ease-in-out
    border-gray-300 hover:border-sky-500 hover:ring-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="mb-3">
            <p className="font-bold mb-2">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none transition-all duration-300 ease-in-out
    border-gray-300 hover:border-sky-500 hover:ring-sky-500 hover:ring-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500"
            />
          </div>
          {error && <p className="text-red-500 font-thin">{error}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};
