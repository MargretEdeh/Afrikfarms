// eslint-disable-next-line @typescript-eslint/no-explicit-any
"use client"

import { useState, useEffect } from "react"
import { Check, Loader2, Upload, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { FarmerRegistrationData } from "@/types"
import { LGAService } from "@/services/lga.service"

interface AddFarmerModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: FarmerRegistrationData) => Promise<void>
}

export default function AddFarmerModal({ open, onClose, onSubmit }: AddFarmerModalProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  // OTP state variables removed: const [otpSent, setOtpSent] = useState(false)
  // OTP state variables removed: const [otpVerified, setOtpVerified] = useState(false)
  const [ninVerified, setNinVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [banks, setBanks] = useState<Array<{ id: number, name: string, code: string }>>([])

  const [formData, setFormData] = useState<Partial<FarmerRegistrationData>>({
    fullName: "",
    email: "",
    phone: "",
    // otpCode removed
    acceptedTerms: false,
    nin: "",
    address: "",
    state: "",
    lga: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
  })

  useEffect(() => {
    if (open) {
      fetchBanks()
    }
  }, [open])


  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ]


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (field: keyof FarmerRegistrationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  // OTP functions (handleSendOTP, handleVerifyOTP) removed

  const fetchBanks = async () => {
    try {
      const response = await LGAService.getBanks()
      setBanks(response?.data || [])
    } catch (err) {
      console.error('Failed to fetch banks:', err)
    }
  }

  const handleStep1Submit = () => {
    if (!formData.fullName || !formData.phone) {
      setError("Please fill in all required fields (Full Name and Phone Number)")
      return
    }

    if (!formData.acceptedTerms) {
      setError("Please accept the Terms & Conditions")
      return
    }

    setStep(2)
    setError(null)
  }

  const handleVerifyNIN = async () => {
    if (!formData.nin || formData.nin.length !== 11) {
      setError("Please enter a valid 11-digit NIN")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await LGAService.verifyNin({ nin: formData.nin })
      setNinVerified(true)

      // Auto-fill data from NIN verification if available
      if (response?.data) {
        // Update form data with any returned information
        // This depends on what your API returns
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "NIN verification failed. Please check the number and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (field: "passportPhoto" | "proofOfAddress", file: File) => {
  setLoading(true)
  setError(null)

  try {
    const uploadFormData = new FormData() // Renamed to avoid conflict with state formData

    if (field === "passportPhoto") {
      uploadFormData.append("profile_image", file)
      const response = await LGAService.uploadProfileImage(uploadFormData)
      // Fixed: Access image_url from response
      const imageUrl = response?.data?.image_url || response?.image_url
      handleInputChange(field, imageUrl)
    } else if (field === "proofOfAddress") {
      uploadFormData.append("proof_of_address", file)
      const response = await LGAService.UploadProofOfAddress(uploadFormData)
      // Fixed: Access image_url from response
      const imageUrl = response?.data?.image_url || response?.image_url
      handleInputChange(field, imageUrl)
    }
  } catch (err: any) {
    setError(err?.response?.data?.message || `Failed to upload ${field === "passportPhoto" ? "photo" : "document"}. Please try again.`)
  } finally {
    setLoading(false)
  }
}

  const handleFinalSubmit = async () => {
  if (!formData.nin || !formData.address || !formData.state || !formData.lga || !formData.bankName || !formData.accountNumber || !formData.accountName) {
    setError("Please fill in all required fields")
    return
  }

  if (!ninVerified) {
    setError("Please verify your NIN first")
    return
  }

  if (formData.accountNumber && formData.accountNumber.length !== 10) {
    setError("Account number must be 10 digits")
    return
  }

  setLoading(true)
  setError(null)

  try {
    const apiData = {
      fullname: formData.fullName!,
      email: formData.email || null,
      phone_number: formData.phone!,
      nin: formData.nin,
      nin_verified: ninVerified,
      address: formData.address,
      state: formData.state,
      lga: formData.lga,
      bankId: parseInt(formData.bankName!),
      account_name: formData.accountName,
      account_number: formData.accountNumber,
      profile_image: formData.passportPhoto || "noimage.jpg",
      proof_of_address: formData.proofOfAddress || "noimage.jpg",
    }

    console.log('Submitting farmer data:', apiData)

    await LGAService.createFarmer(apiData)
    await onSubmit(formData as FarmerRegistrationData)
    handleClose()
  } catch (err: any) {
    setError(err?.response?.data?.message || "Failed to register farmer. Please try again.")
  } finally {
    setLoading(false)
  }
}

  const handleClose = () => {
    setStep(1)
    // setOtpSent(false) removed
    // setOtpVerified(false) removed
    setNinVerified(false)
    setError(null)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      // otpCode: "", removed
      acceptedTerms: false,
      nin: "",
      address: "",
      state: "",
      lga: "",
      bankName: "",
      accountNumber: "",
      accountName: "",
    })
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Register New Farmer</DialogTitle>
          <div className="flex items-center gap-2 mt-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-emerald-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 1 ? <Check className="w-5 h-5" /> : "1"}
              </div>
              <span className="text-sm font-medium">Basic Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-2">
              <div className={`h-full transition-all ${step >= 2 ? "bg-primary w-full" : "w-0"}`} />
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-emerald-600" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
              <span className="text-sm font-medium">KYC Verification</span>
            </div>
          </div>
        </DialogHeader>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {step === 1 && (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
                <span className="text-xs text-gray-500 ml-2">(as on NIN)</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="farmer@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </div>

            {/* OTP section removed */}

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox
                id="terms"
                checked={formData.acceptedTerms}
                onCheckedChange={(checked) => handleInputChange("acceptedTerms", checked)}
              />
              <div className="space-y-1">
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                  I accept the{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-emerald-600 hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={handleStep1Submit}
                disabled={!formData.fullName || !formData.phone || !formData.acceptedTerms}
                className="bg-primary hover:bg-emerald-700"
              >
                Continue to KYC
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="nin">
                National Identification Number (NIN) <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="nin"
                  placeholder="12345678901"
                  maxLength={11}
                  value={formData.nin}
                  onChange={(e) => handleInputChange("nin", e.target.value.replace(/\D/g, ""))}
                  disabled={ninVerified}
                />
                {!ninVerified && (
                  <Button
                    onClick={handleVerifyNIN}
                    disabled={loading || !formData.nin || formData.nin.length !== 11}
                    variant="outline"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify NIN"}
                  </Button>
                )}
                {ninVerified && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">We&apos;ll validate your identity with NIMC database</p>
            </div>

            {ninVerified && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="passport">Passport Photograph</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="passport"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("passportPhoto", e.target.files[0])}
                    />
                    <label htmlFor="passport" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {formData.passportPhoto ? "Photo uploaded" : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Full Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter full residential address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lga">
                      LGA <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lga"
                      placeholder="Enter LGA"
                      value={formData.lga}
                      onChange={(e) => handleInputChange("lga", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proofOfAddress">Proof of Address (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="proofOfAddress"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("proofOfAddress", e.target.files[0])}
                    />
                    <label htmlFor="proofOfAddress" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {formData.proofOfAddress
                          ? "Document uploaded"
                          : "Click to upload utility bill or bank statement"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 5MB</p>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Account Details</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bankName">
                        Bank Name <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="bankName"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange("bankName", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select Bank</option>
                        {banks.map((bank) => (
                          <option key={bank.id} value={bank.id.toString()}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">
                        Account Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="accountNumber"
                        placeholder="0123456789"
                        maxLength={10}
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange("accountNumber", e.target.value.replace(/\D/g, ""))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountName">
                        Account Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="accountName"
                        placeholder="Enter account name"
                        value={formData.accountName}
                        onChange={(e) => handleInputChange("accountName", e.target.value)}
                      />
                      <p className="text-xs text-gray-500">Must match the name on your bank account</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleFinalSubmit}
                  disabled={loading || !ninVerified || !formData.address || !formData.state || !formData.lga || !formData.bankName || !formData.accountNumber || !formData.accountName}
                  className="bg-primary hover:bg-emerald-700"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Registering...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}