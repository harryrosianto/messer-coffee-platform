"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate login status (you would replace this with real logic)
  useEffect(() => {
    const loggedIn = true; // Change this based on your auth logic
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fefae0] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <p className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-[#5f6f52]' : 'text-[#fefae0]'}`}>meserCoffee</p>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/ai-analysis">
            <p className={`transition-colors duration-300 px-4 py-2 rounded-md ${scrolled ? 'text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]' : 'text-[#fefae0] hover:text-[#fefae0] hover:bg-[#c4661f]'}`}>
              AI-Analysis
            </p>
          </Link>

          {/* Dropdown for Dashboard */}
          <div className="relative">
            <button
              onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
              className={`transition-colors duration-300 px-4 py-2 rounded-md focus:outline-none ${scrolled ? 'text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]' : 'text-[#fefae0] hover:text-[#fefae0] hover:bg-[#c4661f]'}`}
            >
              Dashboard
              <svg
                className={`w-4 h-4 inline-block ml-2 transition-transform duration-300 ${isDashboardDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke={scrolled ? '#333333' : '#fefae0'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDashboardDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#fefae0] border border-[#e0e0e0] shadow-lg rounded-lg">
                <Link href="./farmers-dashboard">
                  <p className="block px-4 py-2 text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]">Farmers Dashboard</p>
                </Link>
                <Link href="/buyers-dashboard">
                  <p className="block px-4 py-2 text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]">Buyers Dashboard</p>
                </Link>
              </div>
            )}
          </div>

          <Link href="/marketplace">
            <p className={`transition-colors duration-300 px-4 py-2 rounded-md ${scrolled ? 'text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]' : 'text-[#fefae0] hover:text-[#fefae0] hover:bg-[#c4661f]'}`}>
              Marketplace
            </p>
          </Link>
          <Link href="/resources">
            <p className={`transition-colors duration-300 px-4 py-2 rounded-md ${scrolled ? 'text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]' : 'text-[#fefae0] hover:text-[#fefae0] hover:bg-[#c4661f]'}`}>
              Resources
            </p>
          </Link>
          <Link href="/contact">
            <p className={`transition-colors duration-300 px-4 py-2 rounded-md ${scrolled ? 'text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]' : 'text-[#fefae0] hover:text-[#fefae0] hover:bg-[#c4661f]'}`}>
              Contact
            </p>
          </Link>

          {/* User Icon with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsUserDropdownOpen(true)}
            onMouseLeave={() => setIsUserDropdownOpen(false)}
          >
            <div
              className={`transition-colors duration-300 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer ${scrolled ? 'text-[#5f6f52]' : 'text-[#fefae0]'} ${isLoggedIn ? 'text-[#c4661f]' : ''}`}
            >
              <FaUser size={20} />
            </div>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#fefae0] border border-[#e0e0e0] shadow-lg rounded-lg">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      // Handle logout logic here
                      setIsLoggedIn(false); // Set logged out status
                    }}
                    className="block w-full text-left px-4 py-2 text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]"
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/user_signin">
                    <p className="block px-4 py-2 text-[#5f6f52] hover:text-[#fefae0] hover:bg-[#c4661f]">Login</p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
