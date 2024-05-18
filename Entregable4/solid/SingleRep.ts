// Producto base
class Producto {
    constructor(
      public id: number,
      public nombre: string,
      public precio: number
    ) {}
  }
  
  // Producto perecedero
  class ProductoPerecedero extends Producto {
    constructor(
      public id: number,
      public nombre: string,
      public precio: number,
      public fechaCaducidad: Date
    ) {
      super(id, nombre, precio);
    }
  
    verificarCaducidad(): boolean {
      const fechaActual = new Date();
      return fechaActual > this.fechaCaducidad;
    }
  }
  
  // Producto electrónico
  class ProductoElectronico extends Producto {
    constructor(
      public id: number,
      public nombre: string,
      public precio: number,
      public garantia: number
    ) {
      super(id, nombre, precio);
    }
  
    calcularTiempoRestanteGarantia(): number {
      const fechaCompra = new Date(); // Suponiendo que se conoce la fecha de compra
      const tiempoTranscurrido = Date.now() - fechaCompra.getTime();
      const diasTranscurridos = tiempoTranscurrido / (1000 * 60 * 60 * 24);
      return this.garantia - diasTranscurridos;
    }
  }
  
  // Producto de limpieza
  class ProductoLimpieza extends Producto {
    constructor(
      public id: number,
      public nombre: string,
      public precio: number,
      public tipo: TipoProductoLimpieza // Enum para definir el tipo de producto de limpieza
    ) {
      super(id, nombre, precio);
    }
  
    obtenerTipoProductoLimpieza(): string {
      return TipoProductoLimpieza[this.tipo];
    }
  }
  
  // Enum para definir el tipo de producto de limpieza
  enum TipoProductoLimpieza {
    PISOS,
    VIDRIOS,
    MUEBLES,
    BAÑOS
  }

  
  const productoPerecedero = new ProductoPerecedero(1, "Leche", 2.5, new Date("2024-05-15"));
const productoElectronico = new ProductoElectronico(2, "Smartphone", 300, 12);
const productoLimpieza = new ProductoLimpieza(3, "Limpiador de pisos", 5, TipoProductoLimpieza.PISOS);

// Procesar los productos según su tipo
if (productoPerecedero instanceof ProductoPerecedero) {
  if (productoPerecedero.verificarCaducidad()) {
    console.log("El producto perecedero ha caducado");
  } else {
    console.log("El producto perecedero está fresco");
  }
} else if (productoElectronico instanceof ProductoElectronico) {
  const tiempoRestanteGarantia = productoElectronico.calcularTiempoRestanteGarantia();
  console.log("Tiempo restante de garantía:", tiempoRestanteGarantia);
} else if (productoLimpieza instanceof ProductoLimpieza) {
  const tipoProductoLimpieza = productoLimpieza.obtenerTipoProductoLimpieza();
  console.log("Tipo de producto de limpieza:", tipoProductoLimpieza);
}
