/*O-Open/Closed Principle
 * Una clase debe estar abierta a la extensión de la misma pero cerrada a su modificación, quiere decir que a una clase se le debe poder añadir funciones sin modificar el código existente
 */

interface Notifications {
    message: 'Hola, esta es una notificación', 
    selectPlatform(): void,
}

class Email implements Notifications {
    message: "Hola, esta es una notificación";
    selectPlatform(): void {
        console.log('Enviando a email.')
    }

    public userEmail: string; //extiende de la interface de notificaciones el tener un email
    constructor(userEmail: string) {
        this.userEmail = userEmail;
    }
    
}

class SMS implements Notifications {
    message: "Hola, esta es una notificación";
    selectPlatform(): void {
        console.log('Sending to SMS')
    }

    public cellphone: number; //Extiende de notificaciones la clase SMS para contener un número
    constructor (cellphone: number) {
        this.cellphone = cellphone;
    }

}