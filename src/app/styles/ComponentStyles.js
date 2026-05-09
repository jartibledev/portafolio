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
    padding-top:  ${props => props.paddingtop || "1em"};
    padding-bottom: ${props => props.paddingbottom || "1em"};
    margin-bottom: ${props => props.paddingbottom || "10%"};
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

export const PictureComponent = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    display: block;
    overflow:  ${props => props.overflow || "hidden"};
    min-height: 250px;
    border-radius:${props => props.overflow || "16px"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};  
    filter: ${props => props.filter || "blur(16px)"};
    backdrop-filter: ${props => props.backdropfilter || "blur(9px)"};
    position: relative;
    img {
    display: block;
    width: 100% !important;
    height: auto !important;
    position: relative !important; /* Si no usas fill, asegúrate de que sea relativa */
  }

`;

export const ContainerPictureComponent = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexdirection || "column"};
    align-items: ${props => props.alignitems || "start"};
    margin-left:  ${props => props.marginLeft || "20%"};
    margin-right:  ${props => props.marginRight || "20%"};

    &:hover ${PictureComponent} {
                filter: none;
            } 
    
    &:hover ${FooterPictureComponent} {
        filter:blur(9px);
        backdrop-filter: blur(9px);   
        } 
    
     
`;

export const AnimatedSection = styled.div`
  opacity: ${props => props.opacity || "0"};
  /* Estado inicial según dirección */
  transform: ${props => props.$direction === 'left' ? 'translateX(-50px)' : props.$direction === 'right' ? 'translateX(50px)' : props.$direction === 'down' ? 'translateY(-50px)' : props.$direction === 'up' ? 'translateY(50px)' : props.$direction === 'none' ? 'translateY(0)' : 'translateX(0)' };
  filter: ${props => props.filter || "blur(5px)"};
  
    transition: ${props => props.opacityTransition || "opacity 0.6s ease-out"};
    transition:${props => props.transform  || "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)" };
    transition:${props => props.filtertransition || "filter 0.6s ease-out"};

  transition-delay: ${props => props.$delay};

  

  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
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
    border: ${props => props.border || '1.2em solid black'} ;
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