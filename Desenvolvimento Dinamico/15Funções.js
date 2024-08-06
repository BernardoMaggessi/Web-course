//Tipos de função
//são blocos de construção fundamentais em JS
//um procedimento em JS - conjunto de instruções que executa uma tarefa em específico
//para usar uma função, você deve definir, implementar e chamar em algum lugar no escopo  no qual deseja chamar

//FUNÇÃO REGULAR
function calcula(numero){
    return numero*2;
}
console.log(calcula(2));

//FUNÇÃO ANONIMA(são funções sem nome)
var calcula02 = function(numero){
    return numero*2;
}
var x = calcula02(4);
console.log(x);

//FUNÇÃO ARROW
const mensagem = (nome) =>{
    console.log(`Olá, ${nome}!`);
};
mensagem("Bernardo");
console.log("*-*-*-*-*-*-*-*-*- PARTE 2 -*-*-*-*-*-*-*-*-*-*-*-*")
function multiplicar(x,y){
    return x*y
}
let resultado = multiplicar(2,4);
console.log("resultado da multiplicação -> ",resultado);    

function somaValores(a,b = 2,c = 6){
    let total = a+b+c;
    return total;
}
var f = somaValores(5)
console.log("resultado da segunda função normal -> ",f)

let infoCal = function(a,b,c){
    return a+b+c;
}
console.log("resultado da função anonima -> ",infoCal(2,4,6));

//ARROW FUNCTION - a mais usada
const soma = (num1, num2) => {return num1+num2}
console.log("resultado da arrow function -> ",soma(2,6))

const numeros = [1,2,3,4,5]
const valores = numeros.map((num) => num*num);//elemento do array se multiplica por ele mesmo
console.log(`resultado da arrow function utilizando map => ${valores}  // elementos multiplicam por si mesmo `)

var listaProdutos = ["geladeira","fogão","panela","Air Friyer"];
const produtosEmMaiusculo = listaProdutos.map((produto)=> produto.charAt(0).toUpperCase()+produto.slice(1));//produto.charAt pega primeira letra e deixa maisucula concatenando com o slice do resto da String, imprimindo a String com a primeira letra maisucula
console.log(produtosEmMaiusculo);

