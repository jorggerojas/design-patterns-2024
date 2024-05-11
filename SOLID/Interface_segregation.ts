// Interfaces segregadas para diferentes tipos de comportamiento
interface Nadador {
    nadar(): void;
}

interface Saltador {
    saltar(): void;
}

// Clase Pez que implementa la interfaz Nadador
class Pez implements Nadador {
    nadar(): void {
        console.log("Este pez nada");
    }
}

// Clase PezVolador que implementa Nadador y Saltador
class PezVolador implements Nadador, Saltador {
    nadar(): void {
        console.log("Este pez volador nada");
    }

    saltar(): void {
        console.log("Este pez volador salta fuera del agua");
    }
}

// Ejemplo de uso
const pez = new Pez();
pez.nadar(); // Salida: Este pez nada

const pezVolador = new PezVolador();
pezVolador.nadar(); // Salida: Este pez volador nada
pezVolador.saltar(); // Salida: Este pez volador salta fuera del agua
