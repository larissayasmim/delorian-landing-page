import whatsappButton from "../../assets/whatsappButton.png"
import { ButtonWhatsappContainer } from "./StyleButtonWhatsapp";



export function ButtonWhatsapp() {
  
  const phoneNumber = '+554185011909'; 
  
  const handleRedirectWhatsapp = () => {
   
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <ButtonWhatsappContainer>
      <img src={whatsappButton} onClick={handleRedirectWhatsapp} className="whatsappIconFixed"/>
    </ButtonWhatsappContainer>
  )
}