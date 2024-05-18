interface pajaro{
    caminar(): void,
    comer(): void,
}
    //@ts-ignore
class pato implements pajaro{
    caminar(): void{
        console.log("El pato puede caminar")
    }
    comer(): void {
        console.log("El pato come")
    }
}

    //@ts-ignore
class emu implements pajaro{
    caminar(): void{
        console.log("El emu puede caminar")
    }
    comer(): void {
        console.log("El emu come")
    }
}

class funcionesAves {
    caminarAves(pajaro: pajaro): void {
        pajaro.caminar();
    }
    comerAves(pajaro: pajaro): void {
        pajaro.comer();
    }
}

const Emu = new emu();
const Pato = new pato();
const fA = new funcionesAves();

fA.caminarAves(Emu);
fA.comerAves(Pato);

// Las funciones dentro de funcionesAves nunca se tiene que modificar, pero se le pueden agregar funciones a la clase