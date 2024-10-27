import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['white']}; 
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    max-width: 1605px;
    margin: 0 auto;
    padding: 2rem 3rem;
    box-sizing: border-box;
  };
  a img {
    width: 286px;
    height: 60px;
    display: block;
    margin-top: 1.2rem;
    &:hover {
        cursor: pointer;
      }}; 
  nav {
    display: flex;
    gap: 4rem;
    align-items: center;
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
      }
    } 
    button {
      background: none;
      margin-top: 0.2rem;
      width:15rem;
      height: 4rem;
      border-radius: 0.5rem;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 1.625rem;
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
};
  @media (max-width: 1400px){
    nav{
      gap: 0.9rem;
      a{
        font-size: 1.4rem;
      }
      button {
        font-size: 1.2rem;
        width:14rem;
        height: 3.5rem;
      }
    }
    a img {
      width: 270px;
      height:auto;
    }
  };
  @media (max-width: 1000px) {
    div {
      flex-wrap: wrap;
      padding-top: 4rem;
      justify-content: center;
      gap: 2.5rem;
    }
    img {
      margin: 0 auto;
    }
    nav {
      justify-content: center;
      margin-bottom: 1rem;
        a {
          background: ${props => props.theme['blue-100']};
          padding: 30px 18px;
          border-radius: 8px;
          text-align: center;
          font-size:  1.2rem;
       &:hover {
        background-color: ${props => props.theme['black-100']};
        color: white;
        border: none;
      };
        }
        button {
          font-size: 1.2rem;
          width: 14rem;
          height: 3.9rem;
      }
    }
  };
  @media (max-width: 900px){
    nav{
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    div {
      gap: 2rem;
      padding: 1.4rem 2rem;
    }
    nav {
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
      padding-left: 10px;
      padding-right: 10px;
        a {
          padding: 20px 11px;
          font-size: 0.8rem;
        }
        button {
          font-size: 0.72rem;
          width: 14rem;
          height: 3rem;
          margin-top: -0.1rem;
      }
    }
  };
`