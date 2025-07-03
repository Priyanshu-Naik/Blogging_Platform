import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../../service/api';

export default function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', description: '', category: '', image: '' });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getPostById(null, null, null, id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);

        const formData = new FormData();
        formData.append('file', uploadedFile);

        const response = await API.uploadFile(formData);
        console.log("Uploaded image response: ", response.data);
        if (response.isSuccess) {
            setPost({ ...post, image: response.data.filename });
        }
    };

    const handleUpdate = async () => {
        const response = await API.updatePost(post, null, null, id);
        if (response.isSuccess) {
            alert('Post updated!');
            navigate(`/post/${post._id}-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
            <div className="max-w-2xl mx-auto space-y-6">
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full p-3 rounded bg-gray-800 text-white"
                />
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                    <select
                        name="category"
                        required
                        value={post.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                    </select>
                </div>
                <textarea
                    name="description"
                    value={post.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-3 rounded bg-gray-800 text-white h-60"
                ></textarea>

                <div>
                    <label className="block mb-1 text-sm">Change Image</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="text-white"
                    />
                    {post.image && (
                        <img
                            src={`http://localhost:8000/file/${post.image}`}
                            alt="Current"
                            className="mt-4 h-40 object-cover rounded"
                        />
                    )}
                </div>

                <button
                    onClick={handleUpdate}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                >
                    Update Post
                </button>
            </div>
        </div>
    );
}