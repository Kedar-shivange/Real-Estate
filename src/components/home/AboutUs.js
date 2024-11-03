// src/components/home/AboutUs.js
import React from 'react'
import { CheckCircle } from 'lucide-react'

export default function AboutUs() {
  const features = [
    'Expert Agents',
    'Wide Range of Properties',
    'Personalized Service',
    'Market Analysis',
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/About_us.PNG?height=400&width=600"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <p className="text-gray-600 mb-6">
            We are a leading real estate company dedicated to helping you find your perfect home or investment property. With years of experience and a commitment to excellence, we provide unparalleled service to our clients.
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle size={20} className="text-blue-600 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}