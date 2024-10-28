import styled from "styled-components";

export const ButtonWhatsappContainer = styled.div`
    margin: 0 auto;
    padding: 0 3rem;
    .whatsappIconFixed {
      position: fixed;
      padding: 4px;
      bottom: 2px; 
      right: 20px;
      width: 70px; 
      height: 70px;
      cursor: pointer;
      z-index: 1000;
      border: solid 2px transparent;
      margin: 1rem;
      animation: blink 6s infinite;
      &:hover {
        width: 80px; 
        height: 80px;
        animation: none;
      }
  };
  @keyframes blink {
    0% {
      opacity: 2;
    }
    50%{
      opacity: 1;
      transform: scale(1);
    }
    51%{
      opacity: 1;
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
      opacity: 2;
    }
  };
  @media (max-width: 600px) {
    .whatsappIconFixed {
      bottom: 1vw; 
      right: 2vw;
      width: 50px; 
      height: 50px;
      position: fixed;
    }
  };
`