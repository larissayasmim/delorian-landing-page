import styled from "styled-components";


export const DelorianServicesContainer = styled.div`
  max-width: 1605px;
  margin: 0 auto;
  padding: 0 3rem;
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
  }
  
`


export const ProblemSolutionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1f 1fr;
  margin-right: 2rem;
  gap: 4rem;
  padding-bottom: 100px;

  
`
export const ProblemSolution = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1rem;
  padding: 3rem;
  background: white;
  max-width: 480px;
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
  
`

export const ImageContainer = styled.div `
   position: relative;
   

 
  .imageInstalacao{
    z-index: 1;
    position: absolute;
    top: -20px;  /* Distância do topo */
    right: 60px;  /* Distância da direita */
    color: yellow;
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

  .imageMaisIcon{
    height: 80px;
    width: 80px;
    padding: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme['blue-400']};
   }


  
`


export const ProblemSolutionIconMais = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h3 {
    margin-top: 5rem;
  }

  img{
    margin-top: 2rem;
  }
`