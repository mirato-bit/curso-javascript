class Aves{
    constructor(patas){
        this.patas=patas;
    }

}

let falcao= new Aves(2);

console.log(falcao.patas);

class Galinha extends Aves{
    constructor(patas,cor){
        super(patas,patas);
        this.cor=cor;
    }
    barulho(){
        console.log("cocorico");
    }
}

let galinha=new Galinha(2,"branca");

console.log(galinha.patas);
console.log(galinha.cor);
galinha.barulho()