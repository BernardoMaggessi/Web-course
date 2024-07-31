//Utilizando o MAP --> o metodo array.map() permite a você iterar sobre o array e modificar seus elementos usando uma função de callback. A função de callback será executada em cada um dos seus elementos do array.
var numeros = [1,2,3,4,5,6,7,8,9,10];

let nums = numeros.map(
    function(valor){
        return valor*2;
    }
);
console.log(nums); 

//utilizando MAP em objetos
var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Bernardo", idade:27},
    {nome: "Arthur", idade:32},
    {nome: "Lucas", idade:45}
];
var nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);


