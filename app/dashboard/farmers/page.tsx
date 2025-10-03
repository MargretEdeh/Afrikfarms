'use client'
// import FarmersSection from './_components/FarmersSection'
import FarmersSection from '../_components/FarmersSection'
import { mockFarmers } from '@/data/mockData'

export default function FarmersPage() {
  const handleAddFarmer = async (data: any): Promise<void> => {
    console.log('Add new farmer', data)
  }

  return <FarmersSection farmers={mockFarmers} onAddFarmer={handleAddFarmer} />
}
