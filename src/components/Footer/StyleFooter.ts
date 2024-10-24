import styled from "styled-components";


export const FooterContainer = styled.div`
   max-width: 1605px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   margin-top: 8rem;
   padding-left: 3rem;
   padding-right: 3rem;


   a img {
    width: 60%;
    height: 50px;
    display: block;
    margin-top: 1.2rem;

    &:hover {
        cursor: pointer;
      }
  };

  h3 , .delorianResolveTitle{
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: black;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .delorianResolveTitle{
    &:hover {
        cursor: pointer;
      }
  
  }
  a, p {
    margin: 0;
    text-decoration: none;
    font-size: 22px;
    font-family: 'Roboto', monospace;
    font-weight: 400;
    letter-spacing: 1.5%;
    color: black;
    margin-bottom: 0.8rem;
  }

  .delorianResolve {
    display: flex;
    flex-direction: column;
  }


  &::after{
    content: " ";
    height: 1px;
    width: 1600px;
    margin-top: 8rem;
    background-color: ${props => props.theme['grey-130']};
    grid-column: 1/5;
    align-items: center;
    
  }


  .whatsapp, .facebook, .instagram {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    
    img {
      height: 37px;
      width: 37px;
      margin-top: 0;
   
    }
  }

`

export const DireitosReservadosContainer = styled.div`
  max-width: 1605px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 8rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', monospace;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${props => props.theme['blue-487']};
  gap: 20rem;
  padding-left: 3rem;
  padding-right: 3rem;
  
  .direitosReservados{
    
    display: flex;
    gap: 3px;
    align-items: center;
    margin-right: 30rem;
    
    img{
      height: 14px; 
    }
  }
  
  
  .redesSociais {
    padding-right: 10rem;
    a img {
      height: 40px;
      border: solid 2px transparent ;

    &:hover {
        cursor: pointer;
        border: ${props => props.theme['blue-487']};
      }
  
   }
  }

 
`

