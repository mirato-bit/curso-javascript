function saudacao(nome){
    if(typeof(nome)=="string"){
        console.log("seja bem vindo "+nome)
    }else{
        throw new Error ("o nome precisa ser uma string");    
    }
}


saudacao("mauricio")
saudacao(7);



console.log("teste");