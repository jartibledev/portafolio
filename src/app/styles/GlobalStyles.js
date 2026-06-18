// components/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-inter), sans-serif;
    margin: 0;
  }

  h1, h2 {
    font-family: var(--font-dm-mono), monospace;
  }
`;

export default GlobalStyles;
