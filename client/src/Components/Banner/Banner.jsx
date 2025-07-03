import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '/images/Palm-HD-Wallpaper-43930.jpg',
    title: 'Welcome to Paradise',
    subtitle: 'Discover breathtaking destinations and adventures around the world.',
  },
  {
    src: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tropical Escape',
    subtitle: 'Relax in the crystal clear waters of Saint Lucia.',
  },
  {
    src: 'https://images.unsplash.com/photo-1501159771943-cc9027db4d8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mystical Caverns',
    subtitle: 'Explore the world beneath with awe and wonder.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Outback Adventure',
    subtitle: 'Journey into the heart of Australia.',
  },
  {
    src: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Midnight Drive',
    subtitle: 'Chase the stars on an endless road.',
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
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <img src={img.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />

              {/* Overlay Text */}
              {index === current && (
                <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center text-white px-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{img.title}</h2>
                  <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">{img.subtitle}</p>
                </div>
              )}

              {/* Vignette border */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="w-full h-full rounded-lg bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)]" />
              </div>
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