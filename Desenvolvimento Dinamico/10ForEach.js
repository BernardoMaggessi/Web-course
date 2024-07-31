//o método FOREACH é utilizado para percorrer arrays
let foods = ['bread','salad','meat','pizza'];

//primeiro exemplo
foods.forEach(
    function(food){
        console.log(food)
});

//com função anonima
foods.forEach(valor => console.log(valor));

var a = [10,20,30,40];

var tot = 0;
a.forEach(valor => {
    tot +=valor;       
})
console.log("total de soma = ",tot);
