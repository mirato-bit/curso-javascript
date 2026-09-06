class Conta{
    constructor(corrente,poupança,juropoupança){
        this.corrente=corrente;
        this.poupança=poupança;
        this.juropoupança=juropoupança;
    };
    saquec(dinheiro){
        this.corrente-=dinheiro
    };
     saquep(dinheiro){
        this.poupança-=dinheiro
    };
    depositoc(dinheiro){
        this.corrente+=dinheiro;
    };
     depositop(dinheiro){
        this.poupança+=dinheiro;
    };
    transferenciap(dinheiro){
        this.corrente+=dinheiro;
        this.poupança-=dinheiro;
    };
    transferenciac(dinheiro){
        this.corrente-=dinheiro;
        this.poupança+=dinheiro;
    };
    jurosaniversario(){
        let juros=this.poupança*this.juropoupança/100;
        this.poupança+=juros;
    }
}

let conta=new Conta(2800,5000,1);

console.log(conta);

conta.transferenciac(1000);

console.log(conta);

conta.transferenciap(200);

console.log(conta);

conta.saquec(1300);

console.log(conta);

conta.saquep(3000);

console.log(conta);

conta.depositoc(1500);

console.log(conta);

conta.depositop(4000);

console.log(conta);

conta.jurosaniversario();

console.log(conta)

class Contavip extends Conta{
   constructor(corrente,poupança,juropoupança){
       super(corrente,poupança,juropoupança*2);
 
}

}

let contavip=new Contavip(2800,5000,1);

console.log(contavip);

contavip.transferenciac(1800);

console.log(contavip)

contavip.jurosaniversario();

console.log(contavip)