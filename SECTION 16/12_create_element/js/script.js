
let list=document.createElement('ul');
 

for(i=0;i<8;i++){

    let item=document.createElement('li');

    let texto= document.createTextNode("texto de lista aleatorio" + i);

    item.appendChild(texto);

 list.appendChild(item);
}


let contei=document.getElementById("conteiner");

contei.appendChild(list);