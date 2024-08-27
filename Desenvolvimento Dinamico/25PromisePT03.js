class MinhaClasse{
    constructor(valor){
        this.valor = valor;
    }
    operacaoAssincrona(){
        return new Promise((resolve,reject)=>{
            const resultado = this.valor*2;
            if(resultado >= 0 ){
                resolve(resultado)
            }else{
                reject("Resultado é negativo")
            }
        })
    }
}

const minhaclass = new MinhaClasse(5);

minhaclass.operacaoAssincrona().then((resultado) =>{
    console.log("O resultado da operação é: ", resultado)
})
.catch((erro) =>{
    console.log("ocorreu um erro", erro)
})
