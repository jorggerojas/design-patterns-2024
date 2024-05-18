class Animales{
    public come(): void{
        console.log("Comida")
    }
}

class Perros extends Animales{
    public come(): void{
        console.log('Comida para perros')
    }
}

const gato = new Animales();
gato.come()

const perro = new Perros();
perro.come()