'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from './styles/ComponentStyles';

export default function ScrollReveal({ 
  children, 
  delay = "0s", 
  direction = "left", 
  threshold = "0.1", 
  rootMargin = "0px 0px -50px 0px",
  ...props // Recibe el resto de tus props (opacitytransition, etc.)
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: Number(threshold),
        rootMargin: rootMargin
      }
    );

    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <AnimatedSection 
      ref={domRef} 
      $isVisible={isVisible} 
      $delay={delay}
      $direction={direction}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
}