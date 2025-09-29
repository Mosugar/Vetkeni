'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, User } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const testimonials = [
    {
      id: 1,
      name: "Sabber Amine",
      text: "I called Dr. Chakroune today (Sunday), and she immediately responded to my emergency. I would like to thank her for the outstanding care provided to my cat. Her professionalism and gentleness truly made a difference. My cat received exceptional attention, and I am grateful for her expertise and kindness. On top of that, I benefited from the best value for money. I highly recommend her services to all pet owners!",
      rating: 5,
      pet: "Chat",
      avatar: "SA"
    },
    {
      id: 2,
      name: "Mouad",
      text: "Very excellent service",
      rating: 5,
      pet: "Chien",
      avatar: "M"
    },
    {
      id: 3,
      name: "Hanane",
      text: "Je souhaite adresser mes plus sincères remerciements au Dr Ikram et à toute l'équipe pour l'excellent accueil et la prise en charge de ma chatte Mimi. Je recommande très chaleureusement vos services, je vous fais entièrement confiance.",
      rating: 5,
      pet: "Chatte Mimi",
      avatar: "H"
    },
    {
      id: 4,
      name: "Client Satisfait",
      text: "Service d'urgence exceptionnel! Dr. Chakroune a sauvé mon chien un dimanche soir. Professionnalisme et compassion remarquables. Merci infiniment!",
      rating: 5,
      pet: "Chien",
      avatar: "CS"
    },
    {
      id: 5,
      name: "Propriétaire Reconnaissant",
      text: "Équipe formidable, clinique moderne et propre. Mon chat se sent à l'aise ici. Les prix sont raisonnables et les soins excellents.",
      rating: 5,
      pet: "Chat",
      avatar: "PR"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      
      {/* Floating cute animal in corner */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <Image 
          src="https://res.cloudinary.com/dylpck2et/image/upload/v1759072383/8223549_irqan5.png"
          alt="Cute Animal Mascot"
          width={144}
          height={144}
          className="w-28 h-28 xl:w-36 xl:h-36 animate-float animation-delay-700 hover:animate-pulse-heart transition-all duration-300 filter drop-shadow-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Témoignages Clients
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ce que disent nos <span className="text-[#1cccfa]">clients</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients et le bien-être de leurs animaux sont notre priorité
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          
          {/* Main Carousel Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#1cccfa] hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#1cccfa] hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full p-8 md:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                      
                      {/* Quote Icon */}
                      <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1cccfa] to-blue-500 rounded-full shadow-lg">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-0.5" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                        &quot;{testimonial.text}&quot;
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#1cccfa] to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-800 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 flex items-center">
                            <Heart className="w-4 h-4 mr-1 text-pink-400" />
                            Propriétaire de {testimonial.pet}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 pb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#1cccfa] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stat 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-4 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Note moyenne</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Clients satisfaits</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Recommandations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 25m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Rejoignez nos clients satisfaits
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Votre animal mérite les meilleurs soins. Prenez rendez-vous aujourd&apos;hui!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0537378587"
                  className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Quote className="w-5 h-5 mr-3" />
                  Témoigner à votre tour
                </a>
                
                <a 
                  href="https://wa.me/212661171954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;