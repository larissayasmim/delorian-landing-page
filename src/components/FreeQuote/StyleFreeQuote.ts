import styled from "styled-components";

export const FreeQuoteContainer = styled.div`
    max-width: 1605px;
    width: 78%;
    margin: 0 auto;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    align-items: center;
    justify-items: start;
    padding:0 3rem;


    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: start;
      margin-top: 100px;
    }

    img {
      max-width: 100%;
      height: auto;
      width: auto;
      height: 600px;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 50px;
      line-height: 60px;
      color: black;
      margin-bottom: 2rem;
     align-self: flex-start;
  
    }
    
    p{
      font-family: 'Roboto', monospace;
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      max-width: 48ch;

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



    @media (max-width: 900px) {
      max-width: 680px;
    grid-template-columns: 1fr 2fr;
    width: 95%;
    margin-bottom: 3rem;
    gap: 10px;
    padding:0 1rem;


    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 0px;
    }

    img {
      max-width: 100%;
      height: 480px;
      width: auto;
    
    }

    h2 {
      
      font-size: 46px;
      line-height: 50px;
      margin-bottom: 0.7rem;
  
    }
    
    p{
     
      font-size: 30px;
      font-weight: 400;
      line-height: 45px;
    }

    button {
      font-size: 18px;
      padding: 20px 40px;
      width: 250px;
      height: 70px;
      margin-top: 10px;
      margin-right: 2px;
      align-self: flex-end;
    }

    }

    @media (max-width: 600px) {
    grid-template-columns: 1fr 2fr;
    width: 95%;
    margin-bottom: 3rem;
    gap: 10px;
    padding:0 1rem;


    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 0px;
    }

    img {
      max-width: 100%;
      height: 190px;
      width: auto;
    
    }

    h2 {
      font-size:20px;
      line-height: 21px;
      margin-bottom: 0.4rem;
  
    }
    
    p{
      font-size: 11px;
      font-weight: 400;
      line-height: 20px;

    }

    button {
      font-size: 10px;
      padding: 10px 20px;
      width: 150px;
      height: 45px;
      margin-top: 8px;
      align-self: flex-end;
    }

    }




@media (max-width: 380px) {
  button {
      font-size: 9px;
      width: 130px;
      height: 40px;
      margin-top: 8px;
     
    }

    h2 {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 0.4rem;
  
    }
    
    p{
      font-size: 11px;
      line-height: 19px;

    }

}
`