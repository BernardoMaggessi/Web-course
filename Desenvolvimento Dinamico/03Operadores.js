// Operadores na prática
//operador ternário condicao ? valor1 : valor2 onde valor após interrogação é verdadeiro e o outro é falso
var idade = 16;
var stat = (idade>=18)?"adulto":"menor de idade";
console.log(stat);

var n = 3;
console.log(n*=10);
var x = 10;

a=10;
b=20;
c=60;
//comparando
console.log(x==n);
console.log(!(n>=x && b!=c));

//verificar se a é maior do que b e b é divisivel por dois
console.log(a > b && b % 2 == 0);

//verificar se b é maior ou igual a ou b divide por 2 o resultado é dois
console.log(b>=a || b/2 == 2);

//verificar a é igual a b e b é maior que 5
console.log(a>b && b>5);

//verificar se b é par ou impar usando ternario
console.log((b%2 == 0)? "par":"impar");