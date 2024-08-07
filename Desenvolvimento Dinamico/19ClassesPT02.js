class contaCliente{
    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }
    calcularSaldoAtual(){return this.saldo - this.debito + this.debito}
    verificaSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual>=0){
            alert("Saldo positivo => R$"+saldoAtual)
        }else{
            alert("Saldo negativo => R$"+saldoAtual)
        }
    }
}
let numeroConta = prompt("Digite o numero da conta do cliente")
let saldo = parseFloat(prompt("digite o saldo do cliente"))
let debito = parseFloat(prompt("Debito do cliente"))
let credito = parseFloat(prompt("Credito do cliente"))

let conta = new contaCliente(numeroConta,saldo,debito,credito); 
conta.verificaSaldo();