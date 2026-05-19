'use client';
import { useRouter, usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';


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

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname(); // Nos da la ruta actual (ej: /es/home_page)
  const [ isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) return null;

  const ChangeLanguage = (nuevoIdioma) => {
    if (!pathname) return;

    // Dividimos la ruta por las barras '/'
    // Si la ruta es '/es/home_page', segmentos será ['', 'es', 'home_page']
    const segmentos = pathname.split('/');
    
    // Reemplazamos el idioma viejo (que siempre está en la posición 1) por el nuevo
    segmentos[1] = nuevoIdioma;

    // Volvemos a unir la ruta reconstruida
    const newPath = segmentos.join('/');

    // Redirigimos al usuario a la misma página pero con el nuevo idioma
    router.push(newPath);
  };

  return createPortal (
    <div style={container}>
      <button 
        onClick={() => ChangeLanguage('es')} 
        className="tu-boton-idioma-style"
        style= {bottom}
      > <img src="/icons/leanguages/Spanish_flag.svg"
                                          alt = "picture of me"
                                          
                                          style = {styleImage}

                                          ></img>
      </button>
      
      <button 
        onClick={() => ChangeLanguage('en')} 
        className="tu-boton-idioma-style"
        style= {bottom}
      >
       <img src="/icons/leanguages/England_flag.svg"
                                          alt = "picture of me"
                                          
                                          style = {styleImage}

                                          ></img>
      </button>

      <button 
        onClick={() => ChangeLanguage('fr')} 
        className="tu-boton-idioma-style"
        style= {bottom}
      >
        <img src="/icons/leanguages/French_flag.svg"
                                          alt = "picture of me"
                                          
                                          style = {styleImage}

                                          ></img>
      </button>
      <button 
        onClick={() => ChangeLanguage('de')} 
        className="tu-boton-idioma-style"
        style= {bottom}
      >
        <img src="/icons/leanguages/German_flag.svg"
                                          alt = "picture of me"
                                          
                                          style = {styleImage}

                                          ></img>
      </button>
    </div>,
     document.body
  );
}