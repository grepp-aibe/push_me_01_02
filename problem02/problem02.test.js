/* problem02.test.js */
const checkNumber = require("./problem02");

describe("problem02: checkNumber", () => {
  test("양수 => '양수입니다.'", () => {
    expect(checkNumber(10)).toBe("양수입니다.");
    expect(checkNumber(1)).toBe("양수입니다.");
  });

  test("음수 => '음수입니다.'", () => {
    expect(checkNumber(-5)).toBe("음수입니다.");
    expect(checkNumber(-1)).toBe("음수입니다.");
  });

  test("0 => '0입니다.'", () => {
    expect(checkNumber(0)).toBe("0입니다.");
  });

  test("숫자가 아닌 경우 => '숫자가 아닙니다.'", () => {
    expect(checkNumber("string")).toBe("숫자가 아닙니다.");
    expect(checkNumber(undefined)).toBe("숫자가 아닙니다.");
  });

  test("NaN => '숫자가 아닙니다.'", () => {
    expect(checkNumber(NaN)).toBe("숫자가 아닙니다.");
  });
});
