import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue-100']};
  }

  body {
    background: ${props => props.theme['blue-100']};
  }

  button {
    font-family: 'Roboto', monospace;
    background-color: ${props => props.theme['blue-200']};
    border-style: none;
    color: ${props => props.theme['white']};
    text-transform: uppercase;
  }

`