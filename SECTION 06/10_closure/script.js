function media(x){
    return function(y){
        return (x+y)/2;
    }
};

let soma1= media(5);

console.log(soma1(10));

let soma2= media(9);

console.log(soma2(4));

function contador(i){
    let num=i;
    let somarcontador = function(){
        console.log(num);
        num++;
    }
    return somarcontador;
};


    let meucontador= contador(5);
   meucontador();
   meucontador();
   meucontador();
   meucontador();
   meucontador();
   meucontador();