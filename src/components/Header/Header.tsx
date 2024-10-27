import { HeaderContainer } from "./StyleHeader";
import logoDelorian from "../../assets/logoDelorian.png";
import { Link } from "react-scroll";

export function Header () {
  const phoneNumber = '+554185011909';
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20seja%20bem-vindo%20ao%20Delorian%20Pro!%20Logo,%20um%20de%20nossos%20atendentes%20entrará%20em%20contato%20com%20você.`;
    window.open(whatsappLink, '_blank'); 
  }
  return (
    <HeaderContainer>
      <div>
        <Link to="#voltarInicio" smooth={true} duration={500} offset={-60} ><img src={logoDelorian} /></Link>       
        <nav>
            <Link to="#voltarInicio" smooth={true} duration={500} offset={-60} ><a href="./" id="#voltarInicio">Início</a></Link> 
            <a href=""><Link to="#delorianResolve" smooth={true} duration={500} offset={-60} >Delorian resolve</Link></a>        
          <button onClick={handleClickTalkWithUs}>Fale conosco</button>
        </nav>
      </div>
    </HeaderContainer>
  )
};