/**function divisao(a,b){
    if(b===0){
        throw new Error("divisao não pode ser feita por zero")
    }
    return a/b
}

try{
    const resultado = divisao(10,0)
    console.log(resultado)
}catch(error){
    console.log("Ocorreu uma exceção "+error.message)
}*/

//praticando uso da exception
/** 
const numeros = [1,2,3,4,5]

try{
    const doubleNumbers = numeros.map((num)=>
        {
            if(typeof num!=='number'){
                throw new Error("array só pode ter numeros")
            }return num*2
        })
}catch(error){
    console.log("Ocorreu uma exceção "+error.message)
}
    */
//exemplo práatico  
function processName(nome, callback){
    if(typeof nome !== "string"){
        callback(new Error('O nome deve ser uma string'))
        return;
    }
    if(nome.length === 0){
        callback(new Error("O nome não pode estar vazio"))
        return
    }
    callback(null,"Nome processado com sucesso")

    processName("Marcelo",(error,result) => {
        if(error){
                console.log("Ocorreu um problema",error.message)
            }else{
                console.log(result)
            }
        });
}
