//Utilizando FOR

var pais = 'Brasil';

if(pais!='brasil'){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é Brasileiro");
}

var idade = 22;
if(idade < 16){
    console.log("Você ainda não pode votar");
}else if(idade<18 || idade>65){
    console.log("Voto é opcional");
}else{
    console.log("Voto obrigatório");
}

//CONTROLE DE FLUXO COM SWITCH
var diaSem = 1;
 switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feita");
        break;
    case 7:
        console.log("Sábado");
        break;
 }
 //Exercicio de controle de fluxo
 let valor = "chá"
 switch(valor){
    case "café":
        console.log("Você escolheu CAFÉ");
        break;
    case "leite":
        console.log("Você escolheu LEITE");
        break;
    case "chá":
        console.log("Você escolheu CHÁ");
        break;
    default:
        console.log("VOCÊ SELECIONOU UMA OPÇÃO INVÁLIDA");
        break;
 }

 //Exercício Prático