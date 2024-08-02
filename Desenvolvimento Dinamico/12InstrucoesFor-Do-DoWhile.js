var carro = [{modelo: "A3", marca:"Audi", ano:2020},{modelo:"M3", marca:"BMW", ano:2019}]
//FOR IN
for(let caracteriscas in carro){
    console.log(carro[caracteriscas]);
}
//FOR OF
for(let c of carro){
    console.log(c.ano);
}

//WHILE
var i = 0;
while(i<=100){
    console.log(`o i é igual a ${i}`);
    i++;
}

//DO-WHILE
do{
    console.log("Do while");
}while(i<10);