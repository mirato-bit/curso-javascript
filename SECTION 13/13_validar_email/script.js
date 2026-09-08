const email=/\w+@\w+\.\w+/;

console.log(email.test("messias.mg@gmail.com"));
console.log(email.test("messias.mg@gmail"));
console.log(email.test("gmail.com"));
console.log(email.test("messias.mg@gmail.com.br"));
console.log(email.test("gmail@gmail.gmail"));


