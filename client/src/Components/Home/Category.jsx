import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';


export default function Category() {
    const categories = [
        {
            id: 1,
            type: 'travel',
            name: 'Travel',
            description: 'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget.',
            image: '/images/travel.jpg'
        },
        {
            id: 2,
            type: 'adventure',
            name: 'Adventure',
            description: 'Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            type: 'gear',
            name: 'Gear',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            type: 'music',
            name: 'Music',
            description: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            image: 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&w=800&q=80'
        },
    ];

    return (
        <section className="px-6 py-12">
            <div className="max-w-screen-xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Article categories</h2>
                    <Link to='/'> 
                        <button className="text-white hover:text-black text-sm font-medium border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 ">
                            Browse all articles
                        </button>
                    </Link>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    {categories.map((cat) => (
                        <Link key={cat.id} to={`/?category=${cat.type}`}>
                            <div className="relative w-70 mx-auto rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                                <img src={cat.image} alt={cat.name} className="w-full h-90 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-4 rounded-t-md">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">{cat.name}</h3>
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                        <p className="text-sm mt-2">{cat.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
