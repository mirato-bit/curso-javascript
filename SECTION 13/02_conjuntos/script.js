const reg=/[56789]/;


console.log(reg.test("temos 3 caixas"));
console.log(reg.test("temos 7 caixas"));
console.log(reg.test("temos 78 caixas"));
console.log(reg.test("temos 73 caixas"));

const reg1=/[0-9]/;

console.log(reg1.test("temos 3 caixas"));
console.log(reg1.test("temos 7 caixas"));
console.log(reg1.test("temos 78987690 caixas"));
console.log(reg1.test("temos caixas"));