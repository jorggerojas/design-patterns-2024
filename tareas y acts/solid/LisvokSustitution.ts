/*Las subclases deben ser reemplazables por sus clases base sin que el sistema falle.
Esto significa que las subclases deben cumplir con el contrato establecido por la clase base*/
// Clase base
abstract class Ave {
    // Común para todas las aves
}

abstract class AveVoladora extends Ave {
    public abstract volar(): void;
}

class Perico extends AveVoladora {
    public volar(): void {
        console.log("El perico vuela");
    }
}

class Avestuz extends Ave {
    // No implementa volar
}

function convertirVoladora(pajaro: AveVoladora) {
    pajaro.volar();
}

// Uso
const perico = new Perico();
convertirVoladora(perico); // Funciona bien

const avestruz = new Avestuz()
console.log(avestruz)