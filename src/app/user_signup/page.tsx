"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactInfo: ''
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // Reset error and success messages
    setError('');
    setSuccess('');

    // Send data to the server
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess('User registered successfully!');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          contactInfo: ''
        });
      } else {
        throw new Error('Failed to register user.');
      }
    } catch (error) {
      // Assert the error as an Error object
      setError((error as Error).message);
    }
  };

  return (
    <div
      className="pt-20 pb-20 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#5f6f52' }}
    >
      <div
        className="p-8 rounded-lg shadow-lg max-w-md w-full"
        style={{ backgroundColor: '#fefae0' }}
      >
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: '#5f6f52' }}
        >
          Come Join Us!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          
          <div>
            <label
              htmlFor="username"
              className="block"
              style={{ color: '#5f6f52' }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333', 
                backgroundColor: '#ffffff'
              }}
              placeholder="Your Username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block"
              style={{ color: '#5f6f52' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333', 
                backgroundColor: '#ffffff'
              }}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block"
              style={{ color: '#5f6f52' }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333', 
                backgroundColor: '#ffffff'
              }}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block"
              style={{ color: '#5f6f52' }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333', 
                backgroundColor: '#ffffff'
              }}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label
              htmlFor="contactInfo"
              className="block"
              style={{ color: '#5f6f52' }}
            >
              Contact Info
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333', 
                backgroundColor: '#ffffff'
              }}
              placeholder="Your Contact Info"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg shadow"
            style={{
              backgroundColor: '#c4661f',
              color: '#fefae0',
              transition: 'background-color 0.3s',
            }}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p style={{ color: '#5f6f52' }}>
            Already have an account?{' '}
            <Link href="/user_signin">
              <p style={{ color: '#5f6f52', textDecoration: 'underline' }}>
                Sign In
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
