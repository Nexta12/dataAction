import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { SuccessResponse } from "@customTypes/general";
import { AdminProfile, UserRole } from "@customTypes/user";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { LoginDetails } from "@pages/publicPages/login/Login";
import { paths } from "@routes/paths";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "@utils/localStorage";
import { NavigateFunction } from "react-router-dom";
import { create, StoreApi } from "zustand";

export type LoggedInUser = Pick<
  AdminProfile,
  "_id" | "id" | "email" | "firstName" | "lastName" | "password" | "role"
>;

type LoginResponse = {
  data: LoggedInUser;
  accessToken: string;
};

interface AuthStore {
  user: LoggedInUser | null;
  login: (
    UserDetails: LoginDetails,
    navigateFn: NavigateFunction,
  ) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  error: string | null;
  setError: (error: string | null) => void;
  isLoading: boolean;
  updateUser: (data: Partial<LoggedInUser>) => void;
  validateAuth: () => void;
}

export const getLoggedInUserPath = (user: LoggedInUser) => {
  return user.role === UserRole.admin ||
    user.role === UserRole.staff ||
    user.role === UserRole.superAdmin ||
    user.role === UserRole.editor
    ? paths.adminDashboard
    : paths.Index;
};

const handleLogin = async (
  loginDetails: LoginDetails,
  navigateFn: NavigateFunction,
  set: StoreApi<AuthStore>["setState"],
) => {
  try {
    set({ isLoading: true });

    const { data: responseData } = await apiClient.post<LoginResponse>(
      endpoints.login,
      loginDetails,
    );

    setLocalStorageItem("accessToken", responseData.accessToken);
    setLocalStorageItem("user", JSON.stringify(responseData.data));
    const currentUser = responseData.data;
    set({
      user: currentUser,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
    navigateFn(getLoggedInUserPath(currentUser));
  } catch (error) {
    console.log(error);
    set({ error: ErrorFormatter(error), isLoading: false });
  }
};

const localStorageUser = getLocalStorageItem("user");

const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  user: localStorageUser ? JSON.parse(localStorageUser) : null,
  error: null,
  setError: (error) => set({ error }),
  isLoading: false,
  login: async (loginDetails, navigateFn) =>
    handleLogin(loginDetails, navigateFn, set),
  logout: () => {
    removeLocalStorageItem("accessToken");
    removeLocalStorageItem("user");
    set({ user: null, isAuthenticated: false });
  },
  updateUser: (data) => {
    const { user } = get();
    const updatedUser = { ...user, ...data } as LoggedInUser;
    setLocalStorageItem("user", JSON.stringify(updatedUser));
    set({ user: updatedUser || null });
  },

  validateAuth: async () => {
    const token = getLocalStorageItem("accessToken");
    if (!token) {
      set({ isAuthenticated: false });
      return;
    }
    try {
      const response = await apiClient.get<SuccessResponse<LoggedInUser>>(
        endpoints.validateAuth,
      );
      set({ isAuthenticated: true, user: response.data.data });
    } catch {
      set({ isAuthenticated: false });
      removeLocalStorageItem("accessToken");
      removeLocalStorageItem("user");
    }
  },
}));

export default useAuthStore;
