"use client"

import { useState } from "react"
import { Filter, Plus } from "lucide-react"
import LoanTable from "./LoanTable"
import ApplyLoanModal from "./ApplyLoanModal"
import type { Loan, LoanApplicationData } from "@/types"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
interface LoansSectionProps {
  loans: Loan[]
  farmerName?: string
  farmerId?: string
  isAdmin?: boolean
}

export default function LoansSection({
  loans: initialLoans,
  farmerName = "Current Farmer",
  farmerId = "FM-001",
  isAdmin = false,
}: LoansSectionProps) {
  const [filter, setFilter] = useState("all")
  const [loans, setLoans] = useState<Loan[]>(initialLoans)
  const [showApplyModal, setShowApplyModal] = useState(false)

  const handleView = (loan: Loan) => {
    console.log("View loan:", loan)
    // TODO: Implement view loan details modal
  }

  const handleApprove = (loan: Loan) => {
    setLoans((prevLoans) => prevLoans.map((l) => (l.id === loan.id ? { ...l, status: "approved" as const } : l)))
    toast.success(`Loan ${loan.id} approved successfully`)
  }

  const handleReject = (loan: Loan) => {
    setLoans((prevLoans) => prevLoans.map((l) => (l.id === loan.id ? { ...l, status: "rejected" as const } : l)))
    toast.error(`Loan ${loan.id} rejected`) 
  }

  const handleApplyLoan = async (data: LoanApplicationData): Promise<void> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newLoan: Loan = {
      id: `LN-${Date.now()}`,
      farmerId: farmerId,
      farmerName: farmerName,
      loanType: data.loanType,
      cropType: data.cropType,
      amount: Number.parseFloat(data.amount),
      estimatedReturn: Number.parseFloat(data.estimatedReturn),
      applicationDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "pending",
      bvn: data.bvn,
      bankName: data.bankName,
      accountNumber: data.accountNumber,
      guarantor: {
        name: data.guarantorName,
        phone: data.guarantorPhone,
        address: data.guarantorAddress,
      },
    }

    setLoans((prevLoans) => [newLoan, ...prevLoans])

    toast.success("Loan application submitted successfully")
    setShowApplyModal(false)
  }

  const filteredLoans = filter === "all" ? loans : loans.filter((l) => l.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {isAdmin ? "Loan Applications" : "My Loan Applications"}
          </h2>
          <p className="text-gray-500">
            {isAdmin ? "Review and process farmer loan requests" : "View and manage your loan applications"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!isAdmin && (
            <Button onClick={() => setShowApplyModal(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Apply for Loan
            </Button>
          )}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="all">All Applications</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="disbursed">Disbursed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <LoanTable
        loans={filteredLoans}
        onView={handleView}
        onApprove={isAdmin ? handleApprove : undefined}
        onReject={isAdmin ? handleReject : undefined}
      />

      <ApplyLoanModal
        open={showApplyModal}
        onClose={() => setShowApplyModal(false)}
        onSubmit={handleApplyLoan}
        farmerName={farmerName}
      />
    </div>
  )
}
