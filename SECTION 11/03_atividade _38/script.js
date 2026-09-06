class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua=rua;
        this.bairro=bairro;
        this.cidade=cidade;
        this.estado=estado;
    };
   set arua(nome){
    this.rua=nome;
   };
   set abairro(nome){
    this.bairro=nome;
   };
    set acidade(nome){
    this.cidade=nome;
   }; 
   set aestado(nome){
    this.estado=nome;
   };
}




let end=new Endereco("av sao joao","sempreverde","belo horizonte","minas gerais");


console.log(end);

end.arua="av getulio vargas";

console.log(end);

end.abairro="jardim das oliveiras";

console.log(end);

end.acidade="são paulo";

console.log(end);

end.aestado="são paulo";

console.log(end);
