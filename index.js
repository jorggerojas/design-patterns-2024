//ejercicio 1
function generarPalabraAleatoria() {
    const palabras = ["perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", 
    "ventana", "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function generarPalabras() {
    const palabrasGeneradas = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas.push(generarPalabraAleatoria());
    }
    console.log(palabrasGeneradas.join(', '));
}
generarPalabras();

//ejercicio 2
function generarPalabraAleatoria1() {
    const palabras = ["perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", 
    "ventana", "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras[Math.floor(Math.random() * palabras.length)];
}
function generarPalabras1() {
    const palabrasGeneradas1 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas1.push(generarPalabraAleatoria1());
    }
    palabrasGeneradas1.forEach(palabra => {
        console.log(palabra);
    });
}
generarPalabras1();

//ejercicio 3
function generarPalabraAleatoria3() {
    const palabras3 = ["manzana", "banano", "naranja", "limón", "uva", "pera", "kiwi", 
    "fresa", "sandía", "melón", "piña", "papaya", "mango", "cereza", "frambuesa", "ciruela", 
    "durazno", "mandarina", "guayaba", "toronja"];
    return palabras3[Math.floor(Math.random() * palabras3.length)];
}
function generarPalabras3() {
    const palabrasGeneradas3 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas3.push(generarPalabraAleatoria3());
    }
    const palabrasFiltradas3 = palabrasGeneradas3.filter(palabra3 => palabra3.includes('s') || palabra3.includes('r'));
    palabrasFiltradas3.forEach(palabra3 => {
        console.log(palabra3);
    });
}
generarPalabras3();

//ejercicio 4
function generarPalabraAleatoria4() {
    const palabras4 = ["perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras4[Math.floor(Math.random() * palabras4.length)];
}
function generarPalabras4() {
    const palabrasGeneradas4 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas4.push(generarPalabraAleatoria4());
    }
    const palabrasFiltradas4 = palabrasGeneradas4.filter(palabra4 => palabra4.length >= 6);
    palabrasFiltradas4.forEach(palabra4 => {
        console.log(palabra4);
    });
}
generarPalabras4();

//ejercicio 5
function generarPalabraAleatoria5() {
    const palabras5 = ["manzana", "platano", "naranja", "limon", "pera", 
    "sandia", "melon", "piña", "papaya", "mango", "fresa", "cereza", "uva", 
    "ciruela", "kiwi", "aguacate", "guayaba", "granada", "maracuya", "frambuesa"];
    return palabras5[Math.floor(Math.random() * palabras5.length)];
}
function generarPalabras5() {
    const palabrasGeneradas5 = [];
    for (let i = 0; i < 20; i++) {
        let palabra5 = generarPalabraAleatoria5();
        palabra5 = palabra5.replace(/a/g, "YES");
        palabrasGeneradas5.push(palabra5);
    }
    palabrasGeneradas5.forEach(palabra5 => {
        console.log(palabra5);
    });
}
generarPalabras5();

//ejercicios 6
function generarPalabraAleatoria6() {
    const palabras6 = ["perro", "gato", "casa", "coche", "sol", "luna", 
    "árbol", "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", 
    "ventana", "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras6[Math.floor(Math.random() * palabras6.length)];
}
function generarPalabras6() {
    const palabrasGeneradas6 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas6.push(generarPalabraAleatoria6());
    }
    const palabrasReemplazadas6 = palabrasGeneradas6.map(palabra6 => palabra6.length >= 6 ? "NO" : palabra6);
    palabrasReemplazadas6.forEach(palabra6 => {
        console.log(palabra6);
    });
}
generarPalabras6();

//ejercicio 7
function generarPalabraAleatoria7() {
    const palabras7 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", 
    "melon", "piña", "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", 
    "aguacate", "guayaba", "granada", "maracuya", "frambuesa"];
    return palabras7[Math.floor(Math.random() * palabras7.length)];
}
function generarPalabras7() {
    const palabrasGeneradas7 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas7.push(generarPalabraAleatoria7());
    }
    const palabrasOrdenadas7 = palabrasGeneradas7.sort();
    palabrasOrdenadas7.forEach(palabra7 => {
        console.log(palabra7);
    });
}
generarPalabras7();

//ejercicio 8
function generarPalabraAleatoria8() {
    const palabras8 = ["perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras8[Math.floor(Math.random() * palabras8.length)];
}
function generarPalabras8() {
    const palabrasGeneradas8 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas8.push(generarPalabraAleatoria8());
    }
    return palabrasGeneradas8;
}
function invertirPalabras8() {
    const palabras8 = generarPalabras8();
    palabras8.reverse().forEach(palabra8 => {
        console.log(palabra8);
    });
}
invertirPalabras8();

//ejercicio 9
function generarPalabraAleatoria9() {
    const palabras9 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", 
    "melon", "piña", "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", 
    "aguacate", "guayaba", "granada", "maracuya", "frambuesa"];
    return palabras9[Math.floor(Math.random() * palabras9.length)];
}
function generarPalabras9() {
    const palabrasGeneradas9 = [];
    for (let i = 0; i < 20; i++) {
        palabrasGeneradas9.push(generarPalabraAleatoria9());
    }
    return palabrasGeneradas9;
}
function eliminarPrimeraYUltima9() {
    let palabras9 = generarPalabras9();
    palabras9.shift(); // Elimina la primera palabra
    palabras9.pop(); // Elimina la última palabra
    palabras9.forEach(palabra9 => {
        console.log(palabra9);
    });
}
eliminarPrimeraYUltima9();

//ejercicio 10
function generarPalabraAleatoria10() {
    const palabras10 = ["perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel","manzana", "platano", "naranja", "limon", 
    "pera", "sandia", "melon", "piña", "papaya", "mango", "fresa", "cereza", "uva", "ciruela", 
    "kiwi", "aguacate", "guayaba", "granada", "maracuya", "frambuesa"];
    return palabras10[Math.floor(Math.random() * palabras10.length)];
}
function generarPalabras10() {
    const palabrasGeneradas10 = [];
    for (let i = 0; i < 50; i++) {
        palabrasGeneradas10.push(generarPalabraAleatoria10());
    }
    return palabrasGeneradas10;
}
function anadirHola() {
    let palabras10 = generarPalabras10();
    palabras10.unshift("¡Hola!"); // Añade "¡Hola!" al inicio
    palabras10.push("¡Hola!"); // Añade "¡Hola!" al final
    palabras10.forEach(palabra10 => {
        console.log(palabra10);
    });
}
anadirHola();

//ejercicio 11
function generarPalabraAleatoria11() {
    const palabras11 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras11[Math.floor(Math.random() * palabras11.length)];
}
function generarPalabras11() {
    const palabrasAleatorias11 = [];
    for (let i = 0; i < 50; i++) {
        const palabra11 = generarPalabraAleatoria11();
        palabrasAleatorias11.push(palabra11);
        palabrasAleatorias11.push(palabra11.toUpperCase());
    }
    return palabrasAleatorias11;
}
console.log(generarPalabras11());

//ejercicio 12
function generarPalabraAleatoria12() {
    const palabras12 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras12[Math.floor(Math.random() * palabras12.length)];
}
function buscarPalabraArmy() {
    const palabrasGeneradas12 = [];
    for (let i = 0; i < 50; i++) {
        palabrasGeneradas12.push(generarPalabraAleatoria12());
    }
    const palabraArmy = palabrasGeneradas12.find(palabra12 => palabra12 === "army");
    return palabraArmy;
}
console.log(buscarPalabraArmy());

//ejercicio 13
function generarPalabraAleatoria13() {
    const palabras13 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras13[Math.floor(Math.random() * palabras13.length)];
}
function generarYUnirPalabras13() {
    let resultado13 = '';
    for (let i = 0; i < 50; i++) {
        resultado13 += generarPalabraAleatoria13() + ' ';
    }
    return resultado13.trim(); // Elimina el espacio al final
}
console.log(generarYUnirPalabras13())

//ejercicio 14
function generarPalabraAleatoria14() {
    const palabras14 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras14[Math.floor(Math.random() * palabras14.length)].toUpperCase();
}
function generarYUnirPalabras14() {
    let resultado14 = '';
    for (let i = 0; i < 50; i++) {
        resultado14 += `${generarPalabraAleatoria14()} `;
    }
    return resultado14.trim(); // Elimina el espacio al final
}
console.log(generarYUnirPalabras14());

//ejercicio 15
function generarPalabraAleatoria15() {
    const palabras15 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];
    return palabras15[Math.floor(Math.random() * palabras15.length)];
}
function generarObjetosPalabra15() {
    const palabrasGeneradas15 = [];
    for (let i = 0; i < 50; i++) {
        const palabra15 = generarPalabraAleatoria();
        const palabraMayuscula15 = palabra15.toUpperCase();
        const objetoPalabra15 = {};
        objetoPalabra15[palabra15] = palabraMayuscula15;
        palabrasGeneradas15.push(objetoPalabra15);
    }
    return palabrasGeneradas15;
}
console.log(generarObjetosPalabra15());

//ejercicio 16
function generarPalabraAleatoria16() {
    const palabras16 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];    
    return palabras16[Math.floor(Math.random() * palabras16.length)];
}
function generarObjetosPalabra16() {
    const palabrasGeneradas16 = [];
    for (let i = 0; i < 50; i++) {
        const palabra16 = generarPalabraAleatoria16();
        const objetoPalabra16 = {};
        objetoPalabra16[palabra16] = palabra16.length;
        palabrasGeneradas16.push(objetoPalabra16);
    }
    return palabrasGeneradas16;
}
console.log(generarObjetosPalabra16());

//ejercicio 17
function generarPalabraAleatoria17() {
    const palabras17 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];    
    return palabras17[Math.floor(Math.random() * palabras17.length)];
}
function generarObjetosPalabra17() {
    const palabrasGeneradas17 = [];
    for (let i = 0; i < 50; i++) {
        const palabra17 = generarPalabraAleatoria17();
        if (palabra17.length >= 6) {
            const objetoPalabra17 = {};
            objetoPalabra17[palabra17] = palabra17.length;
            palabrasGeneradas17.push(objetoPalabra17);
        }
    }
    return palabrasGeneradas17;
}
console.log(generarObjetosPalabra17());

//ejercicio 18
function generarPalabraAleatoria18() {
    const palabras18 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"]; 
    return palabras18[Math.floor(Math.random() * palabras18.length)];
}
function generarPalabrasModificadas18() {
    const palabrasGeneradas18 = [];
    for (let i = 0; i < 50; i++) {
        const palabra18 = generarPalabraAleatoria18();
        let palabraModificada18;
        if (palabra18.length === 4) {
            palabraModificada18 = "HOLA";
        } else if (palabra18.length > 4) {
            palabraModificada18 = "MUNDO";
        } else {
            palabraModificada18 = "ADIOS";
        }
        palabrasGeneradas18.push(palabraModificada18);
    }
    return palabrasGeneradas18;
}
console.log(generarPalabrasModificadas18());

//ejercicio 19
function generarPalabraAleatoria19() {
    const palabras19 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"]; 
    return palabras19[Math.floor(Math.random() * palabras19.length)];
}
function generarCantidadLetras19() {
    const palabrasGeneradas19 = [];
    for (let i = 0; i < 50; i++) {
        const palabra19 = generarPalabraAleatoria19();
        palabrasGeneradas19.push(palabra19.length);
    }
    return palabrasGeneradas19;
}
console.log(generarCantidadLetras19());

//ejercicio 20
function generarPalabraAleatoria20() {
    const palabras20 = ["manzana", "platano", "naranja", "limon", "pera", "sandia", "melon", "piña", 
    "papaya", "mango", "fresa", "cereza", "uva", "ciruela", "kiwi", "aguacate", "guayaba", "granada", 
    "maracuya", "frambuesa", "perro", "gato", "casa", "coche", "sol", "luna", "árbol", 
    "ordenador", "libro", "mesa", "silla", "pelota", "juego", "televisor", "ventana", 
    "puerta", "teléfono", "teclado", "ratón", "papel"];     
    return palabras20[Math.floor(Math.random() * palabras20.length)];
}
function generarObjetoCantidadLetras20() {
    const palabrasGeneradas20 = [];
    for (let i = 0; i < 50; i++) {
        palabrasGeneradas20.push(generarPalabraAleatoria20());
    }
    const resultado20 = palabrasGeneradas20.reduce((obj, palabra20) => {
        obj[palabra20] = palabra20.length;
        return obj;
    }, {});
    return resultado20;
}
console.log(generarObjetoCantidadLetras20());