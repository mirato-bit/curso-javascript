const username=/^(?=.{3,16}$)[a-z0-9-_]/;

console.log(username.test("caua_8"));
console.log(username.test("lo-23"));
console.log(username.test("25"));
console.log(username.test("leon98-2321menuewwq"));
console.log(username.test("44654654"));
console.log(username.test("chapolin"));


