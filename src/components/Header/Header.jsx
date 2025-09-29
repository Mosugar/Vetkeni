'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X, Heart, MapPin, Clock, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar - No gap, seamless connection */}
      <div className="bg-gradient-to-r from-[#1cccfa] to-blue-400 text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 animate-pulse" />
              <span>Urgences 24/7: 0661171954</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Lun-Ven: 9h-18h | Sam: 9h-14h</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/clinique_veterinaire_kenitra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hover:text-yellow-200 transition-colors flex items-center"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Nous localiser
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Connected seamlessly */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-xl' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group py-2"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <Image 
                    src="https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg" 
                    alt="VetKeni - Clinique Vétérinaire" 
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">
                  VetKeni
                </span>
                <span className="text-sm text-[#1cccfa] font-medium flex items-center">
                  <Stethoscope className="w-3 h-3 mr-1" />
                  Dr. Chakroune
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-gray-700 hover:text-[#1cccfa] font-medium transition-colors duration-200 group py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1cccfa] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Call Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:0537378587"
                className="bg-gradient-to-r from-[#1cccfa] to-blue-400 hover:from-blue-400 hover:to-[#1cccfa] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0537378587</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-gray-700 hover:text-[#1cccfa] font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4">
                <a
                  href="tel:0661171954"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-400 to-red-500 text-white py-3 px-4 rounded-lg font-semibold"
                >
                  <Heart className="w-4 h-4" />
                  <span>Urgences: 0661171954</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;