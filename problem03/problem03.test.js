/* problem03.test.js */
const sumExcludingMultiplesOfThreeAndFive = require("./problem03");

describe("problem03: sumExcludingMultiplesOfThreeAndFive", () => {
  test("1부터 5까지 => 7 (3과 5 제외)", () => {
    expect(sumExcludingMultiplesOfThreeAndFive(5)).toBe(7);
  });

  test("1부터 10까지 => 37 (3, 5, 6, 9, 10 제외)", () => {
    expect(sumExcludingMultiplesOfThreeAndFive(10)).toBe(37);
  });

  test("0까지 => 0", () => {
    expect(sumExcludingMultiplesOfThreeAndFive(0)).toBe(0);
  });

  test("1부터 15까지 => 60 (3, 5, 6, 9, 12, 15 제외)", () => {
    expect(sumExcludingMultiplesOfThreeAndFive(15)).toBe(60);
  });

  test("1부터 20까지 => 112 (3, 5, 6, 9, 12, 15, 18, 20 제외)", () => {
    expect(sumExcludingMultiplesOfThreeAndFive(20)).toBe(112);
  });
});
