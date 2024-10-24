import { DireitosReservadosContainer, FooterContainer } from "./StyleFooter";
import logoDelorian from "../../assets/logoDelorian.png";
import whatsIconFooter from "../../assets/whatsIconFooter.svg";
import facebookIconFooter from "../../assets/facebookIconFooter.svg";
import instagramIconFooter from "../../assets/instagramIconFooter.svg";
import cop from "../../assets/cop.svg";
import { Link } from "react-scroll";


export function Footer () {
    const phoneNumber = '+554185011909'; // Coloque seu número aqui

    const handleRedirectWhatsapp = () => {
    
      const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20equipe%20Delorian,%20gostaria%20de%20mais%20informações!`;
      window.open(whatsappLink, '_blank'); 
    }

    const handleRedirectInstagram = () => {
      window.open("https://www.instagram.com/delorianpro/", "_blank");
    };

    const handleRedirectFacebook = () => {
      window.open("https://www.facebook.com/delorianpro", "_blank");
    };
  
    const currentYear = new Date().getFullYear();
   
    
  return (
    <div>
    <FooterContainer>

     <Link to="#voltarInicio" smooth={true} duration={500} offset={-80} ><img src={logoDelorian} /></Link>

      <div className="delorianResolve">
   
        <h3><Link to="#delorianResolve" smooth={true} duration={500} offset={-80} className="delorianResolveTitle">Delorian resolve</Link></h3>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Instalação de motor em portões</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Motor não funcionando</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Motor sem força</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Motor indo só para um lado</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Motor barulhento</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Portão batendo</Link></a>
        <a href=""><Link to="#delorianResolve" smooth={true} duration={500} >Cadastro de controles</Link></a>
      </div>

      <div className="horarioFuncionamento">
        <h3>Horário de funcionamento</h3>
        <p>Segunda à sexta:  08: 30h ás 18:00h</p>
        <p>Sábado : 08:30h às 12:30h</p>
        <p>Domingo: sem funcionamento</p>
      </div>

      <div className="faleConosco">
        <h3>Fale conosco</h3>
          <a href="" onClick={handleRedirectWhatsapp}><p className="whatsapp"><img src={whatsIconFooter} />(41) 9 8501-1909</p></a>
          <a href="" onClick={handleRedirectFacebook}><p className="facebook"><img src={facebookIconFooter} /> @delorianpro</p></a>
          <a href="" onClick={handleRedirectInstagram}><p className="instagram"><img src={instagramIconFooter} /> @delorianpro</p></a>
      </div>
    
    </FooterContainer>

    <DireitosReservadosContainer>
      <div className="redesSociais">
        <a href="" onClick={handleRedirectWhatsapp}><img src={whatsIconFooter} /></a>
        <a href="" onClick={handleRedirectFacebook}><img src={facebookIconFooter} /></a>
        <a href="" onClick={handleRedirectInstagram}><img src={instagramIconFooter} /></a>
      </div>

      <div className="direitosReservados">
        <img src={cop} alt="" />
        <p>{currentYear} Delorian - Todos os direitos reservados</p>
      </div>
    </DireitosReservadosContainer>
    </div>
  )
}