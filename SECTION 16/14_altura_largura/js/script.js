
let elemento= document.querySelector('#titulo');

console.log('largura: '+elemento.offsetWidth); //considera as bordas
console.log('altura: '+elemento.offsetHeight);

console.log('largura: '+elemento.clientWidth); //não considera as bordas
console.log('altura: '+elemento.clientHeight);