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
var AuthService = /** @class */ (function () {
    function AuthService(client) {
        _AuthService_client.set(this, void 0);
        __classPrivateFieldSet(this, _AuthService_client, client, "f");
    }
    AuthService.getInstance = function () {
        if (!AuthService.instance) {
            var client = {
                token: 'xgfchvjbjknk',
                eta: Date.now(),
            };
            AuthService.instance = new AuthService(client);
        }
        return AuthService.instance;
    };
    AuthService.generateToken = function () {
        if (!AuthService.instance) {
            this.getInstance();
        }
        var token = AuthService.instance.client.token;
        var generatedToken = (Math.random() + 1).toString(36).substring(3);
        var result = "".concat(token, "/").concat(generatedToken);
        AuthService.authToken = result;
        return result;
    };
    Object.defineProperty(AuthService.prototype, "client", {
        get: function () {
            return __classPrivateFieldGet(this, _AuthService_client, "f");
        },
        enumerable: false,
        configurable: true
    });
    return AuthService;
}());
_AuthService_client = new WeakMap();
var instanceOne = AuthService.getInstance();
var instanceTwo = AuthService.getInstance();
console.log(instanceOne == instanceTwo);
var token = AuthService.generateToken();
console.log({ token: token });
