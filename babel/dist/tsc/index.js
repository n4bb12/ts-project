"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSettled = exports.logError = exports.Email = void 0;
class Email {
    constructor(recepients, subject, message) {
        this.recepients = recepients;
        this.subject = subject;
        this.message = message;
    }
}
exports.Email = Email;
// tsc and babel both transpile language features
function logError(error) {
    console.error((error === null || error === void 0 ? void 0 : error.message) || error);
}
exports.logError = logError;
// tsc doesn't polyfill built-ins
// babel (with preset-env) inserts a core-js polyfill
function allSettled(...promises) {
    return Promise.allSettled(promises);
}
exports.allSettled = allSettled;
