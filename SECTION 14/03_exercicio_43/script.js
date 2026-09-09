const marca=/marca:(Nike|Adidas|Puma|Asics)/;

console.log(marca.test("marca:Puma"));
console.log(marca.test("Nike"));
console.log(marca.test("marca:nintendo"));
console.log(marca.test(" "));
console.log(marca.test("marca:Adidas"));

