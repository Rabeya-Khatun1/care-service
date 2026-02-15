import { ArrowRight, Calendar, Clock, Heart, Shield, Users } from 'lucide-react';
import React from 'react';
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative">
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            Compassionate Care{' '}
                            <span className="text-primary">For Your Loved Ones</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-base-content/70 max-w-xl">
                            Providing professional, personalized care services that bring comfort, 
                            dignity, and independence to your family members.
                        </p>

                        <Link href="/service" className="btn btn-primary w-full sm:w-auto">
                            Services
                        </Link>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">24/7 Availability</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">Experienced Caregivers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Card Section */}
                    <div className="relative">
                        <div className="card shadow-xl w-full sm:max-w-md mx-auto lg:mx-0">
                            <div className="card-body">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-primary-content rounded-full w-12 h-12 flex items-center justify-center">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm sm:text-base">Start Your Care Journey</h3>
                                        <p className="text-xs sm:text-sm text-base-content/70">Free consultation</p>
                                    </div>
                                </div>

                                <div className="space-y-2 sm:space-y-4">
                                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                                        <div className="w-2 h-2 bg-success rounded-full"></div>
                                        <span>Elderly Care</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                                        <div className="w-2 h-2 bg-success rounded-full"></div>
                                        <span>Sick People Care</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                                        <div className="w-2 h-2 bg-success rounded-full"></div>
                                        <span>Baby Care</span>
                                    </div>
                                </div>

                                <div className="card-actions justify-end mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2">
                                    <p className='text-xs sm:text-sm'>Which type of service do you need?</p>
                                    <Link href={'/service'} className="w-full sm:w-auto">
                                        <button className="btn btn-primary btn-block gap-2 w-full sm:w-auto">
                                            <Calendar className="w-4 h-4" />
                                            Book now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -z-10 -top-6 -right-6 w-56 sm:w-72 h-56 sm:h-72 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
