"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logError = logError;
exports.allSettled = allSettled;
exports.Email = void 0;

require("core-js/modules/es.promise.js");

class Email {
  constructor(recepients, subject, message) {
    this.recepients = recepients;
    this.subject = subject;
    this.message = message;
  }

} // tsc and babel both transpile language features


exports.Email = Email;

function logError(error) {
  console.error((error === null || error === void 0 ? void 0 : error.message) || error);
} // tsc doesn't polyfill built-ins
// babel (with preset-env) inserts a core-js polyfill


function allSettled(...promises) {
  return Promise.allSettled(promises);
}