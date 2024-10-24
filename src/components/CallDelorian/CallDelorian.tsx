import { CallDelorianContent } from "./StyleCallDelorian";
import chamaDelorian from "../../assets/chamaDelorian.svg";
import moto from "../../assets/moto.png";


export function CallDelorian () {
  return (
    <CallDelorianContent>
      <div>
        <img src={chamaDelorian} className="chamaDeloriamImg" />
        <img src={moto} className="motoImg"/>
      </div>
    </CallDelorianContent>
  )
}