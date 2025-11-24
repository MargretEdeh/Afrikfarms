import apiClient from "@/lib/apiClient";

export interface CreateFarmerData {
  fullname: string
  email?: string | null
  phone_number: string
  // phone_verified: boolean
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

export const LGAService = {
  // Get LGA dashboard data
  getDashboard: async () => {
    const response = await apiClient.get("/lga/dashboard");
    return response.data;
  },

  // Create a new farmer
  createFarmer: async (data: CreateFarmerData) => {
    const response = await apiClient.post("/lga/create-farmer", data);
    return response.data;
  },

  // Get all farmers
  getFarmers: async () => {
    const response = await apiClient.get("/lga/farmers");
    return response.data;
  },

  // Get a single farmer by ID
  getFarmerById: async (id: number | string) => {
    const response = await apiClient.get(`/lga/farmers/${id}`);
    return response.data;
  },

  // Send verification code to phone number
  sendCode: async (data: SendCodeData) => {
    const response = await apiClient.post("/lga/send-code", data);
    return response.data;
  },

  // Verify code sent to phone number
  verifyCode: async (data: VerifyCodeData) => {
    const response = await apiClient.post("/lga/verify-code", data);
    return response.data;
  },

  verifyNin: async (data: VerifyNinData) => {
    const response = await apiClient.post("/lga/verify-nin", data);
    return response.data;
  },
  
  uploadProfileImage: async (data: FormData) => {
    const response = await apiClient.post("/lga/upload-profile-image", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },
  UploadProofOfAddress: async (data: FormData) => {
    const response = await apiClient.post("/lga/upload-proof-of-address", data, {
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
    const response = await apiClient.put(`/lga/farmers/${id}`, data);
    return response.data;
  },

  deleteFarmer: async (id: number | string) => {
    const response = await apiClient.delete(`/lga/farmers/${id}`);
    return response.data;
  },

  //farm endpint 
  getFarms: async () => {
    const response = await apiClient.get("/lga/farms");
    return response.data;
  },

  createFarm: async (data: any) => {
    const response = await apiClient.post("/lga/create-farm", data);
    return response.data;
  },

  deleteFarm: async (id: number | string) => {
    const response = await apiClient.delete(`/lga/delete-farm?farm_id=${id}`);
    return response.data;
  },

  updateFarm: async (id: number | string, data: any) => {
    const response = await apiClient.put(`/lga/update-farm?farm_id=${id}`, data);
    return response.data;
  },
  getFarmById: async (id: number | string) => {
    const response = await apiClient.get(`/lga/get-farm?farm_id=${id}`);
    return response.data;
  },
  getFarmersFarms: async (id: number | string) => {
    const response = await apiClient.get(`/lga/farmers-farms?farmer_id=${id}`);
    return response.data;
  },
  initializePayment: async (data: any) => {
    console.log("=== PAYMENT INITIALIZATION DEBUG ===");
    console.log("1. Data received by service:", data);
    console.log("2. Data stringified:", JSON.stringify(data));
    
    try {
      const response = await apiClient.post("/lga/initialize-payment", data);
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
  verifyPayment: async (trxref : string,reference : string) => {
    const response = await apiClient.get(`/lga/verify-payment?trxref=${trxref}&reference=${reference}`);
    return response.data;
  },
};