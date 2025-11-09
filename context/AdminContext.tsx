"use client"
import { createContext, useState, ReactNode, useContext, useCallback } from "react"
import {
  AdminService,
  CreateFarmerData,
  SendCodeData,
  VerifyCodeData,
  VerifyNinData,
} from "@/services/admin.service"

interface Farmer {
  id?: number
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
  profile_image?: string
  proof_of_address?: string
  createdAt?: string
  updatedAt?: string
}

export interface Farm {
  id: number
  farmerId: number
  name: string
  location: string
  latitude: string
  longitude: string
  type: 'Crop' | 'Livestock'
  production_type: string  // Note: underscore, not camelCase
  size: number
  sizeUnit: 'Acre' | 'Hectare'
  stage: 'Cleared' | 'Planted' | 'Harvesting'
  ownershipDocument: string | null
  number_of_workers: number
  verified: boolean
  status?: 'pending' | 'verified' | 'rejected'  // Optional for filtering
  createdAt: string
  updatedAt: string
}

interface DashboardData {
  totalFarmers?: number
  verifiedFarmers?: number
  pendingVerifications?: number
  [key: string]: any
}

interface AdminContextType {
  farmers: Farmer[]
  farms: Farm[]
  dashboard: DashboardData | null
  loading: boolean
  error: string | null

  fetchDashboard: () => Promise<void>
  fetchFarmers: () => Promise<void>
  getFarmerById: (id: number | string) => Promise<any>
  createFarmer: (data: CreateFarmerData) => Promise<void>
  updateFarmer: (id: number | string, data: Partial<CreateFarmerData>) => Promise<void>
  deleteFarmer: (id: number | string) => Promise<void>

  fetchFarms: () => Promise<void>
  getFarmById: (id: number | string) => Promise<Farm>
  getFarmersFarms: (farmerId: number | string) => Promise<Farm[]>
  createFarm: (data: any) => Promise<void>
  updateFarm: (id: number | string, data: any) => Promise<void>
  deleteFarm: (id: number | string) => Promise<void>

  sendCode: (data: SendCodeData) => Promise<any>
  verifyCode: (data: VerifyCodeData) => Promise<any>
  verifyNin: (data: VerifyNinData) => Promise<any>

  initailizePayment: (data: any) => Promise<any>
  verifyPayment: (trxref: string, reference: string) => Promise<any>
  
  getPaymentRevenue: () => Promise<any>
  listPayments: () => Promise<any>

  clearError: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [farmers, setFarmers] = useState<Farmer[]>([])
  const [farms, setFarms] = useState<Farm[]>([])
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const clearError = useCallback(() => setError(null), [])

 const fetchDashboard = useCallback(async () => {
  setLoading(true)
  setError(null)
  try {
    const response = await AdminService.getDashboard()
    // Extract the nested data object
    setDashboard(response.data || response)
  } catch (err: any) {
    setError(err.response?.data?.message || "Failed to fetch dashboard data")
    throw err
  } finally {
    setLoading(false)
  }
}, [])

  const fetchFarmers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await AdminService.getFarmers()
      const farmersArray = response?.data || []  
      setFarmers(farmersArray)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch farmers")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getFarmerById = useCallback(async (id: number | string): Promise<Farmer> => {
    setLoading(true)
    setError(null)
    try {
      const data = await AdminService.getFarmerById(id)
      return data.farmer || data
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch farmer")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const createFarmer = useCallback(async (data: CreateFarmerData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await AdminService.createFarmer(data)
      await fetchFarmers()
      return res
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create farmer")
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchFarmers])

  const updateFarmer = useCallback(
    async (id: number | string, data: Partial<CreateFarmerData>) => {
      setLoading(true)
      setError(null)
      try {
        await AdminService.updateFarmer(id, data)
        await fetchFarmers()
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to update farmer")
        throw err
      } finally {
        setLoading(false)
      }
    },
    [fetchFarmers],
  )

  const deleteFarmer = useCallback(async (id: number | string) => {
    setLoading(true)
    setError(null)
    try {
      await AdminService.deleteFarmer(id)
      setFarmers((prev) => prev.filter((f) => f.id !== id))
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete farmer")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchFarms = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await AdminService.getFarms()
      const farmsData = res.data || res.farms || res || []
      setFarms(Array.isArray(farmsData) ? farmsData : [])
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch farms")
      setFarms([])
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getFarmById = useCallback(async (id: number | string): Promise<Farm> => {
    setLoading(true)
    setError(null)
    try {
      const data = await AdminService.getFarmById(id)
      return data.farm || data
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch farm")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getFarmersFarms = useCallback(async (farmerId: number | string): Promise<Farm[]> => {
    setLoading(true)
    setError(null)
    try {
      const data = await AdminService.getFarmersFarms(farmerId)
      return data.farms || data
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch farmer farms")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const createFarm = useCallback(
    async (data: any) => {
      setLoading(true)
      setError(null)
      try {
        const res = await AdminService.createFarm(data)
        await fetchFarms()
        return res
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to create farm")
        throw err
      } finally {
        setLoading(false)
      }
    },
    [fetchFarms],
  )

  const updateFarm = useCallback(
    async (id: number | string, data: any) => {
      setLoading(true)
      setError(null)
      try {
        await AdminService.updateFarm(id, data)
        await fetchFarms()
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to update farm")
        throw err
      } finally {
        setLoading(false)
      }
    },
    [fetchFarms],
  )

  const deleteFarm = useCallback(async (id: number | string) => {
    setLoading(true)
    setError(null)
    try {
      await AdminService.deleteFarm(id)
      setFarms((prev) => prev.filter((f) => f.id !== id))
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete farm")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const sendCode = useCallback(async (data: SendCodeData) => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.sendCode(data)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send code")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const verifyCode = useCallback(async (data: VerifyCodeData) => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.verifyCode(data)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to verify code")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const verifyNin = useCallback(async (data: VerifyNinData) => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.verifyNin(data)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to verify NIN")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const initailizePayment = useCallback(async (data: any) => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.initializePayment(data)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to initialize payment")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const verifyPayment = useCallback(async (trxref: string, reference: string) => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.verifyPayment(trxref, reference)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to verify payment")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getPaymentRevenue = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.getPaymentRevenue()
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch payment revenue")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const listPayments = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      return await AdminService.listPayments()
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch payments list")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <AdminContext.Provider
      value={{
        farmers,
        farms,
        dashboard,
        loading,
        error,
        fetchDashboard,
        fetchFarmers,
        getFarmerById,
        createFarmer,
        updateFarmer,
        deleteFarmer,
        fetchFarms,
        getFarmById,
        getFarmersFarms,
        createFarm,
        updateFarm,
        deleteFarm,
        sendCode,
        verifyCode,
        verifyNin,
        initailizePayment,
        verifyPayment,
        getPaymentRevenue,
        listPayments,
        clearError,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error("useAdmin must be used within an AdminProvider")
  return ctx
}