
let map = new Map();

map.set("Cobby", 21);
map.set("Kelvin", 20);
map.set("Sena", 22);
map.set("Alex", 19);

// console.log(map.get("Cobby"));
// console.log(map);

for (let [k, v] of map){
    console.log(`${k} : ${v}`);
}

for (let [k, v] of map){
    console.log(`${k} is ${v} years old`);
}