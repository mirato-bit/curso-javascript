const padrao=/sueter?/;

console.log(padrao.test("sueter"));
console.log(padrao.test("suete"));

const padrao2=/\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));