function tipo(x){
   if(typeof x ==="string"){
    console.log("ele é uma string");
   }else if(typeof x ==="number"){
    console.log("ele é um numero");
   }else if(typeof(x) ==='boolean'){
    console.log("ele é um boolean");
   }else{console.log("error")}
}





tipo("oi");
tipo(20);
tipo(true);

