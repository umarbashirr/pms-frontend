import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: { id: string } | null;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        token: null,
        user: null,
        login: (token) =>
          set(() => ({
            token,
            isAuthenticated: true,
          })),
        logout: () =>
          set(() => ({
            token: null,
            isAuthenticated: false,
          })),
      }),
      { name: "auth-store" }
    )
  )
);

export default useAuthStore;
