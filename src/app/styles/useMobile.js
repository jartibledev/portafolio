import { useState, useEffect } from 'react';

// Este hook es seguro para SSR porque devuelve false al principio
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check(); // Comprobar al montar
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return isMobile;
}