/* Las clases de alto nivel no deben depender de clases de bajo nivel,
 sino de interfaces o abstracciones. 
 Esto permite que los detalles de implementación cambien sin afectar a las clases de alto nivel. */
 interface IMessageService {
    sendMessage(message: string): void;
}

class EmailService implements IMessageService {
    public sendMessage(message: string): void {
        console.log("Sending email with message: " + message);
    }
}

class SMSService implements IMessageService {
    public sendMessage(message: string): void {
        console.log("Sending SMS with message: " + message);
    }
}

class NotificationX {
    private messageService: IMessageService;

    constructor(messageService: IMessageService) {
        this.messageService = messageService;
    }

    public notify(message: string): void {
        this.messageService.sendMessage(message);
    }
}

// Uso
const emailService = new EmailService();
const notification = new NotificationX(emailService);
notification.notify("Hello via Email!");

const smsService = new SMSService();
const smsNotification = new NotificationX(smsService);
smsNotification.notify("Hello via SMS!");
