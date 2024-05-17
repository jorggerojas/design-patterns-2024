class areaCalculator {
    calculate() {
      throw new Error("calculate method must be implemented");
    }
  }
  class areaCalculatorContext {
    constructor(strategy = new areaCalculator()) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calculate() {
      return this.strategy.calculate();
    }
  }
  
  class triangleAreaCalculator extends areaCalculator {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculate() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class circleAreaCalculator extends areaCalculator {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculate() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class squareAreaCalculator extends areaCalculator {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculate() {
      return Math.pow(this.side, 2);
    }
  }
  
  class rectangleAreaCalculator extends areaCalculator {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculate() {
      return this.width * this.height;
    }
  }
  
    let areaContext = new areaCalculatorContext();
    areaContext.setStrategy(new triangleAreaCalculator(10, 5));
    console.log(areaContext.calculate());
    let totalArea = areaContext.calculate();
    areaContext.setStrategy(new circleAreaCalculator(5));
    console.log(areaContext.calculate());
    totalArea += areaContext.calculate();
    areaContext.setStrategy(new squareAreaCalculator(5));
    console.log(areaContext.calculate());
    totalArea += areaContext.calculate();
    areaContext.setStrategy(new rectangleAreaCalculator(10, 5));
    console.log(areaContext.calculate());
    totalArea += areaContext.calculate();
    console.log(totalArea);
    
