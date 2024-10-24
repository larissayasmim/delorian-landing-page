import styled from "styled-components";

export const CallDelorianContent = styled.div`
  height: 1220px;
  background: ${props => props.theme['grey-130']}; 
  padding: 3rem;
   
.motoChamaDelorianContainer {
  position: relative;
  display: inline-block;
}

.chamaDeloriamImg {
  position: relative;
  z-index: 1; 
  width: 800px; 
  top: 300px;
      
}
.motoImg {
  position: absolute;
  top: 20px; 
  left: 690px;
  z-index: 2; 
  width: 1150px;
}
  
`