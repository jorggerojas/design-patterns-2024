class Empleado {
     nombre: string;
     salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }
}

class CalculadoraSalario {
    calcularAumentoPorcentaje(salarioActual: number, porcentaje: number): number {
        return salarioActual + (salarioActual * porcentaje) / 100;
    }
}

class RepositorioEmpleados {
    guardarEnBaseDeDatos(empleado: Empleado): void {
        console.log(`Empleado ${empleado.nombre} guardado en la base de datos.`);
    }
}


const empleado1 = new Empleado('Juan', 50000);
const calculadora = new CalculadoraSalario();
const porcentajeAumento = 10;
const nuevoSalario = calculadora.calcularAumentoPorcentaje(empleado1.salario, porcentajeAumento);

const repositorio = new RepositorioEmpleados();
repositorio.guardarEnBaseDeDatos(empleado1);

console.log(`Nuevo salario de ${empleado1.nombre}: ${nuevoSalario}`);

