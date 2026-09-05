let nomes=["luiz","cleber","ednaldo","sofia","patrick"];

let marcas=["nintendo","sony","microsoft"];


function tamanho(x){
    if(x.length>=5){
        console.log("tem muitos elementos");
    }else{
        console.log("tem poucos elementos");
    }
};

tamanho(nomes);
tamanho(marcas);