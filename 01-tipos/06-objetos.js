// personaje de tv
let nombre = "Naruto Uzumaki";
let anime = "Naruto";
let edad = 16;

let personaje = {
    nombre : "Naruto Uzumaki",
    anime : "Naruto",
    edad : 16,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 17;

let llave = "edad";
personaje[llave] = 17;

delete personaje.anime;

console.log(personaje);