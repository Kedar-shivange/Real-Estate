// src/components/home/PromotionalBanner.js
import React from 'react'

export default function PromotionalBanner() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Find Your Dream Property Today</h2>
        <p className="mb-8 text-xl">
          Explore our wide range of properties and find the perfect home for you and your family.
        </p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300">
          View Properties
        </button>
      </div>
    </section>
  )
}