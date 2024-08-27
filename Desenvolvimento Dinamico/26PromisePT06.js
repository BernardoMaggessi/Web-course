function obterValor(valor){
    return new Promise((resolve, reject) =>{
        if(valor>10){
            valor +=1;
            resolve(valor)
        }else{
            reject("O valor é menor que 10")
        }
    })
}

function dobrarValor(valor){
    return valor*2;
}
function adicionarDez(valor){
    return valor+10;
}

obterValor(28)
.then((valor) =>{
    console.log("valor obtido")
    return dobrarValor(valor)
})
.then((novoValor)=>{//novoValor vem do return acima
    console.log("Segundo Tratamento")
    return adicionarDez(novoValor)
})
.then((resultado) =>{
    total = resultado+5
    console.log("O resultado final é", total)
})
.catch((erro) =>{
    console.log("Ocorreu um erro",erro)
})