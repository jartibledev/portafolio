'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from './styles/ComponentStyles';

export default function ScrollReveal({ children, delay = "0s", direction = "left", opacity = "0", filter = "blur(5px)", opacitytransition = "opacity 0.6s ease-out", transform = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)", filtertransition="filter 0.6s ease-out", threshold ="0.1", rootMargin = "0px 0px -50px 0px", alltransition   }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 100);
    setIsMounted(true);
    const observer = new IntersectionObserver(
     
      ([entry]) => {
        // Si el elemento entra en el área (o está cerca de entrar)
       // Si entra en pantalla, lo mostramos
        if (entry.isIntersecting) {
         requestAnimationFrame(() => {
            setIsVisible(true);
          });
        } 
        // Si sale de pantalla, lo ocultamos para que se pueda volver a animar
        else {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,// Se activa cuando asoma el 10%
        rootMargin: rootMargin
      }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatedSection 
      ref={domRef} 
      $isVisible={isVisible} 
      $delay={delay}
      $direction={direction}
      opacity={opacity}
      filter={filter}
      opacitytransition={opacitytransition}
      transform={transform}
      filtertransition={filtertransition}
      alltransition={alltransition}

    >
      {children}
    </AnimatedSection>
  );
}