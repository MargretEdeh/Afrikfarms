"use client"

import { useEffect, useState } from "react"
import { useLGA } from "@/context/LgaContext"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentVerificationPage() {
  const { verifyPayment } = useLGA()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // State to manage the flow
  const [verificationStatus, setVerificationStatus] = useState<
    "verifying" | "success" | "failed"
  >("verifying")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [paymentAmount, setPaymentAmount] = useState<string>("")
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    // 1. Try to get the reference from the URL (Paystack's default)
    let reference = searchParams.get("reference") 
    let trxref = searchParams.get("trxref") // Can also be used, often identical to 'reference'
    
    // 2. Fallback: If not in URL, check local storage (where we saved it)
    if (!reference) {
      reference = localStorage.getItem("paystack_ref")
    }
    
    // Retrieve the amount for display (fallback)
    const storedAmount = localStorage.getItem("payment_amount") || "0"
    setPaymentAmount(storedAmount)
    
    // 3. Clean up local storage immediately
    localStorage.removeItem("paystack_ref")
    localStorage.removeItem("payment_amount")

    if (!reference) {
      setVerificationStatus("failed")
      setErrorMessage("Missing payment reference in URL or storage. Cannot verify transaction.")
      return
    }

    const handleVerification = async () => {
      try {
        // Call the verification endpoint using the reference.
        const verifyResponse = await verifyPayment(trxref || reference!, reference!)

        console.log("Verification response:", verifyResponse)

        // Check for success based on your backend's actual response structure
        // Your backend returns: { message: "Payment was Successful", data: {...}, payment: {...} }
        const isSuccess = 
          verifyResponse?.payment?.status === "Paid" ||
          verifyResponse?.payment?.has_paid === true ||
          verifyResponse?.message?.toLowerCase().includes("successful")

        if (isSuccess) {
          setVerificationStatus("success")
          setPaymentData(verifyResponse)
          
          // FIX: Get the amount from the actual API response, not just localStorage
          const apiAmount = verifyResponse?.payment?.amount
          if (apiAmount && apiAmount > 0) {
            setPaymentAmount(apiAmount.toString())
          }
          
          // Optional: You can store the payment data or farmer data if needed
          // localStorage.setItem("last_payment", JSON.stringify(verifyResponse.payment))
          
        } else {
          setVerificationStatus("failed")
          setErrorMessage(
            verifyResponse?.message ||
            verifyResponse?.data?.gateway_response || 
            "Payment verification failed. Please contact support."
          )
        }
      } catch (error: any) {
        console.error("Verification Error:", error)
        setVerificationStatus("failed")
        setErrorMessage(
          error.response?.data?.message ||
          error.message || 
          "An unexpected error occurred during verification."
        )
      }
    }

    handleVerification()
  }, [searchParams, verifyPayment, router])

  // FIX: Use the actual amount from paymentData if available, otherwise fallback to paymentAmount
  const displayAmount = paymentData?.payment?.amount 
    ? Number.parseFloat(paymentData.payment.amount).toLocaleString()
    : Number.parseFloat(paymentAmount).toLocaleString()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      {verificationStatus === "verifying" && (
        <>
          <Loader2 className="mb-4 h-16 w-16 text-primary animate-spin" />
          <h1 className="text-2xl font-semibold">Verifying Payment...</h1>
          <p className="text-muted-foreground">Please wait, do not close this page. This should take only a moment.</p>
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
          {paymentData?.payment?.payment_reference && (
            <p className="text-xs text-muted-foreground mt-1">
              Reference: {paymentData.payment.payment_reference}
            </p>
          )}
          <Button onClick={() => router.push('/dashboard')} className="mt-6">
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
            Please check the payment status on your bank statement or try again.
          </p>
          <Button onClick={() => router.push('/farmers')} className="mt-6">
            Return to Farmers
          </Button>
        </>
      )}
    </div>
  )
}