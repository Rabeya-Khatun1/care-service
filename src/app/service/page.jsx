import { services } from '@/data/service';
import Link from 'next/link';
import React from 'react';

const Service = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Our Services</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-8">Start your healthy life with...</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services?.map(service => (
          <div
            key={service?.serviceId}
            className="shadow-2xl bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{service.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4">
              <p className="text-gray-900 font-semibold">{service.pricing}</p>
              <Link href={`/service/${service?.serviceId}`} className="w-full sm:w-auto">
                <button className="btn btn-primary w-full sm:w-auto">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
