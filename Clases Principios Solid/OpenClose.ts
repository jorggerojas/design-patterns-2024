interface Notificacion {
    titulo: string;
    contenido: string;
    enviar(): void;
}

class NotificacionEmail implements Notificacion {
    constructor(public titulo: string, public contenido: string, public destinatario: string) {}
  
    enviar(): void {
      console.log(`Enviando email a ${this.destinatario}: ${this.titulo} - ${this.contenido}`);
    }
  }
  
  class NotificacionSMS implements Notificacion {
    constructor(public titulo: string, public contenido: string, public numeroTelefono: string) {}
  
    enviar(): void {
      console.log(`Enviando SMS a ${this.numeroTelefono}: ${this.titulo} - ${this.contenido}`);
    }
  }

  class NotificacionPush implements Notificacion {
    constructor(public titulo: string, public contenido: string, public tokenDispositivo: string) {}
  
    enviar(): void {
      console.log(`Enviando notificación push a ${this.tokenDispositivo}: ${this.titulo} - ${this.contenido}`);
    }
  }

const notificacionEmail = new NotificacionEmail("Alerta", "Ejemplo alerta", "usuario@ejemplo.com");
const notificacionSMS = new NotificacionSMS("Aviso", "Ejemplo Aviso", "+521234567890");
const notificacionPush = new NotificacionPush("Recordatorio", "Ejemplo Recordatorio", "123456789");

notificacionEmail.enviar();
notificacionSMS.enviar();
notificacionPush.enviar();

  
  