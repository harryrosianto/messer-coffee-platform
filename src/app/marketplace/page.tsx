"use client";

import React, { useEffect, useState } from 'react';
import marketCoffee from './marketCoffee.png';
import { FaPercentage, FaShippingFast } from 'react-icons/fa';

// Define the Product type
type Product = {
    image: string;
    name: string;
    roast_level: string;
    price_per_unit: string;
};

const MarketPage = () => {
    // Use the Product type for the products state
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div style={{ backgroundColor: '#fefae0' }}>
            {/* Header Section */}
            <div style={{ backgroundImage: `url(${marketCoffee.src})`, display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'left', maxWidth: '100%', minHeight: '100vh', maxHeight: '100vh', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', paddingRight: '20rem', paddingLeft: '4rem', fontWeight: 'bold', color: '#fefae0', marginBottom: '1rem', maxWidth: '70%' }}>
                    Connecting Farmers with End-Users
                </h1>
                <p style={{ color: '#fefae0', paddingRight: '20rem', paddingLeft: '4rem', marginBottom: '4rem', maxWidth: '70%' }}>
                    Discover the freshest coffee beans directly from local farmers, delivered to your doorstep.
                </p>
                <div style={{ display: 'flex', paddingLeft: '4rem', justifyContent: 'left', gap: '2rem' }}>
                    <p style={{ color: '#fefae0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaPercentage />
                        Save up to 30%
                    </p>
                    <p style={{ color: '#fefae0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaShippingFast />
                        Shipping free
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <section style={{ paddingLeft: '4rem', paddingRight: '4rem', margin: '2rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fefae0', border: '1px solid #ddd', borderRadius: '0.5rem', cursor: 'pointer', color: '#5f6f52' }}>All Coffees</button>
                    <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fefae0', border: '1px solid #ddd', borderRadius: '0.5rem', cursor: 'pointer', color: '#5f6f52' }}>Light Roast</button>
                    <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fefae0', border: '1px solid #ddd', borderRadius: '0.5rem', cursor: 'pointer', color: '#5f6f52' }}>Medium Roast</button>
                    <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fefae0', border: '1px solid #ddd', borderRadius: '0.5rem', cursor: 'pointer', color: '#5f6f52' }}>Dark Roast</button>
                </div>
                <div>
                    <select style={{ backgroundColor: '#fefae0', padding: '0.75rem 1.5rem', border: '1px solid #ddd', borderRadius: '0.5rem', cursor: 'pointer', color: '#5f6f52' }}>
                        <option>Sort by</option>
                        <option>Best Sellers</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </section>

            {/* Products Section */}
            <section style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                {products.length > 0 ? products.map((product, index) => (
                    <div key={index} style={{ backgroundColor: '#5f6f52', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem' }}>
                            <h2 style={{ fontSize: '1.25rem', color: '#fefae0' }}>{product.name}</h2>
                            <p style={{ color: '#fefae0' }}>{product.roast_level} roast</p>
                            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fefae0' }}>{product.price_per_unit}</p>
                            <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#c4661f', color: '#ffffff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )) : (
                    <p style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem', color: '#5f6f52' }}>No products available</p>
                )}
            </section>
        </div>
    );
};

export default MarketPage;
