// App.js
import React, { useState } from "react";
import "../../styles/Components/DocForm.css";

const App = () => {
  const [tone, setTone] = useState("Profissional");
  const [format, setFormat] = useState("Parágrafo");

  const handleToneClick = (selectedTone) => {
    setTone(selectedTone);
  };

  const handleFormatClick = (selectedFormat) => {
    setFormat(selectedFormat);
  };

  return (
    <form className="doc-form">
      <div className="section">
        <label htmlFor="escrever-sobre" className="label">
          Escrever sobre
        </label>
        <textarea
          id="escrever-sobre"
          className="input"
          placeholder="história dos Países Baixos"
        />
      </div>
      <div className="section tom">
        <span className="label">Tom</span>
        <div className="button-group">
          {[
            "Profissional",
            "Descontraído",
            "Entusiasmado",
            "Informativo",
            "Divertido",
          ].map((toneOption) => (
            <button
              type="button"
              key={toneOption}
              className={`button ${tone === toneOption ? "active" : ""}`}
              onClick={() => handleToneClick(toneOption)}
            >
              {toneOption}
            </button>
          ))}
        </div>
      </div>
      <div className="section format">
        <span className="label">Formato</span>
        <div className="button-group">
          {["Parágrafo", "E-mail", "Ideias", "Publicação de blogue"].map(
            (formatOption) => (
              <button
                type="button"
                key={formatOption}
                className={`button ${format === formatOption ? "active" : ""}`}
                onClick={() => handleFormatClick(formatOption)}
              >
                {formatOption}
              </button>
            )
          )}
        </div>
      </div>

      <button type="submit">Gerar Conteúdo</button>
    </form>
  );
};

export default App;
