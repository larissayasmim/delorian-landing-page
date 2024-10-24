import { HeaderContainer } from "./StyleHeader";
import logoDelorian from "../../assets/logoDelorian.png";
import { Link } from "react-scroll";

export function Header () {
  const phoneNumber = '+554185011909'; // Coloque seu número aqui

  const handleClickTalkWithUs = () => {
    // Constrói o link para o WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
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