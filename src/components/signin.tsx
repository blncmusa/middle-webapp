"use client";

import { useAuthStore } from "@/store/useAuthStore";

export const SignIn = () => {
  const { email, password, setEmail, setPassword, login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    await login();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="items-center justify-center space-y-4"
    >
      <div className="flex-col flex">
        <h1 className="text-5xl font-thin text-center font-roboto mb-4">Sign in to Middle</h1>
        <div className="w-[500px] flex flex-col gap-4">
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
            <div className="mb-5">
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
            <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-blue-600"
            >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};
