const menosoumaisnumeros=/\d+/;

console.log(menosoumaisnumeros.test("1213232"));
console.log(menosoumaisnumeros.test(""));
console.log(menosoumaisnumeros.test("dadadada"));
console.log(menosoumaisnumeros.test("1"));
console.log(menosoumaisnumeros.test("12132329857754595405"));
