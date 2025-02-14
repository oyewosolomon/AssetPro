import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-950 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 7}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side: Text content */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-white">
                Intelligent Investing for Everyone
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl">
                Managing $10B in assets with cutting-edge technology and institutional expertise. Access global markets 24/7 with the power of AI-driven portfolio optimization.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-transparent border border-blue-300 hover:border-blue-200 text-blue-100 hover:text-white px-6 py-3 rounded-lg font-medium text-lg transition-all">
                  Learn More
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 items-center text-sm text-blue-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>$10B in managed assets</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>40 global markets</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.94 2.8 7.2 6.5 7.88V19h3v-1.12C15.2 17.2 18 13.94 18 10a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>24/7 trading access</span>
                </div>
              </div>
            </div>
            
            {/* Right side: Interactive Dashboard Preview */}
            <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="relative">
                {/* Glowing effect behind the device */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-40 blur-xl"></div>
                
                {/* Device frame */}
                <div className="relative bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* Dashboard mockup */}
                  <div className="aspect-[16/9]">
                    <img 
                      src="/dashboard-preview.webp" 
                      alt="AssetPro Dashboard" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Interactive overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-70"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-3 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                        <div className="text-xs text-green-400">Live Market Data</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {['Portfolio', 'Analytics', 'Markets'].map((item) => (
                          <div 
                            key={item}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center text-xs cursor-pointer hover:bg-white/20 transition-all"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification element */}
                <div className="absolute -right-10 top-8 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-xl animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-white">Portfolio optimized</div>
                      <div className="text-xs text-blue-300">Tax savings: $1,240</div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile app preview */}
                <div className="absolute -left-10 bottom-4 w-24 rounded-xl overflow-hidden shadow-xl border border-slate-700 rotate-6">
                  <img 
                    src="/mobile-app.webp" 
                    alt="Mobile App" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
     
    </div>
  );
};

export default Hero;