import { ArrowRight, Clock, Link, Shield, Star, Users } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
    
      <section className="py-5 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="badge badge-primary badge-lg px-4 py-3">About Us</div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Providing Excellence in Care Services
              </h2>
              
              <p className="text-base-content/70 leading-relaxed">
                We are dedicated to enhancing the quality of life for individuals 
                who need assistance with daily activities. Our team of certified 
                caregivers brings compassion, professionalism, and expertise to 
                every client relationship.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">500+ Clients</h4>
                    <p className="text-sm text-base-content/70">Trusted by families</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Star className="w-5 h-5 text-primary" fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-semibold">4.9/5 Rating</h4>
                    <p className="text-sm text-base-content/70">From 1,000+ reviews</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">100% Verified</h4>
                    <p className="text-sm text-base-content/70">Background checked staff</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">15+ Years</h4>
                    <p className="text-sm text-base-content/70">Average experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card bg-base-200 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-3xl">15+</h3>
                    <p className="text-sm text-base-content/70">Years of Service</p>
                  </div>
                </div>
                <div className="card bg-base-200 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-3xl">50k+</h3>
                    <p className="text-sm text-base-content/70">Care Hours</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card bg-primary text-primary-content shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-3xl">98%</h3>
                    <p className="text-sm opacity-90">Client Satisfaction</p>
                  </div>
                </div>
                <div className="card bg-base-200 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-3xl">200+</h3>
                    <p className="text-sm text-base-content/70">Care Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;