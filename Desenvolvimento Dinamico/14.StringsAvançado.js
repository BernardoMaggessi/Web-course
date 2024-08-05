//METODOS MAIS AVANÇADOS EM STRING
//MUITO UTILIZADOS
var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")[1];//Split vai dividir a url em dois elementos de array (antes de depois do ?) e ao definir o indice 1, variavel 'parametros' vai guardar somente o indice 1
console.log(parametros);

const valores = parametros.split("&");
console.log(valores);

for(let i = 0; i<valores.length;i++){
    if(valores[i].startsWith("atores")){
        valores[i] = "atores = "+valores[i].substring(7).toUpperCase();
        console.log(valores[i])
    }  
}
