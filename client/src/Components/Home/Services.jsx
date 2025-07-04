import React from 'react';

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#3B82F6] text-white min-h-screen mt-16">
      {/* Header Banner */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Services Banner"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* Section 1: Content Creation */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1675518334039-960154e902c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post creation"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">✍️ Effortless Post Creation</h2>
            <p>
              Create and manage blog posts with a smooth and minimal editor. Whether it's a short thought or a long-form article, our post creation system is designed for flexibility and ease.
            </p>
          </div>
        </section>

        {/* Section 2: Image/File Uploads */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://plus.unsplash.com/premium_photo-1697565995475-1dbc4c434709?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="File uploads"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">📁 Image & File Uploads</h2>
            <p>
              Add personality to your posts with built-in image and file uploading. Powered by MongoDB GridFS and Busboy, your media is stored safely and loads fast.
            </p>
          </div>
        </section>

        {/* Section 3: Category System */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Categories"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">🗂️ Organized by Categories</h2>
            <p>
              Easily navigate and discover content through a well-structured category system. Blog posts can be filtered based on topics like tech, lifestyle, coding, and more.
            </p>
          </div>
        </section>

        {/* Section 4: User Accounts */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1590065707046-4fde65275b2e?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User system"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">👤 Secure User System</h2>
            <p>
              Register and log in to create, edit, and manage your blogs. Each user has access to their personalized blog dashboard with editing tools and post history.
            </p>
          </div>
        </section>

        {/* Section 5: Responsive UI */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Responsive design"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">📱 Responsive Design</h2>
            <p>
              Our platform is fully responsive — optimized for desktops, tablets, and smartphones. No matter your device, enjoy a smooth reading and writing experience.
            </p>
          </div>
        </section>

        {/* Section 6: Performance */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Performance"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-3">⚡ Fast & Lightweight</h2>
            <p>
              Built using the MERN stack, our blog platform ensures fast load times and smooth user interactions. It’s optimized for performance and scalability.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
