// src/components/home/Slider.js
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: '/images/Luxury_Villa.jpg', title: 'Luxury Villa', location: 'Lonavala', price: '$5,000,000' },
  { image: '/images/Modern_Apartment.jpg', title: 'Modern Apartment', location: 'Koregoan Park, Pune', price: '$2,500,000' },
  { image: '/images/BeachFront_property.jpeg', title: 'Beachfront Property', location: 'Juhu Beach, Mumbai', price: '$3,750,000' },
]; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="text-xl">{slide.location}</p>
            <p className="text-2xl font-bold mt-2">{slide.price}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}