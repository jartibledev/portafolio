import { useState, useEffect } from 'react';

export function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Verificamos si el dispositivo soporta eventos táctiles
        const isTouchQuery = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
        setIsTouch(isTouchQuery);
    }, []);

    return isTouch;
}