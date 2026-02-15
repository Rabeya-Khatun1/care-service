import { services } from '@/data/service';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const service = services.find((item) => item.serviceId === id);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "No service found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = params;
  const service = services.find((item) => item.serviceId === id);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center font-bold text-2xl">
        Service Not Found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-primary p-6 sm:p-10 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm uppercase tracking-widest">
              {service.category} Care
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {service.title}
          </h1>
        </div>

        <div className="p-6 sm:p-8 md:p-12 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">
              About this Service
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {service.description}
            </p>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              What's Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing and Action */}
          <div className="pt-6 sm:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-1">
                Pricing Plan
              </p>
              <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary">
                {service.pricing}
              </p>
            </div>
            <Link href={`/booking/${service.serviceId}`} className="w-full md:w-auto">
              <button className="btn btn-primary btn-lg w-full md:w-auto px-6 sm:px-10 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                Book This Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
