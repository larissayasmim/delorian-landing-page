
import { CreditCardBrandsContainer, TitleCreditCardBrands } from './StyleCreditCardBrands';
import raioAzul from "../../assets/raioAzul.png";
import pix from "../../assets/creditCardBrands/pix.svg";
import visa from "../../assets/creditCardBrands/visa.svg";
import visaElectron from "../../assets/creditCardBrands/visaElectron.svg";
import mastercard from "../../assets/creditCardBrands/mastercard.svg";
import maestro from "../../assets/creditCardBrands/maestro.svg";
import applePay from "../../assets/creditCardBrands/applePay.svg";
import gPay from "../../assets/creditCardBrands/gPay.svg";
import hiper from "../../assets/creditCardBrands/hiper.svg";
import hipercard from "../../assets/creditCardBrands/hipercard.svg";
import sPay from "../../assets/creditCardBrands/sPay.svg";
import elo from "../../assets/creditCardBrands/elo.svg";
import americanExpress from "../../assets/creditCardBrands/americanExpress.svg";

export function CreditCardBrands() {
  return (
    <CreditCardBrandsContainer >
       <TitleCreditCardBrands>
        <img src={raioAzul}   />
        <h2>Pague com</h2>
      </TitleCreditCardBrands>
      <div className="wrapper">
          <img className="item item1" src={pix} alt='pix'></img>
          <img className="item item2" src={visa} alt='visa'></img>
          <img className="item item3" src={visaElectron} alt='visa electron'></img>
          <img className="item item4" src={mastercard} alt='mastercard'></img>
          <img className="item item5" src={maestro} alt='maestro'></img>
          <img className="item item6" src={applePay} alt='apple pay'></img>
        </div>
        <div className="wrapper2">
          <img className="itemW2 item7" src={gPay} alt='google pay'></img>
          <img className="itemW2 item8" src={hiper} alt='hiper'></img>
          <img className="itemW2 item9" src={hipercard} alt='hipercard'></img>
          <img className="itemW2 item10" src={sPay} alt='samsung pay'></img>
          <img className="itemW2 item11" src={elo} alt='elo'></img>
          <img className="itemW2 item12" src={americanExpress} alt='american express'></img>
        </div>
    </CreditCardBrandsContainer>
  );
};
