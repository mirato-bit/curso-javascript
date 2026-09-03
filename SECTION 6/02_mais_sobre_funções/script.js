function mutiplicartresnumeros(x,y,z){
    return x*y*z;
};

console.log(mutiplicartresnumeros(9,6,8));

const mult= mutiplicartresnumeros(13,2,42);

console.log(" o valor é de " +mult);
function dirigir(cnh,idade){
    if(cnh==true && idade>=18){
        console.log("pode dirigir")
    }else if(idade>=18 && cnh==false){
        console.log("não pode dirigir mas pode fazer a cnh")
    }else{
        console.log("não tem idade suficiente para dirigir")
    }
}

dirigir(true,20);
dirigir(0,21);
dirigir(1,20,);
dirigir(true,17)