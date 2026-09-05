class Urso {
    constructor(raca,cor){
        this.raca=raca;
        this.cor=cor;
    }
    rugir(){
        console.log("rrrrroooooaaaarrrrrr")
    }
}
Urso.prototype.raca="SRD";

let patas= Symbol();

Urso.prototype[patas]=4;

let polar= new Urso("polar","branco");


polar.rugir();
console.log(Urso.prototype.raca);
console.log(polar.raca);

// acessando symbol
console.log(Urso.prototype[patas]);

console.log(polar[patas]);