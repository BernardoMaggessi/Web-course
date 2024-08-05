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
console.log(calcula02);

//FUNÇÃO ARROW
const mensagem = (nome) =>{
    console.log(`Olá, ${nome}!`);
};
mensagem("Bernardo");