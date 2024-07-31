//Arrays

//lista de objetos
//Objetos que contem multiplos valores armazenados em uma lista
//um objeto array pode ser armazenado em variaveis e ser tratado de forma muito smilar quanto qualquer outro tipo de ibjeto

//são construidos de colchetes e itens são separados por virgulas
let compras =["pão","leite","queijo","macarrão","vinho"];


var array = new Array(1,3,4,5,3,2,6,8);
var array02 = Array(42); //-->define um vetor com 42 pos
let compras02 = [32]; //cria um vetor com um objeto 32
compras02.length = 21;

console.log(compras)
console.log(array02)
console.log(compras02)

//praticando o uso de array
var valores = [8,1,7,2,9];

console.log(valores[2]);
//loop -- faz a iteração dos elementos do array
for(var pos = 0; pos<valores.length;pos++){
    console.log("Posição: "+valores[pos])
}

var carros = [];
carros[0] = "Volvo";
carros[1] - "Jeep";

var motos = new Array("BMG","Yamaha","Honda")

//calcular media de todos os itens de um array
var numbers = [1,4,7,9,3,5,3];

let sum = 0;
for(i = 0; i<numbers.length;i++){
    sum+=numbers[i];
}
let media = sum/numbers.length;
console.log(media);

//METODOS DE ARRAYS (ALGUMAS DAS PRINCIPAIS FUNÇÕES DE ARRAYS)
//join, reverse,shift, sort, slice, lenght, push, pop();

console.log("array invertido ",valores.reverse)

var arr1 = [1,2,4,8,0,6]
console.log(arr1.join('|'))

//retira primeiro item de um array
var retirado = arr1.shift(6);
console.log(retirado);

console.log("POSIÇÃO DO NUMERO 3> "+arr1.indexOf(3));

//acrescentra na arrau
arr1.push(5);
console.log(arr1);
//exercicios de arrays

