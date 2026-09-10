let p = Promise.resolve(new Error("algo deu errado"));

console.log("continua");

p.then((value)=>{console.log(value)})
.catch(reason=>console.log("falhou:"+reason));