"use client"

import { useState, useEffect } from "react"
import { AdminService } from "@/services/admin.service"
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  Calendar,
  Loader2,
  RefreshCw,
  AlertCircle
} from "lucide-react"

interface Farmer {
  id: number
  fullname: string
  email: string
  phone_number: string
}

interface Payment {
  id: number
  farmerId: number
  amount: number
  phone_number: string
  has_paid: boolean
  payment_reference: string
  status: string
  createdAt: string
  farmer: Farmer
}

interface PaymentsResponse {
  message: string
  meta: { total: number; page: number; limit: number }
  data: Payment[]
}

interface RevenueResponse {
  message: string
  data: { totalRevenue: number }
}

export default function RevenueDashboardPage() {
  const [revenue, setRevenue] = useState<number>(0)
  const [payments, setPayments] = useState<Payment[]>([])
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 50 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [revenueData, paymentsData] = await Promise.all([
        AdminService.getPaymentRevenue() as Promise<RevenueResponse>,
        AdminService.listPayments() as Promise<PaymentsResponse>
      ])

      setRevenue(revenueData.data.totalRevenue)
      setPayments(paymentsData.data)
      setMeta(paymentsData.meta)
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load data")
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchData()
    setRefreshing(false)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount)

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid": return "bg-green-100 text-green-700"
      case "pending": return "bg-amber-100 text-amber-700"
      case "failed": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
    </div>
  )

  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-900 mb-2">Failed to Load Data</h3>
        <p className="text-sm text-red-600 mb-4">{error}</p>
        <button onClick={fetchData} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Try Again
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Payments & Revenue</h1>
            <p className="text-gray-500 mt-1">Track all payment transactions and revenue</p>
          </div>

          <button onClick={handleRefresh} disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-emerald-100 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-bold">{formatCurrency(revenue)}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm mb-1">Total Transactions</p>
            <p className="text-3xl font-bold text-gray-900">{meta.total}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm mb-1">Average Payment</p>
            <p className="text-3xl font-bold text-gray-900">
              {formatCurrency(meta.total ? revenue / meta.total : 0)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Farmer</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Reference</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-6 py-4">{payment.farmer.fullname}</td>
                  <td className="px-6 py-4 font-semibold">{formatCurrency(payment.amount)}</td>
                  <td className="px-6 py-4 font-mono">{payment.phone_number}</td>
                  <td className="px-6 py-4 font-mono">{payment.payment_reference}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{formatDate(payment.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-6 py-4 bg-gray-50 border-t text-sm text-gray-500">
            Showing {payments.length} of {meta.total} transactions
          </div>
        </div>
      </div>
    </div>
  )
}
