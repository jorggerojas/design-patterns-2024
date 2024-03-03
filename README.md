# design-patterns-2024

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
