class User{
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}

class Password{
    private password: string;
    
    constructor(password: string){
        this.password = password;
    }

    validatePassword(): boolean{
        return this.password.length > 7;
    }
}

class Email{
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    validateEmail(): boolean {
        // Validad la estructura del email
        return false;
    }
}