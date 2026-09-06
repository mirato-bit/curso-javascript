class Carro{
    constructor(marca,cor,gasolina){
        this.marca=marca;
        this.cor=cor;
        this.gasolina=gasolina;
    }

    abastecer(litro){
        this.gasolina+=litro;
    }
    dirigir(km){
        this.gasolina-=km*14
    }
}

let lamborguini=new Carro("lamborguini","amarelo",450);

console.log(lamborguini);

lamborguini.abastecer(800);

console.log(lamborguini);

lamborguini.dirigir(30)

console.log(lamborguini)