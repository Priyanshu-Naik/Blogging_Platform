import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accesstoken');
    console.log('Token after logout:', localStorage.getItem('accesstoken'));
    navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BlogNest
          </span>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logout Button */}
        <div className="hidden md:flex md:order-2">
          <button
            onClick={handleLogout}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
          id="navbar"
        >
          <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 ${location.pathname === '/'
                  ? 'text-blue-700 font-semibold dark:text-blue-400'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 ${location.pathname === '/about'
                  ? 'text-blue-700 font-semibold dark:text-blue-400'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 ${location.pathname === '/services'
                  ? 'text-blue-700 font-semibold dark:text-blue-400'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 ${location.pathname === '/contact'
                    ? 'text-blue-700 font-semibold dark:text-blue-400'
                    : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
              >
                Contact
              </Link>
            </li>
            {/* Mobile-only logout button */}
            <li className="md:hidden">
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-3 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}