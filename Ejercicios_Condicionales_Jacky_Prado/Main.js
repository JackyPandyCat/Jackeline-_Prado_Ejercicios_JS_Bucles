//Ejercicios Condicionales

//Ejercicio 1 ♥♥
let numeroUno = 37
let numeroDos = 30
if(numeroUno>numeroDos){
    console.log("El Primer numero es mayor que el segundo")
}

//Ejercicio 2 ♥♥
let numUnoDos = parseInt(prompt("Coloca el primer numero"))
let numDosDos = parseInt(prompt("Coloca el segundo numero"))

if(numUnoDos === numDosDos){
    console.log("Los numeros son iguales");
}else{
    console.log("Los numeros son diferentes");
}

//Ejercicio 3 ♥♥
let numUnoTres = parseInt(prompt("Coloca el primer numero"))
let numDosTres = parseInt(prompt("Coloca el segundo numero"))

if(numUnoTres<numDosTres){
    console.log("El " + numDosTres + " es mas grande que " + numUnoTres);
}else if(numUnoTres>numDosTres){
    console.log("El " + numUnoTres + " es mas grande que " + numDosTres);
}else{
    console.log("Los numeros son iguales")
}

//Ejercicio 4 ♥♥
let numberOne = parseInt(prompt("Coloca el primer numero"))
let numberTwo = parseInt(prompt("Coloca el segundo numero"))
let numberThree = parseInt(prompt("Coloca el tercer numero"))

//Ejercicio 5 ♥♥
let personaUno = {
    nombre: "Jose",
    edad: 33,
    altura: 162
};

let personaDos = {
    nombre: "Carolina",
    edad: 38,
    altura: 153
}

//Comparar edades
if (personaUno.edad > personaDos.edad) {
    console.log(personaUno.nombre + "es mayor que" + personaDos.nombre);
} else if (personaDos.edad > personaUno.edad) {
    console.log(personaDos.nombre + "es mayor que" + personaUno.nombre);
} else {
    console.log("Sus edades son iguales");
}

//comparar Altura
if (personaUno.altura > personaDos.altura) {
    console.log(personaUno.altura + "es mas alto que" + personaDos.altura);
} else if (personaDos.edad > personaUno.edad) {
    console.log(personaDos.nombre + "es mas alta que" + personaUno.nombre);
} else {
    console.log("Sus alturas son iguales");
}


//Ejercicio 6 ♥♥
//Capacidad para conducir
let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseInt(prompt("Ingresa tu altura en centímetros:"));
let vision = parseFloat(prompt("Ingresa tu visión (de 0 a 10):"));

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado/a para conducir.");
} else {
    console.log(nombre + ", no cumples con los requisitos para conducir.");
} 

//Ejercicio 7 ♥♥
//Datos del usuario
let username = prompt("Ingresa tu nombre:");
let pase = prompt("Eres VIP o Normal");
let entrada = confirm("¿Cuentas con una entrada?")

//Program
if(nombre === "Jacky"){
    console.log("Bienvenida a la Discoteca");
}else if(pase === "VIP"){
    console.log("Bienvenida a la Discoteca");
} else if (entrada) {
    let confirmacion = confirm("¿Quieres utilizar tu entrada?");
    if (confirmacion) {
        console.log("Welcome");
    }
} else {
    let compra = confirm("¿Quieres Comprar la entrada?");
    if (compra) {
        let dinero = parseInt(prompt("Por favor ingresa tu pago"));
        if (dinero >= 1000) {
            console.log("Venta Exitosa Bienvenido");
        } else {
            console.log("Denegada");
        }
    } else {
        console.log("Ha Sido un Placer Servirle " + username);
    }
}

//Ejercicio 8 ♥♥
let numeroIncognita = 4
let numeroIngresado = parseInt(prompt("Ingresa un Numero del 1 al 10"))

if (numeroIngresado === numeroIncognita){
    console.log("Felicidades Acertaste");
}else if(numeroIngresado > numeroIncognita){
    console.log("Lo Siento Tu Numero es Mayor Intenta de Nuevo");
}else if(numeroIngresado < numeroIncognita){
    console.log("Lo Siento Tu Numero es Menor Intenta de Nuevo");
}



//Ejercicio 9 ♥♥
let edadSujeto = parseInt(prompt("Ingresa tu edad:"));

if (edadSujeto >= 0 && edadSujeto <= 12) {
    console.log("Eres un infante.");
} else if (edadSujeto >= 13 && edadSujeto <= 18) {
    console.log("Eres un adolescente.");
} else if (edadSujeto >= 19 && edadSujeto <= 45) {
    console.log("Eres un mayor joven.");
} else if (edadSujeto > 45 && edadSujeto <= 100) {
    console.log("Eres un anciano.");
} else {
    console.log("¿En serio tienes esa edad?")
}

//Ejercicio 10 ♥♥

// Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 
// jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de 
// algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho 
// trampa

let jugadorUno = prompt("Jugador Uno ingresa “PIEDRA”, “PAPEL” o “TIJERAS”:");
let jugadorDos = prompt("Jugador Dos ingresa “PIEDRA”, “PAPEL” o “TIJERAS”:");

if((jugadorUno !== "PIEDRA" && jugadorUno !== "PAPEL" && jugadorUno !== "TIJERAS") ||
    (jugadorDos !== "PIEDRA" && jugadorDos !== "PAPEL" && jugadorDos !== "TIJERAS")
) {
    console.log("Uno de los jugadores ha hecho trampa!")
}
else if(jugadorUno === jugadorDos) {
    console.log("Empate!")
}
else if (
    (jugadorUno === "PIEDRA" && jugadorDos === "TIJERAS") ||
    (jugadorUno === "PAPEL" && jugadorDos === "PIEDRA") ||
    (jugadorUno === "TIJERAS" && jugadorDos === "PAPEL")
) {
    console.log("Jugador 1 gana")
} else {
    console.log("Jugador 2 gana")
}

//Ejercicio 11 ♥♥
let color = prompt("Ingresa un color:");
switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marrón":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
}

//Ejercicio 12 ♥♥
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):");

// Realizar la operación y mostrar el resultado
switch (operacion) {
    case "suma":
        console.log("El resultado de la suma es: " + (numero1 + numero2));
        break;
    case "resta":
        console.log("El resultado de la resta es: " + (numero1 - numero2));
        break;
    case "multiplicación":
        console.log("El resultado de la multiplicación es: " + (numero1 * numero2));
        break;
    case "división":
        if (numero2 !== 0) {
            console.log("El resultado de la división es: " + (numero1 / numero2));
        } else {
            console.log("ERROR: No se puede dividir entre 0.");
        }
        break;
    default:
        console.log("Operación no válida.");
    }

//Ejercicio 13 ♥♥

// Ingreso de los datos del DNI
let nombreDNI = prompt("Ingrese su nombre:");
let apellidoDNI = prompt("Ingrese su apellido:");
let numeroDNI = prompt("Ingrese su número de DNI:");
let fechaNacimientoDNI = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa):");
let direccionDNI = prompt("Ingrese su dirección:");

// Mostrar los datos ingresados y confirmar
let confirmacion = confirm(
    "Datos ingresados:\n" +
    "Nombre: " + nombreDNI + "\n" +
    "Apellido: " + apellidoDNI + "\n" +
    "Número de DNI: " + numeroDNI + "\n" +
    "Fecha de nacimiento: " + fechaNacimientoDNI + "\n" +
    "Dirección: " + direccionDNI + "\n\n" +
    "¿Son correctos estos datos?"
);

// Verificar la confirmación
if (confirmacion) {
    // Crear el objeto DNI
    let dni = {
        Nombre: nombreDNI,
        Apellido: apellidoDNI,
        NumeroDNI: numeroDNI,
        FechaNacimiento: fechaNacimientoDNI,
        Direccion: direccionDNI
    };

    console.table(dni);
    console.log("Registro exitoso");
} else {
    alert("Vuelva a intentarlo en 1 mes");
}