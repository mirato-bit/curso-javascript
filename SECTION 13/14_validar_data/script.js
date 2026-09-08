const data=/[0-31]{2}[/][0-12]{2}[/][1930-2025]{4}/;

console.log(data.test("15/01/1984"));
console.log(data.test("5/1/1984"));
console.log(data.test("15/11/84"));
console.log(data.test("15-11-1984"));
console.log(data.test("31/11/2015"));
console.log(data.test("99/99/9999"));
console.log(data.test("31/02/2000"));