import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Category() {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            type: 'adventure',
            name: 'Adventure',
            description: 'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget.',
            image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            type: 'technology',
            name: 'Technology',
            description: 'Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.',
            image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            type: 'lifestyle',
            name: 'Lifestyle',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://plus.unsplash.com/premium_photo-1725983645487-5ea02c65ecaf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            type: 'music',
            name: 'Music',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1488376986648-2512dfc6f736?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            type: 'food',
            name: 'Food & Recipes',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 6,
            type: 'film',
            name: 'Film & TV',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1518930107639-f4538ad82a00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 7,
            type: 'news',
            name: 'News & Politics',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1635942046031-041e9baea8bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-screen-xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Article categories</h2>
                    <button
                        onClick={() => navigate('/more-blogs')}
                        className="text-white hover:text-black text-sm font-medium border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 ">
                        Browse all articles
                    </button>
                </div>

                {/* Categories - Horizontal Scroll */}
                <div className="flex overflow-x-auto gap-4 whitespace-nowrap scrollbar-hide py-2">
                    {categories.map((cat) => (
                        <Link key={cat.id} to={`/category/${cat.type}`} className="inline-block">
                            <div className="w-[280px] mx-auto rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 relative group">
                                <img src={cat.image} alt={cat.name} className="w-full h-90 object-cover" />

                                {/* Gradient Overlay and Text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end text-white">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold">{cat.name}</h3>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm mt-1 opacity-80">
                                        {cat.description?.split(' ').slice(0, 15).join(' ')}{cat.description?.split(' ').length > 15 && '...'}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
