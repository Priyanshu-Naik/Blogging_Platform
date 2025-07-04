import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen mt-16 text-white bg-gradient-to-b from-[#111827] to-[#3B82F6]">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blogging Banner"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            About Our Blogging Platform
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🌟 Our Mission</h2>
          <p>
            We aim to empower creators, storytellers, and thinkers with an intuitive, feature-rich
            blogging platform. Whether you're a seasoned writer or a beginner, we provide the tools
            to grow your voice and presence online.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">💡 Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Easy Post Creation:</strong> Markdown-rich editor with image uploads</li>
            <li><strong>Category Browsing:</strong> Organized by genres and tags</li>
            <li><strong>User Auth:</strong> Secure login and user-specific dashboards</li>
            <li><strong>Responsive UI:</strong> Works beautifully on all devices</li>
          </ul>
        </section>

        {/* Tech Stack with Image */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🛠️ Tech Stack</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tech Stack"
              className="rounded-xl w-full md:w-1/2 shadow-md"
            />
            <ul className="list-disc list-inside space-y-2 md:w-1/2">
              <li><strong>Frontend:</strong> React.js, MUI, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>Uploads:</strong> GridFS and Busboy</li>
            </ul>
          </div>
        </section>

        {/* Creator Section with Image */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">👥 Meet the Creator</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creator Portrait"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
            />
            <p className="md:w-2/3">
              Hi, I’m <strong>Priyanshu Naik</strong> — a full-stack developer passionate about building digital experiences.
              This platform merges my love for storytelling and technology, offering a creative space for users worldwide.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🔮 What’s Next?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comments system</li>
            <li>Analytics for creators</li>
            <li>Progressive Web App (PWA) support</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">📬 Get in Touch</h2>
          <p>
            Want to collaborate or provide feedback? Reach out at <a
              href="mailto:your.email@example.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              your.email@example.com
            </a> or connect on LinkedIn/GitHub.
          </p>
        </section>
      </div>
    </div>
  );
}