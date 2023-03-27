let email = "solojulian01@gmail.com";
let password = "12345";
let datos = [];
let comparador = (emailIngresado, claveIngresada) =>{
    emailIngresado = document.getElementById("exampleInputEmail1").value;
    claveIngresada = document.getElementById("exampleInputPassword1").value;
    datos.push(emailIngresado, claveIngresada);

    if(email == datos[0] && password == datos[1]){

    }else{
        
    }
}