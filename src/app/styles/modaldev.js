'use client';
import React, { useState } from 'react';
import { Projects, DateFooter } from './StylesParagraph.styles';
import { PictureComponent, FooterPictureComponent, VideoContainer, StyledIframe, ButtomComponentLinks } from './ComponentStyles';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import ProjectComponent from './ProjectSinopsisComponent';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useIsTouchDevice } from './useTablet';


export default function PostComponentDev({ 
  children, 
  linkImage, 
  linkWeb, 
  project = "Project Name", 
  date = "2026", 
  explanation = "This text explain the illustration", 
  right, 
  left, 
  textalign, 
  width, 
  cover,
  github,
  linkvideo,
  linkweb, 
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  

  // 💡 TRUCO: Pasamos autoplay=1 para que el video empiece a sonar al instante
  const isTouch = useIsTouchDevice();
  const videoUrl = linkvideo;
  const githubUrl = github || "https://github.com/jartibledev"
  const weburl = linkWeb || ""
  const title = isTouch ? {
    color: "white"        
            } : {
    color: "black"
        }; 
  const text = isTouch ? {
    color: "#c7c7c7"        
            } : {
    color: "#686868"
        }; 

  return (
    <>
      {/* TARJETA DE LA IMAGEN EN EL PORFOLIO */}
      <PictureComponent 
        onClick={() => setIsOpen(true)} 
        {...props}
      >
        <Image 
          src={linkImage}
          alt={t(project)}
          fill
          priority={false}
          style={{ objectFit: `${cover}`, objectPosition: 'top', cursor: 'zoom-in' }}
          onLoad={(e) => {
            e.target.style.opacity = "1";
          }}
        />
      </PictureComponent>

      <FooterPictureComponent>
        <Projects>{t(project)}</Projects>
        <DateFooter>{date}</DateFooter>
      </FooterPictureComponent>
      
      <ProjectComponent 
        $width={width} 
        project={t(project)} 
        explanation={t(explanation)} 
        $right={right} 
        $left={left} 
        $textalign={textalign} 
      />

      {/* PORTAL DEL MODAL PARA EL VIDEO */}
      {isOpen && createPortal(
        <>
          <style>{`
            @keyframes fadeIn {
              from {
                background-color: rgba(0, 0, 0, 0);
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
              }
              to {
                background-color: rgba(0, 0, 0, 0.75); /* Oscurecemos un poco más el fondo para centrar la atención en el videojuego */
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
              }
            }

            @keyframes scaleUp {
              from {
                opacity: 0;
                transform: scale(0.92);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .modal-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
              display: flex;
              justify-content: center;
              align-items: center;
              animation: fadeIn 0.3s forwards ease-out;
            }

            .modal-close-btn {
              position: absolute;
              top: 20px;
              right: 20px;
              background: none;
              border: none;
              color: white;
              font-size: 30px;
              cursor: pointer;
              transition: transform 0.2s;
            }
            .modal-close-btn:hover {
              transform: scale(1.1);
            }
              .github-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
              padding: 12px 24px;
              background-color: #24292e; /* Color oficial de GitHub */
              color: white;
              font-family: inherit;
              font-size: 14px;
              font-weight: 500;
              text-decoration: none;
              border-radius: 6px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              cursor: pointer;
              transition: background-color 0.2s, transform 0.1s;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              margin: 5%;
            }

            .github-btn:hover {
              background-color: #2f363d;
              transform: translateY(-1px);
            }

            .github-btn:active {
              transform: translateY(1px);
            }
          `}</style>

          {/* 1. Fondo que cubre toda la pantalla y maneja la animación de entrada */}
          <div className="modal-backdrop" onClick={() => setIsOpen(false)} style={{display: 'flex', flexDirection:'column'}}>
            
            {/* Botón de cierre posicionado elegantemente arriba a la derecha */}
            <button className="modal-close-btn"  onClick={() => setIsOpen(false)}>✕</button>

           
            
            {/* 2. Contenedor del video (con stopPropagation para evitar que se cierre al hacer clic sobre el propio reproductor) */}
            <div style={{ width: '90%', maxWidth: '800px', animation: 'scaleUp 0.3s forwards ease-out' }} onClick={(e) => e.stopPropagation()}>
              <VideoContainer>        
                <StyledIframe
                  src={videoUrl}
                  title={`Video of standalone of ${t(project)}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen 
                />
              </VideoContainer>
            </div>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <ButtomComponentLinks 
            >
              {/* Puedes dejar solo el texto o pintar un icono de SVG aquí dentro */}
              { 'GitHub'}
            </ButtomComponentLinks>
           
            </Link> 
            {weburl != "" && (
              <Link href={weburl} target="_blank" rel="noopener noreferrer">
                    <ButtomComponentLinks>
                      {'Links'}
                    </ButtomComponentLinks>
              </Link>

            )}
            {isTouch && (
                       <ProjectComponent  $width='80%'  $visibility='visible' $opacity='1' $position='relative' $filter='none' $backdropfilter= 'none' project={t(project)} explanation={t(explanation)} $textalign= {textalign} ></ProjectComponent>
                    )}
          </div>
        </>,
        document.body
      )}
    </>
  );
}