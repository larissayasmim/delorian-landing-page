import { FreeQuoteContainer } from "./StyleFreeQuote";
import raioTranslucido from "../../assets/raioTranslucido.png";

export function FreeQuote () {
  const phoneNumber = '+554185011909'; // Coloque seu número aqui

  const handleClickTalkWithUs = () => {
    // Constrói o link para o WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <FreeQuoteContainer>
      
      <img src={raioTranslucido} />
      <div>
        <h2>Seu portão está com problemas?</h2>
        <p>Vamos até você! <b>Orçamento rápido e gratuito</b>. Fale conosco <br/>pelo whatsApp.</p>
        <button onClick={handleClickTalkWithUs}>FALE CONOSCO</button>
      </div>
    </FreeQuoteContainer>
    
  )
}