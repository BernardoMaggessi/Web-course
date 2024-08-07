class Funcionario{
    constructor(nome,idade, cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    seApresentar(){
        console.log("Olá, meu nome é ",this.nome," e sou",this.cargo)
    }
    Trabalhar(){
        console.log(this.nome+" // "+this.cargo +" EM EXPEDIENTE")
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo,departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gereciar(){
        console.log("Gerenciar equipe do dep: "+this.departamento)
    }

}
class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem
    }
    programar(){
        console.log("Programando em "+this.linguagem)
    }
}
let f1 = new Funcionario("Bernardo Maggessi",25,"Técnico de informática");
console.log(f1)
f1.seApresentar()
f1.Trabalhar()

let g1 = new Gerente("RAFAELA",32,"GERENTE DE TI","TECNOLOGIA")
console.log(g1)
g1.seApresentar()
g1.Trabalhar()
g1.gereciar()

let p1 = new Desenvolvedor("PEDRO",27,"Desenvolvedor WEB","JAVASCRIPT")
console.log(p1)
p1.seApresentar()
p1.Trabalhar()
p1.programar()