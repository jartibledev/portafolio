'use client';
import React, { useState } from 'react';
import { FooterText, Projects, DateFooter } from './StylesParagraph.styles';
import { TextComponent, PictureComponent, FooterPictureComponent  } from './ComponentStyles';
import Image from 'next/image';
import { createPortal } from 'react-dom'
import ProjectComponent from './ProjectSinopsisComponent';



const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top',
      
};


export default function PostComponent ({ children, linkImage, linkWeb, project="Project Name", date="2026", explanation="This text explain the illustration", right, left, textalign, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imagenActual, setImagenActual] = useState('');

  return (
    <>
   
        <PictureComponent  onClick={() => {
                                setImagenActual(linkImage);
                                setIsOpen(true);
                            }} {...props}>
                            
                            <Image src={linkImage}
                            alt = {project}
                            fill
                            priority={false}
                            style= {{...styleImage, cursor:'zoom-in'}}
                            onLoad={(e) => {
                            e.target.style.opacity = "1";
                            }}
                           
                            >
                            </Image>
                             
        </PictureComponent>
         <FooterPictureComponent>
                                <Projects>{project}</Projects>
                                <DateFooter>{date}</DateFooter>
        </FooterPictureComponent>
        <ProjectComponent project={project} explanation={explanation} $right={right} $left={left} $textalign= {textalign} ></ProjectComponent>
    {isOpen && createPortal(
        <>
        <style>{`
            @keyframes fadeIn {
              from {
                background-color: rgba(192, 192, 192, 0);
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
              }
              to {
                background-color: rgba(0, 0, 0, 0.6);
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
            animation: 'fadeIn 0.3s ease-out forwards' }} >

        <div style={{ 
                    position: 'relative', 
                    width: '90vw', 
                    height: '90vh',
                    animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                }}></div>
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