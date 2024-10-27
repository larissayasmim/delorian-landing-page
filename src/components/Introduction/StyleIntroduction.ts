import styled from "styled-components";

export const IntroductionContainerBg = styled.main`
  background-color: ${props => props.theme['blue-400']};
  height:740px;


  @media (max-width: 1500px){
    height: 50vw;
  }

  @media (max-width: 1000px){
    height: 82vw;
  }

  @media (max-width: 600px){
    height: 44rem;
  }

  @media (max-width: 900px){
    height: 46rem;
}



  @media (max-width: 380px) {
    height: 41rem;
}
  
`

export const IntroductionContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 1605px;
  margin: 0 auto;
  padding: 0 3rem;
  gap: 10rem;

  img {
    max-width: 100%;
    height: auto;
    width: 1300px;
    padding-top: 102px;
  };

   

@media (max-width: 1500px) {   
 
  gap: 1rem;
  
  img {
  width: auto;
  height: 90%;
  margin: 0;
  padding: 0 2rem;
  object-fit: contain;
  margin-top: 5rem;
};
}

@media (max-width: 1300px) {   
 
 gap: 1rem;
 img {
 width: auto;
 height: 90%;
 margin: 0;
 padding: 0 2rem;
 object-fit: contain;
 margin-top: 5rem;
};
}


@media (max-width: 1200px) {   

 img {
 margin-top: 3.8rem;
};
}

@media (max-width: 1000px) {   

flex-direction: column;
gap: 2px;
align-items: center;

img {
max-width: 100%;
width: 500px;
height: auto;
margin: 0;
padding: 0 2rem;
object-fit: cover;
margin-top: 1rem;
};
}


@media (max-width: 900px){
  img{
    display: flex;
    margin: 0 auto;
    padding-top: 1rem;
    width: 65%;
  }

}


@media (max-width: 600px) {   

flex-direction: column;
gap: 2px;
align-items: center;
padding: 20px;


img {
display: flex;
max-width: 100%;
width: 400px;
height: auto;
margin: 0 auto;
padding: 0 0.01rem;
object-fit: cover;
margin-top: 1rem;
};
}
`

export const InfoContainer = styled.div`

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    color: ${props => props.theme['white']};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 116%;
    padding-top: 6.375rem;
  };

  p {
    font-family: 'Roboto', monospace;
    font-size: 2.4rem;
    letter-spacing: 2px;
    line-height: 112%;
    color: ${props => props.theme['white']};
    font-weight: 300;
    padding-top: 3.3rem;
    padding-bottom: 2.5rem;
  };

  button {
    padding: 1rem;
    border-radius: 8px;
    width: 566px;
    height: 76px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 100%;
    outline: none;


    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['grey-300']};
      } 
  };



@media (max-width: 1600px) {   

    h1 {
   
    font-size: 4.5rem;
    padding-top: 5rem;
  };

  p {
    font-size: 2.1rem;
  };

  button {
    padding: 1rem;
    width: 566px;
    height: 74px;
    font-size: 22px;
  };

}

@media (max-width: 1300px) {   

h1 {

font-size: 4rem;
letter-spacing: 1px;
line-height: 116%;
padding-top: 5rem;
};

p {
font-size: 2rem;
};

button {
    padding: 0.8rem;
    width: 500px;
    height: 72px;
    font-size: 22px;
    letter-spacing: 1px;
    line-height: 100%;
  };
}

@media (max-width: 1200px) {   

h1 {

font-size: 4rem;
padding-top: 4.5rem;
};

p {
font-size: 1.8rem;
};

button {
    padding: 0.8rem;
    width: 470px;
    height: 74px;
    font-size: 22px;
    letter-spacing: 1px;
    line-height: 100%;
  };
}

@media (max-width: 1100px) {   

h1 {

font-size: 3rem;
padding-top: 4.5rem;
};

p {
font-size: 1.2rem;
padding: 30px 0;
};

button {
    padding: 0.8rem;
    width: 340px;
    height: 72px;
    font-size: 22px;
  };
}


@media (max-width:1000px) {

  text-align: center;

  h1{
    font-size: 3rem;
    padding-top: 5rem;
  }
  p{
    margin-top: 10px;
    padding: 1.6rem;
  }

  button{
    width: 300px;
    height: 60px;
    font-size: 18px;
    margin-top: 10px;
  }
}


@media (max-width: 950px) {
h1{
  font-size: 3rem;
  padding-top: 4rem;
}
p{
  font-size: 1.4rem;
  margin-top: 10px;
  padding: 1rem;
}

button{
  width: 300px;
  height: 60px;
  font-size: 18px;
  margin-top: 10px;
}
} 
 
@media (max-width: 700px) {
h1{
  font-size: 3.4rem;
}
p{
  font-size: 1.5rem;
  margin-top: 20px;
}

button{
  height: 50px;
  width: 220px;
  font-size: 16px;
  margin-top: 10px;
}
}


@media (max-width: 600px){
  max-width: 95%;
  margin: auto 0;
  padding: 0.1rem;
  h1 {
    font-size: 2.4rem;
    padding-top: 2.5rem;
  };

  p {
    font-size: 1.1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    letter-spacing: 1px;
    line-height: 112%;
  };
  }



@media (max-width: 380px) {
    h1{
      padding-top: 1rem;
    }
   
}
  
`





