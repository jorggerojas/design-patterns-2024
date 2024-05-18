
// Buena: Dependencia de abstracción
interface Escritor {
  write(message: string): void;
}

class Logger {
  constructor(private escritor: Escritor) {}

  log(message: string): void {
    this.escritor.write(message);
  }
}

class FileWriter implements Escritor {
  write(message: string): void {
    // Implementación para escribir en archivo
  }
}

class ConsolaWriter implements Escritor {
  write(message: string): void {
    console.log(message);
  }
}

const logger = new Logger(new FileWriter()); // Dependencia de FileWriter
const loggerConsola = new Logger(new ConsolaWriter()); // Se puede usar ConsolaWriter fácilmente

  
