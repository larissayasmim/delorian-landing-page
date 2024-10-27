import styled from "styled-components";

export const CreditCardBrandsContainer = styled.div`
  max-width: 1605px;
  margin: 0 auto;
  padding: 0 3rem;
  margin-bottom: 110px;
  .wrapper, .wrapper2  {
    position: relative;
    height: 150px;
    overflow: hidden;
};
  .wrapper{
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }
  .wrapper2 {
      mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    ); 
  };
  @keyframes scrollLeft {
    to {
      left: -200px;
    }
  };
  @keyframes scrollRight {
  to {
    right: -200px;
  }
  };
  .item, .itemW2 {
    width: 160px;
    padding: 1.5rem;
    border-radius: 8px;
    position: absolute;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
};
  .item{
    margin-bottom: 1rem;
    left: max(calc(200px * 8), 100%);
    animation-name: scrollLeft;
  };
  .itemW2 {
    margin-bottom: 1.8rem;
    right: max(calc(200px * 8), 100%);
    animation-name: scrollRight;
  };
  .item1 {
  animation-delay: calc(30s / 6 * (8 - 1) * -1);
  };
  .item2 {
  animation-delay: calc(30s / 6 * (8 - 2) * -1);
  };
  .item3 {
  animation-delay: calc(30s / 6 * (8 - 3) * -1);
  };
  .item4 {
  animation-delay: calc(30s / 6 * (8 - 4) * -1);
  };
  .item5 {
  animation-delay: calc(30s / 6 * (8 - 5) * -1);
  };
  .item6 {
  animation-delay: calc(30s / 6 * (8 - 6) * -1);
  };
  .item7 {
  animation-delay: calc(30s / 6 * (8 - 1) * -1);
  };
  .item8 {
  animation-delay: calc(30s / 6 * (8 - 2) * -1);
  };
  .item9 {
  animation-delay: calc(30s / 6 * (8 - 3) * -1);
  };
  .item10 {
  animation-delay: calc(30s / 6 * (8 - 4) * -1);
  };
  .item11 {
  animation-delay: calc(30s / 6 * (8 - 5) * -1);
  };
  .item12 {
  animation-delay: calc(30s / 6 * (8 - 6) * -1);
  };
  @media (max-width: 900px) {
    margin-bottom: 10px;
    padding-left: 2rem;
    padding-right: 2rem;
  .wrapper {
    height: 110px;
  }
  .item{
    left: max(calc(200px * 5), 100%);
    width: 100px;
    margin-bottom: 0px;
    padding: 0.2rem;
  }
  .itemW2{
    right: max(calc(200px * 5), 100%);
    width: 100px;
    padding: 1rem;
  }
  };
  @media (max-width: 600px){
    margin-bottom: 0px;
    padding-left: 3rem;
    padding-right: 3rem;
 .item{
   left: max(calc(200px * 3), 100%);
   width: 120px;
   margin-bottom: 0;
   padding: 1.6rem;
 }
 .itemW2{
  right: max(calc(200px * 3), 100%);
  width: 120px;
   margin-bottom: 0;
   padding: 1.6rem;
 }
};
@media (max-width: 380px) {
  padding-left: 2rem;
  padding-right: 2rem;
  .wrapper {
  height: 120px;
}
 .item{
   left: max(calc(200px * 2), 100%);
   width: 110px;
   margin-bottom: 0;
   padding: 1rem;
 }
 .itemW2{
  right: max(calc(200px * 2), 100%);
  width: 110px;
  padding: 1rem;
 }
};
`
export const TitleCreditCardBrands = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 60px;
  padding-top: 40px;
  h2 {
    font-size: 3rem;
    font-weight: 800;
    line-height: auto;
    letter-spacing: 5%;
    color: ${props => props.theme['blue-500']};
    font-family: 'Poppins', sans-serif;
  };
  img {
    height: 5.5rem;
    width: auto;
  };
  
  @media (max-width: 600px){
    gap: 0.5rem;
    margin-bottom: 0;
    padding-top: 1px;
    padding-bottom: 1rem;
  h2 {
    font-size: 1.5rem;
  }
  img {
    height: 3rem;
    width: auto;
  }
};
`