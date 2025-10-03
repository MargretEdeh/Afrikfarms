"use client"
import { useState } from "react"
import { Plus, Filter } from "lucide-react"
import FarmerTable from "./FarmerTable"
import AddFarmerModal from "./AddFarmerModal"
import type { Farmer, FarmerRegistrationData } from "@/types"

import { toast } from "sonner"

interface FarmersSectionProps {
  farmers: Farmer[]
  onAddFarmer?: (data: FarmerRegistrationData) => Promise<void>
}

export default function FarmersSection({ farmers: initialFarmers, onAddFarmer }: FarmersSectionProps) {
  const [filter, setFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [farmers, setFarmers] = useState<Farmer[]>(initialFarmers)

  const handleView = (farmer: Farmer) => {
    console.log("View farmer:", farmer)
  }

  const handleEdit = (farmer: Farmer) => {
    console.log("Edit farmer:", farmer)
  }

  const handleAddFarmer = async (data: FarmerRegistrationData) => {
    try {
      if (onAddFarmer) {
        await onAddFarmer(data)
      } else {
        // Default behavior: add to local state
        const newFarmer: Farmer = {
          id: `FRM${String(farmers.length + 1).padStart(4, "0")}`,
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          farmSize: "N/A",
          registrationDate: new Date().toLocaleDateString(),
          status: "pending",
          nin: data.nin,
          address: data.address,
          state: data.state,
          lga: data.lga,
          photoUrl: typeof data.passportPhoto === "string" ? data.passportPhoto : undefined,
        }
        setFarmers([...farmers, newFarmer])
      }

      toast.success("Farmer registered successfully")
      setIsModalOpen(false)
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
            <p className="text-gray-500">Manage and onboard farmers in your LGA</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-primary/30"
          >
            <Plus className="w-5 h-5" />
            Add New Farmer
          </button>
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

        <FarmerTable farmers={filteredFarmers} onView={handleView} onEdit={handleEdit} />
      </div>

      <AddFarmerModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddFarmer} />
    </>
  )
}
