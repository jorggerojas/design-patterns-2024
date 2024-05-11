class CajeroAutomatico {
    consultarSaldo(numeroCuenta: number): number {
        console.log(`Consultando saldo de la cuenta ${numeroCuenta}`);
        return 0.0;
    }

    realizarRetiro(numeroCuenta: number, cantidad: number): void {
        console.log(`Retirando $${cantidad} de la cuenta ${numeroCuenta}`);
    }
}

class CajeroInternacional extends CajeroAutomatico {
    convertirMoneda(numeroCuenta: number, cantidad: number, monedaOrigen: string, monedaDestino: string): number {
        console.log(`Convirtiendo $${cantidad} de ${monedaOrigen} a ${monedaDestino}`);
        return 0.0;
    }
}

// Ejemplo de uso
const cajeroNacional = new CajeroAutomatico();
const cajeroInternacional = new CajeroInternacional();

const saldoNacional = cajeroNacional.consultarSaldo(12345);
console.log(`Saldo nacional: $${saldoNacional}`);

const saldoInternacional = cajeroInternacional.consultarSaldo(67890);
console.log(`Saldo internacional: $${saldoInternacional}`);

const cantidadConvertida = cajeroInternacional.convertirMoneda(67890, 100.0, 'USD', 'EUR');
console.log(`Cantidad convertida: €${cantidadConvertida}`);
