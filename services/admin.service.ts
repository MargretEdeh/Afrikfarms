import apiClient from "@/lib/apiClient";

export interface CreateFarmerData {
  fullname: string
  email?: string | null
  phone_number: string
  phone_verified: boolean
  nin: string
  nin_verified: boolean
  address: string
  bankId: number
  account_name: string
  account_number: string
  profile_image?: string | File   
  proof_of_address?: string | File 
}

export interface SendCodeData {
  phone_number: string;
}
export interface UploadProfileImageData {
  file: File;
}

export interface VerifyCodeData {
  phone_number: string;
  code: string;
}

export interface VerifyNinData {
  nin: string;
  // Add other NIN verification fields as needed
}

export const AdminService = {
  // Get Admin dashboard data
  getDashboard: async () => {
    const response = await apiClient.get("/admin/dashboard");
    return response.data;
  },

  // Create a new farmer
  createFarmer: async (data: CreateFarmerData) => {
    const response = await apiClient.post("/admin/create-farmer", data);
    return response.data;
  },

  // Get all farmers
  getFarmers: async () => {
    const response = await apiClient.get("/admin/farmer/list-farmers");
    return response.data;
  },

  // Get a single farmer by ID
  getFarmerById: async (id: number | string) => {
    const response = await apiClient.get(`/admin/farmer/get-farmer?farmer_id=${id}`);
    return response.data;
  },

  // Send verification code to phone number
  sendCode: async (data: SendCodeData) => {
    const response = await apiClient.post("/admin/send-code", data);
    return response.data;
  },

  // Verify code sent to phone number
  verifyCode: async (data: VerifyCodeData) => {
    const response = await apiClient.post("/admin/verify-code", data);
    return response.data;
  },

  verifyNin: async (data: VerifyNinData) => {
    const response = await apiClient.post("/admin/verify-nin", data);
    return response.data;
  },
  
  uploadProfileImage: async (data: FormData) => {
    const response = await apiClient.post("/admin/upload-profile-image", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },
  UploadProofOfAddress: async (data: FormData) => {
    const response = await apiClient.post("/admin/upload-proof-of-address", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },
  getBanks: async () => {
    const response = await apiClient.get("/banks");
    return response.data;
  },

  updateFarmer: async (id: number | string, data: Partial<CreateFarmerData>) => {
    const response = await apiClient.put(`/admin/farmer/update-farmer?id=${id}`, data);
    return response.data;
  },

  deleteFarmer: async (id: number | string) => {
    const response = await apiClient.delete(`/admin/farmers/${id}`);
    return response.data;
  },

  // Farm endpoints 
  getFarms: async () => {
    const response = await apiClient.get("/admin/farm/list-farms");
    return response.data;
  },

  createFarm: async (data: any) => {
    const response = await apiClient.post("/admin/farm/create-farm", data);
    return response.data;
  },

  deleteFarm: async (id: number | string) => {
    const response = await apiClient.delete(`/admin/delete-farm?farm_id=${id}`);
    return response.data;
  },

  updateFarm: async (id: number | string, data: any) => {
    const response = await apiClient.put(`/admin/farm/update-farm?farm_id=${id}`, data);
    return response.data;
  },

  getFarmById: async (id: number | string) => {
    const response = await apiClient.get(`/admin/get-farm?farm_id=${id}`);
    return response.data;
  },

  getFarmersFarms: async (id: number | string) => {
    const response = await apiClient.get(`/admin/farmers-farms?farmer_id=${id}`);
    return response.data;
  },

  // Payment endpoints
  initializePayment: async (data: any) => {
    console.log("=== PAYMENT INITIALIZATION DEBUG ===");
    console.log("1. Data received by service:", data);
    console.log("2. Data stringified:", JSON.stringify(data));
    
    try {
      const response = await apiClient.post("/admin/initialize-payment", data);
      console.log("3. Full response received:", response);
      console.log("4. Response data:", response.data);
      
      // Return the full response data
      // The structure is likely: response.data contains { data: { authorization_url, reference }, message, status }
      return response.data;
    } catch (error: any) {
      console.error("4. Error caught in service:", error);
      console.error("5. Error response data:", error.response?.data);
      console.error("6. Error request data:", error.config?.data);
      throw error;
    }
  },

  verifyPayment: async (trxref: string, reference: string) => {
    const response = await apiClient.get(`/admin/verify-payment?trxref=${trxref}&reference=${reference}`);
    return response.data;
  },

  // Additional payment endpoints
  getPaymentRevenue: async () => {
    const response = await apiClient.get("/admin/payment/revenue");
    return response.data;
  },

  listPayments: async () => {
    const response = await apiClient.get("/admin/payment/list-payments");
    return response.data;
  },
};