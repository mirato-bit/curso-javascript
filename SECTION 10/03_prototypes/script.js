const casa={
    quartos:2
}
console.log(Object.getPrototypeOf(casa));
console.log(Object.getPrototypeOf(casa)==Object.prototype); 
console.log(casa.hasOwnProperty("quartos"))