// src/pages/Properties.js
import React from 'react'
import SearchSection from '../components/home/SearchSection'
import LatestProperties from '../components/home/LatestProperties'

export default function Properties() {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Properties</h1>
        <SearchSection />
        <LatestProperties />
        <LatestProperties />
      </div>
    </main>
  )
}