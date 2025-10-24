"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "./types";
import { auth } from "./auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const session = auth.getSession();
    if (session?.user) {
      setUser(session.user);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const session = await auth.login(email, password);
    setUser(session.user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const session = await auth.signup(name, email, password);
    setUser(session.user);
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
