'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowButtonContainer, FrameImage } from './ComponentStyles';

export default function FrameArrowButton({ targetPath = '/es/portafolio_illustration' }) {
  const router = useRouter();

  // 1. Guardamos el estado visual actual: 'normal' | 'hover' | 'click'
  const [frameState, setFrameState] = useState('normal');

  // Función para manejar la navegación tras el clic
  const handleClick = () => {
    // Cambiamos al 3er frame (clic)
    setFrameState('click');

    // Esperamos 250ms para que el usuario aprecie el estado de clic antes de cambiar de vista
    setTimeout(() => {
      router.push(targetPath);
    }, 250);
  };

  return (
    <ArrowButtonContainer
      onClick={handleClick}
      onMouseEnter={() => frameState !== 'click' && setFrameState('hover')}
      onMouseLeave={() => frameState !== 'click' && setFrameState('normal')}
      aria-label= "Volver atrás"
    >
      {/* FRAME 1: Estado Normal */}
        <FrameImage src="/icons/items/normal_row.svg" alt="Volver" $active={frameState === 'normal'}  />
     

      {/* FRAME 2: Estado Hover */}
        <FrameImage src="/icons/items/hover_row.svg" alt="Volver" $active={frameState === 'hover'}  />
     

      {/* FRAME 3: Estado Clic / Active */}
        <FrameImage src="/icons/items/clicked_row.svg" alt="Volver" $active={frameState === 'click'} />
      
    </ArrowButtonContainer>
  );
}