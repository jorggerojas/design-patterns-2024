const ejemplo = "ejemplo"

function printNumbers(){
    console.log(123)
}

printNumbers()

const animals = ['dog', 'cat','bird','snake']

const filtered = animals.filter((noSnake)=>{
    return noSnake !== 'snake'
})

console.log(filtered)

const persona = {
    nombre :'Manuel',
    edad : 18,
    carrera: 'SOF18'
}

console.log('Edad:'+persona.edad+' Carrera:'+persona.carrera+' Nombre:'+persona.nombre);
console.log(`Edad ${persona.edad} Carrera:${persona.carrera} Nombre:${persona.nombre}`);