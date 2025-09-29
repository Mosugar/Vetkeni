'use client';

import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Heart,
  Stethoscope,
  ChevronUp,
  Star,
  MessageCircle,
  Mail
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Consultation médicale', icon: '🩺' },
    { name: 'Échographie', icon: '📡' },
    { name: 'Chirurgie', icon: '🏥' },
    { name: 'Radiologie', icon: '🔬' },
    { name: 'Urgences 24/7', icon: '🚨' },
    { name: 'Hospitalisation', icon: '🏨' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      
      {/* Cute Animal Friends Section - Top of Footer */}
      <div className="relative">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
          </svg>
        </div>

        {/* Animal Friends Showcase */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos Amis à Quatre Pattes 🐾
            </h3>
            <p className="text-blue-200 text-lg">
              Rencontrez notre équipe de mascottes qui vous accueillent chaleureusement
            </p>
          </div>

          {/* Animal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            
            {/* Squirrel */}
            <div className="text-center group">
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072445/fun-3d-cartoon-squirrel-with-ice-cream_uz12jx.png"
                  alt="Écureuil Mascotte"
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto filter drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  🍦
                </div>
              </div>
              <h4 className="font-semibold text-orange-300">Écureuil Gourmand</h4>
              <p className="text-xs text-gray-300">Spécialiste des friandises</p>
            </div>

            {/* Rabbit */}
            <div className="text-center group">
              <div className="relative bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072428/8200069_dxjygl.png"
                  alt="Lapin Mascotte"
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto filter drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-green-400 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  🥕
                </div>
              </div>
              <h4 className="font-semibold text-pink-300">Lapin Mignon</h4>
              <p className="text-xs text-gray-300">Expert en câlins</p>
            </div>

            {/* Tiger */}
            <div className="text-center group">
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072409/fun-3d-cartoon-tiger-dancing_pdpcoi.png"
                  alt="Tigre Mascotte"
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto filter drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-purple-400 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  💃
                </div>
              </div>
              <h4 className="font-semibold text-yellow-300">Tigre Danseur</h4>
              <p className="text-xs text-gray-300">Maître de la joie</p>
            </div>

            {/* Cute Animal 1 */}
            <div className="text-center group">
              <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072383/8223549_irqan5.png"
                  alt="Animal Mascotte"
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto filter drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-red-400 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  ❤️
                </div>
              </div>
              <h4 className="font-semibold text-blue-300">Ami Fidèle</h4>
              <p className="text-xs text-gray-300">Gardien du cœur</p>
            </div>

            {/* Monkey */}
            <div className="text-center group">
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 mb-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072874/11111689_lfxfpm.png"
                  alt="Singe Mascotte"
                  width={80}
                  height={80}
                  className="w-20 h-20 mx-auto filter drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  🎉
                </div>
              </div>
              <h4 className="font-semibold text-green-300">Singe Espiègle</h4>
              <p className="text-xs text-gray-300">Roi de l&apos;amusement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        
        {/* Clinic Info Card - Featured */}
        <div className="bg-gradient-to-r from-[#1cccfa] to-blue-600 rounded-3xl p-8 mb-12 relative overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Logo & Clinic Info */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg" 
                    alt="VetKeni Logo" 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">VetKeni</h3>
                  <p className="text-blue-100 flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Dr. Chakroune
                  </p>
                </div>
              </div>
              
              <p className="text-blue-100 leading-relaxed mb-4">
                Des soins vétérinaires d&apos;excellence à Kénitra depuis plus de 10 ans
              </p>

              <div className="flex justify-center lg:justify-start">
                <div className="flex space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-[#1cccfa]" />
                </div>
                <h4 className="font-semibold text-white mb-1">Consultation</h4>
                <a href="tel:0537378587" className="text-blue-100 hover:text-white transition-colors">
                  0537378587
                </a>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">Urgences 24/7</h4>
                <a href="tel:0661171954" className="text-red-200 hover:text-white transition-colors">
                  0661171954
                </a>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center sm:col-span-2">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a href="mailto:s.guessous.vet@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  s.guessous.vet@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-3">
              <a 
                href="https://wa.me/212661171954"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Urgence
              </a>
              
              <a 
                href="https://www.instagram.com/clinique_veterinaire_kenitra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Suivre sur Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Navigation */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Heart className="w-5 h-5 mr-3 text-[#1cccfa]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-[#1cccfa] rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Stethoscope className="w-5 h-5 mr-3 text-green-400" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="text-lg mr-3">{service.icon}</span>
                  <span className="text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-3 text-yellow-400" />
              Horaires & Localisation
            </h4>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                <h5 className="font-semibold text-green-300 mb-2">Ouvert</h5>
                <p className="text-sm text-gray-300">Lun-Ven: 9h-18h</p>
                <p className="text-sm text-gray-300">Samedi: 9h-14h</p>
              </div>
              
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
                <h5 className="font-semibold text-red-300 mb-2">Urgences</h5>
                <p className="text-sm text-gray-300">24h/24 - 7j/7</p>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
                <h5 className="font-semibold text-blue-300 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Localisation
                </h5>
                <p className="text-sm text-gray-300">Kénitra, Maroc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 VetKeni - Clinique Vétérinaire Dr. Chakroune. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start">
                <Heart className="w-3 h-3 mr-1 text-pink-400" />
                Caring for pets through every stage of their lives
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/clinique_veterinaire_kenitra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="https://wa.me/212661171954"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a 
                href="mailto:s.guessous.vet@gmail.com"
                className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToTop}
                className="bg-[#1cccfa] hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Retour en haut"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;