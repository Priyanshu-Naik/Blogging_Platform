import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCards';
import { useEffect, useState } from 'react';
import { API } from '../../../service/api';

export default function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts();
            if (response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData()
    }, [])

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
            <h1 className="text-4xl font-bold mb-10">Blog <span className="text-blue-500">Cards</span></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                {posts && posts.length > 0 ? (
                    posts.slice(0, 4).map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400 text-lg">
                        No blog to be found
                    </div>
                )}
            </div>

            <div className="text-center mt-10">
                <button
                    onClick={() => navigate('/more-blogs')}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
                >
                    See More Blogs
                </button>
            </div>
        </div>
    );
} 