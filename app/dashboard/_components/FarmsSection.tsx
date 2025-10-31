'use client'
import { useState, useEffect } from 'react'
import { Filter, Plus, X, MapPin, Users } from 'lucide-react'
import FarmCard from './FarmCard'
import { useLGA } from '@/context/LgaContext'
import { Farm } from '@/types'

export default function FarmsSection() {
  const { farms, fetchFarms, createFarm, loading } = useLGA()
  const [filter, setFilter] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [formData, setFormData] = useState({
    farmerId: '',
    type: 'Crop' as 'Crop' | 'Livestock',
    productionType: '',
    location: '',
    longitude: '',
    latitude: '',
    size: '',
    sizeUnit: 'Acre' as 'Hectare' | 'Acre',
    stage: 'Cleared' as 'Cleared' | 'Planted' | 'Harvesting',
    number_of_workers: ''
  })

  useEffect(() => {
    fetchFarms()
  }, [])

  const handleVerify = (farm: Farm) => {
    console.log('Verify farm:', farm)
    // Add verification logic here
  }

  const handleView = (farm: Farm) => {
    console.log('View farm:', farm)
    // Add view details logic here
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createFarm({
        farmerId: formData.farmerId,
        type: formData.type,
        productionType: formData.productionType,
        location: formData.location,
        longitude: formData.longitude,
        latitude: formData.latitude,
        size: Number(formData.size),
        sizeUnit: formData.sizeUnit,
        stage: formData.stage,
        number_of_workers: Number(formData.number_of_workers)
      })
      setShowCreateModal(false)
      // Reset form
      setFormData({
        farmerId: '',
        type: 'Crop',
        productionType: '',
        location: '',
        longitude: '',
        latitude: '',
        size: '',
        sizeUnit: 'Acre',
        stage: 'Cleared',
        number_of_workers: ''
      })
    } catch (error) {
      console.error('Error creating farm:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
const filteredFarms = Array.isArray(farms) 
  ? filter === 'all' 
    ? farms 
    : filter === 'verified'
    ? farms.filter(f => f.verified === true)
    : filter === 'pending'
    ? farms.filter(f => f.verified === false)
    : farms
  : []
  if (loading && farms.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading farms...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Farm Management</h2>
          <p className="text-gray-500">Review and manage farm submissions</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="all">All Farms</option>
              <option value="pending">Pending Verification</option>
              <option value="verified">Verified</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Farm
          </button>
        </div>
      </div>

      {filteredFarms.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No farms found</h3>
          <p className="text-gray-500 mb-6">
            {filter === 'all' ? 'Get started by adding your first farm' : `No ${filter} farms at the moment`}
          </p>
          {filter === 'all' && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Your First Farm
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarms.map((farm) => (
            <FarmCard
              key={farm.id}
              farm={farm}
              onVerify={farm.status === 'pending' ? handleVerify : undefined}
              onView={handleView}
            />
          ))}
        </div>
      )}

      {/* Create Farm Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Add New Farm</h3>
                <p className="text-sm text-gray-500 mt-1">Fill in the farm details below</p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Farmer ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farmer ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="farmerId"
                  value={formData.farmerId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter farmer ID"
                />
              </div>

              {/* Farm Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="Crop">Crop</option>
                    <option value="Livestock">Livestock</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Production Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="productionType"
                    value={formData.productionType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., Cassava, Rice"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Plot 3 Diamond city estate"
                />
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Longitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="6.4501582"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Latitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="7.4821271"
                  />
                </div>
              </div>

              {/* Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size Unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sizeUnit"
                    value={formData.sizeUnit}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="Acre">Acre</option>
                    <option value="Hectare">Hectare</option>
                  </select>
                </div>
              </div>

              {/* Stage and Workers */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Stage <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="Cleared">Cleared</option>
                    <option value="Planted">Planted</option>
                    <option value="Harvesting">Harvesting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Workers <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="number_of_workers"
                    value={formData.number_of_workers}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      Create Farm
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}