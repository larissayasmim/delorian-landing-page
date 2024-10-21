import { HeaderContainer } from "./StyleHeader";
import logoDelorian from "../../assets/logoDelorian.png";
import listMenu from "../../assets/listMenu.svg"
import { useState } from "react";

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const phoneNumber = '+5541985278797'; // Coloque seu número aqui

  const handleClickTalkWithUs = () => {
    // Constrói o link para o WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
    window.open(whatsappLink, '_blank'); 
  }

  return (
    <HeaderContainer>
      <div>

        <a href="./"><img src={logoDelorian} /></a>

        <img src={listMenu}  className="hamburguer" onClick={toggleMenu} />

        <nav className={isMenuOpen ? "open" : ""}>
          <a href="">Início</a>
          <a href="">Delorian resolve</a>
          <button onClick={handleClickTalkWithUs}>Fale conosco</button>
        </nav>
      </div>
      
    </HeaderContainer>
  )
};