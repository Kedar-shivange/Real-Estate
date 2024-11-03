// src/components/common/Testimonials.js
import React from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mukesh Ambani',
      role: 'Home Buyer',
      image: '/customer/Mukesh Ambani.jpeg?height=100&width=100',
      text: 'Excellent service! They helped me find my dream home in no time.',
      rating: 5,
    },
    {
      name: 'Gautam Adani',
      role: 'Property Investor',
      image: '/customer/Gautam Adani.jpeg?height=100&width=100',
      text: 'Very professional team. I highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Adar Poonawalla',
      role: 'First-time Seller',
      image: '/customer/Adar Poonawalla.jpeg?height=100&width=100',
      text: 'The market analysis they provided was invaluable for my investment decisions.',
      rating: 4,
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}