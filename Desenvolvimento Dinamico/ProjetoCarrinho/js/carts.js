let carrinho = []

function start(){
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => response.json())
    .then(data =>{
        preencherCarrinho(data)
    })
    .catch(error =>{
        console.log('Ocorreu um erro', error)
    });
    atualizaCarrinho();
}

function preencherCarrinho(produtos){
    produtos.forEach(data =>{
        adicionarAoCarrinho(
            data.title,
            data.image,
            data.description,
            data.price
        )
    });
    atualizaCarrinho()
}

function adicionarAoCarrinho(nome,imgLink,descricao,preco){
    carrinho.push({
        "nome":nome,
        "imgLink":imgLink,
        "descricao":descricao,
        "preco":Number.parseFloat(preco),
        "quantidade":0,
        "total": 0.0

    })
}function atualizaCarrinho() {
    let carrinhoHTML = document.getElementById("carrinho");
    
    carrinho.forEach((produto, index) => {
        carrinhoHTML.insertAdjacentHTML('beforeend', `
        <div id='produto${index}' class='d-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pt-2 pb-3 border-bottom mobile'>
            <div class='col-md-4 d-flex flex-row align-items-center'>
                <img src='${produto.imgLink}' width='100' height='100' class='mr-3'/>
                <div class='d-flex flex-column'>
                    <h6>${produto.nome}</h6>
                    <p class='text-muted'>${produto.descricao}</p>
                </div>
            </div>   
            <div class='col-md-2 text-center'><b>R$ ${produto.preco}</b></div>
            <div class='col-md-3 text-center'>
                <span class='fa fa-minus-square text-secondary' onclick='removeItem(${index})'></span>
                <span class='px-md-3 px-1' id='quantidade${index}'>${produto.quantidade}</span>
                <span class='fa fa-plus-square text-secondary' onclick='adicionarItem(${index})'></span>
            </div>
            <div class='col-md-2 text-center'>
                <b>R$ <span id='total${index}'>0.00</span></b>
            </div>
            <div class='col-md-1 text-right'>
                <span class='fa fa-times text-danger' onclick='removeProduto(${index})'></span>
            </div>
        </div>`);
    });
}

function adicionarItem(item){
    var qtd = document.getElementById('quantidade'+item);
    let produto = carrinho[item];
    produto.quantidade +=1;
    qtd.innerHTML = produto.quantidade;
    atualizaNumerosTela(qtd,item);
}
function removeItem(item){
    var qtd = document.getElementById('quantidade'+item);
    let produto = carrinho[item];
    if (produto.quantidade > 0 ){
        produto.quantidade -= 1;
        qtd.innerHTML = produto.quantidade;
        atualizaNumerosTela(qtd,item);
    }
}

function atualizaNumerosTela(qtd, item){
    qtd.innerHTML = carrinho[item].quantidade
    atualizaTotalProduto(item)
    atualizaSubTotal()
}

function atualizaTotalProduto(item){
    let total = document.getElementById('total' + item)
    let produto = carrinho[item]
    produto.total = Number.parseFloat(
        produto.quantidade * produto.preco
    );
    total.innerHTML = produto.total.toFixed(2);
}
function atualizaSubTotal(){
    let totalCompra = document.getElementById('valorTotalCompra')
    let subtotal = 0
    carrinho.forEach(produto => {
        subtotal +=produto.quantidade * produto.preco
    })
    totalCompra.innerHTML = subtotal.toFixed(2);
}
function removeProduto(item){
    let carrinhoHTML = document.getElementById('carrinho')
    let produto = document.getElementById('produto'+item)

    if(confirm("Você tem certeza que deseja excluir item?")){
        carrinho[item].quantidade = 0;
        atualizaSubTotal();
        carrinhoHTML.removeChild(produto);
    }
}