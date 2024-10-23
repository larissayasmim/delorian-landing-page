import styled from "styled-components";

export const EngineBrandsContainer = styled.div`
  width: 100%;
  background-image: url('src/assets/retangulo.png'); /* Defina a URL da sua imagem */
  background-size: cover; /* Faz a imagem preencher todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  /* background-size: 2000px 600px; */
  height: 660px;

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
    gap: 2rem;
    padding-top: 5rem;

  }

`