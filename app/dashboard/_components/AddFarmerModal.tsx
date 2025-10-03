"use client"

import { useState } from "react"
import { Check, Loader2, Upload, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { FarmerRegistrationData } from "@/types"

interface AddFarmerModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: FarmerRegistrationData) => Promise<void>
}

export default function AddFarmerModal({ open, onClose, onSubmit }: AddFarmerModalProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [ninVerified, setNinVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<Partial<FarmerRegistrationData>>({
    fullName: "",
    email: "",
    phone: "",
    otpCode: "",
    acceptedTerms: false,
    nin: "",
    address: "",
    state: "",
    lga: "",
  })

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

  const handleInputChange = (field: keyof FarmerRegistrationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleSendOTP = async () => {
    if (!formData.phone) {
      setError("Phone number is required")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Simulate OTP sending API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // TODO: Replace with actual API call
      // await fetch('/api/send-otp', {
      //   method: 'POST',
      //   body: JSON.stringify({ phone: formData.phone, email: formData.email })
      // })

      setOtpSent(true)
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (!formData.otpCode || formData.otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Simulate OTP verification API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // TODO: Replace with actual API call
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   body: JSON.stringify({ phone: formData.phone, code: formData.otpCode })
      // })

      setOtpVerified(true)
    } catch (err) {
      setError("Invalid OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleStep1Submit = () => {
    if (!formData.fullName || !formData.phone) {
      setError("Please fill in all required fields")
      return
    }

    if (!otpVerified) {
      setError("Please verify your phone number with OTP")
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
      // Simulate NIN verification API call to NIMC
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // TODO: Replace with actual NIMC API call
      // const response = await fetch('/api/verify-nin', {
      //   method: 'POST',
      //   body: JSON.stringify({ nin: formData.nin, name: formData.fullName })
      // })

      setNinVerified(true)

      // Auto-fill data from NIN verification (simulated)
      // In production, this would come from NIMC API response
      handleInputChange("passportPhoto", "/placeholder-user.jpg")
    } catch (err) {
      setError("NIN verification failed. Please check the number and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = (field: "passportPhoto" | "proofOfAddress", file: File) => {
    handleInputChange(field, file)
  }

  const handleFinalSubmit = async () => {
    if (!formData.nin || !formData.address || !formData.state || !formData.lga) {
      setError("Please fill in all required fields")
      return
    }

    if (!ninVerified) {
      setError("Please verify your NIN first")
      return
    }

    setLoading(true)
    setError(null)

    try {
      await onSubmit(formData as FarmerRegistrationData)
      handleClose()
    } catch (err) {
      setError("Failed to register farmer. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setOtpSent(false)
    setOtpVerified(false)
    setNinVerified(false)
    setError(null)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      otpCode: "",
      acceptedTerms: false,
      nin: "",
      address: "",
      state: "",
      lga: "",
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
              <Label htmlFor="email">Email Address (Optional)</Label>
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
                  disabled={otpVerified}
                />
                {!otpVerified && (
                  <Button onClick={handleSendOTP} disabled={loading || !formData.phone} variant="outline">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : otpSent ? "Resend OTP" : "Send OTP"}
                  </Button>
                )}
                {otpVerified && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>

            {otpSent && !otpVerified && (
              <div className="space-y-2">
                <Label htmlFor="otp">
                  Enter OTP <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="otp"
                    placeholder="000000"
                    maxLength={6}
                    value={formData.otpCode}
                    onChange={(e) => handleInputChange("otpCode", e.target.value.replace(/\D/g, ""))}
                  />
                  <Button onClick={handleVerifyOTP} disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify"}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">Enter the 6-digit code sent to your phone/email</p>
              </div>
            )}

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
                disabled={!otpVerified || !formData.acceptedTerms}
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
              <p className="text-xs text-gray-500">We'll validate your identity with NIMC database</p>
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
                  disabled={loading || !ninVerified || !formData.address || !formData.state || !formData.lga}
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
