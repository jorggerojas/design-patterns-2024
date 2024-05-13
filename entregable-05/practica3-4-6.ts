class Usuario {
    private nombre: string

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //6. utiliza getters y setters
    public set setNombre(nombre: string) {
        if(!this.nombre) {
            throw new Error('Nombre no valido')
        }

        this.nombre = nombre;
    }

    public get getNombre() {
        return this.nombre;
    }
}

//3. Crea una clase LIBRO
class Libro {
    titulo: string;
    autor: string;
    usuario: Usuario;

    constructor(titulo: string, autor: string, usuario: Usuario) {
        this.titulo = titulo;
        this.autor = autor;
        this.usuario = usuario;
    }

    detalles() {
        console.log(this.titulo.toUpperCase(), ", ", this.autor);
    }

    //4. Agregar métodos
    historial: string[] = [];

    prestamo(historial: Persona, usuario: Persona) {
        this.historial.push(this.usuario.getNombre);
    }

    devolucion(historial: Persona, usuario: Persona) {
        const index = this.historial.indexOf(this.usuario.getNombre);
        this.historial.splice(index, 1);
    }
    
}