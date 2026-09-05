class Urso {
    constructor(raca,cor){
        this.raca=raca;
        this.cor=cor;
    }
    rugir(){
        console.log("rrrrroooooaaaarrrrrr")
    }
get getcor(){
    return this.cor;
}

set setcor(cor){
    this.cor=cor;
}

}


let pardo= new Urso("pardo","undefined");

console.log(pardo);

pardo.setcor= 'marrom';
console.log(pardo.getcor);
