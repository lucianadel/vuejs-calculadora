<template>
  <div id="app" class="calculator">
  <h1 class="calculator">Calculadora Aritmética</h1>

  <!-- Campos para inserir números -->
  <div>
    <input type="number" v-model="num1" placeholder="Digite o primeiro número" />
    <input type="number" v-model="num2" placeholder="Digite o segundo número" />
  </div>

  <!-- Seletor para escolher a operação -->
  <div>
    <select v-model="operation">
      <option value="sum">Soma (+)</option>
      <option value="subtract">Subtração (-)</option>
      <option value="multiply">Multiplicação (×)</option>
      <option value="divide">Divisão (÷)</option>
    </select>
  </div>

  <!-- Resultado da operação -->
  <div class="result">
    <p>Resultado: {{ result }}</p>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Definir variáveis reativas
const num1 = ref(0);
const num2 = ref(0);
const operation = ref('sum');

// Computed property para calcular o resultado
const result = computed(() => {
  let calcResult = 0;

  // Lógica de cálculo com base na operação selecionada
  switch (operation.value) {
    case 'sum':
      calcResult = parseFloat(num1.value) + parseFloat(num2.value);
      break;
    case 'subtract':
      calcResult = parseFloat(num1.value) - parseFloat(num2.value);
      break;
    case 'multiply':
      calcResult = parseFloat(num1.value) * parseFloat(num2.value);
      break;
    case 'divide':
      // Checando se a divisão por zero está sendo tentada
      if (num2.value === 0) {
        return "Erro: Divisão por zero!";
      }
      calcResult = parseFloat(num1.value) / parseFloat(num2.value);
      break;
  }

  return calcResult;
});

</script>

<style>

body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #82ccdd;
}
.calculator ,h1{
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  background-color: #1e3799;
  width: 80%; 
}
input, select {
  padding: 8px;
  margin: 10px 0;
  width: 95%;
  font-size: 16px;

}
.result {
  font-size: 20px;
  font-weight: bold;
}

/* Media query para dispositivos móveis (smartphones) */
@media (max-width: 768px) {
  .calculator, h1 {
    width: 90%; /* Aumenta a largura para melhor visibilidade em telas menores */
    background-color: burlywood;
  }
}

/* Media query para tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .calculator, h1 {
    width: 70%; /* Ajusta a largura para tablets */
    background-color: blueviolet;
  }
}

/* Media query para desktops */
@media (min-width: 1025px) {
  .calculator, h1 {
    width: 50%; /* Reduz a largura para desktops maiores */
    background-color: darkcyan;
  }
}


</style>
