'use client';
import React from 'react';
import styled from 'styled-components';

// 1. Contenedor flexible
const EmbedWrapper = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '800px'};
  /* 🔥 Añadimos aspectRatio dinámico para adaptarse a Behance o Figma */
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16 / 9'};
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background-color: #1e1e1e;
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
 * @param {string} maxWidth - Ancho máximo del contenedor
 * @param {string} aspectRatio - Proporción (ej: '16/9', '4/3', '1/1')
 * @param {string} allow - Permisos especiales del iframe (opcional)
 */
export default function UniversalEmbed({ 
  src,
  title = "Embedded Content",
  maxWidth = "800px",
  aspectRatio = "16 / 9",
  border = "0px",
  allow = "allowfullscreen"
}) {
  return (
    <EmbedWrapper $maxWidth={maxWidth} $aspectRatio={aspectRatio}>
      <StyledIframe
        src={src}
        title={title}
        $border={border}
        allow={allow}
        allowFullScreen
      />
    </EmbedWrapper>
  );
}