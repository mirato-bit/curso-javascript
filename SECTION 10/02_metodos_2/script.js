const gato={
    raca:"não definida",
    miado: function(){
        console.log("miau miau")
    },
    roronar: function(){
        console.log("mmmmrrrr")
    },
    setraca:function(raca){
        this.raca=raca;
    },
    getraca:function(){
        return "a raça é "+ this.raca;
    }
   }
   
   console.log(gato.raca);
   gato.setraca("persa"); 
   console.log(gato.raca);
   console.log(gato.getraca()); 