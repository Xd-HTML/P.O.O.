// Clase para los movimientos
class Movimiento {
  constructor(descripcion, monto, tipo) {
    this.descripcion = descripcion;
    this.monto = parseFloat(monto);
    this.tipo = tipo;
    this.fecha = new Date().toLocaleString();
  }
}

const listaMovimientos = [];
const listaElement = document.getElementById("listaMovimientos");
const saldoElement = document.getElementById("saldoTotal");

// Agregar movimiento
document.getElementById("btnAgregar").addEventListener("click", () => {
  const desc = document.getElementById("descripcion").value;
  const monto = document.getElementById("monto").value;
  const tipo = document.getElementById("tipo").value;

  if (desc && monto) {
    const nuevoMovimiento = new Movimiento(desc, monto, tipo);
    listaMovimientos.push(nuevoMovimiento);
    actualizarUI();
  }
});

// Actualizar pantalla
function actualizarUI() {
  listaElement.innerHTML = "";
  let saldo = 100;

  listaMovimientos.forEach((mov) => {
    const li = document.createElement("li");
    li.textContent = `${mov.fecha} - ${mov.descripcion}: S/ ${mov.monto}`;
    listaElement.appendChild(li);

    saldo += mov.tipo === "ingreso" ? mov.monto : -mov.monto;
  });

  saldoElement.textContent = saldo.toFixed(2);
}


import { db } from "./firebase/config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

async function guardarEnFirebase(movimiento) {
  await addDoc(collection(db, "movimientos"), movimiento);
}

