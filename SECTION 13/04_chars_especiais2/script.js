const mes=/\d\d/;

console.log(mes.test("2020") && "2020".length==2);
console.log(mes.test("2"));
console.log(mes.test("10") && "10".length==2);
console.log(mes.test("policia"));


const minimotresletras=/\w\w\w/;

console.log(minimotresletras.test("asd"));
console.log(minimotresletras.test("asdf"));
console.log(minimotresletras.test("as"));