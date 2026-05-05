'use client';
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const borderBox = "1.2rem solid black ";
const borderRadius = " border-radius: 0px";
const slideInLeft = keyframes`
     from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
export const FooterStyles = styled.footer`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 2%;
    padding-bottom: 2%;
     animation: ${slideInLeft} 1s ease-out slide-bottom;

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
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    
    
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
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
`;