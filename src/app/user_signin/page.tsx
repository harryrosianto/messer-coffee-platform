"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!router) {
      // Router is not ready yet
      return;
    }
  }, [router]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with actual authentication logic
    if (email === 'admin@mesercoffee.org' && password === '#Admin1234') {
      document.cookie = "auth-token=your-auth-token; path=/;";
      router.push('/farmers-dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
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
          Hola, Fellas!
        </h1>
        <form onSubmit={handleSignIn} className="space-y-6">
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
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333',
                backgroundColor: '#ffffff',
              }}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm"
              style={{
                borderColor: '#cccccc',
                color: '#333333',
                backgroundColor: '#ffffff',
              }}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p style={{ color: '#5f6f52' }}>
            Don't have an account?{' '}
            <Link href="/user_signup">
              <p style={{ color: '#5f6f52', textDecoration: 'underline' }}>
                Sign Up
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
