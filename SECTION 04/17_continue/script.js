for(let r=256;r>2;r=r-13){
    if(r%2==0){
        console.log("caiu no continue");
        continue;
    }
    console.log(`O resultado é ${r}`);
}