const dominio=/[?ww.]\w+\.com|com.br/;

console.log(dominio.test("www.google.com"));
console.log(dominio.test("www.gov.com.br"));
console.log(dominio.test("www.google"));
console.log(dominio.test("gov.com.br"));

