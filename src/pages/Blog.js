// src/pages/Blog.js
import React from 'react'
import LatestBlog from '../components/blog/LatestBlog'

export default function Blog() {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <LatestBlog />
        <LatestBlog />
      </div>
    </main>
  )
}