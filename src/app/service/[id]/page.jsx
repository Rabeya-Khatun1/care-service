import { services } from '@/data/service';
import { CheckCircle, Clock, Tag } from 'lucide-react'; 
import React from 'react';

const ServiceDetails = async ({ params }) => {
    const { id } = await params;
    
 
    const service = services.find((item) => item.serviceId === id);

    if (!service) {
        return (
            <div className="h-screen flex items-center justify-center font-bold text-2xl">
                Service Not Found!
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-5">
            {}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="bg-primary p-10 text-white">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest">
                            {service.category} Care
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                </div>

                <div className="p-8 md:p-12 space-y-8">
                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">About this Service</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {service.description}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">What's Included</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature) => (
                                <div key={feature.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="text-primary font-bold">✓</div>
                                    <span className="text-gray-700 font-medium">{feature.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Pricing Plan</p>
                            <p className="text-3xl font-bold text-primary">{service.pricing}</p>
                        </div>
                        <button className="btn btn-primary btn-lg px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
                            Book This Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;