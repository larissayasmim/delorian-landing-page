import whatsappButton from "../../assets/whatsappButton.svg"
import { ButtonWhatsappContainer } from "./StyleButtonWhatsapp";



export function ButtonWhatsapp() {
  
  const phoneNumber = '+554185011909'; 
  
  const handleRedirectWhatsapp = () => {
   
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20seja%20bem-vindo%20ao%20Delorian%20Pro!%20Logo,%20um%20de%20nossos%20atendentes%20entrará%20em%20contato%20com%20você.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <ButtonWhatsappContainer>
      <img src={whatsappButton} onClick={handleRedirectWhatsapp} className="whatsappIconFixed"/>
    </ButtonWhatsappContainer>
  )
}