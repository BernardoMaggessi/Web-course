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