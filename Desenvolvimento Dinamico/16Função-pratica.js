const shoppingCart = [];

function addItemToCart(item) {
    shoppingCart.push(item);
}
function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if(index != -1){
        shoppingCart.splice(index, 1)
    }else{
        console.log("Produto indisponível no carrinho")
    }
}
function viewCart(){
    if(shoppingCart != 0){//veirifca se tem itens
        console.log("Itens no carrinho");
        for(let i = 0;i<shoppingCart.length;i++){
            console.log(`${i+1} - ${shoppingCart[i]}`)
        }
    }else{
        console.log("Seu carrinho está vazio")
    }
}
function clearCart(){
    shoppingCart.length = 0;//zera array para limpar carrinho
    console.log("your shopping cart was cleared");
}
addItemToCart("Intel core i5")
removeItemFromCart("Intel core i5")
addItemToCart("Xbox Series X")
addItemToCart("Iphone 15")
addItemToCart("TV LCD")
addItemToCart("Playsation 5")
viewCart();

clearCart();
viewCart(); 