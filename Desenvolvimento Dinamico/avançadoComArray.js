//metodos avançados com array 
//splice altera o array atual

let arr1 = [1,3,5,6,7,8,9,10];
console.log(arr1)

arr1.splice(5); //retira todos os elementos a partir do elemento 2
console.log(arr1)

arr1.splice(2,1);//retira um elemento a partir da segundo elemento
console.log(arr1)

//segundo exemplo
let arr2 =[1,4,6,"hello world", 397,5,6,7,]
arr2.splice(2,2)//retira dois elementos a partir da posição 2 do vetor

var nomes = ["Maria", "João", "Lucas", "Pedro"]
var novos = nomes.splice(1,1,"Luiz") //retira Joao e coloca Luiz no lugar

console.log("array modificado -->"+nomes+" novos nomes que foram adicionados -->"+novos);

var pais = ["Brasil", "Chile", "Argentina", "Peru"];
pais.unshift("Uruguai");//acresenta no inicio
console.log(pais);

//CRIAR ARRAY COM 5 NOMES, ACRESCENTRA O NOME DA MONICA, RETIRA O ULTIMO ELEMENTO, ENCONTRA POSIÇÃO DE SAMUEL NO ARRAY
console.log("\n==============EXERCICIO PROPOSTO=====================\n")
var nomes01 = ["Bernardo","Samuel","Leonardo","Samara","Lucy"];
nomes01.unshift("Monica");
nomes01.pop();
console.log("Array com Monica e sem o último elemento --> "+nomes01);
console.log("Posição do samuel após ter adicionado a Monica -- "+nomes01.indexOf("Samuel"));
var novo = nomes01.splice(3,1,"Emanuel");
console.log("Troca de Leonardo por Emanuel: --- "+nomes01);

//manipulando mais Arrays
console.log("ARRAY AVANÇADO");
//SLICE  --> Slice é a mesma coisa que splice, porém ele cria uma Array nova -- muito mais utilizada que a SPLICE
//CONCAT --> CONCATENAR, PODE SER FEITOS EM ARRAYS, POR EX: CONCATENA DOIS ARRAYS NUM TERCEIRO ARRAY
let array02 = [1,2,3,4,5,6,7,8,9,10]
var novo = array02.slice(1,6)
console.log(novo)
console.log(array02)

let arr02 = ["Samuel", "Vitor","Eduardo"]
let conc = nomes01.concat(arr02);
console.log(conc);

console.log("\nHora do Execício\m");
//array com todos os meses do ano e dividir por trimente;
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var trimeste01 = meses.slice(0,3);
var trimeste02 = meses.slice(3,6);
var trimeste03 = meses.slice(6,9);
var trimeste04 = meses.slice(9,12);

console.log(trimeste01);
console.log(trimeste02);
console.log(trimeste03);
console.log(trimeste04);