import { CuritibaContainer } from "./StyleCuritibaAndRegion";
import mapaCuritibaRegiao from "../../assets/mapaCuritibaRegiao.png";

export function CuritibaAndRegion () {
  const phoneNumber = '+5541985011909'; 
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20mais%20informações.`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <CuritibaContainer>
      <div className="item1">
        <h2>Atendemos Curitiba e região metropolitana</h2>
        <p>Conserto de portões deslizantes, basculantes e pivotantes.<br/>Vamos até você com eficiência e comodidade!</p>
        <button onClick={handleClickTalkWithUs}>CHAMA O DELORIAN</button>
      </div>

      <div className="item2">
        <img src={mapaCuritibaRegiao} alt="mapa de Curitiba e região, simbolizando o local de atendimento da Delorian"/>
      </div>
    </CuritibaContainer>
  )
};