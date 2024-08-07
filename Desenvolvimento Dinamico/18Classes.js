//definindo classes --> o mais importante do javascript
//toda classe é atríbuído por atributos e comportamentos -- um papagaio é um objeto pois tem as seguintes caractéristicas - nome/ idade/ canta /dança
//classe cães -- cão Alex é um objeto // ou seja, quando classe é instanciada ela se torna um objeto
//classe carro - atributos de objetos = marca/modelo/cor/combustível  Métodos = ligar/Acelerar/freio   



class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get FullName(){
        console.log(this.firstName +" "+this.lastName);
    }
    falar(){
        console.log("Olá, meu nome é "+this.firstName +" "+this.lastName);
    }
}
var p1 = new User("Bernardo","Maggessi");
p1.falar();
p1.FullName;

//HERANÇA -- permite que classes compartilhem atributos e metódos atráves de hierarquia de classes
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("já está ligado");
            return;
        }
            this.ligado = true
        }
    }

class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}
var s1 = new SmartPhone("Samsung","Preto","s21 plus")
s1.ligar();
console.log("s1: ",s1)




