// src/components/home/SearchSection.js
import React from 'react'
import { Search } from 'lucide-react'

export default function SearchSection() {
  return (
    <div className="bg-blue-600 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Find Your Dream Property</h2>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Location"
            className="p-2 rounded-md"
          />
          <select className="p-2 rounded-md">
            <option value="">Category</option>
            <option value="flat">Flat</option>
            <option value="land">Land</option>
            <option value="plot">Plot</option>
            <option value="commercial">Commercial</option>
          </select>
          <input
            type="text"
            placeholder="Price Range"
            className="p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 p-2 rounded-md font-bold flex items-center justify-center"
          >
            <Search size={20} className="mr-2" /> Search Property
          </button>
        </form>
      </div>
    </div>
  )
}