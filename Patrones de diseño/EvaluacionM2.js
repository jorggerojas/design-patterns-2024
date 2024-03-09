//contador = 0
//Una función que nos permita pasar de texto a un arreglo y poder contar letras
//comparar

const contarVocales = (texto) => {  // palabra
    const vocales = ['a','e','i','o','u']
    let contador = 0
    const arreglo = texto.split('') // [p,a,l,a,b,r,a]

    for (let i = 0; i < array.length; i++) {
        const letra = array[i];
        if ([].includes(letra)) {
            contador += 1
        }
    }

    return contador

}

console.log(contadorVocales('palabra'))

//function contarVocales() {

//}

