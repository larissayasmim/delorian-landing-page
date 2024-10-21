import { IntroductionContainerBg, IntroductionContainer, InfoContainer, ImagesContainer } from "./StyleIntroduction";
// import portao from "../../assets/portão.svg";
// import motor from "../../assets/motor.svg";
import portaoeMotor from "../../assets/portaoeMotor.png"
export function Introduction() {
  return (

    <IntroductionContainerBg>
      <IntroductionContainer>
        <InfoContainer>
          <h1>Automação e Manutenção <br/>de Portões</h1>
          <p>Instalação, conserto e eficiência.<br/>Solicite seu orçamento grátis!</p>
          <button>Fazer orçamento</button>
        </InfoContainer> 
        
        <ImagesContainer>
          {/* <img src={portao} alt="Imagem de um portão de grade cinza claro eletrônico" className="portaoImage" />
          <img src={motor} alt="Imagem de um motor de portão eletrônico" className="motorImage"/> */}
          <img src={portaoeMotor} alt="Imagem de um motor de portão eletrônico" className="motorImage"/>

        </ImagesContainer>
      
      </IntroductionContainer>
    </IntroductionContainerBg>
  )
}