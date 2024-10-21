import styled from "styled-components";

export const HeaderContainer = styled.header`
 
  background-color: ${props => props.theme['white']};

  .hamburguer {
      display: none;
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
    }


  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    padding: 2rem 14.5rem;
    max-width: 1920px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    gap: 1.6rem;
  }

  a img {
    width: 286px;
    height: 60px;
    display: block;
    margin-top: 1.2rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 1.625rem;
      width: auto;
      height: 3rem;
      padding: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme['black-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

       &:hover {
        border-bottom: 3px solid ${props => props.theme['blue-200']};
        transition: 1s;
      
      }
    }

  
    
    button {
  
      background: none;
      margin-top: 0.2rem;
      width:14.5rem;
      height: 3rem;
      border-radius: 0.5rem;
      font-weight: 700;
      font-size: 1.25rem;
      font-family: 'Roboto', monospace;
      background-color: ${props => props.theme['blue-200']};
      border-style: none;
      color: ${props => props.theme['white']};
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['black-100']};
      }

    }
}







  @media (max-width: 1700px) {
    div {
      padding: 2rem 10rem 1.8rem 10rem;
    }

    a img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 300px;
    height: 50px;
  }

  }


  @media (max-width: 1400px) {
    div {
      padding: 2rem 10rem 1.8rem 10rem;
    }

    a img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 200px;
    height: 50px;
  }

  }


  @media (max-width: 1300px) {
    div {
      padding: 1.8rem 8rem 1.8rem 8rem;
    }

    a img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 180px;
    height: 45px;
  }

  }

  @media (max-width: 1200px) {
    div {
      padding: 1.6rem 7rem 1.6rem 7rem;
    }

    a img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 160px;
    height: 45px;
  }

  }

  @media (max-width: 1100px) {
    div {
      padding: 1.6rem 6rem 1.6rem 6rem;
    }
    nav {
      gap: 1rem;
    }
    
    a img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 170px;
    height: 40px;
  }
  nav button {
      margin-top: 0.3rem;
      width: 9.2rem;
      height: 2.6rem;
      font-size: 1rem;
    }

  }

  @media(max-width: 1000px) {

    div {
      gap: 0.4rem;
    }
    
    a img {
      margin-top: 2rem;
      margin-bottom: 1.2rem;
      width: 160px;
      height: 30px;
    }

    nav {
      margin-bottom: 0.6rem;
    }

    nav a {
      flex-wrap: nowrap;
      font-size: 1.3rem;

      &:hover {
        border-bottom: 2px solid ${props => props.theme['blue-200']};
      }
    }

    nav button {
      margin-top: 0.2rem;
      width: 8rem;
      height: 2.560rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
    }
  }


@media(max-width: 900px) {

  div {
    justify-content: space-between;
  }

  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.8rem;
  }

  nav.open {
    display: flex;
  }

  .hamburguer {
    display: block;
  }

  nav button {
      margin-top: 0.2rem;
      width: 8rem;
      height: 2.560rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      margin-bottom: 1.2rem;
    }

    nav a {
      &:hover {
        border-radius: 8px;
        padding: 10px 20px;
        border-bottom: none;
        background-color: ${props => props.theme['black-100']};
        color: white;
    }
}


@media(max-width: 800px) {

  nav {
  gap: 0.5rem;
  padding-top: 2rem

}

  nav a {
  font-size: 1.2rem;
}
  nav button {
    margin-top: 0.2rem;
    width: 8rem;
    height: 2.560rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
}


@media(max-width: 600px) {
  div {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  nav {
  gap: 0.3rem;
  padding-top: 2rem
  }

  a img {
  margin-top: 1.7rem;
  margin-bottom: 0.5rem;
  width: 130px;
  height: 25px;
  }

  nav a {
  font-size: 1rem;
  }
  nav button {
    margin-top: 0.2rem;
    width: 7rem;
    height: 2.400rem;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
  }

  .hamburguer {  
    font-size: 1.5rem;
    }
  }
}

@media(max-width: 400px) {
  div {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  nav {
  gap: 0.2rem;
  padding-top: 1rem
}

  a img {
  margin-top: 1.7rem;
  margin-bottom: 0.5rem;
  width: 120px;
  height: 24px;
}

  nav a {
  font-size: 1rem;
}
  nav button {
    margin-top: 0.2rem;
    width: 7rem;
    height: 2.200rem;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }
}

`