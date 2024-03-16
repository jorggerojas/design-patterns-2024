import {generate} from 'random-words';

const palabras = generate(20)

//aqui hago una función que obtiene una palabra,
const reemplazarA = function (palabra) {
    //divide la palabra en un array de caracteres
    let letras = palabra.split('');
    //y por cara caracter en el array,
    return letras.map(letra => {
        //lo reemplaza si contiene 'a'
        return letra.replace('a', 'YES');
    }).join('')//y vuelvo a juntar todas las letras en un string
}

//por cada palabra en el arreglo
const reemplazada = palabras.map(palabra => {
    //ejecuto la función anterior
    return reemplazarA(palabra)
})
//similar a dos for anidados

console.log(reemplazada)