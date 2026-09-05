let urso={
    patas:4,
    raca:"SRD",
    rugido:function(){
        console.log("roooooaaaaaaarrrr");
    },
}

let pardo= Object.create(urso)
pardo.rugido();
pardo.raca="pardo";

console.log(pardo.raca);
console.log(urso.raca);

let panda=Object.create(urso);
panda.raca="panda"
console.log(panda.raca);