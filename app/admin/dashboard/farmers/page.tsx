"use client"
import { useState, useEffect } from "react"
import { Plus, Filter, Loader2, UserX } from "lucide-react"
import { toast } from "sonner"
import { useAdmin } from "@/context/AdminContext"
import FarmerTable from "@/app/dashboard/_components/FarmerTable"
import AddFarmerModal from "@/app/dashboard/_components/AddFarmerModal"
import type { Farmer, FarmerRegistrationData } from "@/types"
import { AdminService } from "@/services/admin.service"
import FarmerDetailsModal from "@/app/dashboard/_components/FarmerDetailsModal"
import FarmerUpdateModal from "@/app/dashboard/_components/FarmerUpdateModal"


// API Response type
interface ApiFarmer {
  id: number
  fullname: string
  email: string
  phone_number: string
  address: string
  nin: string
  profile_image: string
  proof_of_address: string
  bankId: number
  account_number: string
  account_name: string
  countryId: number
  stateId: number
  lgaId: number
  email_verified: boolean
  phone_verified: boolean
  nin_verified: boolean
  has_paid: boolean
  status: string
  account_created_by: number
  createdAt: string
  updatedAt: string
}

interface FarmerUpdateData {
  fullname?: string
  email?: string
  phone_number?: string
  address?: string
  nin?: string
  account_number?: string
  account_name?: string
  bankId?: number
  status?: string
}

export default function AdminFarmersSection() {
  const [filter, setFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [farmers, setFarmers] = useState<Farmer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFarmerId, setSelectedFarmerId] = useState<string | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [selectedFarmerForEdit, setSelectedFarmerForEdit] = useState<string | null>(null)
  const { fetchFarmers: adminFetchFarmers, farmers: adminFarmers } = useAdmin()

  useEffect(() => {
    fetchFarmers()
  }, [])

  // Transform API response to Farmer type
  const transformApiFarmer = (apiFarmer: ApiFarmer): Farmer => {
    return {
      id: `FRM${String(apiFarmer.id).padStart(4, "0")}`,
      name: apiFarmer.fullname,
      email: apiFarmer.email,
      phone: apiFarmer.phone_number,
      farmSize: "N/A", 
      registrationDate: new Date(apiFarmer.createdAt).toLocaleDateString(),
      status: apiFarmer.status.toLowerCase() as "active" | "pending" | "inactive" | "suspended",
      nin: apiFarmer.nin,
      address: apiFarmer.address,
      state: "", 
      lga: "", 
      photoUrl: apiFarmer.profile_image !== "noimage.jpg" ? apiFarmer.profile_image : undefined,
    }
  }

  const fetchFarmers = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await AdminService.getFarmers()
      const apiFarmers = response?.data || []
      const transformedFarmers = apiFarmers.map(transformApiFarmer)
      setFarmers(transformedFarmers)
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load farmers")
      console.error("Failed to fetch farmers:", err)
    } finally {
      setLoading(false)
    }
  }

  // Get farmer by ID
  const getFarmerById = async (id: number) => {
    try {
      const response = await AdminService.getFarmerById(id)
      return response
    } catch (err: any) {
      console.error("Failed to fetch farmer by ID:", err)
      throw err
    }
  }

  // Update farmer
  const updateFarmer = async (id: number | string, data: Partial<FarmerUpdateData>) => {
    try {
      // Convert string ID to number if needed
      const numericId = typeof id === 'string' ? parseInt(id.replace(/\D/g, '')) : id
      
      await AdminService.updateFarmer(numericId, data)
      toast.success("Farmer updated successfully")
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message || "Failed to update farmer"
      toast.error(errorMessage)
      throw err
    }
  }

  const handleView = (farmer: Farmer) => {
    setSelectedFarmerId(farmer.id)      
    setIsDetailsModalOpen(true)         
  }

  const handleEdit = (farmer: Farmer) => {
    setSelectedFarmerForEdit(farmer.id)
    setIsUpdateModalOpen(true)
  }

  const handleAddFarmer = async (data: FarmerRegistrationData) => {
    try {
      // If registration is handled elsewhere, this will simply refresh the list
      toast.success("Farmer registered successfully")
      setIsModalOpen(false)
      // Refresh the farmers list
      await fetchFarmers()
    } catch (error) {
      toast.error("Failed to register farmer. Please try again.")
      throw error
    }
  }

  const filteredFarmers = filter === "all" ? farmers : farmers.filter((f) => f.status === filter)

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Farmer Management</h2>
            <p className="text-gray-500">Manage and onboard farmers across all regions</p>
          </div>
          {/* <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-primary/30"
          >
            <Plus className="w-5 h-5" />
            Add New Farmer
          </button> */}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search farmers by name, ID, or phone..."
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Farmers</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-gray-500">Loading farmers...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="text-red-600 mb-4">
              <UserX className="w-12 h-12 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Failed to Load Farmers</h3>
              <p className="text-sm mt-2">{error}</p>
            </div>
            <button
              onClick={fetchFarmers}
              className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredFarmers.length === 0 ? (
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <UserX className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {filter === "all" ? "No Farmers Yet" : `No ${filter.charAt(0).toUpperCase() + filter.slice(1)} Farmers`}
            </h3>
            <p className="text-gray-500 mb-6">
              {filter === "all"
                ? "Get started by adding your first farmer to the system"
                : `There are no ${filter} farmers at the moment`}
            </p>
            {filter === "all" ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Your First Farmer
              </button>
            ) : (
              <button
                onClick={() => setFilter("all")}
                className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
              >
                View All Farmers
              </button>
            )}
          </div>
        ) : (
          <FarmerTable farmers={filteredFarmers} onView={handleView} onEdit={handleEdit} />
        )}
      </div>

      <AddFarmerModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddFarmer} />
      
      <FarmerDetailsModal
        farmerId={selectedFarmerId}
        open={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false)
          setSelectedFarmerId(null)
        }}
      />
      
      <FarmerUpdateModal
        farmerId={selectedFarmerForEdit}
        open={isUpdateModalOpen}
        onClose={() => {
          setIsUpdateModalOpen(false)
          setSelectedFarmerForEdit(null)
        }}
        onUpdate={async (id, data) => {
          await updateFarmer(id, data)
          await fetchFarmers() 
        }}
        getFarmerById={getFarmerById}
      />
    </>
  )
}