import{
    generate
}from 'random-words'

const palabras = generate(20)
console.log(palabras)

palabras.forEach((element) => console.log(element))

const filtro1 = palabras.filter(ros)
function ros (palabra){
    return contros(palabra) === 1
}
function contros (elem){
    let i = 0
    let o = 0
    for(let j=0;j<elem.length;j++){
        if (elem[j] === 'r'){
            i++
        }
        if (elem[j] === 's'){
            i++
        }
    }
    if(i>0){
        o = 1
    }
    return o
}
console.log(filtro1)

const filtro2 = palabras.filter(len)
function len (palabra){
    return palabra.length > 6
}
console.log(filtro2)

function nul (palabra){
    return palabra
}

let filtro3 = palabras.filter(nul)
for(let y = 0; y<filtro3.length; y++){
    filtro3[y] = filtro3[y].replace(/a/g, 'YES')
}
console.log(filtro3)

let filtro4 = palabras.filter(nul)
for(let y = 0; y<filtro4.length; y++){
    if(filtro4[y].length > 6){
        filtro4[y] = 'NO'
    }
}
console.log(filtro4)

const orden = palabras.filter(nul)
console.log(orden.sort())

const revers = palabras.reverse()
console.log(revers)

console.log(palabras.slice(1, -1))

const palabras2 = generate(50)

let agreg = ["Hola"].concat(palabras2)
const ooo = ["Hola"]
const agregar = agreg.concat(ooo)
console.log(agregar)

let mayus = []
for(let i = 0; i<palabras2.length; i++){
    mayus.push(palabras2[i])
    let capitalizeArray = palabras2[i].toUpperCase();
    mayus.push(capitalizeArray); 
}
console.log(mayus)

const found = palabras2.find((element) => element === "army")
console.log(found)

console.log(palabras2.join(' '))

let todoMayus = []
for(let i = 0; i<palabras2.length; i++){
    let capitalizeArray = palabras2[i].toUpperCase();
    todoMayus.push(capitalizeArray); 
}
console.log(todoMayus.join(' '))


var llaveMayus = palabras2.map(function (obj) {
    let capitalizeArray = obj.toUpperCase();
    var rObj = {};
    rObj[obj] = capitalizeArray;
    return rObj;
  });

console.log(llaveMayus)

var llaveLength = palabras2.map(function (obj) {
    var rObj = {};
    rObj[obj] = obj.length;
    return rObj;
  });

console.log(llaveLength)

const lL6 = palabras2.filter(len)
var llaveLength6 = lL6.map(function (obj) {
    var rObj = {};
    rObj[obj] = obj.length;
    return rObj;
  });

console.log(llaveLength6)

var repLen = palabras2.map(function (obj) {
    if(obj.length === 4){
        var rObj = "HOLA"
    } else if(obj.length >4){
        var rObj = "MUNDO"
    } else {
        var rObj = "ADIOS"
    }
    return rObj;
  });

console.log(repLen)

var repLen2 = palabras2.map(function (obj) {
    var rObj = obj.length
    return rObj;
  });

console.log(repLen2)

const red = repLen2.filter(nul)
red.reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual.length;
})
var total = red.reduce(function (a, b) {
    return a + b;
})
console.log(total)