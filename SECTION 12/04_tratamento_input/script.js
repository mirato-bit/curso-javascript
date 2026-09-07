function checarnum(n){
    let number = Number(n);
    if(Number.isNaN(number)){
        alert("escreva somente numeros");
    }else{
        return number;
    }
}

checarnum(9);
checarnum("oi")


let num= prompt("digite um numero");

checarnum(num)