// src/components/home/Services.js
import React from 'react'
import { Home, Key, TrendingUp, BarChart } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: Home, title: 'Property Sale', description: 'Find your dream home from our wide range of properties.' },
    { icon: Key, title: 'Property Rent', description: 'Rent a property that suits your needs and budget.' },
    { icon: TrendingUp, title: 'Property Development', description: 'Invest in our property development projects for great returns.' },
    { icon: BarChart, title: 'Market Analysis', description: 'Get expert insights on the real estate market trends.' },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}