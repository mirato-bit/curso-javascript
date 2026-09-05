let equipamento={
    "armas":["espada","arco"],
    "armadura":"completa de aço",
    "magia":"fogo"
}

let equipamentotexto=JSON.stringify(equipamento);
console.log(equipamentotexto);

let equipamentojson=JSON.parse(equipamentotexto);
console.log(equipamentojson);
console.log(equipamentojson.magia);
console.log(equipamentojson.armas[0]);



