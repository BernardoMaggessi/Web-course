//fazendo o script do carrinho de compras

var valorTotal = [0, 0]; //valor dos dois itens
var valorProduto = [40.99, 30.98]; //preco dos itens
var qtd = [0,0]; //quantidade dos itens

function adicionarItem(item){
    var quantidade = document.getElementById('quantidade'+item);
    var total = document.getElementById('total'+item);
    qtd[item] +=1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]*qtd[item]);
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
}
function removerItem(item){
    if(qtd[item] > 0)
        qtd[item] -= 1;
        var quantidade = document.getElementById('quantidade'+item);
        var total = document.getElementById('total'+item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]*qtd[item]);
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
}
function valorCompra(){ //adiciona valores ao subtotal
    var valorTotalCompra = document.getElementById('valorTotalCompra')
    var valor = 0;
    for(var i=0; i<valorTotal.length;i++){
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}
