import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    const imcCalculado = (peso / (altura * altura)).toFixed(2);
    setImc(imcCalculado);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura (m)"
      />
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (kg)"
      />
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificarIMC(imc)}</p>
        </div>
      )}
    </div>
  );
}

export default App;