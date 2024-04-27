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
var _AuthServices_client;
class AuthServices {
    constructor(client) {
        _AuthServices_client.set(this, void 0);
        __classPrivateFieldSet(this, _AuthServices_client, client, "f");
    }
    static getInstance() {
        if (!AuthServices.instance) {
            const client = {
                token: 'exakUyvap',
                eta: Date.now(),
            };
            AuthServices.instance = new AuthServices(client);
        }
        return AuthServices.instance;
    }
    static generateToken() {
        if (!AuthServices.instance) {
            this.getInstance();
        }
        const { token } = AuthServices.instance.client;
        const generadorToken = (Math.random() + 1).toString(36).substring(3);
        const result = `${token}/${generadorToken}`;
        AuthServices.authToken = result;
        return result;
    }
    get client() {
        return __classPrivateFieldGet(this, _AuthServices_client, "f");
    }
}
_AuthServices_client = new WeakMap();
const instanceOne = AuthServices.getInstance();
const instanceTwo = AuthServices.getInstance();
console.log(instanceOne === instanceTwo);
const token = AuthServices.generateToken();
console.log({ token });
