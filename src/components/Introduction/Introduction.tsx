import { IntroductionContainerBg, IntroductionContainer, InfoContainer } from "./StyleIntroduction";
import portaoeMotor from "../../assets/portaoeMotor.svg";

export function Introduction() {
  const phoneNumber = '+5541985011909'; 
  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank');   
  }
  return (
    <IntroductionContainerBg>
      <IntroductionContainer>
        <InfoContainer>
          <h2>Automação e manutenção <br/>de portões</h2>
          <p>Instalação, conserto e eficiência.<br/>Solicite seu orçamento grátis!</p>
          <button onClick={handleClickMakeBudget}>Fazer orçamento</button>
        </InfoContainer> 
        <div>
          <img src={portaoeMotor} alt="Imagem de portão de grade eletrônico cinza e um motor com cremalheira" className="motorImage"/>
        </div>    
      </IntroductionContainer>
    </IntroductionContainerBg>
  )
};