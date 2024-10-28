import styled from "styled-components";

export const CallDelorianContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 65vw;
  background: ${props => props.theme['grey-130']}; 
  padding: 3rem;
  z-index: -1;
.chamaDeloriamImg {
  width: 40vw;  
};
.motoImg{
  width: 60%; 
  position: absolute;
  right: 0;
  top: 5%;
  transform: translateX(-5%);
  padding-bottom: 20rem;
};
@media (min-width: 910px){
  height: 780px;
};
@media (min-width: 1200px){
  height: 950px;
};
@media (min-width: 1500px){
  height: 1200px;
};
@media (max-width: 900px){
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
  z-index: -1;
  height: 1200px;
  .chamaDeloriamImg,
  .motoImg {
    width: 90%;
    position: static;
    transform: none; 
    margin-bottom: -16%;
  }
  .motoImg{
    margin-left: -7%;
    width: 110%;
  }
};
@media (max-width:600px){
  flex-direction: column;
  align-items: center;
  padding-bottom: 400px;
  z-index: -1;
  height: 750px;
  .chamaDeloriamImg,
  .motoImg {
    width: 110%;
    position: static;
    transform: none; 
    margin-bottom: -16%;
  }
  .motoImg{
    margin-left: -20%;
    width: 130%;
  }
};
`