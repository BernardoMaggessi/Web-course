const pessoa = {
    nome: "Bernardo",
    idade: 27,
    profissao: "Analista de sistemas"
}

const pessoaJSON = JSON.stringify(pessoa)
console.log("JSON -->",pessoaJSON)
console.log("Objeto Javascript -->",pessoa)
console.log("DE JSON PARA OBJETO JS -->",JSON.parse(pessoaJSON))