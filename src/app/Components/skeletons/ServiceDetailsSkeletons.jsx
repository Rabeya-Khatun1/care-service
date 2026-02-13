import React from 'react';

const ServiceDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-5">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Skeleton */}
                <div className="bg-gray-200 p-10 animate-pulse">
                    <div className="h-6 w-24 bg-gray-300 rounded-full mb-4"></div>
                    <div className="h-12 w-3/4 bg-gray-300 rounded-lg"></div>
                </div>

                <div className="p-8 md:p-12 space-y-8">
                    {/* Description Skeleton */}
                    <div className="space-y-3">
                        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                        <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                    </div>

                    {/* Features Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-16 bg-gray-50 border border-gray-100 rounded-xl animate-pulse"></div>
                        ))}
                    </div>

                    {/* Footer Skeleton */}
                    <div className="pt-8 border-t flex justify-between items-center">
                        <div className="space-y-2">
                            <div className="h-4 w-20 bg-gray-100 rounded"></div>
                            <div className="h-8 w-32 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-12 w-40 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsSkeleton;