'use client';
import React, { useState } from 'react';
import {  Projects, DateFooter } from './StylesParagraph.styles';
import {  PictureComponent, FooterPictureComponent  } from './ComponentStyles';
import Image from 'next/image';
import { createPortal } from 'react-dom'
import ProjectComponent from './ProjectSinopsisComponent';
import { useTranslations } from 'next-intl';



const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top',
      
};


export default function PostComponent ({ children, linkImage, linkWeb, project="Project Name", date="2026", explanation="This text explain the illustration", right, left, textalign, width, cover, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imagenActual, setImagenActual] = useState('');
  const t = useTranslations();

  return (
    <>
   
        <PictureComponent  onClick={() => {
                                setImagenActual(linkImage);
                                setIsOpen(true);
                            }} {...props}>
                            
                            <Image src={linkImage}
                            alt = {t(project)}
                            fill
                            priority={false}
                            style= {{objectFit: `${cover}`, objectPosition: ' top', cursor:'zoom-in'}}
                            onLoad={(e) => {
                            e.target.style.opacity = "1";
                            }}
                           
                            >
                            </Image>
                             
        </PictureComponent>
         <FooterPictureComponent>
                                <Projects>{t(project)}</Projects>
                                <DateFooter>{date}</DateFooter>
        </FooterPictureComponent>
        <ProjectComponent $width={width} project={t(project)} explanation={t(explanation)} $right={right} $left={left} $textalign= {textalign} ></ProjectComponent>
    {isOpen && createPortal(
        <>
        <style>{`
            @keyframes fadeIn {
              from {
               background-color: rgba(255, 255, 255, 0.42);
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
              }
              to {
                background-color: rgba(255, 255, 255, 0.49);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(20px);
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
          `}</style>

        < div onClick={() => setIsOpen(false)}  style = {{
           position: 'fixed', 
            top: "0", 
            left: "0", 
            width: '100vw', 
            height: '100vh', 
            backdropFilter: 'blur(10px)', 
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999, 
            cursor: 'zoom-out',
            animation: 'fadeIn 1s ease-out forwards, scaleUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }} >

        <Image src= {imagenActual}  
            alt="Vista completa"
            fill
            style={{
              objectFit: 'contain'
            }}></Image>
        
    </div>
    </>,
    document.body
)}
</>
  );
}