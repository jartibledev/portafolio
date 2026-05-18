import styled, { css } from 'styled-components';

const formColor = 'white'
const fieldBorderColor = 'black'
const fieldTextColor = 'black'
const focusedField = 'olive'

const formCoverElementStyles = css`

`;

export const buttonStyles = styled.button`
    border: 17 px solid ${fieldBorderColor}; 

`;  

export const buttonTextStyles = styled.p`
    font-size : 1 rem;
    color : ${fieldTextColor}
`;
