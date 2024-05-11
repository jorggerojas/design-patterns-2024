// Primero, definimos una abstracción para el cuidado de las mascotas
interface CuidadoMascota {
    alimentar(): void;
    jugar(): void;
}

// Luego, creamos implementaciones concretas para diferentes tipos de mascotas
class Perro implements CuidadoMascota {
    alimentar(): void {
        console.log("Alimentando al perro con croquetas");
    }

    jugar(): void {
        console.log("Jugando a lanzar la pelota con el perro");
    }
}

class Gato implements CuidadoMascota {
    alimentar(): void {
        console.log("Alimentando al gato con pescado");
    }

    jugar(): void {
        console.log("Jugando con la pluma con el gato");
    }
}

// Finalmente, creamos una clase de alto nivel que depende de la abstracción
class CuidadorMascotas {
    private cuidadoMascota: CuidadoMascota;

    constructor(cuidadoMascota: CuidadoMascota) {
        this.cuidadoMascota = cuidadoMascota;
    }

    cuidarMascota(): void {
        this.cuidadoMascota.alimentar();
        this.cuidadoMascota.jugar();
    }
}

// Ejemplo de uso
const miPerro = new Perro();
const miGato = new Gato();

const cuidadorPerro = new CuidadorMascotas(miPerro);
cuidadorPerro.cuidarMascota(); // Salida: Alimentando al perro con croquetas, Jugando a lanzar la pelota con el perro

const cuidadorGato = new CuidadorMascotas(miGato);
cuidadorGato.cuidarMascota(); // Salida: Alimentando al gato con pescado, Jugando con la pluma con el gato
