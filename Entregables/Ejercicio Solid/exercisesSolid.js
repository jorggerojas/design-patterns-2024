// Single Responsibility Principle (SRP)
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Open-Closed Principle (OCP)
class AreaCalculator {
    constructor(shape) {
        this.shape = shape;
    }

    calculate() {
        return this.shape.area();
    }
}

// Liskov Substitution Principle (LSP)
class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return Math.pow(this.side, 2);
    }
}

// Dependency Inversion Principle (DIP)
class AreaPrinter {
    constructor(shape) {
        this.shape = shape;
    }

    printArea() {
        console.log(this.shape.area());
    }
}

// Interface Segregation Principle (ISP)

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return Math.pow(this.side, 2);
    }
}
