// Ejercicio N° 1
let vector = [];
for(let i = 0; i < 10; i++){
    let longitud = Math.random();
    longitud = longitud * 10 + 1;
    longitud = Math.trunc(longitud);
    vector[i] = longitud;
}
console.log("El array aleatorio es: " + vector);

// Ejercicio N° 2
// punto a
let array = [1, 2, 3, 4, 5, 6];
let i = 0;
while(i < array.length){
    console.log("[" + array[i] + "] ");
    i++;
}

// punto b
let vectorOrd = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < vectorOrd.length; i++){
    console.log("[" + vectorOrd[i] + "] ")
}

// punto c
let arreglo = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = arreglo[i] + 1;
}
console.log(arreglo);

// punto d
let conjunto = [1, 2, 3, 4, 5, 6]
let copia = [].concat(conjunto);
for(let i = 0; i < copia.length; i++){
    copia[i] = copia[i] + 1;
}
console.log("Vector original: [" + conjunto + "]");
console.log("Vector copia: [" + copia + "]");

// Ejercicio N° 3
let vectorRandom = [];
for(let i = 0; i < 6; i++){
    let longitud = Math.random();
    longitud = (longitud * 10) + 1;
    longitud = Math.trunc(longitud);
    vectorRandom[i] = longitud;
}
let vectorCopia = [].concat(vectorRandom); 
for(let i = 0; i < vectorCopia.length; i++){
    vectorCopia[i] = Math.pow(vectorRandom[i], 2);
}
console.log("Vector Original: [" + vectorRandom + "]");
console.log("Vector elevado al cuadrado: [" + vectorCopia + "]");

// Ejercicio N° 4
let vectorDos = [1, -4, 12, 0, -3, 29, -150];
let contadorDos = 0;
for(let i = 0; i < vectorDos.length; i++){
    if(vectorDos[i] > 0){
        contadorDos = contadorDos + vector[i];
    }
}
console.log("La suma de los numeros positivos es: " + contadorDos);

// Ejercicio N° 5
// Punto a
var nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
let resultado = nombres.filter(p => p.length > 6);
console.log("Los nombres mayores de 6 letras son: " + resultado); 

// Punto b
let respuesta = [];
let contador = 0;
for(let i = 0; i < nombres.length; i++){
    if(nombres[i].startsWith("M")){
        respuesta[contador] = nombres[i];
        contador += 1;
    }
}
console.log("Los nombres que comienzan con M son: " + respuesta);

// Punto c
let mayusculas = [].concat(nombres);
for(let i = 0; i < mayusculas.length; i++){
    mayusculas[i] = mayusculas[i].toUpperCase(); 
}
console.log("Los nobres en mayusculas es: " + mayusculas);

// Ejercicio N° 6
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let opciones = prompt("Ingrese un color");
let existencia = false;
let posicion = 0;
for(let i = 0; i < colores.length; i++){
    if(opciones == colores[i]){
        existencia = true;
        posicion = i;
    } 
}
if(existencia = true){
    alert("El color " + opciones + " se encuentra dentro del array en la posicion " + posicion);
} else{
    alert("El color no se encuentra en el array");
}