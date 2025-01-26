/* problem01.test.js */
const grade = require("./problem01");

describe("problem01: grade", () => {
  test("100점 => A", () => {
    expect(grade(100)).toBe("A");
  });

  test("90점 => A", () => {
    expect(grade(90)).toBe("A");
  });

  test("85점 => B", () => {
    expect(grade(85)).toBe("B");
  });

  test("75점 => C", () => {
    expect(grade(75)).toBe("C");
  });

  test("음수 또는 100점 초과 => Invalid", () => {
    expect(grade(-10)).toBe("Invalid");
    expect(grade(110)).toBe("Invalid");
  });
});
