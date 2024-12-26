import { create } from 'zustand';
import { supabase } from '../utils/supabaseClient';

interface AuthState {
  email: string;
  password: string;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  email: '',
  password: '',
  error: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  login: async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: get().email,
      password: get().password,
    });
    if (error) {
      set({ error: error.message });
      return false;
    } else {
      set({ error: null });
      return true;
    }
  },
}));