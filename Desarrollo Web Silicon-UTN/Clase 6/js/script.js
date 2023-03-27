// ejercicio N° 1
let numUno = prompt("Ingrese un número");
numUno = parseInt(numUno);
let numDos = prompt("Ingrese el segundo número");
numDos = parseInt(numDos);
let resultado = 0;
resultado = numUno - numDos;
console.log(resultado);

// ejercicio N° 2
function cuadrado(ladoCuadrado){
var perimetro = ladoCuadrado * 4;
var superficie = ladoCuadrado * ladoCuadrado;
console.log("El perimetro es " + perimetro);
console.log("La superficie es " + superficie);
}
cuadrado(parseInt(prompt("Indique el valor del lado del cuarado")));

// ejercicio N° 3
function temperatura(farenheit){
        var celcius = (farenheit - 32) * (5/9);
        console.log("Los grados celcius son: " + celcius + "°C");
    }
    temperatura(parseInt(prompt("Ingrese la temperatura en grados Farenheit")));

// ejercicio N° 4
var num = prompt("Ingrese un número del 1 al 9");
num = parseInt(num);
if(num >= 1 && num <= 9){
    if(num % 2 === 0){
        console.log("El número ingresado es par");
    } else{
        console.log("El número ingresado es impar");
    }
}else{
    console.log("ERROR! Ingreso un numero no válido");
}

// ejercicio N° 5
var cadena = prompt("Ingrese una palabra o una oración");
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());

// ejercicio Nº 6
var nota = prompt("Ingrese la nota del alumno:");
nota = parseInt(nota);
if(nota >= 1 && nota <= 3){
    console.log("Muy deficiente");
}else if(nota > 3 && nota <= 5){
    console.log("Insuficiente");
}else if(nota >= 6 && nota <= 7){
    console.log("Bien");
}else if(nota >= 8 && nota <= 9){
    console.log("Notable");
} else if(nota === 10){
    console.log("Sobresaliente");
}else{
    console.log("La nota ingresada no existe!");
}

// ejercicio N° 7
// Solución 1
var mes = prompt("Ingrese el mes del año");
mes = parseInt(mes);
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("El mes tiene 31 días");
} else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("El mes tiene 30 días");
}else{
    console.log("El mes tiene 28 días"); 
}

// Solución 2
var mes = prompt("Ingrese el mes del año");
mes = parseInt(mes);
switch(mes){
            case 1: console.log("El mes Enero tiene 31 Días");
            break;
            case 2: console.log("El mes Febrero tiene 28 Días"); 
            break;
            case 3: console.log("El mes Marzo tiene 31 Días");
            break;
            case 4: console.log("El mes Abril tiene 30 Días");
            break;
            case 5: console.log("El mes Mayo tiene 31 Días"); 
            break;
            case 6: console.log("El mes Junio tiene 30 Días");
            break;
            case 7: console.log("El mes Julio tiene 31 Días");
            break;
            case 8: console.log("El mes Agosto tiene 31 Días"); 
            break;
            case 9: console.log("El mes Septiembre tiene 30 Días");
            break;
            case 10: console.log("El mes Octubre tiene 31 Días");
            break;
            case 11: console.log("El mes Noviembre tiene 30 Días"); 
            break;
            case 12: console.log("El mes Diciembre tiene 31 Días");
            break;
            default: console.log("ERROR!! El mes ingresado no existe");
            break;
}

// ejercicio N° 8
function bultos(bulto, bultoEnCaja){
    var contador = 0;
    while(bulto >= bultoEnCaja){
    contador = contador + 1;
    bulto = bulto - bultoEnCaja;
}
console.log("La cantidad de cajas que se pueden llenar es: " +  contador);
console.log("La cantidad de bultos sueltos es: " + bulto);
}
bultos(parseInt(prompt("Ingrese el numero de bultos")), parseInt(prompt("Ingrese el número de bultos que entran en una caja")));
