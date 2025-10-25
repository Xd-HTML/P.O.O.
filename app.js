// === app.js ===
// Clase principal para cada movimiento
class Movimiento {
  constructor(descripcion, monto, tipo) {
    this.descripcion = descripcion;
    this.monto = parseFloat(monto);
    this.tipo = tipo;
    this.fecha = new Date().toLocaleString();
  }
}

// Clase controladora del presupuesto
class SmartBudget {
  constructor() {
    this.movimientos = [];
  }

  agregarMovimiento(mov) {
    this.movimientos.push(mov);
    this.actualizarUI();
  }

  calcularSaldo() {
    return this.movimientos.reduce((acc, mov) => {
      return mov.tipo === "ingreso" ? acc + mov.monto : acc - mov.monto;
    }, 0);
  }

  actualizarUI() {
    const lista = document.getElementById("listaMovimientos");
    const saldoEl = document.getElementById("saldo");
    lista.innerHTML = "";

    this.movimientos.forEach((mov) => {
      const li = document.createElement("li");
      li.textContent = `${mov.fecha} - ${mov.descripcion}: S/ ${mov.monto} (${mov.tipo})`;
      lista.appendChild(li);
    });

    saldoEl.textContent = `S/ ${this.calcularSaldo().toFixed(2)}`;
  }
}

// Instancia principal
const app = new SmartBudget();

// Botón
const btn = document.getElementById("btnAgregar");
btn.addEventListener("click", () => {
  const desc = document.getElementById("descripcion").value;
  const monto = document.getElementById("monto").value;
  const tipo = document.getElementById("tipo").value;

  if (desc && monto) {
    const nuevo = new Movimiento(desc, monto, tipo);
    app.agregarMovimiento(nuevo);

    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
  }
});
