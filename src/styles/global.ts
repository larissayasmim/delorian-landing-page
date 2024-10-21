import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue-100']};
  }

  body {
    margin: 0px;
    background: ${props => props.theme['blue-100']};
  }
  h1, ul, nav{
    margin: 0px;
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  button {
    font-family: 'Roboto', monospace;
      background-color: ${props => props.theme['blue-200']};
      border-style: none;
      color: ${props => props.theme['white']};
      text-transform: uppercase;
  }

`