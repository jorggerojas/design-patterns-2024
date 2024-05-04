"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AuthService_client;
class AuthService {
    constructor(client) {
        _AuthService_client.set(this, void 0);
        __classPrivateFieldSet(this, _AuthService_client, client, "f");
    }
    static getInstance() {
        if (!AuthService.instance) {
            const client = {
                token: "exakSuyvap",
                eta: Date.now(),
            };
            AuthService.instance = new AuthService(client);
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
        AuthService.authtoken = result;
        return result;
    }
    get client() {
        return __classPrivateFieldGet(this, _AuthService_client, "f");
    }
}
_AuthService_client = new WeakMap();
const instanceOne = AuthService.getInstance();
const instanceTwo = AuthService.getInstance();
console.log(instanceOne === instanceTwo);
const token = AuthService.generateToken();
console.log({ token });
