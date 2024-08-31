"use client";
import { useState, useEffect } from 'react';
import { FaWater, FaHeartbeat, FaCalendarDay, FaTemperatureHigh, FaTint, FaSeedling, FaSprayCan, FaUsers } from 'react-icons/fa';
import useRequireAuth from '../hooks/useRequireAuth';

const FarmersDashboardPage = () => {
    const [beanData, setBeanData] = useState({
        name: '',
        origin: '',
        processing_method: '',
        roast_level: '',
        bean_size: '',
        price_per_unit: '',
        stock_quantity: '',
    });

    const [dashboardData, setDashboardData] = useState({
        last_watering_status: '',
        plant_health_status: '',
        day_of_planting: '',
        current_weather_temperature: '',
        current_soil_moisture: '',
        plant_grow_stage: '',
        last_fertilization_status: '',
        treatment_applied: '',
        labor_usage: ''
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch('/farmers-dashboard-data.json');
                const data = await response.json();
                setDashboardData(data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    const handleBeanDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBeanData({ ...beanData, [name]: value });
    };

    const handleSubmit = () => {
        // Logic for handling bean data submission
        console.log('Submitted Bean Data:', beanData);
        // Clear the form after submission or show a success message
        setBeanData({
            name: '',
            origin: '',
            processing_method: '',
            roast_level: '',
            bean_size: '',
            price_per_unit: '',
            stock_quantity: '',
        });
    };

    return (
        <div className="min-h-screen bg-[#5f6f52] pl-8 pr-8">

            <div className="relative bg-[#5f6f52] text-[#fefae0] py-16 px-6">
                <div className="relative container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold pt-10">Farmers Dashboard</h1>
                </div>
            </div>
            {/* Dashboard Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaWater className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Last Watering Status</h3>
                        <p className="text-lg text-[#5f6f52]">Last watering was on: {dashboardData.last_watering_status}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaHeartbeat className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Plant Health Status</h3>
                        <p className="text-lg text-[#5f6f52]">Current health status: {dashboardData.plant_health_status}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaCalendarDay className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Day of Planting</h3>
                        <p className="text-lg text-[#5f6f52]">Planted on: {dashboardData.day_of_planting}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaTemperatureHigh className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Current Weather Temperature</h3>
                        <p className="text-lg text-[#5f6f52]">Current temperature: {dashboardData.current_weather_temperature}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaTint className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Current Soil Moisture</h3>
                        <p className="text-lg text-[#5f6f52]">Soil moisture level: {dashboardData.current_soil_moisture}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaSeedling className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Plant Grow Stage</h3>
                        <p className="text-lg text-[#5f6f52]">Current growth stage: {dashboardData.plant_grow_stage}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaSprayCan className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Last Fertilization Status</h3>
                        <p className="text-lg text-[#5f6f52]">Last fertilization was on: {dashboardData.last_fertilization_status}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaSprayCan className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Treatment Applied</h3>
                        <p className="text-lg text-[#5f6f52]">Last treatment applied: {dashboardData.treatment_applied}</p>
                    </div>
                </div>
                <div className="p-6 bg-[#fefae0] rounded-lg shadow-md flex items-center space-x-4">
                    <FaUsers className="text-4xl text-[#5f6f52]" />
                    <div>
                        <h3 className="text-xl font-bold text-[#5f6f52] mb-2">Labor Usage</h3>
                        <p className="text-lg text-[#5f6f52]">Labor used: {dashboardData.labor_usage}</p>
                    </div>
                </div>
            </div>


            <div className="p-6 bg-[#fefae0] rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#5f6f52] mb-4 text-center">Sell Your Coffee!</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-[#5f6f52]">Coffee Bean Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={beanData.name}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter coffee bean name"
                        />
                    </div>
                    <div>
                        <label htmlFor="origin" className="block text-lg font-medium text-[#5f6f52]">Origin</label>
                        <input
                            id="origin"
                            name="origin"
                            type="text"
                            value={beanData.origin}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter origin"
                        />
                    </div>
                    <div>
                        <label htmlFor="processing_method" className="block text-lg font-medium text-[#5f6f52]">Processing Method</label>
                        <input
                            id="processing_method"
                            name="processing_method"
                            type="text"
                            value={beanData.processing_method}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter processing method"
                        />
                    </div>
                    <div>
                        <label htmlFor="roast_level" className="block text-lg font-medium text-[#5f6f52]">Roast Level</label>
                        <input
                            id="roast_level"
                            name="roast_level"
                            type="text"
                            value={beanData.roast_level}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter roast level"
                        />
                    </div>
                    <div>
                        <label htmlFor="bean_size" className="block text-lg font-medium text-[#5f6f52]">Bean Size</label>
                        <input
                            id="bean_size"
                            name="bean_size"
                            type="text"
                            value={beanData.bean_size}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter bean size"
                        />
                    </div>
                    <div>
                        <label htmlFor="price_per_unit" className="block text-lg font-medium text-[#5f6f52]">Price Per Unit</label>
                        <input
                            id="price_per_unit"
                            name="price_per_unit"
                            type="text"
                            value={beanData.price_per_unit}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter price per unit"
                        />
                    </div>
                    <div>
                        <label htmlFor="stock_quantity" className="block text-lg font-medium text-[#5f6f52]">Stock Quantity</label>
                        <input
                            id="stock_quantity"
                            name="stock_quantity"
                            type="number"
                            value={beanData.stock_quantity}
                            onChange={handleBeanDataChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter stock quantity"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-[#5f6f52] text-white py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FarmersDashboardPage;
