import { EngineBrandsContainer } from "./StyleEngineBrands";
import garen from "../../assets/garen.png"
import intelbras from "../../assets/intelbras.png"
import nice from "../../assets/nice.png"
import peccinin from "../../assets/peccinin.png"
import ppa from "../../assets/ppa.png"
import rossi from "../../assets/rossi.png"


export function EngineBrands () {
  return (
    <EngineBrandsContainer>
      <div className="title">
      <h3>Trabalhamos com as principais marcas</h3>
      </div>
     <div className="brands">
      <img src={garen}/>
      <img src={intelbras}/>
      <img src={nice}/>
      <img src={peccinin}/>
      <img src={ppa}/>
      <img src={rossi}/>
     </div>
      
    </EngineBrandsContainer>
  )
}