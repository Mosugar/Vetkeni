'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Phone, Heart } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dylpck2et/video/upload/v1759076945/6829486_Animal_Vet_1920x1080_fnqsiw.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-[#1cccfa] to-blue-600"></div>
        </video>
        
        {/* Video overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Professional Badge - Made smaller */}
          <div className={`inline-flex items-center px-5 py-2 bg-white/95 backdrop-blur-md text-[#1cccfa] rounded-full text-sm font-medium mb-6 shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Clinique Vétérinaire Dr. Chakroune - Kénitra
          </div>
          
          {/* Subtitle - Made smaller */}
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed text-shadow ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            Des soins vétérinaires d excellence à Kénitra avec Dr. Chakroune
          </p>

          {/* CTA Buttons - Made smaller */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center mb-12 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-[#1cccfa] to-blue-500 hover:from-blue-500 hover:to-[#1cccfa] text-white px-7 py-3 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre rendez-vous
              </span>
            </button>
            
            <a
              href="https://wa.me/212661171954?text=Bonjour Dr. Chakroune, j'aimerais prendre rendez-vous pour mon animal"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 backdrop-blur-md text-[#1cccfa] hover:bg-white px-7 py-3 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </span>
            </a>
          </div>

          {/* Contact Information - Made smaller, removed location */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-5 h-5 text-[#1cccfa]" />
                <div>
                  <div className="font-semibold text-base">Consultation</div>
                  <div className="text-white/90 text-sm">0537378587</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Heart className="w-5 h-5 text-red-400" />
                <div>
                  <div className="font-semibold text-base">Urgences 24/7</div>
                  <div className="text-white/90 text-sm">0661171954</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours - Made smaller */}
          <div className={`mt-6 text-white/80 text-base ${isVisible ? 'animate-fade-in animation-delay-1000' : 'opacity-0'}`}>
            Lun-Ven: 9h-18h | Samedi: 9h-14h
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;