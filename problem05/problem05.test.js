/* problem05.test.js */
const sumOfSmallProducts = require("./problem05");

describe("problem05: sumOfSmallProducts", () => {
  test("1부터 2까지 => (1*1 + 1*2 + 2*1 + 2*2) => 10", () => {
    expect(sumOfSmallProducts(2)).toBe(10);
  });

  test("1부터 3까지 => (모든 i*j <= 10인 경우 합산) => 36", () => {
    expect(sumOfSmallProducts(3)).toBe(36);
  });

  test("1부터 4까지 => (모든 i*j <= 10인 경우 합산) => 100", () => {
    expect(sumOfSmallProducts(4)).toBe(100);
  });

  test("1부터 1까지 => (1*1) => 1", () => {
    expect(sumOfSmallProducts(1)).toBe(1);
  });

  test("0까지 => 0", () => {
    expect(sumOfSmallProducts(0)).toBe(0);
  });
});
