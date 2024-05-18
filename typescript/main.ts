console.log("hello");

function print(param:string){
    console.log(param);
}

print("hola");

const car = {
    make: "Honda", 
    model: "Accord",
    year: 2020,
    color: "red",
    isUsed: true,
    owner: {
        name: "John",
        age: 30,
    },
    makeNoise: () => {
        console.log("Vroom");
    }
}

function accessField(key: keyof typeof car) {
    console.log(car[key]);
}

accessField("make");
accessField("model");
accessField("year");
/**
 * string
 * number
 * boolean
 * object
 * null
 * undefined
 * any
 * unknown
 */