function multcomdelay(a,b){
   return new Promise(resolve=>{
      setTimeout(function(){
resolve(a*b);
      }, 6000);
   })
}

async function resmult(a,b,c) {
   let x = multcomdelay(a,b);
   let y=c;

   return await x*await y;
}

resmult(8,4,6).then(value=>console.log(value));