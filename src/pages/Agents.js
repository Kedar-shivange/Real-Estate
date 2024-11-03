// src/pages/Agents.js
import React from 'react'
import AgentList from '../components/agents/AgentList'

export default function Agents() {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Agents</h1>
        <AgentList />
      </div>
    </main>
  )
}