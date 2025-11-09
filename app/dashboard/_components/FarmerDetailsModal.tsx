"use client"

import { X, Mail, Phone, MapPin, CreditCard, Building, FileText, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useAdmin } from "@/context/AdminContext"

interface FarmerDetailsModalProps {
  farmerId: string | null
  open: boolean
  onClose: () => void
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

export default function FarmerDetailsModal({ farmerId, open, onClose }: FarmerDetailsModalProps) {
  const [farmer, setFarmer] = useState<FarmerDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { getFarmerById } = useAdmin()

  useEffect(() => {
    if (open && farmerId) {
      fetchFarmerDetails()
    } else {
      setFarmer(null)
      setError(null)
    }
  }, [open, farmerId])

const fetchFarmerDetails = async () => {
    if (!farmerId) return
    
    setLoading(true)
    setError(null)
    
    try {
      const numericId = parseInt(farmerId.replace(/\D/g, ''))
      const response = await getFarmerById(numericId)
      
      // Handle the response structure: { message, data }
      const farmerData = response?.data || response
      setFarmer(farmerData as any)
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || "Failed to load farmer details")
      console.error("Failed to fetch farmer:", err)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase()
    switch (statusLower) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-amber-100 text-amber-700"
      case "inactive":
        return "bg-gray-100 text-gray-700"
      case "suspended":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Farmer Details</h2>
            <p className="text-sm text-gray-500 mt-1">Complete farmer profile information</p>
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
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-gray-500">Loading farmer details...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-900 mb-2">Failed to Load Details</h3>
              <p className="text-sm text-red-600">{error}</p>
              <button
                onClick={fetchFarmerDetails}
                className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : farmer ? (
            <div className="space-y-6">
              {/* Profile Section */}
              <div className="bg-gradient-to-br from-primary to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold backdrop-blur-sm">
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
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{farmer.fullname}</h3>
                        <p className="text-white/80 text-sm">Farmer ID: FRM{String(farmer.id).padStart(4, "0")}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusBadge(farmer.status)}`}>
                        {farmer.status}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {farmer.phone_verified ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                        <span className="text-sm">Phone {farmer.phone_verified ? "Verified" : "Not Verified"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {farmer.nin_verified ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                        <span className="text-sm">NIN {farmer.nin_verified ? "Verified" : "Not Verified"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {farmer.has_paid ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                        <span className="text-sm">{farmer.has_paid ? "Paid" : "Not Paid"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="text-gray-900 font-medium">{farmer.phone_number}</p>
                    </div>
                  </div>
                  {farmer.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="text-gray-900 font-medium break-all">{farmer.email}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900 font-medium">{farmer.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Identification */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Identification</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">National ID Number (NIN)</p>
                      <p className="text-gray-900 font-medium font-mono">{farmer.nin}</p>
                    </div>
                  </div>
                  {farmer.proof_of_address && farmer.proof_of_address !== "noimage.jpg" && (
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Proof of Address</p>
                        <a
                          href={farmer.proof_of_address}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          View Document
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Banking Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Banking Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Account Name</p>
                      <p className="text-gray-900 font-medium">{farmer.account_name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="text-gray-900 font-medium font-mono">{farmer.account_number}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Bank ID</p>
                      <p className="text-gray-900 font-medium">{farmer.bankId}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">System Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Registration Date</p>
                    <p className="text-gray-900 font-medium">
                      {new Date(farmer.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="text-gray-900 font-medium">
                      {new Date(farmer.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Created By</p>
                    <p className="text-gray-900 font-medium">Admin ID: {farmer.account_created_by}</p>
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
              className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors"
            >
              Close
            </button>
            {farmer && (
              <button
                onClick={() => {
                  console.log("Edit farmer:", farmer)
                }}
                className="px-6 py-2.5 bg-primary hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors"
              >
                Edit Farmer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}