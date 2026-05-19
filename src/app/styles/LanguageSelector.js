'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname(); // Nos da la ruta actual (ej: /es/home_page)

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

  return (
    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <button 
        onClick={() => ChangeLanguage('es')} 
        className="tu-boton-idioma-style"
      >
        ES
      </button>
      
      <button 
        onClick={() => ChangeLanguage('en')} 
        className="tu-boton-idioma-style"
      >
        EN
      </button>

      <button 
        onClick={() => ChangeLanguage('fr')} 
        className="tu-boton-idioma-style"
      >
        FR
      </button>
      <button 
        onClick={() => ChangeLanguage('de')} 
        className="tu-boton-idioma-style"
      >
        DE
      </button>
    </div>
  );
}