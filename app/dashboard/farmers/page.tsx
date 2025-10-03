'use client'
// import FarmersSection from './_components/FarmersSection'
import FarmersSection from '../_components/FarmersSection'
import { mockFarmers } from '@/data/mockData'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FarmersPage() {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddFarmer = async (data: any): Promise<void> => {
    console.log('Add new farmer', data)
  }

  return <FarmersSection farmers={mockFarmers} onAddFarmer={handleAddFarmer} />
}
