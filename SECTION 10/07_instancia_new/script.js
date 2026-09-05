function Urso(raca,patas,cor){
    this.raca= raca;
    this.patas=patas;
    this.cor=cor;
    this.rugir=function(){
        console.log("roooaaarrrr");
    };
}

let panda = new Urso("panda",4,"preto e branco");   

console.log(panda);
panda.rugir();