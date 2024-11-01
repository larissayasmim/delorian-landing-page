import { FreeQuoteContainer } from "./StyleFreeQuote";
import raioTranslucido from "../../assets/raioTranslucido.png";

export function FreeQuote () {
  const phoneNumber = '+5541985011909'; 
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <FreeQuoteContainer>
      <img src={raioTranslucido} />
      <div className="textoeBotao">
        <h2>Seu portão está com problemas?</h2>
        <p>Vamos até você! <b>Orçamento rápido e gratuito</b>. Fale conosco pelo whatsApp.</p>
        <button onClick={handleClickTalkWithUs}>FALE CONOSCO</button>
      </div>
    </FreeQuoteContainer>
  )
};