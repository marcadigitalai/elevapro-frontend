import React from "react";
import DocForm from "../Common/DocForm"
import Tabs from "../Common/Tabs"

function Models() {
  return (
    <div className="models">
      <h3>Modelos</h3>
      <button>Utilizar</button>
      <button>Utilizar</button>
      <button>Utilizar</button>
    </div>
  );
}

function IncorporateData() {
  return (
    <div className="incorporate-data">
      <h3>Incorporar Dados</h3>
      <button>Utilizar</button>
      <button>Utilizar</button>
      <button>Utilizar</button>
    </div>
  );
}

function PetitionContent() {
  return (
    <div className="petition-content">
      <h1>Petição para Avanços Tecnológicos Beneficiarem a Sociedade</h1>
      <p>Espero que esta carta encontre todos vocês bem.</p>
      <p>
        Sou [Seu Nome], um cidadão preocupado com o impacto crescente da
        tecnologia em nossas vidas diárias. Reconheço os avanços notáveis que a
        tecnologia tem proporcionado em várias esferas, impulsionando a
        eficiência, a conectividade e o acesso à informação. No entanto, venho
        por meio desta carta expressar minha preocupação e, ao mesmo tempo,
        sugerir algumas considerações que poderiam beneficiar nossa sociedade de
        maneira mais abrangente.
      </p>
      <p>
        É indiscutível que a tecnologia tem desempenhado um papel vital na
        melhoria de muitos aspectos da vida moderna. No entanto, também é
        evidente que, em alguns casos, seu desenvolvimento pode ocorrer de
        maneira desigual, deixando algumas comunidades em desvantagem e criando
        disparidades significativas.
      </p>
      <p>
        Além disso, a rápida evolução tecnológica muitas vezes não é acompanhada
        por uma avaliação adequada de seus impactos sociais, éticos e
        ambientais.
      </p>
      <p>
        Neste contexto, gostaria de solicitar que a [Nome da Empresa ou
        Organização] considere as seguintes propostas:
      </p>
      <ol>
        <li>
          Inclusão Digital: Trabalhar para garantir que as comunidades menos
          favorecidas tenham acesso igualitário às oportunidades
        </li>
        {/* Add more items as needed */}
      </ol>
    </div>
  );
}

function Docs() {
  return (
    <div className="doc">
      <div className="bar">
        <Tabs/>
        <DocForm />
      </div>
      <div className="out">
        <PetitionContent />
      </div>
    </div>
  );
}

export default Docs;
