import styled from "styled-components";

export const FreeQuoteContainer = styled.div`
    max-width: 1605px;
    margin: 0 auto;
    margin-bottom: 8rem;
    display: flex;
    align-items: center;
    padding:0 3rem;


    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      margin-top: 100px;
    }

    img {
      width: 500px;
      height: 600px;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 50px;
      line-height: 60px;
      color: black;
      margin-bottom: 2rem;
    }
    
    p{
      font-family: 'Roboto', monospace;
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;

    }

    button {
      font-size: 22px;
      padding: 15px 40px;
      border-radius: 8px;
      width: 300px;
      height: 70px;
      align-self: flex-end;
      margin-top: -2rem;



    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['black-100']};
      }

    }
`