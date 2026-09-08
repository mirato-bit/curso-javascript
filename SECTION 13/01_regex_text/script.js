const reg= new RegExp('oi');

console.log(reg.test("oooooooooooooiiiiiiiiii"));
console.log(reg.test("hello"));

const reg1=/carro/

let texto="achei o carro";

console.log(reg1.test("onde esta o carro"));
console.log(reg1.test("não sei"));
console.log(reg1.test(texto));

console.log(/voce/.test("onde esta voce?"));