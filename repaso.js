//nombre, edad, carrera
const persona = {
  nombre: 'manuel',
  edad: 18,
  carrera: 'SOF18'
}

// edad: 18, carrera: 'SOFT18 y nombre manuel
console.log("edad: " + persona.edad + ", carrera: " + persona.carrera + " y nombre " + persona.nombre)

console.log(`edad: ${persona.edad}, carrera: ${persona.carrera} y nombre ${persona.nombre}`)

Object.keys(persona).forEach(prop => {
  console.log({ prop, valor: persona[prop] })
})

// declarar variable para acceder a llaves, = object.keys()=>attrs para acceder
// nombre, edad, carrera


// NOS VEMOS 10:20 

// npm install --global [NAME]
