const id=/\d{3}ID\b/;

console.log(id.test("584ID"));
console.log(id.test("62ID"));
console.log(id.test("982id"));
console.log(id.test(" "));

