let nome="jose";
let nome2="camila";
let nome3="carlos";
let nome4="cleber";
let nome5="larisa";

function conjunto(...args){
    for(let r=0;r<args.length;r++){
        console.log(args[r]);
    };
};

conjunto(nome,nome2,nome3,nome4,nome5);
console.log("============================================================");
conjunto(nome5,nome3);
console.log("============================================================");
conjunto(5,8,2,8,4,8,5);
