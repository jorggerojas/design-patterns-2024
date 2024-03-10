# design-patterns-2024

## Clases

### Clase 1

<details>
  <summary>
    Click para ver más
  </summary>

## Herramientas

- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) * (Opcional pero recomendado)
- [GitHub](https://github.com)

## Instalación `javascripting`

Ya debes de tener instalado Node.js, si no es así, puedes descargarlo desde [aquí](https://nodejs.org/es/).

Dentro de una terminal (externa o la integrada de Visual Studio Code) ejecuta el siguiente comando para instalar `javascripting`

```bash
npm install --global javascripting
```

## Uso

Para iniciar el tutorial, ejecuta el siguiente comando en la terminal:

```bash
npx javascripting
```

Seleccionar el ejercicio que se desea realizar y seguir las instrucciones.

## ¿Problemas?

### (Windows) La ejecución de scripts está deshabilitada en este sistema

Si al ejecutar el comando `npx javascripting` te aparece el siguiente error:

```bash
La ejecución de scripts está deshabilitada en este sistema. Para obtener más información, consulta el about_Execution_Policies en https:/go.microsoft.com/fwlink/?LinkID=135170.
```

Debes de ejecutar el siguiente comando en la terminal con permisos de administrador:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Y luego ejecutar el comando `npx javascripting` nuevamente.

Referencias:

- [La ejecución de scripts está deshabilitada en este sistema](https://go.microsoft.com/fwlink/?LinkID=135170)
- [cdmon | Cómo actuar si la ejecución de scripts está deshabilitada](https://www.cdmon.com/es/blog/la-ejecucion-de-scripts-esta-deshabilitada-en-este-sistema-te-contamos-como-actuar)

# Git

## Configuración

Ya debes de tener instalado Git, si no es así, puedes descargarlo desde [aquí](https://git-scm.com/).

Dentro de una terminal (externa o la integrada de Visual Studio Code) ejecuta los siguientes comandos para configurar tu nombre de usuario y correo electrónico:

```bash
git config --global user.name "TU_NOMBRE"
git config --global user.email "TU_CORREO_ELECTRONICO"
```

Ten en cuenta que debes de reemplazar `TU_NOMBRE` y `TU_CORREO_ELECTRONICO` por tu nombre y correo electrónico respectivamente.
Procura que el correo electrónico sea el mismo que usas en tu cuenta de GitHub.
En caso de que no tengas una cuenta de GitHub, puedes crear una desde [aquí](github.com).

Referencias:

- [Configurando Git por primera vez](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez)

## Clonar el repositorio

Para clonar el [repositorio](https://github.com/jorggerojas/design-patterns-2024), ejecuta el siguiente comando en la terminal:

```bash
git clone https://github.com/jorggerojas/design-patterns-2024.git
```

## Actualizar el repositorio

Para actualizar el repositorio y obtener los cambios más recientes, ejecuta el siguiente comando en la terminal:

```bash
git pull origin [branch]
```

Ten en cuenta que debes de reemplazar `[branch]` por el nombre de la rama que deseas actualizar. Por defecto, la rama principal se llama `main`.

## Crear una rama

Vamos a crear una rama (branch) para trabajar en ella y no en la rama principal (main). Esta rama tendrá que ir con tu nombre y apellido separados por guión(es) medio(s).
Por ejemplo, si tu nombre es Juan Pérez, la rama se llamará `juan-perez`. Por favor, respeta las ramas que ya existen, en caso de que ya exista una rama con tu nombre, puedes agregar tu segundo apellido o nombre.
Para crear una rama, ejecuta el siguiente comando en la terminal:

```bash
git checkout -b NOMBRE_DE_LA_RAMA
```

Ten en cuenta que debes de reemplazar `NOMBRE_DE_LA_RAMA` por el nombre de la rama que deseas crear.
Recordemos que `checkout` nos permite movernos entre ramas y `checkout -b` nos permite crear una rama y movernos a ella. Un ejemplo, si queremos ir de la rama `main` a la rama `juan-perez`, ejecutamos el siguiente comando:

```bash
git checkout juan-perez
```

Nota que no se usa el `-b` para movernos a una rama existente, ya que este comando es para CREAR una rama y movernos a ella.

## Publicar la rama local en el repositorio remoto

Para publicar la rama en el repositorio remoto (GitHub), ejecuta el siguiente comando en la terminal:

```bash
git push origin NOMBRE_DE_LA_RAMA
```

## Subir cambios

Una vez que hayas terminado de hacer cambios (agregar tus ejercicios resueltos de javascripting), ejecuta los siguientes comandos en la terminal:

```bash
git add .
git commit -m "Mensaje descriptivo de los cambios realizados"
git push origin NOMBRE_DE_LA_RAMA
```

Nota, el comando `git add .` agrega todos los cambios realizados, el comando `git commit -m "Mensaje descriptivo de los cambios realizados"` guarda los cambios realizados y el comando `git push origin NOMBRE_DE_LA_RAMA` sube los cambios al repositorio remoto (GitHub). Con este comando todos los cambios realizados en la rama `NOMBRE_DE_LA_RAMA` se subirán al repositorio remoto bajo el mismo mensaje añadido.

Si solo queremos subir un archivo específico, podemos hacerlo de la siguiente manera:

```bash
git add NOMBRE_DEL_ARCHIVO
git commit -m "Mensaje descriptivo de los cambios realizados"
git push origin NOMBRE_DE_LA_RAMA
```

Ten en cuenta que debes de reemplazar `NOMBRE_DEL_ARCHIVO` por el nombre del archivo que deseas subir.
Con estos comandos, tus cambios se subirán al repositorio remoto (GitHub) y estarán disponibles para que los demás puedan verlos.
  
</details>

### Clase 2

<details>
  <summary>Click para ver más</summary>

A este punto ya debemos tener todo instalado, además de tener pleno conocimiento de Javascript y ciertos comandos de Git. Vamos a seguir con el uso de tu rama personal (si no la has creado, por favor, hazlo, en la sección previa se explica cómo hacerlo).

#### Proyectos locales usando package.json

Vamos a crear un proyecto local usando `npm init` para crear un archivo `package.json` que nos permitirá tener un control de las dependencias que vamos a utilizar en el proyecto.

```bash
npm init -y
```

Usamos la bandera `-y` para que no nos pregunte nada (dejar valores por defecto) y así crear el archivo `package.json` de manera rápida.

Puedes mover la información que desees del archivo `package.json`, como el nombre del proyecto, la versión, la descripción, el autor, etc. Lo importante es que tengamos claras las secciones `scripts` y `dependencies`.

#### Dependencias

Vamos a instalar dependecias desde la terminal usando el comando `npm install` seguido del nombre de la dependencia que queremos instalar.
  
```bash
npm install <PAQUETE>
```

Usando este comando, el paquete se instalará en la carpeta `node_modules` y se añadirá al archivo `package.json` en la sección `dependencies`.

Existen dos tipos de dependencias: `dependencies` y `devDependencies`. Las primeras son las dependencias que se necesitan para que el proyecto funcione, mientras que las segundas son dependencias que solo se necesitan para el desarrollo del proyecto.

A este punto podremos notar que se ha creado un archivo `package-lock.json`, este archivo es creado automáticamente por `npm` y se encarga de guardar la información de las dependencias que se instalan en el proyecto.

Si queremos hacer un commit de los cambios realizados a este punto, primero crea un archivo `.gitignore` y añade la carpeta `node_modules` para que no se suba al repositorio remoto (GitHub). Esto es para evitar subir archivos innecesarios y que el repositorio sea más ligero.

#### .gitignore

El archivo `.gitignore` nos permite ignorar archivos o carpetas que no queremos subir al repositorio remoto (GitHub). Crea el archivo `.gitignore` y añade la carpeta `node_modules`, de esta manera, no se subirá al repositorio remoto.

```bash
# .gitignore
node_modules

# También puedes añadir otros archivos o carpetas que no quieras subir al repositorio remoto
package-lock.json

pruebas.txt

# O incluso puedes añadir archivos o carpetas que no quieras subir al repositorio remoto usando comodines
*.log
*.env
.env*
```

#### Scripts

En la sección `scripts` del archivo `package.json` podemos añadir comandos que nos permitirán ejecutar tareas específicas. Por ejemplo, si queremos ejecutar un servidor local, podemos añadir el siguiente comando:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

De esta manera, si ejecutamos el comando `npm start` en la terminal, se ejecutará el comando `node index.js` y se iniciará el servidor local.

#### Agregar scripts personalizados

Podemos añadir scripts personalizados en la sección `scripts` del archivo `package.json`. Por ejemplo, si queremos añadir un script que ejecute una impresión en la terminal, podemos añadir el siguiente comando:

```json
{
  "scripts": {
    "saludo": "echo Hola, mundo!"
  }
}
```

De esta manera, si ejecutamos el comando `npm run saludo` en la terminal, se ejecutará el comando `echo Hola, mundo!` y se imprimirá `Hola, mundo!` en la terminal.

¿Por qué para ejecutar el script personalizado usamos `npm run` y no `npm`? La razón es que `npm run` es el comando que nos permite ejecutar scripts personalizados, mientras que `npm` es el comando que nos permite ejecutar los scripts que vienen por defecto en la sección `scripts` del archivo `package.json`, en este caso, `start` o `test`.

#### Instalar `random-words` e importar paquete

Vamos a instalar el paquete [`random-words`](https://www.npmjs.com/package/random-words?activeTab=readme) usando el comando `npm install` seguido del nombre del paquete.

```bash
npm install random-words
```

Una vez instalado el paquete, vamos a importarlo en el archivo `index.js` o `main.js` y a usarlo para imprimir una palabra aleatoria en la terminal.

```javascript
import {generate} from 'random-words';

console.log(generate(1));
```

Desde el package.json, podemos añadir un script que ejecute el archivo `index.js` usando `node`:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

De esta manera, si ejecutamos el comando `npm start` en la terminal, se ejecutará el archivo `index.js` y se imprimirá una palabra aleatoria en la terminal.

#### Posible error al importar paquete

Al momento de importar el paquete `random-words` y ejecutar el comando `npm start`, es posible que nos aparezca un error en la terminal. Esto se debe a que necesitamos especificar desde package.json que estamos usando módulos de ECMAScript.

Para solucionar este error, añadimos la siguiente línea en la sección `type` del archivo `package.json`:

```json
{
  "type": "module"
}
```

#### Entregable 2

Para el entregable 2, vamos a crear un proyecto local usando `npm init`, vamos a instalar el paquete `random-words` y vamos a importarlo en el archivo `index.js` o `main.js` para imprimir palabras aleatoria en la terminal, además de trabajar con `package.json` y `scripts`.

##### Instrucciones

- Para cada ejercicio debes de crear un script en el archivo `package.json` que ejecute el archivo `index.js` o `main.js` usando `node`.
- No puedes usar ningún comando con "start" o "test" en el archivo `package.json`.
- Debes de subir tus cambios a tu rama personal, si quieres, puedes crear una carpeta para añadir los cambios que sean necesarios.

##### Entregable

Puedes hacer uso del mismo paquete o de los métodos ya vistos en clase.
[random-words](https://www.npmjs.com/package/random-words?activeTab=readme)

1. Genera 20 palabras aleatorias e imprímelas en la terminal.
2. Genera 20 palabras aleatorias e imprímelas en la terminal, pero esta vez, cada palabra debe de estar en una línea diferente. Puedes hacer uso del método para Arrays `forEach` o `map`. Aquí te dejo las referencia de ambos métodos:
   - [Array.prototype.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
   - [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

3. Genera 20 palabras aleatorias, filtra todas las palabras que tengan la letra "s" o la letra "r" y finalmente imprime el resultado en la terminal.
4. Genera 20 palabras aleatorias, filtra todas las palabras que tengan 6 letras o más y finalmente imprime el resultado en la terminal.
5. Genera 20 palabras aleatorias, reemplaza en todas las palabras que tengan la letra "a" por la palabra "YES" y finalmente imprime el resultado en la terminal. Por ejemplo, si la palabra es "casa", el resultado sería "cYESsYES", dado que la palabra "casa" tiene dos letras "a". Para este ejercicio, puedes hacer uso del método `replace` para Strings. Aquí te dejo la referencia del método:
   - [String.prototype.replace()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
6. Genera 20 palabras aleatorias, reemplaza todas las palabras que tengan 6 letras o más por la palabra "NO" y finalmente imprime el resultado en la terminal.
7. Genera 20 palabras aleatorias, ordena todas las palabras de manera alfabética y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `sort` para Arrays. Aquí te dejo la referencia del método:
   - [Array.prototype.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
8. Genera 20 palabras aleatorias, cambia el orden de las palbaras invirtiendo el orden, es decir, la primera palabra será la última y la última palabra será la primera, y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `reverse` para Arrays. Aquí te dejo la referencia del método:
   - [Array.prototype.reverse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
9. Genera 20 palabras aleatorias, elimina la primera y la última palabra, y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `shift` y `pop` para Arrays. Aquí te dejo la referencia de ambos métodos:
   - [Array.prototype.shift()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
   - [Array.prototype.pop()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
   - También puedes hacer uso del método `slice` para Arrays. Aquí te dejo la referencia del método:
     - [Array.prototype.slice()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   - Puedes hacer uso de cualquiera de los métodos mencionados, pero recuerda que el objetivo es eliminar la primera y la última palabra.

10. Genera 50 palabras aleatorias, añade al inicio y al final de todas las palabras la palabra "¡Hola!" y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `unshift` y `push` para Arrays. Aquí te dejo la referencia de ambos métodos:
    - [Array.prototype.unshift()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
    - [Array.prototype.push()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
    - También puedes hacer uso del método `concat` para Arrays. Aquí te dejo la referencia del método:
      - [Array.prototype.concat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    - Puedes hacer uso de cualquiera de los métodos mencionados, pero recuerda que el objetivo es añadir al inicio y al final de todas las palabras la palabra "¡Hola!".
11. Genera 50 palabras aleatorias, por cada pabra añadirás al array la misma palabra pero en mayúsuculas, y finalmente imprime el resultado en la terminal. Por ejemplo, dado el arreglo ["hola", "mundo"], el resultado sería ["hola", "HOLA", "mundo", "MUNDO"]. Para este ejercicio, puedes hacer uso del método `toUpperCase` para Strings. Aquí te dejo la referencia del método:
    - [String.prototype.toUpperCase()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
    - [Array.prototype.push()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
12. Genera 50 palabras aleatorias, vas a buscar la primer palabra que coincida con "army" y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `find` para Arrays. Aquí te dejo la referencia del método:
    - [Array.prototype.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
13. Genera 50 palabras aleatorias, vas a mostrar todas las palabras como un solo string separadas por un espacio, y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `join` para Arrays o template strings. Aquí te dejo la referencia del método:
    - [Array.prototype.join()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
14. Genera 50 palabras aleatorias, vas a mostrar todas las palabras como un solo string separadas por un espacio, pero esta vez, todas las palabras estarán en mayúsculas, y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `join` para Arrays y el método `toUpperCase` para Strings o template strings. Aquí te dejo la referencia del método:
    - [Array.prototype.join()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
    - [String.prototype.toUpperCase()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
15. Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad) y el valor sería la misma palabra pero en mayúscula. Por ejemplo, dado el array ["hola", "mundo"] el resultado sería [{ hola: "HOLA" }, { mundo: "MUNDO" }], y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `map` para Arrays y el método `toUpperCase` para Strings. Aquí te dejo la referencia de ambos métodos:
    - [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [String.prototype.toUpperCase()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

16. Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad) y el valor sería la cantidad de letras que tiene la palabra. Por ejemplo, dado el array ["hola", "mundo"] el resultado sería [{ hola: 4 }, { mundo: 5 }], y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `map` para Arrays y el método `length` para Strings. Aquí te dejo la referencia de ambos métodos:
    - [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [String.prototype.length](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length)
17. Genera 50 palabras aleatorias, vamos a regresar un array con un objeto que contenga la palabra como llave (propiedad) y el valor sería la cantidad de letras que tiene la palabra, pero esta vez, solo vamos a regresar las palabras que tengan 6 letras o más, y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `filter` para Arrays y el método `length` para Strings. Aquí te dejo la referencia de ambos métodos:
    - [Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - [String.prototype.length](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length)
18. Genera 50 palabras aleatorias, vamos a regresar un array que contenga la misma cantidad de palabras (50), solamente que si la palabra tiene 4 letras exactamente, cambiaremos la palabra por "HOLA", si tiene más de 4 letras, cambiaremos la palabra por "MUNDO", y, finalmente, si tiene menos de 4 letras, cambiaremos la palabra por "ADIOS", y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `map` para Arrays y un condicional. Aquí te dejo la referencia del método:
    - [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - Un ejemplo sería, dado el array ["pera", "manzana", "uva", "fresa", "kiwi"], el resultado sería ["HOLA", "MUNDO", "ADIOS", "MUNDO", "HOLA"].
19. Genera 50 palabras aleatorias, vamos a regresar un array que contenga la misma cantidad de palabras (50), solamente que vamos a reemplazar dichas palabras por la cantidad de letras que estas contienen. Por ejemplo, dado el siguiente array ["hola", "mundo"], el resultado sería [4, 5], y finalmente imprime el resultado en la terminal. Para este ejercicio, puedes hacer uso del método `map` para Arrays y el método `length` para Strings. Aquí te dejo la referencia de ambos métodos:
    - [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [String.prototype.length](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length)

20. Genera 50 palabras aleatorias, vamos a generar un objeto que contenga la cantidad de letras que tiene cada palabra, y finalmente imprime el resultado en la terminal. Por ejemplo, si la palabra es "hola", el resultado sería `{ hola: 4 }`. Para este ejercicio, puedes hacer uso del método `reduce` para Arrays. Aquí te dejo la referencia del método:
    - [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

#### Conflictos en tu rama personal

Algunos casos vimos que se presentaron conflictos al momento de hacer un `git pull` o `git push` en tu rama personal. Esto se debe a que hay cambios en la rama principal (main) que no están en tu rama personal, o viceversa. Para solucionar este problema, primero debes de hacer un `git pull` en tu rama personal para obtener los cambios más recientes de la rama principal (main), y luego hacer un `git push` en tu rama personal para subir los cambios a tu repositorio remoto (GitHub).

##### Git push --force

En caso de que no puedas hacer un `git push` en tu rama personal, puedes hacer un `git push --force` para sobreescribir los cambios en tu repositorio remoto (GitHub). Ten en cuenta que este comando sobreescribirá los cambios en tu repositorio remoto (GitHub) y no se podrá recuperar los cambios que se sobreescriban. ES UN COMANDO DESTUCTIVO, ÚSALO CON CUIDADO.

##### Resolución de conflictos

En caso de que se presenten conflictos al hacer un `git pull` en tu rama personal, debes de resolver los conflictos manualmente. Para resolver los conflictos, debes de abrir el archivo que tiene conflictos y buscar las secciones que tienen conflictos.
Las secciones que tienen conflictos están marcadas con `<<<<<<<`, `=======` y `>>>>>>>`. Debes de resolver los conflictos manualmente y luego hacer un `git add` y `git commit` para guardar los cambios o, mediante la UI de Visual Studio Code, puedes hacer clic en el botón `Accept` para aceptar los cambios.

Puedes hacer uso de la extensión [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) para Visual Studio Code, esta extensión te permite ver los cambios que se han hecho en el archivo y te permite resolver los conflictos de manera más sencilla.

Además de que, recuerda, en los conflictos, los cambios en local serán los que se muestren regualrmente en verde ">>>>>>" o "current change", mientras que los cambios en la rama remota serán los que se muestren en rojo o azul ">>>>>>" o "incoming change".

También puedes dejar ambos cambios, el tuyo y el de la rama remota, si es que ambos son necesarios.

</details>
