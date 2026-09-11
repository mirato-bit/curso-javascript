
let novoElemento=document.createElement('p');
let texto=document.createTextNode('texto diferente');

novoElemento.appendChild(texto);


let elementoAlvo=document.querySelector('#titulo');
let elementoPai=document.querySelector('#conteiner');


elementoPai.insertBefore(novoElemento,elementoAlvo);


