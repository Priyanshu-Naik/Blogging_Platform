import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
    const slug = `/post/${post._id}-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    return (
        <Link to={slug}>
            <div className="relative rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-105 duration-300 h-full cursor-pointer">
                <img
                    src={`http://localhost:8000/file/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
                    <div className="text-sm opacity-80 mb-1">{post.category}</div>
                    <div className="text-lg font-semibold leading-tight">{post.title}</div>
                    <div className="text-sm opacity-80 mb-1">{post.username}</div>
                    <div className="text-sm opacity-80 mb-1">
                        {post.description?.split(' ').slice(0, 20).join(' ')}{post.description?.split(' ').length > 20 && '...'}
                    </div>
                    <div className="mt-2 px-3 py-1 text-sm bg-white text-black rounded-md w-fit">
                        View Details
                    </div>
                </div>
            </div>
        </Link>
    );
}