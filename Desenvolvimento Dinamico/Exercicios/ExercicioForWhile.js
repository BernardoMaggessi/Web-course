//Você está desenvolvendo um programa para calcular a soma de um array de numeros, sua tarefa é escrever um código que utilize a estrutura DO-WHILE em conjuto com o método reduce;

// Array de números

const numbers = [1, 2, 3];

// Variável para armazenar a soma

let sum = 0;

// Índice inicial para o reduce

let index = 0;

// Executa o reduce utilizando do while

do {

  sum = numbers.reduce((accumulator, currentValue, currentIndex) => {

    if (currentIndex <= index) {

      return accumulator + currentValue;

    } else {

      return accumulator;

    }

  }, sum);

  index++;

} while (index < numbers.length);

console.log("A soma dos números é:", sum);