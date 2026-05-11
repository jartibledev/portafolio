'use client';
import styled, { keyframes, css } from "styled-components";



const animationEntryBlured = keyframes`
 from {
    opacity: 0;
    
    
  }
  to {
    opacity: 1;
    
  }
`;

export const ArticleComponent = styled.article`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

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

export const SectionComponent = styled.section`
    width: ${props => props.width || "100%"} ;
    height: ${props => props.height || " 80vh"} ;
    display: ${props => props.display || "flex"};
    flex-direction:${props => props.flexdirection || "column"};
    align-items: ${props => props.alignitems || "center"};
    padding-left: ${props => props.paddingleft || "25%"};
    padding-right: ${props => props.paddingright || "25%"};
    padding-bottom: ${props => props.paddingbottom || "5%"};
`;

export const TextComponent = styled.div`
    width:  ${props => props.width || "100%"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "column"};
    margin-left: ${props => props.margginleft || "5%"};
    margin-right: ${props => props.margginright || "5%"};
    margin-bottom: ${props => props.margginbottom || "5%"};
`;

export const GalleryComponent = styled.div`
    width:  ${props => props.width || "100%"};
    min-widht: ${props => props.minwidth || "20vh"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "column"};

`;

export const FooterPictureComponent = styled.div`
    width:  ${props => props.width || "100%"};
    flex: ${props => props.flex || "1"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "row"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};
    filter: ${props => props.filter || "none"};
    backdrop-filter:  ${props => props.backdropfilter || "none"};
    padding-top:  ${props => props.paddingtop || "1em"};
    padding-bottom: ${props => props.paddingbottom || "1em"};  
    justify-content: ${props => props.paddingbottom || "space-between"};
    
    
`;



export const PictureComponent = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};
    min-height: ${props => props.minheight || "250px"};
    display: block;
    position: relative;
    overflow:  ${props => props.overflow || "hidden"};
    border-radius:${props => props.borderRadius || "16px"};
    cursor: ${props => props.cursor || "pointer"};
    position: relative;    
    filter: ${props => props.filter || "blur(16px)"};
    backdrop-filter: ${props => props.backdropfilter || "blur(9px)"};
    
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;

    isolation: isolate;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    img {
        /* Esto obliga a la imagen a seguir la opacidad del ScrollReveal */
        opacity: inherit !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        transition: transform 0.4s ease-out;
    }
`;

export const ContainerPictureComponent = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "column"};
    margin-left:  ${props => props.marginLeft || "5%"};
    margin-right:  ${props => props.marginRight || "5%"};

    &:hover ${PictureComponent} {
                filter: none;
            } 
    
    &:hover ${FooterPictureComponent} {
        filter:blur(9px);
        backdrop-filter: blur(9px);   
        } 
    
     
`;
export const AnimatedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* 1. ESTADO ATÓMICO INICIAL */
  opacity: 0;
  visibility: hidden;
  /* El will-change prepara al navegador para la animación y evita el parpadeo */
  will-change: opacity, transform; 
  
  transform: ${props => {
    if (props.$direction === 'none') return 'translate(0,0)';
    const offset = '50px';
    switch (props.$direction){
        case 'left': return `translateX(-${offset})`;
        case 'right': return `translateX(${offset})`;
        case 'down': return `translateY(-${offset})`;
        case 'up': return `translateY(${offset})`;
        default: return `translateY(${offset})`;
    }
  }};

  /* 2. TRANSICIÓN */
  /* Aumentamos a 0.8s para que el ojo humano no perciba saltos bruscos */
  transition: 
    opacity 0.8s ease-out, 
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
    visibility 0.8s;
  transition-delay: ${props => props.$delay};
  margin-right: ${props => props.marginright || "5%"};
  margin-left: ${props => props.margginleft || "5%"};
  
  /* 3. ESTADO VISIBLE */
  ${({ $isVisible }) => $isVisible && css`
    opacity: 1 !important;
    visibility: visible !important;
    transform: translate(0, 0) !important;
    filter: none !important;
    will-change: auto;
  `}
`;


export const FirstAnimation = styled.div`
    animation: ${animationEntryBlured} 2s ease-in-out forwards;
`;

export const ProgressBarContainerComponent = styled.div`
  width: 100%;
  height: 50px;
  border: 10px solid black;
  margin: 20px;
`;

export const ProgressBarComponent = styled.div`
    width: ${props => props.progress || '25%'};
    height: 100%;
    background-color: black;
`;

export const BlankSpaceComponent = styled.div`
    padding: 2em ;
`;
export const RectangleComponent = styled.div`
    display: ${props => props.display || 'grid'};
    grid-template-columns: ${props => props.gridTemplateColumns || 'auto auto auto'} ;
    
    border: ${props => props.border || '1.2rem solid black'} ;
    border-radius: ${props => props.borderRadius || ' border-radius: 0px'};
    cursor: ${props => props.cursor || ' pointer'};
    filter:  ${props => props.filter || ' none'};
    backdrop-filter:  ${props => props.backdropfilter || ' none'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);  
    &:hover {
        transform: translateY(-2px);
        filter:${props => props.filterHover || ' 9px'};
        backdrop-filter: ${props => props.backdropFilterHover || 'blur(9px)'};
    }
    &:active{
    transform: translateY(0);
    }
`;

export const FooterComponent = styled.footer`
    width: ${props => props.width || "100%"};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexdirection || "row"};
    justify-content: ${props => props.justifyContent || "center"};
    padding-left: ${props => props.paddingleft || "25%"};
    padding-right: ${props => props.paddingright || "25%"};
    padding-top:  ${props => props.paddingtop || "2%"};
    padding-bottom: ${props => props.paddingbottom || "2%"}

  
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
