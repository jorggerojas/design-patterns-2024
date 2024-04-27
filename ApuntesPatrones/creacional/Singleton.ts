interface Client {
    token: string;
    eta: number;
    type?: string;

}


class AuthServices {
    #client: Client;

    private static instance: AuthServices;
    private static authToken: String;

    private constructor(client: Client) {
        this.#client = client;
    }

    static getInstance(): AuthServices {
        if(!AuthServices.instance) {
            const client = {
                token: 'exakUyvap',
                eta: Date.now(),
            };
            AuthServices.instance = new AuthServices(client)
        }

        return AuthServices.instance;
    }

    static generateToken() {
        if(!AuthServices.instance){
            this.getInstance();
        }

        const { token } = AuthServices.instance.client;

        const generadorToken = (Math.random() + 1).toString(36).substring(3);

        const result =  `${token}/${generadorToken}`;

        AuthServices.authToken = result;

        return result;
            
    }

    get client(): Client {
        return this.#client;
    }
}

const instanceOne = AuthServices.getInstance();
const instanceTwo = AuthServices.getInstance();

console.log(instanceOne === instanceTwo);

const token = AuthServices.generateToken();

console.log({ token });