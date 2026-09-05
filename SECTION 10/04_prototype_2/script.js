const casa={
    quartos:2
}
console.log(Object.getPrototypeOf(casa));
console.log(Object.getPrototypeOf(casa)==Object.prototype); 
console.log(casa.hasOwnProperty("quartos"));

const casanova=Object.create(casa);

console.log(casanova.quartos);

console.log(casanova.hasOwnProperty("quartos"));
console.log(Object.getPrototypeOf(casanova)==casa); 