import React, { useState, useEffect } from 'react';

const Slider = ({ 
  items = [], 
  autoPlay = true, 
  interval = 4000, 
  showArrows = true, 
  showDots = true,
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsTransitioning(false);
    }, 300);
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Main Slider Container */}
      <div className="relative overflow-hidden w-full max-w-full group rounded-2xl border-4 border-white/20 shadow-2xl">
        {/* Gradient Overlays for Fashion Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
        
        {/* Slider Track */}
        <div 
          className={`flex transition-all duration-700 ease-out w-full max-w-full ${
            isTransitioning ? 'scale-105' : 'scale-100'
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 min-w-full max-w-full">
              <div className="relative w-full h-[70vh] max-w-full">
                {/* Background Image with Proper Sizing */}
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    maxWidth: '100%',
                    maxHeight: '70vh'
                  }}
                >
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 animate-pulse" />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                    <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
                  </div>
                  
                  {/* Content Overlay with Modern Styling */}
                  <div className="relative z-20 h-full flex items-center justify-center px-6">
                    <div className="text-center text-white max-w-4xl mx-auto transform transition-all duration-1000">
                      {/* Decorative Element */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                      </div>
                      
                      {/* Title with Gradient Text */}
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                        {item.title}
                      </h2>
                      
                      {/* Subtitle */}
                      {item.subtitle && (
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-blue-200 drop-shadow-lg">
                          {item.subtitle}
                        </h3>
                      )}
                      
                      {/* Description */}
                      <p className="text-base md:text-lg lg:text-xl mb-6 opacity-95 leading-relaxed max-w-3xl mx-auto font-light tracking-wide drop-shadow-lg">
                        {item.description}
                      </p>
                      
                      {/* Highlights */}
                      {item.highlights && (
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {item.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Travel Info */}
                      <div className="flex justify-center gap-6 mb-8 text-sm md:text-base">
                        {item.bestTime && (
                          <div className="flex items-center gap-2 text-white/90">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Best: {item.bestTime}</span>
                          </div>
                        )}
                        {item.duration && (
                          <div className="flex items-center gap-2 text-white/90">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Duration: {item.duration}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Modern Button Design */}
                      {item.buttonText && (
                        <div className="flex justify-center">
                          <button className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 hover:from-purple-500 hover:via-blue-500 hover:to-pink-500 px-10 py-4 text-white font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl text-base tracking-wide overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                              {item.buttonText}
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </div>
                      )}
                      
                      {/* Bottom Decorative Element */}
                      <div className="flex justify-center mt-8">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-5 rounded-full transition-all duration-500 hover:scale-125 hover:shadow-2xl z-30 border border-white/20 group"
              aria-label="Previous slide"
            >
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-5 rounded-full transition-all duration-500 hover:scale-125 hover:shadow-2xl z-30 border border-white/20 group"
              aria-label="Next slide"
            >
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 z-30">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-500 ${
                index === currentIndex
                  ? 'scale-125' 
                  : 'scale-100 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 shadow-lg shadow-purple-500/50'
                  : 'bg-white/40 hover:bg-white/60 border border-white/30'
              }`}>
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 animate-pulse"></div>
                )}
              </div>
              {/* Progress Ring for Active Dot */}
              {index === currentIndex && (
                <div className="absolute inset-0 w-6 h-6 rounded-full border-2 border-white/30 -translate-x-1 -translate-y-1 animate-spin" style={{ animationDuration: '3s' }}></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
