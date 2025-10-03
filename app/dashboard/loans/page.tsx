'use client'

import LoansSection from '../_components/LoansSection'
import { mockLoans } from '@/data/mockData'

export default function LoansPage() {
  return <LoansSection loans={mockLoans} />
}
