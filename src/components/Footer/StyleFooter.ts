import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; 
  margin: 0 auto;
  padding: 2rem 3rem;
  margin-top: 8rem;
  margin-bottom: 8%;
  position: relative;
  max-width: 1605px;
  .blocosInfo{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      gap: 4rem;
      margin-left: -5rem;   
    };
   a img {
    width: 60%;
    height: auto;
    display: block;
    margin-top: 1.2rem;
    &:hover {
        cursor: pointer;
      }
  };
  h3, .delorianResolveTitle{
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: black;
    margin-bottom: 1rem;
    padding-top: 1rem;
  };
  .delorianResolveTitle{
    &:hover {
        cursor: pointer;
      }
  };
  a, p {
    margin: 0;
    text-decoration: none;
    font-size: 22px;
    font-family: 'Roboto', monospace;
    font-weight: 400;
    letter-spacing: 1.5%;
    color: black;
    margin-bottom: 0.8rem;
  };
  .delorianResolve {
    display: flex;
    flex-direction: column;
    
    .delorianSolu{
      font-weight: 500;
    }
  };
  .whatsapp, .facebook, .instagram {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 500;
    img {
      height: 37px;
      width: 37px;
      margin-top: 0;
    }
  };
  @media (max-width: 1700px) {
      display: block;
      .item1 {
        max-width: 500px;
        width: 30%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .blocosInfo{
        max-width: max-content;
        margin: 0 auto;
        justify-items: center;
        padding: 2rem 3rem;
      }
};
  @media (max-width: 900px){
    display: block;
    padding: 0.5rem;
    margin-top: 4rem; 
    .item1 {
      max-width: 800px;
      width: 50%;
      margin-bottom: 1rem;
    }
    .blocosInfo{
      width: 95%;
      grid-template-columns: 1fr 1fr;
      padding: 0.1rem;
      gap: 3rem;   
      justify-content: center ;
      }  
    .item2{
      a{
        width: 17ch;
        padding-bottom: 2px;
        }
     }
    .item3{
        width: min-content;
        P{
          line-height: 125%;
          width: 16ch;
          font-weight: 400;
        }
      }
    h3 , .delorianResolveTitle{
    font-size: 30px;
    margin-bottom: 0.8rem;
    padding-top: 30px;
    line-height: 100%;
    font-weight: 700;
  }
    a, p {
    font-size: 24px;
    margin-bottom: 0.4rem;
    line-height: 100%;
    font-weight: 500;
}
  .faleConosco{
    margin-top: 0.5rem;
    width: max-content;
    grid-column: 1 / span 2; 
    text-align: center;
    h3{
        margin-bottom: 0.8rem;
        text-align: start;
    }
    p{
      font-size: 24px;
      margin-bottom: 0.8rem;
    }
  }
  .whatsapp, .facebook, .instagram {
    margin: 0;
    max-width: max-content;
    align-items: center;
    gap: 0.1rem;
    img {
      height: 35px;
      width: 35px;
      margin-top: 0;
    }
}
};
  @media (max-width: 600px) {
    display: block;
    padding: 0.5rem;
    margin-top: 4rem;
    .item1 {
      max-width: 800px;
      width: 50%;
      margin-bottom: 1rem;
      }
    .blocosInfo{
      width: 90%;
      grid-template-columns: 1fr 1fr;
      padding: 0.1rem;
      gap: 3rem;   
      justify-content: center ;
      }
      
    .item2{
      a{
        width: 17ch;
        padding-bottom: 2px;
        }
      }
    .item3{
      width: min-content;
      P {
          line-height: 125%;
          width: 16ch;
          font-weight: 400;
        } 
        }
      h3 , .delorianResolveTitle{
      font-size: 15px;
      margin-bottom: 0.8rem;
      padding-top: 8px;
      line-height: 100%;
      font-weight: 700;
    }
    a, p {
      font-size: 14px;
      font-family: 'Roboto', monospace;
      margin-bottom: 0.4rem;
      line-height: 100%;
      font-weight: 500;
    }
    &::after{
      content: " ";
    }
      .faleConosco{
      margin-top: 0.5rem;
      width: max-content;
      grid-column: 1 / span 2;
      text-align: center;
      h3{
        margin-bottom: 0.8rem;
        text-align: start;
    }
    p{
      font-size: 14px;
      margin-bottom: 0.4rem;
    }
  }
  .whatsapp, .facebook, .instagram {
    margin: 0;
    max-width: max-content;
   
    align-items: center;
    gap: 0.1rem;
    
    img {
      height: 22px;
      width: 22px;
      margin-top: 0;
    }
  }
};
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
  gap: 10rem;
  padding-left: 3rem;
  padding-right: 3rem;
  &::before{
    content: " ";
    width: 80%;
    height: 1px;
    background-color: ${props => props.theme['grey-130']};    
    position: absolute;
    margin-bottom: 8%;
  };
  .direitosReservados{
    display: flex;
    gap: 3px;
    align-items: center;
    margin-right: 30rem;
    white-space: nowrap;
    img{
      height: 14px;
      width: auto;
    }
  };
  .redesSociais {
    a img {
      height: 40px;
      width: auto;
      border: solid 2px transparent ;
      margin-right: 20px;
    &:hover {
        cursor: pointer;
        border: ${props => props.theme['blue-487']};
      }
   }
  };

@media (min-width: 901px) and (max-width: 1600px){
    max-width: 90%;

    display: grid;
    grid-template-columns: 1fr 2fr;
    font-size: 16px;
    gap: 1rem;

   
  .direitosReservados{
    display: flex;
    gap: 2px;
    align-items: center;
    margin-right: 0rem;
    margin-top: 3rem;
    justify-content: start;
    width: fit-content;
    img{
      max-width: max-content;
      height: 15px; 
    }
  }
  .redesSociais {
    padding-right: 1rem;
    margin-top: 3rem;
    max-width: max-content;
    align-self: flex-start;
    a img {
      height: 30px;
      width: auto;
      margin-right: 0.5rem;
   }
  }
};
  @media (max-width: 900px) {
    max-width: 85%;
    margin-bottom: 4rem;
    margin-top: 6rem;
    font-size: 16px;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    &::before{
      justify-content: center;
    }
  .direitosReservados{
    display: flex;
    gap: 2px;
    align-items: center;
    margin-right: 0rem;
    margin-top: 3rem;
    img{
      max-width: max-content;
      height: 15px; 
    }
  }
  .redesSociais {
    padding-right: 1rem;
    margin-top: 3rem;
    max-width: max-content;
    a img {
      height: 30px;
      width: auto;
      margin-right: 0.5rem;
    }
  }
};
  @media (max-width: 600px) {
    max-width: 95%;
    margin-bottom: 4rem;
    margin-top: 6rem;
    font-size: 6px;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  &::before{
    justify-content: center;
    height: 0.1px;
  }
  .direitosReservados{
    display: flex;
    gap: 2px;
    align-items: center;
    margin-right: 0rem;
    margin-top: 3rem;
    img{
      max-width: max-content;
      height: 8px; 
    }
  }
  .redesSociais {
    padding-right:0.1rem;
    margin-top: 3rem;
    max-width: max-content;
    a img {
      height: 16px;
      width: auto;
      margin-right: 0.5rem;
   }
  }
};
  @media (max-width: 550px){
  &::before{
    width: 70%;
    justify-self: center;
  }
  max-width: fit-content;
  display: grid;
  grid-template-columns: 1fr 3fr;
  .redesSociais {
  align-self: flex-start;
}
};
@media (max-width: 400px){
  &::before{
    justify-self: center;
  }
  .redesSociais {
    a img {
      height: 14px;
      margin-right: 1px;  
   }
  } 
};
`