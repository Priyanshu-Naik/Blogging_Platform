import { Pencil, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../../service/api';
import Comments from './comments/BlogComments';

export default function BlogDetails() {
    const { idSlug } = useParams();
    const id = idSlug.split('-')[0];
    const [post, setPost] = useState();
    const navigate = useNavigate();

    const loggedInUsername = JSON.parse(localStorage.getItem('user'))?.username;

    console.log("Logged-in User:", JSON.parse(localStorage.getItem('user')));
    console.log("Username from post:", post?.username);

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
                navigate('/');
            }
        }
    };

    if (!post) {
        return <div className="text-center text-white py-20">Loading...</div>;
    }

    const isAuthor = loggedInUsername === post.username;

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12 mt-16">
            <div className="max-w-4xl mx-auto">
                <img
                    src={`http://localhost:8000/file/${post.image}`}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-xl mb-6"
                />
                <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">{post.category}</div>

                    {isAuthor && (
                        <div className="flex gap-3">
                            <Pencil
                                onClick={() => navigate(`/edit/${post._id}`)}
                                className="text-blue-400 hover:text-blue-500 cursor-pointer"
                                size={20}
                            />
                            <Trash2
                                onClick={handleDelete}
                                className="text-red-500 hover:text-red-600 cursor-pointer"
                                size={20}
                            />
                        </div>
                    )}
                </div>                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="text-sm text-gray-400 mb-8">by {post.username}</div>
                <p className="text-lg leading-relaxed whitespace-pre-line">{post.description}</p>
                <Comments postId={post._id} />

            </div>
        </div>
    );
}