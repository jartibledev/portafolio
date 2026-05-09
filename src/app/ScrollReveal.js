'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from './styles/ComponentStyles';

export default function ScrollReveal({ children, delay = "0s", ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Nuevo: Control de carga
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);
    
    // Forzamos un pequeño delay técnico para asegurar que el CSS de 
    // opacidad 0 esté aplicado antes de cualquier cambio.
    setIsLoaded(true);

    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, []);

  return (
    <AnimatedSection 
      ref={domRef} 
      // Solo permitimos visibilidad si el componente cargó en el cliente
      $isVisible={isLoaded && isVisible} 
      $delay={delay}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
}