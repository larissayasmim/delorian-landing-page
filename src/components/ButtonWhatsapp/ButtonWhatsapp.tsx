import whatsappButton from "../../assets/whatsappButton.svg";
import { ButtonWhatsappContainer } from "./StyleButtonWhatsapp";

export function ButtonWhatsapp() {
  const phoneNumber = '+5594185011909'; 
  const handleRedirectWhatsapp = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20tudo%20bem?%20Gostaria%20de%20mais%20informações,%20por%20favor.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <ButtonWhatsappContainer>
      <img src={whatsappButton} onClick={handleRedirectWhatsapp} className="whatsappIconFixed"/>
    </ButtonWhatsappContainer>
  )
};