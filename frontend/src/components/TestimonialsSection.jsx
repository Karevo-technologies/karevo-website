import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Karevo has transformed how I manage my health records. Now my doctors have instant access to my complete history!",
      author: "Dr. Aisha Bello",
      role: "Pediatrician",
      rating: 5,
    },
    {
      quote:
        "The drug verification feature saved us from a major medication error. Essential tool for every pharmacy.",
      author: "Pharm. Chinedu Okoye",
      role: "Lead Pharmacist",
      rating: 5,
    },
    {
      quote:
        "Booking appointments is now seamless. No more long queues or missed appointments.",
      author: "Fatima Ibrahim",
      role: "Patient",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway">
            Loved by Healthcare Heroes
          </h2>
          <p className="text-xl text-gray-600 font-raleway max-w-2xl mx-auto">
            Join thousands of patients and providers who trust Karevo for secure
            healthcare management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-900 font-medium text-lg leading-relaxed mb-6 font-raleway italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900 font-raleway">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500 font-raleway ml-2">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
