'use client';
import React from 'react';
import styled from 'styled-components';
import { Projects } from './StylesParagraph.styles';

const Container = styled.div`
  width: 100%;
  max-width: ${({ $maxwidth }) => $maxwidth || '800px'};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px; /* Espacio elegante entre el título y el iframe */
`;

// 1. Contenedor flexible
const EmbedWrapper = styled.div`
  width: 100%;
  /* 🔥 Añadimos aspectratio dinámico para adaptarse a Behance o Figma */
  aspect-ratio: ${({ $aspectratio }) => $aspectratio || '16 / 9'};
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
`;

// 2. Iframe universal
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: ${({ $border }) => $border || '0px'};
  display: block;
`;

/**
 * Componente Universal para incrustar iframes (Figma, Behance, YouTube...)
 * @param {string} src - URL del embed
 * @param {string} title - Accesibilidad / Accesible name
 * @param {string} label - Título visible encima del embed (NUEVO)
 * @param {string} maxwidth - Ancho máximo del contenedor
 * @param {string} aspectratio - Proporción (ej: '16/9', '4/3', '1/1')
 * @param {string} allow - Permisos especiales del iframe (opcional)
 */
export default function UniversalEmbed({ 
  src,
  title = "Embedded Content",
  label,
  maxwidth = "800px",
  aspectratio = "16 / 9",
  border = "0px",
  allow = "allowfullscreen"
}) {
  return (
    <Container $maxwidth={maxwidth}>
      {label && <Projects>{label}</Projects>}

       <EmbedWrapper $maxwidth={maxwidth} $aspectratio={aspectratio}>
      <StyledIframe
        src={src}
        title={title}
        $border={border}
        allow={allow}
        allowFullScreen
      />
    </EmbedWrapper>
   </Container>
  );
}