import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAP = () => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations will be scoped to this context
    }, scope);

    return () => ctx.revert(); // Cleanup
  }, []);

  return scope;
};

// Utility functions for common animations
export const animateIn = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

export const animateFloat = (element, duration = 3) => {
  gsap.to(element, {
    y: -10,
    duration,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

export const animateWiggle = (element) => {
  gsap.to(element, {
    rotation: 3,
    duration: 0.5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

export const animatePulse = (element, scale = 1.1) => {
  gsap.to(element, {
    scale,
    duration: 1,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

export const animateOnScroll = (element, animation) => {
  gsap.fromTo(element,
    { 
      opacity: 0,
      ...animation.from 
    },
    {
      opacity: 1,
      ...animation.to,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};