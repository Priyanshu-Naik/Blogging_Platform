import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '/images/Palm-HD-Wallpaper-43930.jpg',
    title: 'Write Your Own Escape',
    subtitle: 'Let your words become windows to faraway lands, untold adventures, and personal awakenings—where every blog is a new journey waiting to unfold.',
  },
  {
    src: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Stories from Every Shore',
    subtitle: 'From sun-drenched beaches to bustling coastal towns, share vibrant moments, cultural insights, and unforgettable experiences that define your journey.',
  },
  {
    src: 'https://images.unsplash.com/photo-1501159771943-cc9027db4d8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Uncover Hidden Thoughts',
    subtitle: 'Peel back the layers of your mind and let your reflections flow—honest, vulnerable, and bold. Explore the power of storytelling in its purest form.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Voices from the Wild',
    subtitle: 'Let your blog echo with the pulse of the wilderness—untamed landscapes, spontaneous detours, and the unforgettable stories they inspire.',
  },
  {
    src: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Midnight Musings',
    subtitle: 'In the stillness of night, when the world sleeps and thoughts come alive, pour your dreams, doubts, and desires into stories that shimmer with introspection.',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="relative w-full mt-16">
      <div className="relative h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <div className="relative w-full h-full">
              <img src={img.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />

              {/* Overlay Text */}
              {index === current && (
                <div className="absolute inset-0 z-30 flex flex-col justify-end items-start text-left text-white px-8 pb-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{img.title}</h2>
                  <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">{img.subtitle}</p>
                </div>
              )}

              {/* Black gradient overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        ))}

        {/* Prev & Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white focus:outline-none"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 6 10">
            <path d="M5 1 1 5l4 4" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white focus:outline-none"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 6 10">
            <path d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}