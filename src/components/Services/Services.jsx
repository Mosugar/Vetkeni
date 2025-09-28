'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Zap, 
  Scissors,
  Pill,
  Activity,
  Syringe,
  Eye,
  X,
  Thermometer,
  Truck,
  Home,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Médecine',
      description: 'Consultations médicales complètes et diagnostics précis pour la santé de votre animal.',
      color: 'from-[#1cccfa] to-blue-500',
      delay: '0'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Echographie',
      description: 'Examens échographiques avancés pour un diagnostic approfondi et non-invasif.',
      color: 'from-pink-400 to-pink-600',
      delay: '100'
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Chirurgie',
      description: 'Interventions chirurgicales dans un environnement stérilisé avec équipement moderne.',
      color: 'from-green-400 to-green-600',
      delay: '200'
    },
    {
      icon: <X className="w-6 h-6" />,
      title: 'Radiologie',
      description: 'Imagerie radiologique de haute qualité pour un diagnostic précis et rapide.',
      color: 'from-purple-400 to-purple-600',
      delay: '300'
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: 'Pharmacie',
      description: 'Médicaments vétérinaires de qualité et conseils personnalisés pour votre animal.',
      color: 'from-orange-400 to-orange-600',
      delay: '400'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Laboratoire d\'analyses',
      description: 'Analyses biologiques complètes avec résultats rapides et fiables.',
      color: 'from-red-400 to-red-600',
      delay: '500'
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Nutrition',
      description: 'Conseils nutritionnels adaptés à chaque animal selon son âge et ses besoins.',
      color: 'from-yellow-400 to-yellow-600',
      delay: '600'
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: 'Anesthésie gazeuse',
      description: 'Anesthésie moderne et sécurisée pour le confort optimal de votre animal.',
      color: 'from-indigo-400 to-indigo-600',
      delay: '700'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Dentisterie',
      description: 'Soins dentaires complets pour maintenir une hygiène bucco-dentaire parfaite.',
      color: 'from-teal-400 to-teal-600',
      delay: '800'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Pension pour chats',
      description: 'Hébergement confortable et sécurisé pour vos chats en votre absence.',
      color: 'from-rose-400 to-rose-600',
      delay: '900'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Hospitalisation',
      description: 'Surveillance médicale continue 24h/24 dans un environnement adapté.',
      color: 'from-cyan-400 to-cyan-600',
      delay: '1000'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Transport animalier',
      description: 'Service de transport sécurisé pour vos animaux vers notre clinique.',
      color: 'from-lime-400 to-lime-600',
      delay: '1100'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Toilettage',
      description: 'Services de toilettage professionnel pour le bien-être et l\'hygiène.',
      color: 'from-amber-400 to-amber-600',
      delay: '1200'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Service à domicile',
      description: 'Consultations à domicile pour le confort de votre animal familier.',
      color: 'from-emerald-400 to-emerald-600',
      delay: '1300'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      
      {/* Cute Squirrel - Strategically positioned */}
      <div className="absolute top-20 right-10 lg:right-20 z-10 hidden lg:block">
        <div className="relative group">
          <img 
            src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072445/fun-3d-cartoon-squirrel-with-ice-cream_uz12jx.png"
            alt="Cute Squirrel Mascot"
            className="w-32 h-32 xl:w-40 xl:h-40 animate-float hover:scale-110 transition-transform duration-300 filter drop-shadow-2xl"
          />
          {/* Speech bubble from squirrel */}
          <div className="absolute -left-32 top-8 bg-white rounded-2xl p-3 shadow-lg border-2 border-[#1cccfa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Tous nos services! 🐾
            </div>
            <div className="absolute right-2 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-5">
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1cccfa]/10 to-blue-100 text-[#1cccfa] rounded-full text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            Nos Services Vétérinaires
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Excellence dans chaque <span className="text-[#1cccfa]">soin</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services vétérinaires modernes pour prendre soin de vos compagnons à quatre pattes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-[#1cccfa]/30 ${
                isVisible ? `animate-fade-in animation-delay-${service.delay}` : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-[#1cccfa] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <ArrowRight className={`w-5 h-5 text-[#1cccfa] transform transition-transform duration-300 ${
                  hoveredCard === index ? 'translate-x-2' : ''
                }`} />
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isVisible ? 'animate-fade-in animation-delay-1500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1cccfa] to-blue-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Votre animal mérite les meilleurs soins
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Prenez rendez-vous dès aujourd'hui avec Dr. Chakroune
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0537378587"
                  className="bg-white text-[#1cccfa] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Stethoscope className="w-5 h-5 mr-3" />
                  Consultation: 0537378587
                </a>
                
                <a 
                  href="https://wa.me/212661171954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Urgences WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;