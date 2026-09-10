function* criarinf(){
   let i=0;
   while(true){
      yield i++
   }
}

let criarin=criarinf();

console.log(criarin.next().value);
console.log(criarin.next().value);
console.log(criarin.next().value);
console.log(criarin.next().value);
console.log(criarin.next().value);
console.log(criarin.next());