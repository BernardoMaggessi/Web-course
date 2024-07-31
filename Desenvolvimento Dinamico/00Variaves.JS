//comentários em javascript são feitos desta forma 
/*
comentários com mais de uma linha
*/

//tipos de declarações
var nome = "maria"; //declaração local ou global (incializa com um valor)
nome02 = "João";//declaração global 
let idade = 22;//declaração local (bloco) e inicialização é opcional
const id = 5234; //declara uma constante no escopo do bloco, somente leitura

/*regras para identificadores de variáveis
Podem conter somente caracteres alfanumericos (ou $ ou _)
Não podem começar com um dígito
é case sensitive, Estado_origem é diferente de estado_origem

EXEMPLOS VÁLIDOS:
Nome_funcionario, _Salario e $Cidade
*/

if(true){
    var x = 5;
}
console.log(x); //saída 5
/*
if(true){
    let y = 32;
}
console.log(y); //ReferenceError: y is not defined
*/

const pi = 3.14 //DEFINIDO CONSTANTE 

function multiPI(x){
    console.log(pi*x)
}
multiPI(10)