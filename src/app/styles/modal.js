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


export default function PostComponent ({ children, linkImage, linkWeb, project="Project Name", date="2026", explanation="This text explain the illustration", right, left, textalign, ...props }) {
     // Estado para controlar si el modal está abierto y guardar la imagen seleccionada
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
    {isOpen && (
        < div onClick={() => setIsOpen(false)}  style = {{
            position:'fixed',
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
        
    </div>)}
</>
  );
}