//Strings e seus métodos
console.log("Strings e seus métodos");
console.log("======================")

//concatenando Strings
var nome = "Marcelo da Silva";
var x = nome.length;
console.log(x);
resultado = x>15? "Obrigado":"Por favor digite seu nome completo"
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

//descobrindo posição de alguma palavra
var jogo = "Barcelona vs Real Madrid";
var posicao = jogo.indexOf("Real");
console.log("Onde começa a String do Real Madrid",posicao)

//cortando String
var cortado = jogo.slice(0,9);
console.log(cortado);
var cortado02 = jogo.slice(13,);
console.log(cortado02);

//parte dois de String
var val = jogo.includes("Real")
console.log(val)
if(val == true){
    console.log("Se houver palavra 'Real', imprime posição da palavra: ",jogo.indexOf("Real"))
}

var str1 = "Hello";
var str2 = "Turma";

var str3 = str1.concat(str2);
console.log(str3);

var frase = "     Olá, meu amigo           ";
console.log(frase.trim());

//aonde ele encontrar virgula, ele trasforma em um array
var num = "1,2,3,4,5,6,7,8"
var arr = num.split(",");
console.log(arr[4]);