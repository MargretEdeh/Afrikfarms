"use client"

import { useState } from "react"
import { X, Upload, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { LoanApplicationData } from "@/types"

interface ApplyLoanModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: LoanApplicationData) => Promise<void>
  farmerName: string
}

const LOAN_TYPES = [
  "Input Financing",
  "Equipment Purchase",
  "Farm Expansion",
  "Working Capital",
  "Harvest Financing",
  "Infrastructure Development",
]

const CROP_TYPES = ["Rice", "Maize", "Cassava", "Yam", "Sorghum", "Millet", "Beans", "Groundnut", "Vegetables", "Other"]

const NIGERIAN_BANKS = [
  "Access Bank",
  "Zenith Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Ecobank",
  "Fidelity Bank",
  "Union Bank",
  "Stanbic IBTC",
  "Sterling Bank",
  "Wema Bank",
  "Polaris Bank",
  "Keystone Bank",
  "FCMB",
  "Heritage Bank",
  "Jaiz Bank",
  "Providus Bank",
  "Kuda Bank",
  "Opay",
  "Palmpay",
]

export default function ApplyLoanModal({ open, onClose, onSubmit, farmerName }: ApplyLoanModalProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState<LoanApplicationData>({
    loanType: "",
    cropType: "",
    amount: "",
    estimatedReturn: "",
    bvn: "",
    bankName: "",
    accountNumber: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorAddress: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState<{
    bvnDocument?: string
    bankStatement?: string
    farmDocument?: string
  }>({})

  if (!open) return null

  const handleInputChange = (field: keyof LoanApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (field: "bvnDocument" | "bankStatement" | "farmDocument", file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setUploadedFiles((prev) => ({ ...prev, [field]: reader.result as string }))
      setFormData((prev) => ({ ...prev, [field]: file }))
    }
    reader.readAsDataURL(file)
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.loanType) newErrors.loanType = "Please select a loan type"
    if (!formData.cropType) newErrors.cropType = "Please select a crop type"
    if (!formData.amount) newErrors.amount = "Please enter loan amount"
    if (formData.amount && Number.parseFloat(formData.amount) <= 0) newErrors.amount = "Amount must be greater than 0"
    if (!formData.estimatedReturn) newErrors.estimatedReturn = "Please enter estimated return"
    if (formData.estimatedReturn && Number.parseFloat(formData.estimatedReturn) <= 0)
      newErrors.estimatedReturn = "Estimated return must be greater than 0"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.bvn) newErrors.bvn = "BVN is required"
    if (formData.bvn && formData.bvn.length !== 11) newErrors.bvn = "BVN must be 11 digits"
    if (!formData.bankName) newErrors.bankName = "Please select your bank"
    if (!formData.accountNumber) newErrors.accountNumber = "Account number is required"
    if (formData.accountNumber && formData.accountNumber.length !== 10)
      newErrors.accountNumber = "Account number must be 10 digits"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.guarantorName) newErrors.guarantorName = "Guarantor name is required"
    if (!formData.guarantorPhone) newErrors.guarantorPhone = "Guarantor phone is required"
    if (formData.guarantorPhone && formData.guarantorPhone.length !== 11)
      newErrors.guarantorPhone = "Phone number must be 11 digits"
    if (!formData.guarantorAddress) newErrors.guarantorAddress = "Guarantor address is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1))
  }

  const handleSubmit = async () => {
    if (!validateStep3()) return

    setLoading(true)
    try {
      await onSubmit(formData)
      handleClose()
    } catch (error) {
      console.error("Error submitting loan application:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      loanType: "",
      cropType: "",
      amount: "",
      estimatedReturn: "",
      bvn: "",
      bankName: "",
      accountNumber: "",
      guarantorName: "",
      guarantorPhone: "",
      guarantorAddress: "",
    })
    setUploadedFiles({})
    setErrors({})
    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Apply for Loan</h2>
            <p className="text-sm text-gray-500 mt-1">Farmer: {farmerName}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={loading}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">Step {step} of 3</span>
            <span className="text-xs text-gray-500">
              {step === 1 && "Loan Details"}
              {step === 2 && "Financial Information"}
              {step === 3 && "Guarantor Details"}
            </span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${s <= step ? "bg-emerald-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 py-6">
          {/* Step 1: Loan Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="loanType">
                  Loan Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="loanType"
                  value={formData.loanType}
                  onChange={(e) => handleInputChange("loanType", e.target.value)}
                  className={`w-full mt-1.5 px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.loanType ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <option value="">Select loan type</option>
                  {LOAN_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.loanType && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.loanType}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="cropType">
                  Crop Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="cropType"
                  value={formData.cropType}
                  onChange={(e) => handleInputChange("cropType", e.target.value)}
                  className={`w-full mt-1.5 px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.cropType ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <option value="">Select crop type</option>
                  {CROP_TYPES.map((crop) => (
                    <option key={crop} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
                {errors.cropType && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.cropType}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="amount">
                  Loan Amount (₦) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="e.g., 500000"
                  value={formData.amount}
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                  className={errors.amount ? "border-red-500" : ""}
                />
                {errors.amount && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.amount}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="estimatedReturn">
                  Estimated Return at Harvest (₦) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="estimatedReturn"
                  type="number"
                  placeholder="e.g., 750000"
                  value={formData.estimatedReturn}
                  onChange={(e) => handleInputChange("estimatedReturn", e.target.value)}
                  className={errors.estimatedReturn ? "border-red-500" : ""}
                />
                {errors.estimatedReturn && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.estimatedReturn}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">Expected revenue from harvest</p>
              </div>
            </div>
          )}

          {/* Step 2: Financial Information */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="bvn">
                  Bank Verification Number (BVN) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="bvn"
                  type="text"
                  maxLength={11}
                  placeholder="Enter 11-digit BVN"
                  value={formData.bvn}
                  onChange={(e) => handleInputChange("bvn", e.target.value.replace(/\D/g, ""))}
                  className={errors.bvn ? "border-red-500" : ""}
                />
                {errors.bvn && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.bvn}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">Required for financial profiling</p>
              </div>

              <div>
                <Label htmlFor="bvnDocument">BVN Document (Optional)</Label>
                <div className="mt-1.5">
                  <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {uploadedFiles.bvnDocument ? "Document uploaded" : "Upload BVN document"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("bvnDocument", e.target.files[0])}
                    />
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="bankName">
                  Bank Name <span className="text-red-500">*</span>
                </Label>
                <select
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleInputChange("bankName", e.target.value)}
                  className={`w-full mt-1.5 px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.bankName ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <option value="">Select your bank</option>
                  {NIGERIAN_BANKS.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
                {errors.bankName && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.bankName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="accountNumber">
                  Account Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="accountNumber"
                  type="text"
                  maxLength={10}
                  placeholder="Enter 10-digit account number"
                  value={formData.accountNumber}
                  onChange={(e) => handleInputChange("accountNumber", e.target.value.replace(/\D/g, ""))}
                  className={errors.accountNumber ? "border-red-500" : ""}
                />
                {errors.accountNumber && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.accountNumber}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="bankStatement">Bank Statement (Optional)</Label>
                <div className="mt-1.5">
                  <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {uploadedFiles.bankStatement ? "Statement uploaded" : "Upload bank statement"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("bankStatement", e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Guarantor Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  A guarantor is required for loan approval. Please provide details of someone who can vouch for your
                  loan repayment.
                </p>
              </div>

              <div>
                <Label htmlFor="guarantorName">
                  Guarantor Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="guarantorName"
                  type="text"
                  placeholder="Enter guarantor's full name"
                  value={formData.guarantorName}
                  onChange={(e) => handleInputChange("guarantorName", e.target.value)}
                  className={errors.guarantorName ? "border-red-500" : ""}
                />
                {errors.guarantorName && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.guarantorName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="guarantorPhone">
                  Guarantor Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="guarantorPhone"
                  type="text"
                  maxLength={11}
                  placeholder="e.g., 08012345678"
                  value={formData.guarantorPhone}
                  onChange={(e) => handleInputChange("guarantorPhone", e.target.value.replace(/\D/g, ""))}
                  className={errors.guarantorPhone ? "border-red-500" : ""}
                />
                {errors.guarantorPhone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.guarantorPhone}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="guarantorAddress">
                  Guarantor Address <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="guarantorAddress"
                  placeholder="Enter guarantor's full address"
                  value={formData.guarantorAddress}
                  onChange={(e) => handleInputChange("guarantorAddress", e.target.value)}
                  className={errors.guarantorAddress ? "border-red-500" : ""}
                  rows={3}
                />
                {errors.guarantorAddress && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.guarantorAddress}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="farmDocument">Farm Document (Optional)</Label>
                <div className="mt-1.5">
                  <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      {uploadedFiles.farmDocument ? "Document uploaded" : "Upload farm ownership document"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("farmDocument", e.target.files[0])}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Land ownership or lease agreement</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-6 py-4 flex items-center justify-between">
          <Button variant="outline" onClick={step === 1 ? handleClose : handleBack} disabled={loading}>
            {step === 1 ? "Cancel" : "Back"}
          </Button>

          {step < 3 ? (
            <Button onClick={handleNext} disabled={loading}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
