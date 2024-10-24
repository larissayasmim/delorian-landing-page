import styled from "styled-components";

export const EngineBrandsContainer = styled.div`
  width: 100%;
  background-image: url('src/assets/retangulo.png'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0 3rem;
  height: 670px;

  .title {
    max-width: 1605px;
    margin: 0 auto;
    padding-top: 10.5rem;
  }
  
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 54px;
    line-height: 102%;
    letter-spacing: -2%;
    color: white;
    text-align: center;
  }

  .brands {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding-top: 5rem;

  }

  .peccininLogo, .garenLogo {
    justify-self: flex-start;
  }
   .niceLogo, .rossiLogo{
    justify-self: flex-end;
  }

`