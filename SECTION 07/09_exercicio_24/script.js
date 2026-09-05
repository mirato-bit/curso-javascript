function potencia(x,y){
   console.log(Math.pow(x,y));
};


potencia(3,9);
potencia(2,5);
potencia(10,9);
potencia(3,6);
potencia(2,10);

console.log("======================================")
console.log("potencia de estilo diferente")
function potencia1(x,y){
   return x ** y;
};


console.log(potencia1(3,9));
console.log(potencia1(2,5));
console.log(potencia1(10,9));
console.log(potencia1(3,6));
console.log(potencia1(2,10));