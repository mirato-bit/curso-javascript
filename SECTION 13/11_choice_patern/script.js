const reg=/\w+:(loki|thor|odin)/;//nome: adasdsa

console.log(reg.test("nome:odin"));
console.log(reg.test("nome:cebolinha"));
console.log(reg.test("nome:loki"));
