import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      quote: "AssetPro's institutional platform gave us access to tools previously available only to the largest funds, while their dedicated support team ensured a smooth transition. Three years later, we've improved our risk-adjusted returns while reducing operational costs.",
      author: "Sarah Chen",
      title: "CIO, Pacific Northwest Foundation",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      quote: "The tax optimization alone saved our clients over 0.8% annually. The platform's intuitive interface makes it easy to demonstrate value to clients while the powerful backend handles all the complex operations.",
      author: "Michael Rodriguez",
      title: "Principal, Westcoast Wealth Advisors",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      quote: "As a retail investor, I never thought I'd have access to the same quality research and tools as the professionals. AssetPro has completely transformed how I manage my portfolio with its intelligent automation and real-time insights.",
      author: "Emma Johnson",
      title: "Individual Investor",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  ];
  
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };
  
  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [activeIndex]);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Hear from the individuals and institutions who trust AssetPro with their investments.
          </p>
        </div>
        
        <div className="relative">
          {/* Background elements */}
          <div className="absolute -top-10 -left-20 w-48 h-48 bg-blue-500/10 rounded-full filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-10 -right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-xl opacity-70"></div>
          
          {/* Testimonial carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm p-8 md:p-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                {/* Image column */}
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="relative w-40 h-40 mx-auto">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`
                          absolute inset-0 rounded-full overflow-hidden transform transition-all duration-500
                          ${index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'}
                        `}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 ring-2 ring-blue-500/30 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Content column */}
                <div className="md:w-2/3 relative h-64">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`
                        absolute inset-0 transition-all duration-500
                        ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
                      `}
                    >
                      {/* Quote icon */}
                      <svg className="absolute top-0 left-0 w-16 h-16 text-blue-500/20 transform -translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v8c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-8h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v8c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-8h-6c0-2.2 1.8-4 4-4V8z" />
                      </svg>
                      
                      {/* Rating */}
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-600'}`}
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-lg text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                      
                      {/* Author info */}
                      <div>
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        {/* <p className="text-slate-400 text-sm">{testimonial.title}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-700/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500/80 transition-colors z-10"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-700/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500/80 transition-colors z-10"
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;