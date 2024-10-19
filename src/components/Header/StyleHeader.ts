import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme['white']};
  padding: 2rem 14.5rem;

  img {
    width: 286px;
    height: 60px;
    display: block;
    margin-top: 1.2rem;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 1.625rem;
      width: auto;
      height: 3rem;

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
      margin-top: 0.2rem;
      width:14.5rem;
      height: 2.575rem;
      border-radius: 0.5rem;
      font-weight: 700;
      font-size: 1.25rem;

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['black-100']};
      }
    }
  }
 
`

