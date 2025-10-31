export type FarmerStatus = 'active' | 'pending' | 'inactive' | 'suspended'
export type LoanStatus = 'pending' | 'approved' | 'rejected' | 'disbursed'
export type FarmStatus = 'verified' | 'pending' | 'rejected'
export type PaymentStatus = 'pending' | 'success' | 'failed'

export interface Farmer {
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
}
export interface FarmerRegistrationData {
  // Step 1: Basic Details
  fullName: string
  email?: string
  phone: string
  otpCode?: string
  acceptedTerms: boolean

  // Step 2: KYC/NIN Verification
  nin: string
  passportPhoto?: File | string
  proofOfAddress?: File | string
  address: string
  state: string
  lga: string
  bankName?: string
  accountNumber?: string
  accountName?: string
}



export interface Farm {
  id: number
  farmerId: number
  name: string
  location: string
  latitude: string
  longitude: string
  type: 'Crop' | 'Livestock'
  production_type: string  // Note: underscore, not camelCase
  size: number
  sizeUnit: 'Acre' | 'Hectare'
  stage: 'Cleared' | 'Planted' | 'Harvesting'
  ownershipDocument: string | null
  number_of_workers: number
  verified: boolean
  status?: 'pending' | 'verified' | 'rejected'  // Optional for filtering
  createdAt: string
  updatedAt: string
}

// If you need backward compatibility, you can also export the old interface with a different name
export interface LegacyFarm {
  id: string;
  farmerName: string;
  location: string;
  gpsCoordinates: string;
  cropType: string;
  farmSize: number;
  workers: number;
  farmStage: string;
  images?: string[];
  status: 'pending' | 'verified' | 'rejected';
}
export interface Loan {
  id: string
  farmerId: string
  farmerName: string
  loanType: string
  cropType: string
  amount: number
  
  estimatedReturn: number
  applicationDate: string
  status: "pending" | "approved" | "rejected" | "disbursed"
  bvn?: string
  bankName?: string
  accountNumber?: string
  guarantor?: {
    name: string
    phone: string
    address: string
  }
  documents?: {
    bvnDocument?: string
    bankStatement?: string
    farmDocument?: string
  }
}

export interface LoanApplicationData {
  loanType: string
  cropType: string
  amount: string
  estimatedReturn: string

  bvn: string
  bankName: string
  accountNumber: string
  bvnDocument?: File | string
  bankStatement?: File | string

  guarantorName: string
  guarantorPhone: string
  guarantorAddress: string
  farmDocument?: File | string
}

export interface DashboardStats {
  totalFarmers: number
  activeFarms: number
  loansDisbursed: string
  repaymentRate: number
  trends: {
    farmers: string
    farms: string
    loans: string
    repayment: string
  }
}
export interface VerificationPayment {
  amount: number
  currency: string
  paymentMethod: "paystack" | "opay"
  reference: string
  status: "pending" | "success" | "failed"
}

export interface FarmUpdate {
  id: string
  farmerId: string
  date: string
  cropType: string
  stage: string
  gpsCoordinates: {
    latitude: number
    longitude: number
  }
  photos: string[]
  notes?: string
}

export interface Investor {
  id: string
  name: string
  type: string
  investmentRange: string
  interests: string[]
  matchScore?: number
}

export interface WalletTransaction {
  id: string
  type: "credit" | "debit"
  amount: number
  description: string
  date: string
  status: "completed" | "pending" | "failed"
  reference?: string
}

export interface Wallet {
  balance: number
  transactions: WalletTransaction[]
}
