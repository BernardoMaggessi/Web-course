const numeros =[5,10,15,20];

let algumNaoParOuMenorQueZero = false;
//primeira verificação
for(var i=0;i<=numeros.length;i++){
    if(numeros[i] % 2 !== 0 || numeros[i] < 0){
        algumNaoParOuMenorQueZero = true;
        break;
    }
}
let saoTodosDivisiveisPor3ou5 = true;

for(var i=0;i<=numeros.length;i++){
    if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0) {
        saoTodosDivisiveisPor3ou5 = false;
        break;
    }
}

console.log("Pelo menos um número não é par ou menor que zero?", algumNaoParOuMenorQueZero);

console.log("Todos os números são divisíveis por 3 e 5?", saoTodosDivisiveisPor3ou5);
