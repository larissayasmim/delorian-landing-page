import raioAzul from "../../assets/raioAzul.png";
import motor from "../../assets/motor.png";
import instalacao from "../../assets/instalacao.png";
import naoFuncionando from "../../assets/naoFuncionando.png";
import semForca from "../../assets/semForca.png";
import soUmLado from "../../assets/soUmLado.png";
import barulhento from "../../assets/barulhento.png";
import portBatendo from "../../assets/portBatendo.png";
import controle from "../../assets/controle.png";
import sinalControl from "../../assets/sinalControl.png";
import mais from "../../assets/mais.png";
import batida from "../../assets/batida.png";

import { DelorianServicesContainer, ProblemSolutionContainer, ProblemSolution, TitleDelorianServices, ImageContainer, ProblemSolutionIconMais } from "./StyleDelorianServices";
export function DelorianServices() {
  return (
    <DelorianServicesContainer>
      <TitleDelorianServices>
        <img src={raioAzul}   />
        <h1  id="#delorianResolve">Delorian resolve</h1>
      </TitleDelorianServices>
      <ProblemSolutionContainer>
        <ProblemSolution>
        <ImageContainer>
          <img src={instalacao} className="imageInstalacao"/>
          <img src={motor} className="imageMotor"/>
        </ImageContainer>
          <h3>Instalação de motor em portões</h3>
          <p>Instalação especializada de motores para portões deslizantes, basculantes e pivotantes.</p>
        </ProblemSolution>
        <ProblemSolution>
        <ImageContainer>
          <img src={naoFuncionando} className="imageInstalacao"/>
          <img src={motor} className="imageMotor"/>
        </ImageContainer>
          <h3>Motor não funcionando</h3>
          <p>Diagnóstico e reparos para motores de portões eletrônicos travados ou inoperantes.</p>
        </ProblemSolution>
        <ProblemSolution>
        <ImageContainer>
          <img src={semForca} className="imageInstalacao"/>
          <img src={motor} className="imageMotor"/>
        </ImageContainer>
          <h3>Motor sem força</h3>
          <p>Correção de motores fracos por desgaste, sobrecarga ou falhas elétricas.</p>
        </ProblemSolution>
        <ProblemSolution>
          <ImageContainer>
            <img src={soUmLado} className="imageInstalacao"/>
            <img src={motor} className="imageMotor"/>
          </ImageContainer>
          <h3>Motor indo só para um lado</h3>
          <p>Ajustes para motores que só se movem para um lado.</p>
        </ProblemSolution>
        <ProblemSolution>
        <ImageContainer>
          <img src={barulhento} className="imageInstalacao"/>
          <img src={motor} className="imageMotor"/>
        </ImageContainer>
          <h3>Motor barulhento</h3>
          <p>Soluções para motores barulhentos com ruídos de atrito, rangidos ou estalos.</p>
        </ProblemSolution>
        <ProblemSolution>
        <ImageContainer>
          <img src={batida} className="imageInstalacao"/>
          <img src={portBatendo} className="imageMotor"/>
        </ImageContainer>
          <h3>Portão batendo</h3>
          <p>Soluções para portões que batem ao fechar, causando impactos excessivos e ruídos.</p>
        </ProblemSolution>
        <ProblemSolution>
        <ImageContainer>
          <img src={sinalControl} className="imageInstalacao"/>
          <img src={controle} className="imageControle"/>
        </ImageContainer>
          <h3>Cadastro de controles</h3>
          <p>Facilitamos a programação e sincronização dos seus dispositivos.</p>
        </ProblemSolution>
        <ProblemSolution>
          <ProblemSolutionIconMais>
          <ImageContainer>
            <img src={mais} className="imageMaisIcon "/>
          </ImageContainer>
            <h3>... e muito mais</h3>
            <p>Suporte personalizado para suas necessidades.</p>
          </ProblemSolutionIconMais>
        </ProblemSolution>
      </ProblemSolutionContainer>
    </DelorianServicesContainer>
  );
}

