"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient"
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login"); // Redirect to login if not authenticated
      } else {
        setUser(session.user);
      }
    };

    fetchSession();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {user ? (
        <div>
          <p className="mb-4">Welcome, {user.email}!</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
