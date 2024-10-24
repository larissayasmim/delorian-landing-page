import { IntroductionContainerBg, IntroductionContainer, InfoContainer } from "./StyleIntroduction";
import portaoeMotor from "../../assets/portaoeMotor.png"


export function Introduction() {

  const phoneNumberWhatsapp = '+554185011909'; 

  const handleClickMakeBudget = () => {
    const whatsappLink = `https://wa.me/${phoneNumberWhatsapp}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20fazer%20um%20orçamento!`;
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