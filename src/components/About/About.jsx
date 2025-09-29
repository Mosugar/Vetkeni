'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Heart, 
  Clock, 
  Users, 
  Stethoscope,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Heart className="w-6 h-6" />,
      number: "5000+",
      label: "Animaux soignés",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "24/7",
      label: "Service d'urgence",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "10+",
      label: "Années d'expérience",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "100%",
      label: "Satisfaction client",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const features = [
    "Équipement médical de pointe",
    "Anesthésie gazeuse moderne", 
    "Radiologie numérique",
    "Échographie haute définition",
    "Laboratoire d'analyses sur site",
    "Hospitalisation surveillée 24h/24"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      
      {/* Cute Tiger floating */}
      <div className="absolute top-10 left-10 hidden lg:block">
        <img 
          src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072409/fun-3d-cartoon-tiger-dancing_pdpcoi.png"
          alt="Cute Tiger Mascot"
          className="w-24 h-24 xl:w-32 xl:h-32 animate-float hover:animate-wiggle transition-all duration-300 filter drop-shadow-2xl"
        />
      </div>

      {/* Cute Rabbit floating */}
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <img 
          src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072428/8200069_dxjygl.png"
          alt="Cute Rabbit Mascot"
          className="w-28 h-28 xl:w-36 xl:h-36 animate-float animation-delay-1000 hover:animate-pulse-heart transition-all duration-300 filter drop-shadow-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1cccfa]/10 to-blue-100 text-[#1cccfa] rounded-full text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            À Propos de Nous
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dr. <span className="text-[#1cccfa]">Chakroune</span> & Équipe
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une passion pour les soins vétérinaires, une expertise reconnue à Kénitra
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1cccfa]/10 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Une clinique moderne au cœur de Kénitra
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dr. Chakroune dirige une équipe passionnée dédiée au bien-être de vos animaux de compagnie. 
                  Notre clinique vétérinaire moderne dispose d'équipements de pointe pour offrir des soins 
                  d'excellence dans un environnement chaleureux et sécurisé.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Nous croyons que chaque animal mérite les meilleurs soins possibles. C'est pourquoi nous 
                  investissons continuellement dans la formation et les technologies les plus avancées.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="tel:0537378587"
                    className="inline-flex items-center bg-gradient-to-r from-[#1cccfa] to-blue-500 hover:from-blue-500 hover:to-[#1cccfa] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Appelez maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1759074411/vet-clinic-concept-happy-male-doctor-veterinarian-holding-cute-black-pug-dog-smiling-camera-white-background_untoey.jpg"
                  alt="Dr. Chakroune avec un chien"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with cute pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1cccfa]/20 to-transparent"></div>
              </div>

              {/* Floating quote bubble */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-600">5/5</span>
                </div>
                <p className="text-sm text-gray-700 font-medium italic">
                  "Soins exceptionnels pour mon chat. Je recommande vivement!"
                </p>
                <p className="text-xs text-gray-500 mt-2">- Client satisfait</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1cccfa] to-blue-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Nos résultats parlent d'eux-mêmes
                </h3>
                <p className="text-xl opacity-90">
                  La confiance de nos clients, notre plus belle récompense
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg opacity-90">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;