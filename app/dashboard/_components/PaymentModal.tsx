// @/components/PaymentModal.tsx
"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "@/components/ui/card"
import { CreditCard, Wallet, Loader2, AlertCircle } from "lucide-react"
import { useLGA } from "@/context/LgaContext"

interface PaymentModalProps {
  open: boolean
  onClose: () => void
  onSuccess: (payment: any) => void
  farmerName: string
  farmerId: string
  farmerEmail: string
}

export default function PaymentModal({
  open,
  onClose,
  farmerName,
  farmerId,
  farmerEmail,
}: PaymentModalProps) {
  
  const { initailizePayment } = useLGA() 
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "opay">("paystack")
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePaystackPayment = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      // Data payload for initialization
      const paymentData = {
        farmer_id: Number.parseInt(farmerId), 
        amount: Number.parseFloat(amount),
      }

      console.log("Initializing payment with data:", paymentData)

      // Initialize payment
      const initResponse = await initailizePayment(paymentData)
      
      console.log("Payment init response:", initResponse)

      // Handle nested data structure: response is { data: { status, message, data: { authorization_url, reference } } }
      // The actual payment data is in initResponse.data.data
      const paymentData_response = initResponse?.data?.data || initResponse?.data || initResponse
      
      if (!paymentData_response?.authorization_url || !paymentData_response?.reference) {
        console.error("Missing payment data:", paymentData_response)
        console.error("Full response:", initResponse)
        throw new Error(initResponse?.message || "Failed to initialize payment - missing authorization URL")
      }

      const { authorization_url, reference } = paymentData_response

      console.log("Redirecting to:", authorization_url)
      console.log("Payment reference:", reference)

      // Save the reference to localStorage before leaving the page
      localStorage.setItem("paystack_ref", reference)
      localStorage.setItem("payment_amount", amount)
      localStorage.setItem("farmer_id", farmerId)

      // Perform a full page redirect to the Paystack Checkout URL
      window.location.href = authorization_url

    } catch (err: any) {
      console.error("Payment initialization error:", err)
      const errorMessage =
        err.response?.data?.message || 
        err.response?.data?.error || 
        err.message || 
        "Failed to initialize payment"

      setError(errorMessage)
      setIsProcessing(false)
    }
  }

  const handleOpayPayment = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }

    setIsProcessing(true)
    setError(null)

    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    onClose()
  }

  const handlePayment = () => {
    if (paymentMethod === "paystack") {
      handlePaystackPayment()
    } else {
      handleOpayPayment()
    }
  }

  const handleClose = () => {
    if (!isProcessing) {
      setAmount("")
      setError(null)
      setIsProcessing(false)
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Process Payment for {farmerName}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 bg-red-50 p-3 border border-red-200 rounded-md">
              <AlertCircle className="text-red-600 h-5 w-5 flex-shrink-0" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="amount">Payment Amount (₦)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setError(null)
              }}
              min="0"
              step="0.01"
              disabled={isProcessing}
            />
            <p className="text-xs text-muted-foreground">Enter the amount to pay for this farmer</p>
          </div>

          <div className="space-y-4">
            <Label>Select Payment Method</Label>
            <RadioGroup
              value={paymentMethod}
              onValueChange={(value) => setPaymentMethod(value as "paystack" | "opay")}
              disabled={isProcessing}
            >
              <Card
                className={`cursor-pointer p-4 transition-colors ${
                  paymentMethod === "paystack" ? "border-primary bg-primary/5" : ""
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <label className="flex cursor-pointer items-center gap-3">
                  <RadioGroupItem value="paystack" id="paystack" disabled={isProcessing} />
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="font-medium">Paystack</div>
                    <div className="text-sm text-muted-foreground">Pay with card, bank transfer, or USSD</div>
                  </div>
                </label>
              </Card>
{/* 
              <Card
                className={`cursor-pointer p-4 transition-colors ${
                  paymentMethod === "opay" ? "border-primary bg-primary/5" : ""
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <label className="flex cursor-pointer items-center gap-3">
                  <RadioGroupItem value="opay" id="opay" disabled={isProcessing} />
                  <Wallet className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="font-medium">OPay</div>
                    <div className="text-sm text-muted-foreground">Pay with OPay wallet or bank transfer</div>
                  </div>
                </label>
              </Card> */}
            </RadioGroup>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={handleClose} disabled={isProcessing} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isProcessing || !amount || Number.parseFloat(amount) <= 0}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Redirecting...
                </>
              ) : (
                `Pay ${amount ? `₦${Number.parseFloat(amount).toLocaleString()}` : "Amount"}`
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}