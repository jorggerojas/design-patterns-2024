console.log("hello");

const nameTwo="John";

function print(param:string){
    console.log(param)
}
console.log('hola')

const car={
    make:"Honda",
    model:"Accord",
    year:"2020",
    color:"red"
}
function accessField(key: keyof typeof car){
console.log(car[key])
}

//const param:string;
//const num=number(param)
//string
//number
//boolean
//object
//null
//undefined
//unknown no se puede ocupar ningún método
//any
//unknown