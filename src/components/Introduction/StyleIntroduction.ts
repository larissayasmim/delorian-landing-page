import styled from "styled-components";

export const IntroductionContainerBg = styled.main`
  background-color: ${props => props.theme['blue-400']};
  height:740px;

  img {
    max-width: 100%;
    width: 700px;
    object-fit: cover;
    display: block;
  };
`

export const IntroductionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  max-width: 1605px;
  margin: 0 auto;
  

 
  
/* @media (max-width: 1700px) {   
    padding-left: 160px;   
    object-fit: contain;
  } */

  
`

export const InfoContainer = styled.div`

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    color: ${props => props.theme['white']};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 116%;
    padding-top: 6.375rem;
  };

  p {
    font-family: 'Roboto' monospace;
    font-size: 2.4rem;
    letter-spacing: 2px;
    line-height: 112%;
    color: ${props => props.theme['white']};
    font-weight: 300;
    padding-top: 3.3rem;
    padding-bottom: 2.5rem;
  };

  button {
    padding: 1rem;
    border-radius: 8px;
    width: 566px;
    height: 76px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 100%;
    outline: none;


    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['grey-300']};
      } 
  };

`


export const ImagesContainer = styled.div`
  img {
    /* object-fit: cover; */
    padding-top: 5rem;
    height: 850px;
    margin-left: 9.9rem;
  };

`







