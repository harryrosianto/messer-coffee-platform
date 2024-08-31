"use client";
import React, { useState } from 'react';

const BuyersDashboardPage = () => {
  const [formData, setFormData] = useState({
    preferredRoastLevel: '',
    preferredBeanOrigin: '',
    preferredProcessingMethod: '',
    preferredFlavorProfile: '',
    maxPricePerUnit: '',
    preferredBeanSize: '',
    stockAlertThreshold: '',
    preferredDeliveryFrequency: '',
    favoriteBrands: '',
    notes: ''
  });

  const [recommendedCoffee, setRecommendedCoffee] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    try {
      const response = await fetch('/api/recommend-coffee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendedCoffee(data);
      } else {
        throw new Error('Failed to fetch recommendations.');
      }
    } catch (error) {
      setError('An error occurred while fetching recommendations.');
    }
  };

  return (
    <div className="min-h-screen bg-[#5f6f52] pl-8 pr-8">
      <div className="relative bg-[#5f6f52] text-[#fefae0] py-16 px-6">
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold pt-10">Buyers Dashboard</h1>
        </div>
      </div>

      {/* Buyer Preference Form */}
      <div className="p-6 bg-[#fefae0] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#5f6f52] mb-4 text-center">Enter Your Preferences</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-lg font-medium text-[#5f6f52] capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                id={key}
                name={key}
                type={key.includes('price') || key.includes('threshold') ? 'number' : 'text'}
                value={value}
                onChange={handleChange}
                className="mt-1 bg-[#fefae0] block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5f6f52] text-[#fefae0] py-2 px-4 rounded-lg shadow-md hover:bg-[#4a5d40] transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Recommended Coffee Section */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {recommendedCoffee.length > 0 && (
        <div className="p-6 bg-[#fefae0] rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-[#5f6f52] mb-4 text-center">Recommended Coffee</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedCoffee.map((coffee: any, index: number) => (
              <div key={index} className="bg-[#5f6f52] rounded-lg overflow-hidden shadow-md">
                <img src={coffee.image || '/default-product.jpg'} alt={coffee.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-[#fefae0]">{coffee.name}</h2>
                  <p className="text-[#fefae0]">Roast Level: {coffee.roastLevel}</p>
                  <p className="text-[#fefae0]">Price: ${coffee.pricePerUnit}</p>
                  <button
                    className="bg-[#c4661f] text-white py-2 px-4 rounded-lg mt-2"
                    onClick={() => alert(`Added ${coffee.name} to cart`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default BuyersDashboardPage;
