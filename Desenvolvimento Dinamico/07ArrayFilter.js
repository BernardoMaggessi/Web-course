//continuação de arrays avançados

//UTILIZANDO O FILTER --> MUITO UTILIZADO EM PROGRMAÇÃO MAIS AVANÇADA
//O método filter() recebe cada elemento de um array e aplica uma instrunção condicional a ele. Se essa condição for verdadeira, o elemento é colocado na array de resultado.
const numbers = [1,2,3,4];
const numerosFiltrados = numbers.filter(item => item % 2 === 0);
console.log("Primeira forma --> ",numerosFiltrados);

var numeros = [1,2,3,4,5,6,7,8,9,10];

function buscarNumerosPares(value){
    if(value %2 == 0){
        return value;
    }
}

var numerosPares = numeros.filter(buscarNumerosPares);//neste caso a função poderia ser passada dentro do filter também
console.log("\nFiltrando utilizando functions -->",numerosPares);

//utilizando filter em objetos
var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Bernardo", idade:27},
    {nome: "Arthur", idade:32},
    {nome: "Lucas", idade:45}
];

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length <5;
        //console.log(valor.nome);
});
console.log("\n",pessoasListagem);

//Exercicío Proposto
console.log("\nExercício Proposto:");
var produtos = [
    {id:1, descrição:"Smartphone", categoria:"Eletronico"},
    {id:2, descrição:"Notebook", categoria:"Eletronico"},
    {id:3, descrição:"Geladeira", categoria:"Eletrodomestico"}
]

var produtosFiltradosPorCat = produtos.filter(
    function(valor){
        return valor.categoria === "Eletronico"
    }
)
console.log(produtosFiltradosPorCat);