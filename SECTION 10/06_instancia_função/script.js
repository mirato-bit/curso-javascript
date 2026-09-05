function criaurso(raca, patas, cor){
    let urso= Object.create({});
    urso.raca= raca;
    urso.patas=patas;
    urso.cor=cor;
    urso.rugir=function(){
        console.log("roooooooooaaaaaaar");
    }
    return urso;
}

let pardo=criaurso("pardo",4,"marrom");

console.log(pardo); 
pardo.rugir();