import raioAzul from "../../assets/raioAzul.png";
import motor from "../../assets/motor.png"
import { DelorianServicesContainer, ProblemSolutionContainer, ProblemSolution, TitleDelorianServices } from "./StyleDelorianServices";

export function DelorianServices() {
  return (
    <DelorianServicesContainer>
      <TitleDelorianServices>
        <img src={raioAzul} alt="" />
        <h1>Delorian resolve</h1>
      </TitleDelorianServices>
      
      <ProblemSolutionContainer>
        {/* problem1 */}
        <ProblemSolution>
          <img src={motor} />
          <h3>Instalação de motor em portões</h3>
          <p>Instalação especializada de motores  para portões deslizantes, basculantes e pivotantes.</p>
        </ProblemSolution>

        {/* problem2 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Motor não funcionando</h3>
          <p>Diagnóstico e reparos para motores de portões eletrônicos travados ou inoperantes.</p>
        </ProblemSolution>

        {/* problem3 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Motor sem Força</h3>
          <p>Correção de motores fracos por desgaste, sobrecarga ou falhas elétricas.</p>
        </ProblemSolution>

        {/* problem4 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Motor indo só para um lado</h3>
          <p>Ajustes para motores que só se movem para um lado.</p>
        </ProblemSolution>

        {/* problem5 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Motor barulhento</h3>
          <p>Soluções para motores barulhentos com ruídos de atrito, rangidos ou estalos</p>
        </ProblemSolution>

        {/* problem6 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Portão Batendo</h3>
          <p>Soluções para portões que batem ao fechar, causando impactos excessivos e ruídos.</p>
        </ProblemSolution>

        {/* problem7 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>Cadastro de controles</h3>
          <p>Facilitamos a programação e sincronização dos seus dispositivos.</p>
        </ProblemSolution>

        {/* problem8 */}
        <ProblemSolution>
          <img src="" alt="" /> imagem<img />
          <h3>... e muito mais</h3>
          <p>Suporte personalizado para suas necessidades.</p>
        </ProblemSolution>


      </ProblemSolutionContainer>

    </DelorianServicesContainer>
    
  );
}

