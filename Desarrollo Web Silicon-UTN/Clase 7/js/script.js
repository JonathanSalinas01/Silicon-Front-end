let ejercicio = parseInt(prompt("¿Qué ejercicio quiere ver?"));
switch(ejercicio){
    case 1:
        let suma = (num1, num2) =>{
            console.log("El resultado de la suma es: " + (num1 + num2));
        }
        suma(parseInt(prompt("Ingrese el primer número")), parseInt(prompt("Ingrese el segundo número")));
        break;
    
    case 2:
        let resta = (num1, num2) =>{
            console.log("El resultado de la resta es: " + (num1 - num2));
        }
        resta(parseInt(prompt("Ingrese el primer número a restar")), parseInt(prompt("Ingrese el segundo número a restar")));
        break;

    case 3:
        let multiplicacion = (num1, num2) =>{
            console.log("El resultado de la multiplicación es: " + (num1 * num2));
        }
        multiplicacion(parseInt(prompt("Ingrese el primer número a multplicar")), parseInt(prompt("Ingrese el segundo número a multiplicar")));
        break;

    case 4:
        let division = (num1, num2) =>{
            console.log("El resultado de la división es: " + (num1 / num2));
        }
        division(parseInt(prompt("Ingrese el dividendo")), parseInt(prompt("Ingrese el divisor")));
        break;

    case 5:
        let areaCirculo = (radio) =>{
            const pi = 3.14;
            let resultado = pi * Math.pow(radio,2);
            console.log("El area del círculo es: " + resultado);
        }
        areaCirculo(parseInt(prompt("Ingrese el radio del círculo")));
        break;
    
    case 6:
        let areaTriangulo = (base, altura) =>{
            let resultado = (base * altura) / 2;
            console.log("El área del triangulo es: " + resultado);
        }
        areaTriangulo(parseInt(prompt("Ingrese la base del triangulo")), parseInt(prompt("Ingrese la altura del triangulo")));
        break;

    case 7:
        let areaRectangulo = (base, altura) =>{
            console.log("El area del rectángulo es: " + (base * altura));
        }
        areaRectangulo(parseInt(prompt("Ingrese la base del rectángulo")), parseInt(prompt("Ingrese la altura del rectángulo")));
        break;
    
    case 8:
        let areaCuadrado = (lado) =>{
            console.log("El area del cuadrado es: " + (lado * lado));
        }
        areaCuadrado(parseInt(prompt("Ingrese el lado del cuadrado")));
        break;

    case 9:
        let perimetroCirculo = (radio) =>{
            const pi = 3.14;
            let resultado = (2 * pi) * radio; 
            console.log("El perímetro del círculo es: " + resultado);
        }
        perimetroCirculo(parseInt(prompt("Ingrese el radio del círculo")));
        break;

    case 10:
        let perimetroTriangulo = (lado1, lado2, lado3) =>{
            console.log("El perímetro del triangulo es: " + (lado1 + lado2 + lado3));
        }
        perimetroTriangulo(parseInt(prompt("ingrese el primer lado del triangulo")), parseInt(prompt("ingrese el segundo lado del triangulo")), parseInt(prompt("ingrese el tercer lado del triangulo")));
        break;
    
    case 11:
        let perimetroRectangulo = (base, altura) =>{
            let resultado = (base + altura) * 2;
            console.log("El perímetro del rectángulo es: " + resultado);
        }
        perimetroRectangulo(parseInt(prompt("Ingrese la base del rectángulo")), parseInt(prompt("Ingrese la altura del rectángulo")));
        break;

    case 12:
        let perimetroCuadrado = (lado) =>{
            console.log("El perímetro del cuadrado es: " + (lado * 4));
        }
        perimetroCuadrado(parseInt(prompt("Ingrese el lado del cuadrado")));
        break;
    
    case 13:
        let aFrarenheit = (celcius) =>{
            console.log(celcius + "°C transformados en grados farenheit son " + ((celcius * (9/5)) + 32)+ "°F.") ;
        }
        aFrarenheit(parseInt(prompt("Ingrese los gradios Celcius que quiere convertir a Farenheit")));
        break;

    case 14:
        let aCelcius = (farenheit) =>{
            console.log(farenheit + "°F transformados en grados celcius son " + ((farenheit - 32) * (5/9)) + "°C");
        }
        aCelcius(parseInt(prompt("Ingrese los grados Farenheit que quiere convertir a Celcius")));
        break;
    
    case 15:
        let maximo = (num1, num2) =>{
            if(num1 > num2){
                console.log("El máximo es el número " + num1);
            } else if(num2 > num1){
                console.log("El máximo es el número " + num2);
            } else{
                console.log("Los números son iguales");
            }
        }
        maximo(parseInt(prompt("Ingrese el primer número")), parseInt(prompt("Ingrese el segundo número")));
        break;

    case 16:
        let minimo = (num1, num2) =>{
            if(num1 < num2){
                console.log("El minimo es el número " + num1);
            } else if(num2 < num1){
                console.log("El minimo es el número " + num2);
            } else{
                console.log("Los números son iguales");
            }
        }
        minimo(parseInt(prompt("Ingrese el primer número")), parseInt(prompt("Ingrese el segundo número")));
        break;
    
    case 17:
        let maximoTres = (num1, num2, num3) =>{
            let vector = [num1, num2, num3];
            let maximo = vector[0];
            for(let i = 0; i <= 2; i++){
                if(vector[i] > maximo){
                    maximo = vector[i]
                }
            }
            console.log("El máximo es " + maximo);
        }
        maximoTres(parseInt(prompt("Ingrese el primer número")), parseInt(prompt("Ingrese el segundo número")), parseInt(prompt("Ingrese el tercer número")));
        break;

    case 18:
        let minimoTres = (num1, num2, num3) =>{
            let vector = [num1, num2, num3];
            let minimo = vector[0];
            for(let i = 0; i <= 2; i++){
                if(vector[i] < minimo){
                minimo = vector[i]
                }   
            }
            console.log("El mínimo es " + minimo);
        }
        minimoTres(parseInt(prompt("Ingrese el primer número")), parseInt(prompt("Ingrese el segundo número")), parseInt(prompt("Ingrese el tercer número")));
        break;
    
    case 19:
        let parOimpar = (num) =>{
            if(num % 2 === 0){
                console.log("El número ingresado es par");
            }else{
                console.log("El numero ingresado es es impar");
            }
        }
        parOimpar(parseInt(prompt("Ingrese un número")));
        break;

    case 20:
        let positivoNegativo = (num) =>{
            if(num > 0){
                console.log("El número ingresado es positivo");
            }else if(num < 0){
                console.log("El numero ingresado es es negativo");
            }else{
                console.log("El número ingresado es 0");
            }
        }
        positivoNegativo(parseInt(prompt("Ingrese un número")));
        break;
    
    case 21:
        let longitud = (oracion) =>{
            console.log("la cantidad de caracteres en " + oracion + " es " + oracion.length);
        }
        longitud(prompt("Escriba una palabra u oración"));
        break;

    case 22:
        let mayusculas = (palabras) =>{
            console.log(palabras.toUpperCase());
        }
        mayusculas(prompt("Ingrese un palabra u oración"));
        break;
        
    case 23:
        let minusculas = (palabras) =>{
            console.log(palabras.toLowerCase());
        }
        minusculas(prompt("Ingrese un palabra u oración"));
        break;

    case 24:
        let numPares = () =>{
            let acumulador = 0;
            for(let i = 1; i <= 9; i++){
                if(i % 2 === 0){
                    acumulador = acumulador + i;
                }
            }
            console.log("Los números pares son: " + acumulador);
        }
        numPares();
        break;
    
    case 25:
        let numImpares = () =>{
            let acumulador = 0;
            for(let i = 1; i <= 9; i++){
                if(i % 2 != 0){
                    acumulador = acumulador + i;
                }
            }
            console.log("Los números impares son: " + acumulador);
        }
        numImpares();
        break;

    case 26:
        let raiz = (num) =>{
            console.log("La raiz cuadrada de " + num + " es " + Math.sqrt(num));
        }
        raiz(parseInt(prompt("Ingrese el número del que quiere saber la raiz cuadrada:")));
        break;
    
    default: alert("ERROR! El ejercicio seleccionado no existe");
        break;
}

