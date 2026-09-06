class Compras{
    constructor(itens,quantidade,valor){
        this.itens=itens;
        this.quantidade=quantidade;
        this.valor=valor;
    }
    adicionar(item){
        let contador=0
for(let itemc in this.itens){
    if(this.itens[itemc].id==item.id){
        this.itens[itemc].quantidade+=item.quantidade;
        contador=1
    }
}
if (contador==0){
    this.itens.push(item);
}
    this.quantidade+=item.quantidade;
    this.valor+=item.valor*item.quantidade;

     
    }
    remover(item){
        for(let itemc in this.itens){
        if(this.itens[itemc].id==item.id){
        let obj = this.itens[itemc];
        let index =this.itens.findIndex(function(obj){return obj.id==item.id});

        this.quantidade-=this.itens[itemc].quantidade;
        this.valor-=this.itens[itemc].valor*this.itens[itemc].quantidade;
        this.itens.splice(index,1);
           
        }
    }
   
    }
}

let carrinho=new Compras([{
    id: 1,
    nome:"camisa",
    quantidade:2,
    valor:20,
},{
    id: 2,
    nome:"calça",
    quantidade:4,
    valor:30,
}],6,160);

console.log(carrinho)

carrinho.adicionar({id:1,nome:"camisa",quantidade:3,valor:20});

console.log(carrinho)

carrinho.adicionar({id:3,nome:"bermuda",quantidade:2,valor:15});

console.log(carrinho)

carrinho.remover({id:2,nome:"calça",quantidade:2,valor:20});

console.log(carrinho)
  