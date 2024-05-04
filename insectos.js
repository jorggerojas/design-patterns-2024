//clase insectos (s)
class Insecto {
    constructor(nombre) {
      this.nombre = nombre;
    }
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}`);
    }
  }
  //clase insecto volador (o)
  class InsectoVolador extends Insecto {
    constructor(nombre, velocidadVuelo) {
      super(nombre);
      this.velocidadVuelo = velocidadVuelo;
    }

    volar() {
      console.log(`${this.nombre} está volando a una velocidad de ${this.velocidadVuelo} km/h`);
    }
  }
  
  // clase mariposa (l)
  class Mariposa extends InsectoVolador {
    constructor(nombre, velocidadVuelo) {
      super(nombre, velocidadVuelo);
    }
  
    cambiarColor(color) {
      console.log(`${this.nombre} cambió de color a ${color}`);
    }
  }
  
  // Clase insectoterrestre (d)
  class InsectoTerrestre extends Insecto {
    constructor(nombre, tipoAlimentacion) {
      super(nombre);
      this.tipoAlimentacion = tipoAlimentacion;
    }
  
    alimentarse() {
      console.log(`${this.nombre} se está alimentando de ${this.tipoAlimentacion}`);
    }
  }
  
  class Abeja extends InsectoVolador {
    constructor(nombre, velocidadVuelo) {
      super(nombre, velocidadVuelo);
    }
  
    recolectarNectar() {
      console.log(`${this.nombre} está recolectando néctar`);
    }
  }

  //instancias
const mariposa = new Mariposa("Mariposa Monarca", 20);
const abeja = new Abeja("Abeja ", 25);
const cucaracha = new InsectoTerrestre("Cucaracha", "restos orgánicos");

mariposa.mostrarInformacion();
mariposa.volar();
mariposa.cambiarColor("naranja");

abeja.mostrarInformacion();
abeja.volar();
abeja.recolectarNectar();

cucaracha.mostrarInformacion();
cucaracha.alimentarse();