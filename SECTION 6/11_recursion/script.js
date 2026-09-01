    function recursao(n){
        if(n-1<2){
            console.log("recursao parou");
        }else if(n%2==1){
            console.log("numero impar: "+n);
            recursao(n-1);
        }else{
            console.log("numero par: "+n);
            recursao(n-1);
        }
    };
    recursao(29);
    recursao(39);
    recursao(57);