import { IntroductionContainerBg, IntroductionContainer, InfoContainer } from "./StyleIntroduction";
import portaoeMotor from "../../assets/portaoeMotor.svg"


export function Introduction() {

  const phoneNumber = '+554185011909'; 

  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20seja%20bem-vindo%20ao%20Delorian%20Pro!%20Logo,%20um%20de%20nossos%20atendentes%20entrará%20em%20contato%20com%20você.`;
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
}