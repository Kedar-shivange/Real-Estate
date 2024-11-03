// src/pages/Contact.js
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 border rounded" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="mr-2" /> info@realestate.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" /> +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" /> 123 Real Estate Street, City, State 12345
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}