import { CuritibaContainer } from "./StyleCuritibaAndRegion";
import mapaCuritibaRegiao from "../../assets/mapaCuritibaRegiao.png";

export function CuritibaAndRegion () {

  const phoneNumber = '+554185011909';

  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20seja%20bem-vindo%20ao%20Delorian%20Pro!%20Logo,%20um%20de%20nossos%20atendentes%20entrará%20em%20contato%20com%20você.`;
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
        <img src={mapaCuritibaRegiao} />
      </div>
      
    </CuritibaContainer>
  )
}