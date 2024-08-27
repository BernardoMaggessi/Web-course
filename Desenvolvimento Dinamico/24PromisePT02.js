function somarArray(array){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(array)){
            reject("O objeto passado não é um array")
        }
        const soma = array.reduce((total,num) => total+num,0)
        resolve(soma)
    })
}

const arr = [1,2,3,4,5,6]
somarArray(arr).then((resultado) => {
    console.log("a soma dos elementos é",resultado)
}).catch((erro) =>{
    console.log("Erro: ",erro)
})
