interface Client {
    token: String;
    eta: number;
    type?: string;
}

class AuthService{
    #client: Client;

    private static instance: AuthService;
    private static authToken: String;

    private constructor(client: Client) {
        this.#client = client;
    }

    static getInstance(): AuthService {
        if(!AuthService.instance){
            const client = {
                token: 'exakSUyvap',
                eta: Date.now(),
            };
            AuthService.instance = new AuthService(client);
        }
        
        return AuthService.instance;
    }

    static generatorToken(){
        if(!AuthService.instance){
            this.getInstance();
        }
        const generatedToken =  (Math.random() + 1).toString(36).substring(3);

        const result = `$(token)/${generatedToken}`;

        AuthService.authToken = result;

        return result;
    }

    get client(): Client{
        return this.#client;
    }

}

const instanceOne = AuthService.getInstance();
const instanceTwo = AuthService.getInstance();

console.log(instanceOne === instanceTwo);

const token = AuthService.generatorToken();

console.log({token});