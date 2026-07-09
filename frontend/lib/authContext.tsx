"use client";
import { createContext, useContext, ReactNode } from "react";

/**
 * Demo-mode AuthContext — no Supabase dependency.
 * Provides a fake "demo" user so every page works without login.
 * The login page is preserved for showcase but doesn't gate access.
 */

interface DemoUser {
  id: string;
  email: string;
}

interface AuthContextType {
  user: DemoUser | null;
  loading: boolean;
  isAdmin: boolean;
  logout: () => Promise<void>;
}

const DEMO_USER: DemoUser = {
  id: "demo-user-pixtopia-2026",
  email: "demo@pixtopia.dev",
};

const AuthContext = createContext<AuthContextType>({
  user: DEMO_USER,
  loading: false,
  isAdmin: false,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider
      value={{
        user: DEMO_USER,
        loading: false,
        isAdmin: false,
        logout: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
