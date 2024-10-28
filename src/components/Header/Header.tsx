import { HeaderContainer } from "./StyleHeader";
import logoDelorian from "../../assets/logoDelorian.png";
import { Link } from "react-scroll";

export function Header () {
  const phoneNumber = '+554185011909';
  const handleClickTalkWithUs = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20tudo%20bem?%20Gostaria%20de%20mais%20informações,%20por%20favor.`;
    window.open(whatsappLink, '_blank'); 
  }
  return (
    <HeaderContainer>
      <div>
        <Link to="#voltarInicio" smooth={true} duration={500} offset={-60} ><img src={logoDelorian} /></Link>       
        <nav id="#voltarInicio">
            <Link to="#voltarInicio" smooth={true} duration={500} offset={-60} ><a href="./" >Início</a></Link> 
            <a href=""><Link to="#delorianResolve" smooth={true} duration={500} offset={-60} >Delorian resolve</Link></a>        
          <button onClick={handleClickTalkWithUs}>Fale conosco</button>
        </nav>
      </div>
    </HeaderContainer>
  )
};