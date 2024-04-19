import {generate} from 'random-words';

// console.log(generate(1));

/**
    Ejercicio 1
    Genera 20 palabras aleatorias e imprímelas en la terminal.
*/

function G_20words() {
    let words = generate(20);

    console.log(words);
}

// G_20words();


/**
    Ejercicio 2
    Genera 20 palabras aleatorias e imprímelas en la terminal, pero esta vez, 
    cada palabra debe de estar en una línea diferente. Puedes hacer uso del método 
    para Arrays forEach o map.
*/

function G_20words_line(){

    let words = generate(20);

    words.forEach((word) => console.log(word));

}

// G_20words_line();

/**
    Ejercicio 3
    Genera 20 palabras aleatorias, filtra todas las palabras que tengan la letra "s" 
    o la letra "r" y finalmente imprime el resultado en la terminal.
*/

function G_20words_filter_RnS(){

    let words = generate(20);

    const filtered = words.filter(word => !word.includes('r') && !word.includes('s'));
    
    console.log(filtered);
}

// G_20words_filter_RnS();

/**
    Ejercicios 4 
    Genera 20 palabras aleatorias, filtra todas las palabras que tengan 6 letras o más y finalmente 
    imprime el resultado en la terminal.
*/

function G_20words_LSix(){

    let words = generate(20);

    const filtered = words.filter(word => word.length >= 6);

    console.log(filtered);

}

// G_20words_LSix()

/**
    Ejercicio 5
    Genera 20 palabras aleatorias, reemplaza en todas las palabras que tengan 
    la letra "a" por la palabra "YES" y finalmente imprime el resultado en la 
    terminal. Por ejemplo, si la palabra es "casa", el resultado sería "cYESsYES", 
    dado que la palabra "casa" tiene dos letras "a". Para este ejercicio, puedes hacer 
    uso del método replace para Strings. 
 */

function G_20words_Replace_a2Yes(){
    
    let words = generate(20);

    for(let i = 0; i < words.length ; i++){
        words[i] = words[i].replace(/a/gi, 'YES');
    }

    console.log(words);

}

// G_20words_Replace_a2Yes()

/** 
    Ejercicio 6
    Genera 20 palabras aleatorias, reemplaza todas las palabras que tengan 6 letras o más por la palabra "NO" 
    y finalmente imprime el resultado en la terminal.
*/

function G_20words_Replace_6toNo(){

    let words = generate(20);

    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 6){
            words[i] = 'NO';
        }
    }

    console.log(words)
}

// G_20words_Replace_6toNo()

/**
    Ejercicio 7
    Genera 20 palabras aleatorias, ordena todas las palabras de manera alfabética y 
    finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método sort para Arrays
*/

function G_20words_orderAlphabet(){

    let words = generate(20)

    words.sort()

    console.log(words)
}

// G_20words_orderAlphabet()

/**
    Ejercicio 8
    Genera 20 palabras aleatorias, cambia el orden de las palbaras invirtiendo el orden, 
    es decir, la primera palabra será la última y la última palabra será la primera, y 
    finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método reverse para Arrays.
*/

function G_20words_orderInverted(){
    let words = generate(20)

    words.reverse();

    console.log(words)
}

// G_20words_orderInverted()

/**
    Ejercicio 9
    Genera 20 palabras aleatorias, elimina la primera y la última palabra, y 
    finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método shift y pop para Arrays.
*/

function G_20words_Eliminate(){
    let words = generate(20)

    words.shift()
    words.pop()

    console.log(words)

}

// G_20words_Eliminate()

/**
    Ejercicio 10
    Genera 50 palabras aleatorias, añade al inicio y al final de todas las palabras la palabra "¡Hola!" 
    y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método unshift y push para Arrays.
*/

function G_50words_joinHola(){
    let words = generate(50)

    const array = ['¡Hola!']

    words = array.concat(words).concat(array)

    console.log(words)
}

// G_50words_joinHola()

/**
    Ejercicio 11
    Genera 50 palabras aleatorias, por cada pabra añadirás al array la misma palabra pero en mayúsuculas, 
    y finalmente imprime el resultado en la terminal. Por ejemplo, dado el arreglo ["hola", "mundo"], 
    el resultado sería ["hola", "HOLA", "mundo", "MUNDO"]. Para este ejercicio, 
    puedes hacer uso del método toUpperCase para Strings.
*/

function G_50words_joinUpper(){
    let words = generate(50)

    let wordsUpper = []

    for(let i = 0; i < words.length; i++){
        wordsUpper.push(words[i])
        wordsUpper.push(words[i].toUpperCase())
    }

    console.log(wordsUpper)
}

// G_50words_joinUpper()

/**
    Ejercicio 12
    Genera 50 palabras aleatorias, vas a buscar la primer palabra que coincida con "army" y 
    finalmente imprime el resultado en la terminal. Para este ejercicio, 
    puedes hacer uso del método find para Arrays. 
*/

function G_50words_findArmy (){
    let words = generate(50)

    //words.push('army')

    const found = words.find((element) => element = 'army');

    if(found != 'army'){
        console.log('La palabra "army" no fue encontrada en el array')
    } else {
        console.log(found)
    }
    
}

// G_50words_findArmy()

/**
    Ejercicio 13
    Genera 50 palabras aleatorias, vas a mostrar todas las palabras como un solo string separadas por un espacio, 
    y finalmente imprime el resultado en la terminal. Para este ejercicio, 
    puedes hacer uso del método join para Arrays o template strings.
*/

function G_50words_join(){
    let words = generate(50)

    console.log(words.join(''));
}

// G_50words_join()

/**
    Ejercicio 14
    Genera 50 palabras aleatorias, vas a mostrar todas las palabras como un solo string separadas por un espacio, 
    pero esta vez, todas las palabras estarán en mayúsculas, y finalmente imprime el resultado en la terminal. 
    Para este ejercicio, puedes hacer uso del método join para Arrays y el método toUpperCase para Strings o template strings.
*/

function G_50words_UpperJoin(){
    let words = generate(50)

    for(let i=0; i<words.length; i++){
        words[i] = words[i].toUpperCase()
    }

    console.log(words.join(' '));

}

// G_50words_UpperJoin()

/**
    Ejercicio 15
    Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad)
    y el valor sería la misma palabra pero en mayúscula. Por ejemplo, dado el array ["hola", "mundo"] 
    el resultado sería [{ hola: "HOLA" }, { mundo: "MUNDO" }], y finalmente imprime el resultado en la terminal. 
    Para este ejercicio, puedes hacer uso del método map para Arrays y el método toUpperCase para Strings.
*/

function G_50words_Object_PropertiUpper(){
    let words = generate(50)

    let ObjectUpper = words.map(word => {
        let obj = {}
        obj[word] = word.toUpperCase()
        return obj;
    })

    console.log(ObjectUpper)
}

// G_50words_Object_PropertiUpper()

/**
    Ejercicio 16
    Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad)
    y el valor sería la cantidad de letras que tiene la palabra. Por ejemplo, dado el array ["hola", "mundo"] 
    el resultado sería [{ hola: 4 }, { mundo: 5 }], y finalmente imprime el resultado en la terminal. 
    Para este ejercicio, puedes hacer uso del método map para Arrays y el método length para Strings. 
*/

function G_50words_Object_PropertiLength(){

    let words = generate(50)

    let ObjectLenght = words.map(word => {
        let obj = {}
        obj[word] = word.length
        return obj;
    })

    console.log(ObjectLenght)
}

// G_50words_Object_PropertiLength()

/**
    Ejercicio 17
    Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad)
    y el valor sería la cantidad de letras que tiene la palabra, pero esta vez, 
    solo vamos a regresar las palabras que tengan 6 letras o más, 
    y finalmente imprime el resultado en la terminal. 
    Para este ejercicio, puedes hacer uso del método filter para Arrays y el método length para Strings.
*/

function G_50words_Object_Lenght6(){

    let words = generate(50)

    const filter = words.filter((word) => word.length >= 6);

    let ObjectLenght = filter.map(word => {
        let obj = {}
        obj[word] = word.length
        return obj;
    })

    console.log(ObjectLenght)
}

// G_50words_Object_Lenght6()

/**
    Ejercicio 18
    Genera 50 palabras aleatorias, vamos a regresar un array que contenga la misma cantidad de palabras (50), 
    solamente que si la palabra tiene 4 letras exactamente, cambiaremos la palabra por "HOLA", si tiene más de 4 letras, 
    cambiaremos la palabra por "MUNDO", y, finalmente, si tiene menos de 4 letras, cambiaremos la palabra por "ADIOS", 
    y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método map para Arrays y un condicional. 
*/

function G_50words_filterArray(){
    let words = generate(50)

    let arrayFiltered = words.map(word => {
        if (word.length === 4){
            return ('HOLA')
        }
        else if (word.length > 4){
            return ('MUNDO')
        }
        else {
            return ('ADIOS')
        }
    });

    console.log(arrayFiltered)

}

// G_50words_filterArray()

/**
    Ejercicio 19
    Genera 50 palabras aleatorias, vamos a regresar un array que contenga la misma cantidad de palabras (50), 
    solamente que vamos a reemplazar dichas palabras por la cantidad de letras que estas contienen. 
    Por ejemplo, dado el siguiente array ["hola", "mundo"], el resultado sería [4, 5], 
    y finalmente imprime el resultado en la terminal. 
    Para este ejercicio, puedes hacer uso del método map para Arrays y el método length para Strings.
*/

function G_50words_ReplaceToLenght(){
    let words = generate(50)

    let arrayReplace = words.map(word => word.length)

    console.log(arrayReplace)

}
// G_50words_ReplaceToLenght()

/**
    Ejercicio 20
    Genera 50 palabras aleatorias, vamos a generar un objeto que contenga la cantidad de letras que tiene cada palabra, 
    y finalmente imprime el resultado en la terminal. 
    Por ejemplo, si la palabra es "hola", el resultado sería { hola: 4 }. 
    Para este ejercicio, puedes hacer uso del método reduce para Arrays.
*/

function G_50words_Object_Reduce() {
    let words = generate(50);

    let letterCountObject = words.reduce((acc, word) => {
        acc[word] = word.length;
        return acc;
    }, {});

    console.log(letterCountObject);
}

// G_50words_Object_Reduce();

const functionName = process.argv[2];

switch (functionName) {
    case 'G_20words':
        G_20words();
        break;
    case 'G_20words_line':
        G_20words_line();
        break;
    case 'G_20words_filter_RnS':
        G_20words_filter_RnS();
        break;
    case 'G_20words_LSix':
        G_20words_LSix();
        break;
    case 'G_20words_Replace_a2Yes':
        G_20words_Replace_a2Yes();
        break;
    case 'G_20words_Replace_6toNo':
        G_20words_Replace_6toNo();
        break;
    case 'G_20words_orderAlphabet':
        G_20words_orderAlphabet();
        break;
    case 'G_20words_orderInverted':
        G_20words_orderInverted();
        break;
    case 'G_20words_Eliminate':
        G_20words_Eliminate();
        break;
    case 'G_50words_joinHola':
        G_50words_joinHola();
        break;
    case 'G_50words_joinUpper':
        G_50words_joinUpper();
        break;
    case 'G_50words_findArmy':
        G_50words_findArmy();
        break;
    case 'G_50words_join':
        G_50words_join();
        break;
    case 'G_50words_UpperJoin':
        G_50words_UpperJoin();
        break;
    case 'G_50words_Object_PropertiUpper':
        G_50words_Object_PropertiUpper();
        break;
    case 'G_50words_Object_PropertiLength':
        G_50words_Object_PropertiLength();
        break;
    case 'G_50words_Object_Lenght6':
        G_50words_Object_Lenght6();
        break;
    case 'G_50words_filterArray':
        G_50words_filterArray();
        break;
    case 'G_50words_ReplaceToLenght':
        G_50words_ReplaceToLenght();
        break;
    case 'G_50words_Object_Reduce':
        G_50words_Object_Reduce();
        break;
    default:
        console.log('Uso: node main.js <nombre_de_la_funcion>');
}
