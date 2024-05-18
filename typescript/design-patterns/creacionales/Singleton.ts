/**
 * Utilizamos este patrón cuando el programa debe tener una sola instancia
 * de una clase. 
 * Esto se utiliza cuando se necesita llevar control estricto de 
 * variables globales.
 */

interface Client {
    token: string;
    eta: number;
    type?: string;
}

class AuthService {
    #client: Client;

    private static instance: AuthService;
    private static authToken: string;

    private constructor(client: Client) {
        this.#client = client;
    }

    static getInstance(): AuthService {
        if (!AuthService.instance){
            const client = {
                token: 'exakSUyvap',
                eta: Date.now(),
            };
            AuthService.instance = new AuthService(client)
        }

        return AuthService.instance;
    }

    static generateToken() {
        if (!AuthService.instance) {
            this.getInstance();
        }
        const { token } = AuthService.instance.client;

        const generatedToken = (Math.random() + 1).toString(36).substring(3);

        const result = `${token}/${generatedToken}`;

        AuthService.authToken = result;
        return result;
    }   

    get client (): Client {
        return this.#client;
    }

}

const instanceOne = AuthService.getInstance();
const instanceTwo = AuthService.getInstance();

console.log(instanceOne === instanceTwo);

const token = AuthService.generateToken();

console.log({ token });