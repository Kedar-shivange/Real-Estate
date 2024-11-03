// src/components/common/ClientBrands.js
import React from 'react'

export default function ClientBrands() {
  const brands = [
    { name: 'Brand 1', logo: '/placeholder.svg?height=100&width=200' },
    { name: 'Brand 2', logo: '/placeholder.svg?height=100&width=200' },
    { name: 'Brand 3', logo: '/placeholder.svg?height=100&width=200' },
    { name: 'Brand 4', logo: '/placeholder.svg?height=100&width=200' },
    { name: 'Brand 5', logo: '/placeholder.svg?height=100&width=200' },
    { name: 'Brand 6', logo: '/placeholder.svg?height=100&width=200' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <img key={index} src={brand.logo} alt={brand.name} className="h-16 object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}