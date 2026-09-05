function Urso(raca,patas,cor){
    this.raca= raca;
    this.patas=patas;
    this.cor=cor;
}
Urso.prototype.rugir= function(){
    console.log("rrrrrooooooooaaaaaaarrrrrrr")
}


let panda = new Urso("panda",4,"preto e branco");   

console.log(panda);
panda.rugir();