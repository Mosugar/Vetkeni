'use client';

import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, Eye } from 'lucide-react';

const InstagramShowcase = () => {
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

  // Mock Instagram posts - replace with real data from Instagram API if available
  const instagramPosts = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg",
      caption: "Consultation avec nos amis à quatre pattes 🐕❤️",
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759074411/vet-clinic-concept-happy-male-doctor-veterinarian-holding-cute-black-pug-dog-smiling-camera-white-background_untoey.jpg",
      caption: "Dr. Chakroune avec un de nos patients les plus mignons 🐶",
      likes: 234,
      comments: 45
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759072445/fun-3d-cartoon-squirrel-with-ice-cream_uz12jx.png",
      caption: "Même nos mascottes aiment venir nous voir! 🐿️🍦",
      likes: 89,
      comments: 12
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759072428/8200069_dxjygl.png",
      caption: "Nos amis les lapins sont toujours les bienvenus 🐰✨",
      likes: 167,
      comments: 28
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759072409/fun-3d-cartoon-tiger-dancing_pdpcoi.png",
      caption: "Quand nos patients sont heureux, nous le sommes aussi! 🐅💃",
      likes: 203,
      comments: 34
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dylpck2et/image/upload/v1759072383/8223549_irqan5.png",
      caption: "Consultation vétérinaire avec le sourire 😊🩺",
      likes: 145,
      comments: 19
    }
  ];

  return (
    <section id="instagram" ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Cute Monkey floating */}
      <div className="absolute top-20 right-20 hidden xl:block">
        <img 
          src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072874/11111689_lfxfpm.png"
          alt="Cute Monkey Mascot"
          className="w-32 h-32 animate-float animation-delay-500 hover:animate-wiggle transition-all duration-300 filter drop-shadow-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium mb-6">
            <Instagram className="w-4 h-4 mr-2" />
            Suivez-nous sur Instagram
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos moments <span className="text-pink-500">magiques</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez le quotidien de notre clinique et nos adorables patients sur Instagram
          </p>

          <a 
            href="https://www.instagram.com/clinique_veterinaire_kenitra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5 mr-3" />
            @clinique_veterinaire_kenitra
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                isVisible ? `animate-fade-in animation-delay-${index * 100 + 200}` : 'opacity-0'
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </div>
                      </div>
                      <Instagram className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6">
                <p className="text-gray-700 font-medium leading-relaxed">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.instagram.com/clinique_veterinaire_kenitra/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Restez connectés avec nos aventures
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Suivez-nous pour voir nos patients heureux et nos moments câlins quotidiens
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.instagram.com/clinique_veterinaire_kenitra/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  Suivre sur Instagram
                </a>
                
                <a 
                  href="tel:0537378587"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-3" />
                  Venez nous voir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;