// // Ejercicio N° 1
let colores = ["azul", "rojo", "amarillo", "verde", "violeta"];
console.log(colores);

// // Ejercicio N° 2
colores[2] = "Color reemplazado";
console.log(colores);

// // Ejercicio N° 3
console.log(colores[0].charAt(0));

// // Ejercicio N° 4

let aleatorio = Math.random();
aleatorio = aleatorio * 100;
aleatorio = Math.round(aleatorio);
console.log(aleatorio);

// // Ejercicio N° 5
let primeros = [];
for(let i = 0; i < 10; i++){
    primeros[i] = i + 1;
}
console.log(primeros);

// // Ejercicio N° 6
let arrayRandom = [];
for(let i = 0; i < 10; i++){
    let numRandom = Math.random() * 10;
    numRandom = Math.round(numRandom);
    arrayRandom[i] = numRandom;
}
console.log(arrayRandom);

// // Ejercicio N° 7
copiaArrayAnterior = [].concat(arrayRandom);
console.log(copiaArrayAnterior);

// // Ejercicio N° 8
var cadena = "";
let palabras = [];
var bandera = false;

while(bandera === false){
    let entrada = prompt("Ingrese una palabra. Si desea salir escriba cancelar");
        if(entrada.toLocaleLowerCase() === "cancelar"){
            bandera = true;
        }else{
            cadena = cadena + entrada + "-";
        }
}
console.log(cadena);
palabras = cadena.split("-");

for(let i = 0; i < palabras.length -1; i++){
    console.log(palabras[i]);
}

// Ejercicio N° 9

var pasarAPesos = document.getElementById("botonAPesos")
pasarAPesos.addEventListener("click", function(){
    let dolar = document.getElementById("dolares").value;
    valorPeso = 360;
    let pesos = dolar * valorPeso;
    pesos = pesos.toFixed(2);
    document.getElementById("pesos").value = pesos;
})

var pasarADolares = document.getElementById("botonADolar")
pasarADolares.addEventListener("click", function(){
    let pesos = document.getElementById("pesosAR").value;
    valorDolar = 360;
    let pesosTransformados = pesos / valorDolar;
    pesosTransformados = pesosTransformados.toFixed(2);
    document.getElementById("dolarBlue").value = pesosTransformados;
})


