import styled from "styled-components";

export const IntroductionContainerBg = styled.main`
  background-color: ${props => props.theme['blue-400']};

  img {
    max-width: 100%;
    display: block;
  }


`

export const IntroductionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 130px ;
`

export const InfoContainer = styled.div`

  padding-left: 10rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    color: ${props => props.theme['white']};
    font-weight: 600;
    padding-top: 5.06rem;
    letter-spacing: 1.5%;
    line-height: 112%;
    max-height: min-content;
    
  }

  p {
    font-family: 'Roboto' monospace;
    font-size: 2.5rem;
    letter-spacing: 1.5%;
    line-height: 112%;
    color: ${props => props.theme['white']};
    font-weight: 300;
    padding-top: 3.25rem;
    padding-bottom: 2.5rem;
  }

  button {
    padding: 1rem;
    border-radius: 8px;
    width: 520px;
    height: 60px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1.8%;
    line-height: 100%;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['grey-300']};
      }
  }
`
export const ImagesContainer = styled.div`
  img {
    padding-top: 3.2rem;
  }
`

