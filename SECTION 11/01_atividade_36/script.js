class Banco{
    constructor(saldo){
        this.saldo=saldo;
    }
    deposito(valor){
        this.saldo+=valor
    }
    saque(valor){
        this.saldo-=valor
    }
}


let meubanco=new Banco(100);

console.log(meubanco.saldo);

meubanco.deposito(300)

console.log(meubanco.saldo);

meubanco.saque(250)

console.log(meubanco.saldo);