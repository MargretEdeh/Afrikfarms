"use client"

import { X, Mail, Phone, MapPin, CreditCard, Building, FileText, Loader2, Save } from "lucide-react"
import { useEffect, useState } from "react"

interface FarmerUpdateModalProps {
  farmerId: string | null
  open: boolean
  onClose: () => void
  onUpdate: (id: number, data: Partial<FarmerUpdateData>) => Promise<void>
  getFarmerById: (id: number) => Promise<any>
}

interface FarmerUpdateData {
  id?: number
  fullname: string
  email: string
  phone_number: string
  address: string
  nin: string
  account_number: string
  account_name: string
  bankId: number
  status: string
}

interface FarmerDetails {
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

export default function FarmerUpdateModal({ 
  farmerId, 
  open, 
  onClose, 
  onUpdate,
  getFarmerById 
}: FarmerUpdateModalProps) {
  const [farmer, setFarmer] = useState<FarmerDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<FarmerUpdateData>({
    fullname: "",
    email: "",
    phone_number: "",
    address: "",
    nin: "",
    account_number: "",
    account_name: "",
    bankId: 0,
    status: "pending",
    id: 0
  })

  useEffect(() => {
    if (open && farmerId) {
      fetchFarmerDetails()
    } else {
      setFarmer(null)
      setError(null)
      resetForm()
    }
  }, [open, farmerId])

  const fetchFarmerDetails = async () => {
    if (!farmerId) return
    
    setLoading(true)
    setError(null)
    
    try {
      const numericId = parseInt(farmerId.replace(/\D/g, ''))
      
      if (!numericId || isNaN(numericId)) {
        throw new Error("Invalid farmer ID")
      }
      
      const response = await getFarmerById(numericId)
      
      const farmerData = response?.data || response
      setFarmer(farmerData)
      
      // Populate form with existing data
      setFormData({
        fullname: farmerData.fullname || "",
        email: farmerData.email || "",
        phone_number: farmerData.phone_number || "",
        address: farmerData.address || "",
        nin: farmerData.nin || "",
        account_number: farmerData.account_number || "",
        account_name: farmerData.account_name || "",
        bankId: farmerData.bankId || 0,
        status: farmerData.status || "pending",
        id: farmerData.id || 0
      })
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || "Failed to load farmer details")
      console.error("Failed to fetch farmer:", err)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      phone_number: "",
      address: "",
      nin: "",
      account_number: "",
      account_name: "",
      bankId: 0,
      status: "pending"
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "bankId" ? parseInt(value) || 0 : value
    }))
  }

  const handleSubmit = async () => {
    if (!farmer) {
      setError("No farmer data available")
      return
    }

    if (!farmer.id) {
      setError("Invalid farmer ID")
      return
    }
    
    // Validate required fields
    if (!formData.fullname || !formData.phone_number || !formData.address || !formData.nin) {
      setError("Please fill in all required fields")
      return
    }
    
    setSaving(true)
    setError(null)
    
    try {
      console.log("Updating farmer with ID:", farmer.id, "Data:", formData)
      await onUpdate(farmer.id, formData)
      onClose()
    } catch (err: any) {
      console.error("Update error:", err)
      setError(err?.response?.data?.message || err?.message || "Failed to update farmer")
    } finally {
      setSaving(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Edit Farmer</h2>
            <p className="text-sm text-gray-500 mt-1">Update farmer profile information</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto mb-4" />
                <p className="text-gray-500">Loading farmer details...</p>
              </div>
            </div>
          ) : error && !farmer ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <div className="text-red-600 mb-4">
                <p className="text-lg font-semibold mb-2">Failed to Load Details</p>
                <p className="text-sm">{error}</p>
              </div>
              <button
                type="button"
                onClick={fetchFarmerDetails}
                className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : farmer ? (
            <div className="space-y-6">
              {/* Profile Info */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                    {farmer.profile_image && farmer.profile_image !== "noimage.jpg" ? (
                      <img
                        src={farmer.profile_image}
                        alt={farmer.fullname}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      farmer.fullname.split(" ").map(n => n[0]).join("")
                    )}
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Editing Farmer</p>
                    <p className="text-xl font-bold">FRM{String(farmer.id).padStart(4, "0")}</p>
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {error && farmer && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Personal Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Enter full address"
                    />
                  </div>
                </div>
              </div>

              {/* Identification */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Identification
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      National ID Number (NIN) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nin"
                      value={formData.nin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono"
                      placeholder="Enter NIN"
                    />
                  </div>
                </div>
              </div>

              {/* Banking Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Banking Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="account_name"
                      value={formData.account_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter account name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <CreditCard className="w-4 h-4 inline mr-1" />
                      Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="account_number"
                      value={formData.account_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono"
                      placeholder="Enter account number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="bankId"
                      value={formData.bankId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter bank ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="pending">Pending</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              disabled={saving}
              className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={saving || loading || !farmer}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {saving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}