'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Navigation,
  Heart,
  Stethoscope,
  Calendar,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    message: '',
    isEmergency: false
  });

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
🏥 *Nouveau message depuis VetKeni*

👤 *Nom:* ${formData.name}
📞 *Téléphone:* ${formData.phone}
📧 *Email:* ${formData.email}

🐾 *Animal:* ${formData.petName} (${formData.petType})
${formData.isEmergency ? '🚨 *URGENCE* 🚨' : '📅 *Rendez-vous normal*'}

💬 *Message:*
${formData.message}
    `.trim();

    const phoneNumber = formData.isEmergency ? '212661171954' : '212537378587';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Consultation",
      value: "0537378587",
      description: "Lun-Ven: 9h-18h | Sam: 9h-14h",
      color: "from-blue-400 to-blue-600",
      href: "tel:0537378587"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Urgences 24/7",
      value: "0661171954",
      description: "Service d'urgence disponible",
      color: "from-red-400 to-red-600",
      href: "tel:0661171954"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      value: "Kénitra",
      description: "Clinique Vétérinaire Dr. Chakroune",
      color: "from-green-400 to-green-600",
      href: "#map"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Message rapide",
      description: "Réponse garantie sous 30min",
      color: "from-purple-400 to-purple-600",
      href: "https://wa.me/212661171954"
    }
  ];

  const openingHours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 18h00", isOpen: true },
    { day: "Samedi", hours: "9h00 - 14h00", isOpen: true },
    { day: "Dimanche", hours: "Urgences uniquement", isOpen: false },
    { day: "Urgences", hours: "24h/24 - 7j/7", isOpen: true, isEmergency: true }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      
      {/* Cute floating squirrel */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <img 
          src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072445/fun-3d-cartoon-squirrel-with-ice-cream_uz12jx.png"
          alt="Cute Squirrel Mascot"
          className="w-32 h-32 animate-float animation-delay-300 hover:animate-wiggle transition-all duration-300 filter drop-shadow-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1cccfa]/10 to-blue-100 text-[#1cccfa] rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Contactez-nous
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nous sommes là pour <span className="text-[#1cccfa]">vous aider</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prenez rendez-vous ou contactez-nous pour toute urgence vétérinaire
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : '_self'}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-[#1cccfa]/30"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {info.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#1cccfa] transition-colors">
                {info.title}
              </h3>
              
              <div className="text-[#1cccfa] font-semibold text-lg mb-2">
                {info.value}
              </div>
              
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-[#1cccfa]" />
                  Prendre rendez-vous
                </h3>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous contacterons rapidement
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Emergency Alert */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isEmergency"
                      checked={formData.isEmergency}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
                    />
                    <div className="flex items-center text-red-700">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">C'est une urgence</span>
                    </div>
                  </label>
                </div>

                {/* Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200"
                      placeholder="06XXXXXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email (optionnel)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Pet Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom de l'animal *
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200"
                      placeholder="Max, Luna, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Type d'animal *
                    </label>
                    <select
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Chien">Chien</option>
                      <option value="Chat">Chat</option>
                      <option value="Lapin">Lapin</option>
                      <option value="Oiseau">Oiseau</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1cccfa] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez la raison de votre visite ou les symptômes observés..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${
                    formData.isEmergency
                      ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                      : 'bg-gradient-to-r from-[#1cccfa] to-blue-500 hover:from-blue-500 hover:to-[#1cccfa] text-white'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  {formData.isEmergency ? 'Contacter en urgence' : 'Envoyer via WhatsApp'}
                </button>
              </form>
            </div>
          </div>

          {/* Map and Hours */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            
            {/* Opening Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-[#1cccfa]" />
                Horaires d'ouverture
              </h3>
              
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 rounded-xl ${
                    schedule.isEmergency 
                      ? 'bg-red-50 border border-red-200' 
                      : schedule.isOpen 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <span className="font-medium text-gray-800">
                      {schedule.day}
                    </span>
                    <span className={`font-semibold ${
                      schedule.isEmergency 
                        ? 'text-red-600' 
                        : schedule.isOpen 
                          ? 'text-green-600' 
                          : 'text-gray-500'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Navigation className="w-6 h-6 mr-3 text-[#1cccfa]" />
                  Notre localisation
                </h3>
              </div>
              
              <div className="relative h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7020524389977!2d-6.818014!3d34.000186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b0034609767%3A0xd56dc3a639f44caf!2sClinique%20V%C3%A9t%C3%A9rinaire%20Dr%20Chakroune%20-%20Urgences%20V%C3%A9t%C3%A9rinaire%20Rabat!5e0!3m2!1sen!2sma!4v1759073966898!5m2!1sen!2sma" 
                  className="w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Clinique Vétérinaire Dr. Chakroune"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 