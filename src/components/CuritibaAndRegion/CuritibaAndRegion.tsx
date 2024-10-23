import { CuritibaContainer } from "./StyleCuritibaAndRegion";
import cartaoDelorian from "../../assets/cartaoDelorian.png";

export function CuritibaAndRegion () {

  const phoneNumber = '+554185011909'; // Coloque seu número aqui

  const handleClickTalkWithUs = () => {
    // Constrói o link para o WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
    window.open(whatsappLink, '_blank'); 
  }
  return(
    <CuritibaContainer>
      <div>
        <h2>Atendemos Curitiba e região metropolitana</h2>
        <p>Conserto de portões deslizantes, basculantes e pivotantes.<br/>Vamos até você com eficiência e comodidade!</p>
        <button onClick={handleClickTalkWithUs}>CHAMA O DELORIAN</button>
      </div>

      <div>
        <img src={cartaoDelorian} />
      </div>
      
    </CuritibaContainer>
  )
}