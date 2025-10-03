"use client"

import { Users, Tractor, DollarSign, TrendingUp } from "lucide-react"
import StatCard from "./StatCard"
import type { DashboardStats } from "@/types"
import { motion } from "framer-motion"
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
  AreaChart,
  Area,
} from "recharts"

interface DashboardProps {
  stats: DashboardStats
}

export default function Dashboard({ stats }: DashboardProps) {
  const activities = [
    { farmer: "Musa Abdullahi", activity: "Farm Verification", date: "15 Oct 2023", status: "approved" },
    { farmer: "Aisha Bello", activity: "Loan Application", date: "14 Oct 2023", status: "pending" },
    { farmer: "Yusuf Sani", activity: "Farm Update", date: "13 Oct 2023", status: "verified" },
    { farmer: "Fatima Ahmed", activity: "New Registration", date: "12 Oct 2023", status: "active" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "verified":
      case "active":
        return "bg-chart-1/10 text-chart-1"
      case "pending":
        return "bg-chart-4/10 text-chart-4"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const loanData = [
    { name: "Pending", value: 12, color: "#fb923c", percentage: 32 }, // Orange (chart-4)
    { name: "Approved", value: 8, color: "#10b981", percentage: 21 }, // Emerald (chart-1)
    { name: "Disbursed", value: 15, color: "#f43f5e", percentage: 40 }, // Rose (chart-2)
    { name: "Rejected", value: 3, color: "#3b82f6", percentage: 7 }, // Blue (chart-5)
  ]

  const verificationData = [
    { month: "Jan", verified: 45, pending: 8 },
    { month: "Feb", verified: 52, pending: 12 },
    { month: "Mar", verified: 48, pending: 6 },
    { month: "Apr", verified: 61, pending: 10 },
    { month: "May", verified: 55, pending: 8 },
    { month: "Jun", verified: 67, pending: 5 },
  ]

  const revenueData = [
    { month: "Jan", revenue: 45000, target: 40000 },
    { month: "Feb", revenue: 52000, target: 48000 },
    { month: "Mar", revenue: 48000, target: 50000 },
    { month: "Apr", revenue: 61000, target: 55000 },
    { month: "May", revenue: 55000, target: 52000 },
    { month: "Jun", revenue: 67000, target: 60000 },
  ]

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

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold text-foreground">{payload[0].payload.name || payload[0].payload.month}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-muted-foreground">
              {entry.name}: <span className="font-bold text-foreground">{entry.value.toLocaleString()}</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Monitor your LGA agricultural activities</p>
      </motion.div>

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
          label="Total Farmers"
          value={stats.totalFarmers.toLocaleString()}
          trend={stats.trends.farmers}
          trendUp={true}
          color="emerald"
        />
        <StatCard
          icon={Tractor}
          label="Active Farms"
          value={stats.activeFarms.toLocaleString()}
          trend={stats.trends.farms}
          trendUp={true}
          color="blue"
        />
        <StatCard
          icon={DollarSign}
          label="Loans Disbursed"
          value={stats.loansDisbursed}
          trend={stats.trends.loans}
          trendUp={true}
          color="amber"
        />
        <StatCard
          icon={TrendingUp}
          label="Repayment Rate"
          value={`${stats.repaymentRate}%`}
          trend={stats.trends.repayment}
          trendUp={true}
          color="rose"
        />
      </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Loan Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={loanData}
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
                {loanData.map((entry, index) => (
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
            {loanData.map((item, index) => (
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
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                  <span className="text-sm font-bold text-gray-900 w-8 text-right group-hover:scale-110 transition-transform">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Verification Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={verificationData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="opacity-30" vertical={false} />
              <XAxis 
                dataKey="month" 
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
                dataKey="verified" 
                fill="#1E580D" 
                radius={[8, 8, 0, 0]} 
                animationDuration={800}
                maxBarSize={50}
              />
              <Bar 
                dataKey="pending" 
                fill="#FFCD00" 
                radius={[8, 8, 0, 0]} 
                animationDuration={800}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
>
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue vs Target</h3>
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={revenueData}>
      <defs>
        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0F3D06" stopOpacity={0.8} /> {/* Darker green */}
          <stop offset="95%" stopColor="#0F3D06" stopOpacity={0.1} /> {/* Darker green */}
        </linearGradient>
        <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#D59B00" stopOpacity={0.8} /> {/* Darker yellow */}
          <stop offset="95%" stopColor="#D59B00" stopOpacity={0.1} /> {/* Darker yellow */}
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="opacity-30" vertical={false} />
      <XAxis 
        dataKey="month" 
        stroke="#6b7280" 
        tick={{ fill: "#0F3D06" }}  
        style={{ fontSize: "12px" }}
        axisLine={{ stroke: "#d1d5db" }}
      />
      <YAxis 
        stroke="#6b7280" 
        tick={{ fill: "#6b7280" }} 
        style={{ fontSize: "12px" }}
        axisLine={{ stroke: "#d1d5db" }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend 
        wrapperStyle={{ paddingTop: "20px" }}
        iconType="circle"
      />

      
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#0F3D06" 
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorRevenue)"
        animationDuration={1000}
        dot={{ fill: "#0F3D06", strokeWidth: 2, r: 4 }}
        activeDot={{ r: 6, fill: "#0F3D06", stroke: "#fff", strokeWidth: 2 }}
      />
      <Area
        type="monotone"
        dataKey="target"
        stroke="#D59B00"  
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorTarget)"
        animationDuration={1000}
        dot={{ fill: "#D59B00", strokeWidth: 2, r: 4 }}
        activeDot={{ r: 6, fill: "#D59B00", stroke: "#fff", strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
</motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-green-700 hover:text-green-600 transition-colors"
          >
            View All
          </motion.button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Farmer</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Activity</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activities.map((activity, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{activity.farmer}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{activity.activity}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{activity.date}</td>
                  <td className="py-3 px-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}
                    >
                      {activity.status}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}