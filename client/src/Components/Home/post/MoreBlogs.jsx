
import React from 'react';
import BlogCard from './BlogCards';

const moreBlogs = [
  {
    category: 'Sport',
    title: '100 kilometers by bicycle in the mountains',
    image: 'https://source.unsplash.com/400x600/?cycling,mountain',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2',
  },
  {
    category: 'Travel',
    title: 'Where to go this summer?',
    image: 'https://source.unsplash.com/400x600/?forest,road',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2',
  },
  // You can also re-include the previous 4 if you want full archive
];

export default function MoreBlogs() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">More <span className="text-blue-500">Blogs</span></h1>

      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-6 gap-6 auto-rows-[200px]">
        {moreBlogs.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
