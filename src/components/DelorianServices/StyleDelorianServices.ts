import styled from "styled-components";


export const DelorianServicesContainer = styled.div`
  max-width: 1605px;
  margin: 0 auto;
  padding: 0 3rem;


  @media (max-width: 900px){
  padding: 1.8rem;
}

@media (max-width: 600px){
  padding: 0 2rem;
}

`

export const TitleDelorianServices = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 60px;
  margin-bottom: 60px;
  padding-top: 40px;
  
  

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: auto;
    letter-spacing: 5%;
    color: ${props => props.theme['blue-500']};
    font-family: 'Poppins', sans-serif;
   
  }
  img {
    height: 5.5rem;
    width: auto;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
 

  
    h1{
      font-size: 2.8rem;
    }
    img{
      height: 5.35rem;
    }
  }


  @media (max-width: 900px){
    margin-bottom: 40px;
    padding-top: 10px;
}

  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 20px;
   

  

    margin-top: 20px;
    h1{
      font-size: 1.5rem;
    
    }
    img{
      height: 3rem;
      width: auto;
    }
  }


 
`


export const ProblemSolutionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-flow: dense;
  padding-bottom: 100px;
 


  /* @media (max-width: 2000px) {
    gap: 1.5rem;

  } */

  @media (max-width: 1000px) {
   gap: 2rem;
  }

  @media (max-width: 900px){
  padding-bottom: 50px;
}

  @media (max-width: 600px) {
  justify-items: center;
}

`
export const ProblemSolution = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1rem;
  padding: 3rem;
  background: white;
  max-width: 500px;
  height: 480px;
  border-radius: 8px;
  border: solid 1px ${props => props.theme['black-00']};
  text-align: start;


  img {
    height: 150px;
    width: auto;
    position: relative;
  }
  

  h3 {
    font-size: 28px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme['blue-300']};
    line-height: 107%;
    letter-spacing: 1.5%;
    font-weight: 600;
    text-align: start;
  }

  p {
    font-size: 22px;
    font-family: 'Roboto', monospace;
    color: ${props => props.theme['black-100']};
    line-height: 127%;
    letter-spacing: 1.8%;
    font-weight: 400;
  }


/*   
  @media (max-width: 2000px) {
    img{
    height: 110px;
    width: auto;
    margin-bottom: 10px;
   }

  } */

  @media (max-width: 1000px) {
    justify-content: center;
   img{
    height: 140px;
    margin-bottom: 10px;
   }
  }


@media (max-width: 900px){
  padding: 1.8rem;
  img {
    height: 98px;
 
  }
}


  @media (max-width: 600px) {
  gap: 1rem;
  padding: 2rem;
  max-width: 100%;
  height: 320px;
  img {
    height: 98px;
 
  }
    h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
  }
  
`

export const ImageContainer = styled.div `
   position: relative;

  .imageInstalacao{
    z-index: 1;
    position: absolute;
    top: -10%;  /* Distância do topo */
    right: 16%;  /* Distância da direita */
    height: 80px;
    width: 80px;
    padding: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme['blue-400']};
  }

  .imageControle {
   height: 200px;
   display: flex;
   margin-left: 30px;
   margin-top: 3px;
  }


   @media (max-width: 1000px) {

     .imageControle {
      height: 155px;
  } 
   
  }


  /* @media (max-width: 2000px) {
    gap: 1.5rem;

  }
 */

  @media (max-width: 900px){
 

  .imageInstalacao{
    top: -30%;  /* Distância do topo */
    right: 20%;  
    height: 75px;
    width: 75px;
    padding: 18px;
  }

  .imageControle {
   height: 140px;
   margin-left: 10px;
   margin-top: 2px;
  }

  .imageMaisIcon{
    height: 80px;
    width: 80px;
    margin-right: 5vw;
    margin-top: -8vw;
   }
}


  @media (max-width: 600px) {

   
  .imageInstalacao{
    top: -25%;  /* Distância do topo */
    right: 25%;  
    height: 55px;
    width: 55px;
    padding: 10px;
  }

  .imageControle {
   height: 100px;
   margin-left: 40px;
   margin-top: 6px;
  }

  .imageMaisIcon{
    height: 70px;
    width: 70px;
    margin-right: 5vw;
  
   }
  
   @media (max-width: 380px) {
       
  .imageInstalacao{
    top: -20%;  /* Distância do topo */
    right: 16%;  
  }

  .imageMaisIcon{
    margin-right: 14vw;
   }


   
}

  


}
`


export const ProblemSolutionIconMais = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
  height: auto;

  h3 {
    margin-top: 5rem;
    align-self: flex-start;
  }

  img{
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
   
    h3 {
    margin-top: 4rem;
  }

  img{
    margin-top: -1rem;
  }

  }
  
`