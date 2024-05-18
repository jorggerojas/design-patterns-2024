class CajeroAutomatico {
  public nombre: string;
  private saldoDisponible: number;
  private billetesDisponibles: number;

  constructor(nombre: string, saldoInicial: number, billetesIniciales: number) {
    this.nombre = nombre;
    this.saldoDisponible = saldoInicial;
    this.billetesDisponibles = billetesIniciales;
  }

  // Getter para saldoDisponible
  get obtenerSaldo(): number {
    return this.saldoDisponible;
  }

  // Setter para saldoDisponible
  set ingresarSaldo(nuevoSaldo: number) {
    if (nuevoSaldo >= 0) {
      this.saldoDisponible = nuevoSaldo;
      console.log(`Se ha ingresado $${nuevoSaldo} al cajero ${this.nombre}`);
    } else {
      console.error("No se puede ingresar un saldo negativo");
    }
  }

  // Getter para billetesDisponibles
  get obtenerBilletes(): number {
    return this.billetesDisponibles;
  }

  // Setter para billetesDisponibles
  set reabastecerBilletes(nuevosBilletes: number) {
    if (nuevosBilletes >= 0) {
      this.billetesDisponibles = nuevosBilletes;
      console.log(`Se han reabastecido ${nuevosBilletes} billetes en el cajero ${this.nombre}`);
    } else {
      console.error("No se puede reabastecer una cantidad negativa de billetes");
    }
  }

  // Método para retirar efectivo
  retirarEfectivo(monto: number): void {
    if (monto > 0 && monto <= this.saldoDisponible) {
      if (this.billetesDisponibles * 100 >= monto) {
        this.saldoDisponible -= monto;
        this.billetesDisponibles -= Math.ceil(monto / 100);
        console.log(`Se han retirado $${monto} del cajero ${this.nombre}`);
      } else {
        console.error("No hay suficientes billetes para dispensar el monto solicitado");
      }
    } else {
      console.error("El monto a retirar debe ser mayor a 0 y menor o igual al saldo disponible");
    }
  }
}

const cajeroPrincipal = new CajeroAutomatico("Bancomer", 10000, 100);

console.log(`Saldo inicial del cajero ${cajeroPrincipal.nombre}: $${cajeroPrincipal.obtenerSaldo}`); // $10000

cajeroPrincipal.retirarEfectivo(500); // Se han retirado $500 del cajero Bancomer
console.log(`Saldo actual del cajero ${cajeroPrincipal.nombre}: $${cajeroPrincipal.obtenerSaldo}`); // $9500

cajeroPrincipal.ingresarSaldo;(2000) // Se ha ingresado $2000 al cajero Bancomer
console.log(`Saldo actual del cajero ${cajeroPrincipal.nombre}: $${cajeroPrincipal.obtenerSaldo}`); // $11500

cajeroPrincipal.reabastecerBilletes;(50) // Se han reabastecido 50 billetes en el cajero Bancomer
console.log(`Billetes disponibles en el cajero ${cajeroPrincipal.nombre}: ${cajeroPrincipal.obtenerBilletes}`); // 150

// Se intenta retirar un monto mayor al disponible
cajeroPrincipal.retirarEfectivo(12000); 
// Error: No hay suficientes billetes para dispensar el monto solicitado

// Se intenta ingresar un saldo negativo
cajeroPrincipal.ingresarSaldo;(-500) 
// Error: No se puede ingresar un saldo negativo
