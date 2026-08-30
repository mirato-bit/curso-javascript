let nome="melo";

for(let r=512;r>=1;r=r/2){
    if(r==32){
        nome="near";
    }

    if(r==8 && nome=="near"){
        console.log("o nome é near, pode parar");
        break;
    }
    console.log(r);
}