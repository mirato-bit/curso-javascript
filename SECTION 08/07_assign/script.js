let casa={
    cozinha:1,
    banheiro:2,
    quartos:2,
}

let moveis={
mesas:2,
estante:5,
cadeiras:8,
pia:1
}

console.log(casa);

Object.assign(casa , moveis);

console.log(casa);