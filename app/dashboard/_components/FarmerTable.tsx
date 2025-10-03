"use client"

import { Eye, Edit, Mail, Phone } from "lucide-react"
import type { Farmer } from "@/types"

interface FarmerTableProps {
  farmers: Farmer[]
  onView: (farmer: Farmer) => void
  onEdit: (farmer: Farmer) => void
}

export default function FarmerTable({ farmers, onView, onEdit }: FarmerTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "pending":
        return "bg-amber-100 text-amber-700"
      case "inactive":
        return "bg-gray-100 text-gray-700"
      case "suspended":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Farmer ID
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Farm Size
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Registration
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {farmers.map((farmer) => (
              <tr key={farmer.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-mono text-gray-900">{farmer.id}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {farmer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{farmer.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-3.5 h-3.5" />
                      {farmer.phone}
                    </div>
                    {farmer.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Mail className="w-3.5 h-3.5" />
                        {farmer.email}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">{farmer.farmSize}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{farmer.registrationDate}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(farmer.status)}`}
                  >
                    {farmer.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onView(farmer)}
                      className="p-2 hover:bg-primarytext-gray-600 hover:text-primary rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onEdit(farmer)}
                      className="p-2 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
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
