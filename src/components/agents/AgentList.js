// src/components/agents/AgentList.js
import React from 'react'
import AgentCard from './AgentCard'

export default function AgentList() {
  const agents = [
    {
      name: 'Rajiv Singh',
      role: 'Senior Real Estate Agent',
      image: '/clients/Raji_lodha.avif?height=400&width=300',
      email: 'rajiv.singh@realestate.com',
      phone: '+91 9848576799',
      socialMedia: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Niranjan Hiranandani',
      role: 'Property Specialist',
      image: '/clients/Niranjan_Hiranandani.webp?height=400&width=300',
      email: 'Niranjan.hiranandani@realestate.com',
      phone: '+91 888800988',
      socialMedia: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Jitendra Virmani',
      role: 'Commercial Real Estate Expert',
      image: '/clients/Jitendra.webp?height=400&width=300',
      email: 'Jitendra.virmani@realestate.com',
      phone: '+91 9090809099',
      socialMedia: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Omkar Sakhre',
      role: 'Luxury Property Consultant',
      image: '/clients/OIP.jpeg?height=400&width=300',
      email: 'omkar.sakhare@realestate.com',
      phone: '+91 7798461173',
      socialMedia: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </section>
  )
}