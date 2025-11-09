"use client"
import { useState, useEffect } from "react"
import { Leaf, Trash2, Edit2, MapPin, Users, X } from "lucide-react"
// import { useLGA } from "@/context/LgaContext"
import { useAdmin } from "@/context/AdminContext"
import FarmUpdateCard from "@/app/dashboard/updates/_component/FarmUpdateCard"
import FarmUpdateTimeline from "@/app/dashboard/updates/_component/FarmUpdateTimeline"

export default function FarmUpdatesPage() {
  const { farms, fetchFarms, getFarmById, getFarmersFarms, updateFarm, deleteFarm, loading, error } = useAdmin()
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline")
  const [selectedStage, setSelectedStage] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedFarmerId, setSelectedFarmerId] = useState<string>("all")
  const [editingFarmId, setEditingFarmId] = useState<number | null>(null)
  const [editFormData, setEditFormData] = useState<any>({})
  const [isDeleting, setIsDeleting] = useState<number | null>(null)
  const [successMessage, setSuccessMessage] = useState<string>("")

  useEffect(() => {
    fetchFarms()
  }, [])

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const generateMockUpdates = (farms: any[]) => {
    return farms.map((farm, index) => ({
      id: `update-${farm.id}`,
      farmerId: farm.farmerId,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      cropType: farm.production_type,
      stage: farm.stage,
      gpsCoordinates: {
        latitude: Number.parseFloat(farm.latitude),
        longitude: Number.parseFloat(farm.longitude),
      },
      photos: [`/placeholder.svg?height=300&width=400&query=farm+${farm.type}+${farm.stage}`],
      notes: `Farm update for ${farm.name}. Current stage: ${farm.stage}. ${farm.number_of_workers} workers on site.`,
    }))
  }

  const updates = generateMockUpdates(farms)

  const filteredUpdates = updates.filter((update) => {
    const stageMatch = selectedStage === "all" || update.stage === selectedStage
    const typeMatch = selectedType === "all" || update.cropType === selectedType
    const farmerMatch = selectedFarmerId === "all" || update.farmerId === Number(selectedFarmerId)
    return stageMatch && typeMatch && farmerMatch
  })

  const stages = ["Cleared", "Planted", "Harvesting"]
  const cropTypes = [...new Set(farms.map((f:any) => f.production_type))].filter(Boolean)
  const farmerIds = [...new Set(farms.map((f:any) => f.farmerId))].filter(Boolean)

  const handleEditFarm = (farm: any) => {
    setEditingFarmId(farm.id)
    setEditFormData({
      name: farm.name,
      type: farm.type,
      production_type: farm.production_type,
      location: farm.location,
      latitude: farm.latitude,
      longitude: farm.longitude,
      size: farm.size,
      sizeUnit: farm.sizeUnit,
      stage: farm.stage,
      number_of_workers: farm.number_of_workers,
    })
  }

  const handleSaveEdit = async () => {
    if (!editingFarmId) return
    try {
      await updateFarm(editingFarmId, editFormData)
      setSuccessMessage("Farm updated successfully")
      setEditingFarmId(null)
      setEditFormData({})
    } catch (err) {
      console.error("Failed to update farm:", err)
    }
  }

  const handleDeleteFarm = async (farmId: number) => {
    try {
      setIsDeleting(farmId)
      await deleteFarm(farmId)
      setSuccessMessage("Farm deleted successfully")
      setIsDeleting(null)
    } catch (err) {
      console.error("Failed to delete farm:", err)
      setIsDeleting(null)
    }
  }

  if (loading && farms.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading farm updates...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Farm Updates</h1>
          <p className="text-gray-600">Track the progress and updates of all farms in real-time</p>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-emerald-800 font-medium">{successMessage}</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* View Mode Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">View Mode</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("timeline")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    viewMode === "timeline"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    viewMode === "grid" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>

            {/* Stage Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farm Stage</label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">All Stages</option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            {/* Crop Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {cropTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farmer ID</label>
              <select
                value={selectedFarmerId}
                onChange={(e) => setSelectedFarmerId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">All Farmers</option>
                {farmerIds.map((id) => (
                  <option key={id} value={id}>
                    Farmer {id}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="w-full px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-sm font-medium text-emerald-900">
                  {filteredUpdates.length} update{filteredUpdates.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {filteredUpdates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No updates found</h3>
            <p className="text-gray-500">Try adjusting your filters to see farm updates</p>
          </div>
        ) : viewMode === "timeline" ? (
          <FarmUpdateTimeline updates={filteredUpdates} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUpdates.map((update) => {
              const farm = farms.find((f) => f.id === Number(update.id.split("-")[1]))
              return (
                <div
                  key={update.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <FarmUpdateCard update={update} />
                  {farm && (
                    <div className="p-4 border-t border-gray-100 space-y-3">
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEditFarm(farm)}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit Farm
                      </button>

                      {/* Farm Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{farm.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{farm.number_of_workers} workers</span>
                        </div>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDeleteFarm(farm.id!)}
                        disabled={isDeleting === farm.id}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-4 h-4" />
                        {isDeleting === farm.id ? "Deleting..." : "Delete Farm"}
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {editingFarmId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Edit Farm</h2>
              <button
                onClick={() => {
                  setEditingFarmId(null)
                  setEditFormData({})
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Farm Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Name</label>
                <input
                  type="text"
                  value={editFormData.name || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Farm Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Type</label>
                <select
                  value={editFormData.type || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select type</option>
                  <option value="Crop">Crop</option>
                  <option value="Livestock">Livestock</option>
                </select>
              </div>

              {/* Production Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Production Type</label>
                <input
                  type="text"
                  value={editFormData.production_type || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, production_type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={editFormData.location || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* GPS Coordinates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={editFormData.latitude || ""}
                    onChange={(e) => setEditFormData({ ...editFormData, latitude: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={editFormData.longitude || ""}
                    onChange={(e) => setEditFormData({ ...editFormData, longitude: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editFormData.size || ""}
                    onChange={(e) => setEditFormData({ ...editFormData, size: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size Unit</label>
                  <select
                    value={editFormData.sizeUnit || ""}
                    onChange={(e) => setEditFormData({ ...editFormData, sizeUnit: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select unit</option>
                    <option value="Hectare">Hectare</option>
                    <option value="Acre">Acre</option>
                  </select>
                </div>
              </div>

              {/* Farm Stage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Stage</label>
                <select
                  value={editFormData.stage || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, stage: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select stage</option>
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Workers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Workers</label>
                <input
                  type="number"
                  min="0"
                  value={editFormData.number_of_workers || ""}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, number_of_workers: Number.parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    setEditingFarmId(null)
                    setEditFormData({})
                  }}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
