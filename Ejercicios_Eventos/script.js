// @ts-nocheck

// 1. Crear una aplicación que calcule el índice de masa corporal

function calcularMasaCorporal(event) {
  // Evita que refresque la página
  event.preventDefault();

  // Obtén valores del formulario
  const estaturaCm = document.getElementById("campo-estatura").value;
  const peso = document.getElementById("campo-peso").value;

  // Convierte la estatura de cm a m
  const estaturaM = estaturaCm / 100;

  // Calcula la masa corporal
  const masaCorporal = peso / estaturaM ** 2;

  let resultado = 0;
  if (masaCorporal) {
    resultado = masaCorporal.toFixed(1);
  }
  document.getElementById("campo-resultado-imc").value = resultado;
}

// 2. Crear una aplicación de conversion de divisa.

const arsInitialValue = 886.25;

function convertirUSD() {
  const ars = document.getElementById("campo-ars").value;
  document.getElementById("campo-usd").value = ars / arsInitialValue;
}

function convertirARS() {
  const usd = document.getElementById("campo-usd").value;
  document.getElementById("campo-ars").value = usd * arsInitialValue;
}

// 3. Realizar una aplicación de notas

const notas = [
  {
    id: 1,
    titulo: "Sacar la basura",
    texto: "mi mamá me va a retar si no lo hago",
    realizada: false,
  },
  {
    id: 2,
    titulo: "Escuchar música",
    texto: "nobody said it was easy 🎶",
    realizada: false,
  },
  {
    id: 3,
    titulo: "Dormir",
    texto: "zzzzz",
    realizada: true,
  },
];

let idGlobal = 3;
let filtroTextoGlobal = "";
let filtroRealizadasGlobal = false;
const contenedorNotas = document.getElementById("contenedor-notas");

notas.forEach((nota) => {
  pintarNota(nota);
});

function pintarNota(nota) {
  const card = document.createElement("div");
  card.className = "card col-xl-4";

  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${nota.titulo}</h5>
      <p class="card-text">${nota.texto}</p>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" onclick="marcarRealizada(${nota.id})" ${
    nota.realizada ? "checked" : ""
  }>
      </div>

      <button class="btn btn-danger" onclick="borrarNota(${nota.id})">Borrar</button>
    </div>
  `;

  contenedorNotas.appendChild(card);
}

function pintarVacio() {
  const mensajeVacio = document.createElement("h5");
  mensajeVacio.textContent = "No hay notas para mostrar 😞";

  contenedorNotas.appendChild(mensajeVacio);
}

function agregarNota(titulo, texto) {
  const nota = {
    id: idGlobal++,
    titulo: titulo,
    texto: texto,
    realizada: false,
  };

  if (!notas.length) {
    contenedorNotas.removeChild(contenedorNotas.firstChild);
  }

  notas.push(nota);
  pintarNota(nota);
}

function guardarNota(event) {
  event.preventDefault();

  // Obtener los valores de los inputs
  const titulo = document.getElementById("campo-titulo-nota").value;
  const texto = document.getElementById("campo-texto-nota").value;

  if (titulo && texto) {
    agregarNota(titulo, texto);
  }

  document.getElementById("formulario-nota").reset();
}

function borrarNota(notaId) {
  const notaIndex = notas.findIndex((nota) => nota.id === notaId);
  if (notaIndex >= 0) {
    // Limpiar notas
    notas.splice(notaIndex, 1);
    limpiarNotas();

    if (notas.length) {
      // Pintar notas restantes
      notas.forEach((nota) => {
        pintarNota(nota);
      });
    } else {
      // Pintar mensaje de "No hay notas"
      pintarVacio();
    }
  }
}

function marcarRealizada(notaId, formCheckInput) {
  const nota = notas.find((nota) => nota.id === notaId);
  nota.realizada = !nota.realizada;

  // Limpiar notas
  limpiarNotas();

  notas.forEach((nota) => {
    pintarNota(nota);
  });
}

function filtrarPorRealizadas(event) {
  limpiarNotas();
  filtroRealizadasGlobal = event.target.checked;
  const notasFiltradas = filtrarNotas(notas);
  if (notasFiltradas.length) {
    notasFiltradas.forEach((nota) => {
      pintarNota(nota);
    });
  } else {
    pintarVacio();
  }
}

function filtrarPorTexto(event) {
  filtroTextoGlobal = event.target.value;
  const notasFiltradas = filtrarNotas(notas, filtroTextoGlobal);
  limpiarNotas();

  if (notasFiltradas.length) {
    notasFiltradas.forEach((nota) => {
      pintarNota(nota);
    });
  } else {
    pintarVacio();
  }
}

function filtrarNotas(notas) {
  let notasFiltradas = notas.filter(
    (nota) => nota.titulo.includes(filtroTextoGlobal) || nota.texto.includes(filtroTextoGlobal)
  );

  if (filtroRealizadasGlobal) {
    notasFiltradas = notasFiltradas.filter((nota) => nota.realizada === filtroRealizadasGlobal);
  }

  return notasFiltradas;
}

function limpiarNotas() {
  while (contenedorNotas.firstChild) {
    contenedorNotas.removeChild(contenedorNotas.firstChild);
  }
}
