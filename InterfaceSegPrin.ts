/*interface pajaro{
    volar(): void,
    caminar(): void,
    nadar(): void,
    comer(): void,
}

class pato implements pajaro{
    volar(): void{
        console.log("El pato puede volar")
    }
    caminar(): void{
        console.log("El pato puede caminar")
    }
    nadar(): void {
        console.log("El pato puede nadar")
    }
    comer(): void {
        console.log("El pato come")
    }
}

class emu implements pajaro{
    volar(): void{
        console.log("El emu no puede volar")
    }
    caminar(): void{
        console.log("El emu puede caminar")
    }
    nadar(): void {
        console.log("El emu no puede nadar")
    }
    comer(): void {
        console.log("El emu come")
    }
}*/

interface pajaro{
    caminar(): void,
    comer(): void,
}

class pato implements pajaro{
    volar(): void{
        console.log("El pato puede volar")
    }
    caminar(): void{
        console.log("El pato puede caminar")
    }
    nadar(): void {
        console.log("El pato puede nadar")
    }
    comer(): void {
        console.log("El pato come")
    }
}

class emu implements pajaro{
    caminar(): void{
        console.log("El emu puede caminar")
    }
    comer(): void {
        console.log("El emu come")
    }
}