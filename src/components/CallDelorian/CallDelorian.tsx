import { CallDelorianContent } from "./StyleCallDelorian";
import chamaDelorian from "../../assets/chamaDelorian.svg";
import moto from "../../assets/moto.png";

export function CallDelorian () {
  return (
    <CallDelorianContent>
      <div className="motoChamaDelorianContainer">
        <img src={chamaDelorian} className="chamaDeloriamImg" alt="texto chama o delorian"/>
        <img src={moto} className="motoImg" alt="imagem de uma moto com design que remete a algo futurístico com a logo da Delorian"/>
      </div>
    </CallDelorianContent>
  )
};