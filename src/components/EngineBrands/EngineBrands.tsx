import { EngineBrandsContainer } from "./StyleEngineBrands";
import garen from "../../assets/garen.png";
import intelbras from "../../assets/intelbras.png";
import nice from "../../assets/nice.png";
import peccinin from "../../assets/peccinin.png";
import ppa from "../../assets/ppa.png";
import rossi from "../../assets/rossi.png";
import backgroundAzul from "../../assets/backgroundAzul.png"

export function EngineBrands () {
  return (
    <EngineBrandsContainer>
      <img src={backgroundAzul} alt="Fundo azul" className="backgroundImage" />

      <div className="title">
      <h3>Trabalhamos com as principais marcas</h3>
      </div>
     <div className="brands">
      <img src={garen} className="garenLogo"/>
      <img src={intelbras}/>
      <img src={nice} className="niceLogo"/>
      <img src={peccinin} className="peccininLogo"/>
      <img src={ppa}/>
      <img src={rossi} className="rossiLogo"/>
     </div>
    </EngineBrandsContainer>
  )
};