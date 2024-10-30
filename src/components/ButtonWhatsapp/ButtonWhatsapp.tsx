import whatsappButton from "../../assets/whatsappButton.png";
import { ButtonWhatsappContainer } from "./StyleButtonWhatsapp";

export function ButtonWhatsapp() {
  const phoneNumber = '+5541985011909'; 
  const handleRedirectWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <ButtonWhatsappContainer>
      <img src={whatsappButton} onClick={handleRedirectWhatsapp} className="whatsappIconFixed"/>
    </ButtonWhatsappContainer>
  )
};