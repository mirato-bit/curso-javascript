
let novoElemento=document.createElement('p');
let texto=document.createTextNode('texto diferente');

novoElemento.appendChild(texto);

let heading=document.querySelector('#titulo');
let paiheading=heading.parentNode;

paiheading.replaceChild(novoElemento, heading);

