let p = Promise.resolve(6);

console.log("seja bem vindo ao codigo");

console.log(p);

p.then((value)=>{return value*7})
.then((value)=>{console.log(value)})