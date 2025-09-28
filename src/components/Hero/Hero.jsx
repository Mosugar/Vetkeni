'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Phone, Heart } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
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
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dylpck2et/video/upload/v1759076945/6829486_Animal_Vet_1920x1080_fnqsiw.mp4" type="video/mp4" />
        </video>
        
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Main Content - Better positioned */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md text-[#1cccfa] rounded-full text-sm font-semibold mb-8 shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Clinique Vétérinaire Dr. Chakroune - Kénitra
          </div>
          
          {/* Main Title - Better typography */}
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8 leading-relaxed text-shadow-lg max-w-3xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Des soins vétérinaires d'excellence à Kénitra avec Dr. Chakroune
          </h1>

          {/* CTA Buttons - Better spacing */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#1cccfa] to-blue-500 hover:from-blue-500 hover:to-[#1cccfa] text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-3" />
                Prendre rendez-vous
              </span>
            </button>
            
            <a
              href="https://wa.me/212661171954?text=Bonjour Dr. Chakroune, j'aimerais prendre rendez-vous pour mon animal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md text-[#1cccfa] hover:bg-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </span>
            </a>
          </div>

          {/* Contact Cards - Cleaner design */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-[#1cccfa] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Consultation</div>
                  <div className="text-[#1cccfa] font-semibold">0537378587</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Urgences 24/7</div>
                  <div className="text-red-500 font-semibold">0661171954</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className={`text-white/90 text-lg font-medium ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
            Lun-Ven: 9h-18h | Samedi: 9h-14h
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;