import { MapPin, CheckCircle2, Eye, Calendar, Leaf, Users } from 'lucide-react'
import { Farm } from '@/types'

interface FarmCardProps {
  farm: Farm
  onVerify?: (farm: Farm) => void
  onView: (farm: Farm) => void
}

export default function FarmCard({ farm, onVerify, onView }: FarmCardProps) {
  const getStatusColor = (verified: boolean) => {
    return verified
      ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
      : 'bg-amber-100 text-amber-700 border-amber-200'
  }

  const getStatusText = (verified: boolean) => {
    return verified ? 'Verified' : 'Pending'
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Cleared':
        return 'text-gray-600'
      case 'Planted':
        return 'text-blue-600'
      case 'Harvesting':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        {farm.ownershipDocument ? (
          <img src={farm.ownershipDocument} alt={farm.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-500">No image available</p>
            </div>
          </div>
        )}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(farm.verified)}`}>
          {getStatusText(farm.verified)}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{farm.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{farm.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-xl font-bold text-gray-900">{farm.size}</p>
            <p className="text-xs text-gray-500 mt-1">{farm.sizeUnit}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-sm font-bold text-gray-900 truncate">{farm.production_type}</p>
            <p className="text-xs text-gray-500 mt-1">{farm.type}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <p className="text-xl font-bold text-gray-900">{farm.number_of_workers}</p>
            <p className="text-xs text-gray-500 mt-1">Workers</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm mb-4">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Stage:</span>
          <span className={`font-medium ${getStageColor(farm.stage)}`}>{farm.stage}</span>
        </div>

        <div className="flex gap-2">
          {!farm.verified && onVerify ? (
            <>
              <button
                onClick={() => onVerify(farm)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
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