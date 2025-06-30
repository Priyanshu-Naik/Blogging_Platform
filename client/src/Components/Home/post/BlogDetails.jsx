import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../../service/api';

export default function BlogDetails() {
    const { idSlug } = useParams();
    const id = idSlug.split('-')[0];
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await API.getPostById(null, null, null, id); 
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) {
        return <div className="text-center text-white py-20">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <img
                    src={`http://localhost:8000/file/${post.image}`}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-xl mb-6"
                />
                <div className="text-sm text-gray-400 mb-2">{post.category}</div>
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="text-sm text-gray-400 mb-8">by {post.username}</div>
                <p className="text-lg leading-relaxed whitespace-pre-line">
                    {post.description}
                </p>
            </div>
        </div>
    );
}