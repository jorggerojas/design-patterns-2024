
const trianguloStrategy = {
    calcularArea: (base, altura) => 0.5 * base * altura};
  
  const circuloStrategy = {
    calcularArea: (radio) => Math.PI * radio * radio};
  
  const cuadradoStrategy = {
    calcularArea: (lado) => lado * lado};
  
  const rectanguloStrategy = {
    calcularArea: (largo, ancho) => largo * ancho};

const trapecioStrategy = {
    calcularArea: (base1, base2, altura) => ((base1 + base2) / 2) * altura
}
  

    class CalculatorContext {
        constructor(strategy) {
          this.strategy = strategy;
        }
      
        setStrategy(strategy) {
          this.strategy = strategy;
        }
      
        calcularArea(...args) {
          return this.strategy.calcularArea(...args);
        }
      }
  
  const calculador = new CalculatorContext(trianguloStrategy); 
  console.log('Área del triángulo:', calculador.calcularArea(5, 17));
  
  calculador.setStrategy(circuloStrategy); 
  console.log('Área del círculo:', calculador.calcularArea(8));
  
  calculador.setStrategy(cuadradoStrategy); 
  console.log('Área del cuadrado:', calculador.calcularArea(4));
  
  calculador.setStrategy(rectanguloStrategy); 
  console.log('Área del rectángulo:', calculador.calcularArea(7, 12));

  calculador.setStrategy(trapecioStrategy); 
  console.log('Área del trapecio:', calculador.calcularArea(3, 5, 4));
  