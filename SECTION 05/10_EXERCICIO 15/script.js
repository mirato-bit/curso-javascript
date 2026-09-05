let r=40;
let div=0;

for(let i=1;i<=r;i++){
    if(r%i==0){
        div++;
    }
}


if(div==2){
    console.log(`o numero ${r} é primo`);
}else{
    console.log(`o numero ${r} não é primo`);
}
