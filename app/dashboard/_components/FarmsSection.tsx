'use client'
import { useState } from 'react'
import { Filter } from 'lucide-react'
import FarmCard from './FarmCard'
import { Farm } from '@/types'

interface FarmsSectionProps {
  farms: Farm[]
}

export default function FarmsSection({ farms }: FarmsSectionProps) {
  const [filter, setFilter] = useState('all')

  const handleVerify = (farm: Farm) => {
    console.log('Verify farm:', farm)
  }

  const handleView = (farm: Farm) => {
    console.log('View farm:', farm)
  }

  const filteredFarms = filter === 'all' ? farms : farms.filter(f => f.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Farm Verification</h2>
          <p className="text-gray-500">Review and verify farm submissions</p>
        </div>
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
      </div>

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
    </div>
  )
}
