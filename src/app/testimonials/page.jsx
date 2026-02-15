import { Quote, Star } from 'lucide-react';
import React from 'react';

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Sarah Davidson",
      relation: "Daughter of Mary",
      initials: "SD",
      text: "The caregivers from this service have been absolutely wonderful with my mother. They're patient, kind, and truly care about her wellbeing. I finally have peace of mind.",
    },
    {
      id: 2,
      name: "Robert Johnson",
      relation: "Son of William",
      initials: "RJ",
      text: "Professional, compassionate, and reliable. They've become like family to us. Highly recommend their companion care services!",
    },
    {
      id: 3,
      name: "Maria Chen",
      relation: "Daughter of David",
      initials: "MC",
      text: "The home support team has been amazing. They keep everything organized and my father feels comfortable and respected. Excellent service!",
    },
  ];

  return (
    <section className="py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            What Families Are Saying About Our Care
          </h2>
          <p className="text-sm sm:text-base text-base-content/70">
            Real stories from families who trusted us with their loved ones' care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-warning"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 sm:w-8 h-6 sm:h-8 text-primary/20" />
                  <p className="text-base sm:text-sm text-base-content/80 relative z-10 pl-6 pt-2 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <div className="avatar placeholder">
                  <div className="bg-primary/20 text-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-sm font-semibold">
                    {testimonial.initials}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-base-content/60">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
