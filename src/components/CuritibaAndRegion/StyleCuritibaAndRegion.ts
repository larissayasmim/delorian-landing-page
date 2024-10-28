import styled from "styled-components";

export const CuritibaContainer = styled.div`
    max-width: 1605px;
    width: 80%;
    margin: 0 auto;
    background: ${props => props.theme['grey-200']};
    border-radius: 50px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    margin-bottom: 7rem;
    z-index: 999;
    margin-top: -14.98rem;
   h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 50px;
      font-weight: 700;
      line-height: 70px;
      color: white;
      padding: 60px 0 30px 80px;
   };
   p {
      font-family: 'Roboto', monospace;
      font-weight: 400;
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 1.5%;
      color: white;
      padding-left: 80px;
      padding-bottom: 20px;
   };
   button {
      width: 86%;
    margin-left: 80px;
    margin-bottom: 80px;
    padding: 20px 1rem;
    border-radius: 8px;
    font-size: 22px;
    font-weight: 70px;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['black-100']};
      }
   };
   img {
    max-width: 100%;
    height: auto;
    width: 40rem;
    justify-items: end;
    padding-top: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
   };
@media(min-width:901px) and (max-width: 1500px){
    margin-top: -20%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem 2rem;
    
    .item1 {
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      align-self: center;
      max-width: max-content;
      margin: 0 auto;
      h2{
         text-align: start;
      }
      p{
         text-align: start;
      }
   }
   h2 {
      padding: 0;
      font-size: 26px;
      line-height: 28px;
      margin-bottom: 1rem;
   }
   p {
      padding: 0;
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 1.4rem;
   }
   button {
    padding: 1.5rem;
    font-size: 15px;
    width: 90%;
    height: 30%;
    margin: 0;
   }
};
   @media (max-width: 900px){
    margin-top: -45%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 1rem 2rem 5rem;
    height: max-content;
    margin-bottom: 4rem;
   .item1 {
      grid-row: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: max-content;
      margin: 0 auto;
      h2{
         text-align: center;
      }
   }
   .item2{
      grid-row: 1;
   }
   h2 {
      padding: 0;
      font-size: 26px;
      line-height: 28px;
      margin-bottom: 1rem;
   }
   p {
      padding: 0;
      font-size: 19px;
      line-height: 28px;
      margin-bottom: 1.4rem;
   }
   button {
      text-align: center;
    padding: 1.8rem;
    font-size: 18px;
    width: 98%;
    height: auto;
    margin: 0;
   }
   img {
    max-width: 100%;
    height: 450px;
    width: auto;
    justify-items: center; 
   }
};
@media (max-width: 600px) {
    margin-top: -62%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 1rem 2rem 5rem;
    height: max-content;
    margin-bottom: 4rem;
   .item1 {
      grid-row: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: max-content;
      margin: 0 auto;
      h2{
         text-align: center;
      }
      p{
         max-width: 26ch;
      }
   }
   .item2{
      grid-row: 1;
   }
   h2 {
      padding: 0;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 1rem;
   }
   p {
      padding: 0;
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 1.4rem;
   }
   button {
    padding: 1.5rem;
    font-size: 15px;
    width: 90%;
    height: 30%;
    margin: 0;
   }
   img {
    max-width: 100%;
    height: auto;
    width: 30rem;
    justify-items: center;
    padding-top: 2rem;
    padding-right: 0px;
    padding-bottom: 8px;
   }
};
@media (max-width: 380px) {
   margin-top: -85%;
   padding: 1rem 2rem 4rem;
    h2{
      font-size: 22px;
    }
    p{
      font-size: 16px;
    }
    button {
    padding: 1.5rem;
    font-size: 14px;
   }
};
`