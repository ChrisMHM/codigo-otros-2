const formulario = document.querySelector("#form")
const inputNombre = document.querySelector('#name')
const inputEdad = document.querySelector('#age')

console.log(formulario);
console.log(inputNombre);
console.log(inputEdad);

formulario.onsubmit = (e) => {
  e.preventDefault();

  let nombre = formulario.elements[0].value
  let edad = formulario.elements[1].value
  let index = formulario.elements[2].selectedIndex
  let nacionalidad = formulario.elements[2].options[index].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    inputNombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    inputEdad.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados")

  let elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  let corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}