import { ArrowRight, Calendar, Clock, Heart, Link, Shield, Users } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Compassionate Care{' '}
                <span className="text-primary">For Your Loved Ones</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-base-content/70 max-w-xl">
                Providing professional, personalized care services that bring comfort, 
                dignity, and independence to your family members.
              </p>
          
          <Link href="/service" className="">
           Services
          </Link>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 pt-6">
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
            
            {/* Hero Image/Card */}
            <div className="relative">
              <div className="card shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-12">
                        <Heart className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">Start Your Care Journey</h3>
                      <p className="text-sm text-base-content/70">Free consultation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Elderly Care</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Sick People Care</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Baby Care</span>
                    </div>
                  </div>
                  
                  <div className="card-actions justify-end mt-6">
                    <p className='text-xs'>
                      Which type of service do you need?
                    </p>
                    <button className="btn btn-primary btn-block gap-2">
                      <Calendar className="w-4 h-4" />
                      Book now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;