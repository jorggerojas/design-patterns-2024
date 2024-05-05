interface calculator{
    operation(): number
}

class Suma{
    private a: number;
    private b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = a;
    }

   operation(a: number, b: number):number{
        return a + b;
   }
}

class Resta{
    private a: number;
    private b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = a;
    }

   operation(a: number, b: number):number{
        return a - b;
   }
}

class Multiplicacion{
    private a: number;
    private b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = a;
    }

   operation(a: number, b: number):number{
        return a * b;
   }
}

class Division{
    private a: number;
    private b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = a;
    }

   operation(a: number, b: number):number{
        return a / b;
   }
}
