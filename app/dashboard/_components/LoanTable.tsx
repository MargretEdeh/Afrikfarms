"use client"

import { Eye, CheckCircle2, XCircle } from "lucide-react"
import type { Loan } from "@/types"

interface LoanTableProps {
  loans: Loan[]
  onView: (loan: Loan) => void
  onApprove?: (loan: Loan) => void
  onReject?: (loan: Loan) => void
}

export default function LoanTable({ loans, onView, onApprove, onReject }: LoanTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-emerald-100 text-emerald-700"
      case "pending":
        return "bg-amber-100 text-amber-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      case "disbursed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Loan ID
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Farmer
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Loan Type
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Crop</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loans.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-mono text-gray-900">{loan.id}</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{loan.farmerName}</td>
                <td className="py-4 px-6 text-sm font-bold text-gray-900">{formatCurrency(loan.amount)}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{loan.loanType}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{loan.cropType}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{loan.applicationDate}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(loan.status)}`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onView(loan)}
                      className="p-2 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {loan.status === "pending" && onApprove && onReject && (
                      <>
                        <button
                          onClick={() => onApprove(loan)}
                          className="p-2 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onReject(loan)}
                          className="p-2 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
