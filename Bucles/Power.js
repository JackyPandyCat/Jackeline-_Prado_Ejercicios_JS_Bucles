/**
 * 1.
 * Realizar un programa que permita el ingreso de un numero y muestre su tabla de
 * multiplicar (Los primeros 10 múltiplos).
 */

// Pedir al usuario que ingrese un número
console.log('♥♥♥ Ejercicio 01 ♥♥♥');
const numero01 = parseInt(
  prompt("Ingrese un número para ver su tabla de multiplicar:")
);

// Mostrar la tabla de multiplicar
console.log("Tabla de multiplicar del " + numero01 + ":");
for (let i = 1; i <= 10; i++) {
  console.log(numero01 + " x " + i + " = " + numero01 * i);
}

/**
 * 2.
 * Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
 * acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.
 */

// Variable para almacenar la suma
console.log('♥♥♥ Ejercicio 02 ♥♥♥');

let suma02 = 0;
let numero02;

// Pedir al usuario que ingrese números hasta que ingrese 0
do {
  numero02 = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
  suma02 += numero02;
} while (numero02 !== 0);

// Mostrar la suma total
console.log("La suma total de los números ingresados es: " + suma02);


/**
 * 3.
 * Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
 * variable guardar un numero que este en el rango 1 - 100. La persona debera poder
 * ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
 * valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
 * nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
 * cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
 * que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
 * felicitaciones y decirle en cuantos intentos lo ha realizado.
 */

console.log('♥♥♥ Ejercicio 03 ♥♥♥');

// Generar un número aleatorio entre 1 y 100
const numeroSecreto03 = Math.floor(Math.random() * 100) + 1;

// Contador de intentos
let intentos03 = 0;

// Pedir al usuario que ingrese un número hasta que adivine el número secreto
let numeroIngresado03;
while (true) {
  numeroIngresado03 = parseInt(
    prompt("Intenta adivinar el número secreto (entre 1 y 100):")
  );
  intentos03++;

  if (numeroIngresado03 === numeroSecreto03) {
    console.log(
      "¡Felicidades! Has adivinado el número secreto " +
        numeroSecreto03 +
        " en " +
        intentos03 +
        " intentos."
    );
    break;
  } else if (numeroIngresado03 < numeroSecreto03) {
    console.log(
      "El número ingresado es menor al número secreto. Intenta de nuevo."
    );
  } else {
    console.log(
      "El número ingresado es mayor al número secreto. Intenta de nuevo."
    );
  }
}

/**
 * 4.
 * Realizar un programa que permita decir si un numero es primo. Un numero es primo
 * si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
 * Los números solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
 * como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
 * numero ya no es primo.
 */
console.log('♥♥♥ Ejercicio 04 ♥♥♥');

// Función para verificar si un número es primo
function esPrimo(numero04) {
  if (numero04 <= 1) {
    return false;
  }
  for (let i = 2; i <= numero04 / 2; i++) {
    if (numero04 % i === 0) {
      return false;
    }
  }
  return true;
}

// Pedir al usuario que ingrese un número
const numero04 = parseInt(
  prompt("Ingrese un número para verificar si es primo:")
);

// Verificar si el número es primo
if (esPrimo(numero04)) {
  console.log(numero04 + " es un número primo.");
} else {
  console.log(numero04 + " no es un número primo.");
}

/**
 * 5.
 * Realizar un programa que permita dado un numero, mostrar todos sus divisores.
 */
console.log('♥♥♥ Ejercicio 05 ♥♥♥');

// Pedir al usuario que ingrese un número
const numero05 = parseInt(
  prompt("Ingrese un número para mostrar sus divisores:")
);

// Mostrar los divisores del número ingresado
console.log("Los divisores de " + numero05 + " son:");
for (var i = 1; i <= numero05; i++) {
  if (numero05 % i === 0) {
    console.log(i);
  }
}

/**
 * 6.
 * Dado un array de 10 elementos, realizar un programa que recorra ese array y
 * muestre un mensaje por consola con cada uno de los elementos del array
 */
console.log('♥♥♥ Ejercicio 06 ♥♥♥');

// Definir un array con 10 elementos
const array06 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array y mostrar cada elemento por consola
for (let i = 0; i < array06.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + array06[i]);
}

/**
 * 7.
 * Dado un array de 10 números, realizar un programa que muestre por consola el
 * doble de cada uno de los elementos.
 */
console.log('♥♥♥ Ejercicio 07 ♥♥♥');

// Definir un array con 10 elementos
const array07 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array y mostrar el doble de cada elemento por consola
for (let i = 0; i < array07.length; i++) {
  console.log("El doble del elemento " + array07[i] + " es: " + array07[i] * 2);
}

/**
 * 8.
 * Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
 * objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
 * que muestre un mensaje de presentación por cada elemento del array.
 */
console.log('♥♥♥ Ejercicio 08 ♥♥♥');

// Definir un array con al menos 5 objetos representando a un grupo familiar
const familia08 = [
  { nombre: "Juan", edad: 20, relacion: "Padre", ocupacion: "Ingeniero" },
  { nombre: "María", edad: 32, relacion: "Madre", ocupacion: "Doctora" },
  { nombre: "Pedro", edad: 10, relacion: "Hijo", ocupacion: "Estudiante" },
  { nombre: "Laura", edad: 8, relacion: "Hija", ocupacion: "Estudiante" },
  { nombre: "Ana", edad: 65, relacion: "Abuela", ocupacion: "Jubilada" },
];

// Recorrer el array y mostrar un mensaje de presentacion por cada elemento
for (let i = 0; i < familia08.length; i++) {
  const persona08 = familia08[i];
  console.log(
    "Hola, soy " +
      persona08.nombre +
      ". Tengo " +
      persona08.edad +
      " años. Soy " +
      persona08.relacion +
      " y mi ocupación es " +
      persona08.ocupacion +
      "."
  );
}

/**
 * 9.
 * Dado un array de 10 numeros, realizar un programa que recorra el array y solo
 * muestre los numeros impares.
 */
console.log('♥♥♥ Ejercicio 09 ♥♥♥');

// Definir un array con 10 números
const array09 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

// Recorrer el array y mostrar solo los números impares
console.log("Números impares:");
for (let i = 0; i < array09.length; i++) {
  if (array09[i] % 2 !== 0) {
    console.log(array09[i]);
  }
}

/**
 * 10.
 * Realizar un programa que permita la entrada de números y calcule la suma de los
 * numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
 * el usuario ingresa un 0.
 */
console.log('♥♥♥ Ejercicio 10 ♥♥♥');

// Variables para almacenar la suma de los números pares e impares
let sumaPares10 = 0;
let sumaImpares10 = 0;

// Pedir al usuario que ingrese números hasta que ingrese 0
let numero10;
do {
  numero10 = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
  if (numero10 !== 0) {
    if (numero10 % 2 === 0) {
      sumaPares10 += numero10;
    } else {
      sumaImpares10 += numero10;
    }
  }
} while (numero10 !== 0);

// Mostrar la suma de los números pares e impares
console.log("La suma de los números pares es: " + sumaPares10);
console.log("La suma de los números impares es: " + sumaImpares10);

/**
 * 11.
 * Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
 * número mas grande.
 */
console.log('♥♥♥ Ejercicio 11 ♥♥♥');

// Definir un array con 10 números
const array11 = [45, 12, 67, 23, 89, 34, 56, 78, 98, 21];

// Inicializar una variable para almacenar el número más grande
let numeroMasGrande11 = array11[0];

// Recorrer el array y encontrar el número más grande
for (let i = 1; i < array11.length; i++) {
  if (array11[i] > numeroMasGrande11) {
    numeroMasGrande11 = array11[i];
  }
}

// Mostrar el número más grande por pantalla
console.log("El número más grande es: " + numeroMasGrande11);

/**
 * 12.
 * Dado un array de 10 numeros, realizar un programa que imprima por pantalla el número mas chico.
 */
console.log('♥♥♥ Ejercicio 12 ♥♥♥');

// Definir un array con 10 números
const array12 = [45, 12, 67, 23, 89, 34, 56, 78, 98, 21];

// Inicializar una variable para almacenar el número más pequeño
let numeroMasChico12 = array12[0];

// Recorrer el array y encontrar el número más pequeño
for (let i = 1; i < array12.length; i++) {
  if (array12[i] < numeroMasChico12) {
    numeroMasChico12 = array12[i];
  }
}

// Mostrar el número más pequeño por pantalla
console.log("El número más pequeño es: " + numeroMasChico12);

/**
 * 13.
 * Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
 * ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
 * manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
 * un empate. Caso contrario mostrar un mensaje con el nombre de la persona
 * ganadora.
 */
console.log('♥♥♥ Ejercicio 13 ♥♥♥');

// Pedir los nombres de los jugadores
const jugador113 = prompt("Ingrese el nombre del jugador 1:");
const jugador213 = prompt("Ingrese el nombre del jugador 2:");

// Entrar en el bucle del juego
let continuarJugando13 = true;
while (continuarJugando13) {
  // Pedir la mano de cada jugador
  let manoJugador113 = prompt(
    jugador113 + ", elige piedra, papel o tijeras:"
  ).toLowerCase();
  let manoJugador213 = prompt(
    jugador213 + ", elige piedra, papel o tijeras:"
  ).toLowerCase();

  // Comparar las manos para determinar el ganador o si hay un empate
  if (manoJugador113 === manoJugador213) {
    console.log("Empate. Sigue jugando...");
  } else if (
    (manoJugador113 === "piedra" && manoJugador213 === "tijeras") ||
    (manoJugador113 === "papel" && manoJugador213 === "piedra") ||
    (manoJugador113 === "tijeras" && manoJugador213 === "papel")
  ) {
    console.log(jugador113 + " gana. ¡Felicidades!");
    continuarJugando13 = false;
  } else {
    console.log(jugador213 + " gana. ¡Felicidades!");
    continuarJugando13 = false;
  }
}

/**
 * 14.
 * Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
 */
console.log('♥♥♥ Ejercicio 14 ♥♥♥');

// Definir el tamaño del triángulo
const tamano14 = 5;

// Imprimir el triángulo de asteriscos
for (let i = 1; i <= tamano14; i++) {
  let linea14 = "";
  // Imprimir espacios en blanco
  for (let j = 1; j <= tamano14 - i; j++) {
    linea14 += " ";
  }
  // Imprimir asteriscos
  for (let k = 1; k <= i; k++) {
    linea14 += "* ";
  }
  console.log(linea14);
}

/**
 * 15.
 * Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
 * pero invertido.
 */
console.log('♥♥♥ Ejercicio 15 ♥♥♥');

// Definir el tamaño del triángulo
const tamano15 = 5;

// Imprimir el triángulo de asteriscos invertido
for (let i = tamano15; i >= 1; i--) {
  let linea15 = "";
  // Imprimir asteriscos
  for (let j = 1; j <= i; j++) {
    linea15 += "* ";
  }
  console.log(linea15);
}

/**
 * 16.
 *  Dado un array de 10 numeros desordenados, realizar un programa que imprima por
 * pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)
 */
console.log('♥♥♥ Ejercicio 16 ♥♥♥');

// Definir un array de 10 números desordenados
const array16 = [5, 2, 7, 3, 9, 1, 4, 8, 10, 6];

// Implementar el algoritmo de ordenación de burbuja
for (let i = 0; i < array16.length - 1; i++) {
  for (let j = 0; j < array16.length - i - 1; j++) {
    if (array16[j] > array16[j + 1]) {
      // Intercambiar los elementos si están en el orden incorrecto
      let temp16 = array16[j];
      array16[j] = array16[j + 1];
      array16[j + 1] = temp16;
    }
  }
}

// Imprimir el array ordenado por pantalla
console.log("Array ordenado:", array16);
