function testandonumero(num){
    return new Promise((resolve,reject)=>{
    if(num==3){
        resolve(console.log("o numero é "+num))
    } else{
        reject(new Error("falhou"))
    } 
})
}

testandonumero(3);
testandonumero(5);