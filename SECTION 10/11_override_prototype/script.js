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
Urso.prototype.patas=4;

let polar= new Urso("polar","branco");

console.log(polar.patas);
polar.rugir();
console.log(Urso.prototype.raca);
console.log(polar.raca);