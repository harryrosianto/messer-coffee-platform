"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const AiAnalysisPage = () => {
    const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
    const [formData, setFormData] = useState<any>({});
    const [carouselData, setCarouselData] = useState<any[]>([]);
    const [formFields, setFormFields] = useState<any[]>([]);
    const formRef = useRef<HTMLDivElement | null>(null);

    // Fetch data for the carousel
    useEffect(() => {
        fetch('/analysis.json')
            .then(response => response.json())
            .then(data => setCarouselData(data.analysis_data))
            .catch(error => console.error('Error fetching analysis data:', error));
    }, []);

    // Fetch form data based on selected analysis
    useEffect(() => {
        if (selectedAnalysis) {
            fetch('/data.json')
                .then(response => response.json())
                .then(data => {
                    const selected = data.analysisTypes.find((a: any) => a.id === selectedAnalysis);
                    setFormFields(selected ? selected.formFields : []);
                })
                .catch(error => console.error('Error fetching form data:', error));
        }
    }, [selectedAnalysis]);

    const handleSubmit = async () => {
        const formattedData = {
            [selectedAnalysis ?? ""]: [formData]
        };
    
        try {
            const response = await fetch('/api/analysis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    analysisType: selectedAnalysis, 
                    ...formattedData
                }),
            });
    
            const result = await response.json();
            console.log('Server response:', result);
    
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    
    const handleInputChange = (fieldId: string, value: any) => {
        setFormData({ ...formData, [fieldId]: value });
    };

    const handleChoose = (analysisType: string) => {
        setSelectedAnalysis(analysisType);
        setFormData({}); // Reset the form data when changing the analysis type
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderForm = () => {
        if (!formFields.length) return null;

        return (
            <div className={`p-6 ${selectedAnalysis === 'pestDiseaseManagement' ? 'bg-[#5f6f52]' : 'bg-[#5f6f52]'} rounded-lg`}>
                {formFields.map((field: any, index: number) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-2 text-lg font-medium text-[#fefae0]">{field.label}</label>
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            onChange={(e) => handleInputChange(field.label, e.target.value)}
                            value={formData[field.label] || ''} // Set the value from formData state
                        />
                    </div>
                ))}
                <button
                    onClick={handleSubmit}
                    className={`mt-4 px-4 py-2 ${selectedAnalysis === 'pestDiseaseManagement' ? 'bg-[#fefae0] text-[#5f6f52]' : 'bg-[#fefae0] text-[#5f6f52]'} rounded-lg`}
                >
                    Submit
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-[#5f6f52] text-[#fefae0] py-16 px-6">
                <div className="relative container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold pt-10">Choose Your Analysis</h1>
                </div>
            </div>

            {/* Carousel for Choosing Analysis */}
            <div className="flex-1 bg-[#fefae0]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {carouselData.map((analysis) => (
                        <SwiperSlide key={analysis.id}>
                            <div className="flex flex-col items-center p-6">
                                <img src={analysis.image} alt={analysis.title} className="w-64 h-64 object-cover rounded-full mb-4" />
                                <h2 className="text-2xl font-bold text-[#5f6f52] text-center">{analysis.title}</h2>
                                <p className="mt-2 text-lg text-[#5f6f52] text-center">{analysis.description}</p>
                                <button
                                    onClick={() => handleChoose(analysis.id)}
                                    className="mt-4 px-4 py-2 bg-[#5f6f52] text-white rounded-lg"
                                >
                                    Choose
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Conditional Form Rendering */}
                {selectedAnalysis && (
                    <div className="p-6 bg-[#fefae0] rounded-lg mt-8" ref={formRef}>
                        {renderForm()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AiAnalysisPage;
