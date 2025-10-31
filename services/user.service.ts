// src/services/UserService.ts
import apiClient from "@/lib/apiClient";

export const UserService = {
  // Create a new user
  createUser: async (data: {
    fullname: string;
    email: string;
    username: string;
    phone_number: string;
    role: string;
    country_id: number;
    state_id: number;
    lga_id: number;
  }) => {
    const response = await apiClient.post("/create-user", data);
    return response.data;
  },

  // Get all users
  getUsers: async () => {
    const response = await apiClient.get("/admin/users");
    return response.data;
  },

  // Get a single user by ID
  getUserById: async (id: number | string) => {
    const response = await apiClient.get(`/admin/users/${id}`);
    return response.data;
  },

  // Update a user
  updateUser: async (id: number | string, data: Partial<{
    fullname: string;
    email: string;
    username: string;
    phone_number: string;
    role: string;
    country_id: number;
    state_id: number;
    lga_id: number;
  }>) => {
    const response = await apiClient.put(`/admin/users/${id}`, data);
    return response.data;
  },

  // Delete a user
  deleteUser: async (id: number | string) => {
    const response = await apiClient.delete(`/admin/users/${id}`);
    return response.data;
  },
};
