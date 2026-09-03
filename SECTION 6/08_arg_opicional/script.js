function inteligencia(nome,qi){
    if(qi===undefined){
        console.log("não colocou o qi do " + nome);
    }else if(qi>110){
        console.log(nome+" é inteligente");
    }else if(qi>=90){
        console.log(nome+" tem inteligencia media");
    }else{
    console.log(nome+ " tem deficiencia intelectual")
    }
}

inteligencia("mourice",110)


function introdução(nome,idade){
    if(idade===undefined){
        console.log("seja bem vindo "+nome);
    }else{
        console.log("olá "+nome+" você tem "+ idade+" anos")
    }
}
introdução("roni",18)