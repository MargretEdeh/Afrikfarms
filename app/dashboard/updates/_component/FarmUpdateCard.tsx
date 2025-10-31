"use client"
import { Calendar, MapPin, Leaf, ImageIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FarmUpdateCardProps {
  update: {
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
}

export default function FarmUpdateCard({ update }: FarmUpdateCardProps) {
  const formattedDate = new Date(update.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const stageColors: Record<string, string> = {
    Cleared: "bg-blue-100 text-blue-800",
    Planted: "bg-green-100 text-green-800",
    Harvesting: "bg-amber-100 text-amber-800",
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      {update.photos && update.photos.length > 0 && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={update.photos[0] || "/placeholder.svg"}
            alt={`Farm update - ${update.cropType}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${stageColors[update.stage] || "bg-gray-100 text-gray-800"}`}
            >
              {update.stage}
            </span>
          </div>
        </div>
      )}

      <CardHeader className="border-b">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{update.cropType}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">Location</p>
            <p className="text-sm text-gray-600">
              {update.gpsCoordinates.latitude.toFixed(4)}, {update.gpsCoordinates.longitude.toFixed(4)}
            </p>
          </div>
        </div>

        {/* Notes */}
        {update.notes && (
          <div className="flex items-start gap-3">
            <Leaf className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Update</p>
              <p className="text-sm text-gray-600">{update.notes}</p>
            </div>
          </div>
        )}

        {/* Photos Count */}
        {update.photos && update.photos.length > 0 && (
          <div className="flex items-center gap-2 pt-2 border-t">
            <ImageIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {update.photos.length} photo{update.photos.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
