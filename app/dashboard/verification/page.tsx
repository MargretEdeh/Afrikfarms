"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sprout, Users, Clock, TrendingUp, Search, CreditCard, CheckCircle2 } from "lucide-react"
import PaymentModal from "../_components/PaymentModal"

// Type definitions matching your schema
type FarmerStatus = 'active' | 'pending' | 'inactive' | 'suspended'
type PaymentStatus = 'pending' | 'success' | 'failed'

interface Farmer {
  id: string
  name: string
  email?: string
  paymentStatus?: PaymentStatus
  phone: string
  nin: string
  address: string
  state: string
  lga: string
  farmSize: string
  registrationDate: string
  status: FarmerStatus
  photoUrl?: string
  paymentAmount?: number
}

interface VerificationPayment {
  amount: number
  currency: string
  paymentMethod: "paystack" | "opay"
  reference: string
  status: "pending" | "success" | "failed"
}

const initialFarmers: Farmer[] = [
  {
    id: "FM-2023-7890",
    name: "Musa Abdullahi",
    email: "musa.abdullahi@email.com",
    phone: "0803 456 7890",
    nin: "12345678901",
    address: "Kubwa District, Bwari LGA",
    state: "FCT",
    lga: "Bwari",
    farmSize: "2.5 hectares",
    registrationDate: "2023-08-15",
    status: "active",
    paymentStatus: "success",
    paymentAmount: 5000,
  },
  {
    id: "FM-2023-7891",
    name: "Aisha Bello",
    email: "aisha.bello@email.com",
    phone: "0802 123 4567",
    nin: "98765432109",
    address: "Bwari Central",
    state: "FCT",
    lga: "Bwari",
    farmSize: "1.8 hectares",
    registrationDate: "2023-07-22",
    status: "active",
    paymentStatus: "pending",
  },
  {
    id: "FM-2023-7892",
    name: "Yusuf Sani",
    phone: "0805 789 0123",
    nin: "11223344556",
    address: "Ushafa Village",
    state: "FCT",
    lga: "Bwari",
    farmSize: "3.2 hectares",
    registrationDate: "2023-09-05",
    status: "pending",
    paymentStatus: "pending",
  },
  {
    id: "FM-2023-7893",
    name: "Fatima Ahmed",
    email: "fatima.ahmed@email.com",
    phone: "0807 654 3210",
    nin: "66778899001",
    address: "Dutse Alhaji",
    state: "FCT",
    lga: "Bwari",
    farmSize: "1.5 hectares",
    registrationDate: "2023-10-10",
    status: "active",
    paymentStatus: "success",
    paymentAmount: 3500,
  },
  {
    id: "FM-2023-7894",
    name: "Ibrahim Usman",
    email: "ibrahim.usman@email.com",
    phone: "0809 876 5432",
    nin: "55443322110",
    address: "Kubwa Phase 2",
    state: "FCT",
    lga: "Bwari",
    farmSize: "4.0 hectares",
    registrationDate: "2023-11-12",
    status: "active",
    paymentStatus: "pending",
  },
]

export default function AdminDashboard() {
  const [farmers, setFarmers] = useState<Farmer[]>(initialFarmers)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handlePaymentSuccess = (payment: VerificationPayment) => {
    if (selectedFarmer) {
      setFarmers((prev) =>
        prev.map((farmer) =>
          farmer.id === selectedFarmer.id
            ? { ...farmer, paymentStatus: "success" as PaymentStatus, paymentAmount: payment.amount }
            : farmer,
        ),
      )
    }
    setShowPaymentModal(false)
    setSelectedFarmer(null)
  }

  const handlePayClick = (farmer: Farmer) => {
    setSelectedFarmer(farmer)
    setShowPaymentModal(true)
  }

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.phone.includes(searchQuery),
  )

  const totalFarmers = farmers.length
  const paidFarmers = farmers.filter((f) => f.paymentStatus === "success").length
  const unpaidFarmers = farmers.filter((f) => f.paymentStatus === "pending").length
  const totalRevenue = farmers
    .filter((f) => f.paymentStatus === "success")
    .reduce((sum, f) => sum + (f.paymentAmount || 0), 0)

  const getStatusColor = (status: FarmerStatus) => {
    switch (status) {
      case "active":
        return "default"
      case "pending":
        return "secondary"
      case "inactive":
        return "outline"
      case "suspended":
        return "destructive"
    }
  }

  return (
    <div className="min-h-screen bg-background">
     

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Farmers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFarmers}</div>
              <p className="text-xs text-muted-foreground mt-1">Registered farmers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{paidFarmers}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {totalFarmers > 0 ? Math.round((paidFarmers / totalFarmers) * 100) : 0}% payment rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unpaid</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{unpaidFarmers}</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting payment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">From {paidFarmers} payments</p>
            </CardContent>
          </Card>
        </div>

        {/* Farmers List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Farmers Management</CardTitle>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Add New Farmer
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
            <div className="space-y-4">
              {filteredFarmers.map((farmer) => (
                <Card key={farmer.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold text-lg">{farmer.name}</h3>
                        <Badge variant={getStatusColor(farmer.status)}>
                          {farmer.status}
                        </Badge>
                        <Badge
                          variant={farmer.paymentStatus === "success" ? "default" : "outline"}
                          className={
                            farmer.paymentStatus === "success"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-orange-100 text-orange-800 border-orange-200"
                          }
                        >
                          {farmer.paymentStatus === "success" ? "Paid" : "Unpaid"}
                        </Badge>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">ID:</span> {farmer.id}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {farmer.phone}
                        </div>
                        <div>
                          <span className="font-medium">Location:</span> {farmer.address}
                        </div>
                        <div>
                          <span className="font-medium">Farm Size:</span> {farmer.farmSize}
                        </div>
                        <div>
                          <span className="font-medium">Registered:</span>{" "}
                          {new Date(farmer.registrationDate).toLocaleDateString()}
                        </div>
                        {farmer.paymentStatus === "success" && farmer.paymentAmount && (
                          <div>
                            <span className="font-medium">Payment Amount:</span> ₦
                            {farmer.paymentAmount.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {farmer.paymentStatus === "pending" ? (
                        <Button onClick={() => handlePayClick(farmer)} className="w-full md:w-auto">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Pay
                        </Button>
                      ) : (
                        <div className="flex items-center gap-2 text-green-600 px-4 py-2 rounded-md bg-green-50">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="font-medium">Paid</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {filteredFarmers.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No farmers found matching your search.</p>
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
          farmerName={selectedFarmer.name}
          farmerId={selectedFarmer.id}
        />
      )}
    </div>
  )
}