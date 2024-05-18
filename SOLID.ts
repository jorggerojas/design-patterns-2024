//1 SR: La clase Producto representa un producto y almacenar su info

class Producto{
  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number){
    this.nombre = nombre;
    this.precio = precio;
  }

  getNombre(): string{
    return this.nombre;
  }

  getPrecio(): number{
    return this.precio;
  }
}

//2 O/C: La clase DiscountCalculator está abierta para otros descuentos
// pero cerrada para modificaciones.

class CalculadorDescuento{
  aplicacionDescuento(producto: Producto): number{
    return producto.getPrecio() * 0.9; //10%
  }
}

class CalculadorDescuentoMayor extends CalculadorDescuento{
  aplicacionDescuento(producto: Producto): number{
    return producto.getPrecio() * 0.8; //20%
  }
}

//3 LS: Esta clase puede ser reemplazada por instancias de
// Producto sin alterar el programa.

class ProductoDigital extends Producto{
  private Link: string;

  constructor(nombre: string, precio: number, Link: string){
    super(nombre, precio);
    this.Link = Link;
  }

  getLink(): string{
    return this.Link;
  }
}

//4 IS: La interfaz es sobre el envío y solo se
// implementa por clases que necesitan enviar productos

interface Envios{
  enviar(): void;
}

class ProductoFisico implements Envios{
  enviar(): void {
    console.log("Envío de producto físico");
  }
}

//5  DI: Esta clase depende de abstracciones (Producto)
// en lugar de implementaciones concretas.

class ProcesadorPedidos{
  procesadorPedidos(producto: Producto): void{
    console.log(`Procesando pedido de ${producto.getNombre()}`);
  }
}
