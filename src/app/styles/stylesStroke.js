import styled from "styled-components";

const borderBox = "1.2rem solid black ";
const borderRadius = " border-radius: 0px";


export const App = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export const ButtonStar = styled.button`
    padding : 20px 120px 20px 120px;
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

export const HeadPortafolio = styled.div`
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