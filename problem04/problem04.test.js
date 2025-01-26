/* problem04.test.js */
const sumUpToTen = require("./problem04");

describe("problem04: sumUpToTen", () => {
  test("1부터 5까지의 합 => 15", () => {
    expect(sumUpToTen(5)).toBe(15);
  });

  test("1부터 10까지의 합 => 55", () => {
    expect(sumUpToTen(10)).toBe(55);
  });

  test("1부터 15까지의 합 (10까지 제한) => 55", () => {
    expect(sumUpToTen(15)).toBe(55);
  });

  test("0까지의 합 => 0", () => {
    expect(sumUpToTen(0)).toBe(0);
  });

  test("음수 => 0", () => {
    expect(sumUpToTen(-5)).toBe(0);
  });
});
