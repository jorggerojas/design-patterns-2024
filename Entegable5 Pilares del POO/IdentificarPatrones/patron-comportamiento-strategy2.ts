interface EstrategiaDescuentoo {
    calcularDescuento(precio: number): number;
  }
  
  class DescuentooPorcentaje implements EstrategiaDescuentoo {
    private porcentaje: number;
  
    constructor(porcentaje: number) {
      this.porcentaje = porcentaje;
    }
  
    calcularDescuento(precio: number): number {
      return precio * (this.porcentaje / 100);
    }
  }
  
  class DescuentooFijo implements EstrategiaDescuentoo {
    private descuentooFijo: number;
  
    constructor(descuentooFijo: number) {
      this.descuentooFijo = descuentooFijo;
    }
  
    calcularDescuento(precio: number): number {
      return precio - this.descuentooFijo;
    }
  }
  
  class Productoo {
    private nombre: string;
    private precio: number;
    private estrategiaDescuentoo: EstrategiaDescuentoo;
  
    constructor(nombre: string, precio: number, estrategiaDescuentoo: EstrategiaDescuentoo) {
      this.nombre = nombre;
      this.precio = precio;
      this.estrategiaDescuentoo = estrategiaDescuentoo;
    }
  
    public obtenerPrecioConDescuento(): number {
      return this.precio - this.estrategiaDescuentoo.calcularDescuento(this.precio);
    }
  
    public setEstrategiaDescuentoo(estrategiaDescuentoo: EstrategiaDescuentoo): void {
      this.estrategiaDescuentoo = estrategiaDescuentoo;
    }
  }
  
  // Ejemplo de uso
  const productoo: Productoo = new Productoo("Camisa", 50, new DescuentooPorcentaje(10));
  console.log(`Precio con descuento por porcentaje: ${productoo.obtenerPrecioConDescuento()}`); // Imprime 45
  
  productoo.setEstrategiaDescuentoo(new DescuentooFijo(5));
  console.log(`Precio con descuento fijo: ${productoo.obtenerPrecioConDescuento()}`); // Imprime 40
  