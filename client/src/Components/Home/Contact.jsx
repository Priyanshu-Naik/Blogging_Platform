import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#3B82F6] text-white min-h-screen mt-16">
      {/* Hero Banner */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Text */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">We’d love to hear from you!</h2>
          <p className="text-gray-300">
            Whether you have questions, suggestions, or feedback — feel free to reach out using the form below.
          </p>
        </section>

        {/* Contact Info */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">📬 Contact Details</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a></li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Location:</strong> Bhubaneswar, India</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">github.com/yourusername</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 rounded-xl p-6 shadow-md space-y-4">
            <h3 className="text-2xl font-semibold mb-4">📩 Send a Message</h3>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Name</label>
              <input type="text" className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input type="email" className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Message</label>
              <textarea rows="4" className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
