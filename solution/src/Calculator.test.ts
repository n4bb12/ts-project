import { Calculator } from "./Calculator"

describe("Calculator", () => {
  it("adds numbers correclty", () => {
    expect(new Calculator().add(1, 2)).toBe(3)
  })
})
