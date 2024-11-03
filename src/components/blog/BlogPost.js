// src/components/blog/BlogPost.js
import React from 'react'
import { Calendar, User, MessageSquare } from 'lucide-react'

export default function BlogPost({ title, excerpt, image, date, author, comments }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Calendar size={16} className="mr-1" /> {date}
          </span>
          <span className="flex items-center">
            <User size={16} className="mr-1" /> {author}
          </span>
          <span className="flex items-center">
            <MessageSquare size={16} className="mr-1" /> {comments} comments
          </span>
        </div>
      </div>
    </div>
  )
}