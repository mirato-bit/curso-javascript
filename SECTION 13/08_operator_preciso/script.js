const cep=/\d{5}-\d{3}/;

console.log(cep.test("78323-582"));
console.log(cep.test("sdsad"));
console.log(cep.test("723-52"));

const tel=/\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(34)4535-8080"));
console.log(tel.test("(34)45358-8080"));