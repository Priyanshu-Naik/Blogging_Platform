import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCards';
import { API } from '../../../service/api';

export default function MoreBlogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getAllPosts();
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-16 min-h-screen bg-gray-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">
        All <span className="text-blue-500">Blogs</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {posts.length > 0 ? (
          posts.map((post, idx) => <BlogCard key={idx} post={post} />)
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
}