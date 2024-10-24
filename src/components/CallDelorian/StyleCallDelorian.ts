import styled from "styled-components";

export const CallDelorianContent = styled.div`
  display: flex;
  max-width: 100%;
  height: 1300px;
  background: ${props => props.theme['grey-130']};
  justify-content: center;
  padding: 10rem 3rem 0 3rem;

  div {
   display: flex;
  }


  .chamaDeloriamImg{   
    height: 48rem; 
    margin-left : 8rem;
    padding-left: 2rem;
    padding-top: 16rem;

  }
  .motoImg {
    margin-top: -80px;
    margin-right: 20rem;
    height: 55rem; 
    z-index: 1; 
    
  }
`