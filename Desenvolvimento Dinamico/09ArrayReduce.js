//o método array reduz o array a um unico valor. Para obter o valor de um resultado, ele executa uma função de redução em cada elemento de um array

let numeros = [1,2,3,4,5,6,7,8,9]
let total = numeros.reduce(
    function(total, numero){
        return total+numero;
},0)//valor 0 aqui é a inicialização do valor (antes de entrar qualquer valor)
console.log(total)

//é a mesma coisa que o bloco abaixo
/**
 * var total = 0;
 * for(var i=0; i<numeros.length; i++){
 *      total+=numeros[i];
 * }
 * console.log(total);
 */
