// src/components/blog/LatestBlog.js
import React from 'react'
import BlogPost from './BlogPost'

export default function LatestBlog() {
  const posts = [
    {
      title: 'Top 10 Home Buying Tips',
      excerpt: 'Discover the essential tips for first-time home buyers...',
      image: '/placeholder.svg?height=200&width=300',
      date: '2023-05-15',
      author: 'John Doe',
      comments: 5,
    },
    {
      title: 'Investing in Real Estate: A Beginner\'s Guide',
      excerpt: 'Learn the basics of real estate investment and how to get started...',
      image: '/placeholder.svg?height=200&width=300',
      date: '2023-05-10',
      author: 'Jane Smith',
      comments: 3,
    },
    {
      title: 'The Future of Smart Homes',
      excerpt: 'Explore the latest trends in smart home technology and how it\'s shaping the real estate market...',
      image: '/placeholder.svg?height=200&width=300',
      date: '2023-05-05',
      author: 'Mike Johnson',
      comments: 7,
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}