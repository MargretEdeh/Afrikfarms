import { Video as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  icon: typeof LucideIcon
  label: string
  value: string
  trend: string
  trendUp: boolean
  color: 'emerald' | 'blue' | 'amber' | 'rose'
}

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    trend: 'text-emerald-600',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    trend: 'text-blue-600',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    trend: 'text-amber-600',
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'text-rose-600',
    trend: 'text-rose-600',
  },
}

export default function StatCard({ icon: Icon, label, value, trend, trendUp, color }: StatCardProps) {
  const colors = colorClasses[color]

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
        <div className="flex items-center gap-1">
          {trendUp ? (
            <TrendingUp className={`w-4 h-4 ${colors.trend}`} />
          ) : (
            <TrendingDown className="w-4 h-4 text-gray-400" />
          )}
          <span className={`text-sm font-semibold ${trendUp ? colors.trend : 'text-gray-400'}`}>
            {trend}
          </span>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}
