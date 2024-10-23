import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
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
      font-weight: 700;
      letter-spacing: 0.12rem;
  }

`