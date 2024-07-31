//tipos de dados em JS: boolean, null, undefined, Number, String, Objeto
//conversão de tipos é possível

var resp = 42;
resp = "sua idade é 42";
console.log(resp)

var x = "a idade é "+ 42;
var y = 42+" é a idade";
console.log(x);
console.log(y)

//AULA PRÁTICA DE TIPOS DE DADOS ABAIXO
var nome = "Guilherme"
console.log(typeof(nome));
console.log(nome.toLocaleUpperCase());

if(typeof(nome)=="string")
    console.log(nome.toLocaleUpperCase());
else
    console.log("Passe uma String");
