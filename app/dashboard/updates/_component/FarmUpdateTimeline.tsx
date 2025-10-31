"use client"
import { Calendar, MapPin, Leaf } from "lucide-react"

interface TimelineUpdate {
  id: string
  farmerId: string
  date: string
  cropType: string
  stage: string
  gpsCoordinates: {
    latitude: number
    longitude: number
  }
  photos: string[]
  notes?: string
}

interface FarmUpdateTimelineProps {
  updates: TimelineUpdate[]
}

export default function FarmUpdateTimeline({ updates }: FarmUpdateTimelineProps) {
  // Sort updates by date (newest first)
  const sortedUpdates = [...updates].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const stageColors: Record<string, string> = {
    Cleared: "bg-blue-500",
    Planted: "bg-green-500",
    Harvesting: "bg-amber-500",
  }

  const stageBgColors: Record<string, string> = {
    Cleared: "bg-blue-50 border-blue-200",
    Planted: "bg-green-50 border-green-200",
    Harvesting: "bg-amber-50 border-amber-200",
  }

  return (
    <div className="space-y-6">
      {sortedUpdates.map((update, index) => {
        const date = new Date(update.date)
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        const formattedTime = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })

        return (
          <div key={update.id} className="flex gap-6">
            {/* Timeline Marker */}
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full ${stageColors[update.stage] || "bg-gray-400"} ring-4 ring-white border-2 border-gray-200`}
              ></div>
              {index !== sortedUpdates.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-gray-200 to-gray-100 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-6">
              <div className={`rounded-xl border p-6 ${stageBgColors[update.stage] || "bg-gray-50 border-gray-200"}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{update.cropType}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formattedDate} at {formattedTime}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border">
                        {update.stage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                {update.photos && update.photos.length > 0 && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={update.photos[0] || "/placeholder.svg"}
                      alt={`Farm update - ${update.cropType}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Location</p>
                      <p className="text-sm text-gray-600">
                        {update.gpsCoordinates.latitude.toFixed(4)}, {update.gpsCoordinates.longitude.toFixed(4)}
                      </p>
                    </div>
                  </div>

                  {/* Notes */}
                  {update.notes && (
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Update Notes</p>
                        <p className="text-sm text-gray-600">{update.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}