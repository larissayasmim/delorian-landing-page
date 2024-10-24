
import { CreditCardBrandsContainer } from './StyleCreditCardBrands';
import garen from "../../assets/garen.png"

export function CreditCardBrands() {
 
  return (
    <CreditCardBrandsContainer >
    <div className="wrapper">
        <img className="item item1" src={garen}></img>
        <img className="item item2" src={garen}></img>
        <img className="item item3" src={garen}></img>
        <img className="item item4" src={garen}></img>
        <img className="item item5" src={garen}></img>
        <img className="item item6" src={garen}></img>
      </div>


      <div className="wrapper2">
        <img className="itemW2 item7" src={garen}></img>
        <img className="itemW2 item8" src={garen}></img>
        <img className="itemW2 item9" src={garen}></img>
        <img className="itemW2 item10" src={garen}></img>
        <img className="itemW2 item11" src={garen}></img>
        <img className="itemW2 item12" src={garen}></img>
      </div>
    </CreditCardBrandsContainer>
  );
};
