import { IntroductionContainerBg, IntroductionContainer, InfoContainer } from "./StyleIntroduction";
import portaoeMotor from "../../assets/portaoeMotor.svg";

export function Introduction() {
  const phoneNumber = '+5594185011909'; 
  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20tudo%20bem?%20Gostaria%20de%20mais%20informações,%20por%20favor.`;
    window.open(whatsappLink, '_blank');   
  }
  return (
    <IntroductionContainerBg>
      <IntroductionContainer>
        <InfoContainer>
          <h1>Automação e manutenção <br/>de portões</h1>
          <p>Instalação, conserto e eficiência.<br/>Solicite seu orçamento grátis!</p>
          <button onClick={handleClickMakeBudget}>Fazer orçamento</button>
        </InfoContainer> 
        <div>
          <img src={portaoeMotor} alt="Imagem de um motor de portão eletrônico" className="motorImage"/>
        </div>    
      </IntroductionContainer>
    </IntroductionContainerBg>
  )
};