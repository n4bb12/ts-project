"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("../src/Calculator");
describe("Calculator", () => {
    it("adds numbers correclty", () => {
        expect(new Calculator_1.Calculator().add(1, 2)).toBe(3);
    });
});
