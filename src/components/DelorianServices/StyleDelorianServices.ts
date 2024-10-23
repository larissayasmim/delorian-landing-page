import styled from "styled-components";


export const DelorianServicesContainer = styled.div`
  max-width: 1605px;
  margin: 0 auto;
`

export const TitleDelorianServices = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 120px;
  margin-bottom: 80px;

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
  padding-bottom: 18rem;

`
export const ProblemSolution = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1.8rem;
  padding: 3rem;
  background: white;
  max-width: 480px;
  height: 457px;
  border-radius: 8px;
  border: solid 1px ${props => props.theme['black-00']};
  text-align: start;

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



