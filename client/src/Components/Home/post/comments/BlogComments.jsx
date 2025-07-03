import React, { useEffect, useState } from 'react';
import { API } from '../../../../service/api';
import { User } from 'lucide-react';

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editingComment, setEditingComment] = useState(null);
    const [editedText, setEditedText] = useState('');
    const username = JSON.parse(localStorage.getItem('user'))?.username;

    const fetchComments = async () => {
        const response = await API.getCommentsByPostId(null, null, null, postId);
        if (response.isSuccess) {
            setComments(response.data);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const handleAddComment = async () => {
        if (!newComment.trim()) return;

        const commentData = {
            postId,
            text: newComment,
            username
        };

        const response = await API.addComment(commentData);
        if (response.isSuccess) {
            const addedComment = response.data.comment; // assuming backend sends the new comment object
            setComments(prev => [addedComment, ...prev]); // instantly show the new comment
            setNewComment(''); // clear the textarea
        }
    };

    const handleEdit = (comment) => {
        setEditingComment(comment._id);
        setEditedText(comment.text);
    };

    const handleUpdate = async () => {
        const response = await API.updateComment({ text: editedText }, null, null, editingComment);
        if (response.isSuccess) {
            setEditingComment(null);
            setEditedText('');
            fetchComments();
        }
    };

    const handleDelete = async (commentId) => {
        const confirmed = window.confirm('Are you sure you want to delete this comment?');
        if (!confirmed) return;

        const response = await API.deleteComment(null, null, null, commentId);
        if (response.isSuccess) {
            fetchComments();
        }
    };

    return (
        <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>

            {comments.length === 0 ? (
                <p className="text-gray-400">No comments yet.</p>
            ) : (
                <ul className="space-y-4">
                    {comments.map(comment => (
                        <li key={comment._id} className="bg-gray-800 p-4 rounded">
                            {editingComment === comment._id ? (
                                <div>
                                    <textarea
                                        className="w-full p-2 rounded bg-gray-700 text-white"
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                    />
                                    <div className="flex justify-end gap-2 mt-1">
                                        <button onClick={handleUpdate} className="text-green-400 text-xs">Save</button>
                                        <button onClick={() => setEditingComment(null)} className="text-gray-400 text-xs">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className="text-sm text-gray-300">{comment.text}</p>
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>– {comment.username}</span>
                                        <span>{new Date(comment.createdAt).toLocaleString()}</span>
                                    </div>

                                    {username === comment.username && (
                                        <div className="flex justify-end gap-4 mt-2">
                                            <button
                                                onClick={() => handleEdit(comment)}
                                                className="text-yellow-400 hover:text-yellow-300 text-xs"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(comment._id)}
                                                className="text-red-500 hover:text-red-400 text-xs"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {username && (
                <div className="mt-6">
                    <div className="flex gap-2 items-start">
                        <User className="text-gray-400 mt-3" size={24} />
                        <textarea
                            className="w-full p-3 rounded bg-gray-800 text-white"
                            rows="3"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                            onClick={handleAddComment}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded h-fit"
                        >
                            Post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}