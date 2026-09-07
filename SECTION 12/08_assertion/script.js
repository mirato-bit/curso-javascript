let arr=[1,2,3,4,5,6,7,8,9];
let arr2 =[];

function testararr(arr){
    if(arr.length==0){
        throw new Error("o array precisa ter elementos")
    }else{
        for(let i=0;i<arr.length;i++){
            console.log(i);
        }
    }
}

function arrayvazio(arr){
    if(arr.length>0){
        throw new Error("o array nao pode ter elementos")
    }else{
        console.log("deu tudo certo")
    }
}

arrayvazio(arr2);
arrayvazio(arr);


testararr(arr);
testararr(arr2); 