'use client';
import styled, { keyframes, css } from "styled-components";
import Image from "next/image";


const borderBox = "1.2rem solid black ";
const borderRadius = " border-radius: 0px";
const slideInLeft = keyframes`
     from {
    opacity: 0;
    filter:blur(9px);
    backdrop-filter: blur(9px);
  }
  to {
    opacity: 1;
  }
`;
const animationEntry = keyframes`
 from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const animationEntryRight = keyframes`
 from {
    opacity: 0;
    transform: translateX(200%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const animationBottom = keyframes`
 from {
    opacity: 0;
    transform: translateY(-100%);
    filter:blur(9px);
    backdrop-filter: blur(9px);
  }
  to {
    
    
    opacity: 1;
    transform: translateY(0);
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 9)); } /* Ancho de imagen * número de imágenes */
`;



export const App = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    
`;
export const ArticleStyles = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;

`;
export const IntroStyles = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;

    opacity: 0;
    transform: translateY(-100px); 

    transition: opacity 2s ease-out, 
              transform 2s cubic-bezier(0.17, 0.55, 0.55, 1),
              filter 2s ease-out;
      ${({ $isVisible }) => $isVisible && css`
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
      `}


`;
export const FooterStyles = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 2%;
    padding-bottom: 2%;

    opacity: 0;
    transform: translateY(-100px); 

    transition: opacity 2s ease-out, 
              transform 2s cubic-bezier(0.17, 0.55, 0.55, 1),
              filter 2s ease-out;
      ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  `}

`;
export const HeroStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; 
    margin-top: 5%;
    margin-bottom: 5%;
    animation: ${animationEntry} 1s ease-out slide-in; 
`;

export const Picture = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    border-radius: 16px;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;  
    filter:blur(9px);
    backdrop-filter: blur(9px);
    
`;
export const FooterPicture = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    justify-content: space-between;
    
    
`;
export const WorkSection = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    justify-content: space-between;
    margin-bottom: 3%;
    
    
`;
export const WorkNameAndDate = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    justify-content: space-between;
    margin-bottom: 2%;
    
    
`;


export const CourseSection = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    justify-content: space-between;
    margin-bottom: 1.5%;
    
    
`;


export const SectionStyles = styled.section`
    width: 100% ;
    height: 80vh ;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 1em;
    padding-bottom: 1em;
    animation: ${animationEntry} 2s ease-in-out forwards;
    
   
`;

export const IntroSectionAboutMeStyles = styled.section`
    width: 100% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
     margin-bottom: 20%;
    animation: ${animationEntry} 2s ease-in-out forwards;
    
   
`;
export const SectionAboutMeStyles = styled.section`
    width: 100% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 5%;
    
   
`;

export const GalleryAboutMeStyles = styled.div`
    width: 100% ;
    min-width: 20vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
     animation: ${animationEntry} 2s ease-in-out forwards;

    
   
`;



export const PhilosophySection = styled.section`
    width: 100% ;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 1em;
    padding-bottom: 1em;

    opacity: 0;
    transform: translateX(-100px); 
    filter: blur(10px);

    transition: opacity 0.8s ease-out, 
              transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1),
              filter 0.8s ease-out;

    ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
  `}

   
`;

export const ContainerPicture = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    grid-template-columns: auto auto ;
    grid-gap: 1.5em;
    margin-left: 5%;
    margin-right: 5%;

     &:hover ${Picture} {
            filter: none;
        } 

      &:hover ${FooterPicture} {
        filter:blur(9px);
        backdrop-filter: blur(9px);   
    }   
`;
export const ContainerPictureAboutMe = styled.div`
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: arrow;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
`;
export const ContainerPictureAboutMeBlur = styled.div`
    width: 100%;
    height: 50vh;
    
    display: flex;
    flex-direction: arrow;
    align-items: start;
    margin-left: 5%;
    margin-right: 5%;
     transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ; 
    filter:blur(9px);
    backdrop-filter: blur(9px);
     &:hover {
            filter: none;
        }  
`;

export const BlankSpace = styled.div`
    padding: 2em ;
`;

export const ButtonStar = styled.button`
    padding : 20px 120px 20px 120px;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    background-color: transparent;
    border: ${borderBox};
    border-radius: ${borderRadius};
    cursor:pointer;  
    filter:blur(9px);
    backdrop-filter: blur(9px);
    &:hover {
            filter: none;
            backdrop-filter: none;
        } 

`;


export const ButtonPortafolio = styled.button`
        width: 50vh;
        height: 15vh;
        display: grid;
        grid-template-columns: auto auto auto ;
        transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
        background-color: transparent;
        border: ${borderBox};
        border-radius: ${borderRadius};
        padding: 0.5em;
        margin: 2rem;
        cursor:pointer;
        filter:blur(9px);
        backdrop-filter: blur(9px); 
        &:hover {
            filter: none;
            backdrop-filter: none;
        } 
        
`;

export const HeadPortafolio = styled.div`
        display: grid;
        grid-template-columns: auto auto auto ;
        transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
        border: ${borderBox};
        border-radius: ${borderRadius};
        cursor:pointer;
        filter: none;
        backdrop-filter: none;
        animation: ${animationBottom} 2s ease-in-out forwards; 
        &:hover {
            filter:blur(9px);
            backdrop-filter: blur(9px);
        }       
`;
export const Parraph = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
`;



export const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: auto;
  overflow: hidden; /* Esconde lo que sale de la pantalla */
  position: relative;
  background: white;

  /* Gradientes a los lados para efecto de desvanecido (opcional) */
  &::before, &::after {
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  &::before { left: 0; background: linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%); }
  &::after { right: 0; background: linear-gradient(to left, white 0%, rgba(255,255,255,0) 100%); }
`;

export const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * 10); /* El doble de imágenes para el efecto infinito */
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused; /* Se detiene al poner el mouse */
  }
`;

export const Slide = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
`;

export const AnimatedSection = styled.div`
  opacity: 0;
  /* Estado inicial según dirección */
  transform: ${props => props.$direction === 'left' ? 'translateX(-50px)' : 'translateX(50px)'};
  filter: blur(5px);
  
  transition: 
    opacity 0.6s ease-out, 
    transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    filter 0.6s ease-out;
  
  transition-delay: ${props => props.$delay};

  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
  `}
`;