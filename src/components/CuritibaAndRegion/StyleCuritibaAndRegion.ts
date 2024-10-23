import styled from "styled-components";

export const CuritibaContainer = styled.div`
    max-width: 1605px;
    margin: 0 auto;
    background: ${props => props.theme['grey-200']};
    border-radius: 50px;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;

    margin-bottom: 14rem;
    z-index: 1;
    margin-top: -15rem;

   h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 50px;
      font-weight: 700;
      line-height: 70px;
      color: white;
      padding: 60px 0 30px 80px;
   }

   p {
      font-family: 'Roboto', monospace;
      font-weight: 400;
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 1.5%;
      color: white;
      padding-left: 80px;
      padding-bottom: 20px;
   }

   button {
    margin-left: 80px;
    margin-bottom: 80px;
    padding: 20px 9rem;
    border-radius: 8px;
    font-size: 22px;
    font-weight: 700;


    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['black-100']};
      }

   }

   img {
    width: 100%;
    height: 30rem;
    justify-items: start;
    padding-top: 2rem;
    padding-right: 4rem;
    padding-bottom: 4rem;
   }
`