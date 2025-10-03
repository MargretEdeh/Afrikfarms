"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "@/components/ui/card"
import { CheckCircle2, CreditCard, Wallet, Loader2 } from "lucide-react"
import type { VerificationPayment } from "@/types"

interface PaymentModalProps {
  open: boolean
  onClose: () => void
  onSuccess: (payment: VerificationPayment) => void
  farmerName: string
  farmerId: string
}

export default function PaymentModal({ open, onClose, onSuccess, farmerName, farmerId }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "opay">("paystack")
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePayment = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const payment: VerificationPayment = {
      amount: Number.parseFloat(amount),
      currency: "NGN",
      paymentMethod,
      reference: `PAY-${farmerId}-${Date.now()}`,
      status: "success",
    }

    setIsProcessing(false)
    setPaymentSuccess(true)

    // Show success state for 1.5 seconds before calling onSuccess
    setTimeout(() => {
      onSuccess(payment)
      setAmount("")
      setPaymentSuccess(false)
    }, 1500)
  }

  const handleClose = () => {
    if (!isProcessing) {
      setPaymentSuccess(false)
      setAmount("")
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Process Payment for {farmerName}</DialogTitle>
        </DialogHeader>

        {!paymentSuccess ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Payment Amount (₦)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
              />
              <p className="text-xs text-muted-foreground">Enter the amount to pay for this farmer</p>
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
                    Processing...
                  </>
                ) : (
                  `Pay ${amount ? `₦${Number.parseFloat(amount).toLocaleString()}` : "Amount"}`
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Payment Successful!</h3>
            <p className="text-muted-foreground">
              Payment of ₦{Number.parseFloat(amount).toLocaleString()} has been processed.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
