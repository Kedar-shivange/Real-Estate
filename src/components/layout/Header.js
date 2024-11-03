// src/components/layout/Header.js
import React from 'react'
import { Phone, Mail, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><Phone size={16} className="mr-2" /> +91 7066640359</span>
          <span className="flex items-center"><Mail size={16} className="mr-2" /> kedar123@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center"><User size={16} className="mr-2" /> Register</button>
          <button className="flex items-center"><User size={16} className="mr-2" /> Login</button>
        </div>
      </div>
    </header>
  )
}