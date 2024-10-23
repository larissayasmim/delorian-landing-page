import { DireitosReservadosContainer, FooterContainer } from "./StyleFooter";
import logoDelorian from "../../assets/logoDelorian.png";

export function Footer () {
  return (
    <div>
    <FooterContainer>

      <a href="./"><img src={logoDelorian} /></a>

      <div className="delorianResolve">
        <h3>Delorian resolve</h3>
        <a href="">Instalação de motor em Portões</a>
        <a href="">Motor Não Funcionando</a>
        <a href="">Motor Sem Força</a>
        <a href="">Motor Indo Só para Um Lado</a>
        <a href="">Motor Barulhento</a>
        <a href="">Portão Batendo</a>
        <a href="">Cadastro de Controles</a>
      </div>

      <div className="horarioFuncionamento">
        <h3>Horário de funcionamento</h3>
        <p>Segunda à sexta:  08: 30h ás 18:00h</p>
        <p>Sábado : 08:30h às 12:30h</p>
        <p>Domingo: sem funcionamento</p>
      </div>

      <div className="faleConosco">
        <h3>Fale conosco</h3>
        
        <div className="whatsapp">
          <a href=""><img src="" alt="" /><p> (41) 9 8501 - 1909</p></a>
        </div>

        <div className="facebook">
          <a href=""><img src="" alt="" /><p> @delorianpro</p></a>
        </div>
        <div className="instagram">
          <a href=""><img src="" alt="" /><p> @delorianpro</p></a>
        </div>
      </div>
    </FooterContainer>

    <DireitosReservadosContainer>
      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>

      <div>
        <img src="" alt="" />
        <p>2024 Delorian - Todos os direitos reservados</p>
      </div>
    </DireitosReservadosContainer>
    </div>
  )
}