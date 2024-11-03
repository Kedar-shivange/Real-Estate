// src/components/agents/AgentCard.js
import React from 'react'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function AgentCard({ name, role, image, email, phone, socialMedia }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <div className="flex items-center mb-2">
          <Mail size={16} className="text-blue-600 mr-2" />
          <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600">{email}</a>
        </div>
        <div className="flex items-center mb-4">
        
          <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-600">{phone}</a>
        </div>
        <div className="flex justify-center space-x-4">
          {socialMedia.facebook && (
            <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <Facebook size={20} />
            </a>
          )}
          {socialMedia.twitter && (
            <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <Twitter size={20} />
            </a>
          )}
          {socialMedia.linkedin && (
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}