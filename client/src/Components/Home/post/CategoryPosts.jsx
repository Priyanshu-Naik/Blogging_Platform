import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from './BlogCards';
import { API } from '../../../service/api'; 

export default function CategoryPosts() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getAllPosts();
      if (response.isSuccess) {
        const filtered = response.data.filter(
          post => post.category.toLowerCase() === category.toLowerCase()
        );
        setPosts(filtered);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 mt-16">
      <h1 className="text-4xl font-bold mb-10">
        {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {posts.length > 0 ? (
          posts.map((post, idx) => <BlogCard key={idx} post={post} />)
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg">
            No blog found in this category.
          </div>
        )}
      </div>
    </div>
  );
}