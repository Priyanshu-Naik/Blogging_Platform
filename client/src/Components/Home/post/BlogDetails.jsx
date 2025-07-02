import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ useParams was missing
import { API } from '../../../service/api';

export default function BlogDetails() {
    const { idSlug } = useParams();
    const id = idSlug.split('-')[0];
    const [post, setPost] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await API.getPostById(null, null, null, id); 
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (confirmed) {
            const response = await API.deletePost(null, null, null, id);
            if (response.isSuccess) {
                alert("Post deleted!");
                navigate('/'); // Go to home or posts page
            }
        }
    };

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
                <p className="text-lg leading-relaxed whitespace-pre-line">{post.description}</p>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => navigate(`/edit/${post._id}`)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}