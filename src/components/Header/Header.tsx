import { HeaderContainer } from "./StyleHeader";
import logoDelorian from "../../assets/logoDelorian.png";

export function Header () {
  return (
    <HeaderContainer>
      <img src={logoDelorian} />
      <nav>
        <a href="">Início</a>
        <a href="">Delorian resolve</a>
        <button>Fale conosco</button>
      </nav>

    </HeaderContainer>
  )
}