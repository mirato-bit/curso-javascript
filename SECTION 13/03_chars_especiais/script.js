const ponto=/./;//tudo

console.log(".")
console.log(ponto.test("asd"));
console.log(ponto.test(" "));
console.log(ponto.test("123"));
console.log(ponto.test("123asd"));
console.log("==========================================================");

const dregex=/\d/; //[0-9]

console.log("d")
console.log(dregex.test("asd"));
console.log(dregex.test(" "));
console.log(dregex.test("123"));
console.log(dregex.test("123asd"));
console.log("==========================================================");

const dregex2=/\D/;//odeixar maiusculo faz o contrario

console.log("D")
console.log(dregex2.test("asd"));
console.log(dregex2.test(" "));
console.log(dregex2.test("123"));
console.log(dregex2.test("123asd"));
console.log("==========================================================");

const sregex=/\s/;//aceita só espaços vazios,quebra de linha

console.log("s")
console.log(sregex.test("asd"));
console.log(sregex.test(" "));
console.log(sregex.test("123"));
console.log(sregex.test("123asd"));
console.log("==========================================================");

const wregex=/\w/;//aceita só espaços vazios,quebra de linha

console.log("w")
console.log(wregex.test("asd"));
console.log(wregex.test(" "));
console.log(wregex.test("123"));
console.log(wregex.test("123asd"));
console.log("==========================================================");