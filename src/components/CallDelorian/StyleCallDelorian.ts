import styled from "styled-components";

export const CallDelorianContent = styled.div`
  display: flex;
  max-width: 100%;
  height: 1300px;
  background: ${props => props.theme['grey-130']};
  justify-content: center;
  padding-top: 10rem;

  div {
   display: flex;
   
  }

  .chamaDeloriamImg{    
    height: 35rem;  
    padding-left: 2rem;
    padding-top: 16rem;

  }
  .motoImg {
    height: 50rem;  
    z-index: 1; 
    
  }
`