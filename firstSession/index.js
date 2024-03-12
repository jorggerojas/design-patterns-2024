function contarVocales(palabra) {
    // RegEx
    var vocalesEncontradas = palabra.match(/[aeiou]/gi);
    if (vocalesEncontradas === null) {
        return 0;
    }
    return vocalesEncontradas.length;
}

var palabra = "Javascript";
var numeroDeVocales = contarVocales(palabra);
console.log("La palabra '" + palabra + "' tiene " + numeroDeVocales + " vocales.");
