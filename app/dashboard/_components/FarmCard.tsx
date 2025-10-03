import { MapPin, CheckCircle2, Eye, Calendar } from 'lucide-react'
import { Farm } from '@/types'

interface FarmCardProps {
  farm: Farm
  onVerify?: (farm: Farm) => void
  onView: (farm: Farm) => void
}

export default function FarmCard({ farm, onVerify, onView }: FarmCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        {farm.images && farm.images.length > 0 ? (
          <img src={farm.images[0]} alt={farm.farmerName} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-500">No image available</p>
            </div>
          </div>
        )}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(farm.status)}`}>
          {farm.status}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{farm.farmerName}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{farm.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-gray-900">{farm.farmSize}</p>
            <p className="text-xs text-gray-500 mt-1">Hectares</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-lg font-bold text-gray-900">{farm.cropType}</p>
            <p className="text-xs text-gray-500 mt-1">Crop</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-2xl font-bold text-gray-900">{farm.workers}</p>
            <p className="text-xs text-gray-500 mt-1">Workers</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          <span>Stage: {farm.farmStage}</span>
        </div>

        <div className="flex gap-2">
          {farm.status === 'pending' && onVerify ? (
            <>
              <button
                onClick={() => onVerify(farm)}
                className="flex-1 bg-primary hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Verify Farm
              </button>
              <button
                onClick={() => onView(farm)}
                className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-medium text-sm transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => onView(farm)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
