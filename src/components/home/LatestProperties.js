// src/components/home/LatestProperties.js
import React from 'react'
import { MapPin, Ruler, Bath, Bed } from 'lucide-react'

export default function LatestProperties() {
  const properties = [
    {
      image: '/images2/Modern_Apartment.jpeg?height=300&width=400',
      title: 'Modern Apartment',
      price: '$250,000',
      location: 'New York',
      area: '1,200 sqft',
      beds: 2,
      baths: 2,
    },
    {
      image: '/images2/Suburban_House.jpeg?height=300&width=400',
      title: 'Suburban House',
      price: '$450,000',
      location: 'Los Angeles',
      area: '2,500 sqft',
      beds: 4,
      baths: 3,
    },
    {
      image: '/images2/Luxury_Condo.jpeg?height=300&width=400',
      title: 'Luxury Condo',
      price: '$750,000',
      location: 'Miami',
      area: '1,800 sqft',
      beds: 3,
      baths: 2,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin size={16} className="mr-1" /> {property.location}
                </p>
                <p className="text-blue-600 font-bold text-lg mb-4">{property.price}</p>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center"><Ruler size={16} className="mr-1" /> {property.area}</span>
                  <span className="flex items-center"><Bed size={16} className="mr-1" /> {property.beds} Beds</span>
                  <span className="flex items-center"><Bath size={16} className="mr-1" /> {property.baths} Baths</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}