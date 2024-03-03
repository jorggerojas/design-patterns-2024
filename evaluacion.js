const contarVocales = (texto) => {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    let contador = 0
    const arreglo = texto.split()

for (let i = 0; i < arreglo.length; i++){
    const letra = arreglo[i];
    if (vocales.includes(letra)){
        contador += 1
    }
  }

  return contador
}

console.log(contarVocales('hola'))