/**Objetos são como uma espécie de super variável que armazenam um coleção de valores referenciados por nome, e que podem ser recuperados em diversas outras partes do programa */
const pessoa = {nome:'BERNARDO', sobrenome: "MAGGESSI"}
const chave = "sobrenome";
//algumas formas de buscar esses elementos do objeto
console.log(pessoa)
console.log(pessoa.sobrenome);
console.log(pessoa[chave]);
console.log(pessoa['sobrenome'])

//segunda forma de criar objeto
const funcionario = new Object();
funcionario.nome = "Lucas";
funcionario.sobrenome = "Silva";
funcionario.salario = 2500.00;

console.log(funcionario)

//terceira forma de criar objeto
function criarPessoa(nome, sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`//criando método dentro de objeto
        }
    }
}
const p1=criarPessoa("Debora","Fonseco",20);
const p2=criarPessoa("Matheus","Oliveira",34);
console.log(p1);
console.log(p2.nome);
console.log(p2.nomeCompleto);

//Exercício de IMC

function criarFuncionario(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        get calculaIMC(){
            let resultado = peso/(altura*altura).toFixed(2);
            
            if(resultado <18.5){
                console.log(`${resultado}`," --> IMC abaixo do recomendado")
            }else if(resultado >= 18.5 && resultado <= 24.9){
                console.log(`${resultado}`," --> peso normal")
            }else if(resultado >= 25 && resultado <= 29.9){
                console.log(`${resultado}`," --> sobrepeso")
            }else if(resultado >= 30 && resultado <= 34.9){
                console.log(`${resultado}`," --> obesidade nivel 1")
            }else if(resultado >= 35 && resultado <= 39.9){
                console.log(`${resultado}`," --> obesidade nivel 2")
            }else{
                console.log(`${resultado}`," --> obesidade nivel 3")
            }
        }
    }
}
const p3 = criarFuncionario("Bernardo","Maggessi",1.80,60);
p3.calculaIMC
