"use client"

import { useEffect, useState, Suspense } from "react"
import { useLGA } from "@/context/LgaContext"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function PaymentVerificationContent() {
  const { verifyPayment } = useLGA()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [verificationStatus, setVerificationStatus] = useState<
    "verifying" | "success" | "failed"
  >("verifying")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [paymentAmount, setPaymentAmount] = useState<string>("")
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    let reference = searchParams.get("reference")
    const trxref = searchParams.get("trxref")

    if (!reference) {
      reference = localStorage.getItem("paystack_ref")
    }

    const storedAmount = localStorage.getItem("payment_amount") || "0"
    setPaymentAmount(storedAmount)

    localStorage.removeItem("paystack_ref")
    localStorage.removeItem("payment_amount")

    if (!reference) {
      setVerificationStatus("failed")
      setErrorMessage("Missing payment reference in URL or storage.")
      return
    }

    const handleVerification = async () => {
      try {
        const verifyResponse = await verifyPayment(trxref || reference!, reference!)
        const isSuccess =
          verifyResponse?.payment?.status === "Paid" ||
          verifyResponse?.payment?.has_paid === true ||
          verifyResponse?.message?.toLowerCase().includes("successful")

        if (isSuccess) {
          setVerificationStatus("success")
          setPaymentData(verifyResponse)
          const apiAmount = verifyResponse?.payment?.amount
          if (apiAmount && apiAmount > 0) {
            setPaymentAmount(apiAmount.toString())
          }
        } else {
          setVerificationStatus("failed")
          setErrorMessage(
            verifyResponse?.message ||
              verifyResponse?.data?.gateway_response ||
              "Payment verification failed. Please contact support."
          )
        }
      } catch (error: any) {
        setVerificationStatus("failed")
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "An unexpected error occurred during verification."
        )
      }
    }

    handleVerification()
  }, [searchParams, verifyPayment])

  const displayAmount = paymentData?.payment?.amount
    ? Number.parseFloat(paymentData.payment.amount).toLocaleString()
    : Number.parseFloat(paymentAmount).toLocaleString()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      {verificationStatus === "verifying" && (
        <>
          <Loader2 className="mb-4 h-16 w-16 text-primary animate-spin" />
          <h1 className="text-2xl font-semibold">Verifying Payment...</h1>
          <p className="text-muted-foreground">
            Please wait, do not close this page.
          </p>
        </>
      )}

      {verificationStatus === "success" && (
        <>
          <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
          <h1 className="text-2xl font-semibold">Payment Successful!</h1>
          <p className="text-muted-foreground mt-2">
            Payment of <span className="font-bold text-green-600">₦{displayAmount}</span> has been confirmed.
          </p>
          {paymentData?.data?.fullname && (
            <p className="text-sm text-muted-foreground mt-1">
              For farmer: <span className="font-medium">{paymentData.data.fullname}</span>
            </p>
          )}
          <Button onClick={() => router.push("/dashboard")} className="mt-6">
            Go to Dashboard
          </Button>
        </>
      )}

      {verificationStatus === "failed" && (
        <>
          <XCircle className="mb-4 h-16 w-16 text-red-500" />
          <h1 className="text-2xl font-semibold">Payment Failed</h1>
          <p className="text-red-600 font-medium">{errorMessage}</p>
          <p className="text-muted-foreground mt-2">
            Please check your bank statement or try again.
          </p>
          <Button onClick={() => router.push("/farmers")} className="mt-6">
            Return to Farmers
          </Button>
        </>
      )}
    </div>
  )
}

// ✅ Wrap the content in Suspense here
export default function PaymentVerificationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentVerificationContent />
    </Suspense>
  )
}