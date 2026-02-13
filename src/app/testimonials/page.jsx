import { Quote, Star } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
    return (
        <section className="">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Families Are Saying About Our Care
            </h2>
            <p className="text-base-content/70">
              Real stories from families who trusted us with their loved ones' care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-current text-warning" 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-base-content/80 relative z-10 pl-6 pt-2">
                    "The caregivers from this service have been absolutely wonderful 
                    with my mother. They're patient, kind, and truly care about her 
                    wellbeing. I finally have peace of mind."
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar placeholder">
                    <div className="bg-primary/20 text-primary rounded-full w-12">
                      <span>SD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Davidson</h4>
                    <p className="text-sm text-base-content/60">Daughter of Mary</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-current text-warning" 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-base-content/80 relative z-10 pl-6 pt-2">
                    "Professional, compassionate, and reliable. They've become like 
                    family to us. Highly recommend their companion care services!"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar placeholder">
                    <div className="bg-primary/20 text-primary rounded-full w-12">
                      <span>RJ</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Johnson</h4>
                    <p className="text-sm text-base-content/60">Son of William</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-current text-warning" 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-base-content/80 relative z-10 pl-6 pt-2">
                    "The home support team has been amazing. They keep everything 
                    organized and my father feels comfortable and respected. 
                    Excellent service!"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar placeholder">
                    <div className="bg-primary/20 text-primary rounded-full w-12">
                      <span>MC</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Chen</h4>
                    <p className="text-sm text-base-content/60">Daughter of David</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
};

export default Testimonials;