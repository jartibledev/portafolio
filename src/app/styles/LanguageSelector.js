'use client';
import { useRouter, usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { ButtonComponent } from './ComponentStyles';
import styled, { keyframes, css } from 'styled-components';

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top',
    opacity: "inherit",
    transition: "inherit",
    width: '100%', 
    heigth : '100%'
      
}

const bottom = {
    diplay: 'block', width: '100%', heigth : '100%',     background: 'none', /* Quita el color de fondo */
    border: 'none' ,      /* Quita el borde */
    padding: '0',         /* Elimina el espacio interno */
    margin: '0',         /* Elimina el espacio externo */
    cursor: 'pointer',   /* Mantiene el cursor de selección */
    font: 'inherit',     /* Hereda el tipo de letra del texto principal */
}

const container = {
    display: 'flex', 
    gap: '10px', 
    padding: '10px', 
    width: '300px', 
    height: '150px',
    position: 'fixed',
    top: '20px', /* Distancia desde la parte inferior */
    right: '20px',  /* Distancia desde la parte derecha */
    zIndex: '9999'  /* Asegura que esté por encima de otros elementos */ 

}

export default function LanguageSelector({ ...props}) {
  const router = useRouter();
  const pathname = usePathname(); // Nos da la ruta actual (ej: /es/home_page)
  const [ isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  if(!isClient) return null;

  const ChangeLanguage = (nuevoIdioma) => {
    if (!pathname) return;

    
    const segmentos = pathname.split('/');
    
    segmentos[1] = nuevoIdioma;

    const newPath = segmentos.join('/');

    router.push(newPath);
  };


  return createPortal (
    <div style={container}>
      <ButtonComponent 
      $opacity = {{...props}} 
        onClick={() => ChangeLanguage('es')} 
        className="tu-boton-idioma-style"
      > <img src="/icons/leanguages/Spanish_flag.svg"
                                          alt = "ES"
                                          
                                          style = {styleImage}

                                          ></img>
      </ButtonComponent>
      
      <ButtonComponent 
        $opacity = {{...props}}
        onClick={() => ChangeLanguage('en')} 
        className="tu-boton-idioma-style"
      >
       <img src="/icons/leanguages/England_flag.svg"
                                          alt = "EN"
                                          
                                          style = {styleImage}

                                          ></img>
      </ButtonComponent>

      <ButtonComponent 
        $opacity = {{...props}}
        onClick={() => ChangeLanguage('fr')} 
        className="tu-boton-idioma-style"
      >
        <img src="/icons/leanguages/French_flag.svg"
                                          alt = "FR"
                                          
                                          style = {styleImage}

                                          ></img>
      </ButtonComponent>
      <ButtonComponent 
        $opacity = {{...props}}
        onClick={() => ChangeLanguage('de')} 
        className="tu-boton-idioma-style"
      >
        <img src="/icons/leanguages/German_flag.svg"
                                          alt = "DE"
                                          
                                          style = {styleImage}

                                          ></img>
      </ButtonComponent>
    </div>,
     document.body
  );
}