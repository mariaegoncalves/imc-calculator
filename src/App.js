import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imcResult, setImcResult] = useState("");
  const [classification, setClassification] = useState("");

  // Função para calcular o IMC
  const calculateIMC = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Converte altura para metros
      const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      setImcResult(imc);

      // Classificação do IMC
      if (imc < 18.5) {
        setClassification("Abaixo do peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        setClassification("Peso normal");
      } else if (imc >= 25 && imc <= 29.9) {
        setClassification("Sobrepeso");
      } else if (imc >= 30 && imc <= 34.9) {
        setClassification("Obesidade grau I");
      } else if (imc >= 35 && imc <= 39.9) {
        setClassification("Obesidade grau II");
      } else {
        setClassification("Obesidade grau III");
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form-container">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Digite sua altura"
        />

        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Digite seu peso"
        />

        <button onClick={calculateIMC}>Calcular IMC</button>

        {imcResult && (
          <div className="result">
            <p>Seu IMC: {imcResult}</p>
            <p>Classificação: {classification}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
