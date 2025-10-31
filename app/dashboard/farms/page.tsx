'use client'
import FarmsSection from '../_components/FarmsSection'
import { mockFarms } from '@/data/mockData'

export default function FarmersPage() {
  const handleAddFarmer = () => console.log('Add new farmer')

  return <FarmsSection/>
}
