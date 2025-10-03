"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "@/components/ui/card"
import { CheckCircle2, CreditCard, Wallet, Loader2 } from "lucide-react"
import type { VerificationPayment } from "@/types"

interface VerificationPaymentModalProps {
  open: boolean
  onClose: () => void
  onSuccess: (payment: VerificationPayment) => void
  amount: number
}

export default function VerificationPaymentModal({
  open,
  onClose,
  onSuccess,
  amount = 5000,
}: VerificationPaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "opay">("paystack")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const payment: VerificationPayment = {
      amount,
      currency: "NGN",
      paymentMethod,
      reference: `VER-${Date.now()}`,
      status: "success",
    }

    setIsProcessing(false)
    setPaymentSuccess(true)

    // Show success state for 1.5 seconds before calling onSuccess
    setTimeout(() => {
      onSuccess(payment)
    }, 1500)
  }

  const handleClose = () => {
    if (!isProcessing) {
      setPaymentSuccess(false)
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Account Verification Payment</DialogTitle>
        </DialogHeader>

        {!paymentSuccess ? (
          <div className="space-y-6">
            <div className="rounded-lg bg-muted p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Verification Fee</span>
                <span className="text-2xl font-bold">₦{amount.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Select Payment Method</Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as "paystack" | "opay")}
              >
                <Card
                  className={`cursor-pointer p-4 transition-colors ${paymentMethod === "paystack" ? "border-primary bg-primary/5" : ""}`}
                >
                  <label className="flex cursor-pointer items-center gap-3">
                    <RadioGroupItem value="paystack" id="paystack" />
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">Paystack</div>
                      <div className="text-sm text-muted-foreground">Pay with card, bank transfer, or USSD</div>
                    </div>
                  </label>
                </Card>

                <Card
                  className={`cursor-pointer p-4 transition-colors ${paymentMethod === "opay" ? "border-primary bg-primary/5" : ""}`}
                >
                  <label className="flex cursor-pointer items-center gap-3">
                    <RadioGroupItem value="opay" id="opay" />
                    <Wallet className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">OPay</div>
                      <div className="text-sm text-muted-foreground">Pay with OPay wallet or bank transfer</div>
                    </div>
                  </label>
                </Card>
              </RadioGroup>
            </div>

            <div className="space-y-2 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
              <p className="font-medium">What you'll get after verification:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Access to loan applications</li>
                <li>Farm management tools with GPS tracking</li>
                <li>Investor and partner matching</li>
                <li>Digital wallet for fund management</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleClose} disabled={isProcessing} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button onClick={handlePayment} disabled={isProcessing} className="flex-1">
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay ₦${amount.toLocaleString()}`
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Payment Successful!</h3>
            <p className="text-muted-foreground">Your account is now verified. Redirecting to dashboard...</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
