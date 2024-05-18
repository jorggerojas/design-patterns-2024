class Libro {
  private titulo: string;
  private autor: string;
  private history: Array<string | null> = [null, ""];
  public constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
  }

  public mostrarInfo() {
    console.log(
      `Titulo: ${this.titulo}, Autor: ${
        this.autor
      }, Disponible: ${this.isAvailable()}`
    );
  }

  public isAvailable() {
    if (this.history[this.history.length - 1] !== null) {
      return false;
    }
    return true;
  }

  public prestarLibro(username: string) {
    if (this.isAvailable()) {
      this.history[this.history.length - 1] = username;
      return 1;
    }
    const usuarioConLibro = this.history[this.history.length - 1];
    console.log(`Libro actualmente prestado al usuario: ${usuarioConLibro}`);
    return 0;
  }

  public devolverLibro() {
    if (!this.isAvailable()) {
      this.history.push(null);
      return 1;
    }

    console.log("El libro no ha sido prestado");
    return 0;
  }
}
