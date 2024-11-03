// src/components/layout/Footer.js
import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Real Estate</h3>
            <p className="text-gray-400">Your trusted partner in finding the perfect property.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Properties', 'Agents', 'Blog', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Real Estate Street</p>
              <p>City, State 12345</p>
              <p className="flex items-center mt-2">
                <Phone size={16} className="mr-2" />
                (123) 456-7890
              </p>
              <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" />
                info@realestate.com
              </p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}