'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, X, Phone, Heart, Clock } from 'lucide-react';

const WhatsAppSticky = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first time users
      setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (isEmergency = false) => {
    const phoneNumber = isEmergency ? '212661171954' : '212537378587';
    const message = isEmergency 
      ? '🚨 URGENCE 🚨 - Bonjour Dr. Chakroune, j&apos;ai une urgence vétérinaire!'
      : 'Bonjour Dr. Chakroune, j&apos;aimerais prendre rendez-vous pour mon animal de compagnie.';
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        
        {/* Expanded Menu */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 animate-fade-in">
            
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg" 
                    alt="Dr. Chakroune" 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dr. Chakroune</h4>
                  <p className="text-sm text-green-500 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    En ligne
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Comment puis-je vous aider aujourd&apos;hui ?
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              
              {/* Regular Consultation */}
              <button
                onClick={() => openWhatsApp(false)}
                className="w-full bg-gradient-to-r from-[#1cccfa] to-blue-500 hover:from-blue-500 hover:to-[#1cccfa] text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Prendre rendez-vous</div>
                  <div className="text-sm opacity-90">Consultation normale</div>
                </div>
              </button>

              {/* Emergency */}
              <button
                onClick={() => openWhatsApp(true)}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Urgence 24/7</div>
                  <div className="text-sm opacity-90">Service d&apos;urgence</div>
                </div>
              </button>

              {/* Phone Call */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:0537378587"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Appeler</span>
                </a>
                
                <a
                  href="tel:0661171954"
                  className="bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Urgence</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Lun-Ven: 9h-18h | Sam: 9h-14h</span>
              </div>
            </div>
          </div>
        )}

        {/* Tooltip */}
        {showTooltip && !isExpanded && (
          <div className="absolute bottom-20 right-0 bg-gray-800 text-white p-3 rounded-lg shadow-lg max-w-xs animate-fade-in">
            <p className="text-sm">
              Besoin d&apos;aide ? Contactez-nous via WhatsApp ! 💬
            </p>
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
            isExpanded ? 'rotate-45 scale-110' : 'hover:scale-110 animate-pulse-heart'
          }`}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>

        {/* Notification Badge */}
        {!isExpanded && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            !
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default WhatsAppSticky;