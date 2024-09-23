import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  token: string | null;
  setToken: (token: string | null) => Promise<void>;
  clearToken: () => Promise<void>;
  checkLoginStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,

  setToken: async (token: string | null) => {
    set({ token });
    if (token) {
      await AsyncStorage.setItem("authToken", token);
    } else {
      await AsyncStorage.removeItem("authToken");
    }
  },

  clearToken: async () => {
    set({ token: null });
    await AsyncStorage.removeItem("authToken");
  },

  checkLoginStatus: async () => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      set({ token });
      return true;
    }
    return false;
  },
}));
