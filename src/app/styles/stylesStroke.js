'use client';
import styled from "styled-components";
import Image from "next/image";

const borderBox = "1.2rem solid black ";
const borderRadius = " border-radius: 0px";


export const App = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
`;
export const ArticleStyles = styled.article`
    width: 100%;
    height: 100%;
    display: grid;
    height: 100vh;
`;
export const FooterStyles = styled.footer`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto  ;
`;
export const HeroStyles = styled.footer`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto  ;
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
    height: 100%;
    transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
    cursor:pointer;
    filter: none;
    backdrop-filter: none;
    padding-top: 1em;
    pading-bottom: 1em;  
    
    
`;
export const SectionStyles = styled.section`
    width: 1040px;
    height: 841px;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-template-columns: auto auto ;
    grid-gap: 2em; 
    padding-right: 6.5em;
    padding-left: 6.5em;
   
`;
export const ContainerPicture = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    grid-template-columns: auto auto ;
    grid-gap: 1.5em;

     &:hover ${Picture} {
            filter: none;
        } 

      &:hover ${FooterPicture} {
        filter:blur(9px);
        backdrop-filter: blur(9px);   
    } 
     
    
`;





export const BlankSpace = styled.div`
    padding: 0rem 3rem 0rem 3rem ;
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
        display: grid;
        grid-template-columns: auto auto auto ;
        transition: filter 300ms ease-out, backdrop-filter 300ms ease-out ;  
        background-color: transparent;
        border: ${borderBox};
        border-radius: ${borderRadius};
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
        &:hover {
            filter:blur(9px);
            backdrop-filter: blur(9px);
        } 
        
`;