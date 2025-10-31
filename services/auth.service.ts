import apiClient from "@/lib/apiClient";

export const AuthService = {
  // Admin login
  loginAdmin: async (email: string, password: string) => {
    const response = await apiClient.post("/auth/admin-login", { email, password });
    return response.data;
  },

  // Normal user login (uses login_id instead of email)
  loginUser: async (login_id: string, password: string) => {
    const response = await apiClient.post("/auth/login", { login_id, password });
    return response.data;
  },

  registerSuperAdmin: async (data: {
    email: string;
    password: string;
    fullname: string;
  }) => {
    const response = await apiClient.post("/auth/admin-register", data);
    return response.data;
  },

  createUser: async (data: {
    fullname: string;
    email: string;
    username: string;
    phone_number: string;
    name: string;
    role: string;
    country_id: number;
    state_id: number;
    lga_id: number;
  }) => {
    const response = await apiClient.post("/admin/create-user", data);
    return response.data;
  },

  getProfile: async () => {
    const response = await apiClient.get("/auth/me");
    return response.data;
  },
  getCountries: async () => {
    const response = await apiClient.get("/admin/countries");
    return response.data;
  },

  getStates: async () => {
    const response = await apiClient.get("/admin/states");
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post("/auth/admin-logout");
    return response.data;
  },
};
