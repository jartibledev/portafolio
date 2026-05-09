'use client';
import styled, { keyframes, css } from "styled-components";



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

export const SectionComponent = styled.section`
    width: ${props => props.width || "100%"} ;
    height: ${props => props.height || " 80vh"} ;
    display: ${props => props.display || "flex"};
    flex-direction:${props => props.flexdirection || "column"};
    align-items: ${props => props.alignitems || "center"};
    padding-left: ${props => props.paddingleft || "25%"};
    padding-right: ${props => props.paddingright || "25%"};
    padding-bottom: ${props => props.paddingbottom || "2%"};
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

export const WorkSection = styled.div`
    width:  ${props => props.width || "100%"};
    flex: ${props => props.flex || "1"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "column"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};
    filter: ${props => props.filter || "none"};
    backdrop-filter:  ${props => props.backdropfilter || "none"};
    padding-top:  ${props => props.paddingtop || "1em"};
    padding-bottom: ${props => props.paddingbottom || "1em"};  
    justify-content: ${props => props.paddingbottom || "space-between"};
    margin-bottom: ${props => props.margginbottom || "3%"};
    
    
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

export const PictureComponent1 = styled.div`
    /* 1. Dimensiones: Usamos flex para asegurar que el contenido llene el espacio */
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "auto"}; /* 'auto' es mejor si no controlas la altura del padre */
    min-height: ${props => props.minHeight || "250px"};
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* 2. Estética corregida */
    overflow: ${props => props.overflow || "hidden"};
    border-radius: ${props => props.borderRadius || "16px"}; /* Corregido de props.overflow */
    cursor: ${props => props.cursor || "pointer"};
    position: relative;

    /* 3. Filtros iniciales (Ojo: si dejas blur por defecto, se verá borroso siempre) */
    filter: ${props => props.filter || "none"}; 
    backdrop-filter: ${props => props.backdropfilter || "none"};
    
    /* 4. Transiciones */
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out, opacity 0.6s ease-out;

    /* 5. Ajuste de la imagen interna */
    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover; /* Crucial para que no se deforme */
        display: block;
        
        /* Herencia de opacidad para ScrollReveal */
        opacity: inherit !important; 
        transition: inherit !important;
        animation: none !important; 
    }

    /* Efecto Hover opcional para probar los filtros */
    &:hover {
        filter: ${props => props.hoverFilter || "brightness(1.1)"};
    }
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

    img {
        /* Esto obliga a la imagen a seguir la opacidad del ScrollReveal */
        opacity: inherit !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
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
  /* ARREGLO DE TAMAÑO: Esto evita que las imágenes se vean pequeñas */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* ESTADO INICIAL (Para evitar el Pop) */
  opacity: 0;
  /* Usamos visibility para que no 'popee' antes de tiempo */
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  filter: ${props => props.filter || "blur(5px)"};
  
  transform: ${props => {
    if (props.$direction === 'none') return 'translate(0,0)';
    const offset = '50px';
    switch (props.$direction) {
      case 'left': return `translateX(-${offset})`;
      case 'right': return `translateX(${offset})`;
      case 'down': return `translateY(-${offset})`;
      case 'up': return `translateY(${offset})`;
      default: return `translateY(${offset})`;
    }
  }};

  /* TRANSICIONES */
  transition: 
    ${props => props.opacitytransition || "opacity 0.6s ease-out"}, 
    transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    ${props => props.filtertransition || "filter 0.6s ease-out"},
    visibility 0.6s; /* Importante para suavizar el cambio de visibility */
  
  transition-delay: ${props => props.$delay};

  /* ESTADO VISIBLE */
  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    filter: blur(0px);
    transform: translate(0, 0); /* Resetea tanto X como Y */
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
export const rectangleComponent = styled.div`
    display: ${props => props.display || 'grid'};
    grid-template-columns: ${props => props.gridTemplateColumns || 'auto auto auto'} ;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    border: ${props => props.border || '1.2rem solid black'} ;
    border-radius: ${props => props.borderRadius || ' border-radius: 0px'};
    cursor: ${props => props.cursor || ' pointer'};
    filter:  ${props => props.filter || ' none'};
    backdrop-filter:  ${props => props.backdropfilter || ' none'};
    animation: ${animationBottom} 2s ease-in-out forwards;  
    &:hover {
    
        filter:${props => props.filterHover || ' 9px'};
        backdrop-filter: ${props => props.backdropFilterHover || 'blur(9px)'};
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