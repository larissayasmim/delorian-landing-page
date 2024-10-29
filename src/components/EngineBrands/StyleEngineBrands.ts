import styled from "styled-components";

export const EngineBrandsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-image: url('src/assets/backgroundAzul.png'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  padding: 0 3rem;
  .title {
    max-width: 1605px;
    margin: 0 auto;
    padding-top: 10rem;
  };
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 54px;
    line-height: 102%;
    letter-spacing: -2%;
    color: white;
    text-align: center;
  };
  .brands {
    max-width: 1000px;
    height: auto;
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 5rem;
    padding-top: 5rem;
    margin-bottom: 10rem;
  };
  .peccininLogo, .garenLogo {
    justify-self: flex-start;
  };
   .niceLogo, .rossiLogo{
    justify-self: flex-end;
  };
  @media (min-width: 1010px) and (max-width: 1800px){
    h3{
      margin-top: 2rem;
    }
    .brands {
      max-width: 850px;
      height: 200px;
      width: auto;
      margin: 0 auto;
      display: grid;
      gap: 3rem;
      padding-top: 4rem;
      margin-bottom: 14rem;
      img{
        width: 85%;
        height: auto;
      }
  }
  };
  @media (max-width: 1000px) {
  .brands {
    max-width: 500px;
    height: 200px;
    width: auto;
    margin: 0 auto;
    display: grid;
    gap: 1px;
    padding-top: 3rem;
    margin-bottom: 7rem;
    img{
      width: 85%;
      height: auto;
    }
  }
  };
  @media (max-width: 600px) {
  padding: 0 1rem;
  margin-bottom: 3rem;
  .title {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 6rem;
  }
  h3 {
    font-size: 26px;
  }
  .brands {
    max-width: 1000px;
    height: 130px;
    width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding-top: 2rem;
    margin-bottom: 5.2rem;
    img{
      width: 90%;
      height: auto;
    }
  }
  };
  @media (max-width: 380px) {
  padding: 1 0.4rem;
  margin-bottom: 2rem;
  .title {
    max-width: 350px;
    padding-top: 4rem;
  }
  h3 {
    font-size: 24px;
  }
  .brands {
    max-width: 260px;
    height: 100px;
    padding-top: 2rem;
    margin-bottom: 5rem;
    gap: 0;
    img{
      width: 80%;
      height: auto;
    }
  }
  };
`