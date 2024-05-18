class Singleton {
  getConfiguracion(arg0: string): any {
    throw new Error("Method not implemented.");
  }
  setConfiguracion(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
  private static instance: Singleton; // Instancia única de la clase

  public constructor() { } // Constructor privado

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}


class Configuracion extends Singleton {
  private configuracion: any;

  public constructor() {
    super(); // Llama al constructor de la clase base Singleton
    this.configuracion = {}; // Inicializa la configuración vacía
  }

  public setConfiguracion(clave: string, valor: any): void {
    this.configuracion[clave] = valor;
  }

  public getConfiguracion(clave: string): any {
    return this.configuracion[clave];
  }
}

// Ejemplo de uso

const configuracion = Configuracion.getInstance();
configuracion.setConfiguracion("idioma", "español");
console.log(configuracion.getConfiguracion("idioma")); // Imprime "español"
