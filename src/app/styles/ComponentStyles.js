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

export const ArticleComponent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const SectionComponent = styled.section`
    width: ${props => props.width || "100%"} ;
    height: ${props => props.height || "20vh"} ;
    display: ${props => props.display || "flex"};
    flex-direction:${props => props.flexDirection || "column"};
    align-items: ${props => props.alignItems || "center"};
    padding-left: ${props => props.paddingLeft || "25%"};
    padding-right: ${props => props.paddingRight || "25%"};
    padding-top:  ${props => props.paddingTop || "1em"};
    padding-bottom: ${props => props.paddingBottom || "1em"};
`;

export const TextComponent = styled.div`
    width:  ${props => props.width || "100%"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    margin-left: ${props => props.margginLeft || "5%"};
    margin-right: ${props => props.margginRight || "5%"};
    margin-bottom: ${props => props.margginBottom || "5%"};
`;

export const GalleryComponent = styled.div`
    width:  ${props => props.width || "100%"};
    min-widht: ${props => props.minWidth || "20vh"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};

`;

export const WorkSection = styled.div`
    width:  ${props => props.width || "100%"};
    flex: ${props => props.flex || "1"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};
    filter: ${props => props.filter || "none"};
    backdrop-filter:  ${props => props.backdropFilter || "none"};
    padding-top:  ${props => props.paddingTop || "1em"};
    padding-bottom: ${props => props.paddingBottom || "1em"};  
    justify-content: ${props => props.paddingBottom || "space-between"};
    margin-bottom: ${props => props.margginBottom || "3%"};
    
    
`;
export const FooterPicture = styled.div`
    width:  ${props => props.width || "100%"};
    flex: ${props => props.flex || "1"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "row"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};
    filter: ${props => props.filter || "none"};
    backdrop-filter:  ${props => props.backdropFilter || "none"};
    padding-top:  ${props => props.paddingTop || "1em"};
    padding-bottom: ${props => props.paddingBottom || "1em"};  
    justify-content: ${props => props.paddingBottom || "space-between"};
    
    
`;

export const Picture = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    overflow:  ${props => props.overflow || "100%"};
    
    border-radius:${props => props.overflow || "16px"};
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor: ${props => props.cursor || "pointer"};  
    filter: ${props => props.filter || "blur(16px)"};
    backdrop-filter: ${props => props.backdropFilter || "blur(9px)"};
    
`;

export const ContainerPicture = styled.div`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    align-items: ${props => props.alignItems || "start"};
    margin-left:  ${props => props.marginLeft || "5%"};
    margin-right:  ${props => props.marginRight || "5%"};

    &:hover ${Picture} {
                filter: none;
            } 
    
    &:hover ${FooterPicture} {
        filter:blur(9px);
        backdrop-filter: blur(9px);   
        } 
    
     
`;

export const AnimatedSection = styled.div`
  opacity: ${props => props.opacity || "0"};
  /* Estado inicial según dirección */
  transform: ${props => props.$direction === 'left' ? 'translateX(-50px)' : props.$direction === 'right' ? 'translateX(50px)' : props.$direction === 'down' ? 'translateY(-50px)' : props.$direction === 'up' ? 'translateY(50px)' : 'translateY(0px)' };
  filter: ${props => props.filter || "blur(5px)"};
  
  transition: 
    ${props => props.opacityTransition || "opacity 0.6s ease-out"} , 
    ${props => props.transform || "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"},
     ${props => props.filter || "filter 0.6s ease-out"};
  
  transition-delay: ${props => props.$delay};

  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
  `}
`;