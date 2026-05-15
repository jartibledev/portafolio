'use client';
import React, { useState } from 'react';
import { FooterText, Projects, DateFooter } from './StylesParagraph.styles';
import { TextComponent, PictureComponent, FooterPictureComponent  } from './ComponentStyles';
import Image from 'next/image';
import Link from 'next/link';
import ProjectComponent from './ProjectSinopsisComponent';
import { ContainerPicture } from './stylesStroke';

const styleImage ={
    objectFit: 'cover',
    objectPosition: ' top',
      
};


export default function PostComponent ({ children, linkImage, linkWeb, project="Project Name", date="2026", explanation="This text explain the illustration", ...props }) {
     // Estado para controlar si el modal está abierto y guardar la imagen seleccionada
  const [isOpen, setIsOpen] = useState(false);
  const [imagenActual, setImagenActual] = useState('');

  return (
    <ContainerPicture>
        <PictureComponent {...props}>
                            
                            <Image src={linkImage}
                            alt = {project}
                            fill
                            priority={false}
                            style= {{...styleImage, cursor:'zoom-in'}}
                            onLoad={(e) => {
                            e.target.style.opacity = "1";
                            }}
                            onClick={() => {
                                setImagenActual(linkImage);
                                setIsOpen(true);
                            }}
                            >
                            </Image>
                             
        </PictureComponent>
         <FooterPictureComponent>
                                <Projects>{project}</Projects>
                                <DateFooter>{date}</DateFooter>
        </FooterPictureComponent>
        <ProjectComponent project={project} explanation={explanation} ></ProjectComponent>
    {isOpen && (
        < PictureComponent onClick={() => setIsOpen(false)} $position = "fixed" style = {{ 
            top: "0", 
            left: "0", 
            width: '100vw', 
            height:'100vh', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out' }} >

        <Image src= {imagenActual}  
            alt="Vista completa"
            fill
            style={{
              objectFit: 'contain'
            }}></Image>
        
    </PictureComponent>)}
   </ContainerPicture>
  );
}