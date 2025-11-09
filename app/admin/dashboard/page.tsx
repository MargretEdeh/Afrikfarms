"use client"

import { useEffect } from "react"
import { Users, Tractor, MapPin, Building2, CreditCard, UserCheck, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import StatCard from "@/app/dashboard/_components/StatCard"
import { useAdmin } from "@/context/AdminContext"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AdminDashboard() {
  const { dashboard, loading, error, fetchDashboard } = useAdmin()

  useEffect(() => {
    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">Error loading dashboard</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!dashboard) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No dashboard data available</p>
      </div>
    )
  }

  // Farm production data for pie chart
  const farmProductionData = [
    { name: "Crop Production", value: dashboard.farms?.byProductionType?.crop || 0, color: "#10b981" },
    { name: "Livestock", value: dashboard.farms?.byProductionType?.livestock || 0, color: "#f59e0b" },
  ]

  // Farm stage data for bar chart
  const farmStageData = [
    { stage: "Cleared", count: dashboard.farms?.byStage?.cleared || 0 },
    { stage: "Planted", count: dashboard.farms?.byStage?.planted || 0 },
    { stage: "Harvesting", count: dashboard.farms?.byStage?.harvesting || 0 },
  ]

  // Geography data for display
  const geographyData = [
    { label: "Countries", value: dashboard.geography?.countries || 0, color: "#3b82f6" },
    { label: "States", value: dashboard.geography?.states || 0, color: "#8b5cf6" },
    { label: "LGAs", value: dashboard.geography?.lgas || 0, color: "#ec4899" },
  ]

  // Recent farmers
  const recentFarmers = dashboard.recent?.farmers || []

  const getPaymentStatusColor = (hasPaid: boolean) => {
    return hasPaid 
      ? "bg-chart-1/10 text-chart-1"
      : "bg-chart-4/10 text-chart-4"
  }

  const getPaymentStatusText = (hasPaid: boolean) => {
    return hasPaid ? "Paid" : "Unpaid"
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180)
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-bold text-sm"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold text-foreground">{payload[0].payload.name || payload[0].payload.stage}</p>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-muted-foreground">
              {entry.name || 'Count'}: <span className="font-bold text-foreground">{entry.value.toLocaleString()}</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const totalFarmProduction = farmProductionData.reduce((sum, item) => sum + item.value, 0)
  const invoicePaymentRate = dashboard.invoices?.total 
    ? ((dashboard.invoices.paid / dashboard.invoices.total) * 100).toFixed(1)
    : "0"

  return (
    <div className="space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Super Admin Dashboard</h2>
        <p className="text-muted-foreground">System-wide overview and statistics</p>
      </motion.div>

      {/* Main Stats Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          icon={Users}
          label="Total Users"
          value={(dashboard.users?.total || 0).toLocaleString()}
          trend={`${dashboard.users?.active || 0} active`}
          trendUp={true}
          color="emerald"
        />
        <StatCard
          icon={UserCheck}
          label="Total Farmers"
          value={(dashboard.farmers?.total || 0).toLocaleString()}
          trend={`${recentFarmers.length} recent`}
          trendUp={true}
          color="blue"
        />
        <StatCard
          icon={Tractor}
          label="Active Farms"
          value={(dashboard.farms?.total || 0).toLocaleString()}
          trend={`${dashboard.farms?.verified || 0} verified`}
          trendUp={true}
          color="amber"
        />
        <StatCard
          icon={Building2}
          label="Total Banks"
          value={(dashboard.banks?.total || 0).toLocaleString()}
          trend="Registered"
          trendUp={true}
          color="rose"
        />
      </motion.div>

      {/* Secondary Stats Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          icon={Globe}
          label="Admins"
          value={(dashboard.admins?.total || 0).toLocaleString()}
          trend="System admins"
          trendUp={true}
          color="emerald"
        />
        <StatCard
          icon={CreditCard}
          label="Total Invoices"
          value={(dashboard.invoices?.total || 0).toLocaleString()}
          trend={`${dashboard.invoices?.paid || 0} paid`}
          trendUp={true}
          color="blue"
        />
        <StatCard
          icon={MapPin}
          label="Coverage"
          value={`${dashboard.geography?.lgas || 0} LGAs`}
          trend={`${dashboard.geography?.states || 0} states`}
          trendUp={true}
          color="amber"
        />
        <StatCard
          icon={TrendingUp}
          label="Payment Rate"
          value={`${invoicePaymentRate}%`}
          trend={`${dashboard.invoices?.unpaid || 0} pending`}
          trendUp={true}
          color="rose"
        />
      </motion.div>

      {/* Geography Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Geographic Coverage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {geographyData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-600">{item.label}</p>
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: item.color }} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{item.value.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Farm Production Type */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Farm Production Types</h3>
          {totalFarmProduction > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={farmProductionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={110}
                    innerRadius={65}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                    paddingAngle={3}
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {farmProductionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 mt-4">
                {farmProductionData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        style={{ backgroundColor: item.color }}
                        className="w-4 h-4 rounded-full shadow-sm"
                      />
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 group-hover:scale-110 transition-transform">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-[300px] text-gray-500">
              No production data available
            </div>
          )}
        </motion.div>

        {/* Farm Stages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Stages Distribution</h3>
          {farmStageData.some(stage => stage.count > 0) ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={farmStageData} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="opacity-30" vertical={false} />
                <XAxis 
                  dataKey="stage" 
                  stroke="#6b7280" 
                  tick={{ fill: "#6b7280" }} 
                  style={{ fontSize: "12px" }}
                  axisLine={{ stroke: "#d1d5db" }}
                />
                <YAxis 
                  stroke="#6b7280" 
                  tick={{ fill: "#6b7280" }} 
                  style={{ fontSize: "12px" }}
                  axisLine={{ stroke: "#d1d5db" }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f3f4f6", opacity: 0.3 }} />
                <Legend 
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="circle"
                />
                <Bar 
                  dataKey="count" 
                  fill="#1E580D" 
                  radius={[8, 8, 0, 0]} 
                  animationDuration={800}
                  maxBarSize={60}
                  name="Farms"
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[300px] text-gray-500">
              No farm stage data available
            </div>
          )}
        </motion.div>
      </div>

      {/* Recent Farmers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Farmers</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-green-700 hover:text-green-600 transition-colors"
          >
            View All
          </motion.button>
        </div>
        {recentFarmers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Full Name</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Email</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Phone</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Payment Status</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Joined Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentFarmers.map((farmer: any, index: number) => (
                  <motion.tr
                    key={farmer.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {farmer.fullname || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {farmer.email || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {farmer.phone_number || 'N/A'}
                    </td>
                    <td className="py-3 px-4">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(farmer.has_paid)}`}
                      >
                        {getPaymentStatusText(farmer.has_paid)}
                      </motion.span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(farmer.createdAt).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center py-8 text-gray-500">
            No recent farmers
          </div>
        )}
      </motion.div>
    </div>
  )
}