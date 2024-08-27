//O que é promise?? Dados externos que vc pretende aplicar na sua página
//exemplo 1
const minhaPromise = new Promise((resolve,reject) =>{
    const sucess = true;
    if(sucess){
        resolve("Sucesso!!")
    }else{
        reject("Ocorreu um erro")
    }
} )//verificação

minhaPromise
.then((resultado) =>{
    console.log("Foi sucesso: "+resultado)
})
.catch((erro) => {
    console.log("Erro: "+erro)
})
