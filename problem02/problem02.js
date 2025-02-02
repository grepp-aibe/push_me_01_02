/* problem02.js */
/**
 * [문제2]
 * - `switch` 문을 사용하여 숫자가 양수, 음수, 또는 0인지 확인하는 함수를 작성하세요.
 * - 입력값이 숫자가 아닐 경우 "숫자가 아닙니다."를 반환합니다.
 * - 모든 조건을 확인한 후 최후에 `return`을 사용하세요.
 */
function checkNumber(num) {
  let result;

  switch (true) {
    case typeof num !== "number" || isNaN(num): // 🚨
      result = "숫자가 아닙니다.";
      break;
    case num > 0: // 🚨
      result = "양수입니다.";
      break;
    case num < 0: // 🚨
      result = "음수입니다.";
      break;
    case num === 0: // 🚨
      result = "0입니다.";
      break;
    default: // 🚨
      result = "알 수 없는 오류입니다.";
      break;
  }

  return result;
}
module.exports = checkNumber;
