// BlogCard.js
import React from 'react';

export default function BlogCard({ post }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-105 duration-300 h-full">
      <img
        src={`http://localhost:8000/file/${post.image}`}
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
        <div className="text-sm opacity-80 mb-1">{post.category}</div>
        <div className="text-lg font-semibold leading-tight">{post.title}</div>
        <div className="text-sm opacity-80 mb-1">{post.username}</div>
        <div className="text-sm opacity-80 mb-1 line-clamp-2">{post.description}</div>
        <button className="mt-2 px-3 py-1 text-sm bg-white text-black rounded-md w-fit">
          View Details
        </button>
      </div>
    </div>
  );
}