"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  Clock,
  TrendingUp,
  Search,
  CreditCard,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react"
import PaymentModal from "../_components/PaymentModal"
import { useLGA } from "@/context/LgaContext"

type PaymentStatus = "pending" | "success" | "failed"

interface FarmerWithPayment {
  id?: number
  fullname: string
  email?: string | null
  phone_number: string
  nin?: string
  address: string
  status?: string
  has_paid?: boolean
  payment_amount?: number
  payment_reference?: string
  createdAt?: string
  paymentStatus?: PaymentStatus
  paymentAmount?: number
}

export default function AdminDashboard() {
  const { farmers: contextFarmers, loading: contextLoading, error: contextError, fetchFarmers } = useLGA()
  const [farmers, setFarmers] = useState<FarmerWithPayment[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFarmer, setSelectedFarmer] = useState<FarmerWithPayment | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // ✅ Fetch only once on mount — no infinite loop
  useEffect(() => {
    const loadFarmers = async () => {
      try {
        await fetchFarmers()
      } catch (err: any) {
        setError(err.message || "Failed to load farmers")
      }
    }
    loadFarmers()
  }, [fetchFarmers])

  // ✅ FIXED: Transform farmers data properly
  useEffect(() => {
    console.log("Context farmers:", contextFarmers) // Debug log
    
    if (contextFarmers) {
      // Handle if contextFarmers is the response object with data property
      const farmersArray = Array.isArray(contextFarmers) 
        ? contextFarmers 
        : contextFarmers.data || []
      
      console.log("Farmers array:", farmersArray) // Debug log
      
      if (farmersArray.length > 0) {
        const transformed = farmersArray.map((f: any) => ({
          ...f,
          paymentStatus: f.has_paid ? "success" : "pending",
          paymentAmount: f.payment_amount || 0,
        }))
        setFarmers(transformed)
      } else {
        setFarmers([])
      }
    }
  }, [contextFarmers])

  const handlePaymentSuccess = (payment: any) => {
    if (selectedFarmer) {
      setFarmers((prev) =>
        prev.map((farmer) =>
          farmer.id === selectedFarmer.id
            ? {
                ...farmer,
                paymentStatus: "success",
                paymentAmount: payment.amount,
                payment_reference: payment.reference,
              }
            : farmer,
        ),
      )
    }
    setShowPaymentModal(false)
    setSelectedFarmer(null)
  }

  const handlePayClick = (farmer: FarmerWithPayment) => {
    setSelectedFarmer(farmer)
    setShowPaymentModal(true)
  }

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(farmer.id).includes(searchQuery) ||
      farmer.phone_number.includes(searchQuery),
  )

  const totalFarmers = farmers.length
  const paidFarmers = farmers.filter((f) => f.paymentStatus === "success").length
  const unpaidFarmers = farmers.filter((f) => f.paymentStatus === "pending").length
  const totalRevenue = farmers
    .filter((f) => f.paymentStatus === "success")
    .reduce((sum, f) => sum + (f.paymentAmount || 0), 0)

  const getStatusColor = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "default"
      case "pending":
        return "secondary"
      case "inactive":
        return "outline"
      case "suspended":
        return "destructive"
      default:
        return "secondary"
    }
  }

  if (contextLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Total Farmers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFarmers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Paid</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{paidFarmers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Unpaid</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{unpaidFarmers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Farmers List */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Farmers Management</CardTitle>
              <Button>
                <Users className="mr-2 h-4 w-4" /> Add New Farmer
              </Button>
            </div>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            {(error || contextError) && (
              <div className="flex items-center gap-2 bg-red-50 p-3 border border-red-200 rounded-md mb-4">
                <AlertCircle className="text-red-600 h-5 w-5" />
                <p className="text-red-600 text-sm">{error || contextError}</p>
              </div>
            )}

            <div className="space-y-4">
              {filteredFarmers.map((farmer) => (
                <Card key={farmer.id}>
                  <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold">{farmer.fullname}</h3>
                        <Badge variant={getStatusColor(farmer.status)}>{farmer.status || "pending"}</Badge>
                        <Badge
                          className={
                            farmer.paymentStatus === "success"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-orange-100 text-orange-800 border-orange-200"
                          }
                        >
                          {farmer.paymentStatus === "success" ? "Paid" : "Unpaid"}
                        </Badge>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
                        <div>ID: {farmer.id}</div>
                        <div>Phone: {farmer.phone_number}</div>
                        <div>Email: {farmer.email || "N/A"}</div>
                        <div>Address: {farmer.address}</div>
                      </div>
                    </div>
                    <div>
                      {farmer.paymentStatus === "pending" ? (
                        <Button onClick={() => handlePayClick(farmer)}>
                          <CreditCard className="mr-2 h-4 w-4" /> Pay
                        </Button>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-md">
                          <CheckCircle2 className="h-5 w-5" /> Paid
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {filteredFarmers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No farmers found.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedFarmer && (
        <PaymentModal
          open={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false)
            setSelectedFarmer(null)
          }}
          onSuccess={handlePaymentSuccess}
          farmerName={selectedFarmer.fullname}
          farmerId={String(selectedFarmer.id)}
          farmerEmail={selectedFarmer.email || ""}
        />
      )}
    </div>
  )
}