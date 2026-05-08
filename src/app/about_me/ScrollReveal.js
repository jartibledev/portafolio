'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '../styles/stylesStroke'; // Importa tus estilos

export default function ScrollReveal({ children, delay = "0s", direction = "left" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento entra en el área (o está cerca de entrar)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // Solo se anima una vez
        }
      },
      {
        threshold: 0.3 // Se activa cuando asoma el 10%
        
      }
    );

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <AnimatedSection 
      ref={domRef} 
      $isVisible={isVisible} 
      $delay={delay}
      $direction={direction}
    >
      {children}
    </AnimatedSection>
  );
}