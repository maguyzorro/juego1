const listaPalabras = ["caballo","oveja","cerdo","chimpance","zanahoria","campecino",
  "almuerzo","camello","herradura","radiografia","helado","macarrones","ballena","cocina",
  "sofa","computador","alcoba","televisor","nevera","pantalla","ducha","ventana","escaparate"];

let palabraAdivinar = [];
let palabraMostrar = [];
let historialLetrasUsuario = [];
let numIntentos = 4;
var letraAux1, letraAux2;
var indexAux1, indexAux2;
const nodoLetra = document.querySelector("#letra");
const nodoBoton = document.querySelector("#boton");
var nodoResultado = document.querySelector("#resultado");
var nodoIntentos = document.querySelector("#intentos");
const nodoHistorial = document.querySelector("#historial");

function obtenerPalabra(listaPalabras) {
  return (palabraAdivinar =
    listaPalabras[Math.round(Math.random() * (listaPalabras.length - 1))].split(""));
}
palabraAdivinar = obtenerPalabra(listaPalabras);
indexAux1 = Math.abs(Math.round((Math.random()*(palabraAdivinar.length))/2)-1);
indexAux2 = indexAux1 +2;
letraAux1 = palabraAdivinar[indexAux1];
letraAux2 = palabraAdivinar[indexAux2];

function pintarResultado() {
  for (let i = 1; i <= palabraAdivinar.length; i++) {
    palabraMostrar.push("_"); 
  }
  palabraMostrar.splice(indexAux1,1,letraAux1);
  palabraMostrar.splice(indexAux2,1,letraAux2);
  return (nodoResultado.textContent = palabraMostrar);
}
pintarResultado();
 
nodoBoton.addEventListener("click", () => {
  let letra = nodoLetra.value;
  if (numIntentos !== 1) {
    for (let i = 0; i < palabraAdivinar.length; i++) {
      if (!palabraAdivinar.includes(letra)) {
        numIntentos--;
        historialLetrasUsuario.push(letra);
        nodoHistorial.textContent = historialLetrasUsuario;
        nodoIntentos.textContent=(`Le quedan ${numIntentos} intentos`);
        nodoLetra.value = "";
        nodoLetra.focus();
        break;
      } else if (letra === palabraAdivinar[i]) {
        palabraMostrar.splice(i, 1, letra);
        nodoResultado.textContent = palabraMostrar;
        nodoLetra.value = "";
        nodoLetra.focus();
      }
    }
  } else {
    alert(`Intentelo de nuevo`);
    location.reload();
  }
  console.log(palabraMostrar);
  if (palabraAdivinar == nodoResultado.textContent) {
    alert("Felicitaciones, a ganado");
    location.reload();
  }
})

nodoIntentos.textContent=(`Le quedan ${numIntentos} intentos`)